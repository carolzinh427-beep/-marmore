import React from 'react';
import { ArrowDown, MessageCircle, ChevronRight, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { siteConfig } from '../config/site';
import { StoneLogo } from './StoneLogo';

export const Hero: React.FC = () => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#070708] pt-24 pb-16">
      {/* Fundo de Mármore Preto com Veios Dourados (Conforme Primeira Imagem Anexada) */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroImage}
          alt="Textura de Mármore Preto Nero com Veios Dourados - Stone Gran Lux"
          className="w-full h-full object-cover object-center scale-105 opacity-60 transition-transform duration-[20000ms] hover:scale-100"
          loading="eager"
        />
        
        {/* Overlays de iluminação e escurecimento focal */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/90 via-[#070708]/75 to-[#070708]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070708]/60 to-[#070708]" />
        
        {/* Subtle Golden Veins Shimmer Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(212,175,55,0.05)_0%,transparent_50%,rgba(212,175,55,0.08)_100%)] pointer-events-none" />
      </div>

      {/* Conteúdo Central Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col items-center justify-center text-center">
        
        {/* Logo Central Impulsionada Conforme Imagem 1 */}
        <div className="mb-6 transform hover:scale-[1.03] transition-transform duration-500">
          <StoneLogo size="hero" showTagline={true} />
        </div>

        {/* Badge de Destaque */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md mb-6 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F7E7AD] font-semibold">
            Marmoraria de Luxo • {siteConfig.city}
          </span>
        </div>

        {/* Título Principal de Alta Conversão */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12] max-w-4xl tracking-tight mb-6">
          ELEGÂNCIA ESCULPIDA EM <br className="hidden sm:inline" />
          <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#C5A059]">
            PEDRAS NOBRES & EXÓTICAS
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mb-8">
          {siteConfig.heroSubheading}
        </p>

        {/* Botões Principais de Conversão */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#AA822A] hover:from-[#FFF0BF] hover:to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] group"
          >
            <MessageCircle className="w-5 h-5 fill-black text-black" />
            <span>Solicitar Orçamento no WhatsApp</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#materiais"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 bg-black/40 backdrop-blur-sm"
          >
            <span>Explorar Catálogo</span>
          </a>
        </div>

        {/* Badges de Confiança & Métricas Rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-[#D4AF37]/20 w-full max-w-4xl">
          <div className="flex flex-col items-center p-3 bg-black/40 border border-white/5 rounded-sm">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.yearsExperience}+ Anos</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">Tradição & Prestígio</span>
          </div>

          <div className="flex flex-col items-center p-3 bg-black/40 border border-white/5 rounded-sm">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.projectsCompleted}</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">Projetos Executados</span>
          </div>

          <div className="flex flex-col items-center p-3 bg-black/40 border border-white/5 rounded-sm">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">Corte CNC</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">Precisão Milimétrica</span>
          </div>

          <div className="flex flex-col items-center p-3 bg-black/40 border border-white/5 rounded-sm">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.warrantyYears} Anos</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">Garantia Técnica</span>
          </div>
        </div>

      </div>

      {/* Indicador de Rolagem */}
      <a
        href="#diferenciais"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-gray-400 hover:text-[#D4AF37] transition-colors group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-light">Role para saber mais</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
};
