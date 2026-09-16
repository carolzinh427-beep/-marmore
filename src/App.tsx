import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MaterialsSection } from './components/MaterialsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { AboutSection } from './components/AboutSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#242320] font-sans selection:bg-[#C5A880] selection:text-white">
      {/* Header Fixo / Transparente */}
      <Header />

      {/* Seção Hero Imersiva */}
      <Hero />

      {/* Seção Materiais */}
      <MaterialsSection />

      {/* Seção Soluções Arquitetônicas */}
      <SolutionsSection />

      {/* Portfólio Galeria Premium com Lightbox */}
      <PortfolioSection />

      {/* Processo de Trabalho em 5 Etapas */}
      <ProcessSection />

      {/* Diferenciais Editoriais */}
      <DifferentialsSection />

      {/* Seção Sobre Nós Institucional */}
      <AboutSection />

      {/* CTA Banner de Alta Conversão */}
      <CtaBanner />

      {/* Seção Contato & Formulário Inteligente */}
      <ContactSection />

      {/* Footer Minimalista */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsapp />
    </div>
  );
};

export default App;
