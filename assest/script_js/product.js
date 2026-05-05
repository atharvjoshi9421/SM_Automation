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
  
  function changeMainImage(button) {
            var newImageSrc = button.getAttribute('data-image');
            var mainImage = document.querySelector('.product-image-section img');
            mainImage.src = newImageSrc;
            
            // Remove active class from all buttons
            var buttons = document.querySelectorAll('.thumb-btn');
            buttons.forEach(function(btn) {
                btn.classList.remove('is-active');
            });
            
            // Add active class to clicked button
            button.classList.add('is-active');
        }