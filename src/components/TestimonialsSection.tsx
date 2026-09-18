import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Arq. Mariana Mendonça',
      role: 'Escritório de Arquitetura de Alto Padrão - Jardins, SP',
      text: 'Trabalho com a Stone Gran Lux há mais de 6 anos em projetos residenciais de altíssimo luxo. O acabamento das ilhas em 45º e a precisão do corte laser nas bancadas em Ilha Ônix Rosa são impecáveis.',
      rating: 5,
      project: 'Residência Condomínio Tamboré'
    },
    {
      name: 'Dr. Roberto Silveira',
      role: 'Cliente VIP Residencial - Alphaville',
      text: 'Contratei a Stone Gran Lux para fazer a cozinha inteira em Preto São Gabriel e a suíte máster em Verde Guatemala. Fiquei impressionado com a pontualidade e o cuidado da equipe de instalação.',
      rating: 5,
      project: 'Mansão Alphaville 1'
    },
    {
      name: 'Eng. Fernando Costa',
      role: 'Construtora Prime - Itaim Bibi',
      text: 'A consultoria técnica e a garantia de 10 anos trazem total segurança para nossos clientes mais exigentes. O resultado visual das pedras exóticas é espetacular.',
      rating: 5,
      project: 'Penthouse Faria Lima'
    },
  ];

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-[#0A0A0C] text-white border-t border-b border-[#D4AF37]/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header com Fundo Escuro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#F7E7AD] font-bold">
              DEPOIMENTOS & RECONHECIMENTO
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-white">
            A SATISFAÇÃO DOS PRINCIPAIS <br />
            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#C5A059]">
              ARQUITETOS E CLIENTES V.I.P.
            </span>
          </h2>

          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-xl mx-auto">
            A reputação da Stone Gran Lux é construída a cada detalhe lapidado e entregue com máxima pontualidade.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#121215] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 rounded-sm shadow-2xl flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/50 mb-4 group-hover:text-[#D4AF37] transition-colors" />

              <div className="space-y-4">
                {/* Estrelas */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 italic font-light leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="font-serif text-base font-bold text-white block">{t.name}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block mt-0.5">{t.role}</span>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#D4AF37]">
                  <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                  <span>{t.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
