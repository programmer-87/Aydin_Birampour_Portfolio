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
        handleSkillCards();
        initProjectModal();


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


/* ==========================================================================
   Skills Section - Intersection Observer
   ========================================================================== */

/**
 * نمایش پله‌ای کارت‌های مهارت + پر شدن نوار پیشرفت
 */
function handleSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    if (!skillCards.length) return;

    // اگه مرورگر از IntersectionObserver پشتیبانی نمی‌کنه، همه رو نشون بده
    if (!('IntersectionObserver' in window)) {
        skillCards.forEach(function (card) {
            card.classList.add('visible');
        });
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // تأخیر کوچک برای اطمینان از رندر شدن
                setTimeout(function () {
                    entry.target.classList.add('visible');
                }, 100);
                
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillCards.forEach(function (card) {
        observer.observe(card);
    });
}

// اضافه کردن به init
// در تابع init()، این خط رو اضافه کن:
// handleSkillCards();


/* ==========================================================================
   Project Modal (Lightbox) - Combined Method
   ========================================================================== */

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    // انتخاب عناصر
    const els = {
        image: document.getElementById('modal-image'),
        title: document.getElementById('modal-title'),
        desc: document.getElementById('modal-description'),
        tags: document.getElementById('modal-tags'),
        counter: document.getElementById('modal-counter'),
        dots: document.getElementById('modal-dots'),
        close: document.getElementById('modal-close'),
        prev: document.getElementById('modal-prev'),
        next: document.getElementById('modal-next')
    };

    let currentProject = null;
    let currentIndex = 0;

    // ========== توابع اصلی ==========

    function openModal(projectData, index = 0) {
        if (!projectData) return;
        currentProject = projectData;
        currentIndex = index;
        updateContent();
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        setTimeout(() => els.close.focus(), 100);
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        currentProject = null;
        currentIndex = 0;
    }

    function updateContent() {
        if (!currentProject) return;
        const image = currentProject.images[currentIndex];

        // تصویر
        els.image.classList.add('loading');
        els.image.src = image.src;
        els.image.alt = image.alt || currentProject.title;
        els.image.onload = () => els.image.classList.remove('loading');

        // متن
        els.title.textContent = currentProject.title;
        els.desc.textContent = currentProject.description;

        // تگ‌ها
        els.tags.innerHTML = '';
        (currentProject.tags || []).forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            els.tags.appendChild(span);
        });

        // شمارنده
        els.counter.textContent = `${currentIndex + 1} / ${currentProject.images.length}`;

        // نقطه‌ها
        renderDots();

        // دکمه‌های ناوبری
        const hasMultiple = currentProject.images.length > 1;
        els.prev.style.display = hasMultiple ? 'flex' : 'none';
        els.next.style.display = hasMultiple ? 'flex' : 'none';
        els.dots.style.display = hasMultiple ? 'flex' : 'none';
    }

    function renderDots() {
        if (!currentProject) return;
        els.dots.innerHTML = '';
        currentProject.images.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'modal-dot' + (i === currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', `تصویر ${i + 1}`);
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateContent();
            });
            els.dots.appendChild(dot);
        });
    }

    function nextImage() {
        if (!currentProject) return;
        currentIndex = (currentIndex + 1) % currentProject.images.length;
        updateContent();
    }

    function prevImage() {
        if (!currentProject) return;
        currentIndex = (currentIndex - 1 + currentProject.images.length) % currentProject.images.length;
        updateContent();
    }

    // ========== رویدادها ==========

    els.close.addEventListener('click', closeModal);
    els.next.addEventListener('click', nextImage);
    els.prev.addEventListener('click', prevImage);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') nextImage();
        if (e.key === 'ArrowRight') prevImage();
    });

    // ========== اتصال کارت‌های پروژه ==========
    // روش ترکیبی: اول data-project، اگه نبود → ترتیب

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const projectKey = card.getAttribute('data-project');
            const projectData = projectKey
                ? projectsData[projectKey]
                : Object.values(projectsData)[index];

            if (projectData) openModal(projectData, 0);
        });
    });
}

