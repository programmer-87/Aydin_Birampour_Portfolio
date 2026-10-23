// ==========================================
// ۱. تنظیمات
// ==========================================
const WHATSAPP_NUMBER = "989123456789";
const SITE_URL = window.location.origin + window.location.pathname;

const projectsData = [
  {
    id: 1, title: "لندینگ پیج استارتاپ",
    description: "یک صفحه فرود مدرن و واکنش‌گرا برای معرفی محصول استارتاپ با طراحی مینیمال و سرعت بالا.",
    longDescription: "این لندینگ پیج با تمرکز بر نرخ تبدیل (Conversion Rate) طراحی شده است. شامل بخش‌های معرفی محصول، مزیت‌های رقابتی، نظرات مشتریان و فرم ثبت‌نام است.",
    category: "web", categoryLabel: "توسعه وب", icon: "fa-solid fa-laptop-code",
    tags: ["HTML/CSS", "JavaScript", "Tailwind"],
    features: ["طراحی واکنش‌گرا", "بهینه‌سازی سرعت", "سازگار با سئو", "فرم ارتباطی هوشمند"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80"
    ],
    demoLink: "https://example.com"
  },
  {
    id: 2, title: "داشبورد مدیریت سفارشات",
    description: "سیستم اتوماسیون ثبت سفارشات با پنل ادمین و گزارش‌گیری لحظه‌ای.",
    longDescription: "یک پنل مدیریت جامع که تمام فرآیند ثبت سفارش تا ارسال را پوشش می‌دهد. دارای نمودارهای تحلیلی و سیستم اطلاع‌رسانی خودکار.",
    category: "automation", categoryLabel: "اتوماسیون", icon: "fa-solid fa-robot",
    tags: ["React", "Node.js", "API"],
    features: ["پنل ادمین اختصاصی", "گزارش‌گیری لحظه‌ای", "اطلاع‌رسانی خودکار", "خروجی Excel"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    ],
    demoLink: "https://example.com"
  },
  {
    id: 3, title: "پکیج هویت بصری برند",
    description: "مجموعه‌ای کامل از لوگو، کارت ویزیت و ست اداری برای برندهای نوپا.",
    longDescription: "این پکیج شامل طراحی لوگوی اختصاصی، انتخاب پالت رنگی، تایپوگرافی و طراحی تمام اقلام اداری است.",
    category: "graphic", categoryLabel: "گرافیک", icon: "fa-solid fa-palette",
    tags: ["Illustrator", "Photoshop", "Brand"],
    features: ["لوگوی اختصاصی", "پالت رنگی استاندارد", "ست اداری کامل", "راهنمای برند"],
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80"
    ],
    demoLink: "https://example.com"
  },
  {
    id: 4, title: "کمپین تبلیغاتی فروش عید",
    description: "بسته کامل کمپین‌نویسی برای شبکه‌های اجتماعی شامل کپشن‌ها و قالب‌های استوری.",
    longDescription: "یک بسته کامل از محتوای متنی برای کمپین فروش ویژه عید. شامل ۳۰ کپشن آماده و ۱۰ قالب استوری.",
    category: "copywriting", categoryLabel: "کمپین‌نویسی", icon: "fa-solid fa-bullhorn",
    tags: ["Instagram", "Copywriting", "Marketing"],
    features: ["۳۰ کپشن آماده", "قالب‌های استوری", "سناریوی تبلیغاتی", "هماهنگی با لحن برند"],
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80"
    ],
    demoLink: "https://example.com"
  },
  {
    id: 5, title: "قالب فروشگاهی اختصاصی",
    description: "قالب فرانت‌اند آماده برای فروشگاه‌های اینترنتی با تمرکز بر تجربه کاربری.",
    longDescription: "این قالب فروشگاهی با تمرکز بر روان بودن فرآیند خرید طراحی شده است. شامل صفحه محصول، سبد خرید، صفحه پرداخت و پنل کاربری.",
    category: "web", categoryLabel: "توسعه وب", icon: "fa-solid fa-cart-shopping",
    tags: ["E-commerce", "UI/UX", "Vue.js"],
    features: ["سبد خرید پیشرفته", "صفحه پرداخت امن", "پنل کاربری", "جستجوی هوشمند"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80"
    ],
    demoLink: "https://example.com"
  },
  {
    id: 6, title: "اتوماسیون ارسال ایمیل و پیامک",
    description: "بسته پایه برای خودکارسازی ارسال پیام‌های اطلاع‌رسانی به مشتریان.",
    longDescription: "این سیستم به شما اجازه می‌دهد تا به صورت خودکار به مشتریان جدید خوش‌آمد بگویید و کمپین‌های ایمیلی بسازید.",
    category: "automation", categoryLabel: "اتوماسیون", icon: "fa-solid fa-envelope-open-text",
    tags: ["Zapier", "Email", "SMS"],
    features: ["ایمیل خوش‌آمدگویی", "یادآوری خودکار", "مدیریت کانتکت‌ها", "اتصال پیامکی"],
    images: [
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80"
    ],
    demoLink: "https://example.com"
  }
];

// ==========================================
// ۲. المان‌ها
// ==========================================
const grid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const backToTopBtn = document.getElementById('back-to-top');
const modal = document.getElementById('project-modal');
const closeBtn = document.getElementById('modal-close');
const sliderTrack = document.getElementById('slider-track');
const sliderDots = document.getElementById('slider-dots');
const imgCounter = document.getElementById('img-counter');
const prevBtn = document.getElementById('prev-img');
const nextBtn = document.getElementById('next-img');
const scrollProgress = document.getElementById('scroll-progress');
const toastContainer = document.getElementById('toast-container');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const shareBar = document.querySelector('.modal-share-bar');

let currentImageIndex = 0;
let totalImages = 0;
let currentFilter = 'all';
let currentSearch = '';
let currentProject = null;
let activeAutocompleteIndex = -1;  // ✅ جدید
let autocompleteDebounceTimer = null;  // ✅ جدید

// ==========================================
// ۳. Toast
// ==========================================
function showToast(message, type = 'success', duration = 3500) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation';
  toast.innerHTML = `
    <div class="toast-icon"><i class="${icon}"></i></div>
    <span style="flex:1; line-height:1.6;">${message}</span>
    <button class="toast-close" aria-label="بستن"><i class="fa-solid fa-xmark"></i></button>
  `;
  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  const remove = () => {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 400);
  };
  toast.querySelector('.toast-close').addEventListener('click', remove);
  setTimeout(remove, duration);
}

