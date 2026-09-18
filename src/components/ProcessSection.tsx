import React from 'react';
import { siteConfig } from '../config/site';
import { Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-24 md:py-32 bg-[#0A0A0C] text-white relative overflow-hidden border-t border-b border-[#D4AF37]/30">
      
      {/* Elemento Decorativo de fundo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F7E7AD] font-semibold">
              ENGENHARIA & PROCESSO DE ATENDIMENTO VIP
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-white">
            DO CONCEITO À INSTALAÇÃO <br />
            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#C5A059]">
              EM 4 ETAPAS RIGOROSAS
            </span>
          </h2>

          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-xl">
            Cada projeto Stone Gran Lux segue um protocolo estrito para garantir que sua pedra chegue perfeita à obra e com encaixe milimétrico.
          </p>
        </div>

        {/* Linha do Tempo dos Processos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Linha horizontal conectando as etapas no desktop */}
          <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#D4AF37]/80 via-white/20 to-[#D4AF37]/80 z-0" />

          {siteConfig.processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col space-y-6 group bg-[#121215] p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 rounded-sm shadow-xl hover:-translate-y-1">
              
              {/* Círculo com Número */}
              <div className="w-16 h-16 bg-black border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors duration-500 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <span className="font-serif text-2xl font-bold text-[#D4AF37] group-hover:text-black transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Informações da Etapa */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  {step.subtitle}
                </span>
                
                <h3 className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-[#F7E7AD] transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
