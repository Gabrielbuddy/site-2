// Navegação mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Fallback se Calendly não carregar
window.addEventListener('load', () => {
  const cal = document.querySelector('.calendly-inline-widget');
  setTimeout(() => {
    if (cal && !cal.firstElementChild){
      const warn = document.createElement('p');
      warn.style.color = '#b6bcc8';
      warn.style.marginTop = '12px';
      warn.innerHTML = 'Se a agenda não aparecer, <a href="https://calendly.com/SEU_USUARIO/20min" target="_blank" rel="noopener">clique aqui para abrir o Calendly</a>.';
      cal.parentNode.insertBefore(warn, cal.nextSibling);
    }
  }, 2500);
});
