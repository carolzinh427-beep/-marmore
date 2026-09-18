import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FloatingWhatsapp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-black/90 text-white text-xs px-4 py-3 shadow-2xl border border-[#D4AF37] rounded-sm backdrop-blur-md animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <div className="flex flex-col">
            <span className="font-bold text-[#F7E7AD]">Orçamento Online no WhatsApp</span>
            <span className="text-[10px] text-gray-300">Resposta em até 15 minutos</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white text-xs ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center rounded-full"
        aria-label="Falar pelo WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />
      </a>
    </div>
  );
};
