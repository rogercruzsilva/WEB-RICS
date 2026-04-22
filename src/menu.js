// Script para menú desplegable en desktop y móvil

document.addEventListener('DOMContentLoaded', function () {
  var menuToggles = document.querySelectorAll('.menu-sistemas-toggle');
  menuToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      var submenu = this.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('hidden');
      }
    });
  });

  // Cerrar submenú al hacer clic fuera
  document.addEventListener('click', function(e) {
    menuToggles.forEach(function(toggle) {
      var submenu = toggle.nextElementSibling;
      if (submenu && !toggle.contains(e.target) && !submenu.contains(e.target)) {
        submenu.classList.add('hidden');
      }
    });
  });
});
