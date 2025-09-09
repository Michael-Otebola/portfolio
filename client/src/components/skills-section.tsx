import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const skills = [
  {
    icon: <i className="fab fa-html5 text-4xl text-primary"></i>,
    name: 'HTML/CSS',
    description: 'Advanced semantic markup and modern CSS including Grid, Flexbox, and animations',
    proficiency: 95,
    color: 'text-primary'
  },
  {
    icon: <i className="fab fa-js-square text-4xl text-accent"></i>,
    name: 'JavaScript',
    description: 'ES6+, DOM manipulation, async programming, and modern JavaScript frameworks',
    proficiency: 90,
    color: 'text-accent'
  },
  {
    icon: <i className="fab fa-react text-4xl text-blue-400"></i>,
    name: 'React',
    description: 'Component architecture, hooks, state management, and modern React patterns',
    proficiency: 85,
    color: 'text-blue-400'
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-400" />,
    name: 'UI/UX Design',
    description: 'User-centered design, prototyping, design systems, and accessibility',
    proficiency: 88,
    color: 'text-pink-400'
  },
  {
    icon: <Smartphone className="w-10 h-10 text-green-400" />,
    name: 'Responsive Design',
    description: 'Mobile-first approach, cross-browser compatibility, and performance optimization',
    proficiency: 92,
    color: 'text-green-400'
  },
  {
    icon: <Zap className="w-10 h-10 text-purple-400" />,
    name: 'Animation/Motion Graphics',
    description: 'CSS animations, Canvas API, WebGL, and interactive motion design',
    proficiency: 87,
    color: 'text-purple-400'
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6" data-testid="skills-title">
            Interactive <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="skills-description">
            Advanced technical expertise in modern web technologies and design systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-card rounded-xl p-8 scroll-reveal" 
              data-skill={skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}
              data-testid={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid={`skill-name-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                {skill.name}
              </h3>
              <p className="text-muted-foreground mb-4" data-testid={`skill-description-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                {skill.description}
              </p>
              <div className="progress-bar mb-2">
                <div 
                  className="progress-fill" 
                  data-progress={skill.proficiency}
                  data-testid={`skill-progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                ></div>
              </div>
              <span className="text-sm text-muted-foreground" data-testid={`skill-proficiency-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                {skill.proficiency}% Proficiency
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
