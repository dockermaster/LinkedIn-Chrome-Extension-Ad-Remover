(function () {
  'use strict';

  let foundCount = 0;
  const marked = new WeakSet();

  const badge = document.createElement('div');
  badge.id = 'll-ad-badge';
  badge.style.cssText = [
    'position:fixed',
    'top:16px',
    'right:16px',
    'z-index:2147483647',
    'background:#cc0000',
    'color:#fff',
    'font:600 13px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
    'padding:7px 14px',
    'border-radius:20px',
    'box-shadow:0 2px 8px rgba(0,0,0,.35)',
    'pointer-events:none',
  ].join(';');

  function ensureBadge() {
    if (!document.body.contains(badge)) {
      document.body.appendChild(badge);
    }
    badge.textContent = foundCount + ' ad' + (foundCount === 1 ? '' : 's') + ' removed';
  }

  function highlightPromotedPosts() {
    ensureBadge();
    document.querySelectorAll('[role="listitem"]').forEach(function (item) {
      if (marked.has(item)) return;
      if (!item.innerText.includes('\n\nPromoted')) return;

      marked.add(item);
      item.style.setProperty('display', 'none', 'important');
      foundCount++;
      ensureBadge();
    });
  }

  highlightPromotedPosts();

  var debounceTimer;
  var observer = new MutationObserver(function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(highlightPromotedPosts, 150);
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
