// Make related-skill items clickable, navigating to the target skill's detail page.
// Slug rule: strip leading "/", replace ":" with "-".  e.g. /codex:rescue → codex-rescue.html
(function () {
  document.querySelectorAll('.related-item').forEach(function (item) {
    var code = item.querySelector('.related-code');
    if (!code) return;
    var slug = code.textContent.trim().replace(/^\//, '').replace(/:/g, '-');
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'link');
    item.addEventListener('click', function () {
      window.location.href = slug + '.html';
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = slug + '.html';
      }
    });
  });
}());
