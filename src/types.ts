export interface Competency {
  id: string;
  name: string;
  description: string;
  category: 'Cognitiva' | 'Interpersonal' | 'Liderazgo' | 'Organizativa' | 'Personal' | 'Digital' | 'Estratégica' | 'Hard' | 'Soft' | 'Technical';
}

export interface CareerSuggestion {
  area: string;
  roles: string[];
  reasoning: string;
}

export interface AssessmentResult {
  selectedCompetencies: Competency[];
  suggestions: CareerSuggestion[];
}

export interface QuizOption {
  text: string;
  scores: Record<string, number>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface JobRole {
  title: string;
  requiredCompetencies: string[];
}

export interface CareerArea {
  name: string;
  description: string;
  roles: JobRole[];
}
