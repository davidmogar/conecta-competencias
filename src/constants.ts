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
  
  // Competencias operativas adicionales (para mapear con roles)
  { id: 'attention_to_detail', name: 'Orientación al detalle', description: 'Precisión y minuciosidad en la ejecución de tareas.', category: 'Personal' },
  { id: 'reliability', name: 'Fiabilidad', description: 'Ser digno de confianza y cumplir con los compromisos.', category: 'Personal' },
  { id: 'patience', name: 'Paciencia', description: 'Capacidad de mantener la calma en situaciones repetitivas o difíciles.', category: 'Personal' },
  { id: 'environmental_care', name: 'Cuidado del entorno', description: 'Respeto y mantenimiento de los espacios físicos y naturales.', category: 'Personal' },
  { id: 'organization', name: 'Organización', description: 'Mantener el orden físico y lógico en el entorno de trabajo.', category: 'Organizativa' },
  { id: 'concentration', name: 'Atención concentrada', description: 'Mantener el foco en tareas específicas durante periodos prolongados.', category: 'Cognitiva' },
  { id: 'responsibility', name: 'Responsabilidad', description: 'Cumplir con las obligaciones y asumir las consecuencias de los actos.', category: 'Personal' },
  { id: 'synchronization', name: 'Sincronización', description: 'Coordinar movimientos y acciones con otros en tiempo real.', category: 'Interpersonal' },
  { id: 'conflict_management', name: 'Gestión de conflictos', description: 'Manejar desacuerdos de forma constructiva.', category: 'Interpersonal' },
  { id: 'precision', name: 'Precisión', description: 'Exactitud en la ejecución de tareas manuales o técnicas.', category: 'Hard' },
  { id: 'sustainability', name: 'Sustentabilidad', description: 'Aplicar prácticas respetuosas con el medio ambiente.', category: 'Estratégica' },
  { id: 'technical_maintenance', name: 'Mantenimiento técnico', description: 'Reparación y cuidado de equipos o maquinaria.', category: 'Hard' }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Te asignan un proyecto con un objetivo claro pero sin instrucciones sobre cómo alcanzarlo:',
    options: [
      { text: 'Diseñas un plan paso a paso identificando los recursos necesarios.', scores: { planning: 3, autonomy: 2 } },
      { text: 'Investigas metodologías innovadoras para proponer un enfoque disruptivo.', scores: { innovation: 3, innovation_management: 2 } },
      { text: 'Consultas con otros departamentos para ver si han hecho algo similar.', scores: { information_management: 3, collaborative_work: 2 } },
      { text: 'Analizas los riesgos potenciales antes de dar el primer paso.', scores: { risk_management: 3, analytical_thinking: 2 } }
    ]
  },
  {
    id: 'q2',
    question: 'Un colaborador clave en tu equipo comete un error grave que retrasa una entrega:',
    options: [
      { text: 'Asumes la responsabilidad ante el cliente y buscas una solución inmediata.', scores: { accountability: 3, customer_orientation: 2 } },
      { text: 'Te reúnes con él para analizar qué falló y cómo evitarlo en el futuro.', scores: { constructive_feedback: 3, coaching_mentoring: 2 } },
      { text: 'Reorganizas las tareas del resto del equipo para cubrir el retraso.', scores: { resource_management: 3, situational_leadership: 2 } },
      { text: 'Mantienes la calma y transmites confianza para no afectar la moral del grupo.', scores: { emotional_intelligence: 3, resilience: 2 } }
    ]
  },
  {
    id: 'q3',
    question: 'Debes convencer a la dirección de invertir en una nueva tecnología:',
    options: [
      { text: 'Presentas un informe detallado con el retorno de inversión (ROI) estimado.', scores: { basic_financial_management: 3, business_orientation: 2 } },
      { text: 'Realizas una presentación visualmente impactante y persuasiva.', scores: { public_speaking: 3, influence: 2 } },
      { text: 'Explicas cómo la herramienta automatizará procesos y reducirá errores.', scores: { automation: 3, process_optimization: 2 } },
      { text: 'Muestras cómo la competencia ya está usando tecnologías similares.', scores: { global_vision: 3, strategic_thinking: 2 } }
    ]
  },
  {
    id: 'q4',
    question: 'Recibes dos tareas urgentes de dos superiores distintos al mismo tiempo:',
    options: [
      { text: 'Evalúas cuál tiene mayor impacto en los resultados del negocio.', scores: { prioritization: 3, results_orientation: 2 } },
      { text: 'Hablas con ambos para negociar un nuevo plazo razonable.', scores: { verbal_communication: 3, negotiation: 2 } },
      { text: 'Trabajas horas extra para intentar cumplir con ambas a tiempo.', scores: { discipline: 3, responsibility: 2 } },
      { text: 'Analizas si puedes delegar parte de una de las tareas en un compañero.', scores: { effective_delegation: 3, time_management: 2 } }
    ]
  },
  {
    id: 'q5',
    question: 'El software principal que usa tu departamento va a ser actualizado por uno más complejo:',
    options: [
      { text: 'Te ofreces como voluntario para aprenderlo primero y formar a los demás.', scores: { digital_literacy: 3, talent_development: 2 } },
      { text: 'Analizas cómo el cambio afectará a la productividad durante la transición.', scores: { change_management: 3, systemic_thinking: 2 } },
      { text: 'Buscas tutoriales y guías externas para dominar la herramienta rápido.', scores: { information_management: 3, proactivity: 2 } },
      { text: 'Aceptas el cambio con actitud positiva y paciencia ante los errores iniciales.', scores: { adaptability: 3, resilience: 2 } }
    ]
  },
  {
    id: 'q6',
    question: 'Durante una reunión, un colega critica duramente tu propuesta delante de todos:',
    options: [
      { text: 'Escuchas con atención y le pides que argumente sus puntos.', scores: { active_listening: 3, emotional_intelligence: 2 } },
      { text: 'Defiendes tu postura con datos objetivos y evidencias técnicas.', scores: { professional_judgment: 3, data_driven_decision_making: 2 } },
      { text: 'Intentas encontrar un punto medio entre su visión y la tuya.', scores: { negotiation: 3, empathy: 2 } },
      { text: 'Reflexionas después de la reunión para ver si sus críticas tenían razón.', scores: { self_awareness: 3, critical_thinking: 2 } }
    ]
  },
  {
    id: 'q7',
    question: 'Tienes que diseñar la estrategia del departamento para el próximo año:',
    options: [
      { text: 'Estudias las tendencias del mercado global y de la industria.', scores: { global_vision: 3, strategic_thinking: 2 } },
      { text: 'Reúnes a todo el equipo para hacer una lluvia de ideas conjunta.', scores: { collaborative_work: 3, inspiring_leadership: 2 } },
      { text: 'Te centras en mejorar los procesos internos que fallaron el año pasado.', scores: { continuous_improvement: 3, process_optimization: 2 } },
      { text: 'Estableces hitos claros y medibles para cada trimestre.', scores: { planning: 3, project_management: 2 } }
    ]
  },
  {
    id: 'q8',
    question: 'Detectas que la base de datos de clientes tiene información duplicada o errónea:',
    options: [
      { text: 'Creas un sistema o script para limpiar los datos automáticamente.', scores: { automation: 3, data_analysis: 2 } },
      { text: 'Propones un nuevo protocolo de entrada de datos para el equipo.', scores: { information_management: 3, continuous_improvement: 2 } },
      { text: 'Avisas al responsable de ciberseguridad por si hay un riesgo de integridad.', scores: { basic_cybersecurity: 3, professional_ethics: 2 } },
      { text: 'Dedicas un tiempo cada día a corregirlo manualmente hasta terminar.', scores: { discipline: 3, results_orientation: 2 } }
    ]
  },
  {
    id: 'q9',
    question: 'Un cliente muy enfadado llama porque el servicio no ha cumplido sus expectativas:',
    options: [
      { text: 'Te pones en su lugar, validas su frustración y te disculpas.', scores: { empathy: 3, customer_orientation: 2 } },
      { text: 'Buscas una solución técnica inmediata para resolver el fallo.', scores: { complex_problem_solving: 3, decision_making_uncertainty: 2 } },
      { text: 'Analizas si es un fallo puntual o un problema sistémico del negocio.', scores: { systemic_thinking: 3, data_analysis: 2 } },
      { text: 'Mantienes la integridad y defiendes los términos del contrato de forma profesional.', scores: { integrity: 3, professional_ethics: 2 } }
    ]
  },
  {
    id: 'q10',
    question: 'Te das cuenta de que un proceso interno es éticamente cuestionable, aunque legal:',
    options: [
      { text: 'Elevas tu preocupación a tus superiores aunque sea incómodo.', scores: { integrity: 3, professional_ethics: 2 } },
      { text: 'Buscas una alternativa que sea rentable y éticamente impecable.', scores: { innovation: 3, professional_judgment: 2 } },
      { text: 'Analizas el riesgo reputacional que esto podría suponer para la marca.', scores: { risk_management: 3, strategic_vision: 2 } },
      { text: 'Te aseguras de que tu propia actuación sea siempre ejemplar.', scores: { self_awareness: 3, discipline: 2 } }
    ]
  },
  {
    id: 'q11',
    question: 'Al liderar un equipo remoto y multicultural:',
    options: [
      { text: 'Estableces canales de comunicación claros y horarios respetuosos.', scores: { digital_tools_management: 3, written_communication: 2 } },
      { text: 'Te aseguras de entender las diferencias culturales en la forma de trabajar.', scores: { intercultural_sensitivity: 3, empathy: 2 } },
      { text: 'Utilizas metodologías ágiles para mantener a todos alineados.', scores: { agile_methodologies: 3, project_management: 2 } },
      { text: 'Fomentas reuniones de videoconferencia para crear cercanía.', scores: { relationship_building: 3, situational_leadership: 2 } }
    ]
  },
  {
    id: 'q12',
    question: 'Cuando surge un problema técnico que bloquea tu trabajo diario:',
    options: [
      { text: 'Intentas resolverlo usando el pensamiento lógico y deducción.', scores: { complex_problem_solving: 3, abstraction: 2 } },
      { text: 'Utilizas herramientas de búsqueda avanzada para encontrar la solución online.', scores: { information_management: 3, digital_literacy: 2 } },
      { text: 'Pides ayuda rápidamente para no perder tiempo de producción.', scores: { time_management: 3, resource_management: 2 } },
      { text: 'Analizas si este problema podría automatizarse para que no se repita.', scores: { automation: 3, continuous_improvement: 2 } }
    ]
  },
  {
    id: 'q13',
    question: 'Si te proponen liderar un proyecto en un área que no dominas completamente:',
    options: [
      { text: 'Aceptas el reto y te preparas intensamente por tu cuenta.', scores: { autonomy: 3, proactivity: 2 } },
      { text: 'Te rodeas de expertos y aprendes a delegar las partes técnicas.', scores: { talent_development: 3, effective_delegation: 2 } },
      { text: 'Analizas si tu perfil realmente aporta valor estratégico al proyecto.', scores: { professional_judgment: 3, self_awareness: 2 } },
      { text: 'Pides un mentor que te guíe durante las primeras etapas.', scores: { coaching_mentoring: 3, adaptability: 2 } }
    ]
  },
  {
    id: 'q14',
    question: 'En una situación de alta incertidumbre económica en la empresa:',
    options: [
      { text: 'Mantienes el enfoque en los objetivos a corto plazo que sí puedes controlar.', scores: { resilience: 3, results_orientation: 2 } },
      { text: 'Propones un plan de contingencia basado en diferentes escenarios.', scores: { risk_management: 3, strategic_thinking: 2 } },
      { text: 'Buscas nuevas oportunidades de negocio que surjan de la crisis.', scores: { business_orientation: 3, innovation_management: 2 } },
      { text: 'Mantienes informados a tus stakeholders de forma transparente.', scores: { stakeholder_management: 3, written_communication: 2 } }
    ]
  },
  {
    id: 'q15',
    question: 'Al redactar un informe técnico para un cliente no experto:',
    options: [
      { text: 'Eliminas tecnicismos y usas analogías sencillas de entender.', scores: { written_communication: 3, empathy: 2 } },
      { text: 'Incluyes gráficos y visualizaciones de datos para mayor claridad.', scores: { data_analysis: 3, public_speaking: 2 } },
      { text: 'Te aseguras de que toda la información sea precisa y esté contrastada.', scores: { integrity: 3, professional_judgment: 2 } },
      { text: 'Destacas principalmente los beneficios para el negocio del cliente.', scores: { customer_orientation: 3, influence: 2 } }
    ]
  },
  {
    id: 'q16',
    question: 'Cuando detectas que el flujo de trabajo de tu equipo tiene "cuellos de botella":',
    options: [
      { text: 'Rediseñas el proceso para equilibrar la carga de trabajo.', scores: { process_optimization: 3, systemic_thinking: 2 } },
      { text: 'Introduces una nueva herramienta digital de gestión de tareas.', scores: { digital_tools_management: 3, project_management: 2 } },
      { text: 'Hablas con las personas implicadas para entender sus dificultades.', scores: { active_listening: 3, performance_management: 2 } },
      { text: 'Priorizas las tareas más críticas para que el flujo no se detenga.', scores: { prioritization: 3, time_management: 2 } }
    ]
  },
  {
    id: 'q17',
    question: 'Tu equipo parece desmotivado tras un fracaso reciente:',
    options: [
      { text: 'Organizas una sesión para recordar la visión y el propósito del trabajo.', scores: { inspiring_leadership: 3, strategic_vision: 2 } },
      { text: 'Analizas las causas técnicas del fallo para aprender la lección.', scores: { analytical_thinking: 3, continuous_improvement: 2 } },
      { text: 'Ofreces feedback individual positivo destacando los esfuerzos realizados.', scores: { constructive_feedback: 3, emotional_intelligence: 2 } },
      { text: 'Das un tiempo de descanso o flexibilidad para recuperar energías.', scores: { situational_leadership: 3, empathy: 2 } }
    ]
  },
  {
    id: 'q18',
    question: 'Para asegurar la seguridad de la información en tu trabajo diario:',
    options: [
      { text: 'Sigues estrictamente los protocolos de contraseñas y accesos.', scores: { basic_cybersecurity: 3, discipline: 2 } },
      { text: 'Cuestionas cualquier petición de información inusual por email.', scores: { critical_thinking: 3, integrity: 2 } },
      { text: 'Organizas tus archivos digitales de forma lógica y segura.', scores: { information_management: 3, digital_literacy: 2 } },
      { text: 'Promueves el uso de herramientas de comunicación encriptadas.', scores: { digital_tools_management: 3, risk_management: 2 } }
    ]
  },
  {
    id: 'q19',
    question: 'Si tienes que tomar una decisión que beneficia a tu departamento pero perjudica a otro:',
    options: [
      { text: 'Buscas una solución de compromiso que minimice el impacto negativo.', scores: { negotiation: 3, systemic_thinking: 2 } },
      { text: 'Consultas con la dirección para asegurar que la decisión es estratégica.', scores: { stakeholder_management: 3, strategic_vision: 2 } },
      { text: 'Explicas tus razones de forma honesta a los responsables del otro área.', scores: { verbal_communication: 3, integrity: 2 } },
      { text: 'Priorizas el objetivo global de la empresa sobre el interés departamental.', scores: { business_orientation: 3, professional_judgment: 2 } }
    ]
  },
  {
    id: 'q20',
    question: 'Al recibir una tarea nueva y desconocida:',
    options: [
      { text: 'Buscas de forma proactiva información para aprender a hacerla.', scores: { autonomy: 3, information_management: 2 } },
      { text: 'Desglosas la tarea en pasos pequeños y lógicos.', scores: { analytical_thinking: 3, planning: 2 } },
      { text: 'Consultas con alguien que ya tenga experiencia en ello.', scores: { collaborative_work: 3, relationship_building: 2 } },
      { text: 'Te lanzas a la acción y vas ajustando según los resultados.', scores: { proactivity: 3, adaptability: 2 } }
    ]
  },
  {
    id: 'q21',
    question: 'Cuando participas en un proyecto bajo metodologías ágiles (como Scrum):',
    options: [
      { text: 'Te centras en entregar pequeñas partes de valor de forma frecuente.', scores: { agile_methodologies: 3, results_orientation: 2 } },
      { text: 'Participas activamente en las reuniones diarias aportando soluciones.', scores: { collaborative_work: 3, verbal_communication: 2 } },
      { text: 'Utilizas el feedback del cliente para pivotar rápido si es necesario.', scores: { customer_orientation: 3, adaptability: 2 } },
      { text: 'Mantienes el tablero de tareas actualizado y organizado.', scores: { project_management: 3, digital_literacy: 2 } }
    ]
  },
  {
    id: 'q22',
    question: 'Para mejorar tu propia eficiencia personal:',
    options: [
      { text: 'Identificas tus momentos de mayor energía para las tareas difíciles.', scores: { self_awareness: 3, time_management: 2 } },
      { text: 'Aprendes a usar atajos de teclado y automatizaciones sencillas.', scores: { digital_literacy: 3, automation: 2 } },
      { text: 'Estableces metas diarias realistas y las cumples con rigor.', scores: { discipline: 3, results_orientation: 2 } },
      { text: 'Eliminas distracciones y te enfocas en una sola tarea a la vez.', scores: { prioritization: 3, emotional_intelligence: 2 } }
    ]
  },
  {
    id: 'q23',
    question: 'Al enfrentarte a un dilema donde la solución lógica choca con los valores de la empresa:',
    options: [
      { text: 'Eliges la opción que mejor represente la ética de la organización.', scores: { professional_ethics: 3, integrity: 2 } },
      { text: 'Analizas el impacto a largo plazo de ambas opciones en la marca.', scores: { strategic_vision: 3, risk_management: 2 } },
      { text: 'Buscas una tercera vía innovadora que respete lógica y valores.', scores: { innovation: 3, complex_problem_solving: 2 } },
      { text: 'Pides orientación a un mentor o referente ético.', scores: { coaching_mentoring: 3, professional_judgment: 2 } }
    ]
  },
  {
    id: 'q24',
    question: 'Si el presupuesto de tu proyecto se reduce a la mitad a mitad de camino:',
    options: [
      { text: 'Identificas qué funciones son críticas y descartas el resto.', scores: { prioritization: 3, decision_making_uncertainty: 2 } },
      { text: 'Buscas formas más económicas y creativas de alcanzar el objetivo.', scores: { process_optimization: 3, innovation_management: 2 } },
      { text: 'Renegocias con los proveedores o partners para reducir costes.', scores: { negotiation: 3, basic_financial_management: 2 } },
      { text: 'Reorganizas el calendario para extender el plazo y reducir gastos mensuales.', scores: { resource_management: 3, planning: 2 } }
    ]
  },
  {
    id: 'q25',
    question: 'Al trabajar con grandes volúmenes de datos numéricos:',
    options: [
      { text: 'Buscas patrones y tendencias que ayuden a predecir el futuro.', scores: { data_analysis: 3, strategic_thinking: 2 } },
      { text: 'Verificas la calidad y origen de los datos para evitar sesgos.', scores: { critical_thinking: 3, information_management: 2 } },
      { text: 'Automatizas la generación de informes para ahorrar tiempo.', scores: { automation: 3, digital_tools_management: 2 } },
      { text: 'Traduces los números en una narrativa fácil de entender.', scores: { verbal_communication: 3, influence: 2 } }
    ]
  },
  {
    id: 'q26',
    question: 'Cuando un miembro del equipo tiene potencial pero le falta confianza:',
    options: [
      { text: 'Le asignas tareas de dificultad creciente y celebras sus logros.', scores: { talent_development: 3, situational_leadership: 2 } },
      { text: 'Dedicas tiempo a escuchar sus miedos y ofrecerle apoyo.', scores: { empathy: 3, coaching_mentoring: 2 } },
      { text: 'Le das feedback constructivo y específico sobre sus fortalezas.', scores: { constructive_feedback: 3, emotional_intelligence: 2 } },
      { text: 'Le incluyes en proyectos clave para que gane visibilidad.', scores: { inspiring_leadership: 3, relationship_building: 2 } }
    ]
  },
  {
    id: 'q27',
    question: 'Tu enfoque ante la diversidad en el lugar de trabajo es:',
    options: [
      { text: 'Aprovechar las distintas perspectivas para generar mejores ideas.', scores: { intercultural_sensitivity: 3, innovation: 2 } },
      { text: 'Asegurarte de que todos tengan las mismas oportunidades de hablar.', scores: { empathy: 3, situational_leadership: 2 } },
      { text: 'Adaptar tu lenguaje para ser inclusivo y respetuoso con todos.', scores: { verbal_communication: 3, professional_ethics: 2 } },
      { text: 'Analizar cómo la diversidad mejora los resultados del negocio.', scores: { business_orientation: 3, analytical_thinking: 2 } }
    ]
  },
  {
    id: 'q28',
    question: 'Si te das cuenta de que vas a incumplir un plazo de entrega importante:',
    options: [
      { text: 'Avisas lo antes posible y propones un plan de acción alternativo.', scores: { accountability: 3, stakeholder_management: 2 } },
      { text: 'Analizas qué ha fallado en la planificación para que no se repita.', scores: { analytical_thinking: 3, continuous_improvement: 2 } },
      { text: 'Negocias una entrega parcial que sea útil para el cliente.', scores: { customer_orientation: 3, negotiation: 2 } },
      { text: 'Trabajas intensamente para minimizar el retraso al máximo.', scores: { discipline: 3, resilience: 2 } }
    ]
  },
  {
    id: 'q29',
    question: 'Ante una nueva regulación legal que afecta a tu forma de trabajar:',
    options: [
      { text: 'Estudias la norma a fondo para asegurar el cumplimiento total.', scores: { professional_judgment: 3, information_management: 2 } },
      { text: 'Evalúas cómo impacta esto en los costes y procesos actuales.', scores: { risk_management: 3, systemic_thinking: 2 } },
      { text: 'Buscas la manera de convertir esta restricción en una ventaja competitiva.', scores: { strategic_thinking: 3, innovation_management: 2 } },
      { text: 'Comunicas los cambios necesarios al equipo de forma clara.', scores: { change_management: 3, written_communication: 2 } }
    ]
  },
  {
    id: 'q30',
    question: 'Al finalizar un proyecto importante, tu última acción suele ser:',
    options: [
      { text: 'Hacer una reunión de "lecciones aprendidas" con el equipo.', scores: { continuous_improvement: 3, collaborative_work: 2 } },
      { text: 'Asegurarte de que toda la documentación esté bien guardada y accesible.', scores: { information_management: 3, discipline: 2 } },
      { text: 'Analizar si se han cumplido los KPIs y el retorno esperado.', scores: { results_orientation: 3, data_analysis: 2 } },
      { text: 'Celebrar el éxito y reconocer el trabajo de cada persona.', scores: { inspiring_leadership: 3, relationship_building: 2 } }
    ]
  }
];

