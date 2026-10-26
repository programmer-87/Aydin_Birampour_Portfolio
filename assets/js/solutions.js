/* ==========================================================================
   Solutions Page Logic (اضافه شده به main.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // اگر در صفحه solutions.html نیستیم، کدها اجرا نشوند
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    // ======================================================================
    // ۱. داده‌های پروژه‌های واقعی (ویترین)
    // ======================================================================
    const solutionsData = [
        {
            id: 1,
            title: "ربات پردازش خودکار فاکتور",
            description: "رباتی که فاکتورها را از ایمیل می‌خواند و در دیتابیس و اکسل ذخیره می‌کند.",
            longDescription: "این ربات با استفاده از پایتون و هوش مصنوعی، فایل‌های PDF را تحلیل کرده، اطلاعات کلیدی (شماره فاکتور، تاریخ، مبلغ و...) را استخراج کرده و در یک فایل اکسل تمیز ذخیره می‌کند. سرعت پردازش هر فاکتور کمتر از ۱ ثانیه است.",
            category: "automation",
            categoryLabel: "اتوماسیون",
            icon: "fa-solid fa-robot",
            tags: ["Python", "PyMuPDF", "Pandas", "Excel"],
            features: ["استخراج هوشمند متن", "پشتیبانی از فارسی", "ذخیره در اکسل", "داشبورد وب"],
            images: [
                "assets/img/software/2_1.webp",
                "assets/img/software/2_2.webp",
                "assets/img/software/2_3.webp"
            ],
            demoLink: "https://github.com/programmer-87/invoice-bot"
        },
        {
            id: 2,
            title: "وب‌سایت کافه خاطرات",
            description: "وب‌سایت تک‌صفحه‌ای واکنش‌گرا برای یک کافه با منو، درباره ما و فرم تماس.",
            longDescription: "این وب‌سایت با استفاده از HTML، CSS و JavaScript خالص طراحی شده است. شامل بخش‌های معرفی، منوی کافه، درباره ما و فرم تماس است. طراحی کاملاً واکنش‌گرا بوده و روی تمام دستگاه‌ها عالی نمایش داده می‌شود.",
            category: "web",
            categoryLabel: "توسعه وب",
            icon: "fa-solid fa-mug-hot",
            tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
            features: ["طراحی تک‌صفحه‌ای", "واکنش‌گرا", "افکت پارالاکس", "اسکرول نرم"],
            images: [
                "assets/img/cafe_khatrat.jpg"
            ],
            demoLink: "https://programmer-87.github.io/cafe-khaterat/"
        },
        {
            id: 3,
            title: "کمپین فروش آیدین استایل",
            description: "طراحی و اجرای کمپین ۷ روزه برای یک فروشگاه لباس مردانه — افزایش ۴۰٪ فروش.",
            longDescription: "این کمپین شامل استراتژی فروش، تولید محتوا برای ۲۸ پست اینستاگرام و استفاده از تکنیک‌های روانشناسی فروش است. نتیجه این کمپین افزایش ۴۰٪ فروش در ۷ روز و افزایش ۱۶۲٪ فالوور بود.",
            category: "copywriting",
            categoryLabel: "کمپین‌نویسی",
            icon: "fa-solid fa-bullhorn",
            tags: ["Copywriting", "Sales Strategy", "Instagram"],
            features: ["استراتژی فروش", "تولید ۲۸ پست", "افزایش فالوور", "طراحی موکاپ"],
            images: [
                "assets/img/campaign/1.jpg",
                "assets/img/campaign/2.jpg",
                "assets/img/campaign/3.jpg",
                "assets/img/campaign/4.jpg"
            ],
            demoLink: "#"
        },
        {
            id: 4,
            title: "سیستم مدیریت و فروش (دسکتاپ)",
            description: "نرم‌افزار دسکتاپ جامع برای مدیریت انبار، فروش و گزارش‌گیری.",
            longDescription: "این نرم‌افزار با استفاده از C# و SQL Server طراحی شده است. شامل مدیریت کالاها، ثبت فروش، مدیریت مشتریان و تولید گزارش‌های مالی است. مناسب برای فروشگاه‌های کوچک و متوسط.",
            category: "desktop",
            categoryLabel: "نرم‌افزار دسکتاپ",
            icon: "fa-solid fa-desktop",
            tags: ["C#", "SQL Server", ".NET"],
            features: ["مدیریت انبار", "ثبت فروش", "گزارش‌گیری", "بانک اطلاعاتی قوی"],
            images: [
                "assets/img/software/1_1.png"
            ],
            demoLink: "#"
        },
        {
            id: 5,
            title: "طراحی لوگو و هویت بصری",
            description: "طراحی لوگو اختصاصی و ست اداری کامل برای برندهای نوپا.",
            longDescription: "این پروژه شامل طراحی لوگوی اختصاصی، انتخاب پالت رنگی، طراحی کارت ویزیت و ست اداری است. تمامی فایل‌های وکتور (AI, PDF) تحویل داده می‌شود.",
            category: "graphic",
            categoryLabel: "طراحی گرافیک",
            icon: "fa-solid fa-palette",
            tags: ["Illustrator", "Photoshop", "Branding"],
            features: ["لوگوی اختصاصی", "کارت ویزیت", "ست اداری", "فایل وکتور"],
            images: [
                "assets/img/logo_1.jpg",
                "assets/img/logo_2.jpg"
            ],
            demoLink: "#"
        },
        {
            id: 6, 
            title: "قالب فروشگاه اینترنتی اختصاصی",
            description: "طراحی رابط کاربری مدرن و واکنش‌گرا (نسخه دمو: انگلیسی) با تمرکز بر تجربه کاربری (UX).",
            longDescription: "این قالب فروشگاهی با استفاده از React و Tailwind CSS طراحی شده است. شامل صفحه اصلی، لیست محصولات، سبد خرید و صفحه جزئیات محصول است. طراحی کاملاً واکنش‌گرا و آماده اتصال به هر بک‌اندی می‌باشد. (توجه: این نسخه دمو به زبان انگلیسی است و در نسخه نهایی، کاملاً فارسی‌سازی می‌شود.)",
            category: "web",
            categoryLabel: "توسعه وب",
            icon: "fa-solid fa-cart-shopping",
            tags: ["React", "Tailwind", "UI/UX"],
            features: ["طراحی واکنش‌گرا", "سبد خرید", "صفحه محصولات", "افکت‌های هاور", "نسخه دمو انگلیسی"],
            images: [
                "assets/img/shop-1.webp",
                "assets/img/shop-2.webp"
            ],
            demoLink: "#"
        },
        {
            id: 7, // شماره ترتیبی پروژه
            title: "ربات نوبت دهی در تلگرام",
            description: "رباتی هوشمند برای دریافت نوبت‌های آنلاین در تلگرام، بدون نیاز به تماس تلفنی.",
            longDescription: "این ربات که با استفاده از پایتون و Telegram Bot API ساخته شده است، به مشتریان اجازه می‌دهد تا در هر ساعت از شبانه‌روز، نوبت خود را در تلگرام رزرو کنند. این سیستم شامل انتخاب روز و ساعت، تایید خودکار و مدیریت نوبت‌هاست.",
            category: "telegram",
            categoryLabel: "ربات تلگرام",
            icon: "fab fa-telegram", // آیکون تلگرام
            tags: ["Python", "Telegram API", "Automation", "Bot"],
            features: ["نوبت‌دهی ۲۴ ساعته", "بدون تماس تلفنی", "تایید خودکار", "مدیریت آسان"],
            images: [
                "assets/img/robotTelegram_1.webp"
            ],
            demoLink: "https://t.me/programmer1837" // آیدی ربات خودتون رو اینجا بذارید
        },
    ];
    

    // ======================================================================
    // ۲. المان‌ها و متغیرها
    // ======================================================================
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    const sliderTrack = document.getElementById('slider-track');
    const sliderDots = document.getElementById('slider-dots');
    const imgCounter = document.getElementById('img-counter');
    const prevBtn = document.getElementById('prev-img');
    const nextBtn = document.getElementById('next-img');
    const backToTopBtn = document.getElementById('back-to-top');
    const scrollProgress = document.getElementById('scroll-progress');

    let currentFilter = 'all';
    let currentSearch = '';
    let currentImageIndex = 0;
    let totalImages = 0;
    let currentProject = null;

    // ======================================================================
    // ۳. توابع رندر
    // ======================================================================
    function renderProjects() {
        const filtered = solutionsData.filter(p => {
            const matchFilter = currentFilter === 'all' || p.category === currentFilter;
            const matchSearch = p.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                                p.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                                p.tags.some(t => t.toLowerCase().includes(currentSearch.toLowerCase()));
            return matchFilter && matchSearch;
        });

        grid.innerHTML = '';

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-16">
                    <i class="fa-solid fa-magnifying-glass text-4xl mb-4" style="color: var(--text-slate); opacity: 0.4;"></i>
                    <p class="text-base" style="color: var(--text-slate);">نتیجه‌ای یافت نشد.</p>
                </div>
            `;
            return;
        }

        filtered.forEach((project, index) => {
            const card = document.createElement('article');
            card.style.animationDelay = `${index * 0.06}s`;
            card.className = 'project-card p-6';
            card.setAttribute('data-id', project.id);
            card.addEventListener('click', () => openModal(project));

            const tagsHtml = project.tags.map(tag =>
                `<span class="card-tag inline-block text-[11px] px-2.5 py-1 rounded-md border mx-1 my-1" style="background: var(--bg-input-sol); border-color: var(--border-soft-sol); color: var(--text-slate-sol);">${tag}</span>`
            ).join('');

            card.innerHTML = `
                <div class="card-icon-wrapper"><i class="${project.icon}"></i></div>
                <div class="flex items-start justify-between mb-2 gap-2">
                    <h3 class="text-lg font-bold mt-1" style="color: var(--text-white);">${project.title}</h3>
                    <span class="text-[10px] px-2 py-1 rounded-full border whitespace-nowrap" style="background: var(--accent-bg-sol); color: var(--accent-sol); border-color: var(--accent-border-sol);">${project.categoryLabel}</span>
                </div>
                <p class="text-sm leading-6 mb-4 text-justify" style="color: var(--text-slate-sol);">${project.description}</p>
                <div class="flex flex-wrap gap-1.5 mb-2">${tagsHtml}</div>
                <div class="card-action-btn mt-auto">
                    <span>مشاهده جزئیات</span>
                    <i class="fa-solid fa-arrow-left text-xs"></i>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // ======================================================================
    // ۴. فیلترها و جستجو
    // ======================================================================
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderProjects();
        });
    });

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        clearSearchBtn.classList.toggle('visible', currentSearch.length > 0);
        renderProjects();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        clearSearchBtn.classList.remove('visible');
        searchInput.focus();
        renderProjects();
    });

    // ======================================================================
    // ۵. مودال
    // ======================================================================
    function openModal(project) {
        currentProject = project;

        document.getElementById('modal-icon').className = project.icon;
        document.getElementById('modal-category').textContent = project.categoryLabel;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-long-desc').textContent = project.longDescription;

        document.getElementById('modal-features').innerHTML = project.features
            .map(f => `<li><i class="fa-solid fa-check"></i><span>${f}</span></li>`).join('');

        document.getElementById('modal-tags').innerHTML = project.tags
            .map(t => `<span class="text-xs px-3 py-1 rounded-full border" style="background: var(--accent-bg-sol); color: var(--accent-sol); border-color: var(--accent-border-sol);">${t}</span>`).join('');

                const message = `سلام، من پروژه «${project.title}» را در سایت شما دیدم و می‌خواهم آن را برای کسب‌وکارم شخصی‌سازی کنم.`;
        
        // دکمه واتساپ
        const waBtn = document.getElementById('modal-whatsapp-btn');
        if (waBtn) {
            waBtn.href = `https://wa.me/989301269621?text=${encodeURIComponent(message)}`;
        }

        // دکمه تلگرام (آیدی تلگرام خودت رو اینجا بذار)
        const tgBtn = document.getElementById('modal-telegram-btn');
        if (tgBtn) {
            // به جای programmer1837، آیدی خودت رو بذار
            tgBtn.href = `https://t.me/programmer1837?text=${encodeURIComponent(message)}`;
        }
        const demoBtn = document.getElementById('modal-demo-btn');
        if (demoBtn) {
            demoBtn.href = project.demoLink || '#';
        }

        buildSlider(project.images);

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            sliderTrack.innerHTML = '';
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('open')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') goToImage(currentImageIndex + 1);
        if (e.key === 'ArrowRight') goToImage(currentImageIndex - 1);
    });

    // ======================================================================
    // ۶. اسلایدر
    // ======================================================================
    function buildSlider(images) {
        sliderTrack.innerHTML = '';
        sliderDots.innerHTML = '';
        currentImageIndex = 0;
        totalImages = images.length;

        images.forEach((src, i) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `تصویر ${i + 1}`;
            img.loading = 'lazy';
            img.onerror = () => { img.src = 'assets/img/123.png'; }; // عکس جایگزین
            sliderTrack.appendChild(img);

            const dot = document.createElement('div');
            dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToImage(i));
            sliderDots.appendChild(dot);
        });
        updateSlider();
    }

    function goToImage(index) {
        if (index < 0) index = totalImages - 1;
        if (index >= totalImages) index = 0;
        currentImageIndex = index;
        updateSlider();
    }

    function updateSlider() {
        if (totalImages === 0) return;
        sliderTrack.style.transform = `translateX(-${currentImageIndex * 100}%)`;
        imgCounter.textContent = `${currentImageIndex + 1} / ${totalImages}`;
        document.querySelectorAll('.slider-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentImageIndex);
        });
        const multi = totalImages > 1;
        prevBtn.style.display = multi ? 'flex' : 'none';
        nextBtn.style.display = multi ? 'flex' : 'none';
        sliderDots.style.display = multi ? 'flex' : 'none';
    }

    prevBtn.addEventListener('click', () => goToImage(currentImageIndex - 1));
    nextBtn.addEventListener('click', () => goToImage(currentImageIndex + 1));

    // ======================================================================
    // ۷. اسکرول و بازگشت به بالا
    // ======================================================================
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollProgress) scrollProgress.style.width = `${docHeight > 0 ? (scrollTop / docHeight) * 100 : 0}%`;
        if (backToTopBtn) backToTopBtn.classList.toggle('visible', scrollTop > 400);
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ======================================================================
    // ۸. راه‌اندازی اولیه
    // ======================================================================
    renderProjects();
});