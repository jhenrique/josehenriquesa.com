/* ============================================================
   josehenriquesa.com v2 — Interações
   ============================================================ */
(function () {
  'use strict';

  /* ── CURSOR ───────────────────────────────────────────── */
  const cur = document.getElementById('cur');
  if (cur) {
    document.addEventListener('mousemove', e => {
      cur.style.left = e.clientX + 'px';
      cur.style.top  = e.clientY + 'px';
    }, { passive: true });
  }

  /* ── NAV SCROLL ──────────────────────────────────────── */
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('sc', window.scrollY > 60);
    highlightActive();
  }, { passive: true });

  function highlightActive() {
    let cur = '';
    document.querySelectorAll('main section[id]').forEach(s => {
      if (window.scrollY >= s.offsetTop - 130) cur = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${cur}`);
    });
  }

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(nav).height || 70);
      window.scrollTo({ top: t.offsetTop - offset, behavior: 'smooth' });
    });
  });

  /* ── MOBILE MENU ─────────────────────────────────────── */
  const burger   = document.getElementById('burger');
  const mob      = document.getElementById('mobMenu');
  const mobClose = document.getElementById('mobClose');

  function openMob() {
    mob.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const [a, b] = burger.querySelectorAll('span');
    a.style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
    b.style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
  }
  function closeMob() {
    mob.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burger.querySelectorAll('span').forEach(s => s.removeAttribute('style'));
  }

  burger.addEventListener('click', () => mob.classList.contains('open') ? closeMob() : openMob());
  mobClose.addEventListener('click', closeMob);
  document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', closeMob));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMob(); });

  /* ── SCROLL REVEAL ───────────────────────────────────── */
  const reveals = document.querySelectorAll('.ri');

  const ro = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...entry.target.parentElement.querySelectorAll(':scope > .ri:not(.in)')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('in'), Math.min(idx * 80, 320));
      ro.unobserve(entry.target);
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => ro.observe(el));

  /* Trigger hero immediately */
  window.addEventListener('load', () => {
    document.querySelectorAll('#hero .ri').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 120 + i * 110);
    });
  });

  /* ── SKILL BAR ANIMATION ─────────────────────────────── */
  const bars = document.querySelectorAll('.si-fill');
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const fill = entry.target;
      const target = fill.style.width;
      fill.style.width = '0';
      setTimeout(() => { fill.style.width = target; }, 100);
      barObs.unobserve(fill);
    });
  }, { threshold: 0.3 });

  bars.forEach(b => {
    const w = b.style.width;
    b.style.width = '0';
    barObs.observe(b);
    b._target = w;
  });

  /* ── COUNTER ANIMATION ───────────────────────────────── */
  const counters = document.querySelectorAll('.strip-num');
  const cntObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const em = el.querySelector('em');
      const suffix = em ? em.textContent : '';
      const raw = el.textContent.replace(suffix, '').trim();
      const num = parseInt(raw);
      if (isNaN(num)) return;

      const dur = 1200, start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const v = Math.floor((1 - Math.pow(1-p,3)) * num);
        el.textContent = v;
        if (em) el.appendChild(em);
        if (p < 1) requestAnimationFrame(tick);
        else { el.textContent = num; if (em) el.appendChild(em); }
      }
      requestAnimationFrame(tick);
      cntObs.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach(c => cntObs.observe(c));

  /* ── HERO PARALLAX: shape on mousemove ────────────────── */
  const shape = document.querySelector('.shape-bg');
  const chip  = document.querySelector('.stat-chip');
  document.addEventListener('mousemove', e => {
    if (window.innerWidth < 768) return;
    const xR = (e.clientX / window.innerWidth  - .5) * 2;
    const yR = (e.clientY / window.innerHeight - .5) * 2;
    if (shape) shape.style.transform = `translate(${xR * 12}px, ${yR * 8}px)`;
    if (chip)  chip.style.transform  = `translate(${xR * -8}px, ${yR * -6}px)`;
  }, { passive: true });

  /* ── CARD TILT ─────────────────────────────────────────── */
  document.querySelectorAll('.proj-card, .exp-card, .blog-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - .5) * 10;
      const y = ((e.clientY - r.top)  / r.height - .5) * 10;
      card.style.transform = `translateY(-5px) rotateX(${-y*.5}deg) rotateY(${x*.5}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

})();