// ==========================================
// ۴. تم روشن/تاریک
// ==========================================
function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    document.body.classList.remove('light-mode');
    themeIcon.className = 'fa-solid fa-moon';
  }
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('solutions_theme'); } catch(e) {}
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = saved || (prefersLight ? 'light' : 'dark');
  applyTheme(theme);
  // پس از رندر، ترنزیشن را فعال کن
  setTimeout(() => document.body.classList.remove('no-transition'), 100);
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.contains('light-mode');
  const newTheme = isLight ? 'dark' : 'light';
  applyTheme(newTheme);
  try { localStorage.setItem('solutions_theme', newTheme); } catch(e) {}
  showToast(newTheme === 'light' ? 'حالت روشن فعال شد ☀️' : 'حالت تاریک فعال شد 🌙', 'success', 2000);
});

// ==========================================
// ۵. ذخیره فیلترها
// ==========================================
function saveFilters() {
  try {
    localStorage.setItem('solutions_filter', currentFilter);
    localStorage.setItem('solutions_search', currentSearch);
  } catch(e) {}
}

function loadFilters() {
  try {
    const savedFilter = localStorage.getItem('solutions_filter');
    const savedSearch = localStorage.getItem('solutions_search');
    if (savedFilter) currentFilter = savedFilter;
    if (savedSearch) currentSearch = savedSearch;
  } catch(e) {}
  // اعمال به UI
  filterBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.filter === currentFilter);
  });
  if (currentSearch) {
    searchInput.value = currentSearch;
    clearSearchBtn.classList.add('visible');
  }
}

// ==========================================
// ۶. Skeleton
// ==========================================
function showSkeleton(count = 6) {
  grid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const sk = document.createElement('div');
    sk.className = 'skeleton-card';
    sk.innerHTML = `
      <div class="skeleton-shape skeleton-icon"></div>
      <div class="skeleton-shape skeleton-line mid"></div>
      <div class="skeleton-shape skeleton-line"></div>
      <div class="skeleton-shape skeleton-line short"></div>
      <div class="mt-4">
        <span class="skeleton-shape skeleton-tag"></span>
        <span class="skeleton-shape skeleton-tag"></span>
      </div>
    `;
    grid.appendChild(sk);
  }
}

