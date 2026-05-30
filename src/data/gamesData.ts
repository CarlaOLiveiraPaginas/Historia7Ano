export interface TFQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  justification: string;
}

export interface ConceptMatch {
  term: string;
  definition: string;
}

export interface FillBlankSentence {
  id: string;
  textBefore: string;
  blankAnswer: string;
  textAfter: string;
  hint: string;
}

export interface EscapeRoomStep {
  step: number;
  title: string;
  story: string;
  clue: string;
  riddle: string;
  correctAnswer: string; // Answer must be typed or selected
  pointsAwarded: number;
}

export interface TreasureHuntClue {
  id: string;
  riddle: string;
  hint: string;
  targetObject: string; // E.g. "menir", "papiro", "aqueduto", "astrolábio", "bula"
  options: string[];
}

export interface ChronoItem {
  id: string;
  year: number;
  event: string;
}

export const TRUE_FALSE_GAMES: TFQuestion[] = [
  {
    id: "tf-1",
    statement: "No Paleolítico, os seres humanos dominavam a agricultura e viviam fixos em grandes cidades à beira-rio.",
    isTrue: false,
    justification: "Falso! No Paleolítico, o Homem praticava a recoleção, dependia da caça e era nómada. A agricultura e a sedentarização só surgiram no Neolítico."
  },
  {
    id: "tf-2",
    statement: "A cidadania em Atenas era inclusiva, permitindo que todas as mulheres nascidas na cidade votassem na Eclésia.",
    isTrue: false,
    justification: "Falso! As mulheres, os escravos e os metecos (estrangeiros) estavam totalmente excluídos da cidadania e da vida política em Atenas."
  },
  {
    id: "tf-3",
    statement: "O Édito de Milão de 313 d.C., assinado por Constantino, concedeu plena liberdade de culto aos cristãos.",
    isTrue: true,
    justification: "Verdadeiro! O Édito de Milão acabou com as perseguições oficiais imperiais e decretou a liberdade dos cristãos praticarem os seus dogmas de fé."
  },
  {
    id: "tf-4",
    statement: "A economia europeia do século VI ao IX era de subsistência, baseando-se no autoconsumo com pouca circulação de moedas.",
    isTrue: true,
    justification: "Verdadeiro! Com o fim de Roma e as invasões, o comércio ruiu e as populações rurais passaram a depender unicamente do que colhiam localmente."
  },
  {
    id: "tf-5",
    statement: "A Hégira marca a fuga de Maomé de Meca para Medina no ano de 622 d.C. e inicia o calendário muçulmano.",
    isTrue: true,
    justification: "Verdadeiro! Este importante evento do ano 622 d.C. marca o início do ano zero do calendário religioso islâmico."
  },
  {
    id: "tf-6",
    statement: "O primeiro rei de Portugal, D. Afonso Henriques, obteve a independência do país através da heróica Batalha de Aljubarrota.",
    isTrue: false,
    justification: "Falso! A independência foi formalizada no Tratado de Zamora em 1143. A Batalha de Aljubarrota ocorreu muito mais tarde, em 1385, para defender e salvaguardar essa mesma independência das ambições de Castela."
  },
  {
    id: "tf-7",
    statement: "As Cartas de Foral eram dadas pelos reis para criar Concelhos e dar autonomia administrativa e fiscal aos habitantes.",
    isTrue: true,
    justification: "Verdadeiro! Os forais eram fundamentais para povoar terras perigosas e libertar os trabalhadores do jugo direto da nobreza de sangue senhorial."
  },
  {
    id: "tf-8",
    statement: "A terrível Peste Negra de 1348 d.C. poupou Portugal devido à barreira natural de montanhas na fronteira com Castela.",
    isTrue: false,
    justification: "Falso! A Peste Negra entrou silenciosamente pelos portos marítimos mercantes e aniquilou cerca de um terço de toda a população portuguesa medieval."
  }
];

export const CONCEPT_MATCHES: ConceptMatch[] = [
  { term: "Paleolítico", definition: "Idade da Pedra Lascada, economia recoletora e nomadismo humano." },
  { term: "Neolítico", definition: "Idade da Pedra Polida, invenção da agricultura, pecuária, olaria e sedentarização." },
  { term: "Menir", definition: "Pedra monolítica comprida cravada na vertical no solo associada a rituais de culto à terra." },
  { term: "Eclésia", definition: "Assembleia popular que votava as leis e orçamentos da democracia de Atenas." },
  { term: "Romanização", definition: "Processo de partilha e assimilação da cultura, língua latim e direito de Roma pelos vencidos." },
  { term: "Feudo", definition: "Terras, direitos ou dízimos entregues pelo Suserano ao Vassalo a troco de lealdade militar." },
  { term: "Estudos Gerais", definition: "Nome dado à primeira universidade portuguesa fundada em Lisboa por D. Dinis em 1290." },
  { term: "Românico", definition: "Estilo artístico de templos maciços com paredes muito grossas de pedra e arcos redondos de volta perfeita." },
  { term: "Gótico", definition: "Estilo artístico de catedrais verticais esguias com vitrais cheios de luz e arcos quebrados ogivais." },
  { term: "Tática do Quadrado", definition: "Tática de infantaria usada por Nuno Álvares Pereira para derrotar a cavalaria em Aljubarrota." }
];

