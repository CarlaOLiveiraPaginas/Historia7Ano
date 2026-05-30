import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Award, GraduationCap, History, Star, Compass } from 'lucide-react';

interface WelcomeModalProps {
  onNameSubmit: (name: string) => void;
  savedName?: string;
}

export function WelcomeModal({ onNameSubmit, savedName }: WelcomeModalProps) {
  const [name, setName] = useState('');
  const [step, setStep] = useState(savedName ? 2 : 1);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, indica o teu nome verdadeiro para começarmos!');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleStart = () => {
    const finalName = name.trim() || savedName || 'Brave Explorer';
    onNameSubmit(finalName);
  };

  const currentName = name.trim() || savedName || 'Explorador';
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-950/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-lg overflow-hidden border-4 border-indigo-100 bg-white shadow-2xl rounded-3xl text-slate-800"
          id="welcome-card"
        >
          {/* Top subtle visual motif */}
          <div className="absolute top-0 inset-x-0 h-2 bg-linear-to-r from-amber-450 via-yellow-400 to-indigo-600" />
          
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border-2 border-indigo-100 shadow-md">
                <GraduationCap className="h-8 w-8" />
              </div>
            </div>

            {step === 1 ? (
              <motion.div
                key="step-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-center"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-black tracking-tight text-indigo-900 font-sans">
                    História do 7.º Ano
                  </h1>
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-500">
                    Bem-vindo à Aula Digital
                  </p>
                </div>

                <div className="text-slate-600 text-sm leading-relaxed p-5 bg-indigo-50/50 rounded-2xl border-2 border-indigo-100 text-left space-y-2">
                  <p className="font-black text-indigo-900 flex items-center gap-1.5 uppercase text-xs">
                    <Compass className="h-4 w-4 text-indigo-650" /> Mensagem da Professora Carla Oliveira:
                  </p>
                  <p className="italic text-xs font-semibold leading-relaxed">
                    &ldquo;Olá! Preparei esta plataforma interativa para te guiar pelas fascinantes civilizações do passado, desde o surgimento da humanidade até ao glorioso nascimento de Portugal. Vamos aprender História a jogar e a superar desafios!&rdquo;
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="space-y-2">
                    <label htmlFor="student-name-input" className="block text-xs font-black text-indigo-900 uppercase tracking-wider">
                      Como te chamas?
                    </label>
                    <input
                      id="student-name-input"
                      type="text"
                      className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 font-bold shadow-inner outline-none transition focus:border-amber-400 focus:bg-white text-base"
                      placeholder="Introduz o teu primeiro nome..."
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError('');
                      }}
                      autoComplete="off"
                    />
                    {error && (
                      <p className="text-xs text-rose-500 font-bold mt-1">
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    id="welcome-submit-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-4 text-indigo-950 font-black shadow-lg shadow-amber-100 hover:bg-amber-300 border-b-4 border-amber-600 active:translate-y-0.5 transition-all text-sm cursor-pointer"
                  >
                    Próximo Passo
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6 text-center"
              >
                <div className="space-y-3">
                  <h2 className="text-2xl font-black text-indigo-900 font-sans">
                    Olá, <span className="text-indigo-600">{currentName}</span>!
                  </h2>
                  <p className="text-slate-500 leading-relaxed text-sm font-semibold">
                    Estás pronto(a) para entrar na disciplina de História do 7.º Ano da professora <span className="text-indigo-700 font-black">Carla Oliveira</span>?
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 p-4 bg-indigo-50/50 rounded-2xl border-2 border-indigo-100 text-indigo-850 text-xs">
                  <div className="flex flex-col items-center gap-1.5 p-2 bg-white rounded-xl shadow-xs border border-indigo-100 font-bold">
                    <BookOpen className="h-4 w-4 text-amber-500" />
                    <span>4 Temas</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 bg-white rounded-xl shadow-xs border border-indigo-100 font-bold">
                    <History className="h-4 w-4 text-indigo-500" />
                    <span>Linha do Tempo</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-2 bg-white rounded-xl shadow-xs border border-indigo-100 font-bold">
                    <Award className="h-4 w-4 text-emerald-500" />
                    <span>Medalhas</span>
                  </div>
                </div>

                <div className="text-slate-600 text-xs text-left p-4 bg-indigo-55/40 rounded-2xl border-2 border-indigo-100/50 flex items-start gap-2 font-medium">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500 shrink-0 mt-0.5" />
                  <span>Conclui os Quizzes, responde às Atividades e joga os Desafios para acumulares pontos de experiência (XP) e subires de Nível!</span>
                </div>

                <button
                  id="welcome-start-btn"
                  onClick={handleStart}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 text-white font-black shadow-lg shadow-green-100 hover:bg-green-600 border-b-4 border-green-700 active:translate-y-0.5 transition-all text-sm cursor-pointer"
                >
                  <Compass className="h-4 w-4" /> Entrar na Aula Digital
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
