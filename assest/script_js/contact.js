
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

        document.addEventListener("DOMContentLoaded", function() {
            // Set up the Intersection Observer options
            const observerOptions = {
                root: null, // use the viewport
                rootMargin: '0px',
                threshold: 0.15 // trigger when 15% of the element is visible
            };

            // Create the observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    // If the element is in view
                    if (entry.isIntersecting) {
                        // Add the 'is-visible' class to trigger the CSS transition
                        entry.target.classList.add('is-visible');
                        // Unobserve so it only animates once
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select all elements with the 'gs-reveal' class and observe them
            const animatedElements = document.querySelectorAll('.gs-reveal');
            animatedElements.forEach(el => observer.observe(el));
        });