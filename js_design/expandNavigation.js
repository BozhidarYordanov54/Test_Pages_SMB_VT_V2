document.addEventListener('DOMContentLoaded', function () {
    var navWrapper = document.querySelector('.nav-wrapper');
    var profileSettingsNavWrapper = document.querySelector('.profile-settings-nav-wrapper');

    function openNav(event, wrapper) {
        // Check if the clicked element is a dropdown or a child of a dropdown
        var isForm = event.target.closest('.logout-form');
        var isNavLink = event.target.closest('a');

        // If it's a dropdown or a nav link, don't toggle the nav
        if (wrapper.classList.contains('expanded') || isNavLink || isForm) {
            return;
        }

        wrapper.classList.add('expanded');
        adjustPosition();
        event.stopPropagation();
    }

    function closeNav(event, wrapper) {
        var isDropdown = event.target.closest('.dropdown');
        var isForm = event.target.closest('.logout-form');
        var isNavLink = event.target.closest('a');

        if (isDropdown || isNavLink || isForm) {
            return;
        } else if ((event.target.closest('.nav-wrapper') || !event.target.closest('.nav-wrapper') && navWrapper.classList.contains('expanded')) || (event.target.closest('.profile-settings-nav-wrapper') || !event.target.closest('.profile-settings-nav-wrapper') && profileSettingsNavWrapper.classList.contains('expanded'))) {
            wrapper.classList.remove('expanded');
            adjustPosition();
        }
    }

    function adjustPosition() {
        const navExpanded = navWrapper.classList.contains('expanded');
        const profileExpanded = profileSettingsNavWrapper.classList.contains('expanded');
    
        if (navExpanded && profileExpanded) {
            profileSettingsNavWrapper.style.transform = 'translateX(45%)';
        } else if (navExpanded && !profileExpanded) {
            profileSettingsNavWrapper.style.transform = 'translateX(225%)';
        } else {
            profileSettingsNavWrapper.style.transform = 'translateX(0)';
        }
    }
    
    

    document.querySelector('.nav-wrapper').addEventListener('click', function(event) {
        openNav(event, navWrapper);
        adjustPosition();
    });
    document.querySelector('.profile-settings-nav-wrapper').addEventListener('click', function(event) {
        openNav(event, profileSettingsNavWrapper);
        
    });
    document.addEventListener('click', function(event) {
        closeNav(event, navWrapper);
        closeNav(event, profileSettingsNavWrapper);
        
    });
});
