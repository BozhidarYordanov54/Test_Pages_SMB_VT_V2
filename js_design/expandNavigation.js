document.addEventListener('DOMContentLoaded', function () {
    var navWrapper = document.querySelector('.nav-wrapper');
    var openArrow = document.querySelector('.fa-solid.fa-angles-right');

    function toggleNav(event) {
        if (window.innerWidth < 1200) {
            return;
        }
        
        if (navWrapper.classList.contains('opened')) {
            navWrapper.classList.remove('opened');
            openArrow.classList.remove('opened');
        } else {
            navWrapper.classList.add('opened');
            openArrow.classList.add('opened');
        }

        event.stopPropagation();
    }

    function expandNav(event, wrapper) {
        // Check if the clicked element is a dropdown or a child of a dropdown
        var isForm = event.target.closest('.logout-form');
        var isNavLink = event.target.closest('a');

        // If it's a dropdown or a nav link, don't toggle the nav
        if (wrapper.classList.contains('expanded') || isNavLink || isForm) {
            return;
        }

        wrapper.classList.add('expanded');
        event.stopPropagation();
    }

    function closeNav(event, wrapper) {
        var isDropdown = event.target.closest('.dropdown');
        var isForm = event.target.closest('.logout-form');
        var isNavLink = event.target.closest('a');

        if (isDropdown || isNavLink || isForm) {
            return;
        } else if ((event.target.closest('.nav-wrapper') || !event.target.closest('.nav-wrapper') && navWrapper.classList.contains('expanded'))) {
            wrapper.classList.remove('expanded');
        }
    }

    document.querySelector('.nav-wrapper').addEventListener('click', function(event) {
        expandNav(event, navWrapper);
    });
    document.addEventListener('click', function(event) {
        closeNav(event, navWrapper);
    });

    openArrow.addEventListener('click', function(event) {
        toggleNav(event);
    });
    
});
