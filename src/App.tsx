import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DifferentialsSection } from './components/DifferentialsSection';
import { MaterialsSection } from './components/MaterialsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { BudgetCalculator } from './components/BudgetCalculator';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Header Fixo Transparente / Dark Glass */}
      <Header />

      {/* 0. Hero Section: FUNDO PRETO (Mármore Nero com Veios Dourados + Logo Stone Gran Lux) */}
      <Hero />

      {/* 1. Diferenciais de Marca: FUNDO BRANCO */}
      <DifferentialsSection />

      {/* 2. Catálogo Premium das 10 Pedras Solicitadas: FUNDO PRETO */}
      <MaterialsSection />

      {/* 3. Soluções Arquitetônicas & Aplicações: FUNDO BRANCO */}
      <SolutionsSection />

      {/* 4. Simulador de Orçamento Instantâneo: FUNDO PRETO */}
      <BudgetCalculator />

      {/* 5. Galeria de Portfólio VIP: FUNDO BRANCO */}
      <PortfolioSection />

      {/* 6. Processo de Trabalho em 4 Etapas: FUNDO PRETO */}
      <ProcessSection />

      {/* 7. Institucional & Showroom: FUNDO BRANCO */}
      <AboutSection />

      {/* 8. Perguntas Frequentes (FAQ): FUNDO PRETO */}
      <FaqSection />

      {/* 9. Depoimentos de Arquitetos & Clientes VIP: FUNDO BRANCO */}
      <TestimonialsSection />

      {/* 10. Formulário de Contato & Mapa Showroom: FUNDO PRETO */}
      <ContactSection />

      {/* 11. Call-to-Action Banner Final: FUNDO PRETO */}
      <CtaBanner />

      {/* 12. Footer Minimalista de Luxo: FUNDO PRETO */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsapp />
    </div>
  );
};

export default App;
