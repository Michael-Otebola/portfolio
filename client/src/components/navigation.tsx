export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-glass glass rounded-full px-8 py-4" data-testid="navigation">
      <div className="flex items-center space-x-8">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-sm font-medium hover:text-primary transition-colors"
          data-testid="nav-home"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="text-sm font-medium hover:text-primary transition-colors"
          data-testid="nav-skills"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-sm font-medium hover:text-primary transition-colors"
          data-testid="nav-projects"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-sm font-medium hover:text-primary transition-colors"
          data-testid="nav-contact"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
