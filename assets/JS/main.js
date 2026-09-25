/**
 * 
 * ==========================================================================
 * Portfolio Website - Main JavaScript
 * ==========================================================================
 * 
 * @author    Aydin Biram Pour
 * @website   https://github.com/programmer-87
 * @version   1.0.0
 * @date      2026
 * 
 * امکانات:
 * 1. منوی چسبان (Sticky Navbar)
 * 2. اسکرول نرم (Smooth Scroll)
 * 3. انیمیشن ورود (Fade-in on Scroll)
 * 4. منوی موبایل (Mobile Menu)
 * 5. دکمه بازگشت به بالا (Back to Top)
 * 6. لینک فعال (Active Link)
 * 
 */


(function () {
    'use strict';

    /* ======================================================================
       ۱. انتخاب عناصر اصلی
       ====================================================================== */

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    const menuToggle = document.querySelector('#menu-toggle');
    const navMenu = document.querySelector('#nav-menu');
    const backToTop = document.querySelector('#back-to-top');
    const sections = document.querySelectorAll('section[id]');
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-right, .fade-in-left');

    /* ======================================================================
       ۲. منوی چسبان (Sticky Navbar)
       ====================================================================== */

    /**
     * تغییر ظاهر منو با اسکرول
     * وقتی کاربر بیش از ۵۰ پیکسل اسکرول کنه، کلاس scrolled اضافه می‌شه.
     */
    function handleStickyNavbar() {
        if (!navbar) return;

        let ticking = false;

        function updateNavbar() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            ticking = false;
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }, { passive: true });
    }

    /* ======================================================================
       ۳. اسکرول نرم (Smooth Scroll)
       ====================================================================== */

    /**
     * اسکرول نرم به بخش‌ها با کلیک روی لینک‌های منو
     */
    function handleSmoothScroll() {
        if (!navLinks.length) return;

        navLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');

                // اگه href فقط "#" بود، کاری نکن
                if (targetId === '#') return;

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();

                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetSection.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // بستن منوی موبایل بعد از کلیک
                    closeMobileMenu();
                }
            });
        });
    }

    /* ======================================================================
       ۴. انیمیشن ورود (Fade-in on Scroll)
       ====================================================================== */

    /**
     * نمایش تدریجی عناصر با ورود به viewport
     * از IntersectionObserver استفاده می‌کنه که بسیار بهینه‌تر از scroll event هست.
     */
    function handleFadeInOnScroll() {
        if (!fadeElements.length) return;

        // اگه مرورگر از IntersectionObserver پشتیبانی نمی‌کنه، همه رو نشون بده
        if (!('IntersectionObserver' in window)) {
            fadeElements.forEach(function (el) {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                    obs.unobserve(entry.target); // بعد از نمایش، دیگه رصد نکن
                }
            });
        }, observerOptions);

        fadeElements.forEach(function (el) {
            // مقدار اولیه: مخفی
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

            observer.observe(el);
        });
    }

    /* ======================================================================
       ۵. منوی موبایل (Mobile Menu)
       ====================================================================== */

    /**
     * باز و بسته کردن منوی موبایل
     */
    function handleMobileMenu() {
        if (!menuToggle || !navMenu) return;

        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open');

            // تغییر آیکون
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    /**
     * بستن منوی موبایل
     */
    function closeMobileMenu() {
        if (!navMenu || !menuToggle) return;

        navMenu.classList.remove('open');
        document.body.classList.remove('menu-open');

        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    /* ======================================================================
       ۶. دکمه بازگشت به بالا (Back to Top)
       ====================================================================== */

    /**
     * نمایش و عملکرد دکمه بازگشت به بالا
     */
    function handleBackToTop() {
        if (!backToTop) return;

        let ticking = false;

        function updateButton() {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
            ticking = false;
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(updateButton);
                ticking = true;
            }
        }, { passive: true });

        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ======================================================================
       ۷. لینک فعال (Active Link)
       ====================================================================== */

    /**
     * مشخص کردن بخش فعال در منو با اسکرول
     */
    function handleActiveLink() {
        if (!sections.length || !navLinks.length) return;

        if (!('IntersectionObserver' in window)) return;

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    navLinks.forEach(function (link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

    /* ======================================================================
       ۸. راه‌اندازی اولیه
       ====================================================================== */

    function init() {
        handleStickyNavbar();
        handleSmoothScroll();
        handleFadeInOnScroll();
        handleMobileMenu();
        handleBackToTop();
        handleActiveLink();

        // لاگ در کنسول (فقط برای توسعه)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('%c🚀 Portfolio Website Loaded', 'color: #64FFDA; font-size: 16px; font-weight: bold;');
        }
    }

    // اجرا بعد از بارگذاری کامل DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

