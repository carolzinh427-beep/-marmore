import React from 'react';
import { X, MessageCircle, MapPin, Layers, Sparkles } from 'lucide-react';
import { PortfolioProject, siteConfig } from '../config/site';

interface LightboxModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getWhatsappProjectUrl = () => {
    const text = encodeURIComponent(
      `Olá, Marmoreli! Gostaria de consultar um orçamento inspirado no projeto *${project.title}* (${project.materialUsed} - ${project.environment}).`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Box */}
      <div className="relative z-10 bg-[#121110] border border-white/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 bg-black/60 hover:bg-[#C5A880] text-white hover:text-[#121110] transition-colors border border-white/20"
          aria-label="Fechar galeria"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Large Image */}
        <div className="lg:w-3/5 bg-black flex items-center justify-center min-h-[350px] lg:min-h-[550px] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover max-h-[70vh] lg:max-h-[85vh]"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[11px] uppercase tracking-widest text-[#C5A880]">
            {project.category}
          </div>
        </div>

        {/* Right Side: Project Details & CTA */}
        <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-between space-y-6 text-white bg-[#121110]">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
                {project.environment}
              </span>
              <h3 className="font-serif text-3xl font-light leading-tight text-white">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-gray-300 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Specifications Cards */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <Layers className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Material Aplicado</span>
                  <span className="font-medium text-white">{project.materialUsed}</span>
                </div>
              </div>

              {project.location && (
                <div className="flex items-start gap-3 text-xs text-gray-300">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Localização</span>
                    <span className="font-medium text-white">{project.location}</span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3 text-xs text-gray-300">
                <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Acabamento</span>
                  <span className="font-medium text-white">Meia-esquadria 45º & Lapidação artesanal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-white/10">
            <a
              href={getWhatsappProjectUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#C5A880] hover:bg-[#A88B63] text-[#121110] font-semibold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-3 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-[#121110]" />
              <span>Orçamento Deste Projeto</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
