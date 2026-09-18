import React from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const SolutionsSection: React.FC = () => {
  const getWhatsappSolutionUrl = (title: string) => {
    const text = encodeURIComponent(
      `Olá Stone Gran Lux! Gostaria de um orçamento especializado para *${title}* para o meu projeto.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="solucoes" className="py-24 md:py-32 bg-white text-black border-t border-b border-neutral-200 relative overflow-hidden">
      
      {/* Decorative Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header da Seção com Fundo Claro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-neutral-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6E9] border border-[#D4AF37]/30 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B89334]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7C1D] font-bold">
                APLICAÇÕES ARQUITETÔNICAS SOB MEDIDA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-neutral-900">
              SOLUÇÕES DE LUXO PARA <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B89334] via-[#D4AF37] to-[#8A6D23]">
                CADA AMBIENTE DA SUA RESIDÊNCIA
              </span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-neutral-600 max-w-md font-light leading-relaxed">
            De bancadas gourmets com cubas ocultas a painéis verticais retroiluminados em pedra natural, executamos cada projeto com precisão cirúrgica.
          </p>
        </div>

        {/* Grid de Soluções com Cards Brancos e Detalhes Dourados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.solutions.map((sol, index) => (
            <div
              key={sol.id}
              className="group bg-neutral-50 border border-neutral-200 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl flex flex-col justify-between rounded-sm"
            >
              <div>
                {/* Imagem do Projeto com Overlay */}
                <div className="relative aspect-[16/9] img-zoom-container bg-neutral-200 overflow-hidden">
                  <img
                    src={sol.image}
                    alt={`Stone Gran Lux - ${sol.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                  
                  <span className="absolute top-4 left-4 font-serif text-xs font-bold tracking-widest text-[#D4AF37] bg-black/80 px-3 py-1 border border-[#D4AF37]/40 uppercase">
                    0{index + 1} • {sol.title}
                  </span>
                </div>

                {/* Conteúdo Informativo */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 group-hover:text-[#B89334] transition-colors">
                    {sol.title}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-wider text-[#B89334] font-semibold">
                    {sol.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Highlights de Engenharia */}
                  <div className="pt-4 border-t border-neutral-200 space-y-2">
                    {sol.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-800">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botão de Solicitação do Projeto */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={getWhatsappSolutionUrl(sol.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 bg-neutral-900 hover:bg-[#B89334] text-white hover:text-black transition-colors duration-300 text-xs uppercase tracking-[0.18em] font-bold flex items-center justify-between shadow-md"
                >
                  <span>Orçamento de {sol.title}</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