// اضافه کردن به init
// در تابع init()، این خط رو اضافه کن:
// initProjectModal();


/* ==========================================================================
   Project Data
   ========================================================================== */

const projectsData = {
    // ⚠️ کلیدها با data-project کارت‌ها یکسان باشه
    'logo-1': {
        title: 'طراحی لوگو',
        description: 'لوگوی خاص برای یک رستوران بنام آویژه',
        tags: ['Illustrator', 'Branding', 'Logo Design', 'Photoshop'],
        images: [
            { src: 'assets/img/logo_1.jpg', alt: 'لوگو ۱' },
            { src: 'assets/img/logo_2.jpg', alt: 'لوگو ۲' },
            { src: 'assets/img/logo_3.jpg', alt: 'لوگو ۳' }
        ]
    },
    'logo-2': {
        title: 'طراحی لوگو',
        description: 'لوگوی شخصی سازی شده برای یک دکتر متخصص',
        tags: ['Illustrator', 'Branding', 'Logo Design', 'Photoshop'],
        images: [
            { src: 'assets/img/logo_2.jpg', alt: 'لوگو ۲' },
            { src: 'assets/img/logo_1.jpg', alt: 'لوگو ۱' },
            { src: 'assets/img/logo_3.jpg', alt: 'لوگو ۳' }
        ]
    },
    'logo-3': {
        title: 'طراحی لوگو',
        description: 'بنر تبلیغاتی برای یک آرایشگاه',
        tags: ['Illustrator', 'Logo Design', 'Photoshop'],
        images: [
            { src: 'assets/img/logo_3.jpg', alt: 'لوگو ۳' },
            { src: 'assets/img/logo_2.jpg', alt: 'لوگو ۲' },
            { src: 'assets/img/logo_1.jpg', alt: 'لوگو ۱' }
        ]
    },

    'web-1': {
        title: 'وب‌سایت کافه خاطرات',
        description: 'وب‌سایت تک‌صفحه‌ای واکنش‌گرا برای یک کافه با منو، درباره ما و فرم تماس.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
        images: [
            { src: 'assets/img/cafe_khatrat.jpg', alt: 'کافه خاطرات' }
        ]
    },
    'web-2': {
        title: 'پروژه فروشگاه لوازم',
        description: 'طراحی رابط کاربری فروشگاه آنلاین با تمرکز بر تجربه کاربری (UX) و طراحی واکنش‌گرا (Responsive). این پروژه به‌عنوان یک نمونه‌ی Frontend طراحی شده و آماده‌ی اتصال به هر بک‌اند (Node.js، Django، Laravel) است.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'bootstrap'],
        images: [
            { src: 'assets/img/store.jpg', alt: 'فروشگاه لوازم' }
        ]
    },
    'web-3': {
        title: 'وبسایت فروشگاه لباس',
        description: 'طراحی رابط کاربری فروشگاه آنلاین با تمرکز بر تجربه کاربری (UX) و طراحی واکنش‌گرا (Responsive). این پروژه به‌عنوان یک نمونه‌ی Frontend طراحی شده و آماده‌ی اتصال به هر بک‌اند است.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind',  'bootstrap'],
        images: [
            { src: 'assets/img/store_clothes.jpg', alt: 'فروشگاه لباس' }
        ]
    },
    'software-1': {
        title: 'نرم‌افزار حسابداری',
        description: 'سیستم مدیریت مالی برای کسب‌وکارهای کوچک با C# و SQL Server.',
        tags: ['C#', 'SQL Server', 'Desktop App'],
        images: [
            { src: 'assets/img/projects/software-1.jpg', alt: 'نرم‌افزار ۱' },
            { src: 'assets/img/projects/software-2.jpg', alt: 'نرم‌افزار ۲' }
        ]
    }
};