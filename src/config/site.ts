export interface MaterialItem {
  id: string;
  name: string;
  category: 'onix' | 'exoticos' | 'quartzitos' | 'marmores' | 'granitos';
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  specs: {
    origin: string;
    finish: string;
    thickness: string;
    rarity: 'Coleção Exclusiva' | 'Translúcido' | 'Tendência' | 'Clássico Nobre' | 'Super Raro';
    estimatedPrice: string;
  };
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Cozinhas' | 'Banheiros' | 'Gourmet' | 'Escadas' | 'Painéis & Ônix' | 'Comerciais';
  environment: string;
  materialUsed: string;
  description: string;
  image: string;
  location?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface DifferentialItem {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
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
  warrantyYears: number;
  heroImage: string;
  materials: MaterialItem[];
  solutions: SolutionItem[];
  portfolio: PortfolioProject[];
  processSteps: ProcessStep[];
  differentials: DifferentialItem[];
  faqs: FaqItem[];
}

export const siteConfig: SiteConfig = {
  name: "STONE GRAN LUX",
  tagline: "Marmoraria de Luxo • Pedras Exóticas, Quartzitos & Ônix Translúcidos",
  slogan: "ELEGÂNCIA ESCULPIDA EM PEDRA NATURAL",
  heroSubheading: "Transformamos rochas nobres e superfícies exóticas importadas das melhores pedreiras do mundo em obras de arte sob medida com corte CNC a laser e precisão milimétrica.",
  city: "São Paulo",
  state: "SP",
  phone: "(11) 99876-5432",
  whatsappNumber: "5511998765432",
  whatsappFormatted: "(11) 99876-5432",
  defaultWhatsappMessage: "Olá Stone Gran Lux! Gostaria de solicitar um orçamento exclusivo sem compromisso para meu projeto em pedra nobre.",
  instagram: "@stonegranlux",
  instagramUrl: "https://instagram.com",
  address: "Av. Europa, 1420 - Jardins",
  fullAddress: "Av. Europa, 1420 - Jardins, São Paulo - SP",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Europa,+1420+-+Jardins,+S%C3%A3o+Paulo+-+SP",
  hours: "Segunda a Sexta: 08:00 às 19:00 | Sábado: 08:00 às 14:00",
  yearsExperience: 16,
  projectsCompleted: "+2.400",
  warrantyYears: 10,
  heroImage: "/images/hero_black_gold_marble.jpg",
  
  materials: [
    {
      id: "ilha-onix-rosa",
      name: "Ilha Ônix Rosa",
      category: "onix",
      subtitle: "Translúcido Cênico & Rosa Quartz Nobre",
      description: "Uma das pedras mais raras e desejadas da alta arquitetura. Possui transparência cristalina em tons suavemente rosados e veios dourados. Perfeito para ilhas centrais retroiluminadas por LED.",
      image: "/images/onix_rosa.jpg",
      features: [
        "Permite retroiluminação LED cênica",
        "Padrão único de rosa quartz e veios áureos",
        "Máximo status em lavabos e ilhas gourmet"
      ],
      specs: {
        origin: "Pérsia / Exótico Importado",
        finish: "Polido Translúcido",
        thickness: "2.0 cm",
        rarity: "Translúcido",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "ilha-onix-branco",
      name: "Ilha Ônix Branco",
      category: "onix",
      subtitle: "Pureza Cristalina Translúcida com Veios Amber",
      description: "Superfície de iluminação impressionante. A luz atravessa a rocha natural revelando intrincados veios ambarados e dourados. O ápice do luxo para banheiros master e balcões executivos.",
      image: "/images/onix_branco.jpg",
      features: [
        "Transparência óptica excepcional",
        "Brilho vítreo de alta joalheria",
        "Ideal para painéis e balcões de destaque"
      ],
      specs: {
        origin: "Itália / Exótico Importado",
        finish: "Polido Cristalo",
        thickness: "2.0 cm",
        rarity: "Translúcido",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "granitos-exoticos-luxo",
      name: "Granitos Exóticos Luxo",
      category: "exoticos",
      subtitle: "Fusion Wow, Titanium Gold & Blue Patagonia",
      description: "Coleção de blocos selecionados à mão com composições minerais inacreditáveis. Misturas dramáticas de azuis profundos, veios de ouro e espirais negras que parecem pinturas vivas.",
      image: "/images/material_onyx.jpg",
      features: [
        "Padrão orgânico exclusivo e irrepetível",
        "Dureza extrema e altíssima resistência",
        "Disponível em acabamentos Polido ou Escovado"
      ],
      specs: {
        origin: "Brasil / Itália / Madagáscar",
        finish: "Polido Luxo / Velvet",
        thickness: "2.0 cm - 3.0 cm",
        rarity: "Coleção Exclusiva",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "preto-sao-gabriel",
      name: "Preto São Gabriel",
      category: "granitos",
      subtitle: "Clássico Intenso com Grãos Cristalinos Escuros",
      description: "Fundo preto denso e homogêneo com delicadas salpicos cristalinas. Considerado um dos granitos negros mais elegantes e duráveis do mercado para bancadas de alto tráfego.",
      image: "/images/hero_black_gold_marble.jpg",
      features: [
        "Resistência máxima a riscos e temperaturas",
        "Porosidade nula com selagem de alta performance",
        "Combina perfeitamente com metais dourados e pretos"
      ],
      specs: {
        origin: "Espírito Santo, Brasil",
        finish: "Polido / Escovado / Levigado",
        thickness: "2.0 cm",
        rarity: "Clássico Nobre",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "branco-pitaya",
      name: "Branco Pitaya",
      category: "quartzitos",
      subtitle: "Fundo Alvo Puríssimo com Pontilhados Mineral escuros",
      description: "Superfície contemporânea com estética vibrante inspirada no contraste da fruta pitaya. Traz amplitude imediata e luz para cozinhas gourmets e banheiros modernos.",
      image: "/images/material_quartzite.jpg",
      features: [
        "Elevado contraste de branco puríssimo e grãos escuros",
        "Sensação de ambiente mais amplo e luminoso",
        "Muito resistente a manchas de líquidos"
      ],
      specs: {
        origin: "Brasil Selecionado",
        finish: "Polido Super Brilho",
        thickness: "2.0 cm",
        rarity: "Tendência",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "cinza-kensho",
      name: "Cinza Kensho",
      category: "quartzitos",
      subtitle: "Sobriedade Mineral & Textura Arquitetônica",
      description: "Quartzito minimalista em tom cinza titânio com veios alinhados sutis. A escolha número um de arquitetos contemporâneos para ambientes urbanos sofisticados.",
      image: "/images/material_granite.jpg",
      features: [
        "Tonalidade neutra de altíssima elegância",
        "Resistência mecânica superior ao próprio granito",
        "Toque suave e acabamento fosco ou brilhante"
      ],
      specs: {
        origin: "Minas Gerais, Brasil",
        finish: "Levigado Satine / Polido",
        thickness: "2.0 cm",
        rarity: "Tendência",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "bege-bahia",
      name: "Bege Bahia",
      category: "marmores",
      subtitle: "Mármore Natural Clássico de Tom Terroso Acolhedor",
      description: "Rocha calcária de renome internacional com textura aveludada e tonalidade bege cremosa. Traz aconchego atemporal a pisos, escadas, banheiros e painéis residenciais.",
      image: "/images/solution_staircase.jpg",
      features: [
        "Sensação térmica e tátil extremamente agradável",
        "Beleza orgânica com variações suaves de tom",
        "Excelente para ambientes internos requintados"
      ],
      specs: {
        origin: "Bahia, Brasil",
        finish: "Estucado Polido / Bruto",
        thickness: "2.0 cm",
        rarity: "Clássico Nobre",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "branco-estela",
      name: "Branco Estela",
      category: "quartzitos",
      subtitle: "Brilho Estelar Mineral com Veios Prateados",
      description: "Superfície puríssima salpicada de cristais que refletem a iluminação como pequenas estrelas. Traz brilho discreto e luxuoso para tampos sob medida.",
      image: "/images/material_quartzite.jpg",
      features: [
        "Efeito cintilante sob iluminação focada",
        "Zero absorção e facilidade de limpeza",
        "Ideal para banheiros de suítes e recepções"
      ],
      specs: {
        origin: "Ceará, Brasil",
        finish: "Polido Espelhado",
        thickness: "2.0 cm",
        rarity: "Super Raro",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "branco-zeus",
      name: "Branco Zeus",
      category: "quartzitos",
      subtitle: "Quartzito de Pureza Divina & Estética Minimalista",
      description: "Branco maciço impecável com densidade mineral surpreendente. Oferece o visual clean do mármore grego com a invulnerabilidade dos quartzitos nobres.",
      image: "/images/material_marble.jpg",
      features: [
        "Branco homogêneo e cristalino",
        "Ultra resistente a ácidos e manchas domésticas",
        "Perfeito para cubas esculpidas em 45º"
      ],
      specs: {
        origin: "Brasil Exclusivo",
        finish: "Polido Luxo",
        thickness: "2.0 cm",
        rarity: "Coleção Exclusiva",
        estimatedPrice: "Consulte m²"
      }
    },
    {
      id: "verde-guatemala",
      name: "Verde Guatemala",
      category: "marmores",
      subtitle: "Mármore Nobre Verde Esmeralda com Veios Alvos",
      description: "Um dos mármores mais dramáticos da história da arquitetura. Fundo verde floresta profundo recortado por teias de veios brancos reluzentes.",
      image: "/images/verde_guatemala.jpg",
      features: [
        "Verde esmeralda intenso e marcante",
        "Peças únicas para lavabos VIP e lareiras monumentais",
        "Sensação imediata de sofisticação internacional"
      ],
      specs: {
        origin: "Guatemala / Importação Direta",
        finish: "Polido Espelhado",
        thickness: "2.0 cm",
        rarity: "Super Raro",
        estimatedPrice: "Consulte m²"
      }
    }
  ],

  solutions: [
    {
      id: "bancadas-gourmet",
      title: "Bancadas & Ilhas Cozinha",
      subtitle: "Monólitos com Meia-Esquadria 45º Perfeita",
      description: "Ilhas centrais com cantos invisíveis em 45º, cascatas laterais e cubas totalmente integradas no mesmo material.",
      image: "/images/hero_kitchen.jpg",
      highlights: ["Corte CNC milimétrico", "Cubas esculpidas no material", "Junções em 45º imperceptíveis"]
    },
    {
      id: "banheiros-lavabos",
      title: "Banheiros & Lavabos Esculpted",
      subtitle: "Cubas Esculpidas & Painéis Contínuos",
      description: "Bancadas suspensas com cubas ocultas de ralo invisível, nichos embutidos e revestimentos que transformam o banheiro em spa.",
      image: "/images/solution_bathroom.jpg",
      highlights: ["Ralo oculto esculpido", "Nichos sem emendas visíveis", "Impermeabilização selada"]
    },
    {
      id: "paineis-retroiluminados",
      title: "Painéis de Ônix Retroiluminados",
      subtitle: "Cenografia de Luz em Ônix & Quartzitos",
      description: "Instalações verticais com sistemas de iluminação LED de alta definição que transpassam as veias e cristais da pedra natural.",
      image: "/images/onix_rosa.jpg",
      highlights: ["Tecnologia LED 3000K", "Estrutura oculta sob medida", "Exclusividade total"]
    },
    {
      id: "escadas-imponentes",
      title: "Escadas Monolíticas",
      subtitle: "Degraus Flutuantes & Iluminação Integrada",
      description: "Escadas monumentais com acabamento bisotado, frisos antiderrapantes discretos e canaletas para fitas de LED.",
      image: "/images/solution_staircase.jpg",
      highlights: ["Estrutura flutuante", "Friso antiderrapante a laser", "LED embutido no piso"]
    }
  ],

  portfolio: [
    {
      id: "proj-1",
      title: "Ilha Monolítica em Ilha Ônix Rosa",
      category: "Painéis & Ônix",
      environment: "Cozinha Integrada Gourmet",
      materialUsed: "Ilha Ônix Rosa Translúcido",
      description: "Ilha central com iluminação cênica interna e acabamentos em latão dourado escovado.",
      image: "/images/onix_rosa.jpg",
      location: "Jardins, SP"
    },
    {
      id: "proj-2",
      title: "Lavabo VIP em Verde Guatemala",
      category: "Banheiros",
      environment: "Lavabo Social Residencial",
      materialUsed: "Mármore Verde Guatemala",
      description: "Bancada suspensa com cuba esculpida e parede inteira revestida em página única.",
      image: "/images/verde_guatemala.jpg",
      location: "Alphaville, SP"
    },
    {
      id: "proj-3",
      title: "Cozinha Gourmet Preto São Gabriel Escovado",
      category: "Cozinhas",
      environment: "Espaço Gourmet Integrado",
      materialUsed: "Granito Preto São Gabriel",
      description: "Bancada contínua com cascata lateral e calha úmida embutida.",
      image: "/images/hero_black_gold_marble.jpg",
      location: "Itaim Bibi, SP"
    },
    {
      id: "proj-4",
      title: "Painel de Recepção em Ilha Ônix Branco",
      category: "Painéis & Ônix",
      environment: "Hall de Entrada Corporativo",
      materialUsed: "Ilha Ônix Branco Translúcido",
      description: "Painel de 4 metros retroiluminado realçando os veios em tom ambarado.",
      image: "/images/onix_branco.jpg",
      location: "Faria Lima, SP"
    }
  ],

  processSteps: [
    {
      number: "01",
      title: "CONSULTORIA EXCLUSIVA",
      subtitle: "Seleção do Bloco de Pedra",
      description: "Atendimento personalizado onde apresentamos amostras físicas e auxiliamos na escolha da rocha perfeita para o estilo e exigência do seu projeto."
    },
    {
      number: "02",
      title: "MEDIÇÃO 3D A LASER",
      subtitle: "Precisão Milimétrica na Obra",
      description: "Nossos engenheiros realizam o escaneamento digital do ambiente, eliminando riscos de desquadro e garantindo o encaixe exato."
    },
    {
      number: "03",
      title: "CORTE CNC DE ALTA PRECISÃO",
      subtitle: "Lapidação & 45º Perfeito",
      description: "Corte robotizado com jato d'água de altíssima precisão, promovendo junções de 45º imperceptíveis e cubas esculpidas perfeitas."
    },
    {
      number: "04",
      title: "INSTALAÇÃO VIP & GARANTIA",
      subtitle: "Entrega Protegida em Sua Obra",
      description: "Equipe técnica especializada uniformizada instala as peças com proteção especial contra impactos e selagem impermeabilizante."
    }
  ],

  differentials: [
    {
      icon: "Cpu",
      title: "Corte CNC a Laser Robotizado",
      description: "Tecnologia de usinagem digital que assegura recortes sem trincas e meias-esquadrias (45º) com acabamento imperceptível."
    },
    {
      icon: "ShieldCheck",
      title: "Garantia de 10 Anos em Instalação",
      description: "Compromisso de longo prazo com a integridade estrutural, colagem e impermeabilização das pedras aplicadas."
    },
    {
      icon: "Globe",
      title: "Pedras Raras de Pedreiras Exclusivas",
      description: "Importação direta e parceria com os melhores mineradores do Brasil, Itália, Pérsia e Grécia."
    },
    {
      icon: "Sparkles",
      title: "Selagem Nano-Impermeabilizante",
      description: "Tratamento de superfície de alta tecnologia que bloqueia absorção de líquidos, vinhos, óleos e café."
    },
    {
      icon: "Clock",
      title: "Entrega Programada Sem Atrasos",
      description: "Controle rigoroso do cronograma de produção para garantir que sua obra seja entregue exatamente na data combinada."
    },
    {
      icon: "Compass",
      title: "Acompanhamento por Engenheiros",
      description: "Projetos validados por engenheiros e projetistas especializados em rochas ornamentais de alto padrão."
    }
  ],

  faqs: [
    {
      question: "Qual a diferença entre Mármore, Granito e Quartzito?",
      answer: "O Mármore é uma rocha nobre de veios orgânicos marcantes, ideal para ambientes internos como lavabos, lareiras e pisos. O Granito é altamente resistente e duro, recomendado para áreas de uso intenso. Já o Quartzito une a beleza estética e veios fluidos do mármore com uma durabilidade ainda maior do que o granito."
    },
    {
      question: "Como funciona a garantia de 10 anos da Stone Gran Lux?",
      answer: "Oferecemos garantia de 10 anos cobrindo a integridade da colagem das meias-esquadrias em 45º, alinhamento estrutural das peças e a impermeabilização inicial realizada por nossa equipe técnica VIP."
    },
    {
      question: "O Ônix Rosa e Ônix Branco realmente podem receber iluminação LED?",
      answer: "Sim! As pedras da linha Ilha Ônix possuem composição mineral translúcida. Desenvolvemos o projeto completo incluindo a estrutura traseira com fitas ou painéis de LED 3000K (luz quente), permitindo acender a pedra como uma joia cênica."
    },
    {
      question: "Como solicitar um orçamento de forma rápida?",
      answer: "Você pode clicar em qualquer botão 'Solicitar Orçamento via WhatsApp' ou utilizar nosso Simulador de Orçamento nesta página. Basta enviar as medidas aproximadas ou o projeto arquitetônico em PDF para nossa equipe retornar com o valor detalhado."
    },
    {
      question: "Qual o prazo médio de entrega e instalação?",
      answer: "Após a aprovação do projeto executivo e medição a laser no local, nosso prazo padrão de fabricação e instalação varia de 7 a 15 dias úteis."
    }
  ]
};
