
import React, { useEffect, useRef } from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      company: 'Creative Digital Agency',
      position: 'Senior Frontend Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading frontend development for high-profile client projects, mentoring junior developers, and implementing modern development practices.',
      achievements: [
        'Increased client satisfaction by 40% through improved UX/UI implementations',
        'Led a team of 6 developers on multiple concurrent projects',
        'Introduced modern development workflows reducing deployment time by 60%'
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      company: 'Tech Startup Inc.',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed and maintained multiple web applications, collaborated with design teams, and contributed to product strategy.',
      achievements: [
        'Built scalable applications serving 100k+ users',
        'Reduced application load time by 50% through optimization',
        'Collaborated with cross-functional teams to deliver features on time'
      ],
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      company: 'Design Studio',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'Los Angeles, CA',
      description: 'Specialized in creating pixel-perfect implementations of complex designs and interactive web experiences.',
      achievements: [
        'Delivered 20+ client projects with 100% satisfaction rate',
        'Developed reusable component library used across all projects',
        'Improved development efficiency by 30% through automation'
      ],
      tech: ['JavaScript', 'SCSS', 'WordPress', 'jQuery', 'Gulp']
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">My journey</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="reveal relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <div className="md:ml-20">
                    <div className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold gradient-text mb-1">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-foreground mb-2">
                            <Building size={16} />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-md font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
