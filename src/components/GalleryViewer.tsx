import React, { useState } from 'react';
import { HISTORICAL_MONUMENTS } from '../data/sources';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Compass, Landmark, Info } from 'lucide-react';

interface GalleryViewerProps {
  isDarkMode?: boolean;
}

export function GalleryViewer({ isDarkMode }: GalleryViewerProps) {
  const [activeModel, setActiveModel] = useState<typeof HISTORICAL_MONUMENTS[0] | null>(HISTORICAL_MONUMENTS[0]);

  return (
    <div className="space-y-8">
      {/* Intro section */}
      <div className={`p-4 border rounded-2xl text-left space-y-1 transition-colors ${
        isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-indigo-100'
      }`}>
        <h3 className={`font-black text-sm flex items-center gap-1.5 ${isDarkMode ? 'text-white' : 'text-indigo-950'}`}>
          <Landmark className="h-4 w-4 text-amber-500" /> Galeria dos Monumentos e Arquitetura do 7.º Ano
        </h3>
        <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500 font-medium'}`}>
          Descobre os marcos arquitetónicos emblemáticos reais integrados no currículo de História do 7.º Ano. Analisa as ordens e formas de pedra de cada civilização antiga e medieval.
        </p>
      </div>

      {/* Monuments Visual interactive interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Monuments selector lists */}
        <div className="lg:col-span-1 space-y-3 text-left">
          {HISTORICAL_MONUMENTS.map((mon) => {
            const isSelected = activeModel?.id === mon.id;
            return (
              <button
                key={mon.id}
                onClick={() => setActiveModel(mon)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-250 cursor-pointer flex items-center gap-4 ${
                  isSelected
                    ? isDarkMode
                      ? 'bg-amber-500/10 border-amber-500 text-amber-300 shadow-md shadow-amber-500/5'
                      : 'bg-indigo-50 border-indigo-200 text-indigo-950 font-black shadow-md shadow-indigo-100/10'
                    : isDarkMode
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                      : 'bg-white border-slate-105 hover:border-slate-200 text-slate-700 font-medium'
                }`}
              >
                <div className={`h-14 w-20 shrink-0 rounded-lg overflow-hidden border bg-slate-950 transition-colors ${
                  isDarkMode ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <img
                    src={mon.imageUrl}
                    alt={mon.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-0.5 min-w-0">
                  <h4 className={`font-bold text-xs md:text-sm truncate transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>{mon.name}</h4>
                  <p className={`text-[11px] font-mono font-bold uppercase tracking-widest ${
                    isDarkMode ? 'text-slate-500' : 'text-indigo-400'
                  }`}>{mon.period}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Monument Details Showcase */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {activeModel ? (
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className={`border rounded-2xl overflow-hidden shadow-xl text-left transition-colors ${
                  isDarkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-100 bg-white'
                }`}
              >
                {/* Hero Image */}
                <div className={`relative aspect-video w-full bg-slate-900 border-b transition-colors ${
                  isDarkMode ? 'border-slate-850' : 'border-slate-150'
                }`}>
                  <img
                    src={activeModel.imageUrl}
                    alt={activeModel.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-x-0 bottom-0 p-6 pt-12 bg-gradient-to-t ${
                    isDarkMode ? 'from-slate-950 via-slate-950/40 to-transparent' : 'from-indigo-950 via-indigo-950/45 to-transparent'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">{activeModel.period}</span>
                        <h2 className="text-xl md:text-2xl font-black text-white leading-tight">{activeModel.name}</h2>
                      </div>
                      
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/95 px-3 py-1.5 text-xs text-slate-300 font-mono border border-slate-800 self-start sm:self-center">
                        <MapPin className="h-3.5 w-3.5 text-amber-500 shrink-0" /> {activeModel.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info and stats breakdown details */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className={`p-4 rounded-xl border text-xs md:text-sm space-y-2 leading-relaxed transition-colors ${
                    isDarkMode 
                      ? 'border-indigo-950/30 bg-indigo-950/15 text-slate-300' 
                      : 'border-indigo-100 bg-indigo-50/50 text-slate-800 font-medium'
                  }`}>
                    <p className={`font-bold flex items-center gap-1.5 text-[11px] font-mono border-b pb-1.5 ${
                      isDarkMode ? 'text-indigo-400 border-indigo-900/40' : 'text-indigo-900 border-indigo-105'
                    }`}>
                      <Compass className="h-4 w-4 text-indigo-500" /> COMPREENSÃO ARTÍSTICA E ELEMENTOS DE ARQUITETURA
                    </p>
                    <p className="leading-relaxed font-semibold">{activeModel.architectureDetails}</p>
                  </div>

                  <div className={`p-4 rounded-xl border text-xs md:text-sm space-y-2 leading-relaxed transition-colors ${
                    isDarkMode 
                      ? 'border-slate-850 bg-slate-900/50 text-slate-300' 
                      : 'border-amber-100 bg-amber-50/50 text-slate-850 font-medium'
                  }`}>
                    <p className={`font-bold flex items-center gap-1.5 text-[11px] font-mono border-b pb-1.5 ${
                      isDarkMode ? 'text-amber-400 border-slate-800' : 'text-amber-900 border-amber-205'
                    }`}>
                      <Info className="h-4 w-4 text-amber-505" /> IMPORTÂNCIA HISTÓRICA E SOCIAL NAS APRENDIZAGENS ESSENCIAIS
                    </p>
                    <p className="leading-relaxed font-semibold">{activeModel.historicalImportance}</p>
                  </div>
                </div>

              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
