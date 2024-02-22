document.addEventListener('DOMContentLoaded', function () {
    const userMenu = document.querySelector('.user-menu');
    const selectedUsername = document.getElementById('selected-username');
    const usernameDropdown = document.getElementById('username');
  
    usernameDropdown.addEventListener('change', function () {
      selectedUsername.textContent = this.value;
    });
  
    userMenu.addEventListener('click', function () {
      const dropdownContent = this.querySelector('.dropdown-content');
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
  
    document.addEventListener('click', function (event) {
      if (!userMenu.contains(event.target)) {
        const dropdownContent = userMenu.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
      }
    });
  });
  