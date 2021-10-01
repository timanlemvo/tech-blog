document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
    // get the buttons in the nav menu
    const $navbarButtons = Array.prototype.slice.call(document.querySelectorAll('.navbar-item > .buttons > .button'), 0);
  
    $navbarButtons.forEach(el => {
      if (el.id === 'showLoginModal') {
        el.addEventListener('click', () => {
          document.querySelector("#loginModal").classList.toggle("is-active");  
        });
      }
      if (el.id === 'showRegisterModal') {
        el.addEventListener('click', () => {
          document.querySelector("#registerModal").classList.toggle("is-active");  
        });
      }
    });
  
  });