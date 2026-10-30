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
        {
            id: 8,
            title: "نرم‌افزار صندوق فروش (POS) + مدیریت انبار",
            description: "صندوق فروش هوشمند و مدیریت انبار. دفتر و دستک و ماشین‌حساب را کنار بگذارید؛ فروش مغازه‌تان را دیجیتال و بدون خطا مدیریت کنید.",
            longDescription: "این نرم‌افزار به صورت اختصاصی برای مغازه‌داران طراحی شده است. با یک رابط کاربری لمسی و ساده، می‌توانید محصولات را با یک کلیک به سبد خرید اضافه کنید، فاکتور صادر کنید و موجودی انبار را لحظه‌ای مدیریت کنید. بدون نیاز به اینترنت و با سرعت بالا.",
            category: "desktop",
            categoryLabel: "نرم‌افزار دسکتاپ",
            icon: "fa-solid fa-cash-register",
            tags: ["C#", "SQL Server", "POS", "Desktop"],
            features: [
                "ثبت فاکتور در کسری از ثانیه", 
                "هشدار خودکار کمبود موجودی", 
                "بدون نیاز به اینترنت (لوکال)", 
                "مدیریت آسان محصولات"
            ],
            images: [
                "assets/img/projects-Picture/pos-demo.webp" // نام عکسی که اسکرین‌شات گرفتی
            ],
            demoLink: "demo-pos.html" // لینک به فایل دمویی که ساختیم
        },
        {
            id: 9,
            title: "ربات تلگرام نوبت‌دهی (منشی دیجیتال)",
            description: "منشی دیجیتال مغازه شما. رباتی که ۲۴ ساعته نوبت می‌گیرد، به سوالات جواب می‌دهد و هیچ مشتری‌ای را از دست نمی‌دهد.",
            longDescription: "این ربات به صورت اختصاصی برای کسب‌وکارهای خدماتی مثل آرایشگاه‌ها، کلینیک‌ها و تعمیرگاه‌ها طراحی شده است. مشتریان بدون نیاز به تماس تلفنی، در هر ساعتی از شبانه‌روز از داخل تلگرام نوبت می‌گیرند. ربات به صورت خودکار زمان‌های خالی را نشان می‌دهد و نوبت را ثبت می‌کند.",
            category: "telegram",
            categoryLabel: "ربات تلگرام",
            icon: "fa-solid fa-calendar-check",
            tags: ["Python", "Telegram API", "Bot", "Automation"],
            features: [
                "نوبت‌دهی ۲۴ ساعته بدون تماس تلفنی", 
                "نمایش خودکار زمان‌های خالی", 
                "یادآوری خودکار به مشتری", 
                "مدیریت آسان از داخل تلگرام"
            ],
            images: [
                "assets/img/projects-Picture/telegram-booking-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "demo-telegram.html" // لینک به فایل دمویی که ساختیم
        },
        {
            id: 10,
            title: "منو و کارت ویزیت دیجیتال (QR-Code)",
            description: "منو و ویترین دیجیتال با یک اسکن ساده. جایگزین بروشورهای کاغذی که دور ریخته می‌شوند؛ مشتری با یک اسکن به همه‌چیز دسترسی دارد.",
            longDescription: "این پروژه یک وب‌اپلیکیشن فوق‌العاده سبک و واکنش‌گرا است که با اسکن یک QR-Code روی میز یا ویترین مغازه باز می‌شود. مشتری می‌تواند منوی کافه، لیست قیمت‌ها، دکمه تماس مستقیم، مسیریابی (اتصال به نقشه) و لینک اینستاگرام شما را در یک صفحه زیبا و بدون نصب هیچ اپلیکیشنی ببیند.",
            category: "web",
            categoryLabel: "توسعه وب",
            icon: "fa-solid fa-qrcode",
            tags: ["HTML", "CSS", "JavaScript", "QR-Code"],
            features: [
                "بدون نیاز به نصب اپلیکیشن", 
                "به‌روزرسانی آسان قیمت‌ها", 
                "اتصال مستقیم به تماس و مسیریابی", 
                "تجربه کاربری فوق‌العاده سریع"
            ],
            images: [
                "assets/img/projects-Picture/digital-card-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "demo-digital-card.html" // لینک به فایل دمو
        },
        {
            id: 11,
            title: "داشبورد مدیریت مرکزی و انتقال موجودی",
            description: "کنترل کامل همه شعبه‌ها در یک نگاه. سیستمی که مدیرعامل بتواند لحظه‌ای موجودی تمام شعبه‌ها را ببیند و کالاها را بین شعبه‌ها جابه‌جا کند.",
            longDescription: "این پنل مدیریتی به صورت اختصاصی برای فروشگاه‌های زنجیره‌ای طراحی شده است. مدیرعامل می‌تواند در یک نگاه فروش روزانه هر شعبه را ببیند، وضعیت صندوق‌ها را چک کند و در صورت کمبود موجودی در یک شعبه، با یک کلیک کالا را از شعبه دیگر انتقال دهد. پایان پراکندگی اطلاعات و آمارهای اشتباه.",
            category: "desktop",
            categoryLabel: "نرم‌افزار دسکتاپ",
            icon: "fa-solid fa-chart-pie",
            tags: ["React", "Node.js", "Dashboard", "Management"],
            features: [
                "مشاهده لحظه‌ای فروش تمام شعبه‌ها", 
                "مدیریت متمرکز انبار", 
                "انتقال آسان کالا بین شعبه‌ها", 
                "گزارش‌گیری دقیق و بدون خطا"
            ],
            images: [
                "assets/img/projects-Picture/chain-dashboard-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "demo-dashboard.html" // لینک به فایل دمو
        },
        {
            id: 12,
            title: "سیستم یکپارچه وفاداری مشتریان (باشگاه مشتریان)",
            description: "مشتری‌ها را به خرید مجدد تشویق کنید. کارت امتیازی هوشمندی که مشتری با خرید از هر شعبه، امتیاز جمع می‌کند و جایزه می‌گیرد.",
            longDescription: "این سیستم یک کارت عضویت دیجیتال است که برای تمام شعبه‌های شما یکپارچه عمل می‌کند. مشتری با هر خرید، امتیاز دریافت می‌کند و می‌تواند امتیازات خود را در قالب تخفیف یا جایزه نقدی خرج کند. این کار باعث می‌شود مشتریان وفادار شوند و برای رسیدن به جایزه بعدی، دوباره به فروشگاه شما برگردند.",
            category: "desktop",
            categoryLabel: "نرم‌افزار دسکتاپ",
            icon: "fa-solid fa-gift",
            tags: ["CRM", "Loyalty", "React", "Database"],
            features: [
                "تجمیع امتیاز از تمام شعبه‌ها", 
                "نمایش نوار پیشرفت تا جایزه بعدی", 
                "تاریخچه کامل خرید مشتری", 
                "کاملاً متصل به سیستم صندوق فروش (POS)"
            ],
            images: [
                "assets/img/projects-Picture/loyalty-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "demo-loyalty.html" // لینک به فایل دمو
        },
        {
            id: 13,
            title: "اتوماسیون فاکتور و حسابداری",
            description: "پایان کاغذبازی و تایپ دستی. سیستمی که فاکتورهای تمام شعبه‌ها را جمع‌آوری، پردازش و در سیستم حسابداری ثبت می‌کند.",
            longDescription: "این سیستم یک راه‌حل جامع برای مدیران مالی فروشگاه‌های زنجیره‌ای است. به جای اینکه حسابدار فاکتورهای هر شعبه را تک‌تک تایپ کند، سیستم به صورت خودکار فایل‌ها را خوانده، مبالغ را جمع‌بندی کرده و در دیتابیس حسابداری ثبت می‌کند. خطای انسانی صفر و صرفه‌جویی در زمان، بزرگترین مزیت این اتوماسیون است.",
            category: "automation",
            categoryLabel: "اتوماسیون",
            icon: "fa-solid fa-file-invoice-dollar",
            tags: ["Python", "SQL", "Automation", "Excel"],
            features: [
                "پردازش گروهی فاکتورها با یک کلیک", 
                "حذف کامل خطای انسانی در ثبت مبالغ", 
                "اتصال خودکار به دیتابیس حسابداری", 
                "گزارش‌گیری لحظه‌ای از فروش شعبه‌ها"
            ],
            images: [
                "assets/img/projects-Picture/accounting-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "demo-accounting.html" // لینک به فایل دمو
        },
        {
            id: 14,
            title: "سیستم اتوماسیون اداری و گردش کار (Workflow)",
            description: "پایان کاغذبازی‌های اداری. سیستمی که درخواست‌های مرخصی، خرید و مکاتبات را به صورت مرحله‌ای و سیستمی تایید می‌کند.",
            longDescription: "این نرم‌افزار برای شرکت‌ها و کارخانه‌هایی طراحی شده که هنوز از فرم‌های کاغذی برای تایید درخواست‌ها استفاده می‌کنند. کارمند درخواست خود را ثبت می‌کند، مدیر مستقیم آن را تایید یا رد می‌کند و سپس منابع انسانی تایید نهایی را انجام می‌دهد. تمام این مراحل در یک پنل شفاف و با ثبت تاریخ و زمان دقیق انجام می‌شود.",
            category: "automation",
            categoryLabel: "اتوماسیون",
            icon: "fa-solid fa-network-wired",
            tags: ["PHP", "Laravel", "MySQL", "Workflow"],
            features: [
                "تایید مرحله‌ای درخواست‌ها (گردش کار)", 
                "حذف کامل فرم‌ها و امضاهای کاغذی", 
                "مشاهده وضعیت درخواست در هر لحظه", 
                "آرشیو امن و دیجیتال اسناد"
            ],
            images: [
                "assets/img/projects-Picture/workflow-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "Projects/demo-workflow.html" // مسیر آپدیت شد
        },
        {
            id: 15,
            title: "نرم‌افزار مدیریت ارتباط با مشتری (CRM)",
            description: "مشتریان عمده را فراموش نکنید. سیستمی که سابقه تماس‌ها، مذاکرات، بدهی‌ها و خریدهای هر مشتری را در یک پنل شفاف نشان می‌دهد.",
            longDescription: "در فروش B2B (شرکت به شرکت)، حفظ مشتری از پیدا کردن مشتری جدید مهم‌تر است. این نرم‌افزار به تیم فروش شما کمک می‌کند تا تاریخچه کامل تعاملات با هر مشتری را ببینند. از آخرین تماس تلفنی و پیش‌فاکتورهای ارسالی تا وضعیت چک‌ها و مانده حساب. دیگر هیچ پیگیری از قلم نمی‌افتد.",
            category: "desktop",
            categoryLabel: "نرم‌افزار دسکتاپ",
            icon: "fa-solid fa-users-viewfinder",
            tags: ["C#", "SQL Server", "CRM", "B2B"],
            features: [
                "تاریخچه کامل تماس‌ها و مذاکرات", 
                "مدیریت چک‌ها و مانده حساب مشتری", 
                "تحلیل رفتار خرید هر مشتری", 
                "یادآوری خودکار برای پیگیری‌ها"
            ],
            images: [
                "assets/img/projects-Picture/crm-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "Projects/demo-crm.html" // مسیر آپدیت شد
        },
        {
            id: 16,
            title: "وب‌سایت شرکتی + کاتالوگ دیجیتال محصولات",
            description: "حضور حرفه‌ای در وب برای کارخانه‌ها. به جای بروشورهای کاغذی، محصولات و مشخصات فنی خود را در یک کاتالوگ دیجیتال به خریداران عمده نشان دهید.",
            longDescription: "این وب‌سایت به صورت اختصاصی برای کارخانه‌ها و شرکت‌های تولیدی طراحی شده است. خریداران عمده (B2B) می‌توانند لیست محصولات، مشخصات فنی دقیق و استانداردها را بررسی کنند و با یک کلیک درخواست استعلام قیمت بدهند. این سایت حس اعتماد و اعتبار را به برند صنعتی شما منتقل می‌کند و جایگزین کاملی برای کاتالوگ‌های کاغذی است.",
            category: "web",
            categoryLabel: "توسعه وب",
            icon: "fa-solid fa-industry",
            tags: ["HTML", "Tailwind", "UI/UX", "B2B"],
            features: [
                "نمایش مشخصات فنی دقیق محصولات", 
                "دانلود کاتالوگ دیجیتال (PDF)", 
                "فرم استعلام قیمت برای خریداران عمده", 
                "طراحی کاملاً رسمی و اعتمادآفرین"
            ],
            images: [
                "assets/img/projects-Picture/corporate-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "Projects/demo-corporate.html" // مسیر آپدیت شد
        },
        {
            id: 17,
            title: "قالب فروشگاه اینترنتی + درگاه پرداخت",
            description: "از دایرکت اینستاگرام خسته شدید؟ یک فروشگاه آنلاین مستقل و حرفه‌ای با سبد خرید و درگاه پرداخت اختصاصی برای فروش بدون واسطه.",
            longDescription: "این قالب فروشگاهی مدرن و فوق‌سریع طراحی شده است. مشتری می‌تواند محصولات را با جزئیات کامل ببیند، رنگ و سایز را انتخاب کند و به سبد خرید اضافه کند. این پروژه آماده اتصال به درگاه‌های پرداخت ایرانی (زرین‌پال، آیدی‌پی) و سیستم‌های ارسال است تا فروش شما را به صورت خودکار مدیریت کند.",
            category: "web",
            categoryLabel: "توسعه وب",
            icon: "fa-solid fa-cart-shopping",
            tags: ["React", "Tailwind", "E-Commerce", "UI/UX"],
            features: [
                "صفحه محصول با انتخاب رنگ و سایز", 
                "سبد خرید و فرآیند پرداخت آسان", 
                "کاملاً واکنش‌گرا (موبایل و دسکتاپ)", 
                "آماده اتصال به درگاه‌های پرداخت"
            ],
            images: [
                "assets/img/projects-Picture/ecommerce-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "Projects/demo-ecommerce.html" // مسیر آپدیت شد
        },
        {
            id: 18,
            title: "صفحه فرود (Landing Page) اختصاصی",
            description: "تمرکز روی فروش یک محصول خاص. صفحه‌ای که با متن‌های قانع‌کننده و ایجاد حس فوریت، بازدیدکننده را به مشتری تبدیل می‌کند.",
            longDescription: "اگر یک محصول، دوره آموزشی یا خدمت خاص دارید، صفحه فرود بهترین ابزار برای فروش آن است. این صفحه به جای اینکه کاربر را در سایت سرگردان کند، تمام تمرکز را روی یک هدف می‌گذارد: متقاعد کردن کاربر به کلیک روی دکمه خرید. شامل بخش مزایا، نوار فوریت و کارت قیمت جذاب است.",
            category: "copywriting",
            categoryLabel: "کمپین‌نویسی",
            icon: "fa-solid fa-bullseye",
            tags: ["Landing Page", "Copywriting", "CRO", "HTML/CSS"],
            features: [
                "ایجاد حس فوریت (Urgency) برای خرید", 
                "دکمه اسکرول هوشمند به بخش قیمت", 
                "بخش مزایا با آیکون‌های جذاب", 
                "طراحی بهینه برای نرخ تبدیل بالا (CRO)"
            ],
            images: [
                "assets/img/projects-Picture/landing-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "Projects/demo-landing.html" // مسیر آپدیت شد
        },
        {
            id: 19,
            title: "ربات تلگرام فروشگاهی (مینی‌اپ)",
            description: "فروشگاه خود را به تلگرام ببرید. رباتی که محصولات را با عکس نشان می‌دهد، سبد خرید دارد و مشتری بدون خروج از تلگرام پرداخت می‌کند.",
            longDescription: "این ربات برای کسب‌وکارهایی طراحی شده که می‌خواهند بدون هزینه‌های سنگین راه‌اندازی سایت، فروش آنلاین داشته باشند. مشتری با دکمه‌های شیشه‌ای محصولات را مرور می‌کند، به سبد خرید اضافه می‌کند و فاکتور نهایی را دریافت می‌کند. این ربات تجربه‌ای بسیار سریع و راحت برای مشتریان تلگرامی شما فراهم می‌کند.",
            category: "telegram",
            categoryLabel: "ربات تلگرام",
            icon: "fa-brands fa-telegram",
            tags: ["Python", "Telegram API", "E-Commerce", "Payment"],
            features: [
                "نمایش محصولات با دکمه‌های شیشه‌ای", 
                "سبد خرید و محاسبه خودکار فاکتور", 
                "اتصال به درگاه پرداخت (زرین‌پال)", 
                "بدون نیاز به خروج از اپلیکیشن تلگرام"
            ],
            images: [
                "assets/img/projects-Picture/shop-bot-demo.webp" // نام عکسی که از دمو گرفتی
            ],
            demoLink: "Projects/demo-shop-bot.html" // مسیر آپدیت شد
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
        'small': { filters: ['desktop', 'telegram', 'graphic'], label: 'مناسب برای مغازه‌ها', ids: [4, 7, 5, 8, 9, 10] },
        'chain': { filters: ['desktop', 'automation'], label: 'مناسب فروشگاه‌های زنجیره‌ای', ids: [1, 4, 11, 12, 13] },
        'corporate': { filters: ['automation', 'web'], label: 'مناسب شرکت‌ها و کارخانه‌ها', ids: [1, 2, 3, 14, 15, 16] },
        'online': { filters: ['web', 'copywriting', 'graphic'], label: 'مناسب فروش آنلاین', ids: [6, 3, 5, 17, 18, 19] }
    };

    if (category && categoryData[category]) {
        const data = categoryData[category];
        
        // اعمال خودکار فیلترها
        currentFilters = data.filters; 
        
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        data.filters.forEach(f => {
            const btn = document.querySelector(`.filter-btn[data-filter="${f}"]`);
            if (btn) btn.classList.add('active');
        });
        
        // پاک کردن حالت فعال از همه دکمه‌ها
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        
        // فعال کردن دکمه‌های مربوطه
        data.filters.forEach(f => {
            const btn = document.querySelector(`.filter-btn[data-filter="${f}"]`);
            if (btn) btn.classList.add('active');
        });

        // اضافه کردن برچسب شخصی‌سازی
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

            // 🔗 داینامیک کردن لینک پکیج
    const packageLinks = document.querySelectorAll('a[href="full-package.html"], a[href^="full-package.html?"]');

    if (packageLinks.length > 0) {
        packageLinks.forEach(link => {
            link.href = category ? `full-package.html?category=${category}` : `full-package.html`;
        });
    }

    // اجرای اولیه
    renderProjects();

    // ======================================================================
    // ۳. توابع رندر
    // ======================================================================
        function renderProjects() {
        const filtered = solutionsData.filter(p => {
            // فیلتر دسته‌بندی
            const matchFilter = currentFilters.includes('all') || currentFilters.includes(p.category);
            
            // فیلتر جستجو
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
            const filterValue = btn.getAttribute('data-filter');
            
            if (filterValue === 'all') {
                // اگر روی "همه" کلیک شد، همه چی ریست میشه
                currentFilters = ['all'];
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                // اگر "همه" فعال بود، از حالت فعال درش بیار
                currentFilters = currentFilters.filter(f => f !== 'all');
                document.querySelector('.filter-btn[data-filter="all"]').classList.remove('active');

                if (currentFilters.includes(filterValue)) {
                    // اگر این فیلتر از قبل فعال بود، غیرفعالش کن
                    currentFilters = currentFilters.filter(f => f !== filterValue);
                    btn.classList.remove('active');
                } else {
                    // اگر فعال نبود، فعالش کن
                    currentFilters.push(filterValue);
                    btn.classList.add('active');
                }

                // اگر هیچ فیلتری نموند، برگرد به حالت "همه"
                if (currentFilters.length === 0) {
                    currentFilters = ['all'];
                    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
                }
            }
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