// Navegação mobile (abre/fecha menu com classe .open)
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : ''; // evita scroll por trás
  });
  // se redimensionar para desktop, garante menu fechado
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980 && menu.classList.contains('open')){
      menu.classList.remove('open');
      document.body.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
