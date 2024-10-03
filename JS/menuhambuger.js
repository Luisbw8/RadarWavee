document.addEventListener('DOMContentLoaded', function() {
    // Selecionando o ícone do menu e o menu em si
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');
  
    // Verifica se os elementos foram encontrados
    if (menuIcon && menu) {
      // Função para abrir/fechar o menu ao clicar no ícone hambúrguer
      menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
      });
  
      // Função para fechar o menu se o usuário clicar fora dele
      document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
          menu.classList.remove('active');
        }
      });
    }
  });
  