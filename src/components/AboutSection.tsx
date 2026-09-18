import React from 'react';
import { ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#0A0A0C] text-white border-t border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Fotografia de Mármore & Oficina */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] img-zoom-container shadow-2xl border border-[#D4AF37]/40 overflow-hidden rounded-sm">
              <img
                src="/images/hero_black_gold_marble.jpg"
                alt={`Marmoraria Stone Gran Lux`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Badge de Tradição Flutuante */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#121215] text-white p-6 border-2 border-[#D4AF37] shadow-2xl max-w-xs space-y-1 rounded-sm">
              <p className="font-serif text-3xl font-bold text-[#D4AF37]">{siteConfig.yearsExperience}+ Anos</p>
              <p className="text-[11px] uppercase tracking-widest text-gray-300 font-medium">
                De Tradição em {siteConfig.city}
              </p>
            </div>
          </div>

          {/* Lado Direito: Texto Institucional */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F7E7AD] font-semibold">
                INSTITUCIONAL STONE GRAN LUX
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-white">
              TRADIÇÃO EM ROCHAS NOBRES <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#C5A059]">
                E TECNOLOGIA DE USINAGEM LASER
              </span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                A <strong className="text-white font-semibold">Stone Gran Lux</strong> é referência no mercado de pedras ornamentais e superfícies exóticas de altíssimo padrão. Atendemos aos mais conceituados escritórios de arquitetura e clientes finais exigentes em São Paulo e em todo o Brasil.
              </p>
              <p>
                Nosso pátio conta com escaneamento 3D de prumos e corte CNC a laser robotizado, o que possibilita junções de 45º absolutamente perfeitas, cubas esculpidas com ralo oculto e a montagem de painéis de Ilha Ônix Rosa e Ônix Branco com retroiluminação LED cênica.
              </p>
            </div>

            {/* Ícones de Pilares */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-white">Garantia de 10 Anos</h3>
                  <p className="text-xs text-gray-400 font-light">Selagem impermeabilizante inclusa</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-white">Entrega no Prazo</h3>
                  <p className="text-xs text-gray-400 font-light">Cronograma rigoroso de obra</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 text-xs text-gray-300">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                {siteConfig.fullAddress}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
