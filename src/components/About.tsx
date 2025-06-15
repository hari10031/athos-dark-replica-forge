
import React, { useEffect, useRef } from 'react';
import { Code2, Palette, Lightbulb, Heart, ArrowRight } from 'lucide-react';

const About = () => {
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

  const skills = [
    {
      icon: Code2,
      title: 'Development',
      description: 'Building scalable applications with modern technologies',
      tech: ['React', 'TypeScript', 'Node.js', 'Python', 'Next.js']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful and intuitive user experiences',
      tech: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Sketch']
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Problem-solving with creative and strategic thinking',
      tech: ['UX Research', 'Product Strategy', 'Design Systems', 'Leadership']
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Committed to continuous learning and excellence',
      tech: ['Mentoring', 'Open Source', 'Community', 'Innovation']
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="reveal text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">Get to know me</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Column - Story */}
          <div className="reveal">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-8">
                My Story
              </h3>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate creative developer with over 5+ years of experience crafting 
                  digital experiences that push the boundaries of what's possible. My journey 
                  began with curiosity about how beautiful websites come to life.
                </p>
                <p>
                  Today, I specialize in creating products that not only look stunning but solve 
                  real problems. I believe great design is invisible – it just works, feels natural, 
                  and makes people's lives better.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to 
                  open-source projects, or mentoring the next generation of developers.
                </p>
              </div>

              <button className="group mt-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <span className="font-medium">Let's work together</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="group p-8 glass-effect rounded-2xl card-hover border border-white/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                      <skill.icon size={24} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{skill.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/5 text-gray-400 rounded-full border border-white/10 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 glass-effect rounded-3xl border border-white/5">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '30+', label: 'Happy Clients' },
              { number: '99%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
