import React, { useState } from 'react';
import { motion } from 'motion/react';
import { StudentProgress, Badge } from '../types';
import { THEMES } from '../data/contents';
import { 
  Trophy, Award, BookOpen, Gamepad2, GraduationCap, 
  MapPin, Printer, Star, Heart, Calendar, Landmark, CheckCircle 
} from 'lucide-react';

interface ProgressViewerProps {
  progress: StudentProgress;
  isDarkMode?: boolean;
}

const ALL_POSSIBLE_BADGES: Badge[] = [
  { id: 'badge-tema-1', title: 'Espírito Descobridor', description: 'Concluiu todas as lições sobre sociedades recoletoras e primeiras civilizações.', iconName: 'Compass', colorClass: 'from-amber-500 to-yellow-600', category: 'conteudo' },
  { id: 'badge-tema-2', title: 'Herança Clássica', description: 'Concluiu todos os capítulos de Atenas e o apogeu do Império Romano.', iconName: 'Landmark', colorClass: 'from-indigo-500 to-purple-600', category: 'conteudo' },
  { id: 'badge-tema-3', title: 'Cavaleiro do Condado', description: 'Concluiu os capítulos do Feudalismo, Islão e a gloriosa formação de Portugal.', iconName: 'Award', colorClass: 'from-red-500 to-orange-600', category: 'conteudo' },
  { id: 'badge-tema-4', title: 'Voz da Burguesia', description: 'Concluiu os capítulos da revolução de 1385, as cortes medievais e as feiras.', iconName: 'BookOpen', colorClass: 'from-emerald-500 to-green-600', category: 'conteudo' },
  { id: 'badge-tf', title: 'Detetor de Verdades', description: 'Acertou em cheio no Verdadeiro ou Falso de treino de História.', iconName: 'CheckCircle', colorClass: 'from-cyan-500 to-blue-600', category: 'jogos' },
  { id: 'badge-matches', title: 'Mestre da Associação', description: 'Completou a correspondência de conceitos com dedução cirúrgica.', iconName: 'Trophy', colorClass: 'from-pink-500 to-rose-600', category: 'jogos' },
  { id: 'badge-escape', title: 'Lenda de Avis', description: 'Descobriu todas as senhas secretas e fugiu do Escape Room medieval.', iconName: 'Trophy', colorClass: 'from-yellow-400 to-amber-600', category: 'jogos' },
  { id: 'badge-treasure', title: 'Pá de Ouro Arqueológica', description: 'Solucionou as charadas e cavou todos os objetos da caça ao tesouro.', iconName: 'Star', colorClass: 'from-teal-500 to-emerald-600', category: 'jogos' },
  { id: 'badge-final', title: 'Sábio Cronólogo', description: 'Concluiu o Quiz Final Global com pontuação heróica extraordinária.', iconName: 'GraduationCap', colorClass: 'from-amber-400 via-yellow-300 to-indigo-600', category: 'quiz' }
];

