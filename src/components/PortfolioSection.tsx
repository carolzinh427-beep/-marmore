import React, { useState } from 'react';
import { Maximize2, Layers } from 'lucide-react';
import { siteConfig, PortfolioProject } from '../config/site';
import { LightboxModal } from './LightboxModal';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['Todos', 'Cozinhas', 'Banheiros', 'Gourmet', 'Escadas', 'Comerciais'];

  const filteredProjects = activeCategory === 'Todos'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter((item) => item.category === activeCategory);

  return (
    <section id="projetos" className="py-24 md:py-32 bg-[#FBF9F5] text-[#242320]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 pb-8 border-b border-[#EAE6DD]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold block mb-3">
              Galeria Premium
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight">
              PROJETOS <br />
              <span className="font-normal italic text-[#121110]">QUE FALAM POR SI.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-md font-light leading-relaxed">
            Cada projeto é pensado para valorizar o ambiente e entregar um acabamento que permanece.
          </p>
        </div>

        {/* Filtros da Galeria */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.15em] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#121110] text-[#C5A880] shadow-md'
                  : 'bg-white text-gray-600 hover:bg-[#F4F0E8] border border-[#EAE6DD]'
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
              className="group cursor-pointer bg-white border border-[#EAE6DD] hover:border-[#C5A880] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom & Overlay */}
                <div className="relative aspect-[4/3] img-zoom-container bg-[#F4F0E8] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Marmoraria Marmoreli - ${project.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="p-3 bg-[#C5A880] text-[#121110] rounded-none shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                  
                  <span className="absolute top-4 left-4 font-serif text-[10px] uppercase tracking-widest text-white bg-black/60 backdrop-blur-md px-3 py-1 border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Conteúdo resumido */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#A88B63] font-medium flex items-center gap-1.5">
                    <Layers className="w-3 h-3" />
                    {project.materialUsed}
                  </span>
                  <h3 className="font-serif text-xl font-light text-[#121110] group-hover:text-[#A88B63] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 font-light">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between text-xs text-gray-500 border-t border-[#F4F0E8] mt-4 pt-4">
                <span className="text-[10px] uppercase tracking-wider">{project.environment}</span>
                <span className="text-[#A88B63] font-medium group-hover:underline">Ampliar Foto</span>
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
