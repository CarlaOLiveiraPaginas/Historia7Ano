import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE_EVENTS } from '../data/timeline';
import { Subtheme, TimelineEvent } from '../types';
import { THEMES } from '../data/contents';
import { Calendar, Compass, Lightbulb, Info, ArrowUpRight, Search, Sparkles } from 'lucide-react';

interface TimelineViewerProps {
  isDarkMode?: boolean;
}

export function TimelineViewer({ isDarkMode }: TimelineViewerProps) {
  const [selectedThemeId, setSelectedThemeId] = useState<string>('all');
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);

  const filteredEvents = selectedThemeId === 'all'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(ev => ev.themeId === selectedThemeId);

  return (
    <div className="space-y-8">
      {/* Filters bar */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border rounded-2xl transition-colors ${
        isDarkMode ? 'border-slate-805 bg-slate-900/40 text-white' : 'bg-white border-indigo-100 text-slate-800'
      }`}>
        <div className="space-y-0.5">
          <h2 className={`text-sm font-bold flex items-center gap-1.5 font-sans ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
            <Compass className="h-4 w-4 text-amber-500" /> Navegador Cronológico
          </h2>
          <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Filtra os eventos curriculares por temas do 7.º Ano.</p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 md:pb-0">
          <button
            onClick={() => setSelectedThemeId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors ${
              selectedThemeId === 'all'
                ? 'bg-amber-500 text-slate-950 font-black'
                : isDarkMode
                  ? 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
                  : 'bg-indigo-50 border border-indigo-100 text-indigo-900 hover:bg-slate-100'
            }`}
          >
            Todos os Temas
          </button>
          {THEMES.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedThemeId(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors ${
                selectedThemeId === t.id
                  ? 'bg-amber-500 text-slate-950 font-black'
                  : isDarkMode
                    ? 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
                    : 'bg-indigo-50 border border-indigo-100 text-indigo-900 hover:bg-slate-100'
              }`}
            >
              Tema {t.number}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left Timeline list, Right Selected Detail Drawer panel */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Timeline Line node map */}
        <div className={`lg:col-span-3 space-y-6 relative border-l pl-6 ml-2 transition-colors ${
          isDarkMode ? 'border-slate-850' : 'border-indigo-100'
        }`}>
          
          <div className={`absolute top-0 bottom-0 left-[7px] w-0.5 bg-gradient-to-b ${
            isDarkMode ? 'from-amber-500 via-indigo-600 to-emerald-500/20' : 'from-amber-400 via-indigo-400 to-indigo-100'
          }`} />

          {filteredEvents.map((ev, i) => {
            const isSelected = activeEvent?.title === ev.title;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group relative p-5 border rounded-2xl transition cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
                  isSelected 
                    ? 'border-amber-500 bg-amber-500/5 shadow-sm' 
                    : isDarkMode
                      ? 'border-slate-800 hover:border-slate-700 bg-slate-900/10 hover:bg-slate-900/40'
                      : 'bg-white border-slate-100 hover:border-amber-400 hover:shadow-xl hover:shadow-indigo-100/40 text-slate-800'
                }`}
                onClick={() => setActiveEvent(ev)}
              >
                {/* Node dot anchor */}
                <div className={`absolute -left-[30px] top-[26px] h-4 w-4 rounded-full border-2 transition-colors ${
                  isSelected 
                    ? 'bg-amber-500 border-amber-400 ring-4 ring-amber-500/20' 
                    : isDarkMode 
                      ? 'bg-slate-950 border-slate-800 group-hover:border-slate-600'
                      : 'bg-white border-slate-350 group-hover:border-amber-400'
                }`} />

                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 font-mono text-xs font-black border border-amber-500/15">
                      <Calendar className="h-3 w-3" /> {ev.year}
                    </span>
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400 font-black'}`}>
                      {ev.themeId === 'tema-1' ? 'Módulo 1' : ev.themeId === 'tema-2' ? 'Módulo 2' : ev.themeId === 'tema-3' ? 'Módulo 3' : 'Módulo 4'}
                    </span>
                  </div>

                  <h3 className={`font-black text-base leading-tight transition-colors ${
                    isSelected 
                      ? 'text-amber-505 font-extrabold' 
                      : isDarkMode 
                        ? 'text-white group-hover:text-amber-305' 
                        : 'text-slate-900 group-hover:text-indigo-900'
                  }`}>
                    {ev.title}
                  </h3>
                  
                  <p className={`text-xs leading-normal line-clamp-2 max-w-lg md:line-clamp-none ${
                    isDarkMode ? 'text-slate-405' : 'text-slate-600 font-medium'
                  }`}>
                    {ev.description}
                  </p>
                </div>

                {/* Event thumbnail */}
                <div className={`shrink-0 w-full md:w-20 h-16 rounded-xl overflow-hidden border relative transition-colors ${
                  isDarkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'
                }`}>
                  <img
                    src={ev.imageUrl}
                    alt={ev.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-300">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Landmark Details Sidebar Drawer */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {activeEvent ? (
              <motion.div
                key={activeEvent.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`sticky top-6 p-6 border rounded-2xl space-y-5 shadow-xl text-left transition-colors ${
                  isDarkMode 
                    ? 'border-slate-800 bg-slate-950 text-white shadow-slate-950/30' 
                    : 'bg-white border-indigo-100 text-slate-800 shadow-indigo-100/20'
                }`}
              >
                <div className={`rounded-xl overflow-hidden aspect-video border bg-slate-900 transition-colors ${
                  isDarkMode ? 'border-slate-850' : 'border-indigo-100/50'
                }`}>
                  <img
                    src={activeEvent.imageUrl}
                    alt={activeEvent.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-amber-500 font-mono text-sm font-black block">{activeEvent.year}</span>
                  <h3 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>{activeEvent.title}</h3>
                </div>

                <div className={`p-4 rounded-xl border text-xs md:text-sm leading-relaxed font-sans space-y-3 transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-850/80 text-slate-300' 
                    : 'bg-indigo-50/40 border-indigo-100/60 text-slate-800'
                }`}>
                  <p className={`flex items-center gap-1 font-bold text-[11px] font-mono border-b pb-1.5 ${
                    isDarkMode ? 'text-slate-400 border-slate-800' : 'text-indigo-900 border-indigo-105'
                  }`}>
                    <Info className="h-3.5 w-3.5 text-indigo-500" /> CONTEXTO E IMPORTÂNCIA HISTÓRICA
                  </p>
                  <p className="leading-relaxed font-medium">{activeEvent.details}</p>
                </div>

                <div className={`p-4 border rounded-xl text-xs leading-normal space-y-1.5 font-sans transition-colors ${
                  isDarkMode 
                    ? 'bg-indigo-950/15 border-indigo-900/30 text-indigo-300' 
                    : 'bg-amber-50 border-amber-205 text-amber-955'
                }`}>
                  <p className="font-bold flex items-center gap-1.5 text-[11px] text-amber-500">
                    <Lightbulb className="h-4 w-4" /> Sabias Que?
                  </p>
                  <p className={`italic leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-800 font-semibold'}`}>&ldquo;{activeEvent.trivia}&rdquo;</p>
                </div>

              </motion.div>
            ) : (
              <div className={`sticky top-4 p-8 border rounded-2xl text-center space-y-4 transition-colors ${
                isDarkMode ? 'border-slate-800 bg-slate-900/20' : 'border-slate-100 bg-white'
              }`}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full mx-auto ${
                  isDarkMode ? 'bg-slate-950/80 text-amber-500' : 'bg-indigo-50 text-indigo-650'
                }`}>
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className={`font-black text-sm ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>Explora a História</h3>
                  <p className={`text-xs max-w-xs mx-auto leading-normal ${isDarkMode ? 'text-slate-450' : 'text-slate-500 font-medium'}`}>
                    Clica em qualquer acontecimento da linha temporal à esquerda para veres explicações detalhadas, imagens reais e curiosidades fabulosas da professora regente.
                  </p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
