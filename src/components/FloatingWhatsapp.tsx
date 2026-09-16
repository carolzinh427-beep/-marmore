import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FloatingWhatsapp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Popup */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-[#121110] text-white text-xs px-4 py-2.5 shadow-2xl border border-[#C5A880]/40 transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-light">Fale com nossa equipe no WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-4 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center rounded-full"
        aria-label="Falar pelo WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />
      </a>
    </div>
  );
};
