/* =========================================
   ماه دخخت کالکشن | اسکریپت اصلی
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------------------
     ۱. کپی شماره تماس (با Toast به‌جای alert)
     ----------------------------------------- */
  const phoneNumber = '09196110087';

  function showToast(message) {
    // ساخت یک toast موقت
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #4A5D3F;
      color: #fff;
      padding: 12px 24px;
      border-radius: 999px;
      font-family: Vazirmatn, sans-serif;
      font-size: 14px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      opacity: 0;
      transition: all 0.3s ease;
      z-index: 9999;
      pointer-events: none;
    `;
    document.body.appendChild(toast);

    // انیمیشن ورود
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // حذف بعد از ۲.۵ ثانیه
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  window.copyNumber = function () {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(phoneNumber)
        .then(() => showToast('شماره تماس کپی شد ✅'))
        .catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      const temp = document.createElement('textarea');
      temp.value = phoneNumber;
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      try {
        document.execCommand('copy');
        showToast('شماره تماس کپی شد ✅');
      } catch (e) {
        showToast('کپی نشد، دستی بردار: ' + phoneNumber);
      }
      temp.remove();
    }
  };

  /* -----------------------------------------
     ۲. Scroll Spy - هایلایت لینک منو
     ----------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`header nav a[href="#${id}"]`);

      if (link) {
        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach(l => l.classList.remove('nav-active'));
          link.classList.add('nav-active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* -----------------------------------------
     ۳. انیمیشن ورود عناصر با Intersection Observer
     ----------------------------------------- */
  const revealElements = document.querySelectorAll(
    '#features > div > div, #gallery > div > div, #order > div > div, #contact .bg-white'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(el);
    });
  }

  /* -----------------------------------------
     ۴. دکمه بازگشت به بالا
     ----------------------------------------- */
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.setAttribute('aria-label', 'بازگشت به بالا');
  backToTop.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #7A8B6F;
    color: #fff;
    font-size: 22px;
    border: 2px solid #C9A961;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(74,93,63,0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.35s ease;
    z-index: 999;
  `;
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
      backToTop.style.transform = 'translateY(0)';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
      backToTop.style.transform = 'translateY(20px)';
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* -----------------------------------------
     ۵. اسکرول نرم برای لینک‌های داخلی
     (پشتیبان برای مرورگرهای قدیمی)
     ----------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* -----------------------------------------
     ۶. سال جاری در فوتر (اختیاری - پویا)
     ----------------------------------------- */
  const footer = document.querySelector('footer');
  if (footer) {
    const yearSpan = footer.querySelector('.current-year');
    if (yearSpan) {
      const now = new Date();
      // تبدیل به تقویم شمسی تقریبی
      const persianYear = now.getFullYear() - 621;
      yearSpan.textContent = persianYear;
    }
  }

});