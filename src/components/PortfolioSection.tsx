import React, { useState } from 'react';
import { Maximize2, Layers, Sparkles } from 'lucide-react';
import { siteConfig, PortfolioProject } from '../config/site';
import { LightboxModal } from './LightboxModal';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['Todos', 'Cozinhas', 'Banheiros', 'Painéis & Ônix', 'Gourmet'];

  const filteredProjects = activeCategory === 'Todos'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0A0C] text-white border-t border-b border-[#D4AF37]/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header com Fundo Escuro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F7E7AD] font-semibold">
                PORTFÓLIO VIP DE PROJETOS ENTREGUES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-white">
              OBRAS DE ARTE EM <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#C5A059]">
                RESIDÊNCIAS DE ALTO PADRÃO
              </span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-300 max-w-md font-light leading-relaxed">
            Confira algumas das execuções em mármores nobres, quartzitos e ilhas translúcidas instaladas nos principais condomínios e bairros nobres.
          </p>
        </div>

        {/* Filtros da Galeria */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-bold whitespace-nowrap cursor-pointer rounded-xs border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#AA822A] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-black/60 text-gray-400 border-white/10 hover:border-[#D4AF37]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid do Portfólio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#121215] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between rounded-sm hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Zoom & Overlay */}
                <div className="relative aspect-[4/3] img-zoom-container bg-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Stone Gran Lux - ${project.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="p-3 bg-[#D4AF37] text-black font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-xs uppercase tracking-widest">
                      <Maximize2 className="w-4 h-4 text-black" />
                      Expandir Foto
                    </span>
                  </div>
                  
                  <span className="absolute top-4 left-4 font-serif text-[10px] uppercase font-bold tracking-widest text-black bg-gradient-to-r from-[#F7E7AD] to-[#D4AF37] px-3 py-1">
                    {project.category}
                  </span>
                </div>

                {/* Conteúdo resumido */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {project.materialUsed}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F7E7AD] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between text-xs text-gray-400 border-t border-white/10 mt-4 pt-4">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-300">{project.environment}</span>
                <span className="text-[#D4AF37] font-bold group-hover:underline">Ver Projeto →</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
