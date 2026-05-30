import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Theme, StudentProgress, Badge, HistoricalSource, Monument, TimelineEvent 
} from './types';
import { WelcomeModal } from './components/WelcomeModal';
import { ThemeViewer } from './components/ThemeViewer';
import { GamesSection } from './components/GamesSection';
import { TimelineViewer } from './components/TimelineViewer';
import { GalleryViewer } from './components/GalleryViewer';
import { SourcesViewer } from './components/SourcesViewer';
import { ProgressViewer } from './components/ProgressViewer';
import { QuizFinal } from './components/QuizFinal';
import { 
  Trophy, BookOpen, Gamepad2, Calendar, Landmark, 
  FileText, GraduationCap, Award, GraduationCap as CertIcon, 
  MapPin, LogOut, Sparkles, Star, Bell, Menu, X, Lightbulb, ChevronRight, Compass,
  Sun, Moon
} from 'lucide-react';

const INITIAL_PROGRESS: StudentProgress = {
  name: '',
  points: 0,
  completedSubthemes: [],
  gamesCompleted: [],
  badges: [],
  quizScores: {},
  level: 1
};

export default function App() {
  const [progress, setProgress] = useState<StudentProgress>(INITIAL_PROGRESS);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'inicio' | 'conteudos' | 'jogos' | 'linha' | 'galeria' | 'fontes' | 'quiz' | 'progresso'>('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('historia_7_ano_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('historia_7_ano_dark_mode', JSON.stringify(next));
      return next;
    });
  };
  
  // Particles or score toast notifications
  const [toast, setToast] = useState<{ show: boolean; text: string; points: number } | null>(null);

  // Load progress from localStorage on initialization
  useEffect(() => {
    const saved = localStorage.getItem('historia_7_ano_student_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name) {
          setProgress(parsed);
          setIsWelcomeOpen(false);
        }
      } catch (e) {
        console.error("Erro ao carregar dados locais de progresso.", e);
      }
    }
  }, []);

  // Save progress changes to localStorage
  const saveProgress = (next: StudentProgress) => {
    setProgress(next);
    localStorage.setItem('historia_7_ano_student_progress', JSON.stringify(next));
  };

  const handleNameSubmit = (nameName: string) => {
    const nextProg = {
      ...progress,
      name: nameName,
      points: 20 // 20 starter points!
    };
    saveProgress(nextProg);
    setIsWelcomeOpen(false);
    triggerToast(`Olá, ${nameName}! Bem-vindo(a) às aulas da Prof. Carla!`, 20);
  };

  const handleUpdateProgress = (updated: Partial<StudentProgress>) => {
    const next = { ...progress, ...updated };
    saveProgress(next);
  };

  const handleEarnPoints = (pAmount: number, source: string) => {
    const nextPts = progress.points + pAmount;
    const next = { ...progress, points: nextPts };
    saveProgress(next);
    triggerToast(`Ganhos +${pAmount} XP em ${source}!`, pAmount);
  };

  const handleUnlockBadge = (badgeId: string) => {
    if (progress.badges.includes(badgeId)) return;
    const nextBadges = [...progress.badges, badgeId];
    const next = { ...progress, badges: nextBadges };
    saveProgress(next);
    
    // Custom pop notification for unlocked badge
    triggerToast(`🎖️ Conquistaste uma Nova Medalha Histórica!`, 50);
  };

  const triggerToast = (text: string, pts: number) => {
    setToast({ show: true, text, points: pts });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleResetProgress = () => {
    if (window.confirm("Aviso: Queres reiniciar as tuas medalhas, pontuação e registo de nome no website?")) {
      localStorage.removeItem('historia_7_ano_student_progress');
      setProgress(INITIAL_PROGRESS);
      setIsWelcomeOpen(true);
      setActiveTab('inicio');
    }
  };

  // Level computation helper
  const getLvlName = (pts: number) => {
    if (pts < 200) return 'Aprendiz de Recolector';
    if (pts < 500) return 'Cidadão da Eclésia';
    if (pts < 900) return 'Cavaleiro do Condado';
    if (pts < 1400) return 'Escriba Real de Avis';
    return 'Mestre da Cronologia';
  };

  const currentLevelName = getLvlName(progress.points);

  const getLvlPercentage = (pts: number) => {
    if (pts < 200) return Math.min(100, Math.max(10, (pts / 200) * 100));
    if (pts < 500) return Math.min(100, Math.max(10, ((pts - 200) / 300) * 100));
    if (pts < 900) return Math.min(100, Math.max(10, ((pts - 500) / 400) * 100));
    if (pts < 1400) return Math.min(100, Math.max(10, ((pts - 900) / 500) * 100));
    return 100;
  };

  const activePercent = getLvlPercentage(progress.points);

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Compass },
    { id: 'conteudos', label: 'Conteúdos', icon: BookOpen },
    { id: 'jogos', label: 'Jogos e Desafios', icon: Gamepad2 },
    { id: 'linha', label: 'Linha do Tempo', icon: Calendar },
    { id: 'galeria', label: 'Galeria Histórica', icon: Landmark },
    { id: 'fontes', label: 'Fontes Históricas', icon: FileText },
    { id: 'quiz', label: 'Quiz Final', icon: GraduationCap },
    { id: 'progresso', label: 'O Meu Progresso', icon: Trophy }
  ];

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-amber-400 selection:text-indigo-900 transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-sky-50 text-slate-800'
    }`} id="applet-main-container">
      
      {/* Floating Sparkle Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -45, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-6 right-6 z-50 p-4 border-2 rounded-2xl shadow-2xl flex items-center gap-3.5 max-w-sm pointer-events-none transition-colors ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-white shadow-slate-950/50' : 'bg-white border-indigo-100 text-slate-800'
            }`}
            id="floating-score-notification"
          >
            <div className="h-10 w-10 shrink-0 rounded-xl bg-amber-400 text-indigo-950 font-black flex items-center justify-center font-mono text-xs shadow-md">
              +{toast.points} XP
            </div>
            <div className="space-y-0.5 text-left">
              <p className={`font-extrabold text-xs pr-2 leading-normal ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>{toast.text}</p>
              <p className="text-[10px] font-mono text-indigo-500 uppercase tracking-widest font-bold">Aventura em Curso</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* Name Acquisition Welcome modal */}
      {isWelcomeOpen && <WelcomeModal onNameSubmit={handleNameSubmit} />}
 
      {/* Header bar */}
      <header className={`sticky top-0 z-40 h-20 border-b-4 px-6 py-4 flex items-center justify-between shadow-sm transition-colors ${
        isDarkMode ? 'bg-slate-900 border-amber-500 text-white' : 'bg-white border-amber-400'
      }`} id="app-main-navbar">
        <div className="flex items-center gap-3.5">
          {/* Main Logo icon */}
          <div className="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-100 shrink-0">
            <Compass className="h-5 w-5 animate-spin-slow" />
          </div>
          <div className="text-left">
            <h1 className={`text-sm md:text-base font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>Aventura na História</h1>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Prof. Carla Oliveira</p>
          </div>
        </div>
 
        <div className="flex items-center gap-4">
          {/* Dark / Light theme toggler button */}
          <button
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
              isDarkMode
                ? 'bg-slate-850 border-slate-700 text-amber-400 hover:bg-slate-800'
                : 'bg-indigo-50 border-indigo-100 text-indigo-700 hover:bg-indigo-100/70'
            }`}
            title={isDarkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
          >
            {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          {/* User stats widget pill */}
          {!isWelcomeOpen && (
            <div className={`hidden sm:flex items-center gap-4 border-2 px-5 py-2 rounded-2xl text-xs font-semibold transition-colors ${
              isDarkMode 
                ? 'bg-slate-850 border-slate-700 text-slate-200' 
                : 'bg-indigo-50 border-indigo-100 text-indigo-900'
            }`}>
              <div className="text-right">
                <p className="text-[9px] font-bold text-amber-500 uppercase leading-none mb-1">Nível: {currentLevelName}</p>
                <p className={`text-xs font-black leading-none ${isDarkMode ? 'text-slate-200' : 'text-indigo-900'}`}>Olá, <span className="text-indigo-500 dark:text-indigo-405 uppercase font-extrabold">{progress.name}</span>!</p>
              </div>
              <div className="w-9 h-9 bg-amber-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-indigo-950 shrink-0 font-bold">
                🎓
              </div>
              <div className={`flex items-center gap-1 border px-2.5 py-1 rounded-full font-bold shadow-xs transition-colors ${
                isDarkMode ? 'bg-slate-900 border-slate-750 text-white' : 'bg-white border-indigo-150 text-indigo-900'
              }`}>
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>{progress.points} XP</span>
              </div>
            </div>
          )}
        </div>
 
        {/* Mobile menu trigger toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`p-2 rounded-lg border md:hidden cursor-pointer ${
            isDarkMode 
              ? 'border-slate-800 text-slate-200 hover:text-indigo-400' 
              : 'border-slate-200 text-slate-600 hover:text-indigo-600'
          }`}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Main Structural core layout */}
      <div className="flex-1 flex max-w-[1550px] mx-auto w-full" id="application-body-layout">
        <nav className={`hidden md:flex w-64 border-r p-6 flex-col gap-5 shrink-0 transition-colors ${
          isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-indigo-900 border-indigo-950 text-indigo-300'
        }`} id="app-sidebar-nav">
          <div className="space-y-1">
            <label className={`block text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-indigo-300'}`}>Navegar Temas</label>
            <p className={`text-xs font-semibold ${isDarkMode ? 'text-slate-550' : 'text-indigo-200/60'}`}>Atividades e avaliações do programa</p>
          </div>

          <div className="space-y-1.5" id="sidebar-menu-links">
            {menuItems.map(item => {
              const Icon = item.icon;
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer text-left ${
                    isSelected
                      ? isDarkMode
                        ? 'bg-slate-800 text-white rounded-xl border-b-4 border-slate-950 shadow-md font-black'
                        : 'bg-indigo-800 text-white rounded-xl border-b-4 border-indigo-950 shadow-md font-black'
                      : isDarkMode
                        ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                        : 'text-indigo-300 hover:text-white hover:bg-indigo-800/50'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Teacher box notes */}
          <div className="space-y-3 font-sans">
            <div className={`p-4 border rounded-2xl space-y-1.5 text-xs transition-colors ${
              isDarkMode ? 'bg-slate-850 border-slate-800 text-slate-300' : 'bg-indigo-800/30 border border-indigo-700/20 text-indigo-200'
            }`}>
              <p className="font-bold text-amber-500 flex items-center gap-1.5 text-[11px] font-mono leading-none">
                <Lightbulb className="h-3.5 w-3.5 text-amber-500 fill-amber-500/10" /> PROF. CARLA OLIVEIRA
              </p>
              <p className={`italic leading-relaxed font-medium ${isDarkMode ? 'text-slate-305' : 'text-indigo-100'}`}>
                &ldquo;Bem-vindo(a) à nossa plataforma digital, {progress.name || 'aluno'}! Juntos vamos explorar os mistérios do passado.&rdquo;
              </p>
            </div>

            <button
              onClick={handleResetProgress}
              className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border transition-all text-[11px] font-bold cursor-pointer font-sans ${
                isDarkMode 
                  ? 'border-slate-800 bg-slate-850 hover:bg-rose-950/20 hover:text-rose-450 hover:border-rose-900/40 text-slate-450'
                  : 'border-indigo-800/40 bg-indigo-950/20 hover:bg-rose-950/20 hover:text-rose-400 hover:border-rose-950/50 text-indigo-300'
              }`}
            >
              <LogOut className="h-3.5 w-3.5" /> Reiniciar Progresso
            </button>
          </div>

          {/* Sidebar dynamic progress indicator at bottom */}
          <div className="mt-auto">
            <div className={`p-4 rounded-2xl border transition-colors ${
              isDarkMode ? 'bg-slate-850 border-slate-800' : 'bg-indigo-850 border-indigo-805'
            }`}>
              <p className={`text-[10px] uppercase font-black mb-2 tracking-widest leading-none ${isDarkMode ? 'text-slate-450' : 'text-indigo-300'}`}>O Teu Nível</p>
              <div className={`w-full h-3 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-indigo-950'}`}>
                <div 
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{ width: `${activePercent}%` }}
                />
              </div>
              <p className="text-xs text-white mt-2 font-bold">{currentLevelName}</p>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150 }}
              className={`fixed inset-y-0 left-0 top-20 z-30 w-72 border-r p-6 flex flex-col justify-between md:hidden text-white transition-colors ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-indigo-900 border-indigo-950'
              }`}
            >
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-wider text-indigo-300 leading-none">Menu Aluno Digital</p>
                <div className="space-y-1">
                  {menuItems.map(item => {
                    const Icon = item.icon;
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id as any);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer text-left ${
                          isSelected
                            ? 'bg-indigo-800 text-white border-b-4 border-indigo-950 font-black shadow-md'
                            : 'text-indigo-300 hover:text-white hover:bg-indigo-800/50'
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reset bar mobile */}
              <div className="space-y-3">
                <div className="p-4 bg-indigo-800/40 border border-indigo-700/30 rounded-2xl text-xs leading-relaxed">
                  <p className="font-bold text-amber-400">Professora Carla:</p>
                  <p className="italic text-indigo-150 mt-1">&ldquo;O estudo constante constrói futuros brilhantes.&rdquo;</p>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleResetProgress();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-indigo-950/20 hover:bg-rose-950/30 rounded-xl text-indigo-300 hover:text-rose-450 text-xs font-bold cursor-pointer border border-indigo-950 hover:border-rose-950"
                >
                  Reiniciar Dados
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Station Viewports */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto w-full" id="content-viewport-layout">
          
          <AnimatePresence mode="wait">
            {/* TAB 1: Início Dashboard home screen */}
            {activeTab === 'inicio' && (
              <motion.div
                key="tab-home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8 text-left"
              >
                {/* Hero Greeting banner - Vibrant Theme */}
                <div className={`p-6 md:p-10 border-b-4 rounded-3xl relative overflow-hidden shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-indigo-150'
                }`}>
                  {/* Absolute decorations */}
                  <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
                  
                  <div className="space-y-4 max-w-2xl relative">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 font-mono text-xs font-black rounded-full border transition-colors ${
                      isDarkMode ? 'bg-slate-850 text-amber-400 border-slate-755' : 'bg-indigo-50 text-indigo-650 border-indigo-100'
                    }`}>
                      <Sparkles className="h-3 w-3 animate-pulse text-amber-400" /> PLATAFORMA DOCENTE CARLA OLIVEIRA
                    </span>
                    
                    <h2 className={`text-2xl md:text-3xl font-black tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>
                      Excelente trabalho, <span className="text-indigo-500 dark:text-indigo-405 font-extrabold">{progress.name || 'Estudante'}</span>!
                    </h2>
                    
                    <p className={`text-sm font-semibold leading-relaxed max-w-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Estás a meio do percurso das tuas aulas de História do 7.º Ano. Vamos continuar a tua aventura de forma interativa?
                    </p>

                  </div>

                  <button
                    onClick={() => setActiveTab('conteudos')}
                    className="shrink-0 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-2xl font-black shadow-lg shadow-green-100 border-b-4 border-green-700 active:translate-y-0.5 transition-all cursor-pointer text-sm font-black"
                  >
                    CONTINUAR AULA
                  </button>
                </div>

                {/* Dashboard layout blocks and widgets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Left block: Current Progress widget */}
                  <div className={`p-6 border-2 rounded-3xl space-y-4 shadow-xs transition-colors ${
                    isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-100 text-slate-800'
                  }`}>
                    <div className={`flex items-center gap-2 font-black text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>
                      <Trophy className="h-4.5 w-4.5 text-amber-500" />
                      <span>Os Meus Números de História</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className={`flex justify-between border-b pb-1.5 ${isDarkMode ? 'border-slate-800' : 'border-indigo-50'}`}>
                        <span className="text-slate-400 font-bold">Total de XP</span>
                        <span className={`font-bold ${isDarkMode ? 'text-amber-400' : 'text-indigo-900'}`}>{progress.points} XP</span>
                      </div>
                      <div className={`flex justify-between border-b pb-1.5 ${isDarkMode ? 'border-slate-800' : 'border-indigo-50'}`}>
                        <span className="text-slate-400 font-bold">Medalhas de Honra</span>
                        <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>{progress.badges.length} Unidades</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-bold">Capítulos Concluídos</span>
                        <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>{progress.completedSubthemes.length} de 10</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setActiveTab('progresso')}
                        className={`w-full py-2.5 border-2 rounded-xl text-xs font-black text-center transition cursor-pointer ${
                          isDarkMode 
                            ? 'bg-slate-850 hover:bg-slate-800 border-slate-750 text-amber-400' 
                            : 'bg-indigo-50 hover:bg-indigo-100 border-indigo-100 text-indigo-750'
                        }`}
                      >
                        Navegar para o Meu Progresso
                      </button>
                    </div>
                  </div>

                  {/* Mid block: Curriculum roadmap summary highlights */}
                  <div className={`col-span-1 md:col-span-2 p-6 border-2 rounded-3xl space-y-4 shadow-xs transition-colors ${
                    isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-100 text-slate-800'
                  }`}>
                    <div className={`flex items-center gap-2 font-black text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>
                      <BookOpen className="h-4.5 w-4.5 text-indigo-500" />
                      <span>Roteiro Pedagógico do 7.º Ano</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {[
                        { num: 'I', name: 'Das Sociedades Recoletoras às Primeiras Civilizações' },
                        { num: 'II', name: 'O Mundo Clássico: Atenas e a Civilização Romana' },
                        { num: 'III', name: 'A Idade Média: Senhorios, Reinos e a Fundação de Portugal' },
                        { num: 'IV', name: 'Crises e Revolução no Século XIV: 1383-1385' }
                      ].map((theme, idx) => (
                        <div 
                          key={idx} 
                          className={`p-3 border-2 rounded-2xl space-y-1 transition-all duration-200 ${
                            isDarkMode 
                              ? 'bg-slate-950 border-slate-850 hover:border-amber-500 text-slate-300' 
                              : 'bg-white border-slate-50 hover:border-amber-400 hover:shadow-xs text-slate-700'
                          }`}
                        >
                          <span className={`font-mono font-black text-[10px] uppercase tracking-widest ${isDarkMode ? 'text-amber-500' : 'text-indigo-500'}`}>UNIDADE {theme.num}</span>
                          <p className={`font-bold leading-normal ${isDarkMode ? 'text-slate-100' : 'text-slate-700'}`}>{theme.name}</p>
                        </div>
                      ))}
                    </div>

                    <p className={`text-[10px] font-black italic text-center leading-none ${isDarkMode ? 'text-amber-500' : 'text-indigo-400'}`}>
                      Todos os subtemas, curiosidades, flashcards e mini-quizzes estão baseados nas Aprendizagens Essenciais portuguesas!
                    </p>
                  </div>

                </div>

                {/* Direct action cards quick-access */}
                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono">Links Rápidos de Estudo</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { label: 'Exame Final', target: 'quiz', icon: GraduationCap, bg: 'hover:border-amber-400 hover:ring-4 hover:ring-amber-500/10' },
                      { label: 'Linha Temporal', target: 'linha', icon: Calendar, bg: 'hover:border-indigo-400 hover:ring-4 hover:ring-indigo-500/10' },
                      { label: 'Monumentos', target: 'galeria', icon: Landmark, bg: 'hover:border-purple-400 hover:ring-4 hover:ring-purple-500/10' },
                      { label: 'Fontes Escritas', target: 'fontes', icon: FileText, bg: 'hover:border-emerald-400 hover:ring-4 hover:ring-emerald-500/10' }
                    ].map(lnk => (
                      <button
                        key={lnk.label}
                        onClick={() => setActiveTab(lnk.target as any)}
                        className={`p-4 rounded-3xl border-2 text-center flex flex-col items-center justify-center gap-2.5 transition cursor-pointer ${lnk.bg} ${
                          isDarkMode 
                            ? 'bg-slate-900 border-slate-805 hover:bg-slate-850'
                            : 'bg-white border-slate-100'
                        }`}
                      >
                        <lnk.icon className="h-5 w-5 text-indigo-550" />
                        <span className={`text-xs font-black leading-normal ${isDarkMode ? 'text-white' : 'text-slate-805'}`}>{lnk.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Mini-Timeline Preview */}
                <div className={`h-24 rounded-3xl border-2 p-4 flex items-center justify-between gap-4 shadow-xs transition-colors ${
                  isDarkMode ? 'bg-slate-900 border-slate-850 text-slate-100' : 'bg-white border-slate-100 text-slate-800'
                }`}>
                  <div className={`px-4 border-r-2 text-left shrink-0 ${isDarkMode ? 'border-slate-800' : 'border-slate-105'}`}>
                    <span className={`text-xs font-black block uppercase leading-none mb-1 ${isDarkMode ? 'text-amber-400' : 'text-indigo-650'}`}>Paleolítico</span>
                    <span className="text-[10px] text-slate-400 font-bold font-mono">-2.5M anos</span>
                  </div>
                  <div className={`flex-1 h-1.5 relative rounded-full ${isDarkMode ? 'bg-slate-950' : 'bg-slate-100'}`}>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-3.5 h-3.5 bg-indigo-500 rounded-full border-2 border-white shadow-xs"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-3.5 h-3.5 bg-indigo-500 rounded-full border-2 border-white shadow-xs"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-5 h-5 bg-amber-500 rounded-full border-4 border-white shadow-sm"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[85%] w-3.5 h-3.5 bg-slate-300 rounded-full border-2 border-white shadow-xs"></div>
                  </div>
                  <div className={`px-4 border-l-2 text-right shrink-0 ${isDarkMode ? 'border-slate-800' : 'border-slate-105'}`}>
                    <span className={`text-xs font-black block uppercase leading-none mb-1 font-sans ${isDarkMode ? 'text-amber-400' : 'text-indigo-650'}`}>Séc. XIV</span>
                    <span className="text-[10px] text-slate-400 font-bold font-mono">Fim do Período</span>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAB 2: Conteúdos */}
            {activeTab === 'conteudos' && (
              <motion.div
                key="tab-conteudos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ThemeViewer
                  progress={progress}
                  onUpdateProgress={handleUpdateProgress}
                  onEarnPoints={handleEarnPoints}
                  onUnlockBadge={handleUnlockBadge}
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            )}

            {/* TAB 3: Jogos e Desafios */}
            {activeTab === 'jogos' && (
              <motion.div
                key="tab-jogos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GamesSection
                  progress={progress}
                  onUpdateProgress={handleUpdateProgress}
                  onEarnPoints={handleEarnPoints}
                  onUnlockBadge={handleUnlockBadge}
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            )}

            {/* TAB 4: Linha do Tempo */}
            {activeTab === 'linha' && (
              <motion.div
                key="tab-linha"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TimelineViewer isDarkMode={isDarkMode} />
              </motion.div>
            )}

            {/* TAB 5: Galeria Histórica */}
            {activeTab === 'galeria' && (
              <motion.div
                key="tab-galeria"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GalleryViewer isDarkMode={isDarkMode} />
              </motion.div>
            )}

            {/* TAB 6: Fontes Históricas */}
            {activeTab === 'fontes' && (
              <motion.div
                key="tab-fontes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SourcesViewer onEarnPoints={handleEarnPoints} isDarkMode={isDarkMode} />
              </motion.div>
            )}

            {/* TAB 7: Quiz Final */}
            {activeTab === 'quiz' && (
              <motion.div
                key="tab-quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <QuizFinal
                  progress={progress}
                  onUpdateProgress={handleUpdateProgress}
                  onEarnPoints={handleEarnPoints}
                  onUnlockBadge={handleUnlockBadge}
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            )}

            {/* TAB 8: O Meu Progresso */}
            {activeTab === 'progresso' && (
              <motion.div
                key="tab-progresso"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProgressViewer progress={progress} isDarkMode={isDarkMode} />
              </motion.div>
            )}

          </AnimatePresence>

        </main>
      </div>

      {/* Footer copyright */}
      <footer className={`border-t py-6 text-center text-xs mt-auto font-mono transition-colors ${
        isDarkMode ? 'border-slate-800 bg-slate-950 text-slate-500' : 'border-indigo-100 bg-indigo-50 text-indigo-900/60'
      }`} id="app-footer">
        <p>© 2026 Plataforma Educativa Especializada de História do 7.º Ano. Professora Carla Oliveira.</p>
        <p className="mt-1 text-[11px] text-slate-500">Desenvolvido em Português de Portugal com base nas Aprendizagens Essenciais do programa fidedigno.</p>
      </footer>

    </div>
  );
}
