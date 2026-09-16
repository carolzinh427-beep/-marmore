import React, { useState } from 'react';
import { MessageCircle, Instagram, MapPin, Clock, Phone, Send, Check } from 'lucide-react';
import { siteConfig } from '../config/site';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    material: 'Mármore',
    solution: 'Bancadas de cozinha',
    message: ''
  });

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Olá! Meu nome é *${formData.name || 'Cliente'}* (${formData.phone || 'Sem telefone'}).\n` +
      `Tenho interesse em: *${formData.solution}* no material *${formData.material}*.\n` +
      (formData.message ? `Observações: ${formData.message}` : '')
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsappUrl(), '_blank');
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-[#FBF9F5] text-[#242320]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold block mb-3">
            Atendimento Direto
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight tracking-tight text-[#121110]">
            CONTATO E <br />
            <span className="font-normal italic text-[#A88B63]">ORÇAMENTOS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Lado Esquerdo: Cards de Informações de Contato */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white border border-[#EAE6DD] p-8 space-y-6 shadow-sm">
              <h3 className="font-serif text-2xl font-light text-[#121110]">Informações de Atendimento</h3>
              
              <div className="space-y-5">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[#F4F0E8] hover:bg-[#121110] text-[#121110] hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-[#A88B63] group-hover:text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A88B63] block font-semibold">WhatsApp Direto</span>
                    <span className="font-serif text-lg">{siteConfig.whatsappFormatted}</span>
                  </div>
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border border-[#EAE6DD] hover:border-[#C5A880] transition-colors"
                >
                  <Instagram className="w-5 h-5 text-[#A88B63] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 block">Instagram Oficial</span>
                    <span className="font-medium text-sm text-[#121110]">{siteConfig.instagram}</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 border border-[#EAE6DD]">
                  <MapPin className="w-5 h-5 text-[#A88B63] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 block">Endereço do Showroom</span>
                    <span className="font-medium text-sm text-[#121110] block">{siteConfig.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border border-[#EAE6DD]">
                  <Clock className="w-5 h-5 text-[#A88B63] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 block">Horário de Funcionamento</span>
                    <span className="font-medium text-xs text-gray-700 block">{siteConfig.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="bg-white border border-[#EAE6DD] p-2 aspect-[16/9] shadow-sm overflow-hidden">
              <iframe
                title="Mapa de Localização Marmoreli"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.340058284547!2d-46.69766942377317!3d-23.60999556402434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50c8227b9df3%3A0x6a053c834e9e03d0!2sAv.%20das%20Na%C3%A7%C3%B5es%20Unidas%2C%2012901%20-%20Brooklin%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

          </div>

          {/* Lado Direito: Formulário Pré-Orçamento Inteligente */}
          <div className="lg:col-span-7 bg-white border border-[#EAE6DD] p-8 md:p-10 shadow-xl space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-light text-[#121110]">Simulador de Orçamento Rápido</h3>
              <p className="text-xs text-gray-500 font-light mt-1">
                Preencha os dados abaixo para gerar a mensagem automatizada diretamente para nosso WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-700 font-medium">Seu Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#EAE6DD] focus:border-[#C5A880] focus:outline-none text-sm font-light text-[#121110]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-700 font-medium">Seu WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (11) 99999-8888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#EAE6DD] focus:border-[#C5A880] focus:outline-none text-sm font-light text-[#121110]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-700 font-medium">Material Preferido</label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#EAE6DD] focus:border-[#C5A880] focus:outline-none text-sm font-light text-[#121110]"
                  >
                    {siteConfig.materials.map((m) => (
                      <option key={m.id} value={m.name}>{m.name}</option>
                    ))}
                    <option value="Ainda preciso de orientação">Ainda preciso de orientação</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-700 font-medium">Aplicação / Solução</label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#EAE6DD] focus:border-[#C5A880] focus:outline-none text-sm font-light text-[#121110]"
                  >
                    {siteConfig.solutions.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-700 font-medium">Detalhes do Projeto ou Medidas (Opcional)</label>
                <textarea
                  rows={4}
                  placeholder="Ex: Gostaria de orçar uma ilha de cozinha de 2,40m x 1,10m com cuba esculpida..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#EAE6DD] focus:border-[#C5A880] focus:outline-none text-sm font-light text-[#121110]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#121110] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#121110] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Enviar para o WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
