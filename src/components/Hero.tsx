
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Creative Developer', 'UI/UX Designer', 'Frontend Engineer'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Greeting */}
          <div className="mb-8">
            <p className="text-primary font-mono text-sm tracking-wider mb-4 opacity-80">
              Hello, I'm
            </p>
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">Athos</span>
            </h1>
          </div>

          {/* Dynamic Role */}
          <div className="mb-12 h-20 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-400">
              I'm a{' '}
              <span className="text-gradient-primary font-medium">
                {roles[currentRole]}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
            I craft digital experiences that blend creativity with cutting-edge technology,
            creating beautiful and functional solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/30">
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-20">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={20} className="group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={20} className="group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:hello@athos.dev"
              className="p-4 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={20} className="group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce p-3 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 group"
          >
            <ChevronDown size={20} className="group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
