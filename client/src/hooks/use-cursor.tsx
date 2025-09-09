import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update gradient background
      const gradientBg = document.querySelector('.gradient-bg') as HTMLElement;
      if (gradientBg) {
        gradientBg.style.setProperty('--mouse-x', (e.clientX / window.innerWidth * 100) + '%');
        gradientBg.style.setProperty('--mouse-y', (e.clientY / window.innerHeight * 100) + '%');
      }
    };

    // Smooth cursor animation
    function animateCursor() {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;
      
      cursorX += distX * 0.15;
      cursorY += distY * 0.15;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(animateCursor);
    }

    // Cursor hover effects
    const handleMouseEnter = () => cursor.classList.add('hover');
    const handleMouseLeave = () => cursor.classList.remove('hover');

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('a, button, .skill-card, .project-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}
