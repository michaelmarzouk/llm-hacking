/**
 * UI translations for llm-hacking.com — 4 languages: en, fr, es, zh.
 * Articles content stays in English for now (translation pending).
 */

export const locales = ['en', 'fr', 'es', 'zh'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  zh: '中文',
};

export const localeFlags: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  zh: 'ZH',
};

type Dict = {
  meta: { siteDesc: string; };
  status: { live: string; lastScan: string; cves: string; };
  nav: { hacks: string; categories: string; about: string; login: string; search: string; };
  categories: { prompt: string; title: string; lead: string; hacks_count: string; all: string; back: string; empty: string; };
  hero: { prompt: string; tagline_p1: string; tagline_break: string; tagline_p2: string; lead_pre: string; lead_post: string; cta_primary: string; cta_ghost: string; mascot_suffix: string; };
  stats: { hacks: string; categories: string; sources: string; languages: string; };
  sections: { featured: string; recent: string; archive_link: string; all_link: string; };
  card: { read_more: string; };
  newsletter: { tag: string; title: string; lead: string; placeholder: string; submit: string; sending: string; ok: string; err: string; };
  footer: { tagline: string; explore: string; resources: string; follow: string; coming: string; copyright_pre: string; copyright_post: string; signoff: string; all_hacks: string; categories: string; research: string; defenses: string; rss: string; contribute: string; about: string; };
  search: { prompt: string; title: string; placeholder: string; indexed_suffix: string; no_results_title: string; no_results_alt_pre: string; no_results_alt_link: string; };
  contribute: { prompt: string; title: string; lead: string; name: string; email: string; email_hint: string; type: string; type_select: string; type_new: string; type_correction: string; type_translation: string; type_other: string; subj: string; subj_ph: string; details: string; details_hint: string; details_ph: string; submit: string; privacy_pre: string; privacy: string; reply_pre: string; reply: string; sending: string; };
  about: { prompt: string; title_pre: string; lead: string; h_why: string; why_p1: string; why_p2: string; h_editorial: string; editorial: string[]; h_contribute: string; contribute_p_pre: string; contribute_p_link: string; contribute_p_post: string; h_license: string; license_pre: string; license_link: string; license_post: string; };
  banner_translation_pending: string;
  back_to_hacks: string;
  page_not_yet_translated: string;
};

