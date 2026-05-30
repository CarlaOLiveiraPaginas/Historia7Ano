import { TimelineEvent } from '../types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "± 20 000 a.C.",
    title: "Arte Rupestre no Paleolítico",
    themeId: "tema-1",
    description: "Surgem as famosas gravuras e pinturas rupestres nas rochas do Vale do Côa e grutas pré-históricas.",
    imageUrl: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&q=80&w=600",
    details: "Os grupos de caçadores do Paleolítico Superior pintavam animais selvagens (bisontes, cavalos, veados) nas rochas usando tintas extraídas de sementes, minerais de óxido moldados e gordura de gado.",
    trivia: "A pintura era feita frequentemente com pincéis de pelos animais rústicos ou soprando finos canudos de osso que pulverizavam a cor na parede!"
  },
  {
    year: "± 8000 a.C.",
    title: "A Revolução do Neolítico",
    themeId: "tema-1",
    description: "Invenção da agricultura e pecuária. O Homem passa a viver sedentário em aldeias estáveis.",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600", // Farming landscape
    details: "Com a capacidade de criar animais e colher trigo ou cevada, as sociedades abandonam o nomadismo. Criam novas técnicas, de que se destacam a olaria (para cozinhar e guardar colheitas) e os monumentos megálitos protetores.",
    trivia: "O cão foi provavelmente o primeiríssimo cômplice domesticado para ajudar as patrulhas de caça humana do Neolítico!"
  },
  {
    year: "± 3200 a.C.",
    title: "Nascimento da Escrita",
    themeId: "tema-1",
    description: "Os Sumérios na Mesopotâmia inventam a escrita cuneiforme. Inicia-se a contagem da História.",
    imageUrl: "https://images.unsplash.com/photo-1608155686393-8fef966d784d?auto=format&fit=crop&q=80&w=600",
    details: "Desenha-se a escrita cuneiforme em argila húmida sob preceitos fiscais de contabilidade de cereais ou gado. Seguem-se os hieróglifos egípcios pintados em papiro régio fidedigno.",
    trivia: "Ao introduzir as tabuletas de argila, o escriba usava um estilete de cana talhada que esculpia traços de feitio de cunha! Daí advém o qualificativo 'cuneiforme'."
  },
  {
    year: "450 a.C.",
    title: "O Século de Péricles em Atenas",
    themeId: "tema-2",
    description: "Apogeu cultural de Atenas, fixando as bases da democracia direta clássica e do teatro grego.",
    imageUrl: "https://images.unsplash.com/photo-1608126010007-e8e645421d2a?auto=format&fit=crop&q=80&w=600",
    details: "Péricles reconstrói a Acrópole monumental grega e democratiza os cargos públicos de Atenas, instituindo salários do erário estatal ('mistoforias') para permitir que cidadãos pobres pudessem largar o trabalho para votar leis.",
    trivia: "A democracia de Atenas funcionava por voto direto no braço levantado na colina da Pnyx, o que hoje seria impossível por conter muitos milhões de votantes numa nação!"
  },
  {
    year: "117 d.C.",
    title: "Apogeu Máximo do Império Romano",
    themeId: "tema-2",
    description: "Sob Trajano, Roma domina o 'Mare Nostrum' e espalha a coesão urbana da Romanização.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=600",
    details: "O império constrói pontes e estradas incríveis do Atlântico à Mesopotâmia. Povos partilham o latim vulgar adaptado, as termas relaxantes, as leis universais do Direito Romano e a Pax Romana protetora.",
    trivia: "As legiões romanas marchavam até 30 quilómetros por dia carregadas com armadura de escuto e teto de ferro!"
  },
  {
    year: "380 d.C.",
    title: "Cristianismo torna-se Oficial",
    themeId: "tema-2",
    description: "Livre das perseguições brutais antigas, o Cristianismo é decretado religião oficial romana.",
    imageUrl: "https://images.unsplash.com/photo-1548625361-155deee223d2?auto=format&fit=crop&q=80&w=600", // Religious stained glass
    details: "O imperador Teodósio assina o Édito de Tessalónica, que declara a religião cristã católica como único credo fidedigno de proteção cívica, proibindo os antigos deuses pagãos de Roma.",
    trivia: "O imperador Constantino converteu-se e foi batizado no leito da sua morte, após anos a favor e a financiar o clero cristão."
  },
  {
    year: "476",
    title: "Queda de Roma do Ocidente",
    themeId: "tema-3",
    description: "Soberanos bárbaros invadem e extinguem Roma. Nasce oficialmente a contagem da Idade Média.",
    imageUrl: "https://images.unsplash.com/photo-1564399579883-451a5d44ff08?auto=format&fit=crop&q=80&w=600",
    details: "O último rapaz imperador, Rómulo Augusto, é destronado pelo chefe bárbaro herúleo Odoacro. Fragmenta-se a Europa e as populações rurais refugiam-se em pequenas aldeias de subsistência.",
    trivia: "Apenas o Império Romano do Oriente (Bizâncio, com capital em Constantinopla) se manteve vivo e próspero por mais mil anos!"
  },
  {
    year: "622",
    title: "A Hégira do Profeta Maomé",
    themeId: "tema-3",
    description: "Fuga do profeta Maomé de Meca para Medina, iniciando o calendário oficial sagrado muçulmano.",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600", // Islamic architecture pattern
    details: "A resistência de mercadores politeístas de Meca forçou os crentes a fugir. Em Medina, o Islão de Alá unificou as tribos árabes guerreiras móveis e iniciou um espetacular califado militar.",
    trivia: "Meca continua a ser a cidade santa de onde todos os muçulmanos se viram nas devotas orações cinco vezes diárias!"
  },
  {
    year: "711",
    title: "Muçulmanos invadem Hispânia",
    themeId: "tema-3",
    description: "O exército de Tariq bem treinado derrota os visigodos, colonizando quase toda a Península Ibérica.",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600", // Pattern design
    details: "A invasão derrubou os generais visigodos em poucos anos. O sul da península (Gharb Al-Andalus, atual sul português) beneficiou de enorme brilho agrícola e comércio refinado árabe.",
    trivia: "Muitas das cidades com castelos imponentes (como Alvalade, Alcácer do Sal ou Albufeira) foram erguidas pelos mouros!"
  },
  {
    year: "1096",
    title: "O Condado Portucalense",
    themeId: "tema-3",
    description: "D. Afonso VI de Leão atribui a chefia feudal do Condado Portucalense ao nobre cruzado D. Henrique.",
    imageUrl: "https://images.unsplash.com/photo-1582298538104-fc2c3055e089?auto=format&fit=crop&q=80&w=600",
    details: "Para agradecer o empenho militar cristão decisivo contra as investidas árabes, D. Henrique de Borgonha é agraciado com o dízimo do condado a norte do Mondego e a mão de D. Teresa.",
    trivia: "D. Henrique morreu sem ver o seu filho Afonso tornar-se rei, deixando a regência à sua viúva D. Teresa."
  },
  {
    year: "1128",
    title: "A Batalha de S. Mamede",
    themeId: "tema-3",
    description: "Afonso Henriques combate os homens da sua própria mãe, D. Teresa, assumindo a regência do condado.",
    imageUrl: "https://images.unsplash.com/photo-1549492423-400259a2e574?auto=format&fit=crop&q=80&w=600",
    details: "Em Guimarães, a nobreza local lusa apoia Afonso Henriques para expulsar os nobres galegos de D. Teresa e Fernão Peres de Trava. A vitória em S. Mamede sela a autodeterminação territorial.",
    trivia: "A lenda diz que Afonso Henriques bateu na sua mãe na batalha e foi amaldiçoado com pernas fracas, mas isso é ficção literária popular!"
  },
  {
    year: "1143",
    title: "O Tratado de Zamora",
    themeId: "tema-3",
    description: "Pacto de suserania fidedigno onde o rei de Leão e Castela reconhece formalmente Afonso Henriques como rei.",
    imageUrl: "https://images.unsplash.com/photo-1505664194762-8597c5f4d82f?auto=format&fit=crop&q=80&w=600",
    details: "Na diplomacia pacífica de Zamora militar e comissão papal, o imperador Afonso VII aceita a soberania plena de Portugal, que passa a ter fronteira definida a leste do condado.",
    trivia: "Afonso Henriques assinou este documento usando uma cruz fidalga que substituiu a falta de hábito de escrita dos soldados medievais!"
  },
  {
    year: "1179",
    title: "Bula Manifestis Probatum",
    themeId: "tema-3",
    description: "O Papa Alexandre III emite a bula solene de independência formal exclusiva de Portugal.",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600",
    details: "O documento de chumbo sela o Trono português perante os reinos do mundo inteiro, definindo que Afonso Henriques prestou ajuda vital à cristandade contra o poder muçulmano.",
    trivia: "Es documento original escrito em pele de pergaminho de ovelha ainda hoje se conserva nos arquivos da Torre do Tombo em Lisboa!"
  },
  {
    year: "1254",
    title: "Cortes de Leiria",
    themeId: "tema-4",
    description: "Primeira reunião de cortes com participação de representantes concelhios e povo burguês comum.",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&q=80&w=600",
    details: "D. Afonso III convoca nobres, bispos e, pela primeira vez na hgi, juízes e 'homens-bons' de vários concelhos para obter o consentimento popular de tributos monetários.",
    trivia: "Isto marcou a passagem de assembleias de linhagem militar pura a estâncias consultivas reais abrangentes populares!"
  },
  {
    year: "1290",
    title: "Estudos Gerais (Universidade)",
    themeId: "tema-4",
    description: "D. Dinis funda em Lisboa a primeira instituição académica nacional, que mais tarde se muda para Coimbra.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    details: "Através da bula 'Scientiae thesaurus mirabilis' do Papa, a escola ensinava medicina e leis. Coimbra acolheu-a definitivamente no Palácio Real de Alcáçova por cima do rio Mondego.",
    trivia: "Estudos Gerais significava que as licenciaturas outorgadas pela universidade portuguesa eram válidas e reconhecidas em qualquer parte da Europa cristã!"
  },
  {
    year: "1348",
    title: "A Calamidade da Peste Negra",
    themeId: "tema-4",
    description: "Invasão sanitária da pior epidemia bacteriana da humanidade, matando um terço de Portugal.",
    imageUrl: "https://images.unsplash.com/photo-1584627762660-c83405cfa29d?auto=format&fit=crop&q=80&w=600",
    details: "As pulgas infetadas das ratazanas dos barcos de mercadoria trazem a peste de Gênova. Populações rurais decimam-se, provocando escassez colossal de trabalhadores rústicos e fomes.",
    trivia: "Os doentes criavam terríveis inchaços pretos nas virilhas denominados bubões, daí ser apelidada de 'Peste Bubónica'."
  },
  {
    year: "1385",
    title: "Aclamação e Batalha de Aljubarrota",
    themeId: "tema-4",
    description: "Cortes de Coimbra elegem D. João I de Avis. D. Nuno vence Castela em Aljubarrota salvando Portugal.",
    imageUrl: "https://images.unsplash.com/photo-1627916576137-b6490659b8cb?auto=format&fit=crop&q=80&w=600",
    details: "Em 14 de agosto, perto de Leiria, o quadrado luso de infantaria destrói a cavalaria castelhana em poucas horas de combate. Cimenta-se a 2.º dinastia lusa e a lenda heróica nacional.",
    trivia: "A lenda diz que a Padeira de Aljubarrota ajudou a cozer e fustigar tropas em fuga com a sua pá de madeira!"
  }
];
