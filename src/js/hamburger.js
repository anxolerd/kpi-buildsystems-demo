/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <me.olexandr.kovalchuk@gmail.com> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.  Olexandr Kovalchuk
 * ----------------------------------------------------------------------------
 */

(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        "use strict";
        var hamburger = document.getElementById('c-hamburger');
        var shadow = document.getElementById('c-shadow-cover');
        var sideNav = document.getElementById('side-nav');

        var toggleNav = (function(e) {
            e.preventDefault();
            hamburger.classList.toggle('is-active');
            shadow.classList.toggle('is-active');
            sideNav.classList.toggle('is-active');
            //prevent scroll
            if (hamburger.classList.contains('is-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        hamburger.addEventListener('click', toggleNav);
        shadow.addEventListener('click', toggleNav);
    });
})();