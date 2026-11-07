document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. مدیریت منوی موبایل
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('i');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // تغییر آیکون
            if (mobileMenu.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }

    // بستن منوی موبایل با کلیک روی لینک‌ها
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // ==========================================
    // 2. افکت اسکرول هدر
    // ==========================================
    const header = document.getElementById('main-header');
    const headerInner = document.getElementById('header-inner');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('shadow-md');
            headerInner.style.height = '70px'; // کاهش ارتفاع
        } else {
            header.classList.remove('shadow-md');
            headerInner.style.height = '80px'; // بازگشت به حالت اول
        }
    });

    // ==========================================
    // 3. انیمیشن ظاهر شدن عناصر با اسکرول (Scroll Reveal)
    // ==========================================
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // فاصله‌ای که عنصر باید از پایین صفحه داشته باشد تا فعال شود

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // اجرای اولیه
    revealOnScroll();

    // اجرا هنگام اسکرول
    window.addEventListener('scroll', revealOnScroll);


        // ==========================================
    // 4. مدیریت فرم تماس (شبیه‌سازی ارسال)
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    const btnLoader = document.getElementById('btn-loader');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // جلوگیری از رفرش صفحه

            // 1. تغییر ظاهر دکمه به حالت لودینگ
            btnText.textContent = 'در حال ارسال...';
            btnIcon.classList.add('hidden');
            btnLoader.classList.remove('hidden');
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

            // 2. شبیه‌سازی تاخیر شبکه (1.5 ثانیه)
            setTimeout(() => {
                // بازگرداندن دکمه به حالت اول (اختیاری)
                btnText.textContent = 'ارسال پیام';
                btnIcon.classList.remove('hidden');
                btnLoader.classList.add('hidden');
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');

                // 3. مخفی کردن فرم و نمایش پیام موفقیت
                contactForm.style.display = 'none';
                successMessage.classList.remove('hidden');

                // 4. پاک کردن مقادیر فرم برای استفاده مجدد
                contactForm.reset();

                // 5. (اختیاری) اسکرول به بالای پیام موفقیت
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            }, 1500); 
        });
    }
});

