import React from 'react';
import { siteConfig } from '../config/site';
import { Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-24 md:py-32 bg-white text-black relative overflow-hidden border-t border-b border-neutral-200">
      
      {/* Elemento Decorativo sutil de topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6E9] border border-[#D4AF37]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#B89334]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7C1D] font-bold">
              ENGENHARIA & PROCESSO DE ATENDIMENTO VIP
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-neutral-900">
            DO CONCEITO À INSTALAÇÃO <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B89334] via-[#D4AF37] to-[#8A6D23]">
              EM 4 ETAPAS RIGOROSAS
            </span>
          </h2>

          <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-xl">
            Cada projeto Stone Gran Lux segue um protocolo estrito para garantir que sua pedra chegue perfeita à obra e com encaixe milimétrico.
          </p>
        </div>

        {/* Linha do Tempo dos Processos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Linha horizontal conectando as etapas no desktop */}
          <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#D4AF37]/80 via-neutral-300 to-[#D4AF37]/80 z-0" />

          {siteConfig.processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col space-y-6 group bg-neutral-50 hover:bg-white p-6 border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 rounded-sm shadow-sm hover:shadow-2xl">
              
              {/* Círculo com Número */}
              <div className="w-16 h-16 bg-neutral-900 border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors duration-500 flex items-center justify-center shadow-md">
                <span className="font-serif text-2xl font-bold text-[#D4AF37] group-hover:text-black transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Informações da Etapa */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B89334]">
                  {step.subtitle}
                </span>
                
                <h3 className="font-serif text-xl font-bold tracking-wide text-neutral-900 group-hover:text-[#B89334] transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
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