export const ui: Record<Locale, Dict> = {
  en: {
    meta: { siteDesc: 'Open database of LLM attacks, jailbreaks, and defenses. Updated daily.' },
    status: { live: 'system: OPERATIONAL', lastScan: 'last scan: 2h ago', cves: 'new CVEs this week' },
    nav: { hacks: 'Hacks', categories: 'Categories', about: 'About', login: '$ login', search: 'Search' },
    categories: { prompt: '> ls /hacks/by-category/', title: 'Categories', lead: 'Browse hacks by category. Numbers reflect documented entries.', hacks_count: 'hack(s)', all: 'All hacks', back: '← back to categories', empty: 'No hacks in this category yet.' },
    hero: { prompt: '> welcome to the underbelly', tagline_p1: 'Every known way to', tagline_break: 'break', tagline_p2: 'a Large Language Model.', lead_pre: 'Open database of', lead_post: 'documented LLM attacks. Jailbreaks, prompt injections, data extraction, adversarial inputs. Updated daily, sourced from arXiv and the wild.', cta_primary: '$ browse hacks', cta_ghost: 'What is this?', mascot_suffix: 'EXPLOITS DETECTED' },
    stats: { hacks: 'Hacks documented', categories: 'Categories', sources: 'Sources cited', languages: 'Languages' },
    sections: { featured: 'Featured hack', recent: 'Recent', archive_link: 'see archive', all_link: 'all hacks' },
    card: { read_more: 'Read full breakdown' },
    newsletter: { tag: '> subscribe to /var/log/hacks', title: 'One weekly digest of new attacks.', lead: 'Every Monday morning. Curated hacks, key papers, defense techniques. No spam, no clickbait. Unsubscribe in one click.', placeholder: 'your@email.com', submit: '$ subscribe', sending: 'sending…', ok: 'Subscribed. Welcome to /var/log/hacks.', err: 'Something went wrong' },
    footer: { tagline: 'Open database of LLM attacks, jailbreaks, and defenses. Built by researchers, for researchers.', explore: 'EXPLORE', resources: 'RESOURCES', follow: 'FOLLOW', coming: '(coming)', copyright_pre: '© 2026 llm-hacking.com — content under', copyright_post: '', signoff: '$ echo "stay curious, stay safe"', all_hacks: 'All hacks', categories: 'Categories', research: 'Research', defenses: 'Defenses', rss: 'RSS feed', contribute: 'Contribute', about: 'About' },
    search: { prompt: '> grep -r "query" /hacks/', title: 'Search', placeholder: 'Type a hack name, technique, model, keyword…', indexed_suffix: 'hacks indexed — type to search', no_results_title: 'No results.', no_results_alt_pre: 'Try a different keyword or', no_results_alt_link: 'browse all hacks' },
    contribute: { prompt: '> submit --new-hack', title: 'Contribute', lead: 'Spotted a new LLM attack? Found an error? Have a translation? Drop it below — we read every submission. Your message goes to our private editorial inbox. We never publish your email.', name: 'Your name', email: 'Email', email_hint: '(so we can reach back)', type: 'Type of submission', type_select: '— Select —', type_new: 'New hack to document', type_correction: 'Correction on existing entry', type_translation: 'Translation offered', type_other: 'Other', subj: 'Title / subject', subj_ph: "e.g. 'New jailbreak via base64 chained prompts'", details: 'Details', details_hint: '(min 20 chars)', details_ph: 'Describe the hack, share links to papers/PoCs, list affected models, suggest defenses…', submit: '$ submit contribution', privacy_pre: 'Privacy:', privacy: 'your email is stored in a private CSV on our server, accessible only to the editorial team. We never publish or share it.', reply_pre: 'Response:', reply: 'we reply within 7 days. Useful contributions get credited (if you want) on the published page.', sending: 'sending…' },
    about: { prompt: '> cat README.md', title_pre: 'About llm-hacking', lead: 'An open, community-curated database of every known way to break a Large Language Model. Jailbreaks, prompt injections, data extraction techniques, adversarial inputs, sleeper agents — all in one place, with reproducible examples and defenses.', h_why: 'Why?', why_p1: 'The LLM security space moves faster than any single research group can track. New attacks appear on arXiv, Twitter, and obscure Discord servers every week. Defenders need a consolidated view; researchers need a shared vocabulary.', why_p2: 'We collect, categorize, and document. Each entry has a reproducible example, affected models, defense strategies, and links to original sources.', h_editorial: 'Editorial line', editorial: ['Technical accuracy first — we cite sources, we test claims', 'No sensationalism — "scary AI" framing is forbidden', 'No gatekeeping — we explain, we don\'t lecture', 'Defense alongside attack — every offensive technique includes mitigation guidance'], h_contribute: 'Contribute', contribute_p_pre: 'Spotted a new hack? Found an error? Have a translation to share? Use the', contribute_p_link: 'contribution form', contribute_p_post: '— we read every submission.', h_license: 'License', license_pre: 'Content is published under', license_link: 'CC BY-SA 4.0', license_post: '.' },
    banner_translation_pending: 'This page is available in English only for now — translations are coming.',
    back_to_hacks: '← back to all hacks',
    page_not_yet_translated: 'Translation pending',
  },

  fr: {
    meta: { siteDesc: 'Base de données ouverte des attaques, jailbreaks et défenses sur les LLM. Mise à jour quotidiennement.' },
    status: { live: 'système : OPÉRATIONNEL', lastScan: 'dernier scan : il y a 2h', cves: 'nouvelles CVE cette semaine' },
    nav: { hacks: 'Hacks', categories: 'Catégories', about: 'À propos', login: '$ login', search: 'Recherche' },
    categories: { prompt: '> ls /hacks/by-category/', title: 'Catégories', lead: 'Parcourez les hacks par catégorie. Les chiffres reflètent les entrées documentées.', hacks_count: 'hack(s)', all: 'Tous les hacks', back: '← retour aux catégories', empty: 'Aucun hack dans cette catégorie pour l\'instant.' },
    hero: { prompt: '> bienvenue dans les bas-fonds', tagline_p1: 'Toutes les façons connues de', tagline_break: 'casser', tagline_p2: 'un Large Language Model.', lead_pre: 'Base de données ouverte de', lead_post: 'attaques LLM documentées. Jailbreaks, prompt injections, extraction de données, inputs adverses. Mise à jour quotidiennement, depuis arXiv et le terrain.', cta_primary: '$ explorer les hacks', cta_ghost: 'C\'est quoi ?', mascot_suffix: 'EXPLOITS DÉTECTÉS' },
    stats: { hacks: 'Hacks documentés', categories: 'Catégories', sources: 'Sources citées', languages: 'Langues' },
    sections: { featured: 'Hack à la une', recent: 'Récents', archive_link: 'voir les archives', all_link: 'tous les hacks' },
    card: { read_more: 'Lire l\'analyse complète' },
    newsletter: { tag: '> subscribe to /var/log/hacks', title: 'Une newsletter hebdo des nouvelles attaques.', lead: 'Chaque lundi matin. Hacks sélectionnés, papiers clés, techniques de défense. Pas de spam, pas de clickbait. Désinscription en un clic.', placeholder: 'votre@email.com', submit: '$ s\'abonner', sending: 'envoi…', ok: 'Abonné. Bienvenue sur /var/log/hacks.', err: 'Une erreur est survenue' },
    footer: { tagline: 'Base de données ouverte des attaques, jailbreaks et défenses sur les LLM. Faite par et pour les chercheurs.', explore: 'EXPLORER', resources: 'RESSOURCES', follow: 'SUIVRE', coming: '(bientôt)', copyright_pre: '© 2026 llm-hacking.com — contenu sous', copyright_post: '', signoff: '$ echo "reste curieux, reste safe"', all_hacks: 'Tous les hacks', categories: 'Catégories', research: 'Recherche', defenses: 'Défenses', rss: 'Flux RSS', contribute: 'Contribuer', about: 'À propos' },
    search: { prompt: '> grep -r "requête" /hacks/', title: 'Recherche', placeholder: 'Nom de hack, technique, modèle, mot-clé…', indexed_suffix: 'hacks indexés — tapez pour chercher', no_results_title: 'Aucun résultat.', no_results_alt_pre: 'Essaie un autre mot-clé ou', no_results_alt_link: 'parcours tous les hacks' },
    contribute: { prompt: '> submit --new-hack', title: 'Contribuer', lead: 'Une nouvelle attaque sur LLM ? Une erreur repérée ? Une traduction à proposer ? Envoie-la-nous ci-dessous — on lit tout. Ton message va dans notre boîte éditoriale privée. On ne publie jamais ton email.', name: 'Ton nom', email: 'Email', email_hint: '(pour qu\'on puisse te répondre)', type: 'Type de soumission', type_select: '— Sélectionne —', type_new: 'Nouveau hack à documenter', type_correction: 'Correction sur un article existant', type_translation: 'Traduction proposée', type_other: 'Autre', subj: 'Titre / objet', subj_ph: "ex : 'Nouveau jailbreak via prompts base64 chaînés'", details: 'Détails', details_hint: '(min 20 caractères)', details_ph: 'Décris le hack, partage des liens vers papiers/PoCs, liste les modèles affectés, propose des défenses…', submit: '$ envoyer la contribution', privacy_pre: 'Confidentialité :', privacy: 'ton email est stocké dans un CSV privé sur notre serveur, accessible uniquement à l\'équipe éditoriale. On ne le publie ni ne le partage jamais.', reply_pre: 'Réponse :', reply: 'on répond sous 7 jours. Les contributions utiles sont créditées (si tu veux) sur la page publiée.', sending: 'envoi…' },
    about: { prompt: '> cat README.md', title_pre: 'À propos de llm-hacking', lead: 'Une base de données ouverte, maintenue par la communauté, qui référence toutes les façons connues de casser un Large Language Model. Jailbreaks, prompt injections, extraction de données, inputs adverses, sleeper agents — tout au même endroit, avec exemples reproductibles et défenses.', h_why: 'Pourquoi ?', why_p1: 'Le domaine de la sécurité LLM va plus vite qu\'aucune équipe de recherche peut suivre. Des nouvelles attaques apparaissent sur arXiv, Twitter et des Discord obscurs chaque semaine. Les défenseurs ont besoin d\'une vue d\'ensemble ; les chercheurs ont besoin d\'un vocabulaire partagé.', why_p2: 'On collecte, on catégorise, on documente. Chaque entrée a un exemple reproductible, les modèles affectés, des stratégies de défense, et des liens vers les sources originales.', h_editorial: 'Ligne éditoriale', editorial: ['Rigueur technique d\'abord — on cite les sources, on teste les claims', 'Pas de sensationnalisme — le cadrage "IA effrayante" est interdit', 'Pas de gatekeeping — on explique, on ne fait pas la leçon', 'Défense en regard de l\'attaque — chaque technique offensive inclut des mitigations'], h_contribute: 'Contribuer', contribute_p_pre: 'Un nouveau hack ? Une erreur ? Une traduction à partager ? Utilise le', contribute_p_link: 'formulaire de contribution', contribute_p_post: '— on lit tout.', h_license: 'Licence', license_pre: 'Le contenu est publié sous', license_link: 'CC BY-SA 4.0', license_post: '.' },
    banner_translation_pending: 'Cette page est disponible en anglais uniquement pour l\'instant — les traductions arrivent.',
    back_to_hacks: '← retour à tous les hacks',
    page_not_yet_translated: 'Traduction en attente',
  },

  es: {
    meta: { siteDesc: 'Base de datos abierta de ataques, jailbreaks y defensas sobre LLM. Actualizada a diario.' },
    status: { live: 'sistema: OPERATIVO', lastScan: 'último scan: hace 2h', cves: 'nuevas CVE esta semana' },
    nav: { hacks: 'Hacks', categories: 'Categorías', about: 'Acerca de', login: '$ login', search: 'Buscar' },
    categories: { prompt: '> ls /hacks/by-category/', title: 'Categorías', lead: 'Explora los hacks por categoría. Los números reflejan las entradas documentadas.', hacks_count: 'hack(s)', all: 'Todos los hacks', back: '← volver a categorías', empty: 'Aún no hay hacks en esta categoría.' },
    hero: { prompt: '> bienvenido al lado oscuro', tagline_p1: 'Todas las formas conocidas de', tagline_break: 'romper', tagline_p2: 'un Large Language Model.', lead_pre: 'Base de datos abierta de', lead_post: 'ataques a LLM documentados. Jailbreaks, inyecciones de prompt, extracción de datos, entradas adversariales. Actualizada a diario, desde arXiv y el terreno.', cta_primary: '$ explorar hacks', cta_ghost: '¿Qué es esto?', mascot_suffix: 'EXPLOITS DETECTADOS' },
    stats: { hacks: 'Hacks documentados', categories: 'Categorías', sources: 'Fuentes citadas', languages: 'Idiomas' },
    sections: { featured: 'Hack destacado', recent: 'Recientes', archive_link: 'ver archivo', all_link: 'todos los hacks' },
    card: { read_more: 'Leer análisis completo' },
    newsletter: { tag: '> subscribe to /var/log/hacks', title: 'Un boletín semanal de nuevos ataques.', lead: 'Cada lunes por la mañana. Hacks seleccionados, papers clave, técnicas de defensa. Sin spam, sin clickbait. Te das de baja en un clic.', placeholder: 'tu@email.com', submit: '$ suscribirse', sending: 'enviando…', ok: 'Suscrito. Bienvenido a /var/log/hacks.', err: 'Ocurrió un error' },
    footer: { tagline: 'Base de datos abierta de ataques, jailbreaks y defensas sobre LLM. Hecha por y para investigadores.', explore: 'EXPLORAR', resources: 'RECURSOS', follow: 'SEGUIR', coming: '(próximamente)', copyright_pre: '© 2026 llm-hacking.com — contenido bajo', copyright_post: '', signoff: '$ echo "manténte curioso, manténte seguro"', all_hacks: 'Todos los hacks', categories: 'Categorías', research: 'Investigación', defenses: 'Defensas', rss: 'Feed RSS', contribute: 'Contribuir', about: 'Acerca de' },
    search: { prompt: '> grep -r "consulta" /hacks/', title: 'Buscar', placeholder: 'Nombre de hack, técnica, modelo, palabra clave…', indexed_suffix: 'hacks indexados — escribe para buscar', no_results_title: 'Sin resultados.', no_results_alt_pre: 'Prueba otra palabra clave o', no_results_alt_link: 'mira todos los hacks' },
    contribute: { prompt: '> submit --new-hack', title: 'Contribuir', lead: '¿Detectaste un nuevo ataque LLM? ¿Un error? ¿Una traducción? Mándanoslo abajo — lo leemos todo. Tu mensaje va a nuestra bandeja editorial privada. Nunca publicamos tu email.', name: 'Tu nombre', email: 'Email', email_hint: '(para poder responderte)', type: 'Tipo de envío', type_select: '— Selecciona —', type_new: 'Nuevo hack a documentar', type_correction: 'Corrección de una entrada existente', type_translation: 'Traducción ofrecida', type_other: 'Otro', subj: 'Título / asunto', subj_ph: "ej: 'Nuevo jailbreak vía prompts base64 encadenados'", details: 'Detalles', details_hint: '(mín 20 caracteres)', details_ph: 'Describe el hack, comparte enlaces a papers/PoCs, lista los modelos afectados, propón defensas…', submit: '$ enviar contribución', privacy_pre: 'Privacidad:', privacy: 'tu email se guarda en un CSV privado en nuestro servidor, accesible solo para el equipo editorial. Nunca lo publicamos ni compartimos.', reply_pre: 'Respuesta:', reply: 'respondemos en 7 días. Las contribuciones útiles se acreditan (si quieres) en la página publicada.', sending: 'enviando…' },
    about: { prompt: '> cat README.md', title_pre: 'Acerca de llm-hacking', lead: 'Una base de datos abierta, mantenida por la comunidad, de todas las formas conocidas de romper un Large Language Model. Jailbreaks, inyecciones de prompt, técnicas de extracción de datos, entradas adversariales, sleeper agents — todo en un solo lugar, con ejemplos reproducibles y defensas.', h_why: '¿Por qué?', why_p1: 'El campo de la seguridad LLM avanza más rápido que cualquier grupo de investigación puede seguir. Aparecen nuevos ataques en arXiv, Twitter y Discords oscuros cada semana. Los defensores necesitan una visión consolidada; los investigadores necesitan un vocabulario compartido.', why_p2: 'Recopilamos, categorizamos y documentamos. Cada entrada tiene un ejemplo reproducible, modelos afectados, estrategias de defensa y enlaces a las fuentes originales.', h_editorial: 'Línea editorial', editorial: ['Precisión técnica primero — citamos fuentes, probamos las afirmaciones', 'Sin sensacionalismo — el encuadre de "IA aterradora" está prohibido', 'Sin gatekeeping — explicamos, no damos lecciones', 'Defensa junto al ataque — cada técnica ofensiva incluye guía de mitigación'], h_contribute: 'Contribuir', contribute_p_pre: '¿Un nuevo hack? ¿Un error? ¿Una traducción que compartir? Usa el', contribute_p_link: 'formulario de contribución', contribute_p_post: '— lo leemos todo.', h_license: 'Licencia', license_pre: 'El contenido se publica bajo', license_link: 'CC BY-SA 4.0', license_post: '.' },
    banner_translation_pending: 'Esta página está solo en inglés por ahora — las traducciones están en camino.',
    back_to_hacks: '← volver a todos los hacks',
    page_not_yet_translated: 'Traducción pendiente',
  },

  zh: {
    meta: { siteDesc: 'LLM 攻击、越狱和防御的开放数据库。每日更新。' },
    status: { live: '系统：运行中', lastScan: '上次扫描：2小时前', cves: '本周新增 CVE' },
    nav: { hacks: '攻击', categories: '类别', about: '关于', login: '$ 登录', search: '搜索' },
    categories: { prompt: '> ls /hacks/by-category/', title: '类别', lead: '按类别浏览攻击。数字反映已记录的条目数。', hacks_count: '个攻击', all: '所有攻击', back: '← 返回类别', empty: '此类别暂无攻击。' },
    hero: { prompt: '> 欢迎来到地下世界', tagline_p1: '所有已知的方法来', tagline_break: '破解', tagline_p2: '大型语言模型。', lead_pre: '已记录的', lead_post: '个 LLM 攻击的开放数据库。越狱、提示注入、数据提取、对抗性输入。每日更新，来源于 arXiv 和现实世界。', cta_primary: '$ 浏览攻击', cta_ghost: '这是什么？', mascot_suffix: '个漏洞已发现' },
    stats: { hacks: '已记录的攻击', categories: '类别', sources: '引用来源', languages: '语言' },
    sections: { featured: '精选攻击', recent: '最近', archive_link: '查看归档', all_link: '所有攻击' },
    card: { read_more: '阅读完整分析' },
    newsletter: { tag: '> subscribe to /var/log/hacks', title: '每周新攻击文摘。', lead: '每周一早晨。精选攻击、关键论文、防御技术。无垃圾邮件、无标题党。一键退订。', placeholder: '你的@邮箱.com', submit: '$ 订阅', sending: '发送中…', ok: '已订阅。欢迎来到 /var/log/hacks。', err: '出现错误' },
    footer: { tagline: 'LLM 攻击、越狱和防御的开放数据库。由研究者为研究者打造。', explore: '探索', resources: '资源', follow: '关注', coming: '（即将推出）', copyright_pre: '© 2026 llm-hacking.com — 内容采用', copyright_post: '许可', signoff: '$ echo "保持好奇，保持安全"', all_hacks: '所有攻击', categories: '类别', research: '研究', defenses: '防御', rss: 'RSS 订阅', contribute: '贡献', about: '关于' },
    search: { prompt: '> grep -r "查询" /hacks/', title: '搜索', placeholder: '输入攻击名称、技术、模型、关键词…', indexed_suffix: '个已索引攻击 — 输入以搜索', no_results_title: '无结果。', no_results_alt_pre: '试试其他关键词或', no_results_alt_link: '浏览所有攻击' },
    contribute: { prompt: '> submit --new-hack', title: '贡献', lead: '发现新的 LLM 攻击？找到错误？想分享翻译？在下面提交 — 我们阅读每一份提交。你的消息会进入我们的私人编辑收件箱。我们绝不发布你的邮箱。', name: '你的名字', email: '邮箱', email_hint: '（以便我们回复）', type: '提交类型', type_select: '— 选择 —', type_new: '新攻击待记录', type_correction: '现有条目的修正', type_translation: '提供翻译', type_other: '其他', subj: '标题 / 主题', subj_ph: "例如：'通过 base64 链式提示的新越狱'", details: '详细信息', details_hint: '（至少20字符）', details_ph: '描述攻击，分享论文/PoC 链接，列出受影响模型，建议防御…', submit: '$ 提交贡献', privacy_pre: '隐私：', privacy: '你的邮箱储存在我们服务器上的私人 CSV 中，仅编辑团队可访问。我们绝不发布或分享。', reply_pre: '回复：', reply: '我们在7天内回复。有用的贡献会在已发布页面上获得署名（如果你愿意）。', sending: '发送中…' },
    about: { prompt: '> cat README.md', title_pre: '关于 llm-hacking', lead: '一个开放的、由社区维护的数据库，收录所有已知的破解大型语言模型的方法。越狱、提示注入、数据提取技术、对抗性输入、潜伏代理——全部集中在一处，附有可复现的示例和防御措施。', h_why: '为什么？', why_p1: 'LLM 安全领域的发展速度超过任何单一研究团队所能跟上的。每周都有新攻击出现在 arXiv、Twitter 和不为人知的 Discord 服务器上。防御者需要整合的视角；研究者需要共享的词汇。', why_p2: '我们收集、分类并记录。每个条目都有可复现示例、受影响模型、防御策略和原始来源链接。', h_editorial: '编辑准则', editorial: ['技术准确性优先——我们引用来源，验证主张', '无耸人听闻——禁止"可怕的 AI"叙事', '无门槛主义——我们解释，不说教', '防御与攻击并重——每项进攻技术都包含缓解指南'], h_contribute: '贡献', contribute_p_pre: '发现新攻击？找到错误？有翻译要分享？使用', contribute_p_link: '贡献表单', contribute_p_post: '——我们阅读每一份提交。', h_license: '许可', license_pre: '内容根据', license_link: 'CC BY-SA 4.0', license_post: '发布。' },
    banner_translation_pending: '此页面目前仅有英文版本——翻译即将推出。',
    back_to_hacks: '← 返回所有攻击',
    page_not_yet_translated: '翻译待补',
  },
};

export function t(locale: Locale): Dict {
  return ui[locale] ?? ui[defaultLocale];
}
