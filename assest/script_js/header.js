
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNavigation');
    
    // 1. MAIN SIDEBAR TOGGLE
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle the active class
            mainNav.classList.toggle('active');
            
            // Force the CSS directly inline to guarantee it moves
            if (mainNav.classList.contains('active')) {
                mainNav.style.setProperty('right', '0px', 'important');
            } else {
                mainNav.style.setProperty('right', '-100%', 'important');
            }
            
            // Animate hamburger icon
            const spans = menuToggle.getElementsByTagName('span');
            if (spans.length >= 3) {
                if (mainNav.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    }

    // 2. DROPDOWN ACCORDION TOGGLE
    const dropdownLinks = document.querySelectorAll('.has-dropdown > .nav-link');
    
    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Only run on mobile/tablet widths
            if (window.innerWidth <= 1024) {
                e.preventDefault(); 
                
                const dropdownMenu = this.nextElementSibling;
                
                if (dropdownMenu) {
                    // Check inline style first, then fallback to computed
                    const isClosed = dropdownMenu.style.display === 'none' || window.getComputedStyle(dropdownMenu).display === 'none';
                    
                    if (isClosed) {
                        dropdownMenu.style.setProperty('display', 'block', 'important');
                        this.style.color = '#0056b3';
                    } else {
                        dropdownMenu.style.setProperty('display', 'none', 'important');
                        this.style.color = '';
                    }
                }
            }
        });
    });
});
