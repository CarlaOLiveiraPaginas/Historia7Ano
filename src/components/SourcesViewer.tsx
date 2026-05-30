import React, { useState } from 'react';
import { HISTORICAL_SOURCES, MAPS_REAIS } from '../data/sources';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Map, HelpCircle, Compass, Globe, Sparkles } from 'lucide-react';

interface SourcesViewerProps {
  onEarnPoints: (points: number, source: string) => void;
  isDarkMode?: boolean;
}

export function SourcesViewer({ onEarnPoints, isDarkMode }: SourcesViewerProps) {
  const [selectedSourceType, setSelectedSourceType] = useState<'tudo' | 'texto' | 'arqueologico' | 'mapas'>('tudo');
  const [activeSourceId, setActiveSourceId] = useState<string>(HISTORICAL_SOURCES[0].id);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [questionsChecked, setQuestionsChecked] = useState<Record<string, boolean>>({});

  const filteredSources = selectedSourceType === 'tudo'
    ? HISTORICAL_SOURCES
    : selectedSourceType === 'mapas'
      ? []
      : HISTORICAL_SOURCES.filter(s => s.type === selectedSourceType);

  const activeSource = HISTORICAL_SOURCES.find(s => s.id === activeSourceId) || HISTORICAL_SOURCES[0];

  const handleSelectOption = (questionStr: string, optIndex: number) => {
    if (questionsChecked[questionStr]) return;
    setSelectedAnswers(prev => ({ ...prev, [questionStr]: optIndex }));
  };

  const handleValidateAnswer = (questionStr: string, targetIndex: number, pointsWorth: number) => {
    if (questionsChecked[questionStr]) return;
    setQuestionsChecked(prev => ({ ...prev, [questionStr]: true }));

    if (selectedAnswers[questionStr] === targetIndex) {
      onEarnPoints(pointsWorth, `Análise de Fonte: ${questionStr}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Category filters */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border rounded-2xl transition-colors ${
        isDarkMode ? 'border-slate-800 bg-slate-900/40 text-white' : 'bg-white border-indigo-105 text-slate-800'
      }`}>
        <div className="space-y-0.5 text-left">
          <h2 className={`text-sm font-bold flex items-center gap-1.5 font-sans ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
            <FileText className="h-4 w-4 text-amber-500 animate-pulse" /> Laboratório das Fontes Históricas
          </h2>
          <p className={`text-xs ${isDarkMode ? 'text-slate-405' : 'text-slate-500'}`}>Analisa documentos reais, cartas de privilégio, vestígios físicos e cartas geográficas.</p>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
          {[
            { id: 'tudo', label: 'Tudo', icon: FileText },
            { id: 'texto', label: 'Escritas / Textuais', icon: FileText },
            { id: 'arqueologico', label: 'Mapeamentos / Vestígios', icon: Compass },
            { id: 'mapas', label: 'Mapas Reais', icon: Map }
          ].map(cat => {
            const Icon = cat.icon;
            const isSelected = selectedSourceType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedSourceType(cat.id as any);
                  // Auto-switch active selection if needed
                  if (cat.id !== 'tudo' && cat.id !== 'mapas') {
                    const found = HISTORICAL_SOURCES.find(h => h.type === cat.id);
                    if (found) setActiveSourceId(found.id);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-amber-505 bg-amber-500 text-slate-950 font-black'
                    : isDarkMode
                      ? 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
                      : 'bg-indigo-50 border border-indigo-100 text-indigo-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {selectedSourceType === 'mapas' ? (
        /* MAPS PANE DISPLAY */
        <div className="space-y-6 text-left">
          {MAPS_REAIS.map((map) => (
            <div 
              key={map.id} 
              className={`grid grid-cols-1 lg:grid-cols-5 gap-8 border rounded-2xl overflow-hidden shadow-xl p-6 transition-colors ${
                isDarkMode ? 'border-slate-800 bg-slate-950 text-white' : 'bg-white border-indigo-100 text-slate-800 shadow-indigo-100/10'
              }`}
            >
              
              <div className={`lg:col-span-3 rounded-xl overflow-hidden border group relative aspect-video transition-colors ${
                isDarkMode ? 'border-slate-850 bg-slate-900' : 'border-slate-200 bg-slate-100'
              }`}>
                <img
                  src={map.imageUrl}
                  alt={map.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700"
                />
                <div className="absolute top-3 left-3 bg-slate-950/95 px-2.5 py-1 text-[10px] font-mono font-bold uppercase text-amber-400 rounded-md border border-slate-800">
                  {map.period}
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className={`text-xs font-mono font-bold flex items-center gap-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    <Globe className="h-3.5 w-3.5 animate-spin-slow" /> CARTOGRAFIA HISTÓRICA DO PROGRAMA
                  </span>
                  <h3 className={`text-lg font-black leading-tight ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>{map.title}</h3>
                  <div className={`p-4 rounded-xl text-xs md:text-sm leading-relaxed border transition-colors ${
                    isDarkMode ? 'bg-slate-900/60 border-slate-850 text-slate-350' : 'bg-indigo-50/50 border-indigo-100 text-slate-800 font-medium'
                  }`}>
                    <p className={`font-bold flex items-center gap-1 text-[10px] font-mono border-b pb-1.5 ${
                      isDarkMode ? 'text-amber-400 border-slate-800' : 'text-indigo-900 border-indigo-150'
                    }`}>
                      ORIENTAÇÕES PEDAGÓGICAS DA CARTA GEOGRÁFICA
                    </p>
                    <p className="mt-2 text-justify select-text">{map.guidingQuestions}</p>
                    <p className={`mt-4 italic border-t pt-2 font-serif text-justify ${
                      isDarkMode ? 'border-slate-800/80 text-slate-400' : 'border-indigo-100 text-slate-600'
                    }`}>
                      Descrição: {map.description}
                    </p>
                  </div>
                </div>

                <div className={`p-3 rounded-xl text-xs flex items-center gap-1.5 border transition-colors ${
                  isDarkMode ? 'bg-amber-500/5 text-amber-400 border-amber-500/10' : 'bg-amber-50 text-amber-850 border-amber-150'
                }`}>
                  <Sparkles className="h-4 w-4 shrink-0 text-amber-550" />
                  <span className="font-semibold">A análise geográfica de fronteiras e territórios apoia a tua compreensão de espaço e tempo histórico.</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* STANDARD DOCUMENT SOURCES PANE */
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-left">
          {/* Left Column list selector */}
          <div className="lg:col-span-2 space-y-2.5">
            <p className={`text-xs font-black font-mono uppercase tracking-widest pl-1 ${isDarkMode ? 'text-slate-400' : 'text-indigo-600'}`}>Escolhe a Fonte</p>
            {filteredSources.map((src) => {
              const isSelected = activeSourceId === src.id;
              return (
                <button
                  key={src.id}
                  onClick={() => setActiveSourceId(src.id)}
                  className={`w-full text-left p-4 rounded-xl border transition cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? isDarkMode
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300 ring-1 ring-amber-500/15'
                        : 'bg-indigo-50 border-indigo-205 text-indigo-950 font-black shadow-md'
                      : isDarkMode
                        ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-900/70'
                        : 'bg-white border-slate-105 hover:border-slate-200 hover:bg-slate-50 text-slate-700 font-medium'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 border transition-colors ${
                    isSelected 
                      ? isDarkMode ? 'bg-amber-500/25 text-amber-400 border-amber-500/20' : 'bg-indigo-100 text-indigo-700 border-indigo-200' 
                      : isDarkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'
                  }`}>
                    <FileText className="h-5 w-5" />
                  </div>
                  
                  <div className="space-y-0.5 max-w-full min-w-0">
                    <h4 className="font-extrabold text-xs md:text-sm truncate">{src.title}</h4>
                    <p className={`text-[10px] uppercase font-mono tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400 font-bold'}`}>{src.period}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Source and exercise questions */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeSource ? (
                <motion.div
                  key={activeSource.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={`border rounded-2xl overflow-hidden shadow-xl p-6 md:p-8 space-y-6 transition-colors ${
                    isDarkMode ? 'border-slate-800 bg-slate-950 text-white' : 'bg-white border-slate-105 shadow-xl shadow-indigo-100/10'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-black text-amber-500 uppercase tracking-widest">{activeSource.period}</span>
                    <h3 className="text-lg md:text-xl font-black tracking-tight">{activeSource.title}</h3>
                  </div>

                  {/* Image source and context */}
                  <div className={`grid grid-cols-1 sm:grid-cols-5 gap-6 border-b pb-6 ${
                    isDarkMode ? 'border-slate-900' : 'border-slate-105'
                  }`}>
                    <div className={`sm:col-span-2 rounded-xl overflow-hidden h-36 border bg-slate-900 transition-colors ${
                      isDarkMode ? 'border-slate-850' : 'border-slate-205'
                    }`}>
                      <img
                        src={activeSource.imageUrl}
                        alt={activeSource.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="sm:col-span-3 space-y-1 text-left">
                      <p className={`text-xs font-black uppercase tracking-wider ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Contextualização Histórica</p>
                      <p className={`text-xs leading-normal font-sans font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-650'}`}>
                        {activeSource.context}
                      </p>
                    </div>
                  </div>

                  {/* Original Text transcription or description box */}
                  <div className={`p-4 rounded-xl border border-l-4 transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-900/60 border-slate-850 border-l-amber-500 text-slate-200' 
                      : 'bg-amber-50/40 border-amber-105 border-l-amber-500 text-slate-850 font-medium'
                  }`}>
                    <p className="text-xs font-bold text-amber-500 font-mono pb-1">LEITURA CRÍTICA DA FONTE HISTÓRICA</p>
                    <p className="text-xs md:text-sm font-serif italic mt-1.5 leading-relaxed text-justify">
                      &ldquo;{activeSource.transcriptionOrDescription}&rdquo;
                    </p>
                  </div>

                  {/* Analysis questions */}
                  <div className="space-y-6 pt-2">
                    <p className={`text-xs font-mono font-black flex items-center gap-1.5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-650'}`}>
                      <HelpCircle className="h-4 w-4 text-amber-500" /> PERGUNTAS DE ANÁLISE DE EXAME DO 7.º ANO
                    </p>

                    {activeSource.questions.map((q, qIdx) => {
                      const ans = selectedAnswers[q.question];
                      const checked = questionsChecked[q.question];
                      const isCorrect = ans === q.answerIndex;

                      return (
                        <div 
                          key={qIdx} 
                          className={`p-5 border rounded-xl space-y-3 font-sans transition-colors ${
                            isDarkMode ? 'bg-slate-900/25 border-slate-900 text-white' : 'bg-slate-50 border-slate-105 shadow-xs text-slate-850'
                          }`}
                        >
                          <p className="text-xs md:text-sm font-black transition-colors">
                            {qIdx + 1}. {q.question}
                          </p>

                          <div className="grid grid-cols-1 gap-2 text-left">
                            {q.options.map((opt, oIdx) => (
                              <button
                                key={oIdx}
                                disabled={checked}
                                onClick={() => handleSelectOption(q.question, oIdx)}
                                className={`text-left p-3 rounded-lg text-xs md:text-sm font-semibold transition flex items-center gap-3.5 cursor-pointer ${
                                  ans === oIdx
                                    ? checked
                                      ? isCorrect
                                        ? 'bg-emerald-500/15 border border-emerald-500 text-emerald-400 font-bold'
                                        : 'bg-rose-500/15 border border-rose-505 text-rose-455 font-bold'
                                      : 'bg-amber-500/15 border border-amber-500 text-amber-500 font-bold'
                                    : isDarkMode
                                      ? 'bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-400'
                                      : 'bg-white hover:bg-slate-50 border border-slate-205 text-slate-700'
                                }`}
                              >
                                <span className={`h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-xs font-black ${
                                  ans === oIdx ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                                }`}>
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span>{opt}</span>
                              </button>
                            ))}
                          </div>

                          {/* Validations and reasons */}
                          {checked && (
                            <div className={`p-4 rounded-xl text-xs md:text-sm leading-normal transition-colors border ${
                              isCorrect 
                                ? 'bg-emerald-950/20 text-emerald-305 border-emerald-900/30' 
                                : 'bg-rose-950/20 text-rose-350 border-rose-900/30'
                            }`}>
                              <p className="font-bold flex items-center gap-1">
                                {isCorrect ? '✓ Excelente Análise!' : '✗ Ups, resposta incorreta!'}
                              </p>
                              <p className="mt-1 font-semibold leading-relaxed text-justify">{q.explanation}</p>
                            </div>
                          )}

                          {!checked && ans !== undefined && (
                            <button
                              onClick={() => handleValidateAnswer(q.question, q.answerIndex, 25)}
                              className="px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold rounded-lg hover:bg-amber-400 transition cursor-pointer"
                            >
                              Confirmar Análise
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
export { HISTORICAL_SOURCES, MAPS_REAIS };
