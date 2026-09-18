import React, { useState } from 'react';
import { Calculator, MessageCircle, Sparkles, Check, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const BudgetCalculator: React.FC = () => {
  const [selectedStone, setSelectedStone] = useState<string>('Ilha Ônix Rosa');
  const [application, setApplication] = useState<string>('Bancada / Ilha de Cozinha');
  const [area, setArea] = useState<number>(4);
  const [finish, setFinish] = useState<string>('Meia-Esquadria 45º (Visual Monolítico)');
  const [includeSink, setIncludeSink] = useState<boolean>(true);

  const stonesList = [
    { name: 'Ilha Ônix Rosa', multiplier: 1.8, badge: 'Translúcido Raro' },
    { name: 'Ilha Ônix Branco', multiplier: 1.7, badge: 'Translúcido Cênico' },
    { name: 'Granitos Exóticos Luxo', multiplier: 1.6, badge: 'Coleção Exclusiva' },
    { name: 'Verde Guatemala', multiplier: 1.5, badge: 'Mármore Esmeralda' },
    { name: 'Preto São Gabriel', multiplier: 1.0, badge: 'Mais Vendido' },
    { name: 'Branco Pitaya', multiplier: 1.1, badge: 'Tendência Modernista' },
    { name: 'Cinza Kensho', multiplier: 1.2, badge: 'Quartzito Arquitetônico' },
    { name: 'Bege Bahia', multiplier: 1.1, badge: 'Mármore Clássico' },
    { name: 'Branco Estela', multiplier: 1.3, badge: 'Quartzito Cintilante' },
    { name: 'Branco Zeus', multiplier: 1.4, badge: 'Quartzito Prime' },
  ];

  const applicationsList = [
    'Bancada / Ilha de Cozinha',
    'Banheiro com Cuba Esculpida',
    'Painel Retroiluminado de Ônix',
    'Escada Monolítica',
    'Lareira / Revestimento de Parede',
  ];

  const finishesList = [
    'Meia-Esquadria 45º (Visual Monolítico)',
    'Bisotado Nobre',
    'Reto Lapidado',
  ];

  const generateWhatsappMessage = () => {
    const message = `Olá Stone Gran Lux! Utilizei o Simulador de Orçamento no site:
📌 *Pedra:* ${selectedStone}
📌 *Aplicação:* ${application}
📐 *Área Estimada:* ${area} m²
💎 *Acabamento:* ${finish}
✨ *Cuba Esculpida Integrada:* ${includeSink ? 'Sim' : 'Não'}

Gostaria de agendar a medição a laser e confirmar os valores finais.`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="simulador" className="py-24 md:py-32 bg-[#0A0A0C] text-white relative overflow-hidden border-t border-[#D4AF37]/30">
      
      {/* Background Lighting Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F7E7AD] font-semibold">
              SIMULADOR DE ORÇAMENTO INSTANTÂNEO
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight">
            MONTE SEU PROJETO <br />
            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#C5A059]">
              EM APENAS 3 PASSOS
            </span>
          </h2>

          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Selecione a pedra, a aplicação e a metragem para gerar uma estimativa personalizada e enviar direto para nossa equipe técnica via WhatsApp.
          </p>
        </div>

        {/* Form Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Side */}
          <div className="lg:col-span-8 bg-[#121215] border border-[#D4AF37]/40 p-6 sm:p-10 shadow-2xl space-y-8 rounded-sm">
            
            {/* Step 1: Select Stone */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold flex items-center justify-center">1</span>
                Selecione a Pedra Desejada:
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {stonesList.map((stone) => (
                  <button
                    key={stone.name}
                    type="button"
                    onClick={() => setSelectedStone(stone.name)}
                    className={`p-3 text-left border transition-all duration-300 rounded-xs relative flex flex-col justify-between ${
                      selectedStone === stone.name
                        ? 'bg-gradient-to-r from-[#1A1A20] to-[#252530] border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-black/40 border-white/10 text-gray-400 hover:border-[#D4AF37]/50 hover:text-white'
                    }`}
                  >
                    <span className="font-serif text-xs font-semibold block leading-tight">{stone.name}</span>
                    <span className="text-[9px] text-[#D4AF37] uppercase tracking-wider block mt-1">{stone.badge}</span>
                    {selectedStone === stone.name && (
                      <span className="absolute top-2 right-2 text-[#D4AF37]">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Application */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold flex items-center justify-center">2</span>
                Tipo de Aplicação:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {applicationsList.map((app) => (
                  <button
                    key={app}
                    type="button"
                    onClick={() => setApplication(app)}
                    className={`p-3 text-left border text-xs font-medium transition-all ${
                      application === app
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                        : 'bg-black/40 border-white/10 text-gray-300 hover:border-white/30'
                    }`}
                  >
                    {app}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Area & Finish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {/* Metragem m² */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-2">
                  Metragem Aproximada: <span className="text-white font-bold">{area} m²</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={area}
                  onChange={(e) => setArea(parseFloat(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-black cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>1 m²</span>
                  <span>15 m²</span>
                  <span>30 m²</span>
                </div>
              </div>

              {/* Acabamento da Borda */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-2">
                  Acabamento da Borda:
                </label>
                <select
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full p-2.5 bg-black border border-white/20 text-xs text-white focus:border-[#D4AF37] outline-none"
                >
                  {finishesList.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cuba Esculpida Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="sink"
                checked={includeSink}
                onChange={(e) => setIncludeSink(e.target.checked)}
                className="w-4 h-4 accent-[#D4AF37] cursor-pointer"
              />
              <label htmlFor="sink" className="text-xs text-gray-300 cursor-pointer">
                Incluir Cuba Esculpida Integrada no Próprio Material (Ralo Oculto)
              </label>
            </div>

          </div>

          {/* Summary Live Card Side */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#18181F] to-[#0E0E12] border-2 border-[#D4AF37] p-6 sm:p-8 shadow-2xl relative rounded-sm flex flex-col justify-between h-full space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-3">
                <span className="font-serif text-xl font-bold text-white">Resumo da Simulação</span>
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Pedra Escolhida:</span>
                  <span className="font-bold text-[#F7E7AD]">{selectedStone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Aplicação:</span>
                  <span className="font-medium text-white">{application}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Área Estimada:</span>
                  <span className="font-bold text-white">{area} m²</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Acabamento:</span>
                  <span className="font-medium text-white truncate max-w-[160px]">{finish}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Cuba Esculpida:</span>
                  <span className="font-bold text-[#D4AF37]">{includeSink ? 'Inclusa' : 'Não'}</span>
                </div>
              </div>

              <div className="bg-black/60 p-4 border border-[#D4AF37]/40 text-center space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Condição Exclusiva Stone Gran Lux</span>
                <p className="font-serif text-lg font-bold text-[#D4AF37]">
                  Atendimento VIP + Medição 3D Grátis
                </p>
                <span className="text-[9px] text-gray-400 block">Orçamento sem compromisso em até 15 minutos</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={generateWhatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-to-r from-[#F7E7AD] via-[#D4AF37] to-[#AA822A] hover:from-[#FFF0BF] hover:to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 fill-black text-black" />
              <span>Enviar Simulação no WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
