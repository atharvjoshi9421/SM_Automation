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