export const COMPL_SENTENCES: FillBlankSentence[] = [
  {
    id: "cs-1",
    textBefore: "Os homens pré-históricos pintavam figuras de animais nas paredes das grutas; este tipo de manifestação artística chama-se arte",
    blankAnswer: "rupestre",
    textAfter: "e expressava crenças mágicas e rituais.",
    hint: "Deriva do latim 'rupes' (rocha)."
  },
  {
    id: "cs-2",
    textBefore: "O aparecimento da",
    blankAnswer: "escrita",
    textAfter: "por volta do ano 3200 a.C. pelos Sumérios marca oficialmente a passagem da Pré-História para a História.",
    hint: "Cuneiforme e Hieroglífica são dois tipos famosos desta invenção histórica."
  },
  {
    id: "cs-3",
    textBefore: "Atenas praticava um sistema de governo chamado",
    blankAnswer: "democracia",
    textAfter: "onde os cidadãos podiam influenciar diretamente a votação de leis na assembleia na colina da Pnyx.",
    hint: "Do grego 'Demos' (Povo) e 'Kratos' (Poder)."
  },
  {
    id: "cs-4",
    textBefore: "O idioma dos romanos, falado pelos legionários e governadores do império, chamava-se",
    blankAnswer: "latim",
    textAfter: "e deu origem à maravilhosa língua portuguesa moderna.",
    hint: "Uma língua clássica e mãe do português."
  },
  {
    id: "cs-5",
    textBefore: "A sociedade medieval estava rigidamente organizada em três grupos sociais ou ordens:",
    blankAnswer: "clero",
    textAfter: ", nobreza e o Povo (Terceiro Estado).",
    hint: "Esta ordem social vestia hábitos, conduzia as missas e rezava pela alma do reino."
  },
  {
    id: "cs-6",
    textBefore: "Em 1143 d.C., D. Afonso Henriques uniu-se ao rei de Leão em Zamora para assinar um pacto fidedigno chamado Tratado de",
    blankAnswer: "Zamora",
    textAfter: ", que oficializou e validou a independência de Portugal perante outros reinos vizinhos.",
    hint: "Nome de uma cidade fidalga espanhola localizada na província de Castela e Leão."
  }
];

export const ESCAPE_ROOM_STEPS: EscapeRoomStep[] = [
  {
    step: 1,
    title: "O Enigma do Escriba do Nilo",
    story: "Estás encurralado na biblioteca privada de um templo dedicatório no Antigo Egito. Diante de ti está uma múmia que guarda um rolo de papiro dourado. Para abrires a porta desta câmara misteriosa, tens de decifrar o código composto pela classe que dominava as contas fiscais e a bela caligrafia sagrada do faraó.",
    clue: "Não são sacerdotes nem guerreiros. São os que dominavam a escrita secreta em folhas finas nas margens fluviais.",
    riddle: "Como se chamavam os funcionários públicos do Antigo Egito encarregues de ler, escrever e taxar impostos?",
    correctAnswer: "escribas",
    pointsAwarded: 50
  },
  {
    step: 2,
    title: "A Chave da Colina Democrática",
    story: "Viajaste no tempo até Atenas. Encontras-te na colina da Pnyx e precisas de assistir à assembleia democrática para conseguires um salvo-conduto. Contudo, o guarda da entrada avisa-te: apenas quem souber o nome grego da assembleia universal onde todos os cidadãos livres votam braço erguido poderá aceder à colina.",
    clue: "É uma palavra grega que começa por 'E' e termina em 'ia'.",
    riddle: "Qual o nome da célebre assembleia de cidadãos de Atenas do século V a.C.?",
    correctAnswer: "eclesia",
    pointsAwarded: 50
  },
  {
    step: 3,
    title: "Os Labirintos da Catedral Gótica",
    story: "Acordas preso no topo de uma torre colossal do século XIII. Olhas pela janela de vitral e vês gárgulas apontando ao céu e arcos quebrados de arrojada engenharia. Um documento em cima do altar avisa: O portão exterior abre-se ao digitares a palavra-chave que descreve o tipo de arco pontiagudo cónico em bico, típico desta arquitetura gótica elegante.",
    clue: "Ao contrário do arco circular 'volta perfeita' românico, este arco em bico é chamado arco...",
    riddle: "Como se chama o arco característico da arte gótica com perfil quebrado em bico?",
    correctAnswer: "ogival",
    pointsAwarded: 50
  },
  {
    step: 4,
    title: "A Tática de Aljubarrota",
    story: "Chegaste à véspera do dia 14 de agosto de 1385. O Condestável Nuno Álvares Pereira está no seu acampamento a tentar encontrar a fórmula mágica de infantaria rústica para conter a implacável cavalaria espanhola. Para provares que és um estudioso do tempo e obteres a tua medalha, diz-lhe o nome da famosa tática de infantaria que ele deve desenhar de manhã.",
    clue: "Representa uma forma geométrica regular com quatro lados iguais de tropas de lanças apontadas para as quatro direções e trincheiras cavadas no mato.",
    riddle: "Como ficou conhecida a tática militar utilizada pelos portugueses na Batalha de Aljubarrota?",
    correctAnswer: "tatica do quadrado",
    pointsAwarded: 100
  }
];

