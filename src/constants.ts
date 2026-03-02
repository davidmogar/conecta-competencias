import { Competency, QuizQuestion, CareerArea } from './types';

export const COMPETENCIES: Competency[] = [
  // 1️⃣ Competencias cognitivas
  { id: 'analytical_thinking', name: 'Pensamiento analítico', description: 'Capacidad para desglosar problemas complejos en partes manejables.', category: 'Cognitiva' },
  { id: 'systemic_thinking', name: 'Pensamiento sistémico', description: 'Comprender cómo las diferentes partes de un sistema interactúan entre sí.', category: 'Cognitiva' },
  { id: 'strategic_thinking', name: 'Pensamiento estratégico', description: 'Habilidad para planificar a largo plazo y anticipar tendencias.', category: 'Cognitiva' },
  { id: 'critical_thinking', name: 'Pensamiento crítico', description: 'Evaluar información de manera objetiva para formar un juicio razonado.', category: 'Cognitiva' },
  { id: 'complex_problem_solving', name: 'Resolución de problemas complejos', description: 'Encontrar soluciones efectivas a problemas difíciles y multifacéticos.', category: 'Cognitiva' },
  { id: 'abstraction', name: 'Capacidad de abstracción', description: 'Identificar patrones y conceptos generales a partir de datos específicos.', category: 'Cognitiva' },
  { id: 'decision_making_uncertainty', name: 'Toma de decisiones bajo incertidumbre', description: 'Actuar con decisión cuando no se dispone de toda la información.', category: 'Cognitiva' },
  { id: 'professional_judgment', name: 'Juicio profesional', description: 'Aplicar conocimientos y experiencia para tomar decisiones acertadas.', category: 'Cognitiva' },
  { id: 'innovation', name: 'Innovación', description: 'Generar ideas nuevas y creativas para mejorar procesos o productos.', category: 'Cognitiva' },

  // 2️⃣ Competencias interpersonales
  { id: 'verbal_communication', name: 'Comunicación verbal', description: 'Expresar ideas de forma clara y efectiva mediante el habla.', category: 'Interpersonal' },
  { id: 'written_communication', name: 'Comunicación escrita', description: 'Redactar textos claros, concisos y adecuados al público objetivo.', category: 'Interpersonal' },
  { id: 'public_speaking', name: 'Presentaciones en público', description: 'Hablar con confianza y persuasión ante una audiencia.', category: 'Interpersonal' },
  { id: 'active_listening', name: 'Escucha activa', description: 'Prestar atención plena al interlocutor para comprender su mensaje.', category: 'Interpersonal' },
  { id: 'influence', name: 'Influencia', description: 'Capacidad para persuadir y motivar a otros hacia un objetivo.', category: 'Interpersonal' },
  { id: 'negotiation', name: 'Negociación', description: 'Llegar a acuerdos beneficiosos para todas las partes involucradas.', category: 'Interpersonal' },
  { id: 'stakeholder_management', name: 'Gestión de stakeholders', description: 'Manejar las expectativas y relaciones con las partes interesadas.', category: 'Interpersonal' },
  { id: 'collaborative_work', name: 'Trabajo colaborativo', description: 'Cooperar eficazmente con otros para alcanzar metas comunes.', category: 'Interpersonal' },
  { id: 'relationship_building', name: 'Construcción de relaciones', description: 'Establecer y mantener redes de contactos profesionales sólidas.', category: 'Interpersonal' },
  { id: 'empathy', name: 'Empatía', description: 'Comprender y compartir los sentimientos y perspectivas de los demás.', category: 'Interpersonal' },
  { id: 'intercultural_sensitivity', name: 'Sensibilidad intercultural', description: 'Interactuar de manera efectiva y respetuosa con personas de diferentes culturas.', category: 'Interpersonal' },

  // 3️⃣ Competencias de liderazgo
  { id: 'inspiring_leadership', name: 'Liderazgo inspirador', description: 'Motivar a otros a través de una visión compartida y el ejemplo.', category: 'Liderazgo' },
  { id: 'situational_leadership', name: 'Liderazgo situacional', description: 'Adaptar el estilo de liderazgo a las necesidades del equipo y la situación.', category: 'Liderazgo' },
  { id: 'talent_development', name: 'Desarrollo de talento', description: 'Identificar y potenciar las habilidades de los miembros del equipo.', category: 'Liderazgo' },
  { id: 'coaching_mentoring', name: 'Coaching y mentoring', description: 'Guiar y apoyar el crecimiento profesional de otros.', category: 'Liderazgo' },
  { id: 'effective_delegation', name: 'Delegación efectiva', description: 'Asignar tareas y responsabilidades de manera adecuada.', category: 'Liderazgo' },
  { id: 'constructive_feedback', name: 'Feedback constructivo', description: 'Proporcionar comentarios útiles para mejorar el desempeño.', category: 'Liderazgo' },
  { id: 'performance_management', name: 'Gestión del desempeño', description: 'Evaluar y mejorar el rendimiento individual y del equipo.', category: 'Liderazgo' },
  { id: 'change_management', name: 'Gestión del cambio', description: 'Liderar y facilitar la transición hacia nuevas formas de trabajar.', category: 'Liderazgo' },
  { id: 'strategic_vision', name: 'Visión estratégica', description: 'Comprender el panorama general y alinear las acciones con los objetivos a largo plazo.', category: 'Liderazgo' },
  { id: 'accountability', name: 'Accountability', description: 'Asumir la responsabilidad de las propias acciones y resultados.', category: 'Liderazgo' },

  // 4️⃣ Competencias organizativas
  { id: 'planning', name: 'Planificación', description: 'Establecer objetivos y determinar los pasos necesarios para alcanzarlos.', category: 'Organizativa' },
  { id: 'prioritization', name: 'Priorización', description: 'Identificar y enfocarse en las tareas más importantes y urgentes.', category: 'Organizativa' },
  { id: 'time_management', name: 'Gestión del tiempo', description: 'Utilizar el tiempo de manera eficiente para maximizar la productividad.', category: 'Organizativa' },
  { id: 'project_management', name: 'Gestión de proyectos', description: 'Planificar, ejecutar y controlar proyectos para alcanzar objetivos específicos.', category: 'Organizativa' },
  { id: 'risk_management', name: 'Gestión de riesgos', description: 'Identificar, evaluar y mitigar posibles amenazas al éxito.', category: 'Organizativa' },
  { id: 'resource_management', name: 'Gestión de recursos', description: 'Asignar y utilizar eficientemente los recursos disponibles (humanos, financieros, materiales).', category: 'Organizativa' },
  { id: 'process_optimization', name: 'Optimización de procesos', description: 'Mejorar la eficiencia y eficacia de los flujos de trabajo.', category: 'Organizativa' },
  { id: 'continuous_improvement', name: 'Mejora continua', description: 'Buscar constantemente formas de hacer las cosas mejor.', category: 'Organizativa' },
  { id: 'results_orientation', name: 'Orientación a resultados', description: 'Enfocarse en alcanzar los objetivos y entregar valor.', category: 'Organizativa' },

  // 5️⃣ Competencias personales
  { id: 'self_awareness', name: 'Autoconocimiento', description: 'Comprender las propias fortalezas, debilidades, emociones y motivaciones.', category: 'Personal' },
  { id: 'emotional_intelligence', name: 'Inteligencia emocional', description: 'Reconocer y gestionar las propias emociones y las de los demás.', category: 'Personal' },
  { id: 'resilience', name: 'Resiliencia', description: 'Capacidad para recuperarse rápidamente de las dificultades y el estrés.', category: 'Personal' },
  { id: 'adaptability', name: 'Adaptabilidad', description: 'Ajustarse con facilidad a nuevas situaciones y entornos cambiantes.', category: 'Personal' },
  { id: 'autonomy', name: 'Autonomía', description: 'Trabajar de forma independiente sin necesidad de supervisión constante.', category: 'Personal' },
  { id: 'proactivity', name: 'Proactividad', description: 'Tomar la iniciativa y anticiparse a los problemas u oportunidades.', category: 'Personal' },
  { id: 'discipline', name: 'Disciplina', description: 'Mantener el enfoque y el esfuerzo constante para alcanzar las metas.', category: 'Personal' },
  { id: 'professional_ethics', name: 'Ética profesional', description: 'Actuar de acuerdo con los principios morales y las normas de la profesión.', category: 'Personal' },
  { id: 'integrity', name: 'Integridad', description: 'Ser honesto, transparente y coherente en las acciones y decisiones.', category: 'Personal' },

  // 6️⃣ Competencias digitales y técnicas
  { id: 'digital_literacy', name: 'Alfabetización digital', description: 'Uso competente de herramientas y tecnologías digitales básicas.', category: 'Digital' },
  { id: 'data_analysis', name: 'Análisis de datos', description: 'Interpretar datos para extraer información valiosa y tomar decisiones.', category: 'Digital' },
  { id: 'automation', name: 'Automatización', description: 'Uso de tecnología para realizar tareas repetitivas de forma automática.', category: 'Digital' },
  { id: 'digital_tools_management', name: 'Gestión de herramientas digitales', description: 'Dominio de software y plataformas específicas para el trabajo.', category: 'Digital' },
  { id: 'basic_cybersecurity', name: 'Ciberseguridad básica', description: 'Conocimiento y aplicación de prácticas para proteger la información digital.', category: 'Digital' },
  { id: 'agile_methodologies', name: 'Metodologías ágiles', description: 'Aplicación de enfoques iterativos y flexibles para la gestión de proyectos.', category: 'Digital' },
  { id: 'information_management', name: 'Gestión de información', description: 'Buscar, organizar y utilizar la información de manera efectiva.', category: 'Digital' },

  // 7️⃣ Competencias estratégicas
  { id: 'customer_orientation', name: 'Orientación al cliente', description: 'Poner las necesidades y la satisfacción del cliente en el centro de las decisiones.', category: 'Estratégica' },
  { id: 'business_orientation', name: 'Orientación al negocio', description: 'Comprender cómo las acciones individuales impactan en los resultados de la organización.', category: 'Estratégica' },
  { id: 'global_vision', name: 'Visión global', description: 'Entender el contexto amplio y las tendencias que afectan al sector o mercado.', category: 'Estratégica' },
  { id: 'data_driven_decision_making', name: 'Toma de decisiones basada en datos', description: 'Utilizar datos y análisis para fundamentar las elecciones estratégicas.', category: 'Estratégica' },
  { id: 'basic_financial_management', name: 'Gestión financiera básica', description: 'Comprender conceptos financieros fundamentales y su impacto en el negocio.', category: 'Estratégica' },
  { id: 'innovation_management', name: 'Gestión de innovación', description: 'Fomentar y dirigir procesos para desarrollar nuevas ideas y soluciones.', category: 'Estratégica' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Frente a un sistema que falla de forma intermitente y sin causa aparente:',
    options: [
      { text: 'Analizo los logs y busco patrones lógicos que conecten los fallos.', scores: { abstraction: 3, analytical_thinking: 2 } },
      { text: 'Pruebo soluciones estándar de mantenimiento hasta que el sistema responda.', scores: { discipline: 3, results_orientation: 2 } },
      { text: 'Documento el error para que el equipo técnico pueda revisarlo.', scores: { written_communication: 3, information_management: 2 } },
      { text: 'Trato de reproducir el error en un entorno controlado para aislarlo.', scores: { complex_problem_solving: 3, critical_thinking: 2 } }
    ]
  },
  {
    id: 'q2',
    question: 'Al organizar una nueva base de datos o un almacén físico:',
    options: [
      { text: 'Diseño una arquitectura que permita escalar y crecer en el futuro.', scores: { systemic_thinking: 3, strategic_vision: 2 } },
      { text: 'Sigo estrictamente las normas de etiquetado y orden vigentes.', scores: { discipline: 3, integrity: 2 } },
      { text: 'Busco herramientas digitales para automatizar el registro de entrada.', scores: { automation: 3, digital_literacy: 2 } },
      { text: 'Consulto con los usuarios finales para ver qué necesitan localizar rápido.', scores: { customer_orientation: 3, empathy: 2 } }
    ]
  },
  {
    id: 'q3',
    question: 'Tienes que explicar un concepto técnico complejo a un cliente no experto:',
    options: [
      { text: 'Uso analogías y modelos abstractos para que entienda la lógica.', scores: { abstraction: 3, verbal_communication: 2 } },
      { text: 'Me centro en los beneficios prácticos que obtendrá.', scores: { customer_orientation: 3, influence: 2 } },
      { text: 'Hago una presentación visual clara con los puntos clave.', scores: { public_speaking: 3, written_communication: 2 } },
      { text: 'Escucho primero sus dudas para adaptar mi lenguaje.', scores: { active_listening: 3, empathy: 2 } }
    ]
  },
  {
    id: 'q4',
    question: 'Un proyecto importante se retrasa por falta de un recurso clave:',
    options: [
      { text: 'Analizo cómo afecta este retraso a todo el flujo de la organización.', scores: { systemic_thinking: 3, analytical_thinking: 2 } },
      { text: 'Redoblo esfuerzos en mis tareas actuales para compensar el tiempo.', scores: { resilience: 3, discipline: 2 } },
      { text: 'Propongo una solución creativa o una alternativa temporal.', scores: { innovation: 3, complex_problem_solving: 2 } },
      { text: 'Negocio con los proveedores para acelerar la entrega.', scores: { negotiation: 3, stakeholder_management: 2 } }
    ]
  },
  {
    id: 'q5',
    question: 'Al tomar una decisión con información incompleta:',
    options: [
      { text: 'Uso mi juicio profesional basado en experiencias similares.', scores: { professional_judgment: 3, decision_making_uncertainty: 2 } },
      { text: 'Prefiero esperar a tener todos los datos antes de actuar.', scores: { critical_thinking: 3, risk_management: 2 } },
      { text: 'Asumo el riesgo y tomo el camino que parece más lógico.', scores: { decision_making_uncertainty: 3, accountability: 2 } },
      { text: 'Busco rápidamente a un experto que pueda orientarme.', scores: { collaborative_work: 3, information_management: 2 } }
    ]
  },
  {
    id: 'q6',
    question: 'Te das cuenta de que un proceso interno es ineficiente:',
    options: [
      { text: 'Diseño un nuevo flujo de trabajo optimizado.', scores: { process_optimization: 3, analytical_thinking: 2 } },
      { text: 'Propongo una herramienta digital que lo haga automáticamente.', scores: { automation: 3, digital_tools_management: 2 } },
      { text: 'Lo sigo haciendo como siempre pero aviso de la lentitud.', scores: { discipline: 3, written_communication: 2 } },
      { text: 'Investigo qué hacen otras empresas para resolverlo.', scores: { global_vision: 3, continuous_improvement: 2 } }
    ]
  },
  {
    id: 'q7',
    question: 'Cuando trabajas en equipo sobre un código o un proyecto técnico:',
    options: [
      { text: 'Uso metodologías ágiles para asegurar entregas frecuentes.', scores: { agile_methodologies: 3, project_management: 2 } },
      { text: 'Me aseguro de que el ambiente sea colaborativo y de apoyo.', scores: { collaborative_work: 3, relationship_building: 2 } },
      { text: 'Me enfoco en que mi parte del trabajo sea perfecta.', scores: { attention_to_detail: 3, results_orientation: 2 } },
      { text: 'Lidero la visión del proyecto para que no perdamos el norte.', scores: { inspiring_leadership: 3, strategic_vision: 2 } }
    ]
  },
  {
    id: 'q8',
    question: 'Si detectas una vulnerabilidad o un riesgo de seguridad:',
    options: [
      { text: 'Aplico los protocolos de ciberseguridad básica de inmediato.', scores: { basic_cybersecurity: 3, discipline: 2 } },
      { text: 'Analizo el impacto potencial en los datos y la reputación.', scores: { risk_management: 3, data_analysis: 2 } },
      { text: 'Busco la raíz técnica del problema para cerrarla definitivamente.', scores: { complex_problem_solving: 3, analytical_thinking: 2 } },
      { text: 'Aviso a mis superiores cumpliendo mi ética profesional.', scores: { professional_ethics: 3, accountability: 2 } }
    ]
  },
  {
    id: 'q9',
    question: 'Tu presupuesto para un proyecto se reduce a la mitad repentinamente:',
    options: [
      { text: 'Priorizo las funciones críticas y elimino lo secundario.', scores: { prioritization: 3, strategic_thinking: 2 } },
      { text: 'Busco formas de ahorrar costes en la gestión diaria.', scores: { basic_financial_management: 3, resource_management: 2 } },
      { text: 'Negocio con los involucrados para ajustar las expectativas.', scores: { negotiation: 3, stakeholder_management: 2 } },
      { text: 'Intento mantener la calidad inicial trabajando más duro.', scores: { resilience: 3, results_orientation: 2 } }
    ]
  },
  {
    id: 'q10',
    question: 'Al liderar a una persona que tiene potencial pero le falta confianza:',
    options: [
      { text: 'Le asigno tareas retadoras y le doy feedback constructivo.', scores: { talent_development: 3, constructive_feedback: 2 } },
      { text: 'Le guío personalmente a través de sesiones de mentoring.', scores: { coaching_mentoring: 3, relationship_building: 2 } },
      { text: 'Le explico la importancia de su rol para el negocio.', scores: { business_orientation: 3, inspiring_leadership: 2 } },
      { text: 'Soy empático con su situación y le doy espacio.', scores: { empathy: 3, emotional_intelligence: 2 } }
    ]
  },
  // [Preguntas 11 a 20: Foco en Ingeniería, Gestión y Estrategia]
  {
    id: 'q11',
    question: 'Diseñas un software y te piden una funcionalidad que choca con la arquitectura base:',
    options: [
      { text: 'Defiendo la integridad de la arquitectura por el bien del sistema.', scores: { systemic_thinking: 3, professional_judgment: 2 } },
      { text: 'Busco una abstracción que permita integrar ambas cosas.', scores: { abstraction: 3, innovation: 2 } },
      { text: 'Lo implemento como pide el cliente, el cliente manda.', scores: { customer_orientation: 3, adaptability: 2 } },
      { text: 'Analizo el coste y el tiempo extra que supondría.', scores: { analytical_thinking: 3, data_driven_decision_making: 2 } }
    ]
  },
  {
    id: 'q12',
    question: 'En una reunión estratégica de alto nivel:',
    options: [
      { text: 'Aporto datos y análisis para fundamentar las decisiones.', scores: { data_driven_decision_making: 3, data_analysis: 2 } },
      { text: 'Escucho las tendencias globales del mercado para posicionarnos.', scores: { global_vision: 3, strategic_thinking: 2 } },
      { text: 'Intento influir en los demás para seguir mi visión.', scores: { influence: 3, public_speaking: 2 } },
      { text: 'Me aseguro de que los objetivos financieros estén claros.', scores: { basic_financial_management: 3, business_orientation: 2 } }
    ]
  },
  {
    id: 'q13',
    question: 'Para mejorar la productividad de tu equipo:',
    options: [
      { text: 'Introduzco metodologías ágiles y tableros de control.', scores: { agile_methodologies: 3, planning: 2 } },
      { text: 'Fomento la autonomía y la toma de iniciativa.', scores: { autonomy: 3, proactivity: 2 } },
      { text: 'Optimizo los procesos manuales que quitan tiempo.', scores: { process_optimization: 3, time_management: 2 } },
      { text: 'Analizo el desempeño individual para dar apoyo.', scores: { performance_management: 3, situational_leadership: 2 } }
    ]
  },
  {
    id: 'q14',
    question: 'Al enfrentarte a una regulación legal nueva en tu sector:',
    options: [
      { text: 'Estudio a fondo la norma para asegurar que la cumplimos.', scores: { critical_thinking: 3, professional_ethics: 2 } },
      { text: 'Evalúo cómo afecta esto a los costes del negocio.', scores: { business_orientation: 3, risk_management: 2 } },
      { text: 'Busco oportunidades de innovación que surjan del cambio.', scores: { innovation_management: 3, strategic_vision: 2 } },
      { text: 'Comunico al equipo los cambios operativos necesarios.', scores: { written_communication: 3, change_management: 2 } }
    ]
  },
  {
    id: 'q15',
    question: 'Si tienes que delegar una tarea crítica:',
    options: [
      { text: 'Elijo a la persona basándome en sus fortalezas específicas.', scores: { effective_delegation: 3, talent_development: 2 } },
      { text: 'Doy instrucciones muy precisas y controlo el progreso.', scores: { situational_leadership: 3, attention_to_detail: 2 } },
      { text: 'Confío plenamente y pido el resultado al final.', scores: { autonomy: 3, accountability: 2 } },
      { text: 'Me aseguro de que entienda el impacto de su error.', scores: { responsibility: 3, emotional_intelligence: 2 } }
    ]
  },
  {
    id: 'q16',
    question: 'Cuando trabajas con grandes volúmenes de información técnica:',
    options: [
      { text: 'Soy capaz de extraer la esencia y los patrones clave.', scores: { abstraction: 3, analytical_thinking: 2 } },
      { text: 'Organizo la información meticulosamente para que sea accesible.', scores: { information_management: 3, discipline: 2 } },
      { text: 'Uso herramientas de análisis de datos para sacar conclusiones.', scores: { data_analysis: 3, digital_tools_management: 2 } },
      { text: 'Verifico la veracidad de cada fuente de información.', scores: { critical_thinking: 3, integrity: 2 } }
    ]
  },
  {
    id: 'q17',
    question: 'Un cliente te pide algo éticamente dudoso pero legal:',
    options: [
      { text: 'Me niego rotundamente por principios morales.', scores: { integrity: 3, professional_ethics: 2 } },
      { text: 'Analizo el riesgo reputacional para la marca.', scores: { risk_management: 3, strategic_vision: 2 } },
      { text: 'Trato de convencerle de una alternativa ética.', scores: { influence: 3, negotiation: 2 } },
      { text: 'Consulto con el departamento legal antes de decidir.', scores: { accountability: 3, professional_judgment: 2 } }
    ]
  },
  {
    id: 'q18',
    question: 'Ante un fallo masivo en el servicio técnico que diriges:',
    options: [
      { text: 'Mantengo la calma y transmito seguridad al equipo.', scores: { emotional_intelligence: 3, resilience: 2 } },
      { text: 'Identifico rápidamente el punto de fallo sistémico.', scores: { systemic_thinking: 3, analytical_thinking: 2 } },
      { text: 'Coordino la comunicación con los stakeholders afectados.', scores: { stakeholder_management: 3, verbal_communication: 2 } },
      { text: 'Tomo decisiones rápidas bajo alta presión.', scores: { decision_making_uncertainty: 3, complex_problem_solving: 2 } }
    ]
  },
  {
    id: 'q19',
    question: 'Si pudieras mejorar un aspecto de tu empresa, sería:',
    options: [
      { text: 'La capacidad de innovar y crear productos nuevos.', scores: { innovation_management: 3, innovation: 2 } },
      { text: 'La eficiencia de todos los procesos internos.', scores: { process_optimization: 3, continuous_improvement: 2 } },
      { text: 'El clima de liderazgo y desarrollo de las personas.', scores: { inspiring_leadership: 3, talent_development: 2 } },
      { text: 'La posición competitiva en el mercado global.', scores: { global_vision: 3, strategic_thinking: 2 } }
    ]
  },
  {
    id: 'q20',
    question: '¿Cómo te preparas para una negociación difícil?',
    options: [
      { text: 'Estudio a fondo los datos y los posibles escenarios.', scores: { data_driven_decision_making: 3, analytical_thinking: 2 } },
      { text: 'Intento entender las motivaciones emocionales del otro.', scores: { empathy: 3, active_listening: 2 } },
      { text: 'Diseño una estrategia de concesiones e intercambios.', scores: { negotiation: 3, strategic_thinking: 2 } },
      { text: 'Confío en mi capacidad de persuasión en el momento.', scores: { influence: 3, verbal_communication: 2 } }
    ]
  },
  // [Preguntas 21 a 30: Perfilado fino]
  {
    id: 'q21',
    question: '¿Qué herramientas prefieres para gestionar tu día a día?',
    options: [
      { text: 'Software avanzado de gestión de proyectos y tareas.', scores: { digital_tools_management: 3, planning: 2 } },
      { text: 'Una lista de tareas simple y disciplina férrea.', scores: { discipline: 3, time_management: 2 } },
      { text: 'Herramientas de automatización que me ahorren pasos.', scores: { automation: 3, digital_literacy: 2 } },
      { text: 'Mi propia capacidad de priorización mental.', scores: { prioritization: 3, autonomy: 2 } }
    ]
  },
  {
    id: 'q22',
    question: 'Al evaluar un problema, ¿qué buscas primero?',
    options: [
      { text: 'La lógica subyacente y los patrones abstractos.', scores: { abstraction: 3, analytical_thinking: 2 } },
      { text: 'Los datos numéricos y las evidencias físicas.', scores: { data_analysis: 3, critical_thinking: 2 } },
      { text: 'Cómo afecta esto a las personas involucradas.', scores: { empathy: 3, emotional_intelligence: 2 } },
      { text: 'La solución más rápida para seguir produciendo.', scores: { results_orientation: 3, discipline: 2 } }
    ]
  },
  {
    id: 'q23',
    question: 'Si un compañero comete un error ético que no te afecta directamente:',
    options: [
      { text: 'Le confronto en privado por integridad profesional.', scores: { integrity: 3, professional_ethics: 2 } },
      { text: 'Informo a la empresa para proteger el negocio.', scores: { business_orientation: 3, accountability: 2 } },
      { text: 'Analizo si es un fallo del sistema o de la persona.', scores: { systemic_thinking: 3, analytical_thinking: 2 } },
      { text: 'Me mantengo al margen para no generar conflicto.', scores: { emotional_intelligence: 3, resilience: 2 } }
    ]
  },
  {
    id: 'q24',
    question: '¿Cómo manejas el feedback negativo sobre tu trabajo?',
    options: [
      { text: 'Analizo objetivamente qué puedo mejorar.', scores: { self_awareness: 3, continuous_improvement: 2 } },
      { text: 'Me motiva a esforzarme el doble para demostrar mi valor.', scores: { resilience: 3, results_orientation: 2 } },
      { text: 'Agradezco el punto de vista y pido ejemplos concretos.', scores: { active_listening: 3, verbal_communication: 2 } },
      { text: 'Lo veo como una oportunidad de aprendizaje estratégico.', scores: { strategic_thinking: 3, situational_leadership: 2 } }
    ]
  },
  {
    id: 'q25',
    question: 'Al diseñar un nuevo producto o servicio:',
    options: [
      { text: 'Pienso en la experiencia global del usuario.', scores: { customer_orientation: 3, empathy: 2 } },
      { text: 'Busco una innovación técnica disruptiva.', scores: { innovation: 3, abstraction: 2 } },
      { text: 'Me aseguro de que sea rentable y eficiente.', scores: { business_orientation: 3, basic_financial_management: 2 } },
      { text: 'Planifico cada fase de producción al detalle.', scores: { planning: 3, project_management: 2 } }
    ]
  },
  {
    id: 'q26',
    question: '¿Qué tipo de entorno de trabajo prefieres?',
    options: [
      { text: 'Uno muy estructurado, con normas y procesos claros.', scores: { discipline: 3, integrity: 2 } },
      { text: 'Uno dinámico, cambiante y con retos constantes.', scores: { adaptability: 3, resilience: 2 } },
      { text: 'Uno donde la tecnología sea el centro de todo.', scores: { digital_literacy: 3, digital_tools_management: 2 } },
      { text: 'Uno basado en la colaboración y el trato humano.', scores: { collaborative_work: 3, relationship_building: 2 } }
    ]
  },
  {
    id: 'q27',
    question: 'Cuando tienes que aprender algo totalmente nuevo:',
    options: [
      { text: 'Busco la teoría y la lógica de base antes de empezar.', scores: { abstraction: 3, analytical_thinking: 2 } },
      { text: 'Me lanzo a probar y aprendo del ensayo-error.', scores: { proactivity: 3, resilience: 2 } },
      { text: 'Busco un tutor o mentor que me guíe.', scores: { coaching_mentoring: 3, active_listening: 2 } },
      { text: 'Uso herramientas digitales y cursos online.', scores: { digital_literacy: 3, information_management: 2 } }
    ]
  },
  {
    id: 'q28',
    question: 'Si el equipo se siente desmotivado ante un objetivo difícil:',
    options: [
      { text: 'Les recuerdo la visión y el propósito de nuestro trabajo.', scores: { inspiring_leadership: 3, strategic_vision: 2 } },
      { text: 'Analizo los bloqueos técnicos para eliminarlos.', scores: { analytical_thinking: 3, complex_problem_solving: 2 } },
      { text: 'Escucho sus frustraciones y les doy apoyo emocional.', scores: { empathy: 3, emotional_intelligence: 2 } },
      { text: 'Divido el objetivo en hitos pequeños y alcanzables.', scores: { planning: 3, prioritization: 2 } }
    ]
  },
  {
    id: 'q29',
    question: '¿Cómo actúas ante una crisis de reputación de la empresa?',
    options: [
      { text: 'Comunico con transparencia y honestidad.', scores: { integrity: 3, verbal_communication: 2 } },
      { text: 'Analizo el impacto en los stakeholders clave.', scores: { stakeholder_management: 3, risk_management: 2 } },
      { text: 'Propongo una estrategia de cambio de imagen.', scores: { innovation_management: 3, influence: 2 } },
      { text: 'Mantengo el foco en los resultados para no hundirnos.', scores: { resilience: 3, business_orientation: 2 } }
    ]
  },
  {
    id: 'q30',
    question: 'Tu mayor orgullo profesional sería:',
    options: [
      { text: 'Haber construido algo complejo que funciona perfectamente.', scores: { analytical_thinking: 3, abstraction: 2 } },
      { text: 'Haber liderado a un equipo hacia un éxito histórico.', scores: { inspiring_leadership: 3, strategic_vision: 2 } },
      { text: 'Haber ayudado a miles de personas con mi trabajo.', scores: { customer_orientation: 3, empathy: 2 } },
      { text: 'Haber sido una persona de integridad y confianza absoluta.', scores: { integrity: 3, professional_ethics: 2 } }
    ]
  }
];

