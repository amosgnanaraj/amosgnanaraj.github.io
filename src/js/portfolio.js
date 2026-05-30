/* ============================================================
   AMOS GNANARAJ J — PORTFOLIO JAVASCRIPT
   Particles | Typing | Scroll Animations | Interactions
   ============================================================ */

'use strict';

// ── Particle Canvas ─────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.r  = Math.random() * 1.6 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.life  = 0;
      this.maxLife = Math.random() * 300 + 200;
      this.hue = Math.random() < 0.6 ? 195 : 265; // cyan vs violet
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.life++;
      if (this.life > this.maxLife || this.y < -10) this.reset();
    }
    draw() {
      const progress = this.life / this.maxLife;
      const alpha = Math.sin(progress * Math.PI) * 0.7;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${alpha})`;
      ctx.fill();
    }
  }

  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.12;
          ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(animate);
  }

  function init() {
    resize();
    const count = Math.min(Math.floor((W * H) / 12000), 90);
    particles = Array.from({ length: count }, () => new Particle());
    cancelAnimationFrame(animId);
    animate();
  }

  window.addEventListener('resize', () => { resize(); init(); });
  init();
})();


// ── Typing Effect ───────────────────────────────────────────
(function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const phrases = [
    'Workflow Automation',
    'Enterprise .NET Development',
    'AI-Assisted Solutions',
    'Browser & Desktop RPA',
    'OCR & Computer Vision',
    'Process Automation Platforms',
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++charIdx);
      if (charIdx === phrase.length) { deleting = true; return setTimeout(tick, 2200); }
      setTimeout(tick, 60);
    } else {
      el.textContent = phrase.slice(0, --charIdx);
      if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
      setTimeout(tick, 35);
    }
  }
  setTimeout(tick, 1000);
})();


// ── Scroll-triggered Reveal ─────────────────────────────────
(function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();


// ── Active Nav Highlighting ─────────────────────────────────
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const navbar   = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky navbar style
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);

    // Scroll-to-top button
    const btn = document.getElementById('scrollTop');
    if (btn) btn.classList.toggle('visible', scrollY > 400);

    // Active link
    let current = '';
    sections.forEach(s => {
      if (scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
})();


// ── Animated Counters ───────────────────────────────────────
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
})();


// ── Mobile Nav Toggle ───────────────────────────────────────
(function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
    }
  });
})();


// ── Scroll To Top ───────────────────────────────────────────
(function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();


// ── Contact Form (Formspree) ────────────────────────────────
(function initContactForm() {
  const form    = document.getElementById('contact-form');
  if (!form) return;

  const btn     = document.getElementById('form-submit');
  const success = document.getElementById('form-success');
  const error   = document.getElementById('form-error');

  function showMsg(el, duration = 6000) {
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, duration);
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Basic client-side validation
    if (!form.checkValidity()) { form.reportValidity(); return; }

    // Button loading state
    const originalHTML = btn.innerHTML;
    btn.disabled  = true;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="animation:spin 1s linear infinite"><path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z"/></svg> Sending…';

    try {
      const response = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        showMsg(success);
      } else {
        // Formspree returns JSON with errors on 4xx
        const data = await response.json().catch(() => ({}));
        console.error('Formspree error:', data);
        showMsg(error);
      }
    } catch (err) {
      console.error('Network error:', err);
      showMsg(error);
    } finally {
      btn.disabled  = false;
      btn.innerHTML = originalHTML;
    }
  });
})();


// ── Smooth hover tilt on project cards ─────────────────────
(function initCardTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(800px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();
