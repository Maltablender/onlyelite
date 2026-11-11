/* Bandeau cookies Only Elite — informatif et respectueux de la vie privée.
   Le site n'utilise QUE des cookies strictement nécessaires (paiement Stripe, sécurité).
   Aucun traceur publicitaire ni analytique : aucun cookie non essentiel n'est déposé.
   Conforme RGPD / ePrivacy (CNIL) : pas de dépôt de cookie non essentiel avant action. */
(function () {
  try {
    var KEY = 'oe_cookie_ack';
    if (localStorage.getItem(KEY) === '1') return;
  } catch (_) { /* stockage indisponible : on affiche quand même le bandeau */ }

  var css = '' +
    '.oe-ck{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;margin:0 auto;max-width:640px;' +
    'display:flex;gap:14px;align-items:center;flex-wrap:wrap;justify-content:center;' +
    'padding:14px 18px;border-radius:16px;border:1px solid rgba(233,196,106,.45);' +
    'background:rgba(16,14,11,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);' +
    'box-shadow:0 18px 50px rgba(0,0,0,.5);color:#efe7d6;font:400 13.5px/1.5 "Inter Tight",system-ui,sans-serif;' +
    'opacity:0;transform:translateY(14px);transition:opacity .4s ease,transform .4s ease}' +
    '.oe-ck.in{opacity:1;transform:translateY(0)}' +
    '.oe-ck p{margin:0;flex:1 1 300px;min-width:240px}' +
    '.oe-ck a{color:#e9c46a;text-decoration:underline;text-underline-offset:2px}' +
    '.oe-ck .oe-ck-ok{flex:none;cursor:pointer;border:0;border-radius:999px;padding:10px 20px;' +
    'font:600 13px "Inter Tight",system-ui,sans-serif;color:#1a1407;' +
    'background:linear-gradient(180deg,#f3d98a,#e9c46a 55%,#caa23f);box-shadow:0 8px 24px rgba(233,196,106,.35)}' +
    '.oe-ck .oe-ck-ok:hover{filter:brightness(1.05)}' +
    '@media (prefers-reduced-motion:reduce){.oe-ck{transition:none}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.className = 'oe-ck';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Information sur les cookies');
  bar.innerHTML =
    '<p>🍪 Ce site utilise uniquement des <b>cookies essentiels</b> (paiement sécurisé, sécurité). ' +
    'Aucun pistage publicitaire. <a href="confidentialite.html#cookies">En savoir plus</a>.</p>' +
    '<button type="button" class="oe-ck-ok">J’ai compris</button>';
  document.body.appendChild(bar);
  requestAnimationFrame(function () { bar.classList.add('in'); });

  bar.querySelector('.oe-ck-ok').addEventListener('click', function () {
    try { localStorage.setItem('oe_cookie_ack', '1'); } catch (_) {}
    bar.classList.remove('in');
    setTimeout(function () { bar.remove(); }, 400);
  });
})();
