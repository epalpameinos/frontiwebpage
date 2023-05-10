
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
    * Navbar links active state on scroll
    */
    let navbarlinks = document.querySelectorAll('#navbar a');

    function navbarlinksActive() {
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;

            let section = document.querySelector(navbarlink.hash);
            if (!section) return;

            let position = window.scrollY + 200;

            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    }
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);

    /**
    * Mobile nav toggle
    */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
        el.addEventListener('click', function(event) {
            event.preventDefault();
            mobileNavToogle();
        });
    });

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
    }

    /**
    * Hide mobile nav on same-page/hash links
    */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        navbarlink.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });
    });

    /**
    * Scroll top button
    */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        const togglescrollTop = function() {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        window.addEventListener('load', togglescrollTop);
        document.addEventListener('scroll', togglescrollTop);

        scrollTop.addEventListener('click', window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }));
    }

    /**
    * Preloader
    */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
    * Sticky TopBar on Scroll
    */
    const topBar = document.querySelector('#topbar');
    if (topBar) {
        let topBarOffset = topBar.offsetTop;
        let nextElement = topBar.nextElementSibling;

        const topBarFixed = () => {
            if ((topBarOffset - window.scrollY) <= 0) {
                topBar.classList.add('sticked');
                if (nextElement) nextElement.classList.add('sticked-header-offset');
            } else {
                topBar.classList.remove('sticked');
                if (nextElement) nextElement.classList.remove('sticked-header-offset');
            }
        }
        window.addEventListener('load', topBarFixed);
        document.addEventListener('scroll', topBarFixed);
    }

    /**
    * Sticky Header on Scroll
    */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
        let headerOffset = selectHeader.offsetTop;
        let nextElement = selectHeader.nextElementSibling;

        const headerFixed = () => {
            if ((headerOffset - window.scrollY) <= 0) {
                selectHeader.classList.add('sticked');
                if (nextElement) nextElement.classList.add('sticked-header-offset');
            } else {
                selectHeader.classList.remove('sticked');
                if (nextElement) nextElement.classList.remove('sticked-header-offset');
            }
        }
        window.addEventListener('load', headerFixed);
        document.addEventListener('scroll', headerFixed);
    }

    /**
    * Animation on scroll function and init
    */
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', () => {
        aos_init();
    });


});