
import React, { useState, useEffect } from 'react';
import { Home, Eye, Heart, Send, Sun } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: Eye, label: 'About' },
    { id: 'projects', icon: Heart, label: 'Projects' },
    { id: 'experience', icon: Send, label: 'Experience' },
    { id: 'contact', icon: Sun, label: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3">
        <div className="flex items-center space-x-8">
          {navItems.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'bg-white/20 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
