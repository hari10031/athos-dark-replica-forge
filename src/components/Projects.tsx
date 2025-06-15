
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
      description: 'A comprehensive SaaS platform for digital agencies to manage clients, projects, and team collaboration with advanced analytics and real-time reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      title: 'E-commerce Redesign',
      description: 'Complete UI/UX redesign of a luxury e-commerce platform focusing on conversion optimization, user experience, and modern design principles.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&auto=format',
      tech: ['Figma', 'React', 'Next.js', 'Stripe API', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Design & Development'
    },
    {
      title: 'AI-Powered Dashboard',
      description: 'Modern analytics dashboard with AI-driven insights, real-time data visualization, and predictive analytics for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
      tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'AI & Analytics'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with biometric authentication, advanced security features, and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&auto=format',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Biometric API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Mobile Development'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="reveal text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of projects that showcase my skills in design, development, and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 to-emerald-500/20 opacity-50 blur-lg group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        >
                          <Github size={20} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  {project.featured && (
                    <span className="inline-block px-4 py-2 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 font-medium">
                      ✨ Featured Project
                    </span>
                  )}
                  
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-medium tracking-wide">{project.category}</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-400 tracking-wide">TECH STACK</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm bg-white/5 text-gray-300 rounded-xl border border-white/10 font-medium hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full font-medium transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="reveal text-center mt-20">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-lg text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>View all projects on GitHub</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
