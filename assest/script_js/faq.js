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