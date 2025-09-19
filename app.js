// ano no rodapé
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// menu mobile
const btn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}
