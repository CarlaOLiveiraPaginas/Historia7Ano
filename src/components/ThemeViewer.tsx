import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, FileText, HelpCircle, RefreshCw, 
  Play, Square, Volume2, ZoomIn, ZoomOut, CheckCircle2, 
  ChevronRight, Coins, Award, Sparkles, BookMarked, Lightbulb
} from 'lucide-react';
import { Theme, Subtheme, StudentProgress } from '../types';
import { THEMES } from '../data/contents';

interface ThemeViewerProps {
  progress: StudentProgress;
  onUpdateProgress: (updated: Partial<StudentProgress>) => void;
  onEarnPoints: (points: number, source: string) => void;
  onUnlockBadge: (badgeId: string) => void;
  isDarkMode?: boolean;
}

export function ThemeViewer({ progress, onUpdateProgress, onEarnPoints, onUnlockBadge, isDarkMode }: ThemeViewerProps) {
  const [selectedThemeId, setSelectedThemeId] = useState<string>("tema-1");
  const [selectedSubId, setSelectedSubId] = useState<string>("sub-1-1");
  const [activeTab, setActiveTab] = useState<'explicacao' | 'resumo' | 'flashcards' | 'exercicios' | 'reflexao' | 'mini-quiz'>('explicacao');
  
  // Accessibility Font Scale
  const [fontScale, setFontScale] = useState<'md' | 'lg' | 'xl'>('md');

  // Text to Speech State
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  // Flashcards state
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Exercise responses
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, number>>({});
  const [exerciseChecked, setExerciseChecked] = useState<Record<string, boolean>>({});

  // Mini-Quiz responses
  const [miniQuizAnswers, setMiniQuizAnswers] = useState<Record<string, number>>({});
  const [miniQuizSubmitted, setMiniQuizSubmitted] = useState(false);
  const [miniQuizSuccess, setMiniQuizSuccess] = useState(false);

  // Student reflection text responses
  const [reflectionTexts, setReflectionTexts] = useState<Record<string, string>>({});
  const [reflectionSaved, setReflectionSaved] = useState(false);

  const activeTheme = THEMES.find(t => t.id === selectedThemeId) || THEMES[0];
  const activeSubtheme = activeTheme.subthemes.find(s => s.id === selectedSubId) || activeTheme.subthemes[0];

  // Sync subtheme load resets
  useEffect(() => {
    setActiveTab('explicacao');
    setCurrentFlashcardIndex(0);
    setIsFlipped(false);
    setExerciseAnswers({});
    setExerciseChecked({});
    setMiniQuizAnswers({});
    setMiniQuizSubmitted(false);
    setMiniQuizSuccess(false);
    setReflectionSaved(false);
    stopSpeech();
  }, [selectedSubId]);

  // Handle SpeechSynthesis
  const startSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // safety cancel first

      // Compile content sections
      const title = activeSubtheme.title;
      const body = activeSubtheme.contentSections.map(s => `${s.title}. ${s.text}`).join(' ');
      const summaryText = `Resumo do tema. ${activeSubtheme.summary.join('. ')}`;
      const textToRead = `${title}. ${body}. ${summaryText}`;

      const speech = new SpeechSynthesisUtterance(textToRead);
      speech.lang = 'pt-PT'; // Portuguese of Portugal fallback to pt-BR if unavailable
      
      // Attempt locating Portuguese Portuguese voice
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang.startsWith('pt-PT')) || voices.find(v => v.lang.startsWith('pt'));
      if (ptVoice) {
        speech.voice = ptVoice;
      }

      speech.rate = 1.0;
      speech.onend = () => setIsSpeaking(false);
      speech.onerror = () => setIsSpeaking(false);

      setUtterance(speech);
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    } else {
      alert("A transcrição por voz não é suportada no teu navegador atual.");
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  const handleExerciseSelect = (exId: string, optIndex: number) => {
    if (exerciseChecked[exId]) return;
    setExerciseAnswers(prev => ({ ...prev, [exId]: optIndex }));
  };

  const handleValidateExercise = (exId: string, targetIdx: number) => {
    if (exerciseChecked[exId]) return;
    setExerciseChecked(prev => ({ ...prev, [exId]: true }));
    
    const picked = exerciseAnswers[exId];
    if (picked === targetIdx) {
      onEarnPoints(20, `Exercício ${exId}`);
    }
  };

  const handleMiniQuizSelect = (qIdx: number, optIndex: number) => {
    if (miniQuizSubmitted) return;
    setMiniQuizAnswers(prev => ({ ...prev, [qIdx]: optIndex }));
  };

  const handleValidateMiniQuiz = () => {
    if (miniQuizSubmitted) return;
    
    // Check if all answered
    if (Object.keys(miniQuizAnswers).length < activeSubtheme.miniQuiz.length) {
      alert("Por favor, responde a todas as perguntas do mini-quiz primeiro!");
      return;
    }

    const correctCount = activeSubtheme.miniQuiz.reduce((count, q, idx) => {
      return count + (miniQuizAnswers[idx] === q.answerIndex ? 1 : 0);
    }, 0);

    const is100Percent = correctCount === activeSubtheme.miniQuiz.length;

    setMiniQuizSubmitted(true);
    setMiniQuizSuccess(is100Percent);

    if (is100Percent) {
      onEarnPoints(50, `Mini-Quiz de ${activeSubtheme.title}`);
      
      // Update subtheme completion in progress
      if (!progress.completedSubthemes.includes(activeSubtheme.id)) {
        const completed = [...progress.completedSubthemes, activeSubtheme.id];
        onUpdateProgress({ completedSubthemes: completed });

        // Unlocking custom badges
        if (activeTheme.id === 'tema-1' && activeTheme.subthemes.every(sub => completed.includes(sub.id))) {
          onUnlockBadge('badge-tema-1');
        } else if (activeTheme.id === 'tema-2' && activeTheme.subthemes.every(sub => completed.includes(sub.id))) {
          onUnlockBadge('badge-tema-2');
        } else if (activeTheme.id === 'tema-3' && activeTheme.subthemes.every(sub => completed.includes(sub.id))) {
          onUnlockBadge('badge-tema-3');
        } else if (activeTheme.id === 'tema-4' && activeTheme.subthemes.every(sub => completed.includes(sub.id))) {
          onUnlockBadge('badge-tema-4');
        }
      }
    }
  };

  const saveReflection = () => {
    if (!reflectionTexts[activeSubtheme.id]?.trim()) {
      alert("Escreve alguma reflexão primeiro!");
      return;
    }
    setReflectionSaved(true);
    onEarnPoints(15, `Reflexão de ${activeSubtheme.title}`);
  };

  const getSubthemeProgress = (id: string) => {
    return progress.completedSubthemes.includes(id);
  };

  // Nest responsive scale sizes mapped dynamically to fontScale setting
  const fontSizes = {
    md: {
      xs: 'text-xs',
      sm: 'text-xs md:text-sm',
      base: 'text-sm md:text-base',
      lg: 'text-base md:text-lg',
      xl: 'text-lg md:text-xl',
      '2xl': 'text-xl md:text-2xl',
      '3xl': 'text-2xl md:text-3xl',
    },
    lg: {
      xs: 'text-sm',
      sm: 'text-sm md:text-base',
      base: 'text-base md:text-lg',
      lg: 'text-lg md:text-xl',
      xl: 'text-xl md:text-2xl',
      '2xl': 'text-2xl md:text-3xl',
      '3xl': 'text-3xl md:text-4xl',
    },
    xl: {
      xs: 'text-base',
      sm: 'text-base md:text-lg',
      base: 'text-lg md:text-xl',
      lg: 'text-xl md:text-2xl',
      xl: 'text-2xl md:text-3xl',
      '2xl': 'text-3xl md:text-4xl',
      '3xl': 'text-4xl md:text-5xl',
    }
  };

  const s = fontSizes[fontScale];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-1 space-y-4 text-left">
        <label className="block text-xs font-black uppercase tracking-wider text-slate-400 font-mono">
          Temas do Currículo
        </label>
        
        {/* Theme select dropdown */}
        <select
          value={selectedThemeId}
          onChange={(e) => {
            const nextT = THEMES.find(t => t.id === e.target.value)!;
            setSelectedThemeId(nextT.id);
            setSelectedSubId(nextT.subthemes[0].id);
          }}
          className={`w-full rounded-2xl border-2 p-3 text-sm outline-none font-bold transition focus:ring-4 ${
            isDarkMode 
              ? 'bg-slate-900 border-slate-800 text-white focus:border-amber-450 focus:ring-amber-500/10' 
              : 'bg-white border-slate-200 text-slate-800 focus:border-indigo-400 focus:ring-indigo-50'
          }`}
        >
          {THEMES.map(theme => (
            <option key={theme.id} value={theme.id}>
              Tema {theme.number}: {theme.title.substring(0, 36)}...
            </option>
          ))}
        </select>

        {/* Subthemes list in Sidebar */}
        <div className="space-y-2 mt-4 space-x-1 lg:space-x-0 flex lg:flex-col overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {activeTheme.subthemes.map(subtheme => {
            const isCompleted = getSubthemeProgress(subtheme.id);
            const isSelected = selectedSubId === subtheme.id;
            return (
              <button
                key={subtheme.id}
                onClick={() => setSelectedSubId(subtheme.id)}
                className={`w-full text-left shrink-0 max-w-[210px] lg:max-w-full rounded-2xl p-3.5 transition text-xs md:text-sm font-bold border-2 flex items-center justify-between gap-2.5 cursor-pointer ${
                  isSelected
                    ? isDarkMode 
                      ? 'bg-slate-800 border-slate-700 text-amber-400 shadow-sm' 
                      : 'bg-indigo-50 border-indigo-200 text-indigo-950 shadow-sm'
                    : isDarkMode 
                      ? 'bg-slate-950 border-slate-900 hover:border-slate-800 text-slate-450 hover:text-white' 
                      : 'bg-white border-slate-100 hover:border-slate-200 text-slate-750'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-xl ${
                    isSelected 
                      ? isDarkMode ? 'bg-slate-905 text-amber-505' : 'bg-indigo-100 text-indigo-700' 
                      : isDarkMode ? 'bg-slate-900 text-slate-500' : 'bg-slate-50 text-slate-450'
                  }`}>
                    <BookMarked className="h-4 w-4" />
                  </div>
                  <span className="truncate lg:whitespace-normal leading-snug">{subtheme.title}</span>
                </div>
                {isCompleted && (
                  <CheckCircle2 className="h-4.5 w-4.5 text-green-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Decorative teacher tips */}
        <div className={`hidden lg:block p-4 rounded-2xl border-2 transition-colors text-xs space-y-2 shadow-xs ${
          isDarkMode ? 'bg-slate-900 border-slate-805 text-slate-350' : 'bg-white border-indigo-100 text-slate-700'
        }`}>
          <p className="font-extrabold text-indigo-550 flex items-center gap-1">
            <Lightbulb className="h-3.5 w-3.5 text-amber-500 animate-pulse" /> Dica da Prof. Carla:
          </p>
          <p className={`italic leading-relaxed font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            &ldquo;Completa as explicações de voz e resolve todos os mini-quizzes de cada tema para ganhares a correspondente medalha dourada!&rdquo;
          </p>
        </div>
      </div>

      {/* Main Educational Work Station */}
      <div className="lg:col-span-3 space-y-6">
        <div className={`border-2 rounded-3xl overflow-hidden shadow-xs transition-colors ${
          isDarkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-100 bg-white'
        }`} id="content-workspace">
          {/* Active Navigation Header with stats */}
          <div className={`border-b-2 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors ${
            isDarkMode ? 'border-slate-800 bg-slate-900/30' : 'bg-indigo-50/20 border-slate-100'
          }`}>
            <div className="space-y-1 text-left">
              <span className={`text-xs font-mono font-black uppercase tracking-widest ${isDarkMode ? 'text-amber-500' : 'text-indigo-500'}`}>
                Tema {activeTheme.number} • Subtema {activeTheme.subthemes.indexOf(activeSubtheme) + 1}
              </span>
              <h1 className={`text-xl md:text-2xl font-black tracking-tight font-sans ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
                {activeSubtheme.title}
              </h1>
            </div>

            {/* Accessibility & Voice Control toolbar */}
            <div className="flex items-center gap-2 self-start md:self-center">
              {/* Voice Reader button */}
              {isSpeaking ? (
                <button
                  onClick={stopSpeech}
                  className="flex items-center gap-1.5 rounded-xl bg-red-600 px-3.5 py-2 text-xs text-white font-bold hover:bg-red-700 shadow-sm cursor-pointer"
                >
                  <Square className="h-3.5 w-3.5 fill-white text-white" /> Parar Voz
                </button>
              ) : (
                <button
                  onClick={startSpeech}
                  className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs text-white font-bold hover:bg-indigo-700 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <Volume2 className="h-3.5 w-3.5" /> Ouvir Texto
                </button>
              )}

              {/* Font Resizing Widgets */}
              <div className={`flex items-center rounded-xl border-2 p-1 transition-colors ${
                isDarkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-100 bg-slate-100'
              }`}>
                <button
                  onClick={() => setFontScale('md')}
                  title="Letra Normal"
                  className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                    fontScale === 'md' 
                      ? isDarkMode ? 'bg-slate-800 text-amber-400 font-extrabold' : 'bg-white text-indigo-900 font-extrabold shadow-sm' 
                      : 'text-slate-400 hover:text-slate-650'
                  }`}
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setFontScale('lg')}
                  title="Letra Grande"
                  className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                    fontScale === 'lg' 
                      ? isDarkMode ? 'bg-slate-800 text-amber-400 font-extrabold' : 'bg-white text-indigo-900 font-extrabold shadow-sm'  
                      : 'text-slate-400 hover:text-slate-650'
                  }`}
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setFontScale('xl')}
                  title="Letra Gigante"
                  className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                    fontScale === 'xl' 
                      ? isDarkMode ? 'bg-slate-800 text-amber-400 font-extrabold' : 'bg-white text-indigo-900 font-extrabold shadow-sm'  
                      : 'text-slate-400 hover:text-slate-650'
                  }`}
                >
                  A+
                </button>
              </div>
            </div>
          </div>

          {/* Curricular Section Tabs */}
          <div className={`flex border-b-2 overflow-x-auto scrollbar-none transition-colors ${
            isDarkMode ? 'border-slate-800 bg-slate-900/10' : 'border-slate-100 bg-slate-100/40'
          }`}>
            {[
              { id: 'explicacao', label: 'Explicação', icon: BookOpen },
              { id: 'resumo', label: 'Resumo', icon: FileText },
              { id: 'flashcards', label: 'Flashcards', icon: RefreshCw },
              { id: 'exercicios', label: 'Exercícios', icon: HelpCircle },
              { id: 'reflexao', label: 'Reflexão', icon: HelpCircle },
              { id: 'mini-quiz', label: 'Mini-Quiz', icon: Sparkles }
            ].map(tab => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    stopSpeech();
                  }}
                  className={`flex items-center gap-1.5 px-5 py-3.5 text-xs md:text-sm border-b-2 whitespace-nowrap transition cursor-pointer font-extrabold ${
                    isSelected
                      ? isDarkMode 
                        ? 'border-amber-500 text-amber-400 bg-slate-900/40 font-black' 
                        : 'border-indigo-650 text-indigo-700 bg-indigo-50/30'
                      : isDarkMode 
                        ? 'border-transparent text-slate-450 hover:text-white hover:bg-slate-900/10' 
                        : 'border-transparent text-slate-500 hover:text-indigo-650 hover:bg-slate-100/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Work Panel */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {/* 1. Explicação Tab */}
              {activeTab === 'explicacao' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8 text-left"
                  key="explicacao-pane"
                >
                  <p className={`italic p-3 rounded-lg border-l-2 border-amber-500 font-medium ${s.xs} ${
                    isDarkMode ? 'text-slate-350 bg-slate-900/60' : 'text-slate-700 bg-amber-50/70 border-l-amber-500'
                  }`}>
                    {activeSubtheme.introductionText}
                  </p>

                  <div className="space-y-6 font-sans">
                    {activeSubtheme.contentSections.map((sect, i) => (
                      <div key={i} className="space-y-2">
                        <h3 className={`font-black flex items-center gap-2 ${s.lg} ${
                          isDarkMode ? 'text-white' : 'text-indigo-950'
                        }`}>
                          <ChevronRight className="h-4 w-4 text-amber-500 shrink-0" />
                          {sect.title}
                        </h3>
                        <p className={`leading-relaxed hover:text-amber-505 transition-colors ${s.base} ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-700 font-medium'
                        }`}>
                          {sect.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Fun trivia callout */}
                  {activeSubtheme.trivia.length > 0 && (
                    <div className={`p-4 rounded-xl border transition-colors ${
                      isDarkMode 
                        ? 'border-slate-800 bg-indigo-950/20 text-slate-300' 
                        : 'border-amber-200 bg-amber-50/60 text-slate-850'
                    }`}>
                      <p className={`font-bold flex items-center gap-1.5 ${s.sm} ${isDarkMode ? 'text-indigo-400' : 'text-amber-900'}`}>
                        <Lightbulb className="h-4 w-4 text-amber-500 fill-amber-500/10" /> Sabias Que? (Curiosidade Histórica)
                      </p>
                      <ul className={`list-disc list-inside space-y-1.5 ${s.xs} ${isDarkMode ? 'text-slate-350' : 'text-slate-700 font-semibold'}`}>
                        {activeSubtheme.trivia.map((t, index) => (
                          <li key={index} className="leading-normal">{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}

              {/* 2. Resumo Tab */}
              {activeTab === 'resumo' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left"
                  key="resumo-pane"
                >
                  <div className="space-y-1.5">
                    <h3 className={`font-black tracking-tight ${s.xl} ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
                      Aprendizagens Essenciais (Resumo)
                    </h3>
                    <p className={`font-mono ${s.xs} ${isDarkMode ? 'text-slate-400' : 'text-slate-550'}`}>
                      Aqui está um resumo condensado do programa curricular para te apoiar em estudos de exame.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {activeSubtheme.summary.map((point, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
                          isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/50 border-slate-105'
                        }`}
                      >
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold shrink-0 mt-0.5 ${s.xs} ${
                          isDarkMode ? 'bg-amber-500/15 text-amber-400' : 'bg-indigo-100 text-indigo-700'
                        }`}>
                          {index + 1}
                        </div>
                        <p className={`leading-relaxed ${s.sm} ${isDarkMode ? 'text-slate-300' : 'text-slate-750 font-medium'}`}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 3. Flashcards Tab */}
              {activeTab === 'flashcards' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 flex flex-col items-center"
                  key="flashcards-pane"
                >
                  <p className={`font-mono text-center ${s.xs} ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Clica no cartão para virar e testar os teus conhecimentos e conceitos!
                  </p>

                  <div className="relative w-full max-w-md h-64 perspective">
                    <motion.div
                      onClick={() => setIsFlipped(!isFlipped)}
                      className={`relative w-full h-full duration-500 transform-style-3d cursor-pointer rounded-2xl shadow-xl flex items-center justify-center ${
                        isFlipped 
                          ? isDarkMode ? 'bg-slate-900 border border-slate-800' : 'bg-indigo-950 border border-indigo-700 text-indigo-200' 
                          : isDarkMode ? 'bg-slate-900 border border-slate-800' : 'bg-slate-900 border border-slate-700 text-slate-200'
                      }`}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Front text */}
                      {!isFlipped ? (
                        <div className="p-6 text-center space-y-4">
                          <span className={`font-mono font-black uppercase tracking-widest ${isDarkMode ? 'text-amber-500' : 'text-indigo-400'} ${s.xs}`}>Pergunta</span>
                          <p className={`font-bold leading-snug text-white ${s.lg}`}>
                            {activeSubtheme.flashcards[currentFlashcardIndex]?.question}
                          </p>
                          <p className={`text-slate-400 italic mt-4 ${s.xs}`}>Clica para revelar a resposta</p>
                        </div>
                      ) : (
                        /* Back text */
                        <div className="p-6 text-center space-y-4 flip-y-180">
                          <span className={`font-mono font-black uppercase tracking-widest text-[#10b981] ${s.xs}`}>Resposta do Escriba</span>
                          <p className={`leading-relaxed font-semibold text-emerald-305 ${s.base}`}>
                            {activeSubtheme.flashcards[currentFlashcardIndex]?.answer}
                          </p>
                          <p className={`text-slate-400 italic mt-4 ${s.xs}`}>Clica para voltar</p>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      disabled={currentFlashcardIndex === 0}
                      onClick={() => {
                        setCurrentFlashcardIndex(prev => prev - 1);
                        setIsFlipped(false);
                      }}
                      className={`px-4 py-2 text-xs font-bold disabled:opacity-40 rounded-lg border cursor-pointer ${
                        isDarkMode ? 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-white' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-805'
                      }`}
                    >
                      Anterior
                    </button>
                    <span className={`text-slate-400 font-mono font-bold ${s.xs}`}>
                      {currentFlashcardIndex + 1} de {activeSubtheme.flashcards.length}
                    </span>
                    <button
                      disabled={currentFlashcardIndex === activeSubtheme.flashcards.length - 1}
                      onClick={() => {
                        setCurrentFlashcardIndex(prev => prev + 1);
                        setIsFlipped(false);
                      }}
                      className={`px-4 py-2 text-xs font-bold disabled:opacity-40 rounded-lg border cursor-pointer ${
                        isDarkMode ? 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-white' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-805'
                      }`}
                    >
                      Seguinte
                    </button>
                  </div>
                </motion.div>
              )}

              {/* 4. Exercícios com Retorno Pedagógico */}
              {activeTab === 'exercicios' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 text-left"
                  key="exercicios-pane"
                >
                  <div className="space-y-1">
                    <h3 className={`font-black tracking-tight ${s.xl} ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
                      Exercícios de Consolidação (+20 Pontos)
                    </h3>
                    <p className={`font-mono ${s.xs} ${isDarkMode ? 'text-slate-404' : 'text-slate-500'}`}>
                      Resolve as perguntas curriculares de escolha múltipla para testar as tuas capacidades cognitivas.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {activeSubtheme.exercises.map((ex) => {
                      const ans = exerciseAnswers[ex.id];
                      const checked = exerciseChecked[ex.id];
                      const isCorrect = ans === ex.answerIndex;

                      return (
                        <div 
                          key={ex.id} 
                          className={`p-6 rounded-2xl border transition-colors space-y-4 ${
                            isDarkMode ? 'bg-slate-900/20 border-slate-805 text-white' : 'bg-slate-50/50 border-slate-105 text-slate-800'
                          }`}
                        >
                          <p className={`font-black ${s.base} ${isDarkMode ? 'text-slate-100' : 'text-slate-850'}`}>
                            {ex.question}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                            {ex.options.map((opt, oIdx) => (
                              <button
                                key={oIdx}
                                disabled={checked}
                                onClick={() => handleExerciseSelect(ex.id, oIdx)}
                                className={`text-left p-3 rounded-lg transition flex items-center gap-3 cursor-pointer ${s.sm} ${
                                  ans === oIdx
                                    ? checked
                                      ? isCorrect
                                        ? 'bg-emerald-500/15 border-2 border-emerald-500 text-emerald-400 font-bold'
                                        : 'bg-rose-500/15 border-2 border-rose-500 text-rose-455 font-bold'
                                      : 'bg-amber-500/15 border-2 border-amber-500 text-amber-550 font-bold'
                                    : isDarkMode 
                                      ? 'bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300' 
                                      : 'bg-white hover:bg-slate-50 border border-slate-205 text-slate-700'
                                }`}
                              >
                                <span className={`h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-xs font-bold ${
                                  ans === oIdx ? 'bg-amber-500 text-slate-950 animate-bounce' : 'bg-slate-800 text-slate-400_not'
                                }`}>
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span>{opt}</span>
                              </button>
                            ))}
                          </div>

                          {/* Pistas ou Justificação de Erro */}
                          {checked && (
                            <div className={`p-4 rounded-xl leading-normal space-y-1.5 transition-colors border ${s.sm} ${
                              isCorrect 
                                ? 'bg-emerald-950/20 text-emerald-305 border-emerald-900/30' 
                                : 'bg-rose-950/20 text-rose-400 border border-rose-905/30'
                            }`}>
                              <p className="font-bold flex items-center gap-1.5">
                                {isCorrect ? '✓ Excelente trabalho!' : '✗ Ups, resposta incorreta!'}
                              </p>
                              <p className="font-semibold leading-relaxed">
                                {isCorrect 
                                  ? `${progress.name}! Justificação: ${ex.justification}`
                                  : `Queres tentar outro desafio, ${progress.name}? Pista: ${ex.hint}`}
                              </p>
                              {!isCorrect && (
                                <button
                                  onClick={() => {
                                    setExerciseChecked(prev => ({ ...prev, [ex.id]: false }));
                                    setExerciseAnswers(prev => ({ ...prev, [ex.id]: -1 }));
                                  }}
                                  className={`mt-3 px-3.5 py-1.5 text-xs font-bold border rounded-lg cursor-pointer transition ${
                                    isDarkMode ? 'bg-slate-900 hover:bg-slate-850 border-slate-700 text-slate-200' : 'bg-white hover:bg-slate-100 border-slate-255 text-slate-800'
                                  }`}
                                >
                                  Tentar Outra Vez
                                </button>
                              )}
                            </div>
                          )}

                          {!checked && ans !== undefined && ans !== -1 && (
                            <button
                              onClick={() => handleValidateExercise(ex.id, ex.answerIndex)}
                              className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition cursor-pointer"
                            >
                              Validar Resposta
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* 5. Questões de Reflexão */}
              {activeTab === 'reflexao' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left"
                  key="reflexao-pane"
                >
                  <div className="space-y-1">
                    <h3 className={`font-black tracking-tight ${s.xl} ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
                      Pergunta de Reflexão Coletiva
                    </h3>
                    <p className={`font-mono ${s.xs} ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Submete uma resposta breve de análise e reflexão histórica à professora Carla.
                    </p>
                  </div>

                  <div className={`p-6 border rounded-2xl space-y-4 transition-colors ${
                    isDarkMode ? 'bg-slate-900/20 border-slate-800' : 'bg-slate-50/50 border-slate-105'
                  }`}>
                    <p className={`font-bold leading-relaxed ${s.base} ${isDarkMode ? 'text-slate-250' : 'text-slate-850'}`}>
                      &ldquo;{activeSubtheme.reflection.question}&rdquo;
                    </p>

                    <div className={`p-4 rounded-xl border space-y-2 transition-colors ${
                      isDarkMode ? 'bg-slate-950/60 border-slate-850' : 'bg-indigo-50/60 border-indigo-105'
                    }`}>
                      <p className={`font-bold flex items-center gap-1 ${s.sm} ${isDarkMode ? 'text-amber-400' : 'text-indigo-900'}`}>
                        <Lightbulb className="h-4 w-4" /> Notas Orientadoras e Linhas de Pensamento:
                      </p>
                      <ul className={`list-disc list-inside space-y-1 ${s.xs} ${isDarkMode ? 'text-slate-400' : 'text-slate-650 font-medium'}`}>
                        {activeSubtheme.reflection.guidePoints.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>

                    <textarea
                      rows={5}
                      className={`w-full rounded-xl border p-4 font-sans focus:ring-1 outline-none resize-none shadow-sm transition ${s.sm} ${
                        isDarkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-amber-500 focus:ring-amber-500/30 text-slate-100 placeholder-slate-700' 
                          : 'bg-white border-slate-205 text-slate-800 focus:border-indigo-400 focus:ring-indigo-100 placeholder-slate-400'
                      }`}
                      placeholder="Escreve aqui os teus pensamentos ou anotações..."
                      value={reflectionTexts[activeSubtheme.id] || ''}
                      onChange={(e) => setReflectionTexts({ ...reflectionTexts, [activeSubtheme.id]: e.target.value })}
                      disabled={reflectionSaved}
                    />

                    {reflectionSaved ? (
                      <div className="p-3 bg-emerald-900/15 text-emerald-300 rounded-xl text-xs flex items-center gap-2 border border-emerald-900/20">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="font-semibold">Espetacular, {progress.name}! A tua reflexão foi gravada com sucesso e valeu-te 15 Pontos de estudo.</span>
                      </div>
                    ) : (
                      <button
                        onClick={saveReflection}
                        className="px-5 py-2.5 bg-amber-505 bg-amber-500 text-slate-950 rounded-lg text-xs font-bold hover:bg-amber-400 flex items-center gap-2 cursor-pointer"
                      >
                        Submeter Reflexão (+15 Pontos)
                      </button>
                    )}
                  </div>
                </motion.div>
              )}

              {/* 6. Mini Quiz Integrado */}
              {activeTab === 'mini-quiz' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left"
                  key="mini-quiz-pane"
                >
                  <div className="space-y-1">
                    <h3 className={`font-black tracking-tight flex items-center gap-2 ${s.xl} ${
                      isDarkMode ? 'text-white' : 'text-indigo-950'
                    }`}>
                      <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
                      Mini-Quiz Final de Subtema (+50 Pontos)
                    </h3>
                    <p className={`font-mono ${s.xs} ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Conclui com sucesso todas as perguntas deste mini-quiz para dares como Concluído este subtema e acumular XP.
                    </p>
                  </div>

                  <div className="space-y-6 mt-4">
                    {activeSubtheme.miniQuiz.map((q, qIdx) => {
                      const ans = miniQuizAnswers[qIdx];
                      const isCorrect = ans === q.answerIndex;

                      return (
                        <div 
                          key={qIdx} 
                          className={`p-5 rounded-xl border space-y-3 transition-colors ${
                            isDarkMode ? 'bg-slate-900/20 border-slate-800' : 'bg-slate-50/50 border-slate-105'
                          }`}
                        >
                          <p className={`font-semibold ${s.base} ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                            {qIdx + 1}. {q.question}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
                            {q.options.map((opt, oIdx) => (
                              <button
                                key={oIdx}
                                disabled={miniQuizSubmitted}
                                onClick={() => handleMiniQuizSelect(qIdx, oIdx)}
                                className={`text-left p-3 rounded-lg font-medium transition flex items-center gap-3 cursor-pointer ${s.sm} ${
                                  ans === oIdx
                                    ? miniQuizSubmitted
                                      ? isCorrect
                                        ? 'bg-emerald-500/15 border-2 border-emerald-500 text-emerald-450 font-bold'
                                        : 'bg-rose-500/15 border border-rose-500 text-rose-455 font-bold'
                                      : 'bg-amber-500/15 border border-amber-550 text-amber-400 font-bold'
                                    : isDarkMode 
                                      ? 'bg-slate-950 hover:bg-slate-905 border border-slate-850 text-slate-300' 
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
                        </div>
                      );
                    })}

                    {miniQuizSubmitted ? (
                      miniQuizSuccess ? (
                        <div className={`p-4 border rounded-xl text-xs space-y-2 transition-colors ${
                          isDarkMode ? 'bg-emerald-950/20 text-emerald-300 border-emerald-900/30' : 'bg-emerald-50/80 text-emerald-900 border-emerald-200'
                        }`}>
                          <p className={`font-black flex items-center gap-1.5 ${s.base}`}>
                            <Award className="h-5 w-5 text-emerald-400 animate-bounce" /> Parabéns, {progress.name}! Concluíste este subtema!
                          </p>
                          <p className="font-semibold leading-relaxed">
                            Ganhaste 50 Pontos de ouro de historiador e desbloqueaste o progresso correspondente aos módulos da Professora Carla.
                          </p>
                        </div>
                      ) : (
                        <div className="p-4 bg-rose-950/20 text-rose-350 border border-rose-900/30 rounded-xl text-xs space-y-3">
                          <p className="font-bold text-sm">✗ Queres tentar outra vez, {progress.name}?</p>
                          <p className="font-semibold">Precisas de acertar em todas as perguntas deste mini-quiz para considerares o módulo concluído.</p>
                          <button
                            onClick={() => {
                              setMiniQuizSubmitted(false);
                              setMiniQuizSuccess(false);
                              setMiniQuizAnswers({});
                            }}
                            className={`px-4 py-2 text-xs font-bold rounded-lg border cursor-pointer transition ${
                              isDarkMode ? 'bg-slate-900 hover:bg-slate-805 border-slate-700 text-white' : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-800'
                            }`}
                          >
                            Tentar De Novo
                          </button>
                        </div>
                      )
                    ) : (
                      <button
                        onClick={handleValidateMiniQuiz}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-yellow-400 px-5 py-3.5 text-slate-950 font-black shadow-lg shadow-amber-500/20 hover:opacity-95 transition cursor-pointer"
                      >
                        Submeter e Confirmar Mini-Quiz
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
