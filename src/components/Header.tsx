import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Materiais', href: '#materiais' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const getWhatsappUrl = (customText?: string) => {
    const text = encodeURIComponent(customText || siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-header py-4 text-white shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="w-9 h-9 border border-[#C5A880] flex items-center justify-center rotate-45 group-hover:bg-[#C5A880] transition-colors duration-300">
            <span className="text-[#C5A880] font-serif font-bold text-lg -rotate-45 group-hover:text-[#121110] transition-colors">
              M
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
              {siteConfig.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] font-light">
              Mármores & Design
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-[#C5A880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#C5A880] hover:bg-[#A88B63] text-[#121110] font-medium text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-[#121110]" />
            <span>Solicitar Orçamento</span>
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#C5A880] text-[#121110] rounded-none hover:bg-white transition-colors"
            aria-label="Orçamento WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-[#121110]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#C5A880] transition-colors focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-[#121110]/95 backdrop-blur-xl border-t border-white/10 z-40 flex flex-col justify-between p-8 animate-fade-in">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-wider text-white hover:text-[#C5A880] transition-colors border-b border-white/5 pb-3"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-white/10">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#C5A880] text-[#121110] font-semibold text-center text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 fill-[#121110]" />
              Solicitar Orçamento pelo WhatsApp
            </a>
            
            <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                {siteConfig.phone}
              </span>
              <span>{siteConfig.city} - {siteConfig.state}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
