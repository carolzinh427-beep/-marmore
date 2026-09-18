import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const CtaBanner: React.FC = () => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Olá Stone Gran Lux! Tenho o projeto em PDF/planta do meu ambiente e gostaria de solicitar um orçamento exclusivo.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#070708] text-white overflow-hidden border-t border-b border-[#D4AF37]/30">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroImage}
          alt="Projeto Stone Gran Lux"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070708] via-[#070708]/85 to-[#070708]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F7E7AD] font-semibold">
            ORÇAMENTO EXPRESSO EM ATÉ 15 MINUTOS VIA WHATSAPP
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
          SUA OBRA DE ARTE EM PEDRA <br />
          <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#C5A059]">
            COMEÇA COM UMA MENSAGEM.
          </span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Envie a planta do imóvel ou as medidas aproximadas e receba uma consultoria VIP em pedras exóticas, mármores e ilhas translúcidas.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#AA822A] hover:from-[#FFF0BF] hover:to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center gap-3 group"
          >
            <MessageCircle className="w-5 h-5 fill-black text-black" />
            <span>Falar com um Consultor de Orçamentos no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="text-xs text-gray-400 font-light pt-2">
          Atendimento imediato em horário comercial • Atendemos {siteConfig.city} e todo o Brasil
        </p>

      </div>
    </section>
  );
};
