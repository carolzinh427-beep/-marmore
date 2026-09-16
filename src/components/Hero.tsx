import React from 'react';
import { ArrowDown, MessageCircle, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#121110]">
      {/* Imagem de Fundo com Overlay Editorial */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroImage}
          alt="Bancada e ilha de cozinha sofisticada em pedra natural"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          loading="eager"
        />
        {/* Layer de Gradiente para Máxima Legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/90 via-[#121110]/70 to-[#121110]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-[#121110]/60" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl space-y-8">
          
          {/* Badge Decorativa */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#C5A880]/40 bg-[#121110]/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-medium">
              Marmoraria de Alto Padrão • {siteConfig.city}
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight">
            A PEDRA CERTA <br />
            <span className="font-normal italic text-[#C5A880]">TRANSFORMA</span> O AMBIENTE.
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
            {siteConfig.heroSubheading}
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A880] hover:bg-[#A88B63] text-[#121110] font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl group"
            >
              <MessageCircle className="w-4 h-4 fill-[#121110]" />
              <span>Solicitar Orçamento</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 hover:border-[#C5A880] text-white hover:text-[#C5A880] font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 bg-black/20 backdrop-blur-sm"
            >
              <span>Ver Projetos</span>
            </a>
          </div>

          {/* Estatísticas Rápidas */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10 max-w-xl">
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-light text-[#C5A880]">{siteConfig.yearsExperience} Anos</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">De Tradição</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-light text-[#C5A880]">{siteConfig.projectsCompleted}</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Projetos Sob Medida</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-light text-[#C5A880]">100%</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Precisão & Acabamento</p>
            </div>
          </div>

        </div>
      </div>

      {/* Indicador de Rolagem */}
      <a
        href="#materiais"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-gray-400 hover:text-[#C5A880] transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-light">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
      </a>
    </section>
  );
};