// ==========================================
// ۷. رندر کارت‌ها
// ==========================================
function renderProjects() {
  const filtered = projectsData.filter(p => {
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
        <button onclick="resetFilters()" class="mt-4 text-sm underline" style="color: var(--accent);">پاک کردن فیلترها</button>
      </div>
    `;
    return;
  }

  filtered.forEach((project, index) => {
    const card = document.createElement('article');
    card.style.animationDelay = `${index * 0.06}s`;
    card.className = 'project-card p-6 observe-fade';
    card.setAttribute('data-id', project.id);
    card.addEventListener('click', () => openModal(project));

    const tagsHtml = project.tags.map(tag =>
      `<span class="card-tag inline-block text-[11px] px-2.5 py-1 rounded-md border" style="background: var(--bg-input); border-color: var(--border-soft); color: var(--text-slate);" data-tag="${tag}">${tag}</span>`
    ).join('');

    card.innerHTML = `
      <div class="card-icon-wrapper"><i class="${project.icon}"></i></div>
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-bold" style="color: var(--text-white);">${project.title}</h3>
        <span class="text-[10px] px-2 py-1 rounded-full border" style="background: var(--accent-bg); color: var(--accent); border-color: var(--accent-border);">${project.categoryLabel}</span>
      </div>
      <p class="text-sm leading-6 mb-4 text-justify" style="color: var(--text-slate);">${project.description}</p>
      <div class="flex flex-wrap gap-1.5 mb-2">${tagsHtml}</div>
      <div class="card-action-btn mt-auto">
        <span>مشاهده جزئیات</span>
        <i class="fa-solid fa-arrow-left text-xs"></i>
      </div>
    `;
    grid.appendChild(card);

    card.querySelectorAll('.card-tag').forEach(tagEl => {
      tagEl.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSearch = tagEl.getAttribute('data-tag');
        searchInput.value = currentSearch;
        clearSearchBtn.classList.add('visible');
        saveFilters();
        renderProjects();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  setupIntersectionObserver();
}

let observer;
function setupIntersectionObserver() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.observe-fade').forEach(el => observer.observe(el));
}

// ==========================================
// ۸. فیلتر و جستجو
// ==========================================
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    saveFilters();
    renderProjects();
  });
});

// ==========================================
// ۵. جستجو + Autocomplete
// ==========================================
searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value.trim();
  clearSearchBtn.classList.toggle('visible', currentSearch.length > 0);
  saveFilters();
  renderProjects();
  updateAutocomplete(currentSearch);  // ✅ Autocomplete
});

searchInput.addEventListener('focus', () => {
  if (searchInput.value.trim().length > 0) {
    updateAutocomplete(searchInput.value.trim());
  }
});

// بستن با کلیک بیرون
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) {
    closeAutocomplete();
  }
});

// ==========================================
// ✅ Autocomplete Logic
// ==========================================
function buildAutocompleteData() {
  const suggestions = [];
  
  // پروژه‌ها
  projectsData.forEach(p => {
    suggestions.push({
      type: 'project',
      label: p.title,
      sub: p.description.substring(0, 60) + '...',
      value: p.title,
      icon: p.icon,
      id: p.id
    });
  });

  // تگ‌ها (یکتا)
  const uniqueTags = [...new Set(projectsData.flatMap(p => p.tags))];
  uniqueTags.forEach(tag => {
    const count = projectsData.filter(p => p.tags.includes(tag)).length;
    suggestions.push({
      type: 'tag',
      label: tag,
      sub: `${count} پروژه`,
      value: tag,
      icon: 'fa-solid fa-tag'
    });
  });

  // دسته‌بندی‌ها
  const uniqueCategories = [...new Map(projectsData.map(p => [p.category, p])).values()];
  uniqueCategories.forEach(cat => {
    const count = projectsData.filter(p => p.category === cat.category).length;
    suggestions.push({
      type: 'category',
      label: cat.categoryLabel,
      sub: `${count} پروژه`,
      value: cat.categoryLabel,
      icon: 'fa-solid fa-folder'
    });
  });

  return suggestions;
}

let autocompleteData = [];  // پر می‌شود در DOMContentLoaded

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escaped.replace(regex, '<span class="autocomplete-match">$1</span>');
}

function updateAutocomplete(query) {
  clearTimeout(autocompleteDebounceTimer);
  
  if (!query || query.length < 1) {
    closeAutocomplete();
    return;
  }

  autocompleteDebounceTimer = setTimeout(() => {
    const lowerQuery = query.toLowerCase();
    const results = autocompleteData
      .filter(item => 
        item.label.toLowerCase().includes(lowerQuery) ||
        (item.sub && item.sub.toLowerCase().includes(lowerQuery))
      )
      .slice(0, 8);  // حداکثر ۸ نتیجه

    renderAutocomplete(results, query);
  }, 180);  // debounce 180ms
}

function renderAutocomplete(results, query) {
  const list = document.getElementById('autocomplete-list');
  
  if (results.length === 0) {
    list.innerHTML = `
      <div class="autocomplete-empty">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>نتیجه‌ای برای «${escapeHtml(query)}» پیدا نشد</span>
      </div>
    `;
    openAutocomplete();
    activeAutocompleteIndex = -1;
    return;
  }

  // گروه‌بندی بر اساس type
  const groups = {
    project: { label: 'پروژه‌ها', items: [] },
    tag: { label: 'تگ‌ها', items: [] },
    category: { label: 'دسته‌بندی‌ها', items: [] }
  };
  results.forEach(r => groups[r.type].items.push(r));

  let html = '';
  let itemIndex = 0;
  Object.values(groups).forEach(group => {
    if (group.items.length === 0) return;
    html += `<div class="autocomplete-group-label">${group.label}</div>`;
    group.items.forEach(item => {
      const iconClass = item.type === 'tag' ? 'tag-icon' : 
                        item.type === 'category' ? 'category-icon' : '';
      const badgeClass = item.type === 'tag' ? 'tag-badge' : 
                          item.type === 'category' ? 'category-badge' : '';
      const badgeLabel = item.type === 'project' ? 'پروژه' : 
                          item.type === 'tag' ? 'تگ' : 'دسته';
      
      html += `
        <div class="autocomplete-item" 
             role="option"
             data-index="${itemIndex}" 
             data-value="${escapeHtml(item.value)}"
             data-type="${item.type}"
             data-project-id="${item.id || ''}">
          <div class="autocomplete-icon ${iconClass}">
            <i class="${item.icon}"></i>
          </div>
          <div class="autocomplete-text">
            <div class="autocomplete-title">${highlightMatch(item.label, query)}</div>
            ${item.sub ? `<div class="autocomplete-sub">${escapeHtml(item.sub)}</div>` : ''}
          </div>
          <span class="autocomplete-badge ${badgeClass}">${badgeLabel}</span>
        </div>
      `;
      itemIndex++;
    });
  });

  list.innerHTML = html;
  openAutocomplete();
  activeAutocompleteIndex = -1;

  // رویداد کلیک روی هر آیتم
  list.querySelectorAll('.autocomplete-item').forEach(el => {
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();  // جلوگیری از blur شدن input
      selectAutocompleteItem(el);
    });
  });
}

function openAutocomplete() {
  const list = document.getElementById('autocomplete-list');
  list.classList.add('open');
  list.setAttribute('aria-hidden', 'false');
  searchInput.setAttribute('aria-expanded', 'true');
}

function closeAutocomplete() {
  const list = document.getElementById('autocomplete-list');
  list.classList.remove('open');
  list.setAttribute('aria-hidden', 'true');
  searchInput.setAttribute('aria-expanded', 'false');
  activeAutocompleteIndex = -1;
}

function selectAutocompleteItem(el) {
  const type = el.getAttribute('data-type');
  const value = el.getAttribute('data-value');
  const projectId = el.getAttribute('data-project-id');

  closeAutocomplete();

  if (type === 'project' && projectId) {
    // کاربر روی یک پروژه کلیک کرد → مودال باز شود
    searchInput.value = value;
    currentSearch = value;
    saveFilters();
    renderProjects();
    const project = projectsData.find(p => p.id === parseInt(projectId));
    if (project) {
      setTimeout(() => openModal(project), 250);
    }
  } else {
    // تگ یا دسته → فیلتر شود
    searchInput.value = value;
    currentSearch = value;
    clearSearchBtn.classList.add('visible');
    saveFilters();
    renderProjects();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ناوبری با کیبورد
searchInput.addEventListener('keydown', (e) => {
  const list = document.getElementById('autocomplete-list');
  if (!list.classList.contains('open')) return;

  const items = list.querySelectorAll('.autocomplete-item');
  if (items.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeAutocompleteIndex = (activeAutocompleteIndex + 1) % items.length;
    updateActiveItem(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeAutocompleteIndex = activeAutocompleteIndex <= 0 
      ? items.length - 1 
      : activeAutocompleteIndex - 1;
    updateActiveItem(items);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (activeAutocompleteIndex >= 0 && items[activeAutocompleteIndex]) {
      selectAutocompleteItem(items[activeAutocompleteIndex]);
    } else {
      closeAutocomplete();
    }
  } else if (e.key === 'Escape') {
    closeAutocomplete();
  }
});

function updateActiveItem(items) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === activeAutocompleteIndex);
    if (i === activeAutocompleteIndex) {
      item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });
}

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  currentSearch = '';
  clearSearchBtn.classList.remove('visible');
  closeAutocomplete();
  searchInput.focus();
  saveFilters();
  renderProjects();
});

function resetFilters() {
  currentFilter = 'all';
  currentSearch = '';
  searchInput.value = '';
  clearSearchBtn.classList.remove('visible');
  filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
  try {
    localStorage.removeItem('solutions_filter');
    localStorage.removeItem('solutions_search');
  } catch(e) {}
  renderProjects();
}

// ==========================================
// ۹. Deep Link
// ==========================================
function updateURL(projectId) {
  if (projectId) history.pushState({ projectId }, '', `#project-${projectId}`);
  else history.pushState({}, '', window.location.pathname);
}

function checkURLForProject() {
  const hash = window.location.hash;
  if (hash.startsWith('#project-')) {
    const id = parseInt(hash.replace('#project-', ''));
    const project = projectsData.find(p => p.id === id);
    if (project) setTimeout(() => openModal(project, false), 300);
  }
}

function openModal(project, updateUrl = true) {
  currentProject = project;

  // ✅ نمایش اسکلت فوراً
  showModalSkeleton();

  // پر کردن اطلاعات متنی
  document.getElementById('modal-icon').className = project.icon;
  document.getElementById('modal-category').textContent = project.categoryLabel;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-long-desc').textContent = project.longDescription;

  document.getElementById('modal-features').innerHTML = project.features
    .map(f => `<li><i class="fa-solid fa-check"></i><span>${f}</span></li>`).join('');

  document.getElementById('modal-tags').innerHTML = project.tags
    .map(t => `<span class="text-xs px-3 py-1 rounded-full border" style="background: var(--accent-bg); color: var(--accent); border-color: var(--accent-border);">${t}</span>`).join('');

  const message = `سلام، من پروژه «${project.title}» را در سایت شما دیدم و می‌خواهم آن را برای کسب‌وکارم شخصی‌سازی کنم.`;
  document.getElementById('modal-whatsapp-btn').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  document.getElementById('modal-demo-btn').href = project.demoLink || '#';

  buildSlider(project.images);
  renderRelatedProjects(project);

  // ✅ پیش‌بارگذاری و سپس نمایش
  preloadAndReveal(project.images);

  // اسکرول مودال به بالا (برای بارگذاری مجدد پروژه از Related)
  setTimeout(() => {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;
  }, 10);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  if (updateUrl) updateURL(project.id);
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  updateURL(null);
  
  // ✅ پاکسازی اسکلت
  document.getElementById('modal-skeleton').classList.remove('show');
  document.getElementById('modal-real-content').classList.remove('revealed');
  
  setTimeout(() => {
    sliderTrack.innerHTML = '';
    document.getElementById('related-projects-section').classList.add('hidden');
    document.getElementById('related-projects').innerHTML = '';
  }, 300);
}

// ==========================================
// ۱۱. اشتراک‌گذاری (🆕)
// ==========================================
async function handleShare(type) {
  if (!currentProject) return;
  const url = `${SITE_URL}#project-${currentProject.id}`;
  const text = `پروژه «${currentProject.title}» از آیدین بیرام پور را ببینید:`;
  const fullText = `${text}\n${url}`;

  if (type === 'copy') {
    try {
      await navigator.clipboard.writeText(url);
      showToast('لینک پروژه کپی شد ✓', 'success', 2000);
    } catch (e) {
      // فالبک قدیمی
      const ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast('لینک پروژه کپی شد ✓', 'success', 2000); }
      catch (err) { showToast('کپی نشد. لطفاً دستی کپی کنید.', 'error'); }
      document.body.removeChild(ta);
    }
    return;
  }

  // Web Share API در موبایل
  if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
    try {
      await navigator.share({ title: currentProject.title, text, url });
      return;
    } catch(e) { /* کاربر انصراف داد */ }
  }

  let shareUrl = '';
  if (type === 'telegram') shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  if (type === 'whatsapp') shareUrl = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
  if (type === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  if (shareUrl) window.open(shareUrl, '_blank', 'noopener');
}

shareBar.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', () => handleShare(btn.dataset.share));
});

