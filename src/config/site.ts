export interface MaterialItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Cozinhas' | 'Banheiros' | 'Gourmet' | 'Escadas' | 'Comerciais';
  environment: string;
  materialUsed: string;
  description: string;
  image: string;
  galleryImages?: string[];
  location?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  slogan: string;
  heroSubheading: string;
  city: string;
  state: string;
  phone: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  defaultWhatsappMessage: string;
  instagram: string;
  instagramUrl: string;
  address: string;
  fullAddress: string;
  googleMapsUrl: string;
  hours: string;
  yearsExperience: number;
  projectsCompleted: string;
  aboutTextHeading: string;
  aboutTextParagraph1: string;
  aboutTextParagraph2: string;
  aboutImage: string;
  heroImage: string;
  materials: MaterialItem[];
  solutions: SolutionItem[];
  portfolio: PortfolioProject[];
  processSteps: ProcessStep[];
  differentials: DifferentialItem[];
}

export const siteConfig: SiteConfig = {
  name: "MARMORELI",
  tagline: "Mármores, Granitos e Superfícies Especiais",
  slogan: "A PEDRA CERTA TRANSFORMA O AMBIENTE.",
  heroSubheading: "Projetos sob medida em pedras naturais e superfícies especiais, unindo precisão, acabamento e sofisticação.",
  city: "São Paulo",
  state: "SP",
  phone: "(11) 98765-4321",
  whatsappNumber: "5511987654321",
  whatsappFormatted: "(11) 98765-4321",
  defaultWhatsappMessage: "Olá! Gostaria de solicitar um orçamento sem compromisso para meu projeto com a Marmoreli.",
  instagram: "@marmoreli.oficial",
  instagramUrl: "https://instagram.com",
  address: "Av. das Nações Unidas, 12901 - Brooklin",
  fullAddress: "Av. das Nações Unidas, 12901 - Brooklin, São Paulo - SP",
  googleMapsUrl: "https://maps.google.com/?q=Av.+das+Na%C3%A7%C3%B5es+Unidas,+12901+-+Brooklin,+S%C3%A3o+Paulo+-+SP",
  hours: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
  yearsExperience: 18,
  projectsCompleted: "+1.800",
  aboutTextHeading: "EXPERIÊNCIA QUE SE VÊ NOS DETALHES.",
  aboutTextParagraph1: "Na MARMORELI, transformamos rochas naturais e superfícies tecnológicas em obras de arte arquitetônicas sob medida. Atendendo aos mais exigentes padrões da arquitetura contemporânea e do design de interiores, unimos rigor técnico a um acabamento impecável.",
  aboutTextParagraph2: "Nossa estrutura conta com tecnologia de ponta para medição a laser, corte CNC de precisão e uma equipe de mestres artesãos especializados. Cada peça é lapidada com paixão para elevar a estética, a funcionalidade e o valor de cada ambiente.",
  aboutImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  heroImage: "/images/hero_kitchen.jpg",
  
  materials: [
    {
      id: "marmore",
      name: "Mármore",
      subtitle: "Nobreza atemporal e veios exclusivos",
      description: "Pedra natural sofisticada de veios orgânicos expressivos. Indicada para lavabos de luxo, revestimentos internos, lareiras e áreas sociais.",
      image: "/images/material_marble.jpg",
      features: ["Veios únicos e irrepetíveis", "Toque aveludado e suave", "Sofisticação atemporal"]
    },
    {
      id: "granito",
      name: "Granito",
      subtitle: "Resistência extrema e versatilidade",
      description: "Rocha de alta dureza, resistente a impactos, riscos e elevadas temperaturas. Excelente para bancadas de cozinha e áreas de uso frequente.",
      image: "/images/material_granite.jpg",
      features: ["Alta resistência ao calor", "Baixíssima porosidade", "Durabilidade por gerações"]
    },
    {
      id: "quartzito",
      name: "Quartzito",
      subtitle: "A beleza do mármore com a força do granito",
      description: "Uma rocha natural exótica com padrões dramáticos, cristais translúcidos e durabilidade superior ao próprio granito.",
      image: "/images/material_quartzite.jpg",
      features: ["Permite iluminação cênica", "Resistente a manchas", "Visual de alta joalheria"]
    },
    {
      id: "quartzo",
      name: "Quartzo",
      subtitle: "Superfície tecnológica pura e uniforme",
      description: "Superfície engenheirada de quartzo natural. Oferece padrão estético homogêneo, zero porosidade e máxima higiene no manuseio de alimentos.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      features: ["Zero absorção de líquidos", "Cores sólidas e modernas", "Fácil limpeza diária"]
    },
    {
      id: "travertino",
      name: "Travertino",
      subtitle: "Textura acolhedora de tom terroso",
      description: "Mármore calcário de presença marcante e tom bege quente. Perfeito para fachadas contemporâneas, hall de entrada e banheiros estilo spa.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      features: ["Visual terroso e elegante", "Acabamento bruto ou estucado", "Estilo arquitetônico puro"]
    },
    {
      id: "onix",
      name: "Ônix",
      subtitle: "Rocha translúcida para iluminação cênica",
      description: "Pedra preciosa natural que permite a passagem de luz. O ápice do luxo para painéis decorativos, recepções e lavabos exclusivos.",
      image: "/images/material_onyx.jpg",
      features: ["Efeito translúcido espetacular", "Visual joia para iluminação", "Exclusividade máxima"]
    }
  ],

  solutions: [
    {
      id: "bancadas-cozinha",
      title: "Bancadas de cozinha",
      description: "Acabamento em 45º (meia-esquadria) perfeito, frontões imponentes e cubas embutidas com precisão milimétrica.",
      image: "/images/hero_kitchen.jpg"
    },
    {
      id: "ilhas-gourmet",
      title: "Ilhas gourmet",
      description: "Monólitos centrais com cascatas laterais que transformam a cozinha no ponto focal da residência.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "banheiros-lavabos",
      title: "Banheiros e lavabos",
      description: "Bancadas com cubas esculpidas na própria pedra, nichos organizadores e revestimentos contínuos.",
      image: "/images/solution_bathroom.jpg"
    },
    {
      id: "escadas",
      title: "Escadas",
      description: "Degraus maciços, flutuantes ou em ângulo com frisos antiderrapantes e canaletas para LED.",
      image: "/images/solution_staircase.jpg"
    },
    {
      id: "churrasqueiras",
      title: "Churrasqueiras",
      description: "Bancadas externas e revestimentos de alta resistência a temperatura e agentes de gordura.",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "lareiras",
      title: "Lareiras",
      description: "Revestimentos imponentes do piso ao teto em peças inteiras ou alinhamento em livro-aberto (bookmatched).",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "nichos",
      title: "Nichos",
      description: "Nichos embutidos com cantos bisotados perfeitos para otimizar espaço em áreas molhadas.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "revestimentos",
      title: "Revestimentos",
      description: "Painéis verticais de grande formato para halls de entrada, salas de estar e fachadas.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "projetos-personalizados",
      title: "Projetos personalizados",
      description: "Mobiliário em pedra natural, mesas de jantar, tampos sob medida e peças de design assinado.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  portfolio: [
    {
      id: "proj-1",
      title: "Ilha em Quartzito Nero Titanium",
      category: "Cozinhas",
      environment: "Cozinha Integrada Gourmet",
      materialUsed: "Quartzito Nero Titanium",
      description: "Cozinha contemporânea em conceito aberto com ilha central monolítica e cascata dupla em 45º.",
      image: "/images/hero_kitchen.jpg",
      location: "Jardins, SP"
    },
    {
      id: "proj-2",
      title: "Lavabo Esculpido em Calacatta",
      category: "Banheiros",
      environment: "Lavabo Social de Luxo",
      materialUsed: "Mármore Calacatta Gold",
      description: "Bancada suspensa com cuba esculpida integrada no próprio mármore e espelho com LED periférico.",
      image: "/images/solution_bathroom.jpg",
      location: "Alphaville, Barueri"
    },
    {
      id: "proj-3",
      title: "Escada Flutuante Monolítica",
      category: "Escadas",
      environment: "Hall de Entrada Residencial",
      materialUsed: "Quartzito Mont Blanc",
      description: "Degraus engastados em estrutura metálica revestidos com borda reta de 4cm e canaleta inferior para iluminação.",
      image: "/images/solution_staircase.jpg",
      location: "Morumbi, SP"
    },
    {
      id: "proj-4",
      title: "Painel Retroiluminado de Ônix",
      category: "Comerciais",
      environment: "Recepção Executiva",
      materialUsed: "Ônix Amber Translucido",
      description: "Painel de recepção corporativo com retroiluminação LED de temperatura 3000K realçando veios naturais.",
      image: "/images/material_onyx.jpg",
      location: "Faria Lima, SP"
    },
    {
      id: "proj-5",
      title: "Espaço Gourmet Black Absolute",
      category: "Gourmet",
      environment: "Varanda Gourmet de Cobertura",
      materialUsed: "Granito Preto São Gabriel Escovado",
      description: "Bancada em L com acabamento escovado anti-manchas, cooktop de indução nivelado e churrasqueira integrada.",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
      location: "Itaim Bibi, SP"
    },
    {
      id: "proj-6",
      title: "Lareira Monumental Livro Aberto",
      category: "Comerciais",
      environment: "Living com Pé Direito Duplo",
      materialUsed: "Quartzito Michelangelo",
      description: "Revestimento vertical de 6 metros de altura com paginação espelhada estilo livro-aberto (bookmatched).",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      location: "Alto de Pinheiros, SP"
    },
    {
      id: "proj-7",
      title: "Suíte Master em Travertino Navona",
      category: "Banheiros",
      environment: "Banheiro de Casal",
      materialUsed: "Mármore Travertino Navona Estucado",
      description: "Piso, paredes e bancada dupla revestidos em travertino levigado para atmosfera relaxante de spa.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      location: "Vila Nova Conceição, SP"
    },
    {
      id: "proj-8",
      title: "Cozinha Minimalista Branco Puríssimo",
      category: "Cozinhas",
      environment: "Cozinha Residencial Modernista",
      materialUsed: "Superfície de Quartzo Pure White",
      description: "Bancadas contínuas sem emendas visíveis com frontão alto de 30cm e cuba em aço inox escovado.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      location: "Pardinho, SP"
    }
  ],

  processSteps: [
    {
      number: "01",
      title: "ESCOLHA DO MATERIAL",
      description: "Consultoria técnica individualizada na nossa galeria ou no seu projeto para selecionar a rocha ideal em estética e resistência."
    },
    {
      number: "02",
      title: "MEDIÇÃO",
      description: "Visita técnica ao local com scanner 3D a laser para captura milimétrica dos ângulos, prumos e pontos de instalação."
    },
    {
      number: "03",
      title: "PROJETO E CORTE",
      description: "Desenvolvimento do plano de corte digital em ambiente CAD/CAM e execução por máquinas CNC de jato d'água."
    },
    {
      number: "04",
      title: "ACABAMENTO",
      description: "Lapidação artesanal de meias-esquadrias (45º), montagem de cubas esculpidas e selagem de impermeabilização."
    },
    {
      number: "05",
      title: "INSTALAÇÃO",
      description: "Entrega programada e fixação por equipe técnica própria com alinhamento a laser e proteção final da obra."
    }
  ],

  differentials: [
    {
      title: "Atendimento personalizado",
      description: "Consultores especializados acompanham seu projeto desde a escolha do bloco até a entrega final."
    },
    {
      title: "Produção sob medida",
      description: "Cortes e encaixes desenvolvidos especificamente para a arquitetura única do seu imóvel."
    },
    {
      title: "Materiais selecionados",
      description: "Parceria direta com os maiores importadores e pedreiras do Brasil, Itália, Grécia e Espanha."
    },
    {
      title: "Acabamento profissional",
      description: "Junções em 45º quase invisíveis, polimento homogêneo e aplicação preventiva de impermeabilizante."
    },
    {
      title: "Instalação especializada",
      description: "Equipe técnica treinada e uniformizada com ferramental de precisão e protocolo de obra limpa."
    },
    {
      title: "Compromisso com cada projeto",
      description: "Cumprimento rigoroso do cronograma combinado e suporte completo pós-instalação."
    }
  ]
};
