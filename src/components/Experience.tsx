
import React, { useEffect, useRef } from 'react';
import { MapPin, Calendar, Building, TrendingUp } from 'lucide-react';

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
      type: 'Full-time',
      description: 'Leading frontend development for high-profile client projects, architecting scalable solutions, and mentoring a team of junior developers.',
      achievements: [
        'Increased client satisfaction by 40% through improved UX implementations',
        'Led development of 15+ successful client projects worth $2M+ in revenue',
        'Reduced deployment time by 60% through modern CI/CD workflows',
        'Mentored 8 junior developers, with 100% promotion rate'
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GraphQL']
    },
    {
      company: 'Tech Startup Inc.',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Built and maintained multiple web applications serving 100k+ users, collaborated closely with design and product teams.',
      achievements: [
        'Developed scalable applications handling 500k+ monthly active users',
        'Improved application performance by 50% through optimization techniques',
        'Successfully launched 3 major product features ahead of schedule',
        'Established development best practices adopted company-wide'
      ],
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis']
    },
    {
      company: 'Design Studio Co.',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      description: 'Specialized in creating pixel-perfect implementations of complex designs and interactive web experiences for premium clients.',
      achievements: [
        'Delivered 25+ client projects with 100% satisfaction rate',
        'Built reusable component library reducing development time by 35%',
        'Won "Best Implementation" award for innovative animation work',
        'Collaborated with top-tier brands including Fortune 500 companies'
      ],
      tech: ['JavaScript', 'SCSS', 'WordPress', 'GSAP', 'Three.js', 'Webpack']
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="reveal text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">Career Journey</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey building digital products and leading development teams
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="reveal relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/25 hidden md:block z-10"></div>
                
                <div className="md:ml-20">
                  <div className="group p-8 glass-effect rounded-3xl border border-white/5 card-hover">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <Building size={14} />
                          <span>{exp.company}</span>
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs border border-primary/30">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary">
                          {exp.position}
                        </h3>
                      </div>
                      
                      <div className="flex flex-col gap-2 text-sm text-gray-400 mt-4 lg:mt-0 lg:text-right">
                        <div className="flex items-center gap-1 lg:justify-end">
                          <Calendar size={14} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 lg:justify-end">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={16} className="text-primary" />
                        <h4 className="font-semibold text-white">Key Achievements</h4>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-400 tracking-wide">TECHNOLOGIES USED</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs bg-white/5 text-gray-300 rounded-lg border border-white/10 font-medium hover:bg-white/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="reveal mt-20">
          <div className="p-8 glass-effect rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-center mb-8 text-gradient-primary">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { skill: 'Frontend Development', years: '5+' },
                { skill: 'UI/UX Design', years: '4+' },
                { skill: 'Team Leadership', years: '3+' },
                { skill: 'Project Management', years: '5+' }
              ].map((item) => (
                <div key={item.skill}>
                  <div className="text-3xl font-bold text-primary mb-2">{item.years}</div>
                  <div className="text-gray-400 text-sm font-medium">{item.skill}</div>
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
