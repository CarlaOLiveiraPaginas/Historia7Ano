import { HistoricalSource, Monument } from '../types';

export const HISTORICAL_SOURCES: HistoricalSource[] = [
  {
    id: "src-1",
    title: "Gravura Rupestre de Foz Côa",
    type: "arqueologico",
    period: "Paleolítico Superior (± 25 000 a.C.)",
    imageUrl: "https://radioregional.pt/wp-content/uploads/2017/04/gravuras-rupestres-foz-coa-vandalizadas.jpg", // Gravuras Rupestres do Vale do Côa
    context: "O Vale de Côa em Portugal contém milhares de gravuras rupestres gravadas ao ar livre. Sobreviveram milhares de anos encravados no xisto do vale.",
    transcriptionOrDescription: "Gravuras de cavalos, cabras e bovídeos picotados nas rochas de xisto à beira-rio, evidenciando a vivência nómada de caçadores do Paleolítico Superior.",
    questions: [
      {
        question: "Como se chama a técnica paleolítica de escavação sutil da rocha com instrumentos de sílex ilustrada nesta fonte?",
        options: ["Pintura a óleo", "Picotagem ou gravura ao ar livre", "Olaria cozida", "Escrita cuneiforme"],
        answerIndex: 1,
        explanation: "Os caçadores-recoletores do Vale do Côa usavam pedras extremamente duras (sílex e quartzo) para picotar os contornos dos animais diretamente no xisto ao ar livre."
      },
      {
        question: "Qual era a utilidade provável destas representações artísticas no Paleolítico?",
        options: ["Vender bilhetes para exposições", "Fins decorativos em hotéis", "Fins mágicos e propiciação de caçadas fáceis e fertilidade animal", "Exercícios de matemática"],
        answerIndex: 2,
        explanation: "Acredita-se que as figuras tinham intuitos ritualísticos ou religiosos para garantir o reabastecimento de animais selvagens para caçar."
      }
    ]
  },
  {
    id: "src-2",
    title: "Papiros Egípcios e o Livro dos Mortos",
    type: "texto",
    period: "Novo Império Egípcio (± 1280 a.C.)",
    imageUrl: "https://images.unsplash.com/photo-1608155686393-8fef966d784d?auto=format&fit=crop&q=80&w=1200", // Egyptian hieroglyphs
    context: "O papiro é um suporte vegetal para escrita usado no Egito Antigo para relatar preces religiosas, transações de celeiro e hinos de louvor.",
    transcriptionOrDescription: "Desenho hieroglífico colorido mostrando o julgamento de uma alma perante o deus Osíris. O coração do falecido é pesado numa báscula contra a pena da verdade, Maat.",
    questions: [
      {
        question: "De acordo com esta fonte, a religiosidade dos Egípcios antigos focava-se no dogma de:",
        options: ["Crença em um único Deus punitivo", "Vida espiritual e julgamento além-túmulo pós-morte", "Nomadismo das famílias camponesas", "Construção de templos góticos"],
        answerIndex: 1,
        explanation: "Os egípcios tinham rituais fúnebres elaborados (mutilação de múmias, Livro dos Mortos) precisamente por acreditarem firmemente na existência e julgamento das almas após a morte física."
      }
    ]
  },
  {
    id: "src-3",
    title: "Excerto do Texto de Péricles (Oração Fúnebre, de Tucídides)",
    type: "texto",
    period: "Atenas, Século V a.C. (431 a.C.)",
    imageUrl: "https://images.unsplash.com/photo-1564399579883-451a5d44ff08?auto=format&fit=crop&q=80&w=1200", // Athens Acropolis landscape
    context: "O general ateniense Péricles discursa orgulhosamente sobre a estrutura do Estado democrático que eleva as liberdades individuais gregas.",
    transcriptionOrDescription: "«A nossa constituição política não imita as leis das cidades vizinhas. Pelo contrário, servimos de modelo para alguns. Recebe o nome de Democracia porque a nossa administração não caminha no interesse de poucos, mas no interesse da maioria de todo o povo comum.» — Tucídides, História da Guerra do Peloponeso.",
    questions: [
      {
        question: "Porque é que Péricles orgulhosamente apelida a administração ateniense de Democracia nesta carta histórica?",
        options: ["Porque beneficia apenas a elite dos metecos e imperadores", "Porque visa governar no interesse da maioria de cidadãos, em vez de dinastias ricas", "Porque proíbe as festas de teatro", "Porque obriga os escravos a votar"],
        answerIndex: 1,
        explanation: "Democracia significa o poder ('kratos') do povo ('demos'). Neste discurso, Péricles realça que as leis atenienses dão direitos cívicos diretos a toda a massa de cidadãos."
      }
    ]
  },
  {
    id: "src-4",
    title: "Carta de Foral de Coimbra (D. Afonso Henriques)",
    type: "texto",
    period: "Portugal medieval (1179 d.C.)",
    imageUrl: "https://images.unsplash.com/photo-1582298538104-fc2c3055e089?auto=format&fit=crop&q=80&w=1200", // Medieval document style
    context: "Carta outorgada pelo rei fundador D. Afonso Henriques para estruturar as obrigações judiciais dos vizinhos nobres e o povoado militar de Coimbra.",
    transcriptionOrDescription: "«Em nome da Santa e Indivisa Trindade. Eu, D. Afonso, por clemência de Deus Rei de Portugal, outorgo a vós, habitantes e homens-bons de Coimbra, esta carta de foral... Os cavaleiros e peões do concelho deverão defender as muralhas da cidade... Se algum senhor nobre infringir a honra das vossas casas, pagará trinta dinheiros de multa de foral.»",
    questions: [
      {
        question: "Qual era a função político-social da atribuição deste documento de Foral de Coimbra?",
        options: ["Anexar a cidade ao reino de Leão e Castela", "Incentivar e estruturar a fixação da população sob autonomia legal face aos abusos de nobres de linhagem", "Abolir as forças militares reais", "Destruir os pomares de oliveiras medievais"],
        answerIndex: 1,
        explanation: "O Foral estipulava taxas reduzidas locais fixas e determinava juízes autónomos plebeus, libertando a população da extorsão monetária do clero ou famílias de cavaleiros nobres."
      }
    ]
  }
];

