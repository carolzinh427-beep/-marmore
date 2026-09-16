import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const SolutionsSection: React.FC = () => {
  const getWhatsappSolutionUrl = (solutionTitle: string) => {
    const text = encodeURIComponent(
      `Olá! Gostaria de consultar orçamento para *${solutionTitle}* sob medida para a minha obra.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="solucoes" className="py-24 md:py-32 bg-[#242320] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
              Aplicações Arquitetônicas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-white">
              SOLUÇÕES SOB MEDIDA <br />
              <span className="font-normal italic text-[#C5A880]">PARA CADA AMBIENTE.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-400 max-w-md font-light leading-relaxed">
            Desenvolvemos peças exclusivas em mármores, granitos e quartzitos adaptadas às necessidades técnicas de cada espaço.
          </p>
        </div>

        {/* Grade de Soluções */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.solutions.map((sol, index) => (
            <a
              key={sol.id}
              href={getWhatsappSolutionUrl(sol.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#121110] border border-white/10 hover:border-[#C5A880] p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121110]/50 to-[#121110] z-10" />

              {/* Background Image Container */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 img-zoom-container">
                <img
                  src={sol.image}
                  alt={`Marmoraria Marmoreli - ${sol.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="relative z-20 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xs text-[#C5A880] tracking-widest uppercase border-b border-[#C5A880]/30 pb-1">
                    0{index + 1}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#C5A880] group-hover:translate-x-2 transition-all duration-300" />
                </div>

                <h3 className="font-serif text-2xl font-light text-white group-hover:text-[#C5A880] transition-colors pt-4">
                  {sol.title}
                </h3>

                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {sol.description}
                </p>
              </div>

              {/* Rodapé do Card */}
              <div className="relative z-20 pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                <span className="uppercase tracking-widest text-[10px]">Orçamento WhatsApp</span>
                <span className="text-[#C5A880] group-hover:underline">Consultar</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
