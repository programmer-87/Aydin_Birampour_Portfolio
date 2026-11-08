document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. مدیریت منوی موبایل
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        const menuIcon = mobileMenuBtn.querySelector('i');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // تغییر آیکون بین همبرگری و ضربدر
            if (mobileMenu.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // بستن منو با کلیک روی لینک‌ها
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // ==========================================
    // 2. افکت اسکرول هدر
    // ==========================================
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                // کلاس جدید برای کوچک شدن هدر (که در CSS تعریف می‌کنیم)
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // ==========================================
    // 3. انیمیشن ظاهر شدن عناصر با اسکرول (Reveal)
    // ==========================================
    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length > 0) {
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 80; // فاصله فعال‌سازی

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        // اجرای اولیه و اجرا هنگام اسکرول
        revealOnScroll();
        window.addEventListener('scroll', revealOnScroll);
    }

});