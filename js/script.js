'use strict';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navegacion');
const mobile = window.matchMedia('(max-width: 700px)');
function syncNavigation() {
  menu.hidden = !mobile.matches;
  menu.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobile.matches;
}
syncNavigation();
mobile.addEventListener('change', syncNavigation);
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.hidden = expanded;
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobile.matches) {
    navigation.hidden = true;
    menu.setAttribute('aria-expanded', 'false');
    const section = document.querySelector(event.target.closest('a').hash);
    if (section) {
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
    }
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
    navigation.hidden = true;
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
document.querySelector('#copy-phone').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('956 709 549');
    status.textContent = 'Teléfono copiado: 956 709 549.';
  } catch {
    status.textContent = 'No se ha podido copiar automáticamente. Puedes seleccionar este número: 956 709 549.';
  }
});
