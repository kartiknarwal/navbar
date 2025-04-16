function toggleMenu(el) {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
    el.classList.toggle('active');
  }

  function toggleDropdown(event) {
    event.stopPropagation();

    // Close others if needed
    document.querySelectorAll('.dropdown').forEach(drop => {
      if (drop !== event.currentTarget) {
        drop.classList.remove('show');
      }
    });

    // Toggle current
    event.currentTarget.classList.toggle('show');
  }

  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown').forEach(drop => {
      drop.classList.remove('show');
    });
  });
