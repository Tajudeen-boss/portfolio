export const initializeAnimations = () => {
  // Initialize scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll reveal classes
  document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right').forEach((el) => {
    observer.observe(el);
  });

  // Stagger animation for lists
  document.querySelectorAll('.stagger-container').forEach((container) => {
    const items = container.querySelectorAll('.stagger-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 100);
    });
  });

  // Cursor trail effect
  let mouseX = 0;
  let mouseY = 0;
  let trailElements: HTMLElement[] = [];

  // Create cursor trail elements
  for (let i = 0; i < 5; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = '-100px';
    trail.style.top = '-100px';
    document.body.appendChild(trail);
    trailElements.push(trail);
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor trail
  function animateTrail() {
    let x = mouseX;
    let y = mouseY;

    trailElements.forEach((trail, index) => {
      const nextTrail = trailElements[index + 1] || trailElements[0];
      
      x += (mouseX - x) * 0.3;
      y += (mouseY - y) * 0.3;
      
      trail.style.left = x - 10 + 'px';
      trail.style.top = y - 10 + 'px';
      trail.style.scale = (trailElements.length - index) / trailElements.length + '';
      trail.style.opacity = ((trailElements.length - index) / trailElements.length * 0.6) + '';
    });

    requestAnimationFrame(animateTrail);
  }

  animateTrail();

  console.log('Advanced animations initialized');
};

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const slideInFromTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const morphIn = {
  initial: { opacity: 0, scale: 0, borderRadius: "50%" },
  animate: { opacity: 1, scale: 1, borderRadius: "0%" },
  transition: { duration: 1, ease: "easeOut" }
};