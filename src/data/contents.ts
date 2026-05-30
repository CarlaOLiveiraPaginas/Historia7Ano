import { Theme } from '../types';

export const THEMES: Theme[] = [
  {
    id: "tema-1",
    number: 1,
    title: "Das Sociedades Recoletoras às Primeiras Civilizações",
    subthemes: [
      {
        id: "sub-1-1",
        title: "Das sociedades recoletoras às primeiras sociedades produtoras",
        introductionText: "Descobre como os seres humanos passaram de caçadores nómadas a agricultores sedentários que transformaram a paisagem com as suas construções megálitas.",
        contentSections: [
          {
            title: "O Paleolítico: Caçadores-Recoletores",
            text: "Durante o Paleolítico (Idade da Pedra Lascada), o Homem dependia inteiramente daquilo que a Natureza lhe dava. Para sobreviver, praticava a recoleção (colheita de frutos, raízes, ovos) e a caça. Como os recursos se esgotavam rapidamente numa região, era obrigado a deslocar-se constantemente, praticando o nomadismo. O domínio do fogo foi uma das maiores conquistas desta época, permitindo cozinhar alimentos, afugentar animais, iluminar as cavernas e aquecer os grupos."
          },
          {
            title: "O Neolítico: A Revolução Agrícola",
            text: "Há cerca de 10 000 anos, iniciou-se o Neolítico (Idade da Pedra Polida). O Homem aprendeu a cultivar a terra (agricultura) e a domesticar animais (pecuária). Ao produzir os seus próprios alimentos, o Homem tornou-se produtor e pôde fixar-se num local permanente, dando-se o processo de sedentarização. Surgiram as primeiras aldeias, acompanhadas pelo desenvolvimento de novas técnicas como a olaria, a tecelagem e a cestaria."
          },
          {
            title: "Arte Rupestre e Megalitismo",
            text: "No Paleolítico, o Homem pintava e gravava figuras nas paredes das grutas e em rochas ao ar livre (arte rupestre), muitas vezes associadas a rituais de caça. No Neolítico, a religiosidade mudou, focando-se no culto da fertilidade da terra. Ergueram-se monumentos gigantes em pedra (megálitos): os Menires (pedras isoladas na vertical), os Dólmenes ou Antas (túmulos funerários de pedra) e os Cromeleques (conjuntos de menires em círculo, como o de Almendres em Évora)."
          },
          {
            title: "Fontes Históricas e Arqueologia",
            text: "Como as populações da Pré-História não possuíam escrita, a Arqueologia desempenha um papel fundamental. Através de escavações, os arqueólogos recuperam vestígios materiais (ferramentas de pedra lascada ou polida, ossos, cerâmicas) que são tratados como fontes históricas não-escritas para reconstruir a vida no passado."
          }
        ],
        summary: [
          "O Paleolítico caracteriza-se pela economia recoletora, nomadismo, uso da pedra lascada e invenção/domínio do fogo.",
          "O Neolítico trouxe a agricultura, a domesticação de animais, a sedentarização do Homem e novas técnicas como a cerâmica e a tecelagem.",
          "As pinturas rupestres e as construções megálitas (menires, dólmenes, cromeleques) refletem o desenvolvimento cultural e espiritual do Homem pré-histórico.",
          "As fontes arqueológicas são vitais para o estudo desta época devido à ausência de escrita."
        ],
        flashcards: [
          { id: "fc-1-1", question: "O que é o Nomadismo?", answer: "Estilo de vida em que as populações se deslocam constantemente de lugar em busca de alimentos, sem habitação fixa." },
          { id: "fc-1-2", question: "Como se chama a passagem da economia recoletora para a economia produtora?", answer: "Revolução Agrícola ou Revolução do Neolítico." },
          { id: "fc-1-3", question: "O que caracteriza os Cromeleques?", answer: "Monumentos megálitos constituídos por vários menires em círculo, associados a cultos solares ou astrológicos." },
          { id: "fc-1-4", question: "Para que serviam os Dólmenes ou Antas?", answer: "Eram monumentos funerários coletivos (túmulos) de pedra pesada erguidos no Neolítico." }
        ],
        exercises: [
          {
            id: "ex-1-1",
            question: "Que grande conquista permitiu ao Homem do Paleolítico melhorar a alimentação e defender-se de predadores?",
            options: ["A invenção do tear", "O domínio do fogo", "A criação de dólmenes", "A tecelagem de algodão"],
            answerIndex: 1,
            hint: "Ocorre no Paleolítico e brilha no escuro.",
            justification: "O domínio do fogo permitiu ao Homem cozinhar alimentos, afugentar animais selvagens, iluminar grutas e aquecer-se contra o frio rigoroso das eras glaciares."
          },
          {
            id: "ex-1-2",
            question: "A sedentarização foi uma consequência direta de que acontecimento?",
            options: ["Do aparecimento da arte rupestre", "Do aparecimento da escrita", "Da invenção da agricultura e criação de gado", "Das invasões de outros povos"],
            answerIndex: 2,
            hint: "Quando passas a cultivar o teu próprio alimento, precisas de ficar perto dele.",
            justification: "Ao descobrir a agricultura (cultivar plantas) e a pecuária (criar gado), o Homem tornou-se produtor e já não precisava de se deslocar constantemente, fixando-se no mesmo sítio permanentemente."
          }
        ],
        reflection: {
          question: "Como teria sido diferente a vida humana se o Homem nunca se tivesse tornado sedentário?",
          guidePoints: [
            "Pensa na inexistência de cidades e países duradouros.",
            "Considera a limitação de bens pessoais que poderiam ser carregados numa vida nómada.",
            "Visualiza as dificuldades de obter comida todos os dias sem reservas agrícolas."
          ]
        },
        trivia: [
          "O Cromeleque dos Almendres, em Évora, é o monumento megalítico mais importante da Península Ibérica e é cerca de 2000 anos mais antigo do que o famoso Stonehenge em Inglaterra!",
          "Arqueologia vem do grego 'arkhaios' (antigo) e 'logos' (estudo). Os arqueólogos usam frequentemente escovas de dentes macias e colheres de pedreiro finas para retirar a terra sem danificar os achados!"
        ],
        miniQuiz: [
          {
            question: "O Homem começou a praticar a cerâmica e olaria em qual período?",
            options: ["Paleolítico", "Neolítico", "Idade dos Metais", "Século V a.C."],
            answerIndex: 1
          },
          {
            question: "Qual era a função principal de uma Anta ou Dólmen?",
            options: ["Habitação coletiva", "Túmulo funerário", "Fábrica de armas de pedra", "Forte militar"],
            answerIndex: 1
          }
        ]
      },
      {
        id: "sub-1-2",
        title: "Contributos das primeiras civilizações",
        introductionText: "Explora o nascimento da escrita e a organização social e económica das civilizações ribeirinhas que moldaram as bases da História antiga.",
        contentSections: [
          {
            title: "As Civilizações dos Grandes Rios",
            text: "Por volta de 4000 a.C., nas margens de grandes rios, surgiram as primeiras civilizações humanas. Este fenómeno ocorreu na Mesopotâmia (rios Tigre e Eufrates), no Antigo Egito (rio Nilo), na Índia (rio Indo) e na China (rio Amarelo). As cheias anuais dos rios inundavam as margens, depositando um lodo fertilizante (o limo). Para aproveitar estas águas, as populações criaram complexos sistemas de diques, canais de irrigação e reservatórios de água."
          },
          {
            title: "A Invenção da Escrita",
            text: "A necessidade de registar os impostos pagos, contar os rebanhos e gerir o comércio levou à invenção da escrita por volta de 3200 a.C. Na Mesopotâmia, os Sumérios criaram a escrita cuneiforme (marcas em placas de argila húmida). No Egito, desenvolveram-se os hieróglifos (símbolos gravados em pedra ou pintados em papiro). Com a escrita, termina a Pré-História e inicia-se a História."
          },
          {
            title: "Sociedades Estratificadas e Religião",
            text: "Estas primeiras civilizações adotaram uma sociedade estratificada, dividida em grupos sociais rigidamente estruturados e desiguais. No topo estava o monarca supremo (como o Faraó no Egito, visto como um deus vivo). Abaixo ficavam os sacerdotes, nobres e escribas (os únicos que sabiam ler e escrever). Na base encontravam-se os camponeses, artesãos e escravos. A religião era politeísta (culto de vários deuses) e explicava os fenómenos naturais."
          },
          {
            title: "Organização Política e Economia",
            text: "A nível político, o poder estava centralizado no rei, que governava de forma teocrática (em nome dos deuses) ou absoluta. A economia baseava-se na agricultura intensiva enriquecida pelo comércio fluvial e marítimo, além de uma rica produção artesanal."
          }
        ],
        summary: [
          "As primeiras civilizações surgiram na Mesopotâmia, Egito, Índia e China perto de grandes rios benéficos para a agricultura.",
          "A escrita cuneiforme e os hieróglifos surgiram para responder a necessidades de contabilidade e administração de estados dinâmicos.",
          "As sociedades eram fortemente estratificadas e desiguais, controladas por imperadores ou faraós divinizados.",
          "O politeísmo marcava as crenças religiosas destas civilizações, com deuses associados às forças da natureza."
        ],
        flashcards: [
          { id: "fc-1-5", question: "Porque é que as civilizações surgiram junto a rios?", answer: "Os rios forneciam água potável, fáceis vias de transporte e margens férteis após as cheias reguladas por canais." },
          { id: "fc-1-6", question: "Como se chama a escrita do Antigo Egito?", answer: "Hieróglifos, que usavam símbolos pictográficos e sagrados." },
          { id: "fc-1-7", question: "O que é o Politeísmo?", answer: "Crença e culto prestado a múltiplos deuses, característica marcante do Egito e da Mesopotâmia." },
          { id: "fc-1-8", question: "Quem eram os Escribas?", answer: "Altos funcionários que dominavam o cálculo e a escrita, responsáveis por toda a contabilidade administrativa e registos fiscais." }
        ],
        exercises: [
          {
            id: "ex-1-3",
            question: "Qual das seguintes civilizações se desenvolveu graças às cheias periódicas do rio Nilo?",
            options: ["A civilização Suméria", "A civilização Egípcia", "A civilização Grega", "A civilização Fenícia"],
            answerIndex: 1,
            hint: "Faraós, múmias e pirâmides pertencem a esta civilização.",
            justification: "O Antigo Egito dependia umbilicalmente do Rio Nilo. Os egípcios celebravam as cheias anuais do rio como uma dádiva divina indispensável à subsistência agrícola."
          },
          {
            id: "ex-1-4",
            question: "A invenção da escrita marca a transição entre quais dois grandes períodos da história?",
            options: ["Idade Média e Idade Moderna", "Paleolítico e Neolítico", "Pré-História e História", "Império Romano e Idade Média"],
            answerIndex: 2,
            hint: "Tudo o que se passou antes de sabermos escrever pertence ao prefixo 'Pré'.",
            justification: "A invenção da escrita (por volta de 3200 a.C.) divide a Pré-História (estudada apenas por vestígios arqueológicos) da História (que dispõe de registos escritos)."
          }
        ],
        reflection: {
          question: "De que forma a escrita facilita a organização e o controlo político de um país inteiro?",
          guidePoints: [
            "Pensa em como as leis escritas asseguram que todos saibam as regras e consequências.",
            "Considera o controlo financeiro de impostos e faturas ao longo do império.",
            "Pensa na transmissão fiel de mensagens do rei a províncias distantes sem distorções."
          ]
        },
        trivia: [
          "Os hieróglifos egípcios eram um mistério indizível até 1799, quando soldados franceses descobriram a Pedra de Roseta. O linguista Jean-François Champollion conseguiu decifrá-los por os comparar com o grego antigo!",
          "No Egito, os escribas usavam canas afiadas e uma tinta preta feita de carvão e água para escrever em papiro, uma planta fina e flexível que crescia livremente nas margens do Nilo."
        ],
        miniQuiz: [
          {
            question: "Quem escreveu com escrita cuneiforme em placas de argila?",
            options: ["Gregos", "Sumérios", "Egípcios", "Romanos"],
            answerIndex: 1
          },
          {
            question: "O Faraó governava com poder supremo por ser considerado...",
            options: ["Um primeiro-ministro eleito", "Um deus vivo e filho do Sol (Rá)", "Um general estrangeiro", "Um representante eleito pelos servos"],
            answerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "tema-2",
    number: 2,
    title: "A Herança do Mediterrâneo Antigo",
    subthemes: [
      {
        id: "sub-2-1",
        title: "Os Gregos no século V a.C.",
        introductionText: "Familiariza-te com Atenas, o berço da nossa democracia moderna, a arte clássica sublime e os conceitos fundamentais de cidadania grega.",
        contentSections: [
          {
            title: "A Cidade-Estado (Pólis) de Atenas",
            text: "No século V a.C. (século de Péricles), a Grécia não era um país unificado, mas sim um conjunto de cidades-estado independentes chamadas pólis. Cada pólis tinha leis, moeda, governo e exército próprios. Atenas destacou-se pela sua riqueza cultural e pela criação de um sistema político inovador: a Democracia directíssima."
          },
          {
            title: "A Democracia e a Cidadania Ateniense",
            text: "Atenas praticava a democracia direta. Os cidadãos reuniam-se na Eclésia (assembleia do povo) na colina da Pnyx para votar leis e escolher magistrados diretamente por braço no ar ou sorteio. No entanto, a cidadania era extremamente restrita: apenas os homens livres, maiores de 18 anos, filhos de pai e mãe atenienses eram considerados cidadãos. Estavam excluídas as mulheres, os metecos (estrangeiros livres) e os escravos, que compunham a esmagadora maioria da população."
          },
          {
            title: "A Arte Clássica e a Filosofia",
            text: "Os gregos procuravam a harmonia, a beleza, a simetria e a proporção nas suas artes. Na arquitetura destacam-se os templos erguidos na Acrópole (como o Partenon), utilizando as três ordens arquitetónicas: dórica (simples, sem base), jónica (com volutas em forma de espiral) e coríntia (decorada com folhas de acanto). A filosofia (com Sócrates, Platão e Aristóteles) e o Teatro (Tragédia e Comédia) foram grandes legados de Atenas."
          }
        ],
        summary: [
          "A Grécia Antiga estava organizada em pólis (cidades-estado independentes).",
          "Atenas criou a Democracia Direta, cujo o principal órgão de voto era a Eclésia.",
          "A cidadania ateniense excluía metecos, escravos e as mulheres, limitando-se aos homens livres de pais atenienses.",
          "A arquitetura clássica baseava-se no equilíbrio e nas ordens dórica, jónica e coríntia."
        ],
        flashcards: [
          { id: "fc-2-1", question: "O que era a Eclésia?", answer: "A principal assembleia de cidadãos de Atenas que se reunia para debater, votar e aprovar leis e orçamentos." },
          { id: "fc-2-2", question: "Como se definia a cidadania em Atenas?", answer: "Privilégio exclusivo de homens livres nascidos de pai e mãe atenienses, que tivessem cumprido o serviço militar." },
          { id: "fc-2-3", question: "Quais são as três ordens arquitetónicas gregas?", answer: "Ordem Dórica, Ordem Jónica e Ordem Coríntia." },
          { id: "fc-2-4", question: "Quem eram os metecos?", answer: "Erangeiros livres instalados em Atenas que pagavam impostos especiais mas não tinham direitos políticos." }
        ],
        exercises: [
          {
            id: "ex-2-1",
            question: "Quem detinha poderes políticos reais de voto na assembleia democrática (Eclésia) de Atenas?",
            options: ["Todos os habitantes da cidade", "Apenas os cidadãos (proprietários masculinos, livres, filhos de pais atenienses)", "Qualquer pessoa estrangeira rica", "Apenas o imperador com direito de veto"],
            answerIndex: 1,
            hint: "Exclui mulheres, metecos e escravos.",
            justification: "Apenas os cidadãos tinham plenos direitos de voto direto na Eclésia. Isto correspondia a apenas cerca de 10% da população total da pólis."
          },
          {
            id: "ex-2-2",
            question: "Como se caracteriza a ordem arquitetónica grega com folhas de acanto na parte superior do pilar?",
            options: ["Ordem Jónica", "Ordem Dórica", "Ordem Romana", "Ordem Coríntia"],
            answerIndex: 3,
            hint: "É a ordem mais exuberante de todas.",
            justification: "A ordem coríntia é a mais decorativa e tardia das três ordens gregas, distinguindo-se pelo capitel decorado com vistosas folhas entalhadas de acanto."
          }
        ],
        reflection: {
          question: "Quais são as principais diferenças entre a democracia direta de Atenas e a nossa democracia representativa?",
          guidePoints: [
            "Atualmente, votamos em representantes (deputados) para que façam as leis por nós nas assembleias.",
            "Pensa sobre quem pode votar no nosso país hoje (universalmente a partir dos 18 anos) em comparação com Atenas.",
            "Reflete se um debate de braço no ar funcionaria num país com milhões de pessoas agrupados num só pátio."
          ]
        },
        trivia: [
          "Se os atenienses achassem que um cidadão era perigosamente ambicioso para a democracia, podiam votar para o exilar por dez anos usando pedaços de cerâmica gravados chamados 'óstrakon' (daí vem a nossa palavra 'ostracismo')!",
          "O Partenon guardava uma colossal estátua de Atena com 12 metros de altura, feita de ouro e marfim puro!"
        ],
        miniQuiz: [
          {
            question: "Onde se reuniam os cidadãos atenienses para votar a favor ou contra leis?",
            options: ["No Estádio Olímpico", "Na Colina da Pnyx (Eclésia)", "Nos banhos públicos", "No Egito Antigo"],
            answerIndex: 1
          },
          {
            question: "Estavam as mulheres e raparigas elegíveis para a cidadania em Atenas?",
            options: ["Sim", "Não, estavam excluídas de quaisquer direitos políticos", "Apenas se fossem viúvas ricas", "Apenas as que herdassem terras paternas"],
            answerIndex: 1
          }
        ]
      },
      {
        id: "sub-2-2",
        title: "O Mundo Romano no apogeu do Império",
        introductionText: "Entra nos segredos da expansão de Roma, o seu direito universal inovador, as obras públicas colossais e a Pax Romana.",
        contentSections: [
          {
            title: "O Império Romano e a Pax Romana",
            text: "No século II d.C., sob o governo dos imperadores, o Império Romano dominava uma vasta região de três continentes em torno do mar Mediterrâneo (chamado de 'Mare Nostrum' ou Nosso Mar). Este período de estabilidade interna, progresso económico e prosperidade ficou conhecido como Pax Romana."
          },
          {
            title: "O Urbanismo Romano",
            text: "O império era uma extensa rede de cidades imponentes construídas à imagem de Roma. As cidades contavam com estradas pavimentadas que ligavam todos os territórios, fóruns (praças de debates públicos), termas (banhos), aquedutos (abastecimento de águas), templos monumentais, anfiteatros (combate de gladiadores) e circos (corridas de quadrigas)."
          },
          {
            title: "A Romanização e a Administração",
            text: "A romanização foi a aceitação voluntária da cultura, língua (Latim), leis e hábitos dos romanos por parte dos povos conquistados. O Direito Romano (conjunto de leis escritas que ainda inspira muitas leis atuais) e a excelente administração em províncias e concelhos foram cruciais para a coesão imperial."
          }
        ],
        summary: [
          "O Império Romano estendeu-se por toda a bacia mediterrânica, assente numa rede organizada de estradas e comércio atrativo.",
          "A Pax Romana assegurou paz interna e desenvolvimento técnico sob controlo de governadores eficientes.",
          "O urbanismo romano dotou as províncias de aquedutos, pontes, termas, templos e teatros de grande qualidade.",
          "A romanização consistiu na assimilação cultural dos conquistados, fomentada pelo latim comum e pelo Direito Romano unificado."
        ],
        flashcards: [
          { id: "fc-2-5", question: "O que significa 'Mare Nostrum'?", answer: "'Nosso Mar', a designação romana para o mar Mediterrâneo, totalmente dominado por Roma." },
          { id: "fc-2-6", question: "O que foi a Romanização?", answer: "Processo de difusão e absorção da cultura, língua, direito e costumes de Roma junto dos povos conquistados pelo império." },
          { id: "fc-2-7", question: "Como funcionava o Direito Romano?", answer: "Estrutura judicial robusta de leis escritas aplicável de forma equitativa, servindo de base para o atual direito português." },
          { id: "fc-2-8", question: "Qual era a utilidade dos Aquedutos?", answer: "Canais elevados em arcadas de pedra usadas para transportar água potável de nascentes distantes diretamente para o centro das grandes cidades." }
        ],
        exercises: [
          {
            id: "ex-2-3",
            question: "Qual era o principal objetivo político da Pax Romana implementada no apogeu imperial?",
            options: ["Derrubar as muralhas defensivas", "Proteger as fronteiras e garantir estabilidade, segurança e comércio pacífico por todo o território", "Abolir a escravatura antiga", "Obrigar todos os povos a regressar ao nomadismo antigo"],
            answerIndex: 1,
            hint: "Pax significa Paz em latim.",
            justification: "A Pax Romana permitiu estabilizar as fronteiras, manter a ordem pública interna, unificar o comércio terrestre e marítimo e integrar politicamente os vencidos."
          },
          {
            id: "ex-2-4",
            question: "Qual destas línguas atuais deriva diretamente do Latim dos soldados romanos?",
            options: ["Bárbaro e Alemão", "Português", "Árabe Clássico", "Russo"],
            answerIndex: 1,
            hint: "Línguas românicas partilham a herança romana.",
            justification: "O Português é uma língua neolatina. A romanização fez as províncias da Península Ibérica deitar fora idiomas antigos a favor do latim vulgar adotado localmente."
          }
        ],
        reflection: {
          question: "Como é que as pontes e as estradas romanas ajudaram tanto a economia como a força militar do império?",
          guidePoints: [
            "Pensa na velocidade a que as legiões romanas marchavam em estradas pavimentadas para estancar rebeliões.",
            "Considera a facilidade com que mercadores transportavam vinhos e azeites pesados ao longo do ano.",
            "Observa vestígios locais no nosso país, como a Ponte Romana de Chaves ou as ruínas de Conímbriga."
          ]
        },
        trivia: [
          "As famosas estradas romanas eram tão duras e profundas que muitas delas duram passados 2000 anos! Tinham quatro camadas compactas de pedras, brita e cimento romano vulcânico.",
          "Diz-se que o Coliseu de Roma podia ser inundado ficticiamente de propósito para conduzir batalhas navais à vista de milhares de pessoas! Eram as chamadas 'Naumaquias'."
        ],
        miniQuiz: [
          {
            question: "Qual era a utilidade do Fórum romano?",
            options: ["Fábrica de pregos", "Praça pública central onde ocorria a vida política, comercial e judicial", "Estábulo para cavalos do imperador", "Cemitério de soldados imperiais"],
            answerIndex: 1
          },
          {
            question: "Quem administrava e governava as províncias romanas?",
            options: ["Pequenos reis metecos", "Governadores civis e generais designados por Roma", "Os proprietários agrícolas locais mais idosos", "O exército de guerreiros bárbaros"],
            answerIndex: 1
          }
        ]
      },
      {
        id: "sub-2-3",
        title: "Origem e difusão do Cristianismo",
        introductionText: "Compreende o percurso do Cristianismo desde a Palestina Romana, a sua perseguição à aprovação imperial e a unificação da Bíblia.",
        contentSections: [
          {
            title: "A Palestina Romana e Jesus de Nazaré",
            text: "No século I d.C., na província romana da Judeia (Palestina romana), nasceu o Cristianismo fundamentado nos ensinamentos de Jesus de Nazaré. Jesus defendia a igualdade de todos os homens perante Deus, o amor ao próximo, a caridade, o pacifismo e a crença de salvação na vida além-túmulo."
          },
          {
            title: "A Mensagem Cristã e a Bíblia",
            text: "A mensagem cristã era revolucionária e chocava com o estilo imperial porque se opunha ao culto divino do imperador e ao politeísmo romano. Os livros sagrados do Cristianismo integram a Bíblia: o Antigo Testamento (recolhendo a tradição judaica de criação e história hebreia) e o Novo Testamento (centrado nos quatro Evangelhos de Jesus, as cartas dos Apóstolos e o Apocalipse)."
          },
          {
            title: "Perseguição e Triunfo do Cristianismo",
            text: "Inicialmente, os cristãos sofreram perseguições selvagens, sendo lançados às feras em anfiteatros ou martirizados. No entanto, a mensagem de fraternidade e esperança espalhou-se rapidamente entre as classes mais pobres e escravos. Em 313 d.C., o Imperador Constantino promulgou o Édito de Milão, garantindo a liberdade religiosa. Em 380 d.C., o Édito de Tessalónica assinado pelo Imperador Teodósio tornou o Cristianismo a religião oficial fantástica de todo o Império Romano."
          }
        ],
        summary: [
          "O Cristianismo nasceu na Palestina romana, pregado por Jesus de Nazaré visando o monoteísmo e a caridade.",
          "A Bíblia organiza-se no Antigo Testamento (histórias dos hebreus) e Novo Testamento (histórias de Jesus).",
          "A doutrina cristã foi inicialmente perseguida pelo império devido à sua recusa em venerar o imperador divino.",
          "O Édito de Tessalónica de 380 d.C. declarou o Cristianismo a religião exclusiva de todos os cidadãos do império."
        ],
        flashcards: [
          { id: "fc-2-9", question: "O que pregava a doutrina de Jesus?", answer: "Pregava um monoteísmo radical, o amor fraterno, a caridade, a paz activa, a salvação espiritual e a igualdade humana." },
          { id: "fc-2-10", question: "Como se chama o imperador que deu liberdade de culto aos cristãos?", answer: "Imperador Constantino, através do Édito de Milão no ano de 313 d.C." },
          { id: "fc-2-11", question: "O que distingue o Antigo e o Novo Testamento?", answer: "O Antigo foca-se na aliança judaica e na criação. O Novo narra os ensinamentos de Jesus de Nazaré e a ação dos primeiros apóstolos." },
          { id: "fc-2-12", question: "O que continha o Édito de Tessalónica?", answer: "Foi o documento oficial de 380 d.C. que tornou o Cristianismo a religião oficial do Estado romano." }
        ],
        exercises: [
          {
            id: "ex-2-5",
            question: "Porque eram os cristãos perseguidos pelos romanos no início da sua difusão imperial?",
            options: ["Porque queriam fechar as rotas de comércio", "Porque se recusavam a adorar o Imperador como um deus e rejeitavam o politeísmo romano", "Porque apoiavam as invasões persas", "Porque não queriam pagar nenhuns impostos agrícolas"],
            answerIndex: 1,
            hint: "O imperador romano exigia sacrifícios divinos das províncias.",
            justification: "Ao recusarem participar nos jogos públicos e rituais sagrados civis dedicados a deuses romanos e ao imperador como divindade viva, os cristãos eram vistos como revoltosos perigosos para a segurança imperial."
          },
          {
            id: "ex-2-6",
            question: "Quem decretou o Cristianismo como religião exclusiva oficial de todo o Império Romano no ano 380 d.C.?",
            options: ["Imperador Nero", "Júlio César", "Imperador Teodósio", "Alexandre, o Grande"],
            answerIndex: 2,
            hint: "É a assinatura do Édito de Tessalónica.",
            justification: "O Imperador Teodósio, através do Édito de Tessalónica, baniu definitivamente o paganismo antigo e decretou que a Igreja Católica apoiava a coesão imperial oficial."
          }
        ],
        reflection: {
          question: "De que forma valores cristãos originais como 'todos os seres humanos são iguais' abalavam a sociedade estratificada de Roma?",
          guidePoints: [
            "Os patrícios romanos consideravam os escravos inferiores e sem direitos humanos.",
            "Reflete sobre o apelo que uma religião que trata os escravos com a mesma dignidade espiritual que reis tinha.",
            "Pensa sobre as consequências sociais de não haver distinção racial na entrada das igrejas primitivas."
          ]
        },
        trivia: [
          "Para escaparem à tortura e à morte secreta, os cristãos em Roma reuniam-se clandestinamente em cemitérios subterrâneos colossais chamados Catacumbas, esculpidos sob as colinas da cidade!",
          "O peixe era um símbolo secreto dos primeiros cristãos. Escreviam a palavra grega para peixe, IXTHYS (Ichthys), porque as letras iniciais significavam: 'Jesus Cristo, Filho de Deus, Salvador'."
        ],
        miniQuiz: [
          {
            question: "A Palestina romana, terra onde nasceu o Cristianismo, ficava em que extremo de Roma?",
            options: ["Extremo Oeste, na Ibéria", "Extremo Oriente, na bacia do Médio Oriente", "Ao lado do Coliseu de Roma", "Na Germânia fria"],
            answerIndex: 1
          },
          {
            question: "Como se chama o Édito que garantiu tolerância civil aos cristãos no ano 313 d.C.?",
            options: ["Édito de Constantino", "Édito de Milão", "Tratado de Tordesilhas", "Pacto de Aljubarrota"],
            answerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "tema-3",
    number: 3,
    title: "A Formação da Cristandade Ocidental e a Expansão Islâmica",
    subthemes: [
      {
        id: "sub-3-1",
        title: "A Europa dos séculos VI a IX",
        introductionText: "Entende o colapso de Roma sob as invasões bárbaras, o papel unificador crucial da Igreja Católica e a sobrevivência rural de subsistência.",
        contentSections: [
          {
            title: "O Fim do Império Romano do Ocidente",
            text: "No ano 476 d.C., enfraquecido por crises económicas e pela corrupção, o Império Romano do Ocidente sucumbiu perante as vagas e pressões dos povos bárbaros (germanos, francos, visigodos, ostrogodos). Este ano marca a transição clássica para a Idade Média."
          },
          {
            title: "A Fragmentação Política e as Invasões Bárbaras",
            text: "O vasto território de Roma fragmentou-se em múltiplos reinos bárbaros independentes. Em ambiente de pavor e pilhagens constantes, as cidades esvaziaram-se de habitantes que fugiram para as terras do campo (ruralização) onde se sentiam mais seguros."
          },
          {
            title: "O Papel Unificador da Igreja Católica",
            text: "Nesta Europa dividida e em conflitos diários, a Igreja Católica foi a única instituição civilizada que sobreviveu inteira. Converteu os reis bárbaros ao cristianismo e preservou a herança cultural, escrita e espiritual de Roma, desempenhando um papel unificador extraordinário."
          },
          {
            title: "Uma Economia de Subsistência",
            text: "O comércio de longa distância parou totalmente e a moeda quase desapareceu. Instalou-se uma economia de subsistência, baseada na agricultura básica de autoconsumo. Cada região rural consumia apenas aquilo que conseguia colher localmente."
          }
        ],
        summary: [
          "O Império Romano do Ocidente ruiu em 476 d.C. devido às sucessivas invasões de reinos bárbaros germanos.",
          "A desordem social motivou a ruralização da Europa e o isolamento feudal das populações.",
          "A Igreja Católica funcionou como único elo cultural comum e unificador de governantes e súbditos rústicos.",
          "Instaurou-se uma economia de subsistência, caraterizada pelo declínio mercantil e a ausência de circulação monetária."
        ],
        flashcards: [
          { id: "fc-3-1", question: "Em que ano ruiu o Império Romano do Ocidente?", answer: "No histórico ano de 476 d.C., marcando oficialmente o início da Idade Média." },
          { id: "fc-3-2", question: "Como se chama a fuga em massa das cidades para o campo?", answer: "Ruralização." },
          { id: "fc-3-3", question: "O que é uma economia de subsistência?", answer: "Economia ruralizada e sem trocas onde se produz unicamente o necessário para o autoconsumo diário e a sobrevivência." },
          { id: "fc-3-4", question: "Quem eram considerados os Bárbaros?", answer: "Por oposição aos latinos, eram os povos que viviam fora do Império Romano e que não falavam o latim legal nem partilhavam as leis de Roma." }
        ],
        exercises: [
          {
            id: "ex-3-1",
            question: "Quem desempenhou o principal papel federador e cultural de aproximação de povos na transição do século V para o VI d.C.?",
            options: ["O exército naval persa", "A Igreja Católica Romana", "Os artesãos de Atenas", "Os mercadores egípcios de trigo"],
            answerIndex: 1,
            hint: "Era liderada pelo Papa em Roma e pelos bispos no terreno.",
            justification: "A Igreja Católica estabilizou a governação medieval ao integrar e cristianizar os reis invasores, criando códigos morais e prestando ajuda de sobrevivência social."
          },
          {
            id: "ex-3-2",
            question: "O declínio urbano acelerado após as invasões bárbaras resultou de qual fenómeno demográfico?",
            options: ["Aumento maciço do turismo nas praias", "A ruralização das populações em busca de refúgio agrícola seguro", "Emigração imediata para a China", "Criação de novos monumentos gregos e teatros"],
            answerIndex: 1,
            hint: "As cidades despovoaram-se porque eram fáceis alvos de assaltantes bárbaros.",
            justification: "Sem fortificação fidedigna ou exército romano a proteger as vias da pólis, as populações concentraram-se em pequenos aglomerados campestres autónomos."
          }
        ],
        reflection: {
          question: "Como seria viver num mundo de subsistência sem comércio, sem lojas e onde tens de comer estritamente o que colhes no teu campo?",
          guidePoints: [
            "Visualiza as consequências de um ano de geadas ou secas sem poder comprar comida de fora.",
            "Pensa na falta de telemóveis, ferramentas ou roupas que não saibas manufaturar à mão.",
            "Reflete sobre como isto fortaleceu os laços locais com o senhor de terras mais forte vizinho."
          ]
        },
        trivia: [
          "Bárbaro era originalmente uma palavra inventada pelos gregos para imitar a forma errática como estrangeiros falavam: o dialeto parecia-lhes apenas um repetitivo 'bar-bar-bar' desconexo!",
          "Na Idade Média antiga, a escrita quase se perdeu por completo. Apenas um reduzido grupo de monges eruditos, chamados Monges Copistas, sabiam ler e passavam noites em claro em mosteiros frios a copiar livros em folhas de pergaminho."
        ],
        miniQuiz: [
          {
            question: "Que povo bárbaro fundou o reino que cristianizou as terras a sul da Gália?",
            options: ["Os Visigodos e Francos", "Os cartagineses", "Os atenienses exilados", "Os sumérios sumidos"],
            answerIndex: 0
          },
          {
            question: "No período do século VI d.C., as trocas comerciais eram dominadas por...",
            options: ["Grandes navios repletos de moedas de prata", "A ausência de trocas comerciais fortes e regresso à troca direta pontual", "Uma moeda universal para todo o mundo", "Vendas eletrónicas agrícolas"],
            answerIndex: 1
          }
        ]
      },
      {
        id: "sub-3-2",
        title: "O Mundo Muçulmano em expansão",
        introductionText: "Conhece a génese do Islão na Península Arábica, o papel de Maomé e do Corão, e o brilhantismo cultural da sua rápida expansão.",
        contentSections: [
          {
            title: "O Nascimento do Islão: Maomé",
            text: "No século VII d.C., na Península Arábica, surgiu uma nova religião monoteísta: o Islão. O seu fundador, Maomé, considerou-se o último profeta do único Deus (Alá). Em 622 d.C., Maomé teve de fugir de Meca para Medina devido à hostilidade dos mercadores pagãos. Este episódio, conhecido como a Hégira, marca o início do calendário muçulmano."
          },
          {
            title: "O Corão e as Regras de Fé",
            text: "O livro sagrado dos muçulmanos é o Corão (ou Alcorão). Nele estão inscritos os cinco pilares fundamentais da fé islâmica: a profissão de fé (não há mais divindades além de Alá), orar cinco vezes ao dia virado para Meca, jejuar durante o mês do Ramadão, jejuar e dar esmolas aos desfavorecidos e peregrinar a Meca pelo menos uma vez na vida."
          },
          {
            title: "A Expansão Islâmica",
            text: "Após a morte de Maomé em 632 d.C., os califas lideraram uma expansão militar fulgurante que conquistou o Médio Oriente, Norte de África e, em 711 d.C., quase toda a Península Ibérica ao vencer os visigodos cristãos (Batalha de Guadalete)."
          },
          {
            title: "O Esplendor Cultural Islâmico",
            text: "Os muçulmanos legaram avanços notáveis: na matemática (introduziram os algarismos árabes, a álgebra e o número zero de origem indiana), astronomia, medicina inovadora, geografia detalhada e agricultura inovadora (com azenhas, rodas de água e novos frutos como a laranja, o pêssego e o limão)."
          }
        ],
        summary: [
          "O Islão foi estabelecido por Maomé na Arábia e expandiu-se com base nos mandatos expressos no Alcorão.",
          "O calendário islâmico começa no marco histórico da Hégira (622 d.C.) com a fuga para Medina.",
          "Os muçulmanos entraram na Península Ibérica no ano 711 d.C., derrotando reis visigodos fraturados.",
          "A ciência e botânica devem muito e têm grandes heranças muçulmanas em Portugal, como palavras que começam por 'AL' (alface, algarismo, alcachofra)."
        ],
        flashcards: [
          { id: "fc-3-5", question: "O que foi a Hégira?", answer: "A fuga histórica de Maomé de Meca para Medina no ano 622 d.C., que inicia a contagem do calendário do Islão." },
          { id: "fc-3-6", question: "Como se chama o Livro Sagrado do Islão?", answer: "O Corão (ou Alcorão)." },
          { id: "fc-3-7", question: "Em que ano entraram os Almorávidas e Muçulmanos na Península Ibérica?", answer: "No precoce ano de 711 d.C." },
          { id: "fc-3-8", question: "Menciona três contributos científicos da cultura islâmica.", answer: "Os algarismos árabes (incluindo o zero), técnicas cirúrgicas inovadoras, instrumentos náuticos (astrolábio) e álgebra." }
        ],
        exercises: [
          {
            id: "ex-3-3",
            question: "Como se chama a maior figura de profecia e fundação da religião islâmica?",
            options: ["Jesus Cristo", "Maomé", "Constantino", "Faraó de Gizé"],
            answerIndex: 1,
            hint: "Nascido em Meca e pregava a palavra de Alá.",
            justification: "Maomé é considerado o último e mais importante emissário de Alá para espalhar o monoteísmo sobre o mundo árabe antigo."
          },
          {
            id: "ex-3-4",
            question: "Muitas palavras portuguesas com origem no árabe iniciam-se com qual prefixo?",
            options: ["O prefixo 'OM'", "O prefixo 'AL' (ex: alfaiate, alface, albufeira)", "O prefixo 'RE'", "Terminam sempre em '-ix'"],
            answerIndex: 1,
            hint: "Equivale ao artigo definido 'o' ou 'a'.",
            justification: "Durante séculos de convivência linguística na Península Ibérica, o português herdou centenas de palavras iniciadas por 'Al-' (artigo definido em árabe)."
          }
        ],
        reflection: {
          question: "Que pontes científicas e agrícolas foram criadas com a coabitabilidade de cristãos e muçulmanos no território que hoje é Portugal?",
          guidePoints: [
            "Pensa em como a medicina e a matemática avançaram com textos árabes traduzidos na época.",
            "Considera a criação de novos pomares e sistemas de rega eficientes nos campos do Alentejo e Algarve.",
            "Aprecia o valor cultural da tolerância religiosa mútua no Gharb Al-Andalus."
          ]
        },
        trivia: [
          "A nossa palavra 'garrafa' vem diretamente do árabe 'garâbâ'. Da mesma forma, 'açúcar' vem de 'as-sukkar' e 'xarope' de 'šarâb'!",
          "Os muçulmanos construíram maravilhosas bibliotecas públicas com milhares de livros, numa época em que grandes castelos de reis cristãos só possuíam meia dúzia de manuscritos!"
        ],
        miniQuiz: [
          {
            question: "Qual destas capitais foi um grande polo literário e científico muçulmano na Europa Ibérica?",
            options: ["Córdova", "Atenas antiga", "Roma clássica", "Egito ptolomaico"],
            answerIndex: 0
          },
          {
            question: "Quantas vezes por dia reza um crente muçulmano devoto?",
            options: ["Uma vez por semana", "Duas vezes ao dia", "Cinco vezes ao dia", "Dez vezes ao dia"],
            answerIndex: 2
          }
        ]
      },
      {
        id: "sub-3-3",
        title: "A Sociedade Europeia dos séculos IX a XII",
        introductionText: "Desvenda os meandros do Feudalismo medieval, as três ordens de privilégio (Clero, Nobreza, Povo) e os deveres recíprocos de suserania e vassalagem.",
        contentSections: [
          {
            title: "O Aparecimento do Feudalismo",
            text: "No fim do século IX d.C., novas avalanchas de invasões violentas (Normandos, Vikings, Húngaros e piratas Sarracenos) espalharam o terror sobre os reinos europeus. Como os reis medievais tinham poucos recursos para defender todo o território, cederam as suas terras (os feudos) a nobres poderosos a troco de apoio militar constante. Nasceu assim o Feudalismo."
          },
          {
            title: "A Sociedade Feudal e Variada: As Três Ordens",
            text: "A sociedade medieval estava dividida rigidamente em três ordens com funções muito desiguais. A estrutura tinha dois estratos privilegiados (isentos de impostos e sujeitos a leis próprias): o Clero ('os que rezam', mantendo a salvação espiritual e ensinando elites) e a Nobreza ('os que combatem', donos de terras que guerreavam e protegiam). Na base ficava o Terceiro Estado ou Povo ('os que trabalham', constituído por camponeses livres, servos, e artesãos que sustentavam toda a estrutura com impostos elevados e trabalho escasso)."
          },
          {
            title: "A Relação de Vassalagem",
            text: "Os guerreiros nobres criaram laços de dependência mútua formalizados na cerimónia de homenagem e juramento de fidelidade. O Suserano (senhor mais forte) concedia terras ou direitos. O Vassalo (senhor recíproco) jurava lealdade, auxílio militar em batalhas e conselho no tribunal feudal."
          }
        ],
        summary: [
          "O Feudalismo surgiu pela necessidade urgente de proteção face às pilhagens de vikings e sarracenos.",
          "A sociedade partilhava três estados desiguais: os que oravam (clero), os que lutavam (nobreza) e os que cultivavam (povo).",
          "O clero e a nobreza eram ordens privilegiadas, proprietárias e isentas de pagamentos feudais.",
          "As alianças eram seladas por cerimónias de vassalagem em castelos e feudos medievais."
        ],
        flashcards: [
          { id: "fc-3-9", question: "Como se definia o Vassalo?", answer: "Nobre que jurava lealdade e ajuda militar ao seu suserano a troco de um feudo ou castelo de guarda." },
          { id: "fc-3-10", question: "Menciona a função social atribuída ao Clero.", answer: "Assegurar a oração, a salvação da alma coletiva e guardar o património literário das escolas de monges." },
          { id: "fc-3-11", question: "Quem eram os Servos da Gleba?", answer: "Camponeses sem liberdade civil que estavam acorrentados e presos à terra senhorial, não a podendo abandonar sem autorização do senhor feudo." },
          { id: "fc-3-12", question: "Em que consistia a cerimónia de Homenagem?", answer: "Ritual solene público onde o vassalo ajoelhava ante o suserano, colocava as mãos nas suas, beijava-o e jurava fidelidade absoluta sobre relíquias sagradas." }
        ],
        exercises: [
          {
            id: "ex-3-5",
            question: "Quem eram os grupos sociais privilegiados que detinham as terras e estâncias militares na Idade Média?",
            options: ["Apenas a Burguesia nascente", "O Clero e a Nobreza", "Os servos e camponeses da aldeia", "Os metecos do comércio exterior"],
            answerIndex: 1,
            hint: "Compunham o topo judicial e militar, represents por cavaleiros e bispos.",
            justification: "Clero e Nobreza gozavam de isenção de impostos feudais, cobravam rendas aos camponeses e detinham o monopólio da força armada medieval."
          },
          {
            id: "ex-3-6",
            question: "Qual destas ameaças do século IX estimulou os povos medievais a refugiar-se nos castelos senhoriais armados?",
            options: ["As invasões dos Romanos antigos", "Os ataques ferozes de Vikings, Normandos e piratas Sarracenos", "A descoberta do mar do Brasil", "A expansão das fábricas manuais"],
            answerIndex: 1,
            hint: "Navegadores ferozes em barcos de dragão (Drakkar).",
            justification: "As rotas rápidas e ataques relâmpago de barcos Vikings assustavam vilas ribeirinhas desarmadas que dependiam então da cavalaria protetora de grandes senhores locais."
          }
        ],
        reflection: {
          question: "Atualmente temos leis iguais para todos. Como defenderias os teus direitos se vivesses numa sociedade medieval assente na pura desigualdade jurídica à nascença?",
          guidePoints: [
            "Se nascesses servo, estarias condenado a ser camponês analfabeto para toda a vida.",
            "Considera que um camponês acusado por um nobre não dispunha de advogados comuns ou júris imparciais.",
            "Reflete sobre os custos materiais exorbitantes para um plebeu comprar uma armadura pesada de cavaleiro."
          ]
        },
        trivia: [
          "As armaduras de combate dos cavaleiros nobres eram tão pesadas (cerca de 25 a 30 kg!) que se um guerreiro caísse ao chão, precisava de escudeiros para se conseguir reerguer depressa de forma rápida!",
          "No ano 1000, o açúcar de cana era tão raro sobre mesas medievais que era comprado estritamente em farmácias como um remédio curativo caríssimo!"
        ],
        miniQuiz: [
          {
            question: "Como se chamava a terra ou direito concedido pelo Suserano ao seu Vassalo?",
            options: ["Eclésia", "Feudo", "Papiro", "Concelho"],
            answerIndex: 1
          },
          {
            question: "A maior parte da população medieval pertencia ao estrato de:",
            options: ["Clero", "Nobreza", "Povo ou Terceiro Estado", "Governadores civis de Roma"],
            answerIndex: 2
          }
        ]
      },
      {
        id: "sub-3-4",
        title: "A Península Ibérica nos séculos IX a XII",
        introductionText: "Revive a vibrante Reconquista Cristã, a concessão do Condado Portucalense, o carisma batalhador de D. Afonso Henriques e o milagre da independência de Portugal.",
        contentSections: [
          {
            title: "A Reconquista Cristã",
            text: "Nas montanhas das Astúrias, no norte peninsular, iniciou-se o movimento militar da Reconquista Cristã promovido por reinos do norte que lutavam para recuperar as terras outrora dominadas pelos muçulmanos desde 711 d.C."
          },
          {
            title: "A Formação do Condado Portucalense",
            text: "Em 1096 d.C., como recompensa pela gloriosa ajuda nas lutas contra os mouros, D. Afonso VI de Leão e Castela concedeu ao cavaleiro cruzado francês D. Henrique o governo do Condado Portucalense (um sub-feudo a norte do rio Mondego) e a mão de D. Teresa, sua filha bastarda."
          },
          {
            title: "D. Afonso Henriques e o Tratado de Zamora",
            text: "O filho de D. Henrique, D. Afonso Henriques, herdou a soberania e lutou resolutamente em duas frentes: contra as hostes da sua mãe, D. Teresa (Batalha de S. Mamede, em Guimarães, em 1128 d.C., para controlar o condado) e contra os reis de Leão. Em 1139 d.C., após vencer a fabulosa Batalha de Ourique contra chefes muçulmanos, D. Afonso Henriques foi aclamado Rei de Portugal. Em 1143 d.C., obteve o Tratado de Zamora reconhecido por D. Afonso VII onde a diplomacia declarava oficialmente a independência portuguesa."
          },
          {
            title: "A Bula Manifestis Probatum",
            text: "A soberania total e reconhecimento internacional do novo reino português só ficou definitivamente selada em 1179 d.C., ano em que o Papa Alexandre III emitiu a solene Bula Manifestis Probatum declarando D. Afonso Henriques como rei soberano independente de Portugal diante de todo o mundo católico."
          }
        ],
        summary: [
          "A Reconquista Cristã consistiu no contra-ataque de reinos do norte para expulsar o poder muçulmano peninsular.",
          "D. Henrique recebeu de prenda o Condado Portucalense em 1096 d.C. para auxiliar o rei leonês.",
          "D. Afonso Henriques alcançou a governação do condado em S. Mamede (1128) e declarou-se rei após Ourique (1139).",
          "O Tratado de Zamora (1143) e a bula papal Manifestis Probatum (1179) cristalizaram Portugal como reino independente."
        ],
        flashcards: [
          { id: "fc-3-13", question: "O que desencadeou a Batalha de S. Mamede em 1128?", answer: "O confronto liderado por D. Afonso Henriques contra os exércitos da sua própria mãe, D. Teresa, e nobres galegos pelo controlo soberano do condado português." },
          { id: "fc-3-14", question: "Qual é a relevância do Tratado de Zamora de 1143?", answer: "É o tratado onde D. Afonso VII reconhece formalmente D. Afonso Henriques como rei autónomo independente." },
          { id: "fc-3-15", question: "Quem eram os pais fundadores de D. Afonso Henriques?", answer: "O conde D. Henrique de Borgonha e a condessa D. Teresa de Leão." },
          { id: "fc-3-16", question: "Como se chama o documento pontifício de 1179 d.C.?", answer: "Bula Manifestis Probatum, que colocou Portugal na comunidade legal mundial medieval sob amparo do Papa." }
        ],
        exercises: [
          {
            id: "ex-3-7",
            question: "Quem foi o herói nacional consagrado como o primeiro histórico Rei de Portugal?",
            options: ["D. Afonso II, o Gordo", "D. Henrique de Borgonha", "D. Afonso Henriques (O Conquistador)", "D. Dinis, o Lavrador"],
            answerIndex: 2,
            hint: "Filho único do conde D. Henrique e D. Teresa, coroado informalmente por soldados em Ourique.",
            justification: "D. Afonso Henriques regeu o condado com perícia armada, conquistou terras valiosas aos mouros e unificou a lealdade da aristocracia local no novo Trono."
          },
          {
            id: "ex-3-8",
            question: "Que importante batalha de 1128 d.C., junto ao Castelo de Guimarães, marcou o início do governo pessoal de D. Afonso Henriques?",
            options: ["Batalha de Ourique", "Batalha de Aljubarrota", "Batalha de S. Mamede", "Batalha de Guadalete"],
            answerIndex: 2,
            hint: "O herói lutou energicamente contra a fação diplomática da sua mãe.",
            justification: "Ao derrotar herdeiros da nobreza galega em S. Mamede, D. Afonso Henriques impôs-se líder indiscutível e independente das influências feudais de Leão."
          }
        ],
        reflection: {
          question: "Porque precisavam os reinos medievais do consentimento expresso do Papa de Roma para serem considerados nações reais oficiais?",
          guidePoints: [
            "O Papa era a autoridade judicial máxima em assuntos de fronteiras e alianças de reinos cristãos ocidentais.",
            "Sem o cunho do Papa, um rei rival poderia invadir Portugal clamando que as nossas terras pertenciam legitimamente a Leão.",
            "O selo papal afugentava intromissões porque quem invadisse Portugal, incorria na fúria espiritual e excomunhão católica."
          ]
        },
        trivia: [
          "D. Afonso Henriques era incrivelmente alto para a sua época! O seu esqueleto mostra que media quase 1,80 metros de altura, quando a maioria dos homens medievais mal chegava aos 1,60 metros!",
          "Guimarães é apelidada de 'Berço da Nação' porque foi precisamente lá que decorreu a Batalha de S. Mamede e onde se fixaram os primeiros quartéis da corte."
        ],
        miniQuiz: [
          {
            question: "Qual era a fronteira a sul inicial do Condado Portucalense antes de Afonso Henriques?",
            options: ["O rio Mondego (perto de Coimbra)", "O Mar Mediterrâneo, em Sagres", "O Rio Douro apenas", "O rio Tejo, em Lisboa"],
            answerIndex: 0
          },
          {
            question: "A bula Manifestis Probatum de 1179 d.C. foi expedida por que autoridade?",
            options: ["Pelo rei de Castela", "Pelo califa de Córdova", "Pelo Papa Alexandre III", "Pelas Cortes de Lamego"],
            answerIndex: 2
          }
        ]
      }
    ]
  },
  {
    id: "tema-4",
    number: 4,
    title: "Portugal no Contexto Europeu dos Séculos XII a XIV",
    subthemes: [
      {
        id: "sub-4-1",
        title: "Desenvolvimento económico, relações sociais e poder político",
        introductionText: "Entra na agitação medieval das feiras e mercados, a autonomização jurídica dos Concelhos plebeus, as Cortes de representação e o brilho portuário de Lisboa.",
        contentSections: [
          {
            title: "Desenvolvimento Económico e Crescimento das Cidades",
            text: "Nos séculos XII a XIV, a Europa e Portugal viveram uma expansão económica notável. Com as fronteiras do reino portuguesas consolidadas, a agricultura e as pescas cresceram imenso. O comércio interno multiplicou-se nas Feiras e Mercados, locais periódicos onde mercadores de todas as regiões vendiam artesanato, gado e cereais com isenção ou regalias fiscais (Feiras Francas)."
          },
          {
            title: "O Nascimento dos Concelhos e Forais",
            text: "O crescimento populacional e mercantil alimentou uma nova e ativa classe social: a Burguesia. Para incentivar o povoamento e a defesa militar de áreas estratégicas, os reis portugueses concederam cartas de Foral a comunidades livres de homens. Criaram-se assim os Concelhos (municípios geridos por vizinhos ou homens-bons), libertando os burgueses e camponeses do jugo abusivo de senhores medievais do clero ou da nobreza."
          },
          {
            title: "O Poder Político e as Cortes",
            text: "Inicialmente, o rei contava apenas com a Cúria Régia (um órgão de nobres e bispos). Contudo, em 1254 d.C., nas Cortes de Leiria fundadas pelo rei D. Afonso III, participaram pela primeira vez representantes do Povo (os juízes e procuradores dos concelhos), demonstrando o aumento substancial do poder económico burguês."
          },
          {
            title: "Lisboa Medieval: Centro Portuário",
            text: "Lisboa tornou-se um importante porto atlântico internacional, ligando as mercadorias mediterrânicas do sul de Itália com os portos da Flandres e do Mar do Norte, atraindo mercadores alemães, flamengos e genoveses."
          }
        ],
        summary: [
          "O desenvolvimento mercantil português estimulou o aparecimento de feiras francas periódicas e o enriquecimento burguês.",
          "As Cartas de Foral instituíam Concelhos independentes dotados de magistrados locais ('homens-bons').",
          "O rei D. Afonso III legitimou o poder do povo e concelhos convocando representantes nas históricas Cortes de Leiria em 1254.",
          "Lisboa expandiu-se como entreposto fluvial e internacional graças ao florescer marítimo atlântico."
        ],
        flashcards: [
          { id: "fc-4-1", question: "O que é uma Carta de Foral?", answer: "Documento oficial concedido pelo rei ou senhor feudal que atribuía direitos, isenções fiscais e autonomia administrativa a um concelho." },
          { id: "fc-4-2", question: "Quem eram denominados 'homens-bons'?", answer: "Elite plebeia de proprietários e comerciantes que dirigiam a assembleia municipal administrativa dos concelhos medievais." },
          { id: "fc-4-3", question: "Qual a novidade histórica das Cortes de Leiria de 1254 d.C.?", answer: "O pioneirismo político de integrar cidadãos comuns e representantes da burguesia popular nas decisões e cortes legislativas." },
          { id: "fc-4-4", question: "Como se caracterizava uma Feira Franca?", answer: "Mercado sazonal nobre e livre de taxas que incentivava mercadores e camponeses a viajar para trocar bens sem sobressaltos governamentais." }
        ],
        exercises: [
          {
            id: "ex-4-1",
            question: "Quem administrava e governava localmente as terras organizadas sob o regime de Concelho autónomo?",
            options: ["Os cavalheiros bárbaros", "Os 'homens-bons' e juízes eleitos pelos concelhos", "O Papa de Roma a partir de bulas", "Apenas militares estrangeiros convocados em corte"],
            answerIndex: 1,
            hint: "Nobres perdiam o foro senhorial dentro das ruelas dos concelhos autónomos.",
            justification: "As cartas de foral criavam concelhos autárquicos legislados por juízes e representantes vizinhos, enfraquecendo a vassalagem face à aristocracia de sangue."
          },
          {
            id: "ex-4-2",
            question: "Que importante novidade política introduziu D. Afonso III nas Cortes de Leiria de 1254?",
            options: ["Proibição total de falar latim", "A admissão e inclusão de representantes do Povo (Burguesia e Concelhos) ao lado de clero e nobreza", "A demarcação de estradas romanas", "A eleição de um novo papa português"],
            answerIndex: 1,
            hint: "Até então, apenas guerreiros e clero decidiam as leis reais na cúria régia.",
            justification: "D. Afonso III aproximou-se da burguesia e deu representação política ao povo comum nas cortes, buscando obter novos empréstimos e apoio contra privilégios extremados."
          }
        ],
        reflection: {
          question: "Como o direito de eleger juízes municipais locais mudou a autoconfiança de camponeses livres face ao terror feudal?",
          guidePoints: [
            "Considera a proteção que um foral dava ao proibir cobranças aleatórias de senhores.",
            "Reflete sobre o surgimento de uma mentalidade focada no trabalho urbano e mercantil em vez do nascimento estático de sangue.",
            "Observa a herança histórica do atual poder local e juntas de freguesia portuguesas."
          ]
        },
        trivia: [
          "Em concelhos de montanha, se um criminoso fugisse para dentro do concelho, a lei do foral garantia 'honra' territorial e impedia senhores de capturar o habitante sem autorização prévia por juízes concelhios!",
          "Lisboa cresceu tanto pelas trocas de especiarias que D. Dinis criou em 1293 a Bolsa de Mercadores, um dos primeiros acordos de seguros marítimos do planeta!"
        ],
        miniQuiz: [
          {
            question: "Que nome tinham as feiras medievais isentas de tarifas e taxas ao fisco?",
            options: ["Feiras Clérigas", "Feiras Francas", "Cúrias Régias", "Concelhos rurais"],
            answerIndex: 1
          },
          {
            question: "Por qual motivo estratégico os reis concediam as Cartas de Foral?",
            options: ["Para queimar as aldeias", "Para impulsionar a colonização de camponeses livres e proteção militar de zonas de fronteira", "Para agradar às potências bárbaras vizinhas", "Para abolir os cultos cristãos"],
            answerIndex: 1
          }
        ]
      },
      {
        id: "sub-4-2",
        title: "Cultura portuguesa face aos modelos europeus",
        introductionText: "Encanta-te com as canções trovadoristas líricas portuguesas, o nascimento da Universidade de Coimbra de D. Dinis e os mistérios dos estilos Românico e Gótico.",
        contentSections: [
          {
            title: "O Ensino e as Primeiras Universidades",
            text: "Durante muitos séculos, as poucas escolas limitavam-se a mosteiros e sés católicas. Porém, em 1290 d.C., o rei culto D. Dinis assinou a fundação dos Estudos Gerais em Lisboa, que mais tarde se mudaram para Coimbra, nascendo a Universidade de Coimbra. Ensinava-se aí Direito Romano, Medicina, Teologia e Artes Gerais."
          },
          {
            title: "A Cultura Popular, Lendas e o Trovadorismo",
            text: "A par da cultura escrita cleriga, floresceu uma extraordinária cultura popular em língua Galaico-Portuguesa. Os Trovadores (muitas vezes os próprios reis, como D. Dinis) compunham Cantigas de Amigo, de Amor e de Escárnio e Maldizer, partilhadas por jograis ambulantes em praças e castelos imperiais com música flautada."
          },
          {
            title: "Estilos de Arquitetura: Do Românico ao Gótico",
            text: "A arquitetura portuguesa integrou modelos estéticos europeus. Na época da Reconquista (séculos XI-XII), ergueu-se o Românico: igrejas maciças, fortificadas como castelos defensivos, de tetos de abóbada espessa de pedra, poucas janelas (gerando penumbra interior) e arco de volta perfeita redondo (ex: Sé Velha de Coimbra e Sé de Lisboa). Mais tarde, a partir do século XIII, impôs-se o elegante Gótico: catedrais verticais esguias e iluminadas, com elegantes vitrais coloridos, arcos quebrados ogivais em bico e arcobotantes delicados exteriores."
          }
        ],
        summary: [
          "D. Dinis fundou em 1290 a primeira universidade nacional (Estudos Gerais), dotando o reino de juristas e médicos literatos.",
          "O Trovadorismo musical deu vazão a poesias líricas cantadas em galaico-português por cortes e vilas rústicas ou feiras.",
          "O Românico desenhou templos amuralhados e escuros de arco de volta perfeita e paredes muito robustas.",
          "O Gótico espalhou a opulência dos vãos ogivais, tetos altos, rosáceas e imensos vitrais solares repletos de luz."
        ],
        flashcards: [
          { id: "fc-4-5", question: "O que distinguiu a universidade de D. Dinis?", answer: "Foi a primeira grande escola de estudos laica com professores pagos pelo próprio monarca para ensinar carreiras de prestígio no reino." },
          { id: "fc-4-6", question: "Como se caracterizam as Cantigas de Amigo?", answer: "Poemas cantados na perspetiva de uma jovem rapariga do campo que chora e anseia pelo regresso do seu amado num ambiente rústico do mar ou monte." },
          { id: "fc-4-7", question: "Qual o traço principal de portas e arcadas Românicas?", answer: "O arco de volta perfeita, isto é, perfeitamente em semicírculo redondo." },
          { id: "fc-4-8", question: "O que trouxeram os vitrais Góticos?", answer: "Paredes de vidro multicolorido divino que iluminavam e ensinavam as narrativas bíblicas às populações plebeias analfabetas." }
        ],
        exercises: [
          {
            id: "ex-4-3",
            question: "Qual o rei poeta que legislou a plantação do Pinhal de Leiria e instituiu as Universidades Estudos Gerais portuguesas?",
            options: ["D. Sancho II", "D. Henrique o Navegador", "D. Afonso Henriques", "D. Dinis, o Trovador"],
            answerIndex: 3,
            hint: "Escreveu dezenas de cantigas de amor líricas que hoje lemos no 10.º ano.",
            justification: "D. Dinis promoveu a escrita em português em detrimento do latim puro e mandou erguer em 1290 o polo fundador que daria lugar à Universidade de Coimbra."
          },
          {
            id: "ex-4-4",
            question: "Se caminhares diante de uma catedral românica antiga, vais encontrar muros estreitos caraterizados por qual destas opções?",
            options: ["Vitrais transparentes gigantescos revestindo as paredes", "Muros colossais fortificados de pedra espessa com poucas aberturas e arcos de volta perfeita redondos", "Paredes construídas em papiro pintado", "Ausência total de tetos de pedra"],
            answerIndex: 1,
            hint: "Parece um forte militar de defesa com frestas de tiro.",
            justification: "O estilo Românico surgiu num período de guerras ativas e assaltos senhoriais. As igrejas precisavam de servir de refúgio protetor comunitário indestrutível."
          }
        ],
        reflection: {
          question: "De que forma a luz abundante do novo estilo Gótico mudava a sensação de divindade de um crente medieval em relação à penumbra obscura do estilo Românico?",
          guidePoints: [
            "No Românico, a penumbra incitava à interioridade, intimidade assustadora e temor do Juízo Final divinizado.",
            "No Gótico, a catedral esticava-se no ar apontando ao céu iluminado por raios de sol multicores que traduziam o amor divino caloroso.",
            "Aprecia as grandes catedrais góticas, como o Mosteiro da Batalha (estilo gótico tardio / manuelino)."
          ]
        },
        trivia: [
          "D. Dinis compôs dezenas de trovas líricas espetaculares. Uma das mais famosas pergunta: 'Flores do verde pino, se sabedes novas do meu amigo? Onde dizedes que é?'",
          "Diz-se que a mudança da Universidade de Coimbra para a colina de Coimbra motivou altercações colossais ao longo dos séculos entre estudantes de direito (os 'futricas') e habitantes de profissão citadina local!"
        ],
        miniQuiz: [
          {
            question: "Quem cantava e declamava poemas de trovas com mímica nas tabernas e pátios de feiras?",
            options: ["Os monges copistas", "Os jograis e nobres trovadores", "O imperador romano escandalizado", "Os cavaleiros cruzados de armadura"],
            answerIndex: 1
          },
          {
            question: "O estilo de arte do Gótico caracteriza-se visualmente por:",
            options: ["Construções de pedra rústica baixas e circulares", "Arcos ogivais em bico, rosáceas deslumbrantes e vitrais de intensa luz colorida", "Inexistência de portas de entrada nas sés", "Pinturas de caçadores em grutas primitivas"],
            answerIndex: 1
          }
        ]
      },
      {
        id: "sub-4-3",
        title: "Crises e revolução no século XIV",
        introductionText: "Revive a calamidade da Peste Negra, a escassez alimentar do século XIV e a revolução social heróica que salvou Portugal da anexação por Castela na Batalha de Aljubarrota.",
        contentSections: [
          {
            title: "A Trindade da Crise do Século XIV",
            text: "O século XIV europeu ficou marcado por profundas catástrofes: Más colheitas sucessivas devido a chuvas torrenciais (fomes generalizadas); Guerras destruidoras; e, sobretudo, a devastadora epidemia da Peste Negra de 1348 d.C., uma doença mortal vinda do Oriente que devastou mais de um terço de toda a população de Portugal e da Europa."
          },
          {
            title: "A Crise Política e Dinástica de 1383-1385",
            text: "Em 1383 d.C., o rei D. Fernando faleceu sem deixar filhos varões herdeiros do trono de Portugal. A sua única filha, D. Beatriz, casada com o rei D. João I de Castela, herdava formalmente os domínios. A rainha viúva D. Leonor Teles assumiu a regência ruidosa e impopular. Instaurou-se o medo terrível de que Portugal perdesse a independência e fosse governado por Castela."
          },
          {
            title: "Os Grupos Sociais Divididos",
            text: "A sociedade fraturou-se: a maior parte do Clero e da alta Nobreza apoiou D. Beatriz e Castela (com medo de perder feudos antigos). Em oposição, a Burguesia enriquecida, os pequenos artesãos camponeses e o povo comum das cidades lideraram a resistência leal. Nomearam para seu regente supremo e defensor militar D. João, Mestre de Avis (filho bastardo do antigo rei D. Pedro I)."
          },
          {
            title: "A Revolução Nacional: Aljubarrota e D. João I",
            text: "D. João, Mestre de Avis, foi solenemente aclamado Rei de Portugal (D. João I) nas Cortes de Coimbra de 1385, graças ao sublime discurso jurídico do Dr. João das Regras. Para contrariar a resposta armada castelhana, o Condestável D. Nuno Álvares Pereira comandou o novo exército português na lendária Batalha de Aljubarrota em 14 de agosto de 1385. Utilizando a inovadora 'tática do quadrado' de infantaria inglesa, os portugueses venceram a numerosa cavalaria castelhana, salvando definitivamente a independência de Portugal."
          }
        ],
        summary: [
          "O século XIV registou crises de tripla dimensão: a terrível fome sanitária, a destruidora guerra civil e a epidemia de Peste Negra em 1348.",
          "A morte de D. Fernando em 1383 originou um vazio régio e o risco de incorporação total em Castela.",
          "O povo miúdo e a burguesia lisboeta elegeram D. João, Mestre de Avis, como líder nobre da defesa lusa.",
          "A coroação de D. João I (Cortes de Coimbra) e a heróica Batalha de Aljubarrota (1385) cimentaram a dinastia lusa de Avis."
        ],
        flashcards: [
          { id: "fc-4-9", question: "Como se dissipou a Peste Negra de 1348?", answer: "Foi uma terrível epidemia bacteriana transmitida pelas pulgas das ratazanas pretas provenientes dos barcos mercantis do Oriente." },
          { id: "fc-4-10", question: "Quem foi o Condestável militar herói nacional de 1385?", answer: "D. Nuno Álvares Pereira, comandante carismático das hostes portugueses beatificado hoje pelo povo como Santo Condestável." },
          { id: "fc-4-11", question: "Qual a novidade tática aplicada em Aljubarrota?", answer: "A Tática do Quadrado (ou dos fossos), inspirada nas técnicas inglesas, onde soldados populares de infantaria neutralizam a superior cavalaria pesada inimiga." },
          { id: "fc-4-12", question: "Que nova dinastia real começou após as Cortes de Coimbra?", answer: "A Dinastia de Avis (Segunda Dinastia lusa de reis navegadores)." }
        ],
        exercises: [
          {
            id: "ex-4-5",
            question: "Quem governou provisoriamente o reino de Portugal de forma muito impopular como regente após a morte de D. Fernando em 1383?",
            options: ["D. Teresa de Borgonha", "D. Leonor Teles (A Flor de Altura)", "D. Nuno Álvares Pereira, armada", "O Dr. João das Regras"],
            answerIndex: 1,
            hint: "Mãe de D. Beatriz, odiada pelos mercadores e povo de Lisboa.",
            justification: "D. Leonor Teles assumiu a regência ruidosa favorecendo as pretensões castelhanas de submeter a coroa e exílio à nobreza contrária do país."
          },
          {
            id: "ex-4-6",
            question: "Que grande militar tático organizou a infantaria nacional para derrotar a esmagadora cavalaria de Castela na Batalha de Aljubarrota em 14 de agosto de 1385?",
            options: ["Vasco da Gama", "D. Nuno Álvares Pereira, o Condestável", "Estevão da Gama", "D. Afonso Henriques"],
            answerIndex: 1,
            hint: "Ofereceu grande parte dos seus bens às forças cruzadas e armou escudeiros concelhios.",
            justification: "Nuno Álvares Pereira adotou tácticas cirúrgicas de trincheiras em monte e ergueu coragem ímpar que garantiu a vitória a um contingente quatro vezes menor que o castelhano."
          }
        ],
        reflection: {
          question: "Porque é que a burguesia e o povo de Lisboa lutaram tanto pela independência nacional, enquanto muitos grandes nobres preferiram aceitar o Rei de Castela?",
          guidePoints: [
            "Os burgueses de Lisboa temiam que o porto perdesse importância e as companhias mercantis pagassem dízimos a Castela.",
            "O povo simples sabia que os senhores ibéricos iriam subjugar o reino com leis senhoriais cruas de guerra.",
            "Grandes barões de linhagem antiga já possuíam latifúndios em ambos os países e viam alianças reais como prestígio acrescido pessoal."
          ]
        },
        trivia: [
          "Uma célebre lenda de Aljubarrota fala de Brites de Almeida, a Padeira de Aljubarrota! Diz-se que com a sua pá de madeira de cozer pão, encontrou sete soldados castelhanos escondidos no seu forno de lenha e abateu-os com valentia corajosa!",
          "Para agradecer ao céu a grandiosa vitória obtida em Aljubarrota, D. João I mandou edificar o Mosteiro de Santa Maria da Vitória, hoje conhecido por todos como o magnífico Mosteiro da Batalha!"
        ],
        miniQuiz: [
          {
            question: "Em que ano irrompeu a Peste Negra contagiosa que aniquilou um terço de Portugal?",
            options: ["3200 a.C.", "1348 d.C.", "1143 d.C.", "1500 d.C."],
            answerIndex: 1
          },
          {
            question: "Quem defendeu com elogiada eloquência de jurista os direitos sagrados de D. João, Mestre de Avis, a assumir o trono nas Cortes de Coimbra de 1385?",
            options: ["Egas Moniz", "D. Henrique de Borgonha", "Dr. João das Regras", "O Faraó egípcio"],
            answerIndex: 2
          }
        ]
      }
    ]
  }
];
