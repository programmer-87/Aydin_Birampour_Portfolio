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
            description: "خداحافظی با تایپ دستی فاکتورها. سیستمی که فایل‌های PDF را می‌خواند و اطلاعات را مستقیم در اکسل یا دیتابیس شما ثبت می‌کند.",
            longDescription: "وقت کارمندت رو نگیر! این سیستم به جای تایپ دستی، فاکتورهای PDF رو می‌خونه، اطلاعات (تاریخ، مبلغ، شماره فاکتور) رو استخراج می‌کنه و مستقیم توی اکسل یا دیتابیس ثبت می‌کنه. دقت بالا و پردازش زیر ۱ ثانیه.",
            category: "automation",
            categoryLabel: "اتوماسیون",
            icon: "fa-solid fa-robot",
            tags: ["Python", "PyMuPDF", "Pandas", "Excel"],
            features: ["استخراج هوشمند و بدون خطا", "پشتیبانی کامل از زبان فارسی", "ثبت خودکار در اکسل و دیتابیس"],
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
            description: "ویترین دیجیتال کافه شما. سایتی سریع و جذاب که مشتری را از دیدن منو تا پیدا کردن آدرس، بدون گیج شدن هدایت می‌کند.",
            longDescription: "یه ویترین دیجیتال که مشتری رو گرسنه‌تر میکنه! سایتی سریع، سبک و جذاب که منوی کافه، داستان برند و راه‌های تماس رو به بهترین شکل به مشتری نشون میده. بدون نیاز به سیستم‌های پیچیده.",
            category: "web",
            categoryLabel: "توسعه وب",
            icon: "fa-solid fa-mug-hot",
            tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
            features: ["طراحی سریع و تک‌صفحه‌ای", "کاملاً واکنش‌گرا (موبایل و دسکتاپ)", "اسکرول نرم و افکت‌های بصری جذاب"],
            images: [
                "assets/img/cafe_khatrat.webp"
            ],
            demoLink: "https://programmer-87.github.io/cafe-khaterat/"
        },
        {
            id: 3,
            title: "کمپین فروش آیدین استایل",
            description: "تبدیل فالوور به مشتری واقعی. استراتژی محتوا و متنی که در ۷ روز، فروش فروشگاه پوشاک را ۴۰٪ افزایش داد.",
            longDescription: "چطور با کلمات، فروش رو چند برابر کنیم؟ طراحی یه کمپین ۷ روزه از صفر تا صد؛ از نوشتن متن‌های وسوسه‌کننده تا طراحی پست‌ها. نتیجه؟ افزایش ۴۰٪ فروش و رشد ۱۶۲٪ فالوور در کمتر از یک هفته.",
            category: "copywriting",
            categoryLabel: "کمپین‌نویسی",
            icon: "fa-solid fa-bullhorn",
            tags: ["Copywriting", "Sales Strategy", "Instagram"],
            features: ["استراتژی فروش مبتنی بر روانشناسی", "تولید ۲۸ پست اینستاگرام", "طراحی موکاپ‌های حرفه‌ای"],
            images: [
                "assets/img/campaign/1.webp",
                "assets/img/campaign/2.webp",
                "assets/img/campaign/3.webp",
                "assets/img/campaign/4.webp"
            ],
            demoLink: "#"
        },
        {
            id: 4,
            title: "سیستم مدیریت و فروش (دسکتاپ)",
            description: "کنترل کامل کسب‌وکار در یک نگاه. سیستم دقیقی برای مدیریت انبار و فروش که جای اکسل‌های شلوغ و پر از خطا را می‌گیرد.",
            longDescription: "خداحافظی با اکسل‌های شلوغ و خطاهای انسانی. یه نرم‌افزار جامع دسکتاپ که انبار، فروش و مشتریان شما رو مدیریت می‌کنه و گزارش‌های دقیق مالی تحویل میده. مناسب برای فروشگاه‌های در حال رشد.",
            category: "desktop",
            categoryLabel: "نرم‌افزار دسکتاپ",
            icon: "fa-solid fa-desktop",
            tags: ["C#", "SQL Server", ".NET"],
            features: ["مدیریت انبار بدون خطا", "ثبت سریع فاکتور و فروش", "گزارش‌گیری دقیق و لحظه‌ای"],
            images: [
                "assets/img/software/1_1.webp"
            ],
            demoLink: "#"
        },
        {
            id: 5,
            title: "طراحی لوگو و هویت بصری",
            description: "اولین حرف شما با مشتری. لوگو و ست اداری اختصاصی که در نگاه اول حس اعتماد و کیفیت را به مخاطب منتقل می‌کند.",
            longDescription: "برند شما قبل از اینکه حرف بزنه، دیده میشه. این پروژه شامل طراحی یه لوگوی خاص و لاکچری، به همراه ست اداری کامل (کارت ویزیت، سربرگ) هست که حس اعتماد و کیفیت رو به مشتری منتقل می‌کنه.",
            category: "graphic",
            categoryLabel: "طراحی گرافیک",
            icon: "fa-solid fa-palette",
            tags: ["Illustrator", "Photoshop", "Branding"],
            features: ["طراحی اختصاصی و مینیمال", "ست اداری یکپارچه", "تحویل فایل‌های وکتور (AI, PDF)"],
            images: [
                "assets/img/logo_1.webp",
                "assets/img/logo_2.webp"
            ],
            demoLink: "#"
        },
        {
            id: 6, 
            title: "قالب فروشگاه اینترنتی اختصاصی",
            description: "تجربه خرید بدون دردسر. فرانت‌اند فروشگاهی مدرن که سرعت لود بالایی دارد و آماده اتصال به هر سیستم فروش (بک‌اند) است.",
            longDescription: "یه تجربه خرید بدون دردسر برای مشتری. این قالب مدرن و فوق‌سریع، شامل صفحه محصولات، سبد خرید و صفحه جزئیات است. (آماده اتصال به هر سیستم فروش و قابلیت فارسی‌سازی کامل).",
            category: "web",
            categoryLabel: "توسعه وب",
            icon: "fa-solid fa-cart-shopping",
            tags: ["React", "Tailwind", "UI/UX"],
            features: ["سرعت لود بالا با React", "طراحی واکنش‌گرا و مدرن", "سبد خرید و افکت‌های هاور جذاب", "نسخه دمو انگلیسی"],
            images: [
                "assets/img/shop-1.webp",
                "assets/img/shop-2.webp"
            ],
            demoLink: "#"
        },
        {
            id: 7,
            title: "ربات نوبت دهی در تلگرام",
            description: "دستیار ۲۴ ساعته شما. رباتی که بدون وقفه نوبت مشتریان را ثبت می‌کند و خطای انسانی (مثل فراموش کردن نوبت‌ها) را صفر می‌کند.",
            longDescription: "منشی دیجیتالی که ۲۴ ساعته سر کاره! مشتریان شما بدون نیاز به تماس تلفنی، در هر ساعتی از شبانه‌روز از داخل تلگرام نوبت می‌گیرن. تایید خودکار، یادآوری و مدیریت نوبت‌ها همگی بدون دخالت شما انجام میشه.",
            category: "telegram",
            categoryLabel: "ربات تلگرام",
            icon: "fab fa-telegram", // آیکون تلگرام
            tags: ["Python", "Telegram API", "Automation", "Bot"],
            features: ["نوبت‌دهی ۲۴ ساعته", "حذف کامل تماس‌های تلفنی", "مدیریت و یادآوری خودکار"],
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

    let currentFilters = ['all']; // حالا یک آرایه است
    let currentSearch = '';
    let currentImageIndex = 0;
    let totalImages = 0;
    let currentProject = null;

            // ======================================================================
    // 🎯 هدایت هوشمند (Smart Routing) و شخصی‌سازی کارت‌ها
    // ======================================================================
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const categoryData = {
        'small': { 
            filters: ['desktop', 'telegram', 'graphic'], // <--- حالا چندتاییه
            label: 'مناسب برای مغازه‌ها',
            ids: [4, 7, 5]
        },
        'chain': { 
            filters: ['desktop', 'automation'], 
            label: 'مناسب فروشگاه‌های زنجیره‌ای',
            ids: [1, 4]
        },
        'corporate': { 
            filters: ['automation', 'web'], 
            label: 'مناسب شرکت‌ها و کارخانه‌ها',
            ids: [1, 2, 3]
        },
        'online': { 
            filters: ['web', 'copywriting', 'graphic'], 
            label: 'مناسب فروش آنلاین',
            ids: [6, 3, 5]
        }
    };

    if (category && categoryData[category]) {
        const data = categoryData[category];
        
        // ۱. فعال کردن خودکار چند فیلتر با هم
        currentFilters = data.filters; 
        
        // پاک کردن حالت فعال از همه دکمه‌ها
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        
        // فعال کردن دکمه‌های مربوطه
        data.filters.forEach(f => {
            const btn = document.querySelector(`.filter-btn[data-filter="${f}"]`);
            if (btn) btn.classList.add('active');
        });

        // ۲. اضافه کردن برچسب شخصی‌سازی به کارت‌های مربوطه
        setTimeout(() => {
            data.ids.forEach(id => {
                const card = document.querySelector(`.project-card[data-id="${id}"]`);
                if (card) {
                    const badge = document.createElement('span');
                    badge.className = 'absolute top-3 right-3 bg-[#64FFDA] text-[#0A192F] text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20';
                    badge.innerText = data.label;
                    card.style.position = 'relative';
                    card.appendChild(badge);
                }
            });
        }, 300); 
    }

    if (category && categoryData[category]) {
        const data = categoryData[category];
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');
        
        // اگر روی "همه" کلیک شد، بقیه پاک بشن
        if (filterValue === 'all') {
            currentFilters = ['all'];
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        } else {
            // اگر "همه" فعال بود، غیرفعالش کن
            currentFilters = currentFilters.filter(f => f !== 'all');
            document.querySelector('.filter-btn[data-filter="all"]').classList.remove('active');

            // اگر این فیلتر قبلاً فعال بود، غیرفعالش کن (Toggle)
            if (currentFilters.includes(filterValue)) {
                currentFilters = currentFilters.filter(f => f !== filterValue);
                btn.classList.remove('active');
            } else {
                // اگر فعال نبود، اضافه‌اش کن
                currentFilters.push(filterValue);
                btn.classList.add('active');
            }

            // اگر هیچ فیلتری انتخاب نشد، به "همه" برگرد
            if (currentFilters.length === 0) {
                currentFilters = ['all'];
                document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            }
        }
        
        renderProjects();
    });
});

        // ۲. اضافه کردن برچسب شخصی‌سازی به کارت‌های مربوطه بعد از رندر شدن
        setTimeout(() => {
            data.ids.forEach(id => {
                const card = document.querySelector(`.project-card[data-id="${id}"]`);
                if (card) {
                    // ساخت برچسب
                    const badge = document.createElement('span');
                    badge.className = 'absolute top-3 right-3 bg-turquoise text-navy text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20';
                    badge.innerText = data.label;
                    card.style.position = 'relative'; // برای اینکه برچسب درست قرار بگیره
                    card.appendChild(badge);
                }
            });
        }, 300); // صبر می‌کنیم تا کارت‌ها رندر بشن
    }

            // 🔗 داینامیک کردن لینک پکیج الماسی
    const packageLinks = document.querySelectorAll('a[href="full-package.html"], a[href^="full-package.html?"]');
    
    if (packageLinks.length > 0) {
        packageLinks.forEach(link => {
            if (category) {
                link.href = `full-package.html?category=${category}`;
            } else {
                link.href = `full-package.html`; // لینک عادی اگر کاربر از دسته‌بندی نیومده باشه
            }
        });
    }

    // ======================================================================
    // ۳. توابع رندر
    // ======================================================================
    function renderProjects() {
        const filtered = solutionsData.filter(p => {
            const matchFilter = currentFilters.includes('all') || currentFilters.includes(p.category);
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