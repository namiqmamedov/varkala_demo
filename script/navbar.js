jQuery(document).ready(function ($) {
    $('.cd-dropdown-trigger').on('click', function (event) {
        event.preventDefault();
        var dataId = $(this).attr('data-id');
        toggleNav(dataId);
    });

    $('.cd-dropdown .cd-close').on('click', function (event) {
        event.preventDefault();
        toggleNav();
    });

    function toggleNav(dataId) {
        $('.cd-dropdown-wrapper').each(function () {
            var $dropdown = $(this);
            var isActive = $dropdown.hasClass('dropdown-is-active');
    
            if (!dataId || $dropdown.find('.cd-dropdown-trigger').attr('data-id') === dataId) {
                $dropdown.toggleClass('dropdown-is-active', !isActive);
                $dropdown.find('.cd-dropdown-trigger').toggleClass('dropdown-is-active', !isActive);
                $dropdown.find('.cd-dropdown').toggleClass('dropdown-is-active', !isActive);
            } else if (isActive) {
                
                $dropdown.removeClass('dropdown-is-active');
                $dropdown.find('.cd-dropdown-trigger').removeClass('dropdown-is-active');
                $dropdown.find('.cd-dropdown').removeClass('dropdown-is-active');
            }
        });
    }
    
});
    

