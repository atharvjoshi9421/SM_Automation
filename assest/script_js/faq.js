 // Function to load HTML components
  function loadComponent(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      });
  }

  // Execute on page load
  window.onload = function() {
    loadComponent('navbar-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
  };

 document.addEventListener('DOMContentLoaded', () => {
            // 1. Accordion Toggle Logic
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const currentItem = question.parentElement;
                    
                    // Optional: Close other open items when one is clicked
                    document.querySelectorAll('.faq-item').forEach(item => {
                        if (item !== currentItem) {
                            item.classList.remove('active');
                        }
                    });
                    
                    // Toggle the clicked item
                    currentItem.classList.toggle('active');
                });
            });

            // 2. Scroll Entrance Animation Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Add a slight delay based on the item's index to create a cascading effect
                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                        }, index * 100); 
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.gs-reveal');
            animatedElements.forEach(el => observer.observe(el));
        });

          const toggleBtn   = document.getElementById('mobileMenuToggle');
    const nav         = document.getElementById('mainNavigation');
    const overlay     = document.getElementById('navOverlay');
    const header      = document.getElementById('main-header');

    /* ---------- open / close sidebar ---------- */
    function openNav() {
        nav.classList.add('active');
        toggleBtn.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeNav() {
        nav.classList.remove('active');
        toggleBtn.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.contains('active') ? closeNav() : openNav();
    });

    /* Close when overlay (dark backdrop) is tapped */
    overlay.addEventListener('click', closeNav);

    /* ---------- mobile dropdown accordion ---------- */
    document.querySelectorAll('.has-dropdown > .nav-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            if (window.innerWidth > 1024) return; // desktop: let CSS hover handle it

            e.preventDefault();
            e.stopPropagation();

            var parentLi = this.closest('.has-dropdown');
            var dropdown = parentLi.querySelector('.dropdown-menu, .megamenu-panel');

            /* Close all OTHER open dropdowns */
            document.querySelectorAll('.has-dropdown.open').forEach(function (item) {
                if (item !== parentLi) {
                    item.classList.remove('open');
                    var d = item.querySelector('.dropdown-menu, .megamenu-panel');
                    if (d) d.classList.remove('open');
                }
            });

            /* Toggle this one */
            var isOpen = parentLi.classList.contains('open');
            parentLi.classList.toggle('open', !isOpen);
            if (dropdown) dropdown.classList.toggle('open', !isOpen);
        });
    });

    /* ---------- scrolled class on header ---------- */
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* ---------- close nav on resize to desktop ---------- */
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) closeNav();
    });

    /* =========================================
   FLOATING BUTTONS LOGIC
   ========================================= */
const backToTopBtn = document.getElementById('backToTop');

// Show/hide button based on scroll position (appears after 300px)
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Smooth scroll to top on click
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});