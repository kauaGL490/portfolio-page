
//inicio alerta do clique
// script.js
function exibirAlerta() {
    alert("Você confirma querer entrar contato!");
}

// fim alerta do clique

// 1. Efeito de rolagem suave (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 2. Menu Responsivo (Mobile Menu Toggle)
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  
  // 3. Efeito de Hover para Imagens ou Cartões
  document.querySelectorAll('.skill .skill-box').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = '0.3s ease-in-out';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
  
  // 4. Animação de Scroll (Para Exibir Elementos Quando o Usuário Rolagem)
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight) && (rect.bottom >= 0);
  }
  
  function checkAnimation() {
    document.querySelectorAll('.animate').forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('fadeIn');
      }
    });
  }
  
  window.addEventListener('scroll', checkAnimation);
  checkAnimation();
  
  // 5. Modal de Imagem/Portfólio
  const portfolioImages = document.querySelectorAll('.portfolio .img1');
  
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = '<span class="close">&times;</span><img class="modal-content">';
  
  document.body.appendChild(modal);
  
  portfolioImages.forEach(image => {
    image.addEventListener('click', () => {
      const modalImg = modal.querySelector('.modal-content');
      modalImg.src = image.style.backgroundImage.slice(5, -2);
      modal.style.display = 'block';
    });
  });
  
  

  