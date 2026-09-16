import React from 'react';
import { siteConfig } from '../config/site';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#121110] text-white relative overflow-hidden">
      
      {/* Elemento Decorativo sutil de fundo */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
            Fluxo de Trabalho de Excelência
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-white">
            DO PROJETO <br />
            <span className="font-normal italic text-[#C5A880]">À INSTALAÇÃO.</span>
          </h2>
        </div>

        {/* Linha do Tempo dos Processos */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          
          {/* Linha horizontal conectando as etapas no desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#C5A880]/80 via-white/20 to-[#C5A880]/80 z-0" />

          {siteConfig.processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col space-y-6 group">
              
              {/* Círculo com Número */}
              <div className="w-14 h-14 bg-[#121110] border border-[#C5A880] group-hover:bg-[#C5A880] transition-colors duration-500 flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-[#C5A880] group-hover:text-[#121110] transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Informações da Etapa */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-light tracking-wide text-white group-hover:text-[#C5A880] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
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
