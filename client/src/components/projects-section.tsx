import screenshot1 from "@assets/screenshot-1757387865354.png";
import screenshot2 from "@assets/screenshot-1757387887348.png";
import screenshot3 from "@assets/screenshot-1757387945891.png";
import screenshot4 from "@assets/screenshot-1757387980465.png";
import screenshot5 from "@assets/screenshot-1757388002192.png";
import screenshot6 from "@assets/screenshot-1757388040990.png";
import screenshot7 from "@assets/screenshot-1757388060173.png";
import screenshot8 from "@assets/screenshot-1757388165975.png";

const churchProjects = [
  {
    name: 'CCDM Texas',
    description: 'Christ Covenant Deliverance Ministries - A comprehensive church website featuring live streaming, event management, leadership profiles, and community engagement tools.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
    link: 'http://ccdmtexas.org',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive']
  },
  {
    name: 'Women Standing in Gap',
    description: 'International prayer ministry website with global sisterhood features, prayer schedules, ministry programs, and community building tools.',
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
    link: 'https://womenstandingingap.org/',
    tags: ['WordPress', 'Custom Theme', 'Community']
  }
];

const creativeProjects = [
  {
    name: 'Mary Oluwabukunmi Soniran',
    description: 'Business Analytics professional portfolio featuring data visualization, project showcases, and certifications.',
    image: screenshot1,
    link: '#',
    tags: ['Analytics', 'Dashboard', 'Data Viz']
  },
  {
    name: 'Olalekan Ayoola',
    description: 'AI & Data-Driven specialist portfolio showcasing machine learning projects and technical expertise.',
    image: screenshot4,
    link: '#',
    tags: ['AI/ML', 'Data Science', 'Python']
  },
  {
    name: 'Isaac Oyetesu (Kolawole)',
    description: 'Remote Physics & Mathematics educator with virtual classroom features and student engagement tools.',
    image: screenshot5,
    link: '#',
    tags: ['Education', 'Physics', 'Math']
  },
  {
    name: 'Deborah Idowu',
    description: 'Azure Solutions Architect portfolio showcasing cloud infrastructure projects and technical expertise.',
    image: screenshot6,
    link: '#',
    tags: ['Azure', 'Cloud', 'DevOps']
  },
  {
    name: 'Ayorinde Omowumi Florence',
    description: 'Customer Care & Virtual Support specialist portfolio with service excellence showcase.',
    image: screenshot7,
    link: '#',
    tags: ['Customer Care', 'Support', 'Service']
  },
  {
    name: 'Jeremiah Adeleye',
    description: 'Computer Science PhD candidate portfolio featuring research projects and academic achievements.',
    image: screenshot8,
    link: '#',
    tags: ['Research', 'PhD', 'CS']
  }
];

export function ProjectsSection() {
  return (
    <>
      {/* Church Projects Section */}
      <section id="church-projects" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6" data-testid="church-projects-title">
              Church <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="church-projects-description">
              Faith-based organizations empowered through modern web solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {churchProjects.map((project) => (
              <div key={project.name} className="project-card rounded-xl overflow-hidden scroll-reveal" data-testid={`church-project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={`${project.name} website`}
                    className="w-full h-64 object-cover"
                    data-testid={`church-project-image-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4" data-testid={`church-project-name-${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`church-project-description-${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        data-testid={`church-project-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="liquid-btn inline-block px-6 py-3 text-white font-medium rounded-full"
                    data-testid={`church-project-link-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="relative z-10">View Live Site</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Portfolio Section */}
      <section id="projects" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6" data-testid="creative-projects-title">
              Creative <span className="text-accent">Portfolios</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="creative-projects-description">
              Personal brand websites showcasing individual expertise and professional achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeProjects.map((project) => (
              <div 
                key={project.name} 
                className="project-card rounded-xl overflow-hidden scroll-reveal"
                data-testid={`creative-project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={`${project.name} portfolio website`}
                    className="w-full h-48 object-cover"
                    data-testid={`creative-project-image-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`creative-project-name-${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm" data-testid={`creative-project-description-${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs"
                        data-testid={`creative-project-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="text-primary hover:text-accent transition-colors text-sm font-medium"
                    data-testid={`creative-project-link-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    View Portfolio →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
