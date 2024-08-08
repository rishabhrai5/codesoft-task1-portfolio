document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    // Check for user's theme preference in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      body.classList.add(currentTheme);
    }
  
    // Toggle between light and dark modes
    themeToggle.addEventListener('click', function () {
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
      } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      }
    });
  });
  