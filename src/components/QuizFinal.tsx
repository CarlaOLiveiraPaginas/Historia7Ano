import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StudentProgress, MiniQuizQuestion } from '../types';
import { 
  Award, HelpCircle, Trophy, RefreshCw, CheckCircle, 
  XCircle, ChevronRight, GraduationCap
} from 'lucide-react';

interface QuizFinalProps {
  progress: StudentProgress;
  onUpdateProgress: (updated: Partial<StudentProgress>) => void;
  onEarnPoints: (points: number, source: string) => void;
  onUnlockBadge: (badgeId: string) => void;
  isDarkMode?: boolean;
}

interface ComprehensiveQuestion extends MiniQuizQuestion {
  id: string;
  justification: string;
}

// Full comprehensive syllabus pool of 14 questions
const CURRICULAR_POOL: ComprehensiveQuestion[] = [
  {
    id: "qf-1",
    question: "Como se caraterizava a subsistência do Homem do Paleolítico?",
    options: ["Pela produção de vegetais cultivados", "Pela recoleção, caça de animais selvagens e nomadismo", "Pela navegação marítima e fundação de colónias", "Pelo fabrico de moedas de ouro"],
    answerIndex: 1,
    justification: "No Paleolítico o ser humano não produzia alimentos (era recoletor) e deslocava-se constantemente à procura deles, adotando o nomadismo."
  },
  {
    id: "qf-2",
    question: "Qual era a utilidade dos Cromeleques construídos durante o Neolítico?",
    options: ["Habitações unifamiliares", "Grandes pontes de travessia fluvial", "Monumentos sagrados de vários menires em círculos para cultos solares ou celestes", "Cemitérios romanos coletivos"],
    answerIndex: 2,
    justification: "Os cromeleques, de que ressalta o Cromeleque dos Almendres, eram conjuntos circulares de megálitos de culto sagrado e astrológico."
  },
  {
    id: "qf-3",
    question: "Do que dependia fundamentalmente a agricultura egípcia antiga para prosperar?",
    options: ["De importações da China", "Das cheias anuais do rio Nilo irrigadas por diques e canais", "Do degelo dos glaciares do norte da Península Ibérica", "Do comércio de papiro gravado"],
    answerIndex: 1,
    justification: "O rio Nilo fertilizava as margens com o limo após as suas cheias periódicas reguladas pelos canais egípcios."
  },
  {
    id: "qf-4",
    question: "Que órgão político de Atenas no século V a.C. votava leis diretamente?",
    options: ["O Senado romano", "O Édito de Milão", "A Eclésia (assembleia democrática universal grega)", "A Cúria Régia do condado"],
    answerIndex: 2,
    justification: "A Eclésia reunia todos os cidadãos na colina da Pnyx para votar leis diretamente, expondo a democracia ateniense."
  },
  {
    id: "qf-5",
    question: "O processo em que povos sob domínio de Roma adotavam a sua língua, costumes e leis chama-se:",
    options: ["Islamização", "Monoteísmo", "Romanização", "Burguesia comercial"],
    answerIndex: 2,
    justification: "A Romanização consistiu na assimilação voluntária da cultura, idioma latim comum e Direito Romano pelos vencidos."
  },
  {
    id: "qf-6",
    question: "O que ditava o Édito de Tessalónica outorgado pelo Imperador Teodósio no ano de 380 d.C.?",
    options: ["Decretava a destruição de todas as sés românicas", "Tornava o Cristianismo a religião oficial exclusiva de todo o território romano", "Iniciava as perseguições oficiais contra os cristãos", "Dava independência a Portugal"],
    answerIndex: 1,
    justification: "Em 380 d.C., o imperador Teodósio unificou o império declarando o cristianismo católico como religião pública oficial."
  },
  {
    id: "qf-7",
    question: "Como se caraterizava a economia europeia medieval após as invasões bárbaras (séculos VI a IX)?",
    options: ["Totalmente baseada em cartões de débito", "Economia mercantilista voltada para a exportação de pêssegos", "Uma economia de subsistência baseada na agricultura local e isolamento comercial", "Um mercado global atlântico unificado"],
    answerIndex: 2,
    justification: "O colapso de Roma ruiu as grandes vias comerciais terrestres, fechando as populações locais em economias de autoconsumo e subsistência."
  },
  {
    id: "qf-8",
    question: "Qual o evento histórico do ano 622 d.C. que assinala o início do ano zero islâmico?",
    options: ["A Batalha de Guadalete contra visigodos", "A Hégira (fuga de Maomé de Meca para Medina)", "A fixação do foro de Coimbra", "A fundação dos Estudos Gerais"],
    answerIndex: 1,
    justification: "A Hégira é a fuga histórica de Maomé para Medina, fundadora da unificação religiosa islâmica e contagem do seu calendário."
  },
  {
    id: "qf-9",
    question: "Quais eram os dois grupos privilegiados da sociedade feudal proprietários e isentos de impostos?",
    options: ["Apenas os servos camponeses", "O Clero e a Nobreza", "Os metecos e escravos antigos", "Os burgueses e juízes concelhios"],
    answerIndex: 1,
    justification: "O clero e a nobreza dominavam as estâncias de oração e guerra na sociedade feudal, arrecadando dízimos pagos pelo povo trabalhador."
  },
  {
    id: "qf-10",
    question: "Em que célebre tratado assinado em 1143 d.C. o Rei de Leão aceitou D. Afonso Henriques como par independente de Portugal?",
    options: ["Bula Manifestis Probatum", "Édito de Milão", "Tratado de Zamora", "Cortes de Leiria"],
    answerIndex: 2,
    justification: "O Tratado de Zamora, em 1143, oficializa a diplomacia e independência do nascente Reino de Portugal perante Leão."
  },
  {
    id: "qf-11",
    question: "Qual a relevância das Cortes de Leiria convocadas por D. Afonso III no ano de 1254?",
    options: ["Proibir o comércio de burgueses", "Pioneirismo político de dar representação ao Povo comum e Burguesia nas decisões do Estado", "Assinar a paz militar com o Papa romano", "Derrubar o castelo de Guimarães"],
    answerIndex: 1,
    justification: "Nas Cortes de Leiria de 1254, representantes das classes populares e concelhos puderam participar nas deliberações ao lado de nobres."
  },
  {
    id: "qf-12",
    question: "Qual a caraterística principal das portas e pilares de uma catedral Românica antiga?",
    options: ["Janelas cheias de vitrais luminosos de cores", "Sublime verticalidade esguia apontada ao céu", "Arco de volta perfeita semicircular e grossas paredes de fortaleza amuralhada", "Uso intenso de papiro e pinturas rupestres"],
    answerIndex: 2,
    justification: "O Românico usava arcos redondos de volta perfeita e muros espessos porque os templos serviam de defesa forte em período de reconquistas."
  },
  {
    id: "qf-13",
    question: "Que catástrofe de contágio sanitário dizimou um terço da população portuguesa fidedigna em 1348 d.C.?",
    options: ["O Édito de Milão", "A Peste Negra (ou Peste Bubónica)", "A invasão de Normandos ferozes", "A fresta climática do Alentejo"],
    answerIndex: 1,
    justification: "A epidemia bacteriana mortífera de Peste Negra devastou imensamente Portugal no ano de 1348, gerando fome e graves quebras demográficas."
  },
  {
    id: "qf-14",
    question: "Quem liderou o exército nacional para aniquilar as pretensões de Castela na heróica Batalha de Aljubarrota em 1385?",
    options: ["D. Afonso Henriques de Zamora", "D. Nuno Álvares Pereira, o Condestável", "Estevão da Gama", "D. Teresa de Leão"],
    answerIndex: 1,
    justification: "D. Nuno Álvares Pereira demonstrou tática fabulosa ao usar o quadrado de infantaria rústica para travar a cavalaria pesada espanhola."
  }
];

export function QuizFinal({ progress, onUpdateProgress, onEarnPoints, onUnlockBadge, isDarkMode }: QuizFinalProps) {
  const [quizQuestions, setQuizQuestions] = useState<ComprehensiveQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Results summary
  const [answersMap, setAnswersMap] = useState<Record<number, number>>({});
  const [scorePercent, setScorePercent] = useState<number | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  // Load and randomize questions on mount
  useEffect(() => {
    restartQuiz();
  }, []);

  const restartQuiz = () => {
    const randomized = [...CURRICULAR_POOL]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10); // always exactly 10 questions for final test
    setQuizQuestions(randomized);
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsSubmitted(false);
    setAnswersMap({});
    setScorePercent(null);
    setQuizFinished(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOpt(idx);
  };

  const handleConfirmAnswer = () => {
    if (selectedOpt === null || isSubmitted) return;
    setIsSubmitted(true);
    setAnswersMap(prev => ({ ...prev, [currentIdx]: selectedOpt }));
  };

  const handleNextQuestion = () => {
    setIsSubmitted(false);
    setSelectedOpt(null);

    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      // Calculate overall result grade
      const correctCount = quizQuestions.reduce((count, q, idx) => {
        return count + (answersMap[idx] === q.answerIndex ? 1 : 0);
      }, 0);

      const computedPercent = Math.round((correctCount / quizQuestions.length) * 100);
      setScorePercent(computedPercent);
      setQuizFinished(true);

      // Award points dynamically based on final grade
      const ptsAwarded = Math.round(computedPercent * 1.5);
      onEarnPoints(ptsAwarded, `Exame Quiz Final com nota de ${computedPercent}%`);

      // Update quiz score history with best score
      const scores = { ...progress.quizScores };
      const previousBest = scores['final'] || 0;
      if (computedPercent > previousBest) {
        scores['final'] = computedPercent;
        onUpdateProgress({ quizScores: scores });
      }

      // Unlock dedicated final badge if passed successfully (70% or above)
      if (computedPercent >= 70) {
        onUnlockBadge('badge-final');
      }
    }
  };

  const activeQuestion = quizQuestions[currentIdx];

  return (
    <div className="max-w-3xl mx-auto space-y-6 text-left">
      
      {/* Quiz Progress header panel */}
      <div className={`p-4 border rounded-2xl flex items-center justify-between transition-colors ${
        isDarkMode ? 'border-slate-800 bg-slate-900/40 text-white' : 'bg-white border-indigo-105 text-slate-800'
      }`}>
        <div className="space-y-0.5">
          <h3 className={`font-black text-sm flex items-center gap-1.5 font-sans ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
            <GraduationCap className="h-5 w-5 text-indigo-550" /> Exame Quiz Final Global
          </h3>
          <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500 font-medium'}`}>Prova global adaptada contendo perguntas de todas as 4 unidades curriculares do 7.º Ano.</p>
        </div>

        <div className={`h-8 w-16 font-mono text-xs font-black rounded-lg border flex items-center justify-center transition-colors ${
          isDarkMode ? 'bg-slate-950 border-slate-800 text-amber-400' : 'bg-slate-50 border-slate-200 text-indigo-955'
        }`}>
          {!quizFinished ? `${currentIdx + 1} de 10` : 'FIM'}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {quizFinished ? (
          /* SCORE RESULTS SUMMARY VIEW SCREEN */
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`border rounded-2xl overflow-hidden shadow-2xl p-8 space-y-6 text-center transition-colors ${
              isDarkMode ? 'border-slate-800 bg-slate-950' : 'bg-white border-slate-105 shadow-xl shadow-indigo-100/10'
            }`}
          >
            <Trophy className="h-16 w-16 text-yellow-405 mx-auto animate-bounce" />

            <div className="space-y-2">
              <h2 className={`text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
                {scorePercent && scorePercent >= 70 ? `Excelente Trabalho, ${progress.name}!` : `Queres tentar outro desafio, ${progress.name}?`}
              </h2>
              <p className={`text-xs font-mono font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-indigo-500'}`}>Pauta do Exame Final de História do 7.º Ano</p>
            </div>

            {/* Big Grade display score chart */}
            <div className={`inline-flex flex-col items-center justify-center p-6 rounded-full h-36 w-36 border-4 transition-colors ${
              isDarkMode ? 'bg-slate-900/60 border-amber-500/30' : 'bg-indigo-50/40 border-indigo-500/30'
            }`}>
              <span className={`text-3xl font-black font-mono ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>{scorePercent}%</span>
              <span className={`text-[10px] font-mono uppercase tracking-wider mt-1 ${isDarkMode ? 'text-slate-500' : 'text-indigo-400 font-bold'}`}>Nota Final</span>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <p className={`text-xs md:text-sm leading-relaxed leading-normal transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-650 font-medium'}`}>
                {scorePercent && scorePercent >= 70
                  ? `Parabéns, ${progress.name}! Concluíste este exame com distinção! Atingiste os objetivos curriculares exigidos pela Professora Carla Oliveira.`
                  : `Tiraste uma nota de ${scorePercent}%. Revê os sumários e as explicações interativas de cada tema para obteres melhor prestação na próxima tentativa!`
                }
              </p>

              {scorePercent && scorePercent >= 70 && (
                <div className={`inline-flex items-center gap-1.5 p-2 rounded-lg text-xs transition-colors ${
                  isDarkMode ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400' : 'bg-amber-50 border border-amber-105 text-amber-900 font-bold'
                }`}>
                  <Award className="h-4 w-4 text-amber-500" /> Medalha Desbloqueada: Sábio Cronólogo
                </div>
              )}
            </div>

            <div className="flex gap-4 justify-center pt-2">
              <button
                onClick={restartQuiz}
                className="flex items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-yellow-400 px-5 py-3 text-slate-950 font-black shadow-lg shadow-amber-500/15 hover:opacity-95 transition text-xs md:text-sm cursor-pointer"
              >
                <RefreshCw className="h-4.5 w-4.5" /> Refazer Exame Final de Treino
              </button>
            </div>
          </motion.div>
        ) : (
          /* ACTIVE EXAM QUESTION PANE */
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className={`border rounded-2xl overflow-hidden shadow-xl p-6 md:p-8 space-y-6 transition-colors ${
              isDarkMode ? 'border-slate-805 bg-slate-950' : 'bg-white border-slate-105 shadow-xl shadow-indigo-100/10'
            }`}
            id="active-exam-pane"
          >
            {/* Visual Indicator of the category */}
            <div className={`flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border w-fit transition-all ${
              isDarkMode ? 'bg-indigo-950/20 text-indigo-400 border-indigo-900/30' : 'bg-indigo-50 text-indigo-750 border-indigo-100'
            }`}>
              <HelpCircle className="h-4 w-4 text-amber-500 animate-pulse" /> Questão {currentIdx + 1} de 10
            </div>

            <h3 className={`text-base md:text-lg font-black leading-snug transition-colors text-justify ${
              isDarkMode ? 'text-slate-100' : 'text-slate-900'
            }`}>
              {activeQuestion?.question}
            </h3>

            {/* Answer radio selections */}
            <div className="grid grid-cols-1 gap-2.5 mt-4 text-left">
              {activeQuestion?.options.map((option, index) => {
                const isSelected = selectedOpt === index;
                const checked = isSubmitted;
                const isCorrect = index === activeQuestion.answerIndex;

                return (
                  <button
                    key={index}
                    disabled={checked}
                    onClick={() => handleSelectOption(index)}
                    className={`text-left p-4 rounded-xl text-xs md:text-sm font-semibold transition flex items-center gap-4 cursor-pointer border ${
                      isSelected
                        ? checked
                          ? isCorrect
                            ? 'bg-emerald-500/15 border-2 border-emerald-500 text-emerald-400 font-bold'
                            : 'bg-rose-500/15 border-2 border-rose-505 text-rose-455 font-bold'
                          : 'bg-amber-500/15 border border-amber-450 text-amber-550 font-bold'
                        : isDarkMode
                          ? 'bg-slate-900 border-slate-850 text-slate-350 hover:bg-slate-900/60 hover:border-slate-700'
                          : 'bg-white border-slate-105 text-slate-700 hover:bg-slate-50 hover:border-slate-200'
                    }`}
                  >
                    <span className={`h-6 w-6 shrink-0 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanatory pedagogical comments displayed immediately after validation */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-5 rounded-2xl text-xs md:text-sm leading-normal border transition-colors ${
                  selectedOpt === activeQuestion.answerIndex
                    ? 'bg-emerald-950/20 text-emerald-305 border border-emerald-900/30'
                    : 'bg-rose-950/20 text-rose-400 border border-rose-900/30'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  {selectedOpt === activeQuestion.answerIndex ? (
                    <>
                      <CheckCircle className="h-4.5 w-4.5 text-emerald-400" />
                      <span>Excelente trabalho, {progress.name}! Resposta correta.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4.5 w-4.5 text-rose-400" />
                      <span>Resposta Incorreta, {progress.name}! Mas podes aprender aqui:</span>
                    </>
                  )}
                </div>
                <p className="leading-relaxed font-semibold mt-1 text-justify">{activeQuestion.justification}</p>
                
                <button
                  onClick={handleNextQuestion}
                  className={`mt-4 flex items-center gap-1.5 px-4 py-2 font-bold rounded-lg text-xs border cursor-pointer transition ${
                    isDarkMode ? 'bg-slate-900 hover:bg-slate-850 hover:border-slate-650 border-slate-805 text-white' : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-850'
                  }`}
                >
                  Continuar <ChevronRight className="h-3.5 w-3.5 text-amber-500" />
                </button>
              </motion.div>
            )}

            {!isSubmitted && (
              <button
                disabled={selectedOpt === null}
                onClick={handleConfirmAnswer}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black tracking-tight transition text-xs md:text-sm cursor-pointer disabled:opacity-50 shadow-lg shadow-amber-500/10"
              >
                Confirmar Resposta de Exame
              </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
export { CURRICULAR_POOL };
