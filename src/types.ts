export interface StudentProgress {
  name: string;
  points: number;
  completedSubthemes: string[]; // IDs of subthemes finalized
  gamesCompleted: string[]; // IDs of games played
  badges: string[]; // List of badge IDs unlocked
  quizScores: Record<string, number>; // quiz ID -> percentage score
  lastQuizScore?: number;
  level: number;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string; // Name of Lucide icon
  colorClass: string; // Tailwind class
  category: 'conteudo' | 'jogos' | 'quiz' | 'geral';
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  hint: string;
  justification: string;
}

export interface ReflectionQuestion {
  question: string;
  guidePoints: string[];
}

export interface MiniQuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
}

export interface Subtheme {
  id: string;
  title: string;
  introductionText: string;
  contentSections: {
    title: string;
    text: string;
  }[];
  summary: string[];
  flashcards: Flashcard[];
  exercises: Exercise[];
  reflection: ReflectionQuestion;
  trivia: string[];
  miniQuiz: MiniQuizQuestion[];
}

export interface Theme {
  id: string;
  number: number;
  title: string;
  subthemes: Subtheme[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  themeId: string;
  description: string;
  imageUrl: string;
  details: string;
  trivia: string;
}

export interface HistoricalSource {
  id: string;
  title: string;
  type: 'texto' | 'arqueologico' | 'monumento' | 'mapa';
  period: string;
  imageUrl: string;
  transcriptionOrDescription: string;
  context: string;
  questions: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
}

export interface Monument {
  id: string;
  name: string;
  period: string;
  location: string;
  imageUrl: string;
  architectureDetails: string;
  historicalImportance: string;
}