export const CAREER_DATABASE: CareerArea[] = [
  {
    name: 'Ingeniería e Innovación Digital',
    description: 'Área estratégica centrada en la creación, diseño y mantenimiento de sistemas tecnológicos complejos. Como ingeniero/a, te encargas de resolver problemas abstractos y lógicos mediante el software y la arquitectura de sistemas, impulsando la transformación digital de la sociedad.',
    roles: [
      { title: 'Ingeniero/a de Software', requiredCompetencies: ['abstraction', 'complex_problem_solving', 'analytical_thinking', 'agile_methodologies', 'systemic_thinking'] },
      { title: 'Analista de Datos / Data Scientist', requiredCompetencies: ['data_analysis', 'analytical_thinking', 'critical_thinking', 'data_driven_decision_making', 'abstraction'] },
      { title: 'Ingeniero/a de Ciberseguridad', requiredCompetencies: ['basic_cybersecurity', 'critical_thinking', 'analytical_thinking', 'risk_management', 'integrity'] },
      { title: 'Arquitecto/a de Sistemas', requiredCompetencies: ['systemic_thinking', 'strategic_vision', 'abstraction', 'planning', 'innovation'] },
      { title: 'Desarrollador/a Frontend/Backend', requiredCompetencies: ['digital_tools_management', 'agile_methodologies', 'problem_solving', 'attention_to_detail'] },
      { title: 'Ingeniero/a de Automatización / DevOps', requiredCompetencies: ['automation', 'systemic_thinking', 'process_optimization', 'autonomy', 'complex_problem_solving'] }
    ]
  },
  {
    name: 'Dirección y Estrategia Corporativa',
    description: 'Puestos de alto impacto destinados a la gestión de recursos, personas y visión a largo plazo. Requiere una capacidad superior para la toma de decisiones bajo incertidumbre y la gestión de relaciones con múltiples partes interesadas.',
    roles: [
      { title: 'Director/a de Operaciones (COO)', requiredCompetencies: ['strategic_vision', 'results_orientation', 'systemic_thinking', 'decision_making_uncertainty', 'resource_management'] },
      { title: 'Project Manager Senior', requiredCompetencies: ['project_management', 'stakeholder_management', 'negotiation', 'planning', 'agile_methodologies'] },
      { title: 'Director/a de Marketing Digital', requiredCompetencies: ['strategic_thinking', 'innovation_management', 'data_analysis', 'influence', 'business_orientation'] },
      { title: 'Responsable de RRHH / Talento', requiredCompetencies: ['talent_development', 'coaching_mentoring', 'emotional_intelligence', 'integrity', 'negotiation'] }
    ]
  },
  {
    name: 'Mantenimiento y Servicios Generales',
    description: 'Este sector garantiza la operatividad, seguridad y cuidado estético de infraestructuras. Los profesionales aseguran que los entornos sean funcionales y seguros desempeñando tareas fundamentales para el día a día.',
    roles: [
      { title: 'Personal de Limpieza', requiredCompetencies: ['discipline', 'continuous_improvement', 'results_orientation'] },
      { title: 'Conserje / Ordenanza', requiredCompetencies: ['verbal_communication', 'information_management', 'integrity'] },
      { title: 'Peón de Mantenimiento', requiredCompetencies: ['complex_problem_solving', 'autonomy', 'discipline'] },
      { title: 'Jardinero/a', requiredCompetencies: ['planning', 'attention_to_detail', 'discipline'] },
      { title: 'Limpiador/a de Cristales en Altura', requiredCompetencies: ['risk_management', 'discipline', 'resilience'] },
      { title: 'Auxiliar de Lavandería', requiredCompetencies: ['time_management', 'process_optimization', 'discipline'] },
      { title: 'Controlador de Accesos', requiredCompetencies: ['decision_making_uncertainty', 'verbal_communication', 'professional_ethics'] },
      { title: 'Pintor/a de Interiores', requiredCompetencies: ['attention_to_detail', 'autonomy', 'discipline'] },
      { title: 'Mozo de Mudanzas', requiredCompetencies: ['collaborative_work', 'resilience', 'discipline'] },
      { title: 'Operario/a de Gestión de Residuos', requiredCompetencies: ['professional_ethics', 'discipline', 'accountability'] }
    ]
  },
  {
    name: 'Logística y Almacén',
    description: 'Gestión de la cadena de suministro, organización de inventarios y optimización de tiempos de entrega en entornos de alta demanda.',
    roles: [
      { title: 'Mozo de Almacén', requiredCompetencies: ['discipline', 'results_orientation', 'digital_tools_management'] },
      { title: 'Carretillero/a', requiredCompetencies: ['risk_management', 'attention_to_detail', 'accountability'] },
      { title: 'Preparador/a de Pedidos (Picker)', requiredCompetencies: ['time_management', 'results_orientation', 'digital_literacy'] },
      { title: 'Repartidor/a de Paquetería', requiredCompetencies: ['customer_orientation', 'adaptability', 'time_management'] },
      { title: 'Auxiliar de Carga y Descarga', requiredCompetencies: ['collaborative_work', 'resilience', 'discipline'] },
      { title: 'Controlador/a de Stock', requiredCompetencies: ['data_analysis', 'analytical_thinking', 'prioritization'] },
      { title: 'Conductor/a de Camión', requiredCompetencies: ['autonomy', 'risk_management', 'integrity'] },
      { title: 'Auxiliar de Recepción de Mercancías', requiredCompetencies: ['written_communication', 'information_management', 'attention_to_detail'] },
      { title: 'Mozo de Almacén de Frío', requiredCompetencies: ['resilience', 'discipline', 'risk_management'] },
      { title: 'Operario de Etiquetado', requiredCompetencies: ['continuous_improvement', 'discipline', 'attention_to_detail'] }
    ]
  },
  {
    name: 'Hostelería y Restauración Social',
    description: 'Servicio de alimentos y bebidas con enfoque en colectividades. Combina habilidades culinarias con capacidad de trabajo en equipo.',
    roles: [
      { title: 'Ayudante de Cocina', requiredCompetencies: ['collaborative_work', 'active_listening', 'time_management'] },
      { title: 'Friegaplatos / Marmitón', requiredCompetencies: ['resilience', 'discipline', 'continuous_improvement'] },
      { title: 'Camarero/a de Sala', requiredCompetencies: ['emotional_intelligence', 'verbal_communication', 'customer_orientation'] },
      { title: 'Auxiliar de Comedor Escolar', requiredCompetencies: ['empathy', 'intercultural_sensitivity', 'active_listening'] },
      { title: 'Cocinero/a para Comedor Social', requiredCompetencies: ['resource_management', 'innovation', 'situational_leadership'] },
      { title: 'Personal de Office', requiredCompetencies: ['process_optimization', 'discipline', 'prioritization'] },
      { title: 'Camarero/a de Pisos', requiredCompetencies: ['attention_to_detail', 'autonomy', 'professional_ethics'] },
      { title: 'Auxiliar de Catering', requiredCompetencies: ['adaptability', 'collaborative_work', 'time_management'] },
      { title: 'Pinche de Cocina', requiredCompetencies: ['active_listening', 'discipline', 'proactivity'] },
      { title: 'Barman / Cafetería', requiredCompetencies: ['verbal_communication', 'active_listening', 'business_orientation'] }
    ]
  },
  {
    name: 'Atención a la Comunidad y Cuidados',
    description: 'Puestos de apoyo directo a personas vulnerables. Requiere vocación de servicio, empatía y gran equilibrio emocional.',
    roles: [
      { title: 'Auxiliar de Ayuda a Domicilio', requiredCompetencies: ['empathy', 'emotional_intelligence', 'autonomy'] },
      { title: 'Cuidador/a de Personas Mayores', requiredCompetencies: ['patience', 'active_listening', 'resilience'] },
      { title: 'Acompañante de Transporte Adaptado', requiredCompetencies: ['intercultural_sensitivity', 'verbal_communication', 'risk_management'] },
      { title: 'Monitor/a de Ocio y Tiempo Libre', requiredCompetencies: ['inspiring_leadership', 'innovation', 'collaborative_work'] },
      { title: 'Auxiliar de Geriatría', requiredCompetencies: ['professional_ethics', 'integrity', 'resilience'] },
      { title: 'Mediador/a Comunitario', requiredCompetencies: ['negotiation', 'influence', 'active_listening'] },
      { title: 'Teleoperador/a de Teleasistencia', requiredCompetencies: ['verbal_communication', 'emotional_intelligence', 'digital_tools_management'] },
      { title: 'Auxiliar de Guardería', requiredCompetencies: ['talent_development', 'patience', 'empathy'] },
      { title: 'Asistente de Personas con Discapacidad', requiredCompetencies: ['accountability', 'empathy', 'adaptability'] },
      { title: 'Celador/a Social', requiredCompetencies: ['verbal_communication', 'resilience', 'collaborative_work'] }
    ]
  },
  {
    name: 'Comercio y Atención al Público',
    description: 'Orientada a la venta y el soporte al cliente. Actúan como la cara visible de la empresa garantizando una experiencia positiva.',
    roles: [
      { title: 'Cajero/a de Supermercado', requiredCompetencies: ['basic_financial_management', 'customer_orientation', 'discipline'] },
      { title: 'Reponedor/a', requiredCompetencies: ['prioritization', 'autonomy', 'discipline'] },
      { title: 'Dependiente/a de Comercio', requiredCompetencies: ['influence', 'verbal_communication', 'active_listening'] },
      { title: 'Mozo de Almacén de Tienda', requiredCompetencies: ['time_management', 'collaborative_work', 'results_orientation'] },
      { title: 'Auxiliar de Floristería', requiredCompetencies: ['innovation', 'attention_to_detail', 'verbal_communication'] },
      { title: 'Vendedor/a de Mercadillo / Venta Ambulante', requiredCompetencies: ['resilience', 'negotiation', 'proactivity'] },
      { title: 'Auxiliar de Óptica', requiredCompetencies: ['customer_orientation', 'digital_tools_management', 'empathy'] },
      { title: 'Promotor/a de Stand', requiredCompetencies: ['verbal_communication', 'influence', 'resilience'] },
      { title: 'Taquillero/a', requiredCompetencies: ['integrity', 'verbal_communication', 'time_management'] },
      { title: 'Personal de Paquetería en Tienda', requiredCompetencies: ['attention_to_detail', 'time_management', 'customer_orientation'] }
    ]
  },
  {
    name: 'Construcción e Industria Base',
    description: 'Oficios técnicos y manuales para la edificación y manufactura. Requiere comprensión de seguridad laboral y uso de herramientas.',
    roles: [
      { title: 'Peón de Obra', requiredCompetencies: ['discipline', 'risk_management', 'collaborative_work'] },
      { title: 'Ayudante de Electricista', requiredCompetencies: ['analytical_thinking', 'attention_to_detail', 'digital_tools_management'] },
      { title: 'Ayudante de Fontanería', requiredCompetencies: ['complex_problem_solving', 'autonomy', 'resource_management'] },
      { title: 'Operario/a de Montaje Industrial', requiredCompetencies: ['process_optimization', 'discipline', 'attention_to_detail'] },
      { title: 'Auxiliar de Carpintería', requiredCompetencies: ['attention_to_detail', 'innovation', 'active_listening'] },
      { title: 'Peón Especialista (Soldadura)', requiredCompetencies: ['risk_management', 'discipline', 'precision'] },
      { title: 'Auxiliar de Climatización', requiredCompetencies: ['systemic_thinking', 'complex_problem_solving', 'adaptability'] },
      { title: 'Operario/a de Maquinaria Textil', requiredCompetencies: ['discipline', 'continuous_improvement', 'results_orientation'] },
      { title: 'Albañil de Segunda', requiredCompetencies: ['autonomy', 'planning', 'time_management'] },
      { title: 'Ayudante de Pintura Industrial', requiredCompetencies: ['risk_management', 'discipline', 'proactivity'] }
    ]
  },
  {
    name: 'Administración Básica y Digital',
    description: 'Soporte operativo y gestión documental de oficinas mediante el uso de herramientas tecnológicas.',
    roles: [
      { title: 'Auxiliar Administrativo', requiredCompetencies: ['written_communication', 'information_management', 'digital_literacy'] },
      { title: 'Recepcionista de Fundación', requiredCompetencies: ['active_listening', 'empathy', 'stakeholder_management'] },
      { title: 'Data Entry (Grabador de datos)', requiredCompetencies: ['discipline', 'digital_tools_management', 'attention_to_detail'] },
      { title: 'Auxiliar de Archivo', requiredCompetencies: ['prioritization', 'information_management', 'integrity'] },
      { title: 'Secretario/a de Departamento', requiredCompetencies: ['time_management', 'prioritization', 'verbal_communication'] },
      { title: 'Teleoperador/a de Atención al Cliente', requiredCompetencies: ['verbal_communication', 'negotiation', 'emotional_intelligence'] },
      { title: 'Auxiliar de Contabilidad', requiredCompetencies: ['basic_financial_management', 'discipline', 'data_analysis'] },
      { title: 'Asistente de Compras (Junior)', requiredCompetencies: ['negotiation', 'business_orientation', 'written_communication'] },
      { title: 'Soporte Administrativo de RRHH', requiredCompetencies: ['professional_ethics', 'information_management', 'intercultural_sensitivity'] },
      { title: 'Auxiliar de Marketing (Soporte)', requiredCompetencies: ['innovation', 'written_communication', 'digital_literacy'] }
    ]
  },
  {
    name: 'Oficios del Sector Sostenible / Verde',
    description: 'Dedicado a la economía circular y energías renovables. Papel clave en la transición hacia un modelo planetario respetuoso.',
    roles: [
      { title: 'Operario/a de Planta de Reciclaje', requiredCompetencies: ['discipline', 'professional_ethics', 'risk_management'] },
      { title: 'Técnico de Instalaciones Solares (Ayudante)', requiredCompetencies: ['strategic_thinking', 'collaborative_work', 'risk_management'] },
      { title: 'Reparador/a de Pequeños Electrodomésticos', requiredCompetencies: ['complex_problem_solving', 'analytical_thinking', 'innovation'] },
      { title: 'Gestor/a de Compostaje Comunitario', requiredCompetencies: ['verbal_communication', 'intercultural_sensitivity', 'continuous_improvement'] },
      { title: 'Auxiliar de Movilidad Sostenible (Bicicletas)', requiredCompetencies: ['customer_orientation', 'proactivity', 'results_orientation'] },
      { title: 'Personal de Recogida de Ropa Usada', requiredCompetencies: ['integrity', 'time_management', 'accountability'] },
      { title: 'Operario/a de Reforestación', requiredCompetencies: ['resilience', 'professional_ethics', 'collaborative_work'] },
      { title: 'Técnico/a de Auditoría Energética Básica', requiredCompetencies: ['data_analysis', 'systemic_thinking', 'written_communication'] },
      { title: 'Auxiliar de Tratamiento de Aguas', requiredCompetencies: ['risk_management', 'critical_thinking', 'continuous_improvement'] },
      { title: 'Operario de Bio-construcción', requiredCompetencies: ['innovation', 'collaborative_work', 'integrity'] }
    ]
  },
  {
    name: 'Apoyo a la Seguridad y Orden Público',
    description: 'Protección de bienes y personas en espacios públicos y privados. Exige conducta ética ejemplar y capacidad de respuesta.',
    roles: [
      { title: 'Auxiliar de Vigilancia', requiredCompetencies: ['discipline', 'risk_management', 'integrity'] },
      { title: 'Sereno / Vigilante de Noche', requiredCompetencies: ['autonomy', 'resilience', 'accountability'] },
      { title: 'Controlador/a de Aparcamiento', requiredCompetencies: ['negotiation', 'verbal_communication', 'integrity'] },
      { title: 'Auxiliar de Protección Civil (Voluntariado/Apoyo)', requiredCompetencies: ['resilience', 'decision_making_uncertainty', 'collaborative_work'] },
      { title: 'Acompañante de Seguridad para Menores', requiredCompetencies: ['empathy', 'professional_ethics', 'active_listening'] },
      { title: 'Conserje de Instalaciones Deportivas', requiredCompetencies: ['prioritization', 'verbal_communication', 'resource_management'] },
      { title: 'Informador/a de Calle (Campañas)', requiredCompetencies: ['influence', 'resilience', 'verbal_communication'] },
      { title: 'Auxiliar de Aduanas (Almacén)', requiredCompetencies: ['professional_ethics', 'information_management', 'discipline'] },
      { title: 'Vigilante de Museos / Exposiciones', requiredCompetencies: ['intercultural_sensitivity', 'discipline', 'attention_to_detail'] },
      { title: 'Personal de Seguridad en Eventos', requiredCompetencies: ['negotiation', 'situational_leadership', 'collaborative_work'] }
    ]
  },
  {
    name: 'Transporte y Movilidad Urbana',
    description: 'Desplazamiento eficiente de pasajeros y mercancías. Enfoque total en seguridad vial, puntualidad y atención al usuario.',
    roles: [
      { title: 'Conductor/a de Autobús / Autocar', requiredCompetencies: ['accountability', 'customer_orientation', 'risk_management'] },
      { title: 'Mozo de Estación', requiredCompetencies: ['verbal_communication', 'information_management', 'adaptability'] },
      { title: 'Auxiliar de Parking', requiredCompetencies: ['time_management', 'customer_orientation', 'integrity'] },
      { title: 'Bici-Mensajero / Last Mile Delivery', requiredCompetencies: ['resilience', 'time_management', 'results_orientation'] },
      { title: 'Conductor/a de Ambulancia (Apoyo)', requiredCompetencies: ['decision_making_uncertainty', 'resilience', 'collaborative_work'] },
      { title: 'Controlador de Flota (Junior)', requiredCompetencies: ['project_management', 'analytical_thinking', 'digital_tools_management'] },
      { title: 'Auxiliar de Aeropuerto (Equipaje)', requiredCompetencies: ['discipline', 'risk_management', 'collaborative_work'] },
      { title: 'Revisor de Transporte Público', requiredCompetencies: ['negotiation', 'verbal_communication', 'professional_ethics'] },
      { title: 'Ayudante de Mecánica Rápida', requiredCompetencies: ['analytical_thinking', 'discipline', 'complex_problem_solving'] },
      { title: 'Chofer de VTC / Taxi', requiredCompetencies: ['customer_orientation', 'autonomy', 'resilience'] }
    ]
  }
];