// ==========================================
// ۱۲. پروژه‌های مرتبط
// ==========================================
function renderRelatedProjects(current) {
  const relatedSection = document.getElementById('related-projects-section');
  const relatedContainer = document.getElementById('related-projects');
  let related = projectsData.filter(p => p.id !== current.id && p.category === current.category);
  if (related.length < 3) {
    const others = projectsData.filter(p => p.id !== current.id && p.category !== current.category);
    related = [...related, ...others].slice(0, 3);
  }
  if (related.length === 0) { relatedSection.classList.add('hidden'); return; }
  relatedSection.classList.remove('hidden');
  relatedContainer.innerHTML = related.map(p => `
    <div class="related-card" data-id="${p.id}">
      <div class="related-card-icon"><i class="${p.icon}"></i></div>
      <div class="related-card-title">${p.title}</div>
      <div class="related-card-cat">${p.categoryLabel}</div>
    </div>
  `).join('');

  relatedContainer.querySelectorAll('.related-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      const project = projectsData.find(p => p.id === id);
      if (project) {
        document.querySelector('.modal-content').scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => openModal(project), 150);
      }
    });
  });
}

// ==========================================
// ۱۳. اسلایدر
// ==========================================
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

        // ✅ مدیریت خطای تصویر
    img.onerror = () => {
      img.style.display = 'none';
      const errorDiv = document.createElement('div');
      errorDiv.className = 'img-error-placeholder';
      errorDiv.innerHTML = `
        <i class="fa-solid fa-image"></i>
        <span>تصویر در دسترس نیست</span>
      `;
      img.parentElement.appendChild(errorDiv);
    };
    
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

// رویدادها
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') goToImage(currentImageIndex + 1);
  if (e.key === 'ArrowRight') goToImage(currentImageIndex - 1);
});
prevBtn.addEventListener('click', () => goToImage(currentImageIndex - 1));
nextBtn.addEventListener('click', () => goToImage(currentImageIndex + 1));

// ==========================================
// ۱۴. نوار پیشرفت + دکمه بازگشت
// ==========================================
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = `${docHeight > 0 ? (scrollTop / docHeight) * 100 : 0}%`;
  backToTopBtn.classList.toggle('visible', scrollTop > 400);
});
backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ==========================================
// ۱۵. popstate
// ==========================================
window.addEventListener('popstate', () => {
  if (modal.classList.contains('open')) closeModal();
  checkURLForProject();
});

// ==========================================
// ۱۶. فرم تماس
// ==========================================
document.getElementById('quick-contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('qc-name').value.trim();
  const phone = document.getElementById('qc-phone').value.trim();
  if (!name || !phone) { showToast('لطفاً نام و شماره موبایل را وارد کنید.', 'error'); return; }
  if (!/^09\d{9}$/.test(phone)) { showToast('شماره موبایل باید با ۰۹ شروع و ۱۱ رقم باشد.', 'error'); return; }
  const message = `سلام، من ${name} هستم.\nشماره: ${phone}\nمی‌خواهم درباره راه‌حل‌های آماده بیشتر بدانم.`;
  showToast('در حال انتقال به واتساپ...', 'success', 2000);
  setTimeout(() => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    e.target.reset();
  }, 600);
});

// ==========================================
// ۱۷. شمارنده آمار
// ==========================================
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const startTime = performance.now();
  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / 1800, 1);
    const eased = 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(eased * target).toLocaleString('fa-IR');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ==========================================
// ۱۸. اجرای اولیه
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadFilters();
  showSkeleton(6);
  
  // ✅ ساخت دیتای Autocomplete
  autocompleteData = buildAutocompleteData();
  
  setTimeout(() => {
    renderProjects();
    checkURLForProject();
  }, 600);

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number').forEach(el => statsObserver.observe(el));
});


// ==========================================
// 🆕 مدیریت اسکلت مودال
// ==========================================
function showModalSkeleton() {
  const skeleton = document.getElementById('modal-skeleton');
  const realContent = document.getElementById('modal-real-content');
  skeleton.classList.add('show');
  realContent.classList.remove('revealed');
}

function hideModalSkeleton() {
  const skeleton = document.getElementById('modal-skeleton');
  const realContent = document.getElementById('modal-real-content');
  skeleton.classList.remove('show');
  realContent.classList.add('revealed');
}

// پیش‌بارگذاری تصویر اول و سپس نمایش محتوا
function preloadAndReveal(images) {
  if (!images || images.length === 0) {
    setTimeout(hideModalSkeleton, 300);
    return;
  }

  let loaded = false;
  const finish = () => {
    if (loaded) return;
    loaded = true;
    setTimeout(hideModalSkeleton, 200);
  };

  const img = new Image();
  img.onload = finish;
  img.onerror = finish;
  img.src = images[0];

  // حداکثر ۲.۵ ثانیه صبر (در صورت اینترنت ضعیف)
  setTimeout(finish, 2500);
}


// ==========================================
// 💬 چت‌بات هوشمند
// ==========================================

const CHAT_STORAGE_KEY = 'solutions_chat_history';
const CHAT_MAX_HISTORY = 50; // حداکثر تعداد پیام ذخیره‌شده

// المان‌ها
const chatFab = document.getElementById('chat-fab');
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatClearBtn = document.getElementById('chat-clear');
const chatQuickReplies = document.getElementById('chat-quick-replies');
const chatBadge = document.getElementById('chat-badge');

let chatHistory = [];
let chatIsOpen = false;
let chatIsTyping = false;

// ---------- مدیریت تاریخچه ----------
function loadChatHistory() {
  try {
    const saved = localStorage.getItem(CHAT_STORAGE_KEY);
    if (saved) {
      chatHistory = JSON.parse(saved);
      chatHistory.forEach(msg => appendMessageToDOM(msg.role, msg.content, msg.actions, false));
    }
  } catch (e) {
    chatHistory = [];
  }
}

function saveChatHistory() {
  try {
    const trimmed = chatHistory.slice(-CHAT_MAX_HISTORY);
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(trimmed));
  } catch (e) {}
}

function clearChatHistory() {
  chatHistory = [];
  chatMessages.innerHTML = '';
  try { localStorage.removeItem(CHAT_STORAGE_KEY); } catch (e) {}
  // پیام خوش‌آمدگویی مجدد
  setTimeout(() => sendBotMessage(chatResponses.greeting()), 300);
  showToast('تاریخچه چت پاک شد', 'success', 2000);
}

// ---------- نمایش پیام ----------
function appendMessageToDOM(role, content, actions = [], save = true) {
  const msg = document.createElement('div');
  msg.className = `chat-msg ${role}`;
  
  const avatarIcon = role === 'bot' ? 'fa-solid fa-robot' : 'fa-solid fa-user';
  const escapedContent = content.replace(/\n/g, '<br>');
  
  let actionsHtml = '';
  if (actions && actions.length > 0) {
    actionsHtml = `<div class="chat-msg-actions">${actions.map(a => 
      `<a href="${a.href}" target="${a.external ? '_blank' : '_self'}" rel="noopener" 
          class="chat-action-btn ${a.style || ''}" 
          data-chat-action="${a.label}">
        <i class="${a.icon}"></i>
        <span>${a.label}</span>
      </a>`
    ).join('')}</div>`;
  }
  
  msg.innerHTML = `
    <div class="chat-msg-avatar"><i class="${avatarIcon}"></i></div>
    <div>
      <div class="chat-msg-bubble">${escapedContent}${actionsHtml}</div>
    </div>
  `;
  
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  if (save) {
    chatHistory.push({ role, content, actions, timestamp: Date.now() });
    saveChatHistory();
  }
}

function showTypingIndicator() {
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot';
  typing.id = 'chat-typing-indicator';
  typing.innerHTML = `
    <div class="chat-msg-avatar"><i class="fa-solid fa-robot"></i></div>
    <div class="chat-typing">
      <span></span><span></span><span></span>
    </div>
  `;
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById('chat-typing-indicator');
  if (typing) typing.remove();
}

function sendBotMessage(response) {
  if (chatIsTyping) return;
  chatIsTyping = true;
  
  showTypingIndicator();
  
  // تأخیر طبیعی بر اساس طول پیام
  const delay = Math.min(600 + response.content.length * 15, 1800);
  
  setTimeout(() => {
    removeTypingIndicator();
    appendMessageToDOM('bot', response.content, response.actions || []);
    chatIsTyping = false;
    updateQuickReplies(response.quickReplies);
  }, delay);
}

function sendUserMessage(text) {
  if (!text.trim()) return;
  appendMessageToDOM('user', text);
  chatInput.value = '';
  updateQuickReplies(null);
  
  // تحلیل و پاسخ
  setTimeout(() => {
    const response = analyzeMessage(text);
    sendBotMessage(response);
  }, 300);
}

// ---------- پیشنهادهای سریع ----------
function updateQuickReplies(replies) {
  if (!replies || replies.length === 0) {
    chatQuickReplies.innerHTML = '';
    return;
  }
  chatQuickReplies.innerHTML = replies.map(r => 
    `<button type="button" class="chat-quick-btn" data-quick="${r}">${r}</button>`
  ).join('');
  
  chatQuickReplies.querySelectorAll('.chat-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sendUserMessage(btn.getAttribute('data-quick'));
    });
  });
}

