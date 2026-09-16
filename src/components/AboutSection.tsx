import React from 'react';
import { Award, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#FBF9F5] text-[#242320]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Fotografia com Quadro de Destaque */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] img-zoom-container shadow-2xl border border-[#EAE6DD] overflow-hidden">
              <img
                src={siteConfig.aboutImage}
                alt={`Oficina de Mármores e Granitos - ${siteConfig.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Badge de Tradição Flutuante */}
            <div className="absolute -bottom-8 -right-4 sm:right-6 bg-[#121110] text-white p-6 border border-[#C5A880]/40 shadow-2xl max-w-xs space-y-1">
              <p className="font-serif text-3xl font-light text-[#C5A880]">{siteConfig.yearsExperience} Anos</p>
              <p className="text-[11px] uppercase tracking-widest text-gray-300 font-light">
                De Experiência em {siteConfig.city}
              </p>
            </div>
          </div>

          {/* Lado Direito: Texto Institucional Editável */}
          <div className="lg:col-span-6 space-y-8 pt-6 lg:pt-0">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold block mb-3">
                Sobre a {siteConfig.name}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-[#121110]">
                {siteConfig.aboutTextHeading}
              </h2>
            </div>

            <div className="space-y-4 text-sm text-gray-600 font-light leading-relaxed">
              <p>{siteConfig.aboutTextParagraph1}</p>
              <p>{siteConfig.aboutTextParagraph2}</p>
            </div>

            {/* Ícones de Pilares */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#EAE6DD]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#A88B63] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-medium text-[#121110]">Garantia de Qualidade</h3>
                  <p className="text-xs text-gray-500 font-light">Chapas selecionadas sem trincas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#A88B63] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-medium text-[#121110]">Pontualidade Fiel</h3>
                  <p className="text-xs text-gray-500 font-light">Cronograma de entrega rigoroso</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#A88B63]" />
                {siteConfig.fullAddress}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
