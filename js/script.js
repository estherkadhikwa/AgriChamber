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

/* Member Directory */
function searchMembers() {
    let input = document.getElementById('search-input');
    let filter = input.value.toLowerCase();
    let members = document.getElementsByClassName('member');

    // Loop through all members and hide those who don't match the search query
    for (let i = 0; i < members.length; i++) {
        let name = members[i].getElementsByTagName('h3')[0];
        let company = members[i].getElementsByTagName('p')[0]; // Looking at the first <p> for company name
        let email = members[i].getElementsByTagName('p')[1]; // Looking at the second <p> for email
        let phone = members[i].getElementsByTagName('p')[2]; // Looking at the third <p> for phone number

        if (name || company || email || phone) {
            let nameText = name.textContent || name.innerText;
            let companyText = company.textContent || company.innerText;
            let emailText = email.textContent || email.innerText;
            let phoneText = phone.textContent || phone.innerText;

            if (nameText.toLowerCase().includes(filter) || 
                companyText.toLowerCase().includes(filter) || 
                emailText.toLowerCase().includes(filter) || 
                phoneText.toLowerCase().includes(filter)) {
                members[i].style.display = "";
            } else {
                members[i].style.display = "none";
            }
        }
    }
}

