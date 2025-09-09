export function HeroSection() {
  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 section-3d">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="layer-1">
          <h1 className="fluid-text font-display font-bold mb-8" data-testid="hero-title">
            Michael Otegbola
          </h1>
        </div>
        <div className="layer-2">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4" data-testid="hero-subtitle">
            Advanced Web Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="hero-description">
            Crafting immersive digital experiences with cutting-edge technologies, 
            advanced animations, and user-centric design principles.
          </p>
        </div>
        <div className="layer-3 flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={handleViewWork}
            className="liquid-btn px-8 py-4 text-white font-semibold"
            data-testid="button-view-work"
          >
            <span className="relative z-10">View My Work</span>
          </button>
          <a 
            href="https://wa.me/2349012919868" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass rounded-full px-8 py-4 border border-primary/20 hover:border-primary/50 transition-all"
            data-testid="link-whatsapp"
          >
            <i className="fab fa-whatsapp mr-2"></i> Let's Connect
          </a>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating">
        <div className="w-20 h-20 rounded-lg glass border border-primary/20"></div>
      </div>
      <div className="absolute bottom-32 right-16 floating" style={{animationDelay: '-2s'}}>
        <div className="w-16 h-16 rounded-full glass border border-accent/20"></div>
      </div>
    </section>
  );
}