export const CHRONO_CHALLENGES: ChronoItem[] = [
  { id: "ch-1", year: -3200, event: "Invenção da escrita pelos Sumérios na Mesopotâmia." },
  { id: "ch-2", year: -450, event: "Apogeu da Democracia em Atenas sob o comando de Péricles." },
  { id: "ch-3", year: 313, event: "Constantino assina o Édito de Milão dando tolerância religiosa." },
  { id: "ch-4", year: 476, event: "Queda de Roma e fim do Império Romano do Ocidente." },
  { id: "ch-5", year: 622, event: "A Hégira: Maomé foge de Meca para Medina (ano 0 do Islão)." },
  { id: "ch-6", year: 711, event: "Invasão muçulmana da Península Ibérica derrotando os Visigodos." },
  { id: "ch-7", year: 1096, event: "D. Henrique de Borgonha recebe o feudo do Condado Portucalense." },
  { id: "ch-8", year: 1128, event: "Batalha de S. Mamede: D. Afonso Henriques assume a liderança." },
  { id: "ch-9", year: 1139, event: "Batalha de Ourique e auto-aclamação do primeiro rei nacional." },
  { id: "ch-10", year: 1143, event: "Assinatura formal do Tratado de Zamora reconhecendo Portugal." },
  { id: "ch-11", year: 1179, event: "Emissão da Bula Manifestis Probatum pelo papa Alexandre III." },
  { id: "ch-12", year: 1254, event: "Cortes de Leira com a pioneira participação do Povo comum." },
  { id: "ch-13", year: 1290, event: "D. Dinis assina a fundação dos Estudos Gerais (primeira universidade)." },
  { id: "ch-14", year: 1348, event: "Manifestação catastrófica da Peste Negra em Portugal." },
  { id: "ch-15", year: 1385, event: "Cortes de Coimbra unidas à heroica vitória lusa em Aljubarrota." }
];

export const TREASURE_HUNT_CLUES: TreasureHuntClue[] = [
  {
    id: "th-1",
    riddle: "Sou esculpido em rocha do Neolítico, erguido em solitário apontado silencioso para os céus, no meio de montados alentejanos. Quem sou eu?",
    hint: "Não é dólmen nem cromeleque. É uma pedra única.",
    targetObject: "menir",
    options: ["Menir", "Dólmen", "Cromeleque", "Papiro"]
  },
  {
    id: "th-2",
    riddle: "Transportava metros cúbicos de água fresca e cristalina por cima de majestosos arcos duplos romanos, alimentando termas e chafarizes. Quem sou eu?",
    hint: "Os restos mais bonitos perto de nós estão em Conímbriga ou no Aqueduto de Segóvia em Espanha.",
    targetObject: "aqueduto",
    options: ["Aqueduto", "Ponte de pedra", "Templo do Partenon", "Domo do Vaticano"]
  },
  {
    id: "th-3",
    riddle: "Feito de fibra fina espremida e seca às margens do Nilo, guardava a história secreta de faraós e deuses desenhados hieróglifo a hieróglifo. Quem sou eu?",
    hint: "Uma folha de papel ancestral egípcia.",
    targetObject: "papiro",
    options: ["Pergaminho", "Papiro", "Placa de Argila", "Escudo de carvalho"]
  },
  {
    id: "th-4",
    riddle: "Documento oficial assinado pelo próprio Papa com selos redondos de chumbo que declarava a legitimidade divina e independência do reino português. Quem sou eu?",
    hint: "Refere-se ao documento romano papal que colocou Portugal no direito medieval, a Manifestis Probatum de 1179.",
    targetObject: "bula",
    options: ["Bula papal", "Carta de Foral", "Parceria feudal", "Estudo geral"]
  }
];