export function ProgressViewer({ progress, isDarkMode }: ProgressViewerProps) {
  const [schoolInput, setSchoolInput] = useState('');
  const [currDate, setCurrDate] = useState(new Date().toLocaleDateString('pt-PT'));

  // Calculate Levels dynamically
  const getLevelInfo = (pts: number) => {
    if (pts < 200) {
      return { level: 1, title: 'Aprendiz de Recolector', min: 0, max: 200, next: 200 };
    } else if (pts < 500) {
      return { level: 2, title: 'Cidadão da Eclésia', min: 200, max: 500, next: 500 };
    } else if (pts < 900) {
      return { level: 3, title: 'Cavaleiro do Condado', min: 500, max: 900, next: 900 };
    } else if (pts < 1400) {
      return { level: 4, title: 'Escriba Real de Avis', min: 900, max: 1400, next: 1400 };
    } else {
      return { level: 5, title: 'Mestre da Cronologia', min: 1400, max: 2500, next: 2500 };
    }
  };

  const levelInfo = getLevelInfo(progress.points);
  const totalSubthemesInProgram = THEMES.reduce((sum, t) => sum + t.subthemes.length, 0);
  const completionPercentage = Math.round((progress.completedSubthemes.length / totalSubthemesInProgram) * 105); // slightly booster weight
  const finalPercentage = Math.min(completionPercentage, 100);

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="space-y-8 text-left">
      
      {/* Level and Global Progress Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Dynamic Level card */}
        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest">Nível de Progresso</span>
              <h3 className="text-xl font-bold text-white tracking-tight">{levelInfo.title}</h3>
            </div>
            <div className="h-12 w-12 rounded-xl bg-amber-500/10 text-amber-500 font-mono text-lg font-black flex items-center justify-center border border-amber-500/20 shadow-inner">
              Lvl {levelInfo.level}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{progress.points} XP do Aluno</span>
              <span>Próximo Nível: {levelInfo.next} XP</span>
            </div>
            {/* ProgressBar */}
            <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="bg-linear-to-r from-amber-500 via-yellow-400 to-amber-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(((progress.points - levelInfo.min) / (levelInfo.max - levelInfo.min)) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Total Points and lessons statistics */}
        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">Temas do Currículo</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Estatísticas de Estudo</h3>
            </div>
            <BookOpen className="h-6 w-6 text-indigo-400" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-2 bg-slate-900/50 border border-slate-900 rounded-lg">
              <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">Subtemas Concluídos</p>
              <p className="text-base font-bold text-white mt-0.5">{progress.completedSubthemes.length} de {totalSubthemesInProgram}</p>
            </div>
            <div className="p-2 bg-slate-900/50 border border-slate-900 rounded-lg">
              <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">Módulos Concluídos</p>
              <p className="text-base font-bold text-white mt-0.5">
                {THEMES.filter(theme => theme.subthemes.every(sub => progress.completedSubthemes.includes(sub.id))).length} de 4
              </p>
            </div>
          </div>
        </div>

        {/* Interactive progress percentages */}
        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest font-sans">Conclusão Integral</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Progresso Total</h3>
            </div>
            <span className="text-lg font-bold font-mono text-emerald-400">{finalPercentage}%</span>
          </div>

          <div className="space-y-2">
            <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="bg-linear-to-r from-emerald-500 to-green-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${finalPercentage}%` }}
              />
            </div>
            <p className="text-[10px] font-mono text-slate-400 leading-normal">
              Acerta nos mini-quizzes de final de página para marcares as lições como vencidas!
            </p>
          </div>
        </div>

      </div>

      {/* Badges cabinet / Medalhas */}
      <div className="space-y-4">
        <div className="border-b border-slate-850 pb-2">
          <h3 className="text-base font-bold text-white flex items-center gap-1.5">
            <Trophy className="h-5 w-5 text-amber-500" /> Galeria dos Distintivos e Medalhas
          </h3>
          <p className="text-xs text-slate-450 mt-0.5">Aqui estão as condecorações honoríficas concedidas pela professora Carla Oliveira pelas tuas vitórias curriculares.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_POSSIBLE_BADGES.map((badge) => {
            const isUnlocked = progress.badges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`relative p-4 rounded-xl border transition duration-350 flex items-start gap-4 ${
                  isUnlocked
                    ? 'bg-slate-900/80 border-amber-500/30'
                    : 'bg-slate-950/40 border-slate-900 opacity-60 grayscale'
                }`}
              >
                <div className={`p-3 rounded-xl shrink-0 bg-linear-to-br ${isUnlocked ? badge.colorClass + ' text-slate-950 shadow-md' : 'bg-slate-900 text-slate-500'}`}>
                  <Award className="h-6 w-6" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-xs md:text-sm text-white">{badge.title}</h4>
                    {isUnlocked && (
                      <span className="text-[9px] font-mono font-bold bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded-sm border border-amber-500/15">
                        DESBLOQUEADO
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Diploma and Certificate printable area */}
      <div className="space-y-4 pt-4">
        <div className="border-b border-slate-850 pb-2">
          <h3 className="text-base font-bold text-white flex items-center gap-1.5">
            <GraduationCap className="h-5 w-5 text-indigo-400 animate-pulse" /> Certificado de Mérito da Aula Digital
          </h3>
          <p className="text-xs text-slate-450 mt-0.5">Indica os teus dados abaixo para obteres o teu diploma fidedigno de História do 7.º Ano pronto a imprimir ou guardar em PDF!</p>
        </div>

        {/* Controls inputs for certificate customizable text */}
        <div className="p-4 border border-slate-850 bg-slate-900/20 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Identificação da Escola</label>
            <input
              type="text"
              className="w-full bg-slate-950 rounded-lg border border-slate-800 p-2 text-xs text-white placeholder-slate-700 outline-none focus:border-amber-500"
              placeholder="Ex: Escola Secundária de Guimarães..."
              value={schoolInput}
              onChange={(e) => setSchoolInput(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Data do Diploma</label>
            <input
              type="text"
              className="w-full bg-slate-950 rounded-lg border border-slate-800 p-2 text-xs text-white placeholder-slate-700 outline-none focus:border-amber-500"
              value={currDate}
              onChange={(e) => setCurrDate(e.target.value)}
            />
          </div>
        </div>

        {/* DIPLOMA GRAPHICAL LAYOUT */}
        <div 
          id="cert-printable-area" 
          className="relative max-w-2xl mx-auto border-8 border-amber-600 bg-slate-950 p-8 md:p-12 rounded-2xl shadow-2xl text-center space-y-6 printable-cert"
        >
          {/* Subtle gold motifs and circles inside */}
          <div className="absolute top-4 left-4 h-8 w-8 border border-amber-500/10 rounded-full" />
          <div className="absolute bottom-4 right-4 h-16 w-16 border-4 border-amber-500/5 rounded-full" />

          {/* Heading seal and logo */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <GraduationCap className="h-10 w-10 text-amber-500" />
            <h4 className="text-xs uppercase tracking-widest font-mono text-amber-500 font-bold">República Portuguesa • Ministérios da Educação</h4>
            <h2 className="text-lg md:text-xl font-serif text-slate-450 tracking-tight">Certificado de Aproveitamento Escolar</h2>
          </div>

          <div className="space-y-4">
            <p className="text-xs md:text-sm text-slate-400 italic font-serif">Pelo presente fidedigno documento se certifica que o estudante de História do 7.º Ano</p>
            
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase hover:text-amber-300 transition duration-300" id="cert-student-name">
              {progress.name}
            </h1>

            <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto font-serif leading-relaxed">
              exibiu proficiência extraordinária e completou com mérito exemplar todos os capítulos e testes de autoavaliação correspondentes ao plano curricular da disciplina de <span className="text-white font-serif font-bold">História do 7.º Ano</span>.
            </p>

            {schoolInput && (
              <p className="text-xs md:text-sm text-indigo-300 font-semibold uppercase tracking-wider font-sans">
                Registado com distinção em: {schoolInput}
              </p>
            )}
          </div>

          {/* Signatures block and date */}
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-900 font-serif">
            <div className="space-y-1">
              <span className="block text-slate-500 uppercase font-mono text-[10px] tracking-widest">A Professora Regente</span>
              <p className="text-xs font-semibold text-white italic border-b border-slate-900 pb-1.5 px-4 mx-auto max-w-[150px]">Carla Oliveira</p>
            </div>
            <div className="space-y-1">
              <span className="block text-slate-500 uppercase font-mono text-[10px] tracking-widest font-serif text-slate-500">Data de Outorga</span>
              <p className="text-xs font-semibold text-white mt-1">{currDate}</p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 bg-amber-500 text-slate-950 font-bold rounded-lg px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono">
            <Star className="h-3 w-3 fill-slate-950" /> Nível {levelInfo.level} • {progress.points} XP <Star className="h-3 w-3 fill-slate-950" />
          </div>
        </div>

        {/* Print triggering controls buttons */}
        <div className="flex justify-center pt-2">
          <button
            onClick={handlePrintCertificate}
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-yellow-400 px-5 py-3 text-slate-950 font-bold shadow-lg shadow-amber-500/10 hover:opacity-95 transition text-xs md:text-sm cursor-pointer"
          >
            <Printer className="h-4.5 w-4.5" /> Guardar / Imprimir Diploma Digital
          </button>
        </div>

        <p className="text-[10px] text-slate-500 font-mono text-center">
          Dica: No menu de impressão do teu browser, podes ativar as imagens de fundo para visualizar as lindas bordas escuras.
        </p>
      </div>

    </div>
  );
}
