import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const CtaBanner: React.FC = () => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Olá! Tenho uma planta/referência do meu projeto e gostaria de falar com a equipe de orçamentos da ${siteConfig.name}.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#121110] text-white overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_kitchen.jpg"
          alt="Projeto Marmoreli"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110] via-[#121110]/80 to-[#121110]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        
        <div className="inline-block px-4 py-1.5 border border-[#C5A880]/40 bg-black/40 backdrop-blur-md">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
            Atendimento Rápido via WhatsApp
          </span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
          SEU PROJETO <br />
          <span className="font-normal italic text-[#C5A880]">COMEÇA AQUI.</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Envie uma foto, planta baixada ou referência do seu ambiente e receba um atendimento personalizado com estimativa de orçamento sem compromisso.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-[#C5A880] hover:bg-[#A88B63] text-[#121110] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <MessageCircle className="w-5 h-5 fill-[#121110]" />
            <span>Solicitar Orçamento pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="text-xs text-gray-400 font-light pt-2">
          Resposta em média dentro de poucas horas em horário comercial • Atendemos {siteConfig.city} e região
        </p>

      </div>
    </section>
  );
};
