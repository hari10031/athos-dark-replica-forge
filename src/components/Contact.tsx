
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully! 🚀",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@athos.dev',
      href: 'mailto:hello@athos.dev',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      description: 'Available for remote work'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="reveal text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">Get in touch</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Work <span className="text-gradient-primary">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss your ideas and bring them to life with cutting-edge design and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal">
              <h3 className="text-3xl font-bold mb-6 text-gradient-primary">
                Ready to start your project?
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm always excited about new opportunities and challenging projects. 
                Whether you have a question, want to collaborate, or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="reveal space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-start gap-4 p-6 glass-effect rounded-2xl border border-white/5 card-hover"
                >
                  <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                    <info.icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    <p className="font-semibold text-white mb-1">{info.value}</p>
                    <p className="text-xs text-gray-500">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="reveal">
              <p className="text-sm text-gray-400 mb-4 font-medium">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass-effect rounded-xl border border-white/5 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="reveal space-y-6 p-8 glass-effect rounded-3xl border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle size={24} className="text-primary" />
                <h3 className="text-2xl font-bold text-white">Send me a message</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-gray-500 h-12"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-gray-500 h-12"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-gray-500 h-12"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-gray-500 resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 h-auto rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-gray-500 text-center">
                I'll get back to you within 24 hours. Usually much sooner! ⚡
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal text-center mt-20 pt-16 border-t border-white/10">
          <p className="text-gray-500 mb-4">
            © 2024 Athos. Crafted with passion and lots of coffee ☕
          </p>
          <p className="text-sm text-gray-600">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