export const HISTORICAL_MONUMENTS: Monument[] = [
  {
    id: "mon-1",
    name: "Templo do Partenon (Grécia)",
    period: "Século V a.C. (Antiguidade Clássica)",
    location: "Acrópole de Atenas, Grécia",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg", // Templo do Partenon (Grécia)
    architectureDetails: "Edificado no equilibrado estilo de ordem Dórica grega clássica. Carateriza-se pela ausência de base nos pilares, capitel simples redondo e friso decorado esculpido por Fídias com cenas mitológicas.",
    historicalImportance: "Dedicado ao culto da deusa padroeira da pólis, Atena Partenos. Representa o apogeu económico, militar e intelectual de Atenas no século de Péricles e o berço democrático ocidental."
  },
  {
    id: "mon-2",
    name: "Coliseu de Roma (Anfiteatro Flaviano)",
    period: "Século I d.C. (Império Romano)",
    location: "Roma, Itália",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200", // Stunning Roman Colosseum
    architectureDetails: "Usa o cimento de cinzas vulcânicas romana inovador para apoiar arcos em semicírculo redondos superpostos e abóbadas resistentes. Tem três pisos misturando ordens dórica, suntuosa jónica e coríntia.",
    historicalImportance: "Capacidade para acolher mais de 50 000 espetadores ruidosos. Servia para encenar combates sangrentos de gladiadores nobres, simulações de batalhas e espetáculos brutais para entreter a prole ('Pão e Circo')."
  },
  {
    id: "mon-3",
    name: "Sé Velha de Coimbra (Portugal)",
    period: "Século XII (Estilo Românico)",
    location: "Coimbra, Portugal",
    imageUrl: "https://images.unsplash.com/photo-1549492423-400259a2e574?auto=format&fit=crop&q=80&w=1200", // Medieval Portuguese stone church
    architectureDetails: "Igreja assemelhada a um castelo de vigia fortificado medieval. Paredes de silhares de granito espessos, pouquíssimas janelas, ameias defensivas coroando o topo dos muros e portal decorativo recortado com arcos de volta perfeita redondos.",
    historicalImportance: "Foi projetada no reinado de D. Afonso Henriques para festejar o orgulho da Reconquista. Simboliza a simbiose entre as defesas militares fortes de fronteira e a fé cristã da Idade Média antiga portuguesa."
  },
  {
    id: "mon-4",
    name: "Mosteiro da Batalha (Santa Maria da Vitória)",
    period: "Séculos XIV e XV (Estilo Gótico e Manuelino)",
    location: "Batalha, Portugal",
    imageUrl: "https://images.unsplash.com/photo-1627916576137-b6490659b8cb?auto=format&fit=crop&q=80&w=1200", // Beautiful gothic monastery Batalha
    architectureDetails: "Edificado em estilo Gótico radiante tardio e Manuelino único. Notava-se suntuosa verticalidade das torres pontiagudas, pináculos agulhados esculpidos, janelas de vitral flamejante coloridas e suntuosas capelas inacabadas repletas de filigranas de pedra calcária.",
    historicalImportance: "Mandado construir pelo rei D. João I para honrar e cumprir o seu promissor juramento à Virgem Maria após a heróica vitória portuguesa obtida na Batalha de Aljubarrota contra as tropas espanholas em 1385."
  }
];
export const MAPS_REAIS = [
  {
    id: "m-1",
    title: "Mapa do Império Romano sob Trajano (117 d.C.)",
    period: "Século II d.C.",
    imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200", // Stylized historical globe/map
    description: "Espansão máxima do império de Roma envolvendo toda a bacia do mar Mediterrâneo (Mare Nostrum), delimitada pelos rios Reno e Danúbio a norte e o deserto do Saara a sul.",
    guidingQuestions: "Observa como a Península Ibérica (Hispânia) estava no extremo oeste totalmente integrada no império. Repara na imensidão de território governado a partir de Roma graças às vias de estradas terrestres e marítimas seguras."
  }
];
