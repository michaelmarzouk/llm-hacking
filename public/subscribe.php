<?php
/**
 * Newsletter subscription endpoint.
 * Writes to ../data/newsletter.csv (outside web root, not publicly accessible).
 *
 * POST form-data : email
 * Returns JSON : {ok: bool, message: string}
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

// Reject non-POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

// --- Get and validate email ---
$email = trim((string)($_POST['email'] ?? ''));
if ($email === '' || strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Invalid email address']);
    exit;
}

// --- Honeypot (anti-spam : if filled, silently succeed without writing) ---
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true, 'message' => 'Subscribed']);
    exit;
}

// --- Rate-limit per IP (max 5 subs / 5 min) ---
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitDir = sys_get_temp_dir() . '/llm-hacking-rate';
if (!is_dir($rateLimitDir)) { @mkdir($rateLimitDir, 0700, true); }
$rateFile = $rateLimitDir . '/sub_' . md5($ip);
$now = time();
$attempts = [];
if (file_exists($rateFile)) {
    $attempts = array_filter(
        (array)json_decode((string)file_get_contents($rateFile), true),
        fn($t) => $t > $now - 300
    );
}
if (count($attempts) >= 5) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'message' => 'Too many attempts. Try again in 5 min.']);
    exit;
}
$attempts[] = $now;
@file_put_contents($rateFile, json_encode(array_values($attempts)), LOCK_EX);

// --- Write to private CSV ---
$dataDir = __DIR__ . '/../data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0750, true);
    // Belt-and-suspenders : if data/ ever ends up web-accessible, deny all.
    @file_put_contents($dataDir . '/.htaccess', "Require all denied\nDeny from all\n");
}
$csvFile = $dataDir . '/newsletter.csv';
$isNewFile = !file_exists($csvFile);

$row = [
    date('c'),                                        // ISO 8601 timestamp
    $email,
    $ip,
    substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 200),
    substr((string)($_SERVER['HTTP_REFERER'] ?? ''), 0, 200),
];

$fp = @fopen($csvFile, 'ab');
if (!$fp) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Storage error. Please try later.']);
    exit;
}
flock($fp, LOCK_EX);
if ($isNewFile) {
    fputcsv($fp, ['timestamp', 'email', 'ip', 'user_agent', 'referer']);
    @chmod($csvFile, 0640);
}
fputcsv($fp, $row);
flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['ok' => true, 'message' => 'Subscribed. Welcome to /var/log/hacks.']);
