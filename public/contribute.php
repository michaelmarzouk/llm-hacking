<?php
/**
 * Contribution submission endpoint.
 * Writes to ../data/contributions.csv (outside web root).
 *
 * POST form-data : name, email, type, title, content
 * Returns JSON : {ok: bool, message: string}
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

// --- Honeypot ---
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true, 'message' => 'Submitted']);
    exit;
}

// --- Validate fields ---
$name    = trim((string)($_POST['name']    ?? ''));
$email   = trim((string)($_POST['email']   ?? ''));
$type    = trim((string)($_POST['type']    ?? ''));
$title   = trim((string)($_POST['title']   ?? ''));
$content = trim((string)($_POST['content'] ?? ''));

$errors = [];
if ($name === '' || strlen($name) > 100) $errors[] = 'name';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254) $errors[] = 'email';
$allowedTypes = ['new-hack', 'correction', 'translation', 'other'];
if (!in_array($type, $allowedTypes, true)) $errors[] = 'type';
if ($title === '' || strlen($title) > 200) $errors[] = 'title';
if ($content === '' || strlen($content) < 20 || strlen($content) > 10000) $errors[] = 'content';

if ($errors) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Invalid fields: ' . implode(', ', $errors)]);
    exit;
}

// --- Rate limit per IP ---
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitDir = sys_get_temp_dir() . '/llm-hacking-rate';
if (!is_dir($rateLimitDir)) { @mkdir($rateLimitDir, 0700, true); }
$rateFile = $rateLimitDir . '/contrib_' . md5($ip);
$now = time();
$attempts = [];
if (file_exists($rateFile)) {
    $attempts = array_filter(
        (array)json_decode((string)file_get_contents($rateFile), true),
        fn($t) => $t > $now - 3600
    );
}
if (count($attempts) >= 10) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'message' => 'Too many submissions. Try again in 1 hour.']);
    exit;
}
$attempts[] = $now;
@file_put_contents($rateFile, json_encode(array_values($attempts)), LOCK_EX);

// --- Write to private CSV ---
$dataDir = __DIR__ . '/../data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0750, true);
    @file_put_contents($dataDir . '/.htaccess', "Require all denied\nDeny from all\n");
}
$csvFile = $dataDir . '/contributions.csv';
$isNewFile = !file_exists($csvFile);

$row = [
    date('c'),
    $name,
    $email,
    $type,
    $title,
    $content,
    $ip,
    substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 200),
];

$fp = @fopen($csvFile, 'ab');
if (!$fp) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Storage error. Please try later.']);
    exit;
}
flock($fp, LOCK_EX);
if ($isNewFile) {
    fputcsv($fp, ['timestamp', 'name', 'email', 'type', 'title', 'content', 'ip', 'user_agent']);
    @chmod($csvFile, 0640);
}
fputcsv($fp, $row);
flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['ok' => true, 'message' => 'Thanks. We read every submission.']);