// ---------- دیتابیس پاسخ‌ها ----------
const chatResponses = {
  greeting: () => ({
    content: 'سلام! 👋 من دستیار هوشمند آیدین هستم.\nچطور می‌تونم کمکتون کنم؟',
    quickReplies: ['چه پروژه‌هایی داری؟', 'قیمت چنده؟', 'مشاوره می‌خوام', 'چطور سفارش بدم؟']
  }),
  
  listProjects: () => {
    const categories = [...new Set(projectsData.map(p => p.categoryLabel))];
    return {
      content: `ما در حال حاضر ${projectsData.length} راه‌حل آماده در ${categories.length} دسته‌بندی داریم:\n\n` +
        `🌐 توسعه وب\n🤖 اتوماسیون\n🎨 گرافیک\n📣 کمپین‌نویسی\n\n` +
        'دوست داری درباره کدوم بیشتر بدونی؟',
      quickReplies: ['توسعه وب', 'اتوماسیون', 'گرافیک', 'کمپین‌نویسی'],
      actions: [
        { label: 'مشاهده همه پروژه‌ها', href: 'solutions.html', icon: 'fa-solid fa-layer-group', external: false }
      ]
    };
  },
  
  showProjectsByCategory: (category) => {
    const projects = projectsData.filter(p => 
      p.categoryLabel.includes(category) || 
      p.category === category.toLowerCase()
    );
    if (projects.length === 0) {
      return {
        content: `متأسفانه پروژه‌ای در دسته «${category}» پیدا نکردم.`,
        quickReplies: ['چه پروژه‌هایی داری؟']
      };
    }
    const projectList = projects.map(p => `• ${p.title}`).join('\n');
    return {
      content: `در دسته «${category}» این پروژه‌ها رو داریم:\n\n${projectList}\n\nروی هر کدوم کلیک کنی، جزئیاتش رو می‌بینی:`,
      actions: projects.map(p => ({
        label: p.title,
        href: `solutions.html#project-${p.id}`,
        icon: p.icon,
        external: false
      }))
    };
  },
  
  showPrice: () => ({
    content: 'قیمت هر پروژه بستگی به میزان شخصی‌سازی و نیازهای شما داره. 💰\n\n' +
      'به‌طور کلی:\n' +
      '• قالب‌های پایه: از ۵ میلیون تومان\n' +
      '• شخصی‌سازی کامل: بر اساس نیاز\n' +
      '• پروژه‌های ترکیبی: با تخفیف ویژه\n\n' +
      'برای دریافت مشاوره رایگان و قیمت دقیق، همین حالا در واتساپ پیام بدید:',
    actions: [
      { label: 'درخواست قیمت در واتساپ', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('سلام، می‌خواهم درباره قیمت راه‌حل‌های آماده سوال کنم.')}`, icon: 'fa-brands fa-whatsapp', style: 'whatsapp', external: true }
    ],
    quickReplies: ['چطور سفارش بدم؟', 'چه پروژه‌هایی داری؟']
  }),
  
  showOrderSteps: () => ({
    content: 'سفارش در ۳ مرحله ساده: 📝\n\n' +
      '1️⃣ پروژه موردنظر رو انتخاب کن\n' +
      '2️⃣ از طریق واتساپ درخواستت رو بفرست\n' +
      '3️⃣ بعد از مشاوره، پرداخت و شروع پروژه\n\n' +
      'همین حالا می‌تونی اولین قدم رو برداری:',
    actions: [
      { label: 'شروع سفارش در واتساپ', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('سلام، می‌خواهم یک پروژه سفارش بدم.')}`, icon: 'fa-brands fa-whatsapp', style: 'whatsapp', external: true }
    ],
    quickReplies: ['قیمت چنده؟', 'مشاوره می‌خوام']
  }),
  
  showContact: () => ({
    content: 'برای ارتباط با من چند راه داری: 📞',
    actions: [
      { label: 'واتساپ', href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: 'fa-brands fa-whatsapp', style: 'whatsapp', external: true },
      { label: 'ایمیل', href: 'mailto:info@example.ir', icon: 'fa-solid fa-envelope', external: true }
    ],
    quickReplies: ['قیمت چنده؟', 'چطور سفارش بدم؟']
  }),
  
  consult: () => ({
    content: 'عالیه! برای مشاوره رایگان، فقط کافیه در واتساپ پیام بدی.\n\n' +
      'هر چه سریع‌تر پیام بدی، سریع‌تر می‌تونیم درباره پروژه‌ت صحبت کنیم. 💬',
    actions: [
      { label: 'مشاوره در واتساپ', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('سلام، می‌خواهم مشاوره رایگان بگیرم.')}`, icon: 'fa-brands fa-whatsapp', style: 'whatsapp', external: true }
    ],
    quickReplies: ['چه پروژه‌هایی داری؟', 'قیمت چنده؟']
  }),
  
  thanks: () => ({
    content: 'خواهش می‌کنم! 😊\nاگر سوال دیگه‌ای داشتی، در خدمتم.',
    quickReplies: ['چه پروژه‌هایی داری؟', 'مشاوره می‌خوام']
  }),
  
  goodbye: () => ({
    content: 'خداحافظ! 👋\nروز خوبی داشته باشی. اگر کاری داشتی، من همیشه اینجام.',
    quickReplies: []
  }),
  
  fallback: () => ({
    content: 'متأسفانه متوجه نشدم. 🤔\nمی‌تونی از این موضوعات بپرسی:',
    quickReplies: ['چه پروژه‌هایی داری؟', 'قیمت چنده؟', 'چطور سفارش بدم؟', 'مشاوره می‌خوام'],
    actions: [
      { label: 'ارتباط مستقیم در واتساپ', href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: 'fa-brands fa-whatsapp', style: 'whatsapp', external: true }
    ]
  })
};

// ---------- تحلیل پیام کاربر ----------
function analyzeMessage(text) {
  const lower = text.toLowerCase().trim();
  
  // سلام
  if (/^(سلام|درود|hi|hello|hey|سلم|سلام علیکم)/i.test(lower)) {
    return chatResponses.greeting();
  }
  
  // پروژه‌ها (لیست کلی)
  if (/(چه پروژه|لیست پروژه|همه پروژه|پروژه.*داری|چی داری|نمونه کار)/.test(lower)) {
    return chatResponses.listProjects();
  }
  
  // دسته‌بندی خاص
  if (/(توسعه وب|وب سایت|وبسایت|سایت)/.test(lower)) {
    return chatResponses.showProjectsByCategory('توسعه وب');
  }
  if (/(اتوماسیون|خودکار|ربات)/.test(lower)) {
    return chatResponses.showProjectsByCategory('اتوماسیون');
  }
  if (/(گرافیک|لوگو|برند|طراحی)/.test(lower)) {
    return chatResponses.showProjectsByCategory('گرافیک');
  }
  if (/(کمپین|تبلیغات|مارکتینگ|اینستاگرام)/.test(lower)) {
    return chatResponses.showProjectsByCategory('کمپین‌نویسی');
  }
  
  // جستجوی پروژه خاص
  const foundProject = projectsData.find(p => 
    lower.includes(p.title.toLowerCase()) || 
    p.tags.some(t => lower.includes(t.toLowerCase()))
  );
  if (foundProject) {
    return {
      content: `پروژه «${foundProject.title}» رو پیدا کردم! 🎯\n\n${foundProject.description}`,
      actions: [
        { label: 'مشاهده جزئیات', href: `solutions.html#project-${foundProject.id}`, icon: 'fa-solid fa-eye', external: false },
        { label: 'درخواست در واتساپ', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`سلام، درباره پروژه «${foundProject.title}» سوال دارم.`)}`, icon: 'fa-brands fa-whatsapp', style: 'whatsapp', external: true }
      ],
      quickReplies: ['قیمت چنده؟', 'مشاوره می‌خوام']
    };
  }
  
  // قیمت
  if (/(قیمت|هزینه|تعرفه|چند|پول|تومن|تومان|ریال)/.test(lower)) {
    return chatResponses.showPrice();
  }
  
  // سفارش
  if (/(سفارش|خرید|ثبت|شروع|می‌خوام|میخوام)/.test(lower)) {
    return chatResponses.showOrderSteps();
  }
  
  // تماس
  if (/(تماس|ارتباط|واتساپ|واتس اپ|whatsapp|شماره|ایمیل)/.test(lower)) {
    return chatResponses.showContact();
  }
  
  // مشاوره
  if (/(مشاوره|راهنمایی|کمک|help)/.test(lower)) {
    return chatResponses.consult();
  }
  
  // تشکر
  if (/(ممنون|مرسی|تشکر|thanks|thank)/.test(lower)) {
    return chatResponses.thanks();
  }
  
  // خداحافظ
  if (/(خداحافظ|خدافظ|بای|bye|خدا نگهدار)/.test(lower)) {
    return chatResponses.goodbye();
  }
  
  // نامشخص
  return chatResponses.fallback();
}

// ---------- باز/بستن چت ----------
function openChat() {
  chatWindow.classList.add('open');
  chatFab.classList.add('open');
  chatWindow.setAttribute('aria-hidden', 'false');
  chatIsOpen = true;
  chatBadge.classList.add('hidden');
  setTimeout(() => chatInput.focus(), 350);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function closeChat() {
  chatWindow.classList.remove('open');
  chatFab.classList.remove('open');
  chatWindow.setAttribute('aria-hidden', 'true');
  chatIsOpen = false;
}

function toggleChat() {
  if (chatIsOpen) closeChat();
  else openChat();
}

// ---------- رویدادها ----------
chatFab.addEventListener('click', toggleChat);

chatClearBtn.addEventListener('click', () => {
  if (confirm('آیا از پاک کردن تاریخچه چت مطمئن هستید؟')) {
    clearChatHistory();
  }
});

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendUserMessage(chatInput.value);
});

// Enter برای ارسال، Shift+Enter برای خط جدید
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    chatForm.dispatchEvent(new Event('submit'));
  }
});

// بستن با Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && chatIsOpen) {
    closeChat();
  }
});

// ---------- اجرای اولیه ----------
window.addEventListener('DOMContentLoaded', () => {
  loadChatHistory();
  
  // اگر تاریخچه خالی بود، پیام خوش‌آمدگویی
  if (chatHistory.length === 0) {
    setTimeout(() => {
      const greeting = chatResponses.greeting();
      appendMessageToDOM('bot', greeting.content, greeting.actions || []);
      updateQuickReplies(greeting.quickReplies);
    }, 800);
  } else {
    // آخرین quickReplies را بازیابی کن
    const lastBotMsg = [...chatHistory].reverse().find(m => m.role === 'bot');
    if (lastBotMsg) {
      const response = analyzeMessage(''); // نمی‌تونیم بازیابی کنیم، ولی حداقل پیشنهاد پیش‌فرض
      updateQuickReplies(['چه پروژه‌هایی داری؟', 'قیمت چنده؟', 'مشاوره می‌خوام']);
    }
  }
  
  // نشان بده که چت‌بات وجود دارد (بعد از ۲ ثانیه)
  setTimeout(() => {
    if (!chatIsOpen && chatHistory.length === 0) {
      chatBadge.textContent = '۱';
      chatBadge.classList.remove('hidden');
    }
  }, 3000);
});

// ==========================================
// 🎭 Magnetic Effect (جاذبه مغناطیسی)
// ==========================================

// المان‌هایی که افکت مغناطیسی می‌گیرند
const MAGNETIC_SELECTORS = [
  '.filter-btn',
  '.banner-cta-primary',           // در صورت وجود در صفحه
  '.banner-cta-secondary',
  '.quick-submit',
  '.back-btn',
  '#modal-whatsapp-btn',
  '#modal-demo-btn',
  '.chat-send-btn',
  '.slider-nav-btn',
  '.card-action-btn',
  '.theme-toggle',
  '.back-to-top',
  '.social-btn'
].join(', ');

const MAGNETIC_STRENGTH = 8;  // حداکثر جابه‌جایی (پیکسل)
const MAGNETIC_RADIUS = 80;   // محدوده‌ی حس مغناطیسی (پیکسل)

function initMagneticEffect() {
  // در موبایل غیرفعال
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  // Reduce Motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elements = document.querySelectorAll(MAGNETIC_SELECTORS);
  
  elements.forEach(el => {
    if (el.dataset.magneticInit === 'true') return;
    el.dataset.magneticInit = 'true';
    el.classList.add('magnetic');

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;

    const animate = () => {
      // روان‌سازی حرکت (easing)
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      
      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        el.style.transform = `translate(${currentX}px, ${currentY}px)`;
        rafId = requestAnimationFrame(animate);
      } else {
        el.style.transform = `translate(${currentX}px, ${currentY}px)`;
        rafId = null;
      }
    };

    const startAnimation = () => {
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < MAGNETIC_RADIUS) {
        isHovering = true;
        el.classList.add('magnetic-active');
        
        // نسبت فاصله به شعاع (برای شدت کمتر در لبه‌ها)
        const strength = 1 - distance / MAGNETIC_RADIUS;
        targetX = distX * strength * (MAGNETIC_STRENGTH / 40);
        targetY = distY * strength * (MAGNETIC_STRENGTH / 40);
        
        // محدود کردن شدت
        const maxMove = MAGNETIC_STRENGTH;
        targetX = Math.max(-maxMove, Math.min(maxMove, targetX));
        targetY = Math.max(-maxMove, Math.min(maxMove, targetY));
        
        startAnimation();
      } else if (isHovering) {
        isHovering = false;
        el.classList.remove('magnetic-active');
        targetX = 0;
        targetY = 0;
        startAnimation();
      }
    });

    // ریست وقتی موس از صفحه خارج می‌شود
    el.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      isHovering = false;
      el.classList.remove('magnetic-active');
      startAnimation();
    });
  });
}

// ==========================================
// ✨ Ripple Effect (موج)
// ==========================================

const RIPPLE_SELECTORS = [
  'button',
  'a.filter-btn',
  '.back-btn',
  '.quick-submit',
  '#modal-whatsapp-btn',
  '#modal-demo-btn',
  '.chat-send-btn',
  '.chat-quick-btn',
  '.chat-action-btn',
  '.theme-toggle',
  '.back-to-top',
  '.social-btn',
  '.share-btn',
  '.filter-btn',
  '.autocomplete-item',
  '.project-card',
  '.related-card',
  '.slider-nav-btn',
  '.slider-dot',
  '.stat-item'
].join(', ');

function initRippleEffect() {
  const elements = document.querySelectorAll(RIPPLE_SELECTORS);
  
  elements.forEach(el => {
    if (el.dataset.rippleInit === 'true') return;
    el.dataset.rippleInit = 'true';
    el.classList.add('ripple-host');

    const createRipple = (e) => {
      // اطمینان از اینکه نقطه کلیک معلوم است
      const rect = el.getBoundingClientRect();
      let clientX, clientY;
      
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // اندازه موج بر اساس بزرگ‌ترین بُعد دکمه
      const size = Math.max(rect.width, rect.height) * 1.8;
      
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x - size / 2}px`;
      ripple.style.top = `${y - size / 2}px`;
      
      el.appendChild(ripple);
      
      // پاکسازی بعد از پایان انیمیشن
      setTimeout(() => {
        if (ripple.parentNode === el) {
          ripple.remove();
        }
      }, 700);
    };

    el.addEventListener('mousedown', createRipple);
    el.addEventListener('touchstart', createRipple, { passive: true });
  });
}

