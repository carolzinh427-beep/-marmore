import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

export const MaterialsSection: React.FC = () => {
  const getWhatsappMaterialUrl = (materialName: string) => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse no material *${materialName}* para o meu projeto. Poderia me enviar mais informações e orçamento?`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="materiais" className="py-24 md:py-32 bg-[#FBF9F5] text-[#242320]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-[#EAE6DD]">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold block mb-3">
              Seleção Exclusiva de Rochas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight">
              MATERIAIS QUE <br />
              <span className="font-normal italic">VALORIZAM</span> SEU PROJETO.
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-md font-light leading-relaxed">
            Selecionamos materiais que combinam estética, alta resistência e personalidade para cada ambiente da sua residência ou empresa.
          </p>
        </div>

        {/* Grid de Materiais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.materials.map((mat) => (
            <div
              key={mat.id}
              className="group bg-white border border-[#EAE6DD] hover:border-[#C5A880] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative aspect-[4/3] img-zoom-container bg-[#F4F0E8] overflow-hidden">
                  <img
                    src={mat.image}
                    alt={`Marmoraria Marmoreli - ${mat.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute bottom-4 left-4 font-serif text-xs tracking-widest text-white/90 uppercase bg-black/40 backdrop-blur-md px-3 py-1 border border-white/20">
                    {mat.name}
                  </span>
                </div>

                {/* Conteúdo Informativo */}
                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-light text-[#121110] group-hover:text-[#A88B63] transition-colors">
                    {mat.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#A88B63] font-medium">
                    {mat.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {mat.description}
                  </p>

                  {/* Bullet points de características */}
                  <div className="pt-4 border-t border-[#F4F0E8] space-y-2">
                    {mat.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botão de Solicitação do Material no WhatsApp */}
              <div className="p-8 pt-0">
                <a
                  href={getWhatsappMaterialUrl(mat.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#F4F0E8] hover:bg-[#121110] text-[#121110] hover:text-[#C5A880] transition-colors duration-300 text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-between group/btn"
                >
                  <span>Orçamento em {mat.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A88B63] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
