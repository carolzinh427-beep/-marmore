import React from 'react';
import { siteConfig } from '../config/site';

export const DifferentialsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F4F0E8] text-[#242320] border-t border-b border-[#EAE6DD]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Lado Esquerdo: Título Editorial Fixo */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold block">
              Diferenciais de Marca
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.15] tracking-tight text-[#121110]">
              PRECISÃO EM CADA CORTE. <br />
              <span className="font-normal italic text-[#A88B63]">ACABAMENTO EM CADA DETALHE.</span>
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed max-w-md">
              A Marmoreli se destaca pelo rigor técnico em todas as etapas. Da escolha da chapa bruta à montagem final, garantimos perfeição arquitetônica.
            </p>

            <div className="pt-6">
              <div className="inline-block p-6 border-l-2 border-[#C5A880] bg-white/60 backdrop-blur-sm">
                <p className="font-serif text-lg italic text-[#121110]">
                  "Não entregamos apenas pedras cortadas. Entregamos a realização do seu projeto de vida."
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#A88B63] block mt-2 font-medium">
                  — Compromisso Marmoreli
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Composição Editorial Limpa em Lista Dividida */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {siteConfig.differentials.map((diff, idx) => (
              <div key={idx} className="space-y-3 border-t border-[#EAE6DD] pt-6 group">
                <span className="text-xs font-serif text-[#A88B63] block tracking-widest">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-light text-[#121110] group-hover:text-[#A88B63] transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
