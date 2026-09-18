import React, { useState } from 'react';
import { Maximize2, Layers, Sparkles, MapPin } from 'lucide-react';
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
    <section id="portfolio" className="py-24 md:py-32 bg-white text-black border-t border-b border-neutral-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header com Fundo Branco */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6E9] border border-[#D4AF37]/30 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B89334]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7C1D] font-bold">
                PORTFÓLIO VIP DE PROJETOS ENTREGUES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-neutral-900">
              OBRAS DE ARTE EM <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B89334] via-[#D4AF37] to-[#8A6D23]">
                RESIDÊNCIAS DE ALTO PADRÃO
              </span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-neutral-600 max-w-md font-light leading-relaxed">
            Confira algumas das execuções em mármores nobres, quartzitos e ilhas translúcidas instaladas nos principais condomínios e bairros nobres.
          </p>
        </div>

        {/* Filtros da Galeria */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-bold whitespace-nowrap cursor-pointer rounded-xs ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-[#D4AF37] border border-[#D4AF37] shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200'
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
              className="group cursor-pointer bg-neutral-50 border border-neutral-200 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl flex flex-col justify-between rounded-sm"
            >
              <div>
                {/* Image Container with Zoom & Overlay */}
                <div className="relative aspect-[4/3] img-zoom-container bg-neutral-200 overflow-hidden">
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
                  
                  <span className="absolute top-4 left-4 font-serif text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] bg-black/80 backdrop-blur-md px-3 py-1 border border-[#D4AF37]/40">
                    {project.category}
                  </span>
                </div>

                {/* Conteúdo resumido */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#B89334] font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {project.materialUsed}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-[#B89334] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-200 mt-4 pt-4">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-700">{project.environment}</span>
                <span className="text-[#B89334] font-bold group-hover:underline">Ver Projeto →</span>
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
