import React from 'react';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <footer className="bg-[#121110] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Coluna 1: Logo & Tagline */}
          <div className="md:col-span-5 space-y-6">
            <a href="#inicio" className="group inline-flex items-center gap-3">
              <div className="w-9 h-9 border border-[#C5A880] flex items-center justify-center rotate-45">
                <span className="text-[#C5A880] font-serif font-bold text-lg -rotate-45">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] font-light">
                  {siteConfig.tagline}
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Projetos sob medida em pedras naturais e superfícies especiais. Tradição, acabamento em 45º e precisão arquitetônica para os melhores ambientes.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#C5A880] text-white hover:text-[#121110] transition-colors border border-white/10"
                aria-label="WhatsApp Marmoreli"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#C5A880] text-white hover:text-[#121110] transition-colors border border-white/10"
                aria-label="Instagram Marmoreli"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium">Navegação</h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li>
                <a href="#inicio" className="hover:text-[#C5A880] transition-colors">Início</a>
              </li>
              <li>
                <a href="#materiais" className="hover:text-[#C5A880] transition-colors">Materiais</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#C5A880] transition-colors">Soluções</a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-[#C5A880] transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#C5A880] transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#C5A880] transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização & Atendimento */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium">Atendimento</h4>
            <div className="space-y-3 text-xs text-gray-400 font-light">
              <p className="text-white font-medium">{siteConfig.fullAddress}</p>
              <p>{siteConfig.hours}</p>
              <p className="text-[#C5A880]">{siteConfig.phone}</p>
            </div>
          </div>

        </div>

        {/* Rodapé Final */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-light gap-4">
          <p>© 2026 {siteConfig.name}. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-[#C5A880] transition-colors cursor-pointer"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
