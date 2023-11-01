  // Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }
  
  // Función para aplicar animaciones a los elementos cuando están en el viewport
  function applyAnimations() {
    const element1 = document.querySelector('.animated-element-1');
    const element2 = document.querySelector('.animated-element-2');
    const element3 = document.querySelector('.animated-element-3');
    const element4 = document.querySelector('.animated-element-4');
  
    if (isElementInViewport(element1)) {
      element1.classList.add('animate__jackInTheBox');
    }
  
    if (isElementInViewport(element2)) {
      element2.classList.add('animate__bounceIn');
    }
  
    if (isElementInViewport(element3)) {
      element3.classList.add('animate__rotateInUpRight');
    }
    if (isElementInViewport(element4)) {
      element4.classList.add('animate__tada');
    }
  }
  
  
  
  // Agregar un evento scroll para aplicar las animaciones cuando se desplace la página
  window.addEventListener('scroll', applyAnimations);
  
  // Aplicar las animaciones iniciales si los elementos están en el viewport al cargar la página
  window.addEventListener('load', applyAnimations);
  