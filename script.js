/**
 * ============================================================
 * BESITOS ESCONDIDOS — SCRIPT JS PRINCIPAL
 * JavaScript Vanilla 100% Local / Offline
 * Sin dependencias externas, librerías o conexiones a Internet.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ------------------------------------------------------------
     1. MENÚ DE NAVEGACIÓN MÓVIL (HAMBURGUESA)
  ------------------------------------------------------------ */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Cerrar el menú al hacer clic en cualquiera de los enlaces
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------
     2. SOMBRA DE LA BARRA DE NAVEGACIÓN AL HACER SCROLL
  ------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ------------------------------------------------------------
     3. SCROLL SPY: RESALTAR SECCIÓN ACTIVA EN LA NAVEGACIÓN
  ------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(function (current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector('.navbar__link[href*="' + sectionId + '"]');

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('is-active');
        } else {
          navItem.classList.remove('is-active');
        }
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* ------------------------------------------------------------
     4. ANIMACIONES SUTILES AL HACER SCROLL (INTERSECTION OBSERVER)
  ------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback si el navegador no tiene soporte
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ------------------------------------------------------------
     5. REPRODUCTOR DE VIDEO LOCAL (STORYTELLING)
     Si el video MP4 local aún no existe en ./assets/videos/,
     se muestra automáticamente el marcador "Próximamente".
  ------------------------------------------------------------ */
  const storyVideo = document.getElementById('storyVideo');
  const videoPlaceholder = document.getElementById('videoPlaceholder');

  if (storyVideo && videoPlaceholder) {
    storyVideo.addEventListener('error', function () {
      videoPlaceholder.style.display = 'flex';
      storyVideo.style.display = 'none';
    }, true);

    storyVideo.addEventListener('loadeddata', function () {
      videoPlaceholder.style.display = 'none';
      storyVideo.style.display = 'block';
    });

    // Verificación de respaldo tras carga inicial
    setTimeout(function () {
      if (storyVideo.readyState === 0 && !storyVideo.currentSrc) {
        videoPlaceholder.style.display = 'flex';
      }
    }, 600);
  }

  /* ------------------------------------------------------------
     6. FORMULARIO DE CONTACTO (100% LOCAL, SIN ENVÍO A SERVIDOR)
  ------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (event) {
      // Bloquea el envío a cualquier servidor externo
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Mostrar confirmación en pantalla
      formSuccess.hidden = false;
      contactForm.reset();

      // Ocultar la confirmación tras 6 segundos
      setTimeout(function () {
        formSuccess.hidden = true;
      }, 6000);
    });
  }

});
