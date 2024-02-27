document.addEventListener('DOMContentLoaded', function () {
    var navWrapper = document.querySelector('.nav-wrapper');

    function openNav(event) {
        // Check if the clicked element is a dropdown or a child of a dropdown
        var isForm = event.target.closest('.logout-form');
        var isNavLink = event.target.closest('a');

        // If it's a dropdown or a nav link, don't toggle the nav
        if (navWrapper.classList.contains('expanded') || isNavLink || isForm) {
            return;
        }

        navWrapper.classList.add('expanded');
        event.stopPropagation();
    }

    function closeNav(event) {
        var isDropdown = event.target.closest('.dropdown');
        var isForm = event.target.closest('.logout-form');
        var isNavLink = event.target.closest('a');

        if (isDropdown || isNavLink || isForm) {
            return;
        } else if ((event.target.closest('.nav-wrapper') || !event.target.closest('.nav-wrapper') && navWrapper.classList.contains('expanded'))) {
            navWrapper.classList.remove('expanded');
        }
    }

    document.querySelector('.nav-wrapper').addEventListener('click', function(event) {
        openNav(event, navWrapper);
    });
    document.addEventListener('click', function(event) {
        closeNav(event, navWrapper);
    });
});
