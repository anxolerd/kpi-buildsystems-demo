/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <me.olexandr.kovalchuk@gmail.com> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.  Olexandr Kovalchuk
 * ----------------------------------------------------------------------------
 */

(function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", function() {
        var hamburger = document.getElementById('c-hamburger');
        var shadow = document.getElementById('c-shadow-cover');
        var sideNav = document.getElementById('side-nav');

        window.addEventListener('resize', function(e) {
            if (document.documentElement.clientWidth >= 768) {
                hamburger.classList.remove("is-active");
                shadow.classList.remove("is-active");
                sideNav.classList.remove("is-active");
            }
        });
    })
})();