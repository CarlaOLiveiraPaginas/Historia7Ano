import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, Check, X, ArrowRight, Lock, Unlock, Search, Compass, 
  HelpCircle, Sparkles, Trophy, Shuffle, RotateCcw, ArrowUp, ArrowDown, Award, Lightbulb
} from 'lucide-react';
import { StudentProgress } from '../types';
import { 
  TRUE_FALSE_GAMES, CONCEPT_MATCHES, COMPL_SENTENCES, 
  ESCAPE_ROOM_STEPS, CHRONO_CHALLENGES, TREASURE_HUNT_CLUES 
} from '../data/gamesData';

interface GamesSectionProps {
  progress: StudentProgress;
  onUpdateProgress: (updated: Partial<StudentProgress>) => void;
  onEarnPoints: (points: number, source: string) => void;
  onUnlockBadge: (badgeId: string) => void;
  isDarkMode?: boolean;
}

export function GamesSection({ progress, onUpdateProgress, onEarnPoints, onUnlockBadge, isDarkMode }: GamesSectionProps) {
  const [activeGame, setActiveGame] = useState<'tf' | 'match' | 'fill' | 'escape' | 'treasure' | 'chrono'>('tf');

  // --- Verdadeiro ou Falso State ---
  const [tfIndex, setTfIndex] = useState(0);
  const [tfSelected, setTfSelected] = useState<boolean | null>(null);
  const [tfShowFeedback, setTfShowFeedback] = useState(false);
  const [tfPointsScored, setTfPointsScored] = useState(0);

  // --- Correspondência de Conceitos State ---
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // list of successfully matched terms
  const [shuffledDefs, setShuffledDefs] = useState<{term: string, definition: string}[]>([]);
  const [matchError, setMatchError] = useState(false);

  // --- Completar Frases State ---
  const [fillIndex, setFillIndex] = useState(0);
  const [fillSelectedWord, setFillSelectedWord] = useState('');
  const [fillShowFeedback, setFillShowFeedback] = useState(false);
  const [fillAnswerCorrect, setFillAnswerCorrect] = useState(false);

  // --- Escape Room State ---
  const [escapeStep, setEscapeStep] = useState(1);
  const [escapeInput, setEscapeInput] = useState('');
  const [escapeShowFeedback, setEscapeShowFeedback] = useState(false);
  const [escapeIsCorrect, setEscapeIsCorrect] = useState(false);
  const [escapeLockState, setEscapeLockState] = useState<'locked' | 'unlocked'>('locked');
  const [escapeCompleted, setEscapeCompleted] = useState(false);

  // --- Caça ao Tesouro State ---
  const [treasureIndex, setTreasureIndex] = useState(0);
  const [treasureSelected, setTreasureSelected] = useState('');
  const [treasureStatus, setTreasureStatus] = useState<'idle' | 'excavating' | 'found' | 'missed'>('idle');

  // --- Desafios Cronológicos State ---
  const [chronoItems, setChronoItems] = useState<{ id: string; year: number; event: string }[]>([]);
  const [chronoChecked, setChronoChecked] = useState(false);
  const [chronoSuccess, setChronoSuccess] = useState(false);

  // Initialize data shuffles
  useEffect(() => {
    resetConceptMatches();
    resetChronoItems();
  }, []);

  const resetConceptMatches = () => {
    setSelectedTerm(null);
    setMatchedPairs([]);
    // Shuffle the definitions
    const shuffled = [...CONCEPT_MATCHES]
      .map(item => ({ ...item }))
      .sort(() => Math.random() - 0.5);
    setShuffledDefs(shuffled);
  };

  const resetChronoItems = () => {
    setChronoChecked(false);
    setChronoSuccess(false);
    // Take 4 random events and shuffle them poorly
    const selected = [...CHRONO_CHALLENGES]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    setChronoItems(selected);
  };

  // --- Handlers: True/False ---
  const handleTFAnswer = (answer: boolean) => {
    if (tfShowFeedback) return;
    setTfSelected(answer);
    setTfShowFeedback(true);
    const question = TRUE_FALSE_GAMES[tfIndex];
    if (question.isTrue === answer) {
      setTfPointsScored(prev => prev + 25);
      onEarnPoints(25, `Jogo Verdadeiro/Falso: Pergunta ${tfIndex + 1}`);
    }
  };

  const handleTFNext = () => {
    setTfShowFeedback(false);
    setTfSelected(null);
    if (tfIndex < TRUE_FALSE_GAMES.length - 1) {
      setTfIndex(prev => prev + 1);
    } else {
      // Completed last question
      onUnlockBadge('badge-tf');
      alert(`Parabéns, ${progress.name}! Concluíste o Verdadeiro ou Falso de treino! Acumulaste +${tfPointsScored} Pontos!`);
      setTfIndex(0);
      setTfPointsScored(0);
    }
  };

  // --- Handlers: Matches ---
  const selectTerm = (term: string) => {
    if (matchedPairs.includes(term)) return;
    setSelectedTerm(term);
    setMatchError(false);
  };

  const selectDefinition = (defTerm: string) => {
    if (!selectedTerm) return;
    if (selectedTerm === defTerm) {
      // Success match
      const nextMatched = [...matchedPairs, selectedTerm];
      setMatchedPairs(nextMatched);
      setSelectedTerm(null);
      onEarnPoints(15, `Associação: ${selectedTerm}`);

      // All resolved
      if (nextMatched.length === CONCEPT_MATCHES.length) {
        onUnlockBadge('badge-matches');
        alert(`Belo trabalho, ${progress.name}! Decifraste toda a correspondência de conceitos com mestria!`);
      }
    } else {
      setMatchError(true);
      setTimeout(() => setMatchError(false), 900);
    }
  };

  // --- Handlers: Fill Sentences ---
  const handleWordSelect = (word: string) => {
    if (fillShowFeedback) return;
    setFillSelectedWord(word);
  };

  const handleValidateFill = () => {
    if (fillShowFeedback || !fillSelectedWord) return;
    const target = COMPL_SENTENCES[fillIndex].blankAnswer;
    const isCorrect = fillSelectedWord.toLowerCase() === target.toLowerCase();
    
    setFillAnswerCorrect(isCorrect);
    setFillShowFeedback(true);

    if (isCorrect) {
      onEarnPoints(25, `Completar Frase ${fillIndex + 1}`);
    }
  };

  const handleFillNext = () => {
    setFillShowFeedback(false);
    setFillSelectedWord('');
    if (fillIndex < COMPL_SENTENCES.length - 1) {
      setFillIndex(prev => prev + 1);
    } else {
      onUnlockBadge('badge-fill-blanks');
      alert(`Incrível! Completaste as frases curriculares e ganhaste a tua medalha de escrita, ${progress.name}!`);
      setFillIndex(0);
    }
  };

  // --- Handlers: Escape Room ---
  const handleValidateEscape = (e: React.FormEvent) => {
    e.preventDefault();
    if (escapeShowFeedback || escapeLockState === 'unlocked') return;

    const currentStep = ESCAPE_ROOM_STEPS.find(s => s.step === escapeStep)!;
    const isCorrect = escapeInput.trim().toLowerCase() === currentStep.correctAnswer.toLowerCase();

    setEscapeIsCorrect(isCorrect);
    setEscapeShowFeedback(true);

    if (isCorrect) {
      setEscapeLockState('unlocked');
      onEarnPoints(currentStep.pointsAwarded, `Escape Room Passo ${escapeStep}`);
    }
  };

  const handleEscapeNextStep = () => {
    setEscapeInput('');
    setEscapeShowFeedback(false);
    setEscapeLockState('locked');

    if (escapeStep < ESCAPE_ROOM_STEPS.length) {
      setEscapeStep(prev => prev + 1);
    } else {
      setEscapeCompleted(true);
      onUnlockBadge('badge-escape');
    }
  };

  const handleResetEscape = () => {
    setEscapeStep(1);
    setEscapeInput('');
    setEscapeShowFeedback(false);
    setEscapeLockState('locked');
    setEscapeCompleted(false);
  };

  // --- Handlers: Treasure Hunt ---
  const handleDigTreasure = (choice: string) => {
    if (treasureStatus !== 'idle') return;
    
    setTreasureSelected(choice);
    setTreasureStatus('excavating');

    setTimeout(() => {
      const clue = TREASURE_HUNT_CLUES[treasureIndex];
      const isCorrect = choice.toLowerCase() === clue.targetObject.toLowerCase();
      
      if (isCorrect) {
        setTreasureStatus('found');
        onEarnPoints(30, `Escavação de ${clue.targetObject}`);
      } else {
        setTreasureStatus('missed');
      }
    }, 1200);
  };

  const handleTreasureNext = () => {
    setTreasureSelected('');
    setTreasureStatus('idle');

    if (treasureIndex < TREASURE_HUNT_CLUES.length - 1) {
      setTreasureIndex(prev => prev + 1);
    } else {
      onUnlockBadge('badge-treasure');
      alert(`Parabéns arqueólogo ${progress.name}! Descobriste todos os tesouros enterrados da Pré-História e Idade Média.`);
      setTreasureIndex(0);
    }
  };

  // --- Handlers: Chrono Sorting ---
  const handleMoveChronoItem = (index: number, direction: 'up' | 'down') => {
    if (chronoChecked) return;
    const items = [...chronoItems];
    if (direction === 'up' && index > 0) {
      const temp = items[index];
      items[index] = items[index - 1];
      items[index - 1] = temp;
    } else if (direction === 'down' && index < items.length - 1) {
      const temp = items[index];
      items[index] = items[index + 1];
      items[index + 1] = temp;
    }
    setChronoItems(items);
  };

  const handleValidateChrono = () => {
    if (chronoChecked) return;
    setChronoChecked(true);

    // Verify sorted ascending by year
    let correct = true;
    for (let i = 0; i < chronoItems.length - 1; i++) {
      if (chronoItems[i].year > chronoItems[i+1].year) {
        correct = false;
        break;
      }
    }

    setChronoSuccess(correct);
    if (correct) {
      onEarnPoints(40, 'Desafio de Linha Temporal');
      // Unlock badge if games count is high
      onUnlockBadge('badge-chrono');
    }
  };

  return (
    <div className="space-y-6">
      {/* Game Selector Header Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950/40 p-1.5 rounded-xl space-x-1 overflow-x-auto scrollbar-none">
        {[
          { id: 'tf', label: 'Verdadeiro / Falso', icon: HelpCircle },
          { id: 'match', label: 'Correspondência', icon: Trophy },
          { id: 'fill', label: 'Completar Frases', icon: Sparkles },
          { id: 'escape', label: 'Escape Room', icon: Lock },
          { id: 'treasure', label: 'Caça ao Tesouro', icon: Search },
          { id: 'chrono', label: 'Desafio Cronológico', icon: Compass }
        ].map(g => {
          const Icon = g.icon;
          const isSelected = activeGame === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setActiveGame(g.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Icon className="h-4 w-4" />
              {g.label}
            </button>
          );
        })}
      </div>

      {/* Main Active Game Panel Card */}
      <div className="border border-slate-800 bg-slate-950 rounded-2xl overflow-hidden shadow-xl min-h-[400px] flex flex-col justify-between" id="active-game-workspace">
        <div className="p-6 md:p-8 space-y-6">
          
          <AnimatePresence mode="wait">
            {/* GAME 1: Verdadeiro ou Falso */}
            {activeGame === 'tf' && (
              <motion.div
                key="g-tf"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-500">QUESTÃO {tfIndex+1} de {TRUE_FALSE_GAMES.length}</span>
                  <span className="text-xs font-mono text-slate-400">Pontuação Acumulada: {tfPointsScored} Pts</span>
                </div>

                <div className="p-6 md:p-8 bg-slate-900/60 rounded-2xl border border-slate-800 text-center">
                  <p className="text-base md:text-lg font-bold leading-relaxed text-slate-100">
                    &ldquo;{TRUE_FALSE_GAMES[tfIndex].statement}&rdquo;
                  </p>
                </div>

                {/* Answers buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    disabled={tfShowFeedback}
                    onClick={() => handleTFAnswer(true)}
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border border-emerald-900/50 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-400 font-bold transition cursor-pointer disabled:opacity-40"
                  >
                    <Check className="h-5 w-5" /> Verdadeiro
                  </button>
                  <button
                    disabled={tfShowFeedback}
                    onClick={() => handleTFAnswer(false)}
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border border-rose-900/50 bg-rose-950/20 hover:bg-rose-900/30 text-rose-400 font-bold transition cursor-pointer disabled:opacity-40"
                  >
                    <X className="h-5 w-5" /> Falso
                  </button>
                </div>

                {/* True/False Feedback */}
                {tfShowFeedback && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-5 rounded-xl text-xs md:text-sm leading-normal border ${
                      tfSelected === TRUE_FALSE_GAMES[tfIndex].isTrue
                        ? 'bg-emerald-950/20 text-emerald-300 border-emerald-900/35'
                        : 'bg-rose-950/20 text-rose-300 border-rose-900/35'
                    }`}
                  >
                    <p className="font-bold mb-1">
                      {tfSelected === TRUE_FALSE_GAMES[tfIndex].isTrue 
                        ? `✓ Excelente, ${progress.name}! Resposta correta! (+25 Pontos)` 
                        : `✗ Errado, ${progress.name}! Mas não desanimes.`
                      }
                    </p>
                    <p>{TRUE_FALSE_GAMES[tfIndex].justification}</p>
                    <button
                      onClick={handleTFNext}
                      className="mt-4 flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-850 text-white font-semibold rounded-lg text-xs cursor-pointer border border-slate-700"
                    >
                      Continuar <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* GAME 2: Correspondência de Conceitos */}
            {activeGame === 'match' && (
              <motion.div
                key="g-match"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-500">CORRELAÇÃO HISTÓRICA</span>
                  <span className="text-xs font-mono text-slate-400">Pares Conectados: {matchedPairs.length} de {CONCEPT_MATCHES.length}</span>
                </div>
                
                <p className="text-xs text-slate-400 font-mono text-center">
                  Clica num termo azul à esquerda e, de seguida, associa à sua definição correta à direita!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                  {/* Terms Column */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono text-center">Termo</p>
                    {CONCEPT_MATCHES.map(concept => {
                      const isMatched = matchedPairs.includes(concept.term);
                      const isSelected = selectedTerm === concept.term;
                      return (
                        <button
                          key={concept.term}
                          disabled={isMatched}
                          onClick={() => selectTerm(concept.term)}
                          className={`w-full text-left p-3.5 rounded-xl border transition text-xs md:text-sm font-bold flex items-center justify-between cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-950/10 border-emerald-500/30 text-emerald-500'
                              : isSelected
                                ? 'bg-amber-600/10 border-amber-500 text-amber-300 ring-2 ring-amber-500/20'
                                : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200'
                          }`}
                        >
                          <span>{concept.term}</span>
                          {isMatched && <Check className="h-4 w-4 text-emerald-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Definitions Column */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono text-center">Definição Programática</p>
                    {shuffledDefs.map((def, i) => {
                      const isMatched = matchedPairs.includes(def.term);
                      const isCheckingThis = selectedTerm !== null;
                      return (
                        <button
                          key={i}
                          disabled={isMatched || !isCheckingThis}
                          onClick={() => selectDefinition(def.term)}
                          className={`w-full text-left p-3.5 rounded-xl border transition text-xs md:text-sm flex justify-between gap-2.5 items-center ${
                            isMatched
                              ? 'bg-emerald-950/10 border-emerald-500/30 text-emerald-500 font-medium'
                              : isCheckingThis
                                ? matchError
                                  ? 'border-rose-500 text-rose-300 bg-rose-500/5 animate-pulse'
                                  : 'bg-indigo-900/10 border-indigo-700 text-indigo-200 hover:bg-slate-900 cursor-pointer'
                                : 'bg-slate-900/50 border-slate-800 text-slate-500 cursor-not-allowed'
                          }`}
                        >
                          <span>{def.definition}</span>
                          {isMatched && <Check className="h-4 w-4 text-emerald-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    onClick={resetConceptMatches}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-xs cursor-pointer border border-slate-800"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Baralhar Novamente
                  </button>
                </div>
              </motion.div>
            )}

            {/* GAME 3: Completar Frases */}
            {activeGame === 'fill' && (
              <motion.div
                key="g-fill"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-500">COMPLETAR A FRASE {fillIndex+1} de {COMPL_SENTENCES.length}</span>
                </div>

                {/* Displaying active sentence sentence */}
                <div className="p-6 md:p-8 bg-slate-900/50 rounded-2xl border border-slate-800 leading-relaxed text-sm md:text-base text-slate-200">
                  {COMPL_SENTENCES[fillIndex].textBefore}{' '}
                  <span className="inline-block border-b-2 border-dashed border-amber-500 bg-amber-500/5 px-4 min-w-[120px] text-center text-amber-300 font-bold">
                    {fillSelectedWord || '❔'}
                  </span>{' '}
                  {COMPL_SENTENCES[fillIndex].textAfter}
                </div>

                {/* Options grid word options */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {COMPL_SENTENCES.map(item => item.blankAnswer)
                    .sort(() => Math.random() - 0.5) // basic random words
                    .map((word, wIdx) => (
                      <button
                        key={wIdx}
                        disabled={fillShowFeedback}
                        onClick={() => handleWordSelect(word)}
                        className={`p-3 rounded-lg border text-xs md:text-sm font-semibold transition cursor-pointer ${
                          fillSelectedWord === word
                            ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold'
                            : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200'
                        }`}
                      >
                        {word}
                      </button>
                    ))}
                </div>

                {/* Validation feedbacks */}
                {fillShowFeedback ? (
                  <div className={`p-4 rounded-xl text-xs md:text-sm border flex items-start gap-3 ${
                    fillAnswerCorrect ? 'bg-emerald-950/20 text-emerald-300 border-emerald-900/35' : 'bg-rose-950/20 text-rose-300 border-rose-900/35'
                  }`}>
                    {fillAnswerCorrect ? (
                      <div>
                        <p className="font-bold mb-1">✓ Muito Bem, {progress.name}! Resposta exata. (+25 Pts)</p>
                        <p className="text-xs">Identificaste o termo correto que preenche a lacuna do raciocínio histórico.</p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-bold mb-1">✗ Resposta Incorreta, {progress.name}!</p>
                        <p className="text-xs">Lembra-te do programa: {COMPL_SENTENCES[fillIndex].textBefore} ({COMPL_SENTENCES[fillIndex].blankAnswer}) ...</p>
                      </div>
                    )}
                    <button
                      onClick={handleFillNext}
                      className="ml-auto shrink-0 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-850 text-white rounded-lg text-xs font-bold border border-slate-700 whitespace-nowrap cursor-pointer"
                    >
                      Continuar
                    </button>
                  </div>
                ) : (
                  <button
                    disabled={!fillSelectedWord}
                    onClick={handleValidateFill}
                    className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition text-xs md:text-sm cursor-pointer disabled:opacity-50"
                  >
                    Validar Resposta
                  </button>
                )}
              </motion.div>
            )}

            {/* GAME 4: Escape Room Histórico */}
            {activeGame === 'escape' && (
              <motion.div
                key="g-escape"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {escapeCompleted ? (
                  <div className="text-center p-6 space-y-4">
                    <Trophy className="h-16 w-16 text-yellow-400 mx-auto animate-bounce" />
                    <h3 className="text-xl md:text-2xl font-bold text-white">Parabéns! Fuga Bem Sucedida!</h3>
                    <p className="text-slate-300 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                      Conseguiste decifrar todos os enigmas intelectuais de séculos e abriste o lendário cadeado de Avis, {progress.name}! Sobreviveste com honras ao Escape Room de História!
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-500 text-xs">
                      <Award className="h-4 w-4" /> Desbloqueaste o Distintivo: Guardião de Segredos
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={handleResetEscape}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
                      >
                        Jogar Novamente
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-500">PORTÃO DE CLAVE {escapeStep} de {ESCAPE_ROOM_STEPS.length}</span>
                      <div className="flex items-center gap-1">
                        {ESCAPE_ROOM_STEPS.map(s => (
                          <div
                            key={s.step}
                            className={`h-2.5 w-2.5 rounded-full ${
                              s.step < escapeStep
                                ? 'bg-emerald-500'
                                : s.step === escapeStep
                                  ? 'bg-amber-500 animate-pulse'
                                  : 'bg-slate-800'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Staged Narrative plot */}
                    <div className="p-5 bg-slate-900/40 rounded-2xl border border-slate-800/80 space-y-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-xl border ${escapeLockState === 'unlocked' ? 'bg-emerald-500/15 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/15 border-rose-500/20 text-rose-400'}`}>
                          {escapeLockState === 'unlocked' ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                        </div>
                        <h4 className="font-bold text-white text-sm md:text-base">
                          {ESCAPE_ROOM_STEPS[escapeStep - 1].title}
                        </h4>
                      </div>
                      
                      <p className="text-xs md:text-sm text-slate-300 leading-normal italic bg-slate-950/40 p-3 rounded-lg">
                        &ldquo;{ESCAPE_ROOM_STEPS[escapeStep - 1].story}&rdquo;
                      </p>

                      <div className="pt-2">
                        <p className="text-xs font-bold text-indigo-400">Pista Enigmática:</p>
                        <p className="text-xs text-slate-450 mt-0.5">{ESCAPE_ROOM_STEPS[escapeStep - 1].clue}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-900 space-y-1">
                        <p className="text-xs font-bold font-mono text-yellow-400">DESAFIO DO GUARDIÃO:</p>
                        <p className="text-sm font-semibold text-slate-200">{ESCAPE_ROOM_STEPS[escapeStep - 1].riddle}</p>
                      </div>
                    </div>

                    {/* Action form */}
                    <form onSubmit={handleValidateEscape} className="space-y-4">
                      {escapeLockState === 'unlocked' ? (
                        <div className="p-4 bg-emerald-950/25 border border-emerald-900/40 text-emerald-300 rounded-xl text-xs space-y-2">
                          <p className="font-bold flex items-center gap-1.5 text-sm">✓ Código correto! Clave Desbloqueada!</p>
                          <p>O cadeado saltou! Fazer clique em continuar para avançar para a próxima divisão escura.</p>
                          <button
                            type="button"
                            onClick={handleEscapeNextStep}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-850 hover:border-slate-600 text-white font-bold rounded-lg cursor-pointer border border-slate-700"
                          >
                            Passar Próxima Porta
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <input
                            type="text"
                            className="w-full rounded-xl border border-slate-850 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-700 outline-none transition focus:border-amber-500"
                            placeholder="Digita a palavra chave aqui em minúsculas..."
                            value={escapeInput}
                            onChange={(e) => {
                              setEscapeInput(e.target.value);
                              if (escapeShowFeedback) setEscapeShowFeedback(false);
                            }}
                          />
                          
                          {escapeShowFeedback && !escapeIsCorrect && (
                            <p className="text-xs text-rose-500 font-medium">
                              Código incorreto! Tenta debater e analisar a pista e preceitos históricos.
                            </p>
                          )}

                          <button
                            type="submit"
                            disabled={!escapeInput}
                            className="w-full py-3 rounded-xl bg-linear-to-r from-amber-500 to-yellow-400 hover:opacity-95 text-slate-950 font-bold transition text-xs md:text-sm cursor-pointer disabled:opacity-50"
                          >
                            Introduzir Código de Clave
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                )}
              </motion.div>
            )}

            {/* GAME 5: Caça ao Tesouro Arqueológica */}
            {activeGame === 'treasure' && (
              <motion.div
                key="g-treasure"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-500 font-sans">ESCAVAÇÃO ARQUEOLÓGICA DE TREINO</span>
                  <span className="text-xs font-mono text-slate-400">Sítio {treasureIndex+1} de {TREASURE_HUNT_CLUES.length}</span>
                </div>

                <div className="p-5 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3 shrink-y">
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">Enigma do Pátio:</p>
                  <p className="text-sm font-semibold text-slate-100 leading-normal">
                    &ldquo;{TREASURE_HUNT_CLUES[treasureIndex].riddle}&rdquo;
                  </p>
                  <p className="text-xs text-slate-450 italic mt-1 bg-slate-950/40 p-2.5 rounded-lg border-l-2 border-indigo-500">
                    Pista de campo: {TREASURE_HUNT_CLUES[treasureIndex].hint}
                  </p>
                </div>

                {/* Excavating status display screen */}
                {treasureStatus === 'idle' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    {TREASURE_HUNT_CLUES[treasureIndex].options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleDigTreasure(opt)}
                        className="p-4 rounded-xl border border-slate-850 bg-slate-900 hover:bg-slate-850 hover:border-amber-500/50 hover:shadow-lg transition text-slate-200 hover:text-white font-bold text-xs md:text-sm text-center flex flex-col items-center justify-center gap-2 cursor-pointer"
                      >
                        <Search className="h-5 w-5 text-indigo-400" />
                        <span>Escavar {opt}</span>
                      </button>
                    ))}
                  </div>
                )}

                {treasureStatus === 'excavating' && (
                  <div className="py-12 text-center space-y-3">
                    <div className="animate-spin h-8 w-8 border-4 border-amber-500 border-t-transparent rounded-full mx-auto" />
                    <p className="text-xs font-mono text-slate-400">Escavando com pincel suave de arqueólogo em terra fofa...</p>
                  </div>
                )}

                {treasureStatus === 'found' && (
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="p-6 text-center bg-emerald-950/20 text-emerald-300 border border-emerald-900/30 rounded-2xl space-y-4"
                  >
                    <Trophy className="h-12 w-12 text-yellow-400 mx-auto animate-bounce" />
                    <h4 className="font-bold text-base md:text-lg">Incrível, descobrirmos o tesouro!</h4>
                    <p className="text-xs md:text-sm leading-normal max-w-md mx-auto">
                      Identificaste exatamente o objeto arqueológico curinga: <span className="text-white font-bold uppercase">{treasureSelected}</span>! Valem-te 30 Pontos virtuais de História.
                    </p>
                    <button
                      onClick={handleTreasureNext}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold cursor-pointer border border-slate-700"
                    >
                      Seguir para Próximo Sítio
                    </button>
                  </motion.div>
                )}

                {treasureStatus === 'missed' && (
                  <div className="p-6 text-center bg-rose-950/20 text-rose-300 border border-rose-900/30 rounded-2xl space-y-4 font-sans">
                    <p className="font-bold">✗ Nada nobre por aqui...</p>
                    <p className="text-xs">Nas escavações encontraste apenas pedras vulcânicas vulgares. O objeto procurado fica em outro lado.</p>
                    <button
                      onClick={() => setTreasureStatus('idle')}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold cursor-pointer border border-slate-700 animate-pulse"
                    >
                      Limpar Sítio e Re-Escavar
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* GAME 6: Desafios Cronológicos de Reordenação */}
            {activeGame === 'chrono' && (
              <motion.div
                key="g-chrono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">Desordenador Cronológico</span>
                </div>

                <p className="text-xs text-slate-400 font-mono text-center">
                  Reorganiza os acontecimentos históricos do mais antigo (topo) para o mais recente (fundo) usando as setas de ordenação!
                </p>

                {/* Items container list and controls */}
                <div className="space-y-2 mt-2">
                  {chronoItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </div>
                        <div className="space-y-0.5 text-left">
                          <p className="text-xs md:text-sm font-semibold text-slate-200 leading-normal">{item.event}</p>
                          {chronoChecked && (
                            <p className="text-[11px] font-mono font-bold text-amber-500">
                              Ano: {item.year < 0 ? `${Math.abs(item.year)} a.C.` : `${item.year} d.C.`}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Sorting controls arrows */}
                      {!chronoChecked && (
                        <div className="flex items-center rounded-lg bg-slate-950 border border-slate-850 p-1 divide-x divide-slate-800">
                          <button
                            onClick={() => handleMoveChronoItem(index, 'up')}
                            disabled={index === 0}
                            className="p-1 px-2.5 text-slate-400 hover:text-white hover:bg-slate-900 disabled:opacity-30 cursor-pointer"
                          >
                            <ArrowUp className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleMoveChronoItem(index, 'down')}
                            disabled={index === chronoItems.length - 1}
                            className="p-1 px-2.5 text-slate-400 hover:text-white hover:bg-slate-900 disabled:opacity-30 cursor-pointer"
                          >
                            <ArrowDown className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Validation and restart */}
                {chronoChecked ? (
                  chronoSuccess ? (
                    <div className="p-4 bg-emerald-950/20 text-emerald-300 border border-emerald-900/30 rounded-xl text-xs space-y-2 text-center">
                      <p className="font-bold text-sm">✓ Solucionado com mestria! Ordem exata! (+40 Pts)</p>
                      <p>Sabe o teu tempo linear! Colocaste todos os séculos na correspondente gaveta histórica.</p>
                      <button
                        onClick={resetChronoItems}
                        className="mt-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs"
                      >
                        Carregar Novo Desafio
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 bg-rose-950/20 text-rose-300 border border-rose-900/30 rounded-xl text-xs space-y-3 text-center">
                      <p className="font-bold text-sm">✗ Ordem Desalinhada!</p>
                      <p>Olha para os anos revelados! Houve um tropeço temporal na cronologia do programa.</p>
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => setChronoChecked(false)}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs cursor-pointer"
                        >
                          Corrigir Ordem
                        </button>
                        <button
                          onClick={resetChronoItems}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs cursor-pointer"
                        >
                          Jogar Outra Vez
                        </button>
                      </div>
                    </div>
                  )
                ) : (
                  <button
                    onClick={handleValidateChrono}
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition text-xs md:text-sm cursor-pointer"
                  >
                    Validar Sequência Cronológica
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
