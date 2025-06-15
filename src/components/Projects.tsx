
import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((reveal) => observer.observe(reveal));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Digital Agency Platform',
      description: 'A comprehensive platform for digital agencies to manage clients, projects, and team collaboration with advanced analytics and reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'E-commerce Redesign',
      description: 'Complete UI/UX redesign of an e-commerce platform focusing on conversion optimization and user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Figma', 'React', 'Framer Motion', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI-Powered Dashboard',
      description: 'Modern dashboard with AI-driven insights and real-time data visualization for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with biometric authentication and advanced security features.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Biometric API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">My work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-500 opacity-20 blur group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs bg-primary/20 text-primary rounded-full font-mono">
                      Featured Project
                    </span>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-secondary text-foreground rounded-lg font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-16">
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
          >
            View all projects on GitHub
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
