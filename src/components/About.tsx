
import React, { useEffect, useRef } from 'react';
import { Code2, Palette, Lightbulb, Heart } from 'lucide-react';

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
      description: 'Full-stack development with modern frameworks and technologies',
      tech: ['React', 'TypeScript', 'Node.js', 'Python']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces',
      tech: ['Figma', 'Adobe CC', 'Framer', 'Sketch']
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Problem-solving and creative thinking for complex challenges',
      tech: ['UX Research', 'Product Strategy', 'Innovation', 'Leadership']
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Dedicated to continuous learning and excellence',
      tech: ['Mentoring', 'Open Source', 'Community', 'Growth']
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-500 opacity-20 blur"></div>
              <div className="relative glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate creative developer with over 5 years of experience crafting digital experiences 
                  that push the boundaries of what's possible on the web. My journey began with a simple curiosity 
                  about how websites work, which evolved into a deep love for creating beautiful, functional, and 
                  meaningful digital products.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I believe that great design is not just about aesthetics—it's about creating solutions that 
                  genuinely improve people's lives. Whether I'm building a complex web application or designing 
                  a simple interface, I always keep the user at the center of every decision.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                  projects, or mentoring aspiring developers in the community.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <skill.icon size={32} className="text-primary mb-3" />
                  <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md font-mono"
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
    </section>
  );
};

export default About;