export const CAREER_DATABASE: CareerArea[] = [
  {
    name: 'Mantenimiento y Servicios Generales',
    description: 'Personal esencial para la operatividad y cuidado de instalaciones.',
    roles: [
      { title: 'Personal de Limpieza', requiredCompetencies: ['discipline', 'continuous_improvement', 'attention_to_detail'] },
      { title: 'Conserje / Ordenanza', requiredCompetencies: ['verbal_communication', 'information_management', 'reliability'] },
      { title: 'Peón de Mantenimiento', requiredCompetencies: ['complex_problem_solving', 'autonomy', 'resource_management'] },
      { title: 'Jardinero/a', requiredCompetencies: ['planning', 'patience', 'attention_to_detail'] },
      { title: 'Limpiador/a de Cristales en Altura', requiredCompetencies: ['risk_management', 'discipline', 'resilience'] },
      { title: 'Auxiliar de Lavandería', requiredCompetencies: ['time_management', 'process_optimization', 'integrity'] },
      { title: 'Controlador de Accesos', requiredCompetencies: ['decision_making_uncertainty', 'verbal_communication', 'professional_ethics'] },
      { title: 'Pintor/a de Interiores', requiredCompetencies: ['attention_to_detail', 'autonomy', 'resource_management'] },
      { title: 'Mozo de Mudanzas', requiredCompetencies: ['collaborative_work', 'resilience', 'risk_management'] },
      { title: 'Operario/a de Gestión de Residuos', requiredCompetencies: ['professional_ethics', 'discipline', 'environmental_care'] }
    ]
  },
  {
    name: 'Logística y Almacén',
    description: 'Perfiles clave en la cadena de suministro y manejo de mercancías.',
    roles: [
      { title: 'Mozo de Almacén', requiredCompetencies: ['organization', 'discipline', 'digital_tools_management'] },
      { title: 'Carretillero/a', requiredCompetencies: ['risk_management', 'concentration', 'responsibility'] },
      { title: 'Preparador/a de Pedidos (Picker)', requiredCompetencies: ['time_management', 'results_orientation', 'digital_literacy'] },
      { title: 'Repartidor/a de Paquetería', requiredCompetencies: ['customer_orientation', 'adaptability', 'time_management'] },
      { title: 'Auxiliar de Carga y Descarga', requiredCompetencies: ['collaborative_work', 'resilience', 'synchronization'] },
      { title: 'Controlador/a de Stock', requiredCompetencies: ['data_analysis', 'analytical_thinking', 'prioritization'] },
      { title: 'Conductor/a de Camión', requiredCompetencies: ['autonomy', 'risk_management', 'integrity'] },
      { title: 'Auxiliar de Recepción de Mercancías', requiredCompetencies: ['written_communication', 'information_management', 'attention_to_detail'] },
      { title: 'Mozo de Almacén de Frío', requiredCompetencies: ['resilience', 'discipline', 'risk_management'] },
      { title: 'Operario de Etiquetado', requiredCompetencies: ['continuous_improvement', 'discipline', 'time_management'] }
    ]
  },
  {
    name: 'Hostelería y Restauración Social',
    description: 'Roles de apoyo en cocinas, comedores sociales y colectividades.',
    roles: [
      { title: 'Ayudante de Cocina', requiredCompetencies: ['collaborative_work', 'active_listening', 'time_management'] },
      { title: 'Friegaplatos / Marmitón', requiredCompetencies: ['resilience', 'discipline', 'continuous_improvement'] },
      { title: 'Camarero/a de Sala', requiredCompetencies: ['emotional_intelligence', 'verbal_communication', 'customer_orientation'] },
      { title: 'Auxiliar de Comedor Escolar', requiredCompetencies: ['empathy', 'intercultural_sensitivity', 'conflict_management'] },
      { title: 'Cocinero/a para Comedor Social', requiredCompetencies: ['resource_management', 'innovation', 'situational_leadership'] },
      { title: 'Personal de Office', requiredCompetencies: ['process_optimization', 'discipline', 'organization'] },
      { title: 'Camarero/a de Pisos', requiredCompetencies: ['attention_to_detail', 'autonomy', 'professional_ethics'] },
      { title: 'Auxiliar de Catering', requiredCompetencies: ['adaptability', 'collaborative_work', 'time_management'] },
      { title: 'Pinche de Cocina', requiredCompetencies: ['active_listening', 'discipline', 'proactivity'] },
      { title: 'Barman / Cafetería', requiredCompetencies: ['verbal_communication', 'active_listening', 'business_orientation'] }
    ]
  },
  {
    name: 'Atención a la Comunidad y Cuidados',
    description: 'Puestos enfocados en el apoyo directo a personas y colectivos vulnerables.',
    roles: [
      { title: 'Auxiliar de Ayuda a Domicilio', requiredCompetencies: ['empathy', 'emotional_intelligence', 'autonomy'] },
      { title: 'Cuidador/a de Personas Mayores', requiredCompetencies: ['patience', 'active_listening', 'resilience'] },
      { title: 'Acompañante de Transporte Adaptado', requiredCompetencies: ['intercultural_sensitivity', 'verbal_communication', 'risk_management'] },
      { title: 'Monitor/a de Ocio y Tiempo Libre', requiredCompetencies: ['inspiring_leadership', 'innovation', 'collaborative_work'] },
      { title: 'Auxiliar de Geriatría', requiredCompetencies: ['professional_ethics', 'integrity', 'resilience'] },
      { title: 'Mediador/a Comunitario', requiredCompetencies: ['negotiation', 'conflict_management', 'active_listening'] },
      { title: 'Teleoperador/a de Teleasistencia', requiredCompetencies: ['verbal_communication', 'emotional_intelligence', 'digital_tools_management'] },
      { title: 'Auxiliar de Guardería', requiredCompetencies: ['talent_development', 'patience', 'empathy'] },
      { title: 'Asistente de Personas con Discapacidad', requiredCompetencies: ['accountability', 'empathy', 'adaptability'] },
      { title: 'Celador/a Social', requiredCompetencies: ['verbal_communication', 'resilience', 'collaborative_work'] }
    ]
  },
  {
    name: 'Comercio y Atención al Público',
    description: 'Roles de venta y atención directa en tiendas o puntos de servicio.',
    roles: [
      { title: 'Cajero/a de Supermercado', requiredCompetencies: ['basic_financial_management', 'customer_orientation', 'discipline'] },
      { title: 'Reponedor/a', requiredCompetencies: ['organization', 'autonomy', 'prioritization'] },
      { title: 'Dependiente/a de Comercio', requiredCompetencies: ['influence', 'verbal_communication', 'active_listening'] },
      { title: 'Mozo de Almacén de Tienda', requiredCompetencies: ['time_management', 'collaborative_work', 'organization'] },
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
    description: 'Trabajos de oficio y apoyo en obras y procesos industriales.',
    roles: [
      { title: 'Peón de Obra', requiredCompetencies: ['discipline', 'risk_management', 'collaborative_work'] },
      { title: 'Ayudante de Electricista', requiredCompetencies: ['analytical_thinking', 'attention_to_detail', 'digital_tools_management'] },
      { title: 'Ayudante de Fontanería', requiredCompetencies: ['complex_problem_solving', 'autonomy', 'resource_management'] },
      { title: 'Operario/a de Montaje Industrial', requiredCompetencies: ['process_optimization', 'discipline', 'attention_to_detail'] },
      { title: 'Auxiliar de Carpintería', requiredCompetencies: ['attention_to_detail', 'innovation', 'active_listening'] },
      { title: 'Peón Especialista (Soldadura)', requiredCompetencies: ['risk_management', 'discipline', 'precision'] },
      { title: 'Auxiliar de Climatización', requiredCompetencies: ['systemic_thinking', 'complex_problem_solving', 'adaptability'] },
      { title: 'Operario/a de Maquinaria Textil', requiredCompetencies: ['discipline', 'continuous_improvement', 'concentration'] },
      { title: 'Albañil de Segunda', requiredCompetencies: ['autonomy', 'planning', 'time_management'] },
      { title: 'Ayudante de Pintura Industrial', requiredCompetencies: ['risk_management', 'discipline', 'proactivity'] }
    ]
  },
  {
    name: 'Administración Básica y Digital',
    description: 'Tareas de oficina y apoyo administrativo de primer nivel.',
    roles: [
      { title: 'Auxiliar Administrativo', requiredCompetencies: ['written_communication', 'information_management', 'digital_literacy'] },
      { title: 'Recepcionista de Fundación', requiredCompetencies: ['active_listening', 'empathy', 'stakeholder_management'] },
      { title: 'Data Entry (Grabador de datos)', requiredCompetencies: ['discipline', 'digital_tools_management', 'attention_to_detail'] },
      { title: 'Auxiliar de Archivo', requiredCompetencies: ['organization', 'information_management', 'integrity'] },
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
    description: 'Nuevos puestos surgidos de la economía circular y sostenibilidad.',
    roles: [
      { title: 'Operario/a de Planta de Reciclaje', requiredCompetencies: ['discipline', 'professional_ethics', 'risk_management'] },
      { title: 'Técnico de Instalaciones Solares (Ayudante)', requiredCompetencies: ['strategic_thinking', 'collaborative_work', 'risk_management'] },
      { title: 'Reparador/a de Pequeños Electrodomésticos', requiredCompetencies: ['complex_problem_solving', 'analytical_thinking', 'innovation'] },
      { title: 'Gestor/a de Compostaje Comunitario', requiredCompetencies: ['verbal_communication', 'intercultural_sensitivity', 'continuous_improvement'] },
      { title: 'Auxiliar de Movilidad Sostenible (Bicicletas)', requiredCompetencies: ['technical_maintenance', 'customer_orientation', 'proactivity'] },
      { title: 'Personal de Recogida de Ropa Usada', requiredCompetencies: ['integrity', 'time_management', 'accountability'] },
      { title: 'Operario/a de Reforestación', requiredCompetencies: ['resilience', 'professional_ethics', 'collaborative_work'] },
      { title: 'Técnico/a de Auditoría Energética Básica', requiredCompetencies: ['data_analysis', 'systemic_thinking', 'written_communication'] },
      { title: 'Auxiliar de Tratamiento de Aguas', requiredCompetencies: ['risk_management', 'critical_thinking', 'continuous_improvement'] },
      { title: 'Operario de Bio-construcción', requiredCompetencies: ['innovation', 'sustainability', 'collaborative_work'] }
    ]
  },
  {
    name: 'Apoyo a la Seguridad y Orden Público',
    description: 'Puestos de vigilancia y auxilio ciudadano básico.',
    roles: [
      { title: 'Auxiliar de Vigilancia', requiredCompetencies: ['discipline', 'risk_management', 'integrity'] },
      { title: 'Sereno / Vigilante de Noche', requiredCompetencies: ['autonomy', 'resilience', 'accountability'] },
      { title: 'Controlador/a de Aparcamiento', requiredCompetencies: ['conflict_management', 'verbal_communication', 'integrity'] },
      { title: 'Auxiliar de Protección Civil (Voluntariado/Apoyo)', requiredCompetencies: ['resilience', 'decision_making_uncertainty', 'collaborative_work'] },
      { title: 'Acompañante de Seguridad para Menores', requiredCompetencies: ['empathy', 'professional_ethics', 'active_listening'] },
      { title: 'Conserje de Instalaciones Deportivas', requiredCompetencies: ['organization', 'verbal_communication', 'resource_management'] },
      { title: 'Informador/a de Calle (Campañas)', requiredCompetencies: ['influence', 'resilience', 'verbal_communication'] },
      { title: 'Auxiliar de Aduanas (Almacén)', requiredCompetencies: ['professional_ethics', 'information_management', 'discipline'] },
      { title: 'Vigilante de Museos / Exposiciones', requiredCompetencies: ['intercultural_sensitivity', 'discipline', 'attention_to_detail'] },
      { title: 'Personal de Seguridad en Eventos', requiredCompetencies: ['conflict_management', 'situational_leadership', 'collaborative_work'] }
    ]
  },
  {
    name: 'Transporte y Movilidad Urbana',
    description: 'Servicios de desplazamiento y logística en ciudades.',
    roles: [
      { title: 'Conductor/a de Autobús / Autocar', requiredCompetencies: ['responsibility', 'customer_orientation', 'risk_management'] },
      { title: 'Mozo de Estación', requiredCompetencies: ['verbal_communication', 'information_management', 'adaptability'] },
      { title: 'Auxiliar de Parking', requiredCompetencies: ['time_management', 'customer_orientation', 'integrity'] },
      { title: 'Bici-Mensajero / Last Mile Delivery', requiredCompetencies: ['resilience', 'time_management', 'results_orientation'] },
      { title: 'Conductor/a de Ambulancia (Apoyo)', requiredCompetencies: ['decision_making_uncertainty', 'resilience', 'collaborative_work'] },
      { title: 'Controlador de Flota (Junior)', requiredCompetencies: ['project_management', 'analytical_thinking', 'digital_tools_management'] },
      { title: 'Auxiliar de Aeropuerto (Equipaje)', requiredCompetencies: ['discipline', 'risk_management', 'collaborative_work'] },
      { title: 'Revisor de Transporte Público', requiredCompetencies: ['negotiation', 'conflict_management', 'professional_ethics'] },
      { title: 'Ayudante de Mecánica Rápida', requiredCompetencies: ['analytical_thinking', 'discipline', 'complex_problem_solving'] },
      { title: 'Chofer de VTC / Taxi', requiredCompetencies: ['customer_orientation', 'autonomy', 'resilience'] }
    ]
  }
];
