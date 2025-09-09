import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Progress Bar Animation
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.progress-fill') as HTMLElement;
          if (progressBar) {
            const progress = progressBar.getAttribute('data-progress');
            setTimeout(() => {
              progressBar.style.width = progress + '%';
            }, 500);
          }
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-card').forEach(card => {
      progressObserver.observe(card);
    });

    // Dynamic Glassmorphism Blur
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Update blur amount based on scroll
      const blurAmount = Math.min(20 + scrolled * 0.05, 40);
      document.documentElement.style.setProperty('--blur-amount', blurAmount + 'px');
      
      // Parallax effect for floating elements
      const floatingElements = document.querySelectorAll('.floating');
      floatingElements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = 0.5 + index * 0.1;
        element.style.transform = `translateY(${scrolled * -0.5 * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      progressObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
