import { useEffect } from 'react';
import { ParticleSystem } from '@/components/particle-system';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { useCursor } from '@/hooks/use-cursor';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Home() {
  useCursor();
  useScrollReveal();

  useEffect(() => {
    // Add Font Awesome for icons
    const fontAwesome = document.createElement('link');
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    fontAwesome.rel = 'stylesheet';
    document.head.appendChild(fontAwesome);

    return () => {
      if (document.head.contains(fontAwesome)) {
        document.head.removeChild(fontAwesome);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Particle Canvas */}
      <ParticleSystem />

      {/* Morphing Blob Background */}
      <div className="blob-container">
        <div className="morphing-blob blob-1"></div>
        <div className="morphing-blob blob-2"></div>
        <div className="morphing-blob blob-3"></div>
      </div>

      {/* Dynamic Gradient Background */}
      <div className="gradient-bg"></div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground" data-testid="footer-text">
            © 2025 Michael Otegbola. Crafted with advanced animations and cutting-edge technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
