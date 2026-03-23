(function () {
  'use strict';

  function initCursor(cursorId = 'cur') {
    const cursor = document.getElementById(cursorId);
    if (!cursor) return;

    document.addEventListener('mousemove', (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    }, { passive: true });
  }

  function initCanvasParticles(canvasId = 'cv', options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const settings = {
      density: options.density ?? 9000,
      minRadius: options.minRadius ?? 0.2,
      maxRadius: options.maxRadius ?? 1.3,
      minAlpha: options.minAlpha ?? 0.05,
      maxAlpha: options.maxAlpha ?? 0.45,
      minSpeed: options.minSpeed ?? 0.004,
      maxSpeed: options.maxSpeed ?? 0.014,
      color: options.color ?? '255,200,160'
    };

    let width = 0;
    let height = 0;
    let particles = [];

    const createParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * (settings.maxRadius - settings.minRadius) + settings.minRadius,
      a: Math.random() * (settings.maxAlpha - settings.minAlpha) + settings.minAlpha,
      ph: Math.random() * Math.PI * 2,
      sp: Math.random() * (settings.maxSpeed - settings.minSpeed) + settings.minSpeed
    });

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const count = Math.max(1, Math.floor((width * height) / settings.density));
      particles = Array.from({ length: count }, createParticle);
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.ph += particle.sp;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(${settings.color}, ${(particle.a * (0.5 + 0.5 * Math.sin(particle.ph))).toFixed(3)})`;
        context.fill();
      });

      requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    requestAnimationFrame(render);
  }

  window.SiteEffects = {
    initCursor,
    initCanvasParticles
  };
})();
