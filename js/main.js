/* ============================================================
   josehenriquesa.com v2 - Interacoes
   ============================================================ */
(function () {
  'use strict';

  const SELECTORS = {
    nav: '#nav',
    navLinks: '.nav-links a',
    sectionIds: 'main section[id]',
    anchorHash: 'a[href^="#"]',
    burger: '#burger',
    mobileMenu: '#mobMenu',
    mobileClose: '#mobClose',
    mobileLinks: '.mob-link',
    revealItems: '.ri',
    heroRevealItems: '#hero .ri',
    skillBars: '.si-fill',
    counters: '.strip-num',
    shape: '.shape-bg',
    statChip: '.stat-chip',
    tiltCards: '.proj-card, .exp-card, .blog-card'
  };

  const CONFIG = {
    navScrollThreshold: 60,
    sectionOffset: 130,
    mobileBreakpoint: 768,
    revealStagger: 80,
    revealMaxDelay: 320,
    heroInitialDelay: 120,
    heroStagger: 110,
    barStartDelay: 100,
    counterDuration: 1200
  };

  const query = (selector, root = document) => root.querySelector(selector);
  const queryAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function initCursor() {
    if (window.SiteEffects && typeof window.SiteEffects.initCursor === 'function') {
      window.SiteEffects.initCursor('cur');
      return;
    }

    const cursor = document.getElementById('cur');
    if (!cursor) return;

    document.addEventListener('mousemove', (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    }, { passive: true });
  }

  function initNavigation() {
    const nav = query(SELECTORS.nav);
    const links = queryAll(SELECTORS.navLinks);
    if (!nav || !links.length) return;

    const highlightActiveSection = () => {
      let currentSectionId = '';

      queryAll(SELECTORS.sectionIds).forEach((section) => {
        if (window.scrollY >= section.offsetTop - CONFIG.sectionOffset) {
          currentSectionId = section.id;
        }
      });

      links.forEach((anchor) => {
        anchor.classList.toggle('active', anchor.getAttribute('href') === `#${currentSectionId}`);
      });
    };

    const onScroll = () => {
      nav.classList.toggle('sc', window.scrollY > CONFIG.navScrollThreshold);
      highlightActiveSection();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initSmoothScroll() {
    const nav = query(SELECTORS.nav);
    if (!nav) return;

    queryAll(SELECTORS.anchorHash).forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const target = query(anchor.getAttribute('href'));
        if (!target) return;

        event.preventDefault();
        const offset = parseInt(getComputedStyle(nav).height, 10) || 70;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      });
    });
  }

  function initMobileMenu() {
    const burger = query(SELECTORS.burger);
    const menu = query(SELECTORS.mobileMenu);
    const closeButton = query(SELECTORS.mobileClose);
    if (!burger || !menu || !closeButton) return;

    const setBurgerIconState = (isOpen) => {
      const [firstLine, secondLine] = queryAll('span', burger);
      if (!firstLine || !secondLine) return;

      if (isOpen) {
        firstLine.style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
        secondLine.style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
        return;
      }

      firstLine.removeAttribute('style');
      secondLine.removeAttribute('style');
    };

    const openMenu = () => {
      menu.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      setBurgerIconState(true);
    };

    const closeMenu = () => {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setBurgerIconState(false);
    };

    burger.addEventListener('click', () => {
      if (menu.classList.contains('open')) closeMenu();
      else openMenu();
    });

    closeButton.addEventListener('click', closeMenu);
    queryAll(SELECTORS.mobileLinks).forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  function initScrollReveal() {
    const revealItems = queryAll(SELECTORS.revealItems);
    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const container = entry.target.parentElement;
        const siblings = queryAll(':scope > .ri:not(.in)', container);
        const itemIndex = Math.max(siblings.indexOf(entry.target), 0);
        const delay = Math.min(itemIndex * CONFIG.revealStagger, CONFIG.revealMaxDelay);

        setTimeout(() => entry.target.classList.add('in'), delay);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach((item) => observer.observe(item));

    window.addEventListener('load', () => {
      queryAll(SELECTORS.heroRevealItems).forEach((item, index) => {
        setTimeout(() => item.classList.add('in'), CONFIG.heroInitialDelay + index * CONFIG.heroStagger);
      });
    });
  }

  function initSkillBars() {
    const bars = queryAll(SELECTORS.skillBars);
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const bar = entry.target;
        const targetWidth = bar.dataset.targetWidth || bar.style.width;

        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, CONFIG.barStartDelay);

        observer.unobserve(bar);
      });
    }, { threshold: 0.3 });

    bars.forEach((bar) => {
      bar.dataset.targetWidth = bar.style.width;
      bar.style.width = '0';
      observer.observe(bar);
    });
  }

  function initCounters() {
    const counters = queryAll(SELECTORS.counters);
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const suffixEl = counter.querySelector('em');
        const suffix = suffixEl ? suffixEl.textContent : '';
        const numericText = counter.textContent.replace(suffix, '').trim();
        const target = Number.parseInt(numericText, 10);

        if (Number.isNaN(target)) {
          observer.unobserve(counter);
          return;
        }

        const startTime = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - startTime) / CONFIG.counterDuration, 1);
          const value = Math.floor((1 - Math.pow(1 - progress, 3)) * target);

          counter.textContent = String(value);
          if (suffixEl) counter.appendChild(suffixEl);

          if (progress < 1) requestAnimationFrame(animate);
          else {
            counter.textContent = String(target);
            if (suffixEl) counter.appendChild(suffixEl);
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(counter);
      });
    }, { threshold: 0.6 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function initHeroParallax() {
    const shape = query(SELECTORS.shape);
    const statChip = query(SELECTORS.statChip);
    if (!shape && !statChip) return;

    document.addEventListener('mousemove', (event) => {
      if (window.innerWidth < CONFIG.mobileBreakpoint) return;

      const xRatio = (event.clientX / window.innerWidth - 0.5) * 2;
      const yRatio = (event.clientY / window.innerHeight - 0.5) * 2;

      if (shape) shape.style.transform = `translate(${xRatio * 12}px, ${yRatio * 8}px)`;
      if (statChip) statChip.style.transform = `translate(${xRatio * -8}px, ${yRatio * -6}px)`;
    }, { passive: true });
  }

  function initCardTilt() {
    queryAll(SELECTORS.tiltCards).forEach((card) => {
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const xRatio = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const yRatio = ((event.clientY - rect.top) / rect.height - 0.5) * 10;

        card.style.transform = `translateY(-5px) rotateX(${-yRatio * 0.5}deg) rotateY(${xRatio * 0.5}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  function initPage() {
    initCursor();
    initNavigation();
    initSmoothScroll();
    initMobileMenu();
    initScrollReveal();
    initSkillBars();
    initCounters();
    initHeroParallax();
    initCardTilt();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage, { once: true });
  } else {
    initPage();
  }
})();