// ==========================================
// اجرای اولیه + MutationObserver
// ==========================================
function initMagneticAndRipple() {
  initMagneticEffect();
  initRippleEffect();
}

window.addEventListener('DOMContentLoaded', () => {
  // بعد از رندر اولیه کارت‌ها، این‌ها را راه‌اندازی کن
  setTimeout(initMagneticAndRipple, 800);

  // هر بار کارت جدید رندر شد (فیلتر، جستجو)، دوباره راه‌اندازی کن
  const gridEl = document.getElementById('projects-grid');
  if (gridEl) {
    const mo = new MutationObserver(() => {
      setTimeout(initMagneticAndRipple, 50);
    });
    mo.observe(gridEl, { childList: true });
  }

  // مودال هم بعد از باز شدن، المان‌های جدید دارد
  const modalEl = document.getElementById('project-modal');
  if (modalEl) {
    const modalObserver = new MutationObserver(() => {
      if (modalEl.classList.contains('open')) {
        setTimeout(initMagneticAndRipple, 100);
      }
    });
    modalObserver.observe(modalEl, { attributes: true, attributeFilter: ['class'] });
  }

  // چت‌بات هم المان‌های داینامیک دارد
  const chatMessagesEl = document.getElementById('chat-messages');
  if (chatMessagesEl) {
    const chatObserver = new MutationObserver(() => {
      setTimeout(initRippleEffect, 50);
    });
    chatObserver.observe(chatMessagesEl, { childList: true, subtree: true });
  }
});

// ==========================================
// 🌈 Parallax Effect
// ==========================================

const PARALLAX_MAX_OFFSET = 20;  // حداکثر جابه‌جایی (پیکسل)
const PARALLAX_SMOOTHING = 0.1;   // روان‌سازی
const PARALLAX_MOBILE_SCROLL = 0.15; // شدت پارالاکس با اسکرول در موبایل

let parallaxCurrentX = 0;
let parallaxCurrentY = 0;
let parallaxTargetX = 0;
let parallaxTargetY = 0;
let parallaxRafId = null;

function initParallax() {
  const heroSection = document.getElementById('hero-section');
  const bgGlow = document.querySelector('.bg-glow');
  const layers = document.querySelectorAll('.hero-parallax-layer');
  
  if (!heroSection || layers.length === 0) return;

  // ==========================================
  // حالت موبایل: Parallax با اسکرول
  // ==========================================
  const isMobile = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReduced) return;

  if (isMobile) {
    // فقط با اسکرول، نه با موس
    let mobileTicking = false;
    
    const updateMobileParallax = () => {
      const scrollY = window.scrollY;
      
      layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth || '0.5');
        // در موبایل، ضریب کمتر
        const offset = -scrollY * PARALLAX_MOBILE_SCROLL * depth;
        
        // محدودیت
        const maxOffset = 40;
        const limitedOffset = Math.max(-maxOffset, Math.min(maxOffset, offset));
        
        layer.style.transform = `translateY(${limitedOffset}px)`;
      });
      
      if (bgGlow) {
        bgGlow.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
      
      mobileTicking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!mobileTicking) {
        requestAnimationFrame(updateMobileParallax);
        mobileTicking = true;
      }
    }, { passive: true });
    
    return;
  }

  // ==========================================
  // حالت دسکتاپ: Parallax با موس
  // ==========================================
  
  let isHoveringHero = false;
  
  const animateParallax = () => {
    // روان‌سازی
    parallaxCurrentX += (parallaxTargetX - parallaxCurrentX) * PARALLAX_SMOOTHING;
    parallaxCurrentY += (parallaxTargetY - parallaxCurrentY) * PARALLAX_SMOOTHING;
    
    // اعمال به لایه‌ها
    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth || '0.5');
      const x = parallaxCurrentX * depth;
      const y = parallaxCurrentY * depth;
      layer.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    // اعمال به درخشش پس‌زمینه (با شدت بیشتر برای عمق دور)
    if (bgGlow) {
      bgGlow.style.transform = `translate(${parallaxCurrentX * 1.5}px, ${parallaxCurrentY * 1.5}px)`;
    }
    
    // ادامه انیمیشن اگر تفاوت وجود دارد
    const hasMovement = 
      Math.abs(parallaxTargetX - parallaxCurrentX) > 0.05 ||
      Math.abs(parallaxTargetY - parallaxCurrentY) > 0.05;
    
    if (hasMovement || isHoveringHero) {
      parallaxRafId = requestAnimationFrame(animateParallax);
    } else {
      parallaxRafId = null;
    }
  };
  
  const startParallaxAnimation = () => {
    if (!parallaxRafId) {
      parallaxRafId = requestAnimationFrame(animateParallax);
    }
  };
  
  // رویداد حرکت موس روی کل صفحه (چون هیرو کوچک است)
  document.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    
    // فقط وقتی موس در محدوده هیرو است یا نزدیک آن
    const isNearHero = e.clientY < rect.bottom + 200;
    if (!isNearHero) {
      if (isHoveringHero) {
        isHoveringHero = false;
        layers.forEach(l => l.classList.remove('parallax-active'));
        // بازگشت به حالت اول
        parallaxTargetX = 0;
        parallaxTargetY = 0;
        startParallaxAnimation();
      }
      return;
    }
    
    if (!isHoveringHero) {
      isHoveringHero = true;
      layers.forEach(l => l.classList.add('parallax-active'));
    }
    
    // محاسبه موقعیت موس نسبت به مرکز صفحه
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    
    // نسبت به مرکز (-1 تا +1)
    const normalizedX = (e.clientX - viewportCenterX) / viewportCenterX;
    const normalizedY = (e.clientY - viewportCenterY) / viewportCenterY;
    
    // محدود کردن به -1 تا 1
    const clampedX = Math.max(-1, Math.min(1, normalizedX));
    const clampedY = Math.max(-1, Math.min(1, normalizedY));
    
    // اعمال حداکثر جابه‌جایی
    parallaxTargetX = clampedX * PARALLAX_MAX_OFFSET;
    parallaxTargetY = clampedY * PARALLAX_MAX_OFFSET;
    
    startParallaxAnimation();
  });
  
  // بازگشت به حالت اول وقتی موس از پنجره خارج می‌شود
  document.addEventListener('mouseleave', () => {
    parallaxTargetX = 0;
    parallaxTargetY = 0;
    isHoveringHero = false;
    layers.forEach(l => l.classList.remove('parallax-active'));
    startParallaxAnimation();
  });
  
  // ذخیره موقعیت موس قبلی (برای بهینه‌سازی)
  let lastMouseX = 0;
  let lastMouseY = 0;
  document.addEventListener('mousemove', (e) => {
    // اگر موس خیلی کم حرکت کرد، نادیده بگیر
    if (Math.abs(e.clientX - lastMouseX) < 1 && Math.abs(e.clientY - lastMouseY) < 1) return;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });
}

// ==========================================
// اجرای Parallax (فقط یک بار)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  initParallax();
});

// در صورت تغییر سایز پنجره، دوباره مقداردهی کن
let parallaxResizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(parallaxResizeTimer);
  parallaxResizeTimer = setTimeout(() => {
    // پاک کردن transform ها
    document.querySelectorAll('.hero-parallax-layer').forEach(l => {
      l.style.transform = '';
    });
    if (document.querySelector('.bg-glow')) {
      document.querySelector('.bg-glow').style.transform = '';
    }
    initParallax();
  }, 300);
});