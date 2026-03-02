import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Briefcase, 
  Target, 
  Sparkles, 
  Loader2, 
  ArrowLeft,
  Search,
  User,
  Lightbulb,
  ClipboardList,
  MessageSquare
} from 'lucide-react';
import { COMPETENCIES, QUIZ_QUESTIONS } from './constants';
import { Competency, CareerSuggestion, QuizOption } from './types';
import { getCareerSuggestions, identifyCompetenciesFromQuiz } from './services/matchingService';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [step, setStep] = useState<'intro' | 'mode_select' | 'assessment' | 'quiz' | 'results'>('intro');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<CareerSuggestion[]>([]);
  const [identifiedCompetencies, setIdentifiedCompetencies] = useState<Competency[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCompetency = (id: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedIds(newSet);
  };

  const handleAnalyze = async (competenciesToUse?: Competency[]) => {
    const finalCompetencies = competenciesToUse || COMPETENCIES.filter(c => selectedIds.has(c.id));
    if (finalCompetencies.length === 0) return;
    
    setLoading(true);
    setStep('results');
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      const results = getCareerSuggestions(finalCompetencies);
      setSuggestions(results);
      setIdentifiedCompetencies(finalCompetencies);
      setLoading(false);
    }, 1500);
  };

  const handleQuizOptionSelect = (option: QuizOption) => {
    const newScores = { ...quizScores };
    Object.entries(option.scores).forEach(([compId, score]) => {
      newScores[compId] = (newScores[compId] || 0) + score;
    });
    setQuizScores(newScores);

    if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      setLoading(true);
      setStep('results');
      setTimeout(() => {
        const identified = identifyCompetenciesFromQuiz(newScores);
        const results = getCareerSuggestions(identified);
        setSuggestions(results);
        setIdentifiedCompetencies(identified);
        setLoading(false);
      }, 1500);
    }
  };

  const filteredCompetencies = COMPETENCIES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-slate-900 font-sans selection:bg-orange-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://mardeniebla.es/wp-content/uploads/2019/11/logo_mar-de-niebla-300x156.jpg" 
              alt="Logo Mar de Niebla" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Orientador Laboral</span>
              <span className="font-bold text-xl">Conecta <span className="text-orange-600">Competencias</span></span>
            </div>
          </div>
          {step !== 'intro' && (
            <button 
              onClick={() => {
                if (step === 'results') setStep('mode_select');
                else if (step === 'assessment' || step === 'quiz') setStep('mode_select');
                else setStep('intro');
              }}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              <ArrowLeft size={16} />
              Volver
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto text-center space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Descubre tu <span className="text-orange-600">potencial profesional</span> real.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Identifica tus competencias clave y deja que nuestro sistema sugiera los roles y áreas donde brillarás con éxito.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {[
                  { icon: <User className="text-blue-500" />, title: "Autoconocimiento", desc: "Evalúa tus habilidades actuales." },
                  { icon: <Sparkles className="text-amber-500" />, title: "Análisis Local", desc: "Procesamos tu perfil de forma privada." },
                  { icon: <Briefcase className="text-orange-500" />, title: "Oportunidades", desc: "Encuentra tu puesto ideal." }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="mb-2">{item.icon}</div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setStep('mode_select')}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-orange-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 hover:bg-orange-700"
              >
                Comenzar Evaluación
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </motion.div>
          )}

          {step === 'mode_select' && (
            <motion.div 
              key="mode_select"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto space-y-8 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-slate-900">¿Cómo prefieres empezar?</h2>
                <p className="text-slate-500">Elige el método que te resulte más cómodo.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button 
                  onClick={() => setStep('assessment')}
                  className="group p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-orange-500 hover:shadow-xl transition-all text-left space-y-4"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ClipboardList size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Selección Directa</h3>
                    <p className="text-slate-500">Si ya conoces tus puntos fuertes, elígelos directamente de nuestra lista completa.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setStep('quiz')}
                  className="group p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-orange-500 hover:shadow-xl transition-all text-left space-y-4"
                >
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <MessageSquare size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Cuestionario Guiado</h3>
                    <p className="text-slate-500">Responde unas breves preguntas y nuestro sistema identificará tus competencias por ti.</p>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto space-y-8"
            >
              <div className="space-y-2 text-center">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-widest">
                  Pregunta {currentQuizIndex + 1} de {QUIZ_QUESTIONS.length}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{QUIZ_QUESTIONS[currentQuizIndex].question}</h2>
              </div>

              <div className="space-y-4">
                {QUIZ_QUESTIONS[currentQuizIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizOptionSelect(option)}
                    className="w-full p-6 text-left bg-white border-2 border-slate-100 rounded-2xl hover:border-orange-500 hover:bg-orange-50 transition-all font-semibold text-slate-700 flex justify-between items-center group"
                  >
                    {option.text}
                    <ChevronRight className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" size={20} />
                  </button>
                ))}
              </div>

              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-orange-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </motion.div>
          )}

          {step === 'assessment' && (
            <motion.div 
              key="assessment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-3xl font-bold text-slate-900">Selecciona tus competencias</h2>
                  <p className="text-slate-500">Elige al menos 3 competencias que mejor te definan.</p>
                </div>
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Buscar competencia..."
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCompetencies.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => toggleCompetency(comp.id)}
                    className={cn(
                      "group relative p-5 text-left rounded-2xl border-2 transition-all duration-200",
                      selectedIds.has(comp.id) 
                        ? "bg-orange-50 border-orange-500 shadow-md" 
                        : "bg-white border-slate-100 hover:border-slate-300 shadow-sm"
                    )}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                        comp.category === 'Cognitiva' ? "bg-purple-100 text-purple-700" :
                        comp.category === 'Interpersonal' ? "bg-blue-100 text-blue-700" :
                        comp.category === 'Liderazgo' ? "bg-indigo-100 text-indigo-700" :
                        comp.category === 'Organizativa' ? "bg-teal-100 text-teal-700" :
                        comp.category === 'Personal' ? "bg-rose-100 text-rose-700" :
                        comp.category === 'Digital' ? "bg-cyan-100 text-cyan-700" :
                        comp.category === 'Estratégica' ? "bg-amber-100 text-amber-700" :
                        comp.category === 'Hard' ? "bg-orange-100 text-orange-700" :
                        comp.category === 'Soft' ? "bg-emerald-100 text-emerald-700" :
                        "bg-slate-100 text-slate-700"
                      )}>
                        {comp.category}
                      </span>
                      {selectedIds.has(comp.id) && (
                        <CheckCircle2 className="text-orange-500" size={20} />
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">{comp.name}</h3>
                    <p className="text-sm text-slate-500 leading-snug">{comp.description}</p>
                  </button>
                ))}
              </div>

              <div className="sticky bottom-8 flex justify-center">
                <button 
                  disabled={selectedIds.size < 3}
                  onClick={() => handleAnalyze()}
                  className={cn(
                    "px-10 py-4 rounded-2xl font-bold text-white shadow-xl transition-all flex items-center gap-2",
                    selectedIds.size >= 3 
                      ? "bg-slate-900 hover:bg-slate-800 scale-105" 
                      : "bg-slate-300 cursor-not-allowed"
                  )}
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                  {selectedIds.size < 3 ? `Selecciona ${3 - selectedIds.size} más` : "Analizar mi Perfil"}
                </button>
              </div>
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-10"
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin"></div>
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500" size={32} />
                  </div>
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900">Analizando tu perfil...</h2>
                    <p className="text-slate-500">Conectando tus habilidades con el mercado laboral.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center space-y-4">
                    <h2 className="text-4xl font-extrabold text-slate-900">Tu Mapa de Oportunidades</h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                      Basado en tu perfil de <span className="font-bold text-slate-900">{identifiedCompetencies.length} competencias</span>, 
                      hemos identificado estas rutas profesionales para ti.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                      {identifiedCompetencies.map(c => (
                        <span key={c.id} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                          {c.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    {suggestions.map((suggestion, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="p-8 md:flex gap-8">
                          <div className="md:w-1/3 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-bold">
                              <Briefcase size={16} />
                              Área Profesional
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">{suggestion.area}</h3>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                              <div className="flex items-start gap-2 text-slate-600 italic text-sm">
                                <Lightbulb className="text-amber-500 shrink-0" size={18} />
                                <p>{suggestion.reasoning}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="md:w-2/3 mt-6 md:mt-0">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Puestos Sugeridos</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {suggestion.roles.map((role, rIdx) => (
                                <div 
                                  key={rIdx}
                                  className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-orange-200 hover:bg-orange-50/30 transition-all group"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Target size={18} />
                                  </div>
                                  <span className="font-semibold text-slate-700">{role}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex justify-center pt-8">
                    <button 
                      onClick={() => {
                        setStep('mode_select');
                        setSelectedIds(new Set());
                        setQuizScores({});
                        setCurrentQuizIndex(0);
                      }}
                      className="px-8 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      Reiniciar Evaluación
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 border-t border-slate-200 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-2">
          <p className="font-bold text-slate-900">Asociación Mar de Niebla</p>
          <p className="text-slate-400 text-sm">© 2024 Conecta Competencias | Mar de Niebla. Herramienta 100% estática y privada.</p>
        </div>
      </footer>
    </div>
  );
}
