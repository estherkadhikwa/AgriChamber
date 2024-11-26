document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('show');
    });

    // Close the menu when a link is clicked
    mainNav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            mainNav.classList.remove('show');
        }
    });

    // Simple form validation for the search input
    const searchForm = document.querySelector('.search-container');
    const searchInput = searchForm.querySelector('input');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (searchInput.value.trim() === '') {
            alert('Please enter a search term');
        } else {
            // Perform search or redirect to search results page
            console.log('Searching for:', searchInput.value);
        }
    });
});

