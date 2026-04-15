(function () {
  'use strict';

  const STORAGE_KEY = 'josehenriquesa.com.language';
  const SUPPORTED = ['en', 'es', 'pt'];
  const FALLBACK = 'en';
  const html = document.documentElement;
  const page = document.body.dataset.page;
  const listeners = [];
  const ALLOWED_HTML_TAGS = new Set(['strong', 'em', 'span', 'br']);
  const ALLOWED_SPAN_CLASSES = new Set(['stroke-text', 'tag-active', 'req']);
  const ALLOWED_INLINE_STYLE = 'color:var(--orange)';

  const dict = {
    en: {
      ui: {
        langLabel: 'Language',
        languages: { en: 'English', es: 'Español', pt: 'Português' }
      },
      home: {
        title: 'Jose Henrique — Senior Java Developer',
        description: 'Jose Henrique Santos Andrade — Senior Java Developer & Backend Architect with 14+ years of experience.',
        nav: ['About', 'Experience', 'Projects', 'Blog'],
        cta: 'Contact',
        closeMenu: 'Close menu',
        burgerMenu: 'Menu',
        heroEyebrow: '● Available for technical partnerships and projects',
        heroName: 'My name<br>is Jose<br><span class="stroke-text">Henrique</span>',
        heroBio: 'Senior Java Developer &amp; Backend Architect with <strong>14+ years</strong> of experience building microservices, enterprise e-commerce platforms, and high-performance systems for <strong>Vivo / Telefônica Brasil</strong>.',
        heroBadgesAria: 'Core technologies',
        heroButtons: ['View projects', 'Talk to me'],
        statChipAria: '14 years of experience',
        statChipSub: 'years of<br>experience',
        location: 'São Paulo · BR',
        stripLabels: ['Years of experience', 'Years at Vivo', 'Companies', 'Postgraduate degrees'],
        aboutLabel: '// 01 — About',
        aboutTitle: 'Who<br><span class="stroke-text">I am</span>',
        aboutParagraphs: [
          'Bachelor in <strong>Information Systems from UFLA</strong>, specialist in Software Architecture, and currently pursuing a postgraduate degree in <strong>Artificial Intelligence at Anhembi Morumbi</strong>.',
          'Working as a Consultant and Developer at <strong>Vivo (Telefônica Brasil)</strong> since 2019, I deliver large-scale digital solutions using SAP Commerce, Kubernetes, Docker, and AWS. Lean Yellow Belt, with strong command of Scrum and Kanban.'
        ],
        education: [
          ['Bachelor — Information Systems', 'UFLA · 2008 – 2012'],
          ['Specialization — Software Architecture', 'IGTI · 2014 – 2015'],
          ['Specialization — Artificial Intelligence', 'Anhembi Morumbi · 2025 – 2026 <span class="tag-active">In progress</span>']
        ],
        contactMe: 'Get in touch',
        experienceLabel: '// 02 — Career',
        experienceTitle: 'Professional <span class="stroke-text">Experience</span>',
        currentBadge: 'Current',
        jobs: [
          ['Consultant &amp; Developer', 'Vivo · Telefônica Brasil · São Paulo', 'Aug 2019 – Present · 6y 8m', 'Development and architecture of digital products with SAP Commerce (Hybris), Spring MVC, Node.js, Docker, and Kubernetes. Full lifecycle: architecture, integrations, development, deployment, and continuous evolution. Migration to SAP Cloud.'],
          ['Tech Lead &amp; Senior Developer', 'Equals · Financial Management · Lavras, MG', 'May 2017 – Aug 2019 · 2y 4m', 'Led the payment integrations team. Architecture, development, and Oracle database modeling, plus internal and partner/client support.'],
          ['Systems Analyst &amp; Mid-level Developer', 'Equals · Financial Management · São Paulo', 'Sep 2014 – May 2017 · 2y 9m', 'Analysis and development with Java, Spring Framework, and Apache Camel. Requirements gathering, training, and Oracle modeling. JBoss server.'],
          ['Systems Analyst', 'LEMAF · Forest Management Lab · UFLA', 'May 2012 – Aug 2014 · 2y 4m', 'Development of forestry and environmental systems, requirements gathering, database modeling, and deployment. Started as an intern.'],
          ['Full Stack Developer', 'LabGTI · Lavras, MG', 'Apr 2011 – Jan 2012 · 10m', 'Development of systems with Java, JavaScript, jQuery, and Bootstrap.'],
          ['Instructor &amp; Webmaster', 'Geoprocessing Lab · UFLA · Lavras', 'May 2010 – Jul 2011 · 1y 3m', 'Geoprocessing courses for technicians and Joomla site administration.']
        ],
        stackLabel: '// 03 — Stack',
        stackTitle: 'My <span class="stroke-text">Technologies</span>',
        stackCats: ['Backend', 'Cloud &amp; DevOps', 'Databases'],
        skillLevels: ['Expert', 'Expert', 'Expert', 'Advanced', 'Advanced', 'Expert', 'Advanced', 'Advanced', 'Advanced', 'Advanced', 'Expert', 'Advanced', 'Expert', 'Advanced', 'Expert', 'Advanced', 'Advanced', 'Advanced'],
        projectLabel: '// 04 — Portfolio',
        projectTitle: 'Featured <span class="stroke-text">Projects</span>',
        allProjects: 'View all',
        projects: [
          ['E-commerce · SAP', 'Vivo Digital Platform', 'Enterprise e-commerce with SAP Commerce (Hybris), microservices, Kubernetes, and SAP Cloud. Checkout, catalog, and mission-critical business API modules.'],
          ['Fintech', 'Payments Hub', 'Centralized hub for payment integrations with high availability and full transaction traceability.'],
          ['Environmental · GIS', 'Forest Management', 'Forestry and environmental monitoring system with geoprocessing for government agencies.']
        ],
        blogLabel: '// 05 — Blog',
        blogTitle: 'Articles &amp; <span class="stroke-text">Content</span>',
        blogPosts: [
          ['Java - Backend', 'Microservices with Spring Boot: best practices in 2026', 'How to structure modern Spring Boot projects with resilience, observability, and performance on Kubernetes.', 'Read article'],
          ['SAP Commerce', 'SAP Commerce Cloud: what you need to know before migrating', 'A practical guide to moving from on-premise Hybris to SAP Cloud - challenges and winning strategies.', 'Read article'],
          ['AI - Technology', 'AI in backend development: the future is already here', 'How Artificial Intelligence is transforming Java development, testing, and documentation.', 'Read article'],
          ['Java - Architecture', 'Spring Boot vs Quarkus: which framework should you use for microservices?', 'A practical comparison of startup, scaling, integration, and real architecture scenarios.', 'Read article'],
          ['AI - Engineering', 'How Codex and Claude can accelerate development and shrink software teams', 'New coding assistants reduce repetitive execution and make architects and reviewers even more central.', 'Read article']
        ],
        contactLabel: '// 06 — Contact',
        contactTitle: 'Let’s<br><span class="stroke-text">Talk</span>',
        contactText: 'Open to opportunities, projects, and collaborations. I reply within 24 hours.',
        contactLocation: 'São Paulo, SP · Brazil',
        sendMessage: 'Send message →',
        footerEmail: 'Email'
      },
      contact: {
        title: 'Contact — Jose Henrique',
        description: 'Get in touch with Jose Henrique Santos Andrade — Senior Java Developer.',
        nav: ['About', 'Experience', 'Projects', 'Blog', 'Contact'],
        headerMenu: 'Main menu',
        socials: 'Social media',
        homeAria: 'Home',
        heroLabel: '// 06 — Get in touch',
        heroTitle: 'Let’s<br>Con<em>nect</em>',
        heroSub: 'Open to partnerships, projects, and technical collaborations. I always reply within 24 hours.',
        availTitle: 'Available for technical partnerships and projects',
        availSub: 'São Paulo, SP · Brazil · Remote or hybrid',
        directTitle: 'Direct contacts',
        socialTitle: 'Social media',
        formTitle: 'Send a message',
        formSub: 'Fill out the form and I will receive it directly in my email. Fields marked with <span style="color:var(--orange)">*</span> are required.',
        progressAria: 'Form progress',
        labels: {
          name: 'Name', email: 'Email', phone: 'Phone / WhatsApp', company: 'Company / Organization', subject: 'Subject', message: 'Message'
        },
        placeholders: {
          name: 'Your full name', email: 'your@email.com', phone: '+55 (11) 99999-9999', company: 'Company name (optional)', message: 'Describe your proposal, project, or question in detail…'
        },
        subjectOptions: ['Select a subject…', '💼 Job opportunity', '🚀 Freelance project', '🤝 Technical partnership', '📋 Consulting', '💡 Technical question', '✍️ Blog/content collaboration', '💬 Other'],
        privacy: 'By submitting this form, you agree that your information will be used to respond to your message. No data is shared with third parties.',
        submit: 'Send message',
        validation: {
          nameRequired: 'Name is required',
          emailInvalid: 'Enter a valid email',
          subjectRequired: 'Select a subject',
          messageShort: 'Message is too short (min. 20 characters)',
          messageRequired: 'Message is required (min. 20 characters)'
        },
        statuses: {
          sending: 'Sending your message…',
          success: 'Message sent successfully! I will reply soon.',
          fallback: 'Opening your email client with the prefilled message…'
        },
        submitSending: 'Sending…'
      },
      error404: {
        title: '404 — Page not found · Jose Henrique',
        socials: 'Social media',
        homeAria: 'Home',
        backHome: 'Home',
        eyebrow: 'One question before you go',
        phrase: 'Do you know what<br>you are <em>looking for</em>?',
        phraseSub: 'Sometimes the best code has not been written yet.<br>Maybe what you need is only <strong>one conversation away</strong>.',
        errTitle: 'Page not found',
        errDesc: 'The URL you accessed does not exist or was removed. But you are still in the right place.',
        buttons: ['Back home', 'Send message'],
        quickLinksAria: 'Quick links',
        quickLinks: ['→ About', '→ Experience', '→ Projects', '→ Blog', '→ Contact'],
        contactLabel: '// Let’s talk',
        contactTitle: 'Get in<br><em>Touch</em>',
        contactDesc: 'Found this error but still have something important to say? Send me a message ? I always reply within 24 hours.',
        formLabels: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' },
        formPlaceholders: { name: 'Your name', email: 'your@email.com', message: 'Describe your idea or proposal…' },
        formOptions: ['Select a subject…', 'Job opportunity', 'Freelance project', 'Technical partnership', 'Technical question', 'Other'],
        formErrors: { name: 'Name is required', email: 'Invalid email', subject: 'Select a subject', message: 'Message is required' },
        submit: 'Send message',
        sending: 'Sending…',
        success: '✓ Message sent! I will reply soon.',
        fallback: 'Opening your email client…'
      }
    },
    es: {
      ui: { langLabel: 'Idioma', languages: { en: 'English', es: 'Español', pt: 'Português' } },
      home: {
        title: 'Jose Henrique — Desarrollador Java Senior',
        description: 'Jose Henrique Santos Andrade — Desarrollador Java Senior y Arquitecto Backend con más de 14 años de experiencia.',
        nav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Blog'],
        cta: 'Contacto',
        closeMenu: 'Cerrar menú',
        burgerMenu: 'Menú',
        heroEyebrow: '● Disponible para alianzas técnicas y proyectos',
        heroName: 'Mi nombre<br>es Jose<br><span class="stroke-text">Henrique</span>',
        heroBio: 'Desarrollador Java Senior y Arquitecto Backend con <strong>14+ años</strong> de experiencia construyendo microservicios, plataformas enterprise de e-commerce y sistemas de alto rendimiento para <strong>Vivo / Telefônica Brasil</strong>.',
        heroBadgesAria: 'Tecnologías principales', heroButtons: ['Ver proyectos', 'Hablar conmigo'], statChipAria: '14 años de experiencia', statChipSub: 'años de<br>experiencia', location: 'São Paulo · BR', stripLabels: ['Años de experiencia', 'Años en Vivo', 'Empresas', 'Posgrados'],
        aboutLabel: '// 01 — Sobre mí', aboutTitle: 'Quién<br><span class="stroke-text">soy</span>',
        aboutParagraphs: ['Licenciado en <strong>Sistemas de Información por la UFLA</strong>, especialista en Arquitectura de Software y actualmente cursando un posgrado en <strong>Inteligencia Artificial en Anhembi Morumbi</strong>.', 'Actuando como Consultor y Desarrollador en <strong>Vivo (Telefônica Brasil)</strong> desde 2019, entrego soluciones digitales a gran escala usando SAP Commerce, Kubernetes, Docker y AWS. Yellow Belt en Lean, con dominio sólido de Scrum y Kanban.'],
        education: [['Licenciatura — Sistemas de Información', 'UFLA · 2008 – 2012'], ['Especialización — Arquitectura de Software', 'IGTI · 2014 – 2015'], ['Especialización — Inteligencia Artificial', 'Anhembi Morumbi · 2025 – 2026 <span class="tag-active">En curso</span>']],
        contactMe: 'Ponerse en contacto', experienceLabel: '// 02 — Carrera', experienceTitle: 'Experiencia <span class="stroke-text">Profesional</span>', currentBadge: 'Actual',
        jobs: [['Consultor y Desarrollador', 'Vivo · Telefônica Brasil · São Paulo', 'Ago 2019 – Actualidad · 6a 8m', 'Desarrollo y arquitectura de productos digitales con SAP Commerce (Hybris), Spring MVC, Node.js, Docker y Kubernetes. Ciclo completo: arquitectura, integraciones, desarrollo, despliegue y evolución continua. Migración a SAP Cloud.'], ['Líder Técnico y Desarrollador Senior', 'Equals · Gestión Financiera · Lavras, MG', 'May 2017 – Ago 2019 · 2a 4m', 'Liderazgo del equipo de integraciones con medios de pago. Arquitectura, desarrollo y modelado de base de datos Oracle, además de soporte interno y externo a socios y clientes.'], ['Analista y Desarrollador Semi Senior', 'Equals · Gestión Financiera · São Paulo', 'Sep 2014 – May 2017 · 2a 9m', 'Análisis y desarrollo con Java, Spring Framework y Apache Camel. Levantamiento de requisitos, capacitaciones y modelado Oracle. Servidor JBoss.'], ['Analista de Sistemas', 'LEMAF · Lab. Manejo Forestal · UFLA', 'May 2012 – Ago 2014 · 2a 4m', 'Desarrollo de sistemas forestales y ambientales, levantamiento de requisitos, modelado de base de datos y despliegue. Empecé como becario.'], ['Desarrollador Full Stack', 'LabGTI · Lavras, MG', 'Abr 2011 – Ene 2012 · 10m', 'Desarrollo de sistemas con Java, JavaScript, jQuery y Bootstrap.'], ['Instructor y Webmaster', 'Lab. Geoprocesamiento · UFLA · Lavras', 'May 2010 – Jul 2011 · 1a 3m', 'Cursos de geoprocesamiento para técnicos y administración de sitio Joomla.']],
        stackLabel: '// 03 — Stack', stackTitle: 'Mis <span class="stroke-text">Tecnologías</span>', stackCats: ['Backend', 'Cloud &amp; DevOps', 'Bases de datos'], skillLevels: ['Experto', 'Experto', 'Experto', 'Avanzado', 'Avanzado', 'Experto', 'Avanzado', 'Avanzado', 'Avanzado', 'Avanzado', 'Experto', 'Avanzado', 'Experto', 'Avanzado', 'Experto', 'Avanzado', 'Avanzado', 'Avanzado'],
        projectLabel: '// 04 — Portafolio', projectTitle: 'Proyectos <span class="stroke-text">Destacados</span>', allProjects: 'Ver todos', projects: [['E-commerce · SAP', 'Plataforma Digital Vivo', 'E-commerce enterprise con SAP Commerce (Hybris), microservicios, Kubernetes y SAP Cloud. Módulos de checkout, catálogo y APIs críticas del negocio.'], ['Fintech', 'Hub de Pagos', 'Hub centralizado para integraciones con medios de pago. Alta disponibilidad y trazabilidad completa de transacciones.'], ['Ambiental · GIS', 'Gestión Forestal', 'Sistema de monitoreo forestal y ambiental con geoprocesamiento para organismos gubernamentales.']],
        blogLabel: '// 05 — Blog', blogTitle: 'Artículos y <span class="stroke-text">Contenido</span>', blogPosts: [
          ['Java - Backend', 'Microservicios con Spring Boot: buenas practicas en 2026', 'Como estructurar proyectos modernos con Spring Boot, resiliencia, observabilidad y rendimiento en Kubernetes.', 'Leer articulo'],
          ['SAP Commerce', 'SAP Commerce Cloud: lo que necesitas saber antes de migrar', 'Guia practica sobre la migracion de Hybris on-premise a SAP Cloud: desafios y estrategias de exito.', 'Leer articulo'],
          ['IA - Tecnologia', 'IA en el desarrollo backend: el futuro ya llego', 'Como la Inteligencia Artificial esta transformando el desarrollo, las pruebas y la documentacion en Java.', 'Leer articulo'],
          ['Java - Arquitectura', 'Spring Boot vs Quarkus: que framework usar en microservicios?', 'Comparacion practica de inicializacion, escala, integracion y escenarios reales de arquitectura.', 'Leer articulo'],
          ['IA - Ingenieria', 'Como Codex y Claude pueden acelerar el desarrollo y reducir equipos de software', 'Los nuevos asistentes de codigo reducen ejecucion repetitiva y vuelven mas centrales a arquitectos y revisores.', 'Leer articulo']
        ],
        contactLabel: '// 06 — Contacto', contactTitle: 'Vamos a<br><span class="stroke-text">Conversar</span>', contactText: 'Abierto a oportunidades, proyectos y colaboraciones. Respondo en hasta 24 horas.', contactLocation: 'São Paulo, SP · Brasil', sendMessage: 'Enviar mensaje →', footerEmail: 'Email'
      },
      contact: {
        title: 'Contacto — Jose Henrique', description: 'Ponte en contacto con Jose Henrique Santos Andrade — Desarrollador Java Senior.', nav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Blog', 'Contacto'], headerMenu: 'Menú principal', socials: 'Redes sociales', homeAria: 'Inicio', heroLabel: '// 06 — Ponte en contacto', heroTitle: 'Vamos a<br>Con<em>versar</em>', heroSub: 'Abierto a alianzas, proyectos y colaboraciones técnicas. Siempre respondo en hasta 24 horas.', availTitle: 'Disponible para alianzas técnicas y proyectos', availSub: 'São Paulo, SP · Brasil · Remoto o híbrido', directTitle: 'Contactos directos', socialTitle: 'Redes sociales', formTitle: 'Envía un mensaje', formSub: 'Completa el formulario y lo recibiré directamente en mi correo. Los campos marcados con <span style="color:var(--orange)">*</span> son obligatorios.', progressAria: 'Progreso del formulario', labels: { name: 'Nombre', email: 'Email', phone: 'Teléfono / WhatsApp', company: 'Empresa / Organización', subject: 'Asunto', message: 'Mensaje' }, placeholders: { name: 'Tu nombre completo', email: 'tu@email.com', phone: '+55 (11) 99999-9999', company: 'Nombre de la empresa (opcional)', message: 'Describe tu propuesta, proyecto o duda en detalle…' }, subjectOptions: ['Selecciona un asunto…', '💼 Oportunidad laboral', '🚀 Proyecto freelance', '🤝 Alianza técnica', '📋 Consultoría', '💡 Duda técnica', '✍️ Colaboración en blog/contenido', '💬 Otro'], privacy: 'Al enviar este formulario, aceptas que tu información se utilizará para responder tu mensaje. Ningún dato se comparte con terceros.', submit: 'Enviar mensaje', validation: { nameRequired: 'El nombre es obligatorio', emailInvalid: 'Ingresa un email válido', subjectRequired: 'Selecciona un asunto', messageShort: 'El mensaje es demasiado corto (mín. 20 caracteres)', messageRequired: 'El mensaje es obligatorio (mín. 20 caracteres)' }, statuses: { sending: 'Enviando tu mensaje…', success: '¡Mensaje enviado con éxito! Responderé pronto.', fallback: 'Abriendo tu cliente de correo con el mensaje completado…' }, submitSending: 'Enviando…'
      },
      error404: {
        title: '404 — Página no encontrada · Jose Henrique', socials: 'Redes sociales', homeAria: 'Inicio', backHome: 'Inicio', eyebrow: 'Una pregunta antes de que te vayas', phrase: '¿Sabes qué<br>estás <em>buscando</em>?', phraseSub: 'A veces el mejor código todavía no ha sido escrito.<br>Tal vez lo que buscas está a <strong>una conversación de distancia</strong>.', errTitle: 'Página no encontrada', errDesc: 'La URL a la que accediste no existe o fue eliminada. Pero sigues estando en el lugar correcto.', buttons: ['Volver al inicio', 'Enviar mensaje'], quickLinksAria: 'Enlaces rápidos', quickLinks: ['→ Sobre mí', '→ Experiencia', '→ Proyectos', '→ Blog', '→ Contacto'], contactLabel: '// Vamos a conversar', contactTitle: 'Ponte en<br><em>Contacto</em>', contactDesc: '¿Encontraste este error pero aún tienes algo importante que decir? Envíame un mensaje — siempre respondo en hasta 24 horas.', formLabels: { name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje' }, formPlaceholders: { name: 'Tu nombre', email: 'tu@email.com', message: 'Describe tu idea o propuesta…' }, formOptions: ['Selecciona un asunto…', 'Oportunidad laboral', 'Proyecto freelance', 'Alianza técnica', 'Duda técnica', 'Otro'], formErrors: { name: 'El nombre es obligatorio', email: 'Email inválido', subject: 'Selecciona un asunto', message: 'El mensaje es obligatorio' }, submit: 'Enviar mensaje', sending: 'Enviando…', success: '✓ ¡Mensaje enviado! Responderé pronto.', fallback: 'Abriendo tu cliente de correo…'
      }
    },
    pt: {
      ui: { langLabel: 'Idioma', languages: { en: 'English', es: 'Español', pt: 'Português' } },
      home: {
        title: 'Jose Henrique — Java Sênior', description: 'Jose Henrique Santos Andrade — Desenvolvedor Java Sênior & Arquiteto Backend com 14+ anos de experiência.', nav: ['Sobre', 'Experiência', 'Projetos', 'Blog'], cta: 'Contato', closeMenu: 'Fechar menu', burgerMenu: 'Menu', heroEyebrow: '● Disponível para parcerias técnicas e projetos', heroName: 'Meu nome<br>é Jose<br><span class="stroke-text">Henrique</span>', heroBio: 'Desenvolvedor Java Sênior &amp; Arquiteto Backend com <strong>14+ anos</strong> de experiência construindo microsserviços, plataformas de e-commerce enterprise e sistemas de alta performance para <strong>Vivo / Telefônica Brasil</strong>.', heroBadgesAria: 'Principais tecnologias', heroButtons: ['Ver projetos', 'Falar comigo'], statChipAria: '14 anos de experiência', statChipSub: 'anos de<br>experiência', location: 'São Paulo · BR', stripLabels: ['Anos de experiência', 'Anos na Vivo', 'Empresas', 'Pós-graduações'], aboutLabel: '// 01 — Sobre', aboutTitle: 'Quem <br><span class="stroke-text">sou eu</span>', aboutParagraphs: ['Bacharel em <strong>Sistemas de Informação pela UFLA</strong>, especialista em Arquitetura de Software, e cursando pós-graduação em <strong>Inteligência Artificial pela Anhembi Morumbi</strong>.', 'Atuando como Consultor e Desenvolvedor na <strong>Vivo (Telefônica Brasil)</strong> desde 2019, entrego soluções digitais de alta escala usando SAP Commerce, Kubernetes, Docker e AWS. Yellow Belt em Lean, com profundo domínio em Scrum e Kanban.'], education: [['Bacharelado — Sistemas de Informação', 'UFLA · 2008 – 2012'], ['Especialização — Arquitetura de Software', 'IGTI · 2014 – 2015'], ['Especialização — Inteligência Artificial', 'Anhembi Morumbi · 2025 – 2026 <span class="tag-active">Em curso</span>']], contactMe: 'Entrar em contato', experienceLabel: '// 02 — Carreira', experienceTitle: 'Experiência <span class="stroke-text">Profissional</span>', currentBadge: 'Atual', jobs: [['Consultor &amp; Desenvolvedor', 'Vivo · Telefônica Brasil · São Paulo', 'Ago 2019 – Presente · 6a 8m', 'Desenvolvimento e arquitetura de produtos digitais com SAP Commerce (Hybris), Spring MVC, Node.js, Docker e Kubernetes. Ciclo completo: arquitetura, integrações, desenvolvimento, implantação e evolução contínua. Migração para SAP Cloud.'], ['Líder Técnico &amp; Dev Sênior', 'Equals · Gestão Financeira · Lavras, MG', 'Mai 2017 – Ago 2019 · 2a 4m', 'Liderança de equipe de integrações com meios de pagamento. Arquitetura, desenvolvimento e modelagem de banco de dados Oracle. Suporte interno e externo a parceiros e clientes.'], ['Analista &amp; Desenvolvedor Pleno', 'Equals · Gestão Financeira · São Paulo', 'Set 2014 – Mai 2017 · 2a 9m', 'Análise e desenvolvimento com Java, Spring Framework e Apache Camel. Levantamento de requisitos, treinamentos e modelagem Oracle. Servidor JBoss.'], ['Analista de Sistemas', 'LEMAF · Lab. Manejo Florestal · UFLA', 'Mai 2012 – Ago 2014 · 2a 4m', 'Desenvolvimento de sistemas florestais e ambientais, levantamento de requisitos, modelagem de banco de dados e implantação. Início como estagiário.'], ['Desenvolvedor Full Stack', 'LabGTI · Lavras, MG', 'Abr 2011 – Jan 2012 · 10m', 'Desenvolvimento de sistemas com Java, JavaScript, jQuery e Bootstrap.'], ['Instrutor &amp; WebMaster', 'Lab. Geoprocessamento · UFLA · Lavras', 'Mai 2010 – Jul 2011 · 1a 3m', 'Cursos de geoprocessamento para técnicos e administração de site Joomla.']], stackLabel: '// 03 — Stack', stackTitle: 'Minhas <span class="stroke-text">Tecnologias</span>', stackCats: ['Backend', 'Cloud &amp; DevOps', 'Banco de Dados'], skillLevels: ['Expert', 'Expert', 'Expert', 'Avançado', 'Avançado', 'Expert', 'Avançado', 'Avançado', 'Avançado', 'Avançado', 'Expert', 'Avançado', 'Expert', 'Avançado', 'Expert', 'Avançado', 'Avançado', 'Avançado'], projectLabel: '// 04 — Portfolio', projectTitle: 'Projetos em <span class="stroke-text">Destaque</span>', allProjects: 'Ver todos', projects: [['E-commerce · SAP', 'Plataforma Digital Vivo', 'E-commerce enterprise com SAP Commerce (Hybris), microsserviços, Kubernetes e SAP Cloud. Módulos de checkout, catálogo e APIs críticas de negócio.'], ['Fintech', 'Hub de Pagamentos', 'Hub centralizado para integrações com meios de pagamento. Alta disponibilidade e rastreabilidade de transações.'], ['Ambiental · GIS', 'Gestão Florestal', 'Sistema de monitoramento florestal e ambiental com geoprocessamento para órgãos governamentais.']], blogLabel: '// 05 — Blog', blogTitle: 'Artigos &amp; <span class="stroke-text">Conteúdo</span>', blogPosts: [
          ['Java - Backend', 'Microsservicos com Spring Boot: boas praticas em 2026', 'Como estruturar projetos Spring Boot modernos com resiliencia, observabilidade e performance em Kubernetes.', 'Ler artigo'],
          ['SAP Commerce', 'SAP Commerce Cloud: o que voce precisa saber antes de migrar', 'Guia pratico sobre migracao de Hybris on-premise para SAP Cloud - desafios e estrategias de sucesso.', 'Ler artigo'],
          ['IA - Tecnologia', 'IA no desenvolvimento backend: o futuro ja chegou', 'Como a Inteligencia Artificial esta transformando o desenvolvimento, testes e documentacao em Java.', 'Ler artigo'],
          ['Java - Arquitetura', 'Spring Boot vs Quarkus: qual framework usar em microsservicos?', 'Comparativo pratico entre inicializacao, escala, integracao e cenarios reais para arquitetura backend.', 'Ler artigo'],
          ['IA - Engenharia', 'Como Codex e Claude podem acelerar o desenvolvimento e enxugar times', 'Novos assistentes de codigo reduzem execucao repetitiva e tornam arquitetos e revisores ainda mais centrais.', 'Ler artigo']
        ],
        contactLabel: '// 06 — Contato', contactTitle: 'Vamos<br><span class="stroke-text">Conversar</span>', contactText: 'Aberto a oportunidades, projetos e colaborações. Respondo em até 24h.', contactLocation: 'São Paulo, SP · Brasil', sendMessage: 'Enviar mensagem →', footerEmail: 'Email'
      },
      contact: {
        title: 'Contato — Jose Henrique', description: 'Entre em contato com Jose Henrique Santos Andrade — Desenvolvedor Java Sênior.', nav: ['Sobre', 'Experiência', 'Projetos', 'Blog', 'Contato'], headerMenu: 'Menu principal', socials: 'Redes sociais', homeAria: 'Início', heroLabel: '// 06 — Entre em contato', heroTitle: 'Vamos<br>Con<em>versar</em>', heroSub: 'Aberto a parcerias, projetos e colaborações técnicas. Respondo sempre em até 24 horas.', availTitle: 'Disponível para parcerias técnicas e projetos', availSub: 'São Paulo, SP · Brasil · Remoto ou híbrido', directTitle: 'Contatos diretos', socialTitle: 'Redes sociais', formTitle: 'Envie uma mensagem', formSub: 'Preencha o formulário e recebo direto no meu email. Campos marcados com <span style="color:var(--orange)">*</span> são obrigatórios.', progressAria: 'Progresso do formulário', labels: { name: 'Nome', email: 'Email', phone: 'Telefone / WhatsApp', company: 'Empresa / Organização', subject: 'Assunto', message: 'Mensagem' }, placeholders: { name: 'Seu nome completo', email: 'seu@email.com', phone: '+55 (11) 99999-9999', company: 'Nome da empresa (opcional)', message: 'Descreva sua proposta, projeto ou dúvida em detalhes…' }, subjectOptions: ['Selecione o assunto…', '💼 Oportunidade de trabalho', '🚀 Projeto freelance', '🤝 Parceria técnica', '📋 Consultoria', '💡 Dúvida técnica', '✍️ Colaboração em blog/conteúdo', '💬 Outro'], privacy: 'Ao enviar este formulário, você concorda que suas informações serão usadas para responder sua mensagem. Nenhum dado é compartilhado com terceiros.', submit: 'Enviar mensagem', validation: { nameRequired: 'Nome é obrigatório', emailInvalid: 'Informe um email válido', subjectRequired: 'Selecione um assunto', messageShort: 'Mensagem muito curta (mín. 20 caracteres)', messageRequired: 'Mensagem é obrigatória (mín. 20 caracteres)' }, statuses: { sending: 'Enviando sua mensagem…', success: 'Mensagem enviada com sucesso! Responderei em breve.', fallback: 'Abrindo seu cliente de email com a mensagem pré-preenchida…' }, submitSending: 'Enviando…'
      },
      error404: {
        title: '404 — Página não encontrada · Jose Henrique', socials: 'Redes sociais', homeAria: 'Início', backHome: 'Início', eyebrow: 'Uma pergunta antes de você ir', phrase: 'Você sabe o que<br>está <em>procurando</em>?', phraseSub: 'Às vezes o melhor código ainda não foi escrito.<br>Talvez o que você busca esteja a uma <strong>conversa de distância</strong>.', errTitle: 'Página não encontrada', errDesc: 'A URL que você acessou não existe ou foi removida. Mas você está no lugar certo.', buttons: ['Voltar ao início', 'Enviar mensagem'], quickLinksAria: 'Links rápidos', quickLinks: ['→ Sobre', '→ Experiência', '→ Projetos', '→ Blog', '→ Contato'], contactLabel: '// Vamos conversar', contactTitle: 'Entre em<br><em>Contato</em>', contactDesc: 'Encontrou este erro mas tem algo importante para dizer? Me envie uma mensagem — respondo sempre em até 24h.', formLabels: { name: 'Nome', email: 'Email', subject: 'Assunto', message: 'Mensagem' }, formPlaceholders: { name: 'Seu nome', email: 'seu@email.com', message: 'Descreva sua ideia ou proposta…' }, formOptions: ['Selecione um assunto…', 'Oportunidade de trabalho', 'Projeto freelance', 'Parceria técnica', 'Dúvida técnica', 'Outro'], formErrors: { name: 'Nome é obrigatório', email: 'Email inválido', subject: 'Selecione um assunto', message: 'Mensagem é obrigatória' }, submit: 'Enviar mensagem', sending: 'Enviando…', success: '✓ Mensagem enviada! Responderei em breve.', fallback: 'Abrindo seu cliente de email…'
      }
    }
  };

  const articleContent = {
    en: {
      titleSuffix: ' | Jose Henrique',
      nav: ['About', 'Experience', 'Projects', 'Blog'],
      cta: 'Contact',
      homeAria: 'Home',
      menuAria: 'Menu',
      socialsAria: 'Social media',
      burgerMenu: 'Menu',
      closeMenu: 'Close menu',
      mobileNav: ['About', 'Experience', 'Projects', 'Blog', 'Contact'],
      publishedLabel: 'Published on',
      authorLabel: 'Author',
      aiNotice: 'Text generated by AI and reviewed by a human.',
      backToBlog: 'Back to Blog',
      talkToMe: 'Talk to me',
      footerEmail: 'Email',
      ogLocale: 'en_US',
      posts: {
        'blog-microservicos-spring-boot-2026.html': {
          title: 'Microservices with Spring Boot: best practices in 2026',
          description: 'How to organize architecture, operations, and continuous evolution of cloud microservices with resilience and observability.',
          category: 'Java · Backend',
          subtitle: 'How to organize architecture, operations, and continuous evolution of cloud microservices, focused on resilience, observability, and scale.',
          date: 'March 23, 2026',
          headings: ['Context', 'Practical application', 'Essential best practices', 'Use cases'],
          paragraphs: [
            'In 2026, microservices are not only a technical decision, they are also an organizational one. Teams with short delivery cycles and multiple integrations benefit from independent services with clear ownership and domain boundaries.',
            'With Spring Boot, the gain is productivity with enterprise standards: fast setup, deep Spring ecosystem integration, and a consistent structure for APIs, messaging, security, and telemetry.',
            'A healthy architecture starts with domain design. Before creating services, map business capabilities and responsibilities to avoid services that are too small and create distributed coupling.',
            'In runtime, three pillars sustain operations: observability, fault tolerance, and automation. That includes structured logs, metrics, tracing, circuit breakers, timeout, retry with backoff, and CI/CD with automated tests.',
            'In e-commerce, splitting catalog, checkout, payments, and fraud prevention enables independent scaling in peak periods. In fintech, it helps isolate critical reconciliation and risk flows.',
            'Combined with Kubernetes and platform engineering practices, Spring Boot microservices deliver speed with governance and a better balance between team autonomy and operational consistency.'
          ],
          bullets: [
            'Version contracts and manage compatibility to prevent breaking changes for consumers.',
            'Use one database per service when possible to reduce data coupling.',
            'Standardize telemetry from day one for incident analysis and performance tuning.',
            'Apply defense in depth: strong authentication, scope-based authorization, and secret management.',
            'Avoid long distributed transactions; prefer events and eventual consistency when needed.'
          ]
        },
        'blog-sap-commerce-cloud-migracao.html': {
          title: 'SAP Commerce Cloud: what you need to know before migrating',
          description: 'A direct overview of planning, risks, and execution for migrating from SAP Commerce on-premise to cloud.',
          category: 'SAP Commerce',
          subtitle: 'A direct overview of planning, risks, and execution for migrating Hybris on-premise environments to cloud.',
          date: 'March 23, 2026',
          headings: ['Context', 'How to apply safely', 'Common risks and mitigation', 'Use cases'],
          paragraphs: [
            'Migrating to SAP Commerce Cloud is usually more than changing infrastructure. It impacts delivery flow, legacy integrations, customization governance, and business operations during critical campaign windows.',
            'The main objective is elasticity, standardization, and lower operational burden. Those gains appear when migration is accompanied by architectural review and release discipline.',
            'A solid path starts with technical assessment: custom extensions, critical integrations, data dependencies, and coupling points with ERP, payments, OMS, and antifraud.',
            'Then execute in waves: first stabilize the base with observability and regression tests, then migrate the most sensitive flows such as catalog, pricing, promotions, and checkout with clear rollback criteria.',
            'Companies with multi-channel operations and high promotional volume gain when cloud scaling reduces manual interventions on catalog and checkout.',
            'In organizations with fast roadmaps, SAP Commerce Cloud supports continuous product delivery by reducing platform maintenance effort and letting teams focus on customer experience and revenue growth.'
          ],
          bullets: [
            'Do not underestimate historical customizations; assess cloud fit module by module.',
            'Avoid focusing only on infrastructure; validate end-to-end business journeys before go-live.',
            'Build a data strategy for load, sync, and reconciliation to avoid inconsistencies.',
            'Adopt release governance with pipelines, quality gates, and promotion criteria.',
            'Monitor latency, functional errors, and integration bottlenecks from day one.'
          ]
        },
        'blog-ia-backend-futuro.html': {
          title: 'AI in backend development: the future is already here',
          description: 'Context, practical applications, and use cases of AI in modern backend engineering.',
          category: 'AI · Technology',
          subtitle: 'AI stopped being a distant trend and became part of daily engineering flow, from ideation to production operations.',
          date: 'March 23, 2026',
          headings: ['Context', 'Practical daily applications', 'Best practices for responsible adoption', 'Use cases'],
          paragraphs: [
            'In backend teams, AI already accelerates repetitive tasks, improves code quality, and supports technical decisions based on runtime data. It does not replace engineering, but amplifies team capacity.',
            'Real value comes when AI is integrated across the full lifecycle: API design, testing, log analysis, documentation, and incident support.',
            'During implementation, coding assistants help generate boilerplate, suggest refactors, and speed up proof-of-concepts. In testing, AI suggests edge scenarios and regression cases.',
            'In operations, models can classify log errors, detect latency anomalies, and prioritize alerts by business impact, reducing diagnosis time and improving incident response.',
            'On platform teams, AI accelerates service templates, runbook documentation, and troubleshooting automation. In high-scale products, it helps map error patterns and optimize queries and integrations.',
            'In regulated environments, AI can also support compliance review when workflows include auditing and formal human validation. The near future is not AI or engineering, but stronger engineering with disciplined AI usage.'
          ],
          bullets: [
            'Require mandatory human review for all AI-assisted code.',
            'Treat security and privacy as core requirements.',
            'Measure impact with objective metrics such as lead time and production defects.',
            'Keep prompt and context governance for consistency across teams.',
            'Use AI to augment technical decision-making, not to delegate architecture ownership.'
          ]
        }
,
        'blog-spring-boot-vs-quarkus-microservicos.html': {
          title: 'Spring Boot vs Quarkus for microservices: practical comparison',
          description: 'Practical comparison between Spring Boot and Quarkus in microservice architectures: startup, scaling, integration, and real-world scenarios.',
          category: 'Java ? Architecture',
          subtitle: 'An objective analysis of startup, scaling, integration, and real scenarios to choose the right framework in distributed architectures.',
          date: 'March 30, 2026',
          headings: ['Context', 'Startup and scaling', 'Integration and productivity', 'Real microservices use cases'],
          paragraphs: [
            'Spring Boot and Quarkus are mature options for modern Java backends, but they optimize different priorities. Spring Boot focuses on ecosystem breadth and enterprise productivity, while Quarkus emphasizes cloud-native efficiency.',
            'In microservices, this should be a contextual technical decision. Team expertise, traffic profile, operational budget, and observability requirements matter more than trends.',
            'For startup time, Quarkus often performs better, especially with native builds. This is useful for aggressive autoscaling, event-driven workers, or scale-to-zero strategies.',
            'Spring Boot remains highly competitive for long-running and high-throughput transactional services. With proper JVM tuning, it scales predictably on Kubernetes.',
            'In large enterprises with many legacy integrations, Spring Boot usually reduces delivery friction because of established patterns and broader library support.',
            'In high-density service platforms, Quarkus can improve resource efficiency. Many companies adopt a hybrid approach based on domain criticality and workload profile.'
          ],
          bullets: [
            'Compare cold start and memory usage with production-like benchmarks.',
            'Evaluate integration effort with security, data, messaging, and observability stacks.',
            'Account for team maturity and existing platform standards.',
            'Measure total cost of ownership, not only raw startup metrics.',
            'Use consistent governance for contracts, tests, and telemetry regardless of framework.'
          ]
        },
        'blog-ia-codex-claude-equipes-software.html': {
          title: 'How Codex and Claude can accelerate development and shrink software teams',
          description: 'How the latest coding assistants accelerate delivery, change team composition, and strengthen the role of architects and reviewers.',
          category: 'AI - Engineering',
          subtitle: 'The newest coding assistants shift work distribution: less manual execution, more architecture, review, and governance.',
          date: 'April 15, 2026',
          headings: ['Context', 'Where speed gains appear', 'What changes in team composition', 'Limits and governance'],
          paragraphs: [
            'The latest generations of coding assistants such as Codex and Claude are no longer limited to autocomplete. They now help navigate large codebases, propose refactors, write tests, summarize technical context, and speed up investigations that used to consume many engineering hours.',
            'When used with enough context, these tools move the bottleneck in software delivery: less time spent on mechanical execution and more time spent on decision-making, architecture, review, and business-impact validation.',
            'In practice, the biggest gains appear in high-volume and low-ambiguity tasks: boilerplate generation, regression tests, technical scaffolding, impact mapping, and operational documentation. That shortens the time between understanding a problem and delivering a first working version.',
            'They also accelerate migrations, service standardization, log analysis, and technical spikes. Work that previously required several developers executing repetitive steps can now be driven by a smaller team supported by AI and strong supervision.',
            'This does not mean engineering disappears. Critical systems, complex business rules, security, and regulatory contexts still depend on human judgment to decide what to build, what not to automate, and how to absorb failure before production.',
            'The most efficient setup is not a company without developers, but a leaner and more senior structure: architects defining direction, reviewers protecting quality, and AI absorbing much of the repetitive implementation workload.'
          ],
          bullets: [
            'Architects become more important because they define boundaries, contracts, trade-offs, and quality criteria for AI-assisted execution.',
            'Technical reviewers become the main filter for security, consistency, performance, and domain alignment.',
            'Smaller teams can deliver more in predictable work such as maintenance, integration, and incremental evolution.',
            'Implementation roles shift from manual execution toward context operation, curation, and output verification.',
            'Critical products still require strong human ownership; AI reduces effort, but it does not carry responsibility.'
          ]
        }
      }
    },
    es: {
      titleSuffix: ' | Jose Henrique',
      nav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Blog'],
      cta: 'Contacto',
      homeAria: 'Inicio',
      menuAria: 'Menú',
      socialsAria: 'Redes sociales',
      burgerMenu: 'Menú',
      closeMenu: 'Cerrar menú',
      mobileNav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Blog', 'Contacto'],
      publishedLabel: 'Publicado el',
      authorLabel: 'Autor',
      aiNotice: 'Texto generado por IA y revisado por un humano.',
      backToBlog: 'Volver al Blog',
      talkToMe: 'Hablar conmigo',
      footerEmail: 'Email',
      ogLocale: 'es_ES',
      posts: {
        'blog-microservicos-spring-boot-2026.html': {
          title: 'Microservicios con Spring Boot: buenas prácticas en 2026',
          description: 'Cómo organizar arquitectura, operación y evolución continua de microservicios cloud con resiliencia y observabilidad.',
          category: 'Java · Backend',
          subtitle: 'Cómo organizar arquitectura, operación y evolución continua de microservicios en la nube, con foco en resiliencia, observabilidad y escala.',
          date: '23 de marzo de 2026',
          headings: ['Contexto', 'Aplicación práctica', 'Buenas prácticas esenciales', 'Casos de uso'],
          paragraphs: [
            'En 2026, los microservicios ya no son solo una decisión técnica, también son una decisión de organización. Equipos con ciclos cortos y múltiples integraciones se benefician de servicios independientes con ownership claro.',
            'Con Spring Boot, la ventaja es productividad con estándar enterprise: arranque rápido, integración con el ecosistema Spring y estructura consistente para APIs, mensajería, seguridad y telemetría.',
            'Una arquitectura saludable comienza por el diseño de dominio. Antes de crear servicios, conviene mapear capacidades de negocio para evitar servicios demasiado pequeños y acoplamiento distribuido.',
            'En operación, tres pilares sostienen el sistema: observabilidad, tolerancia a fallos y automatización. Eso incluye logs estructurados, métricas, tracing, circuit breaker, timeout, retry y CI/CD con pruebas.',
            'En e-commerce, separar catálogo, checkout, pagos y antifraude permite escalar cada flujo de forma independiente en picos de demanda. En fintech, ayuda a aislar flujos críticos de conciliación y riesgo.',
            'Combinados con Kubernetes y prácticas de plataforma, los microservicios con Spring Boot entregan velocidad con gobernanza y equilibrio entre autonomía del equipo y consistencia operativa.'
          ],
          bullets: [
            'Versionar contratos y gobernar compatibilidad para evitar quiebres entre consumidores.',
            'Usar base de datos por servicio cuando sea posible para reducir acoplamiento de datos.',
            'Estandarizar telemetría desde el inicio para facilitar incidentes y tuning.',
            'Aplicar seguridad en profundidad: autenticación fuerte, autorización por alcance y gestión de secretos.',
            'Evitar transacciones distribuidas largas; preferir eventos y consistencia eventual.'
          ]
        },
        'blog-sap-commerce-cloud-migracao.html': {
          title: 'SAP Commerce Cloud: lo que debes saber antes de migrar',
          description: 'Panorama directo sobre planificación, riesgos y ejecución para migrar de SAP Commerce on-premise a cloud.',
          category: 'SAP Commerce',
          subtitle: 'Un panorama directo sobre planificación, riesgos y ejecución de la migración de entornos Hybris on-premise a cloud.',
          date: '23 de marzo de 2026',
          headings: ['Contexto', 'Cómo aplicar con seguridad', 'Riesgos comunes y mitigación', 'Casos de uso'],
          paragraphs: [
            'Migrar a SAP Commerce Cloud normalmente no es solo cambiar infraestructura. En la práctica afecta flujo de entrega, integración con sistemas legados y operación del negocio en ventanas críticas.',
            'El objetivo principal es ganar elasticidad, estandarización y menor esfuerzo operativo de base. Esos beneficios aparecen cuando la migración viene con revisión arquitectónica y disciplina de releases.',
            'Un camino sólido comienza con assessment técnico: extensiones custom, integraciones críticas, dependencias de datos y puntos de acoplamiento con ERP, pagos, OMS y antifraude.',
            'Después, trabajar en olas: primero una base estable con observabilidad y pruebas de regresión, luego migrar flujos sensibles como catálogo, precios, promociones y checkout con rollback claro.',
            'Empresas con múltiples canales y alto volumen promocional ganan cuando cloud permite escalar catálogo y checkout sin intervención manual.',
            'En organizaciones con roadmap acelerado, SAP Commerce Cloud facilita producto continuo: menos energía en mantenimiento base y más foco en experiencia de compra y crecimiento.'
          ],
          bullets: [
            'No subestimar customizaciones históricas; evaluar módulo por módulo.',
            'No enfocarse solo en infraestructura; validar journeys de negocio end-to-end.',
            'Definir estrategia de datos para carga, sincronización y reconciliación.',
            'Adoptar gobernanza de release con pipelines, quality gates y criterios de promoción.',
            'Monitorear latencia, errores funcionales y cuellos de integración desde el inicio.'
          ]
        },
        'blog-ia-backend-futuro.html': {
          title: 'IA en desarrollo backend: el futuro ya llegó',
          description: 'Contexto, aplicaciones prácticas y casos de uso de IA en ingeniería backend moderna.',
          category: 'IA · Tecnología',
          subtitle: 'La IA dejó de ser una tendencia lejana y pasó a formar parte del flujo diario de ingeniería, desde la ideación hasta la operación en producción.',
          date: '23 de marzo de 2026',
          headings: ['Contexto', 'Aplicaciones prácticas del día a día', 'Buenas prácticas para una adopción responsable', 'Casos de uso'],
          paragraphs: [
            'En backend, la IA ya se usa para acelerar tareas repetitivas, mejorar calidad de código y apoyar decisiones técnicas basadas en datos de ejecución. No reemplaza ingeniería, amplía su capacidad.',
            'El valor real aparece cuando la IA se integra al ciclo completo: diseño de APIs, pruebas, análisis de logs, documentación y soporte a incidentes.',
            'En implementación, asistentes de código ayudan con boilerplate, refactors y pruebas de concepto. En testing, pueden sugerir escenarios de borde y casos de regresión.',
            'En operación, modelos ayudan a clasificar errores en logs, detectar anomalías de latencia y priorizar alertas por impacto de negocio.',
            'En equipos de plataforma, la IA acelera templates de servicio, runbooks y automatización de troubleshooting. En productos de escala, ayuda a optimizar queries e integraciones.',
            'En entornos regulados también puede apoyar conformidad, siempre con auditoría y validación humana formal. El futuro cercano no es IA o ingeniería, sino mejor ingeniería con IA integrada.'
          ],
          bullets: [
            'Definir revisión humana obligatoria para todo código asistido por IA.',
            'Tratar seguridad y privacidad como requisitos centrales.',
            'Medir impacto con métricas objetivas como lead time y defectos en producción.',
            'Mantener gobernanza de prompts y contexto técnico.',
            'Usar IA para potenciar decisiones técnicas, no para delegar responsabilidad arquitectónica.'
          ]
        }
,
        'blog-spring-boot-vs-quarkus-microservicos.html': {
          title: 'Spring Boot vs Quarkus en microservicios: comparacion practica',
          description: 'Comparacion practica entre Spring Boot y Quarkus en arquitecturas de microservicios: inicio, escala, integracion y casos reales.',
          category: 'Java - Arquitectura',
          subtitle: 'Un analisis objetivo sobre inicio, escala, integracion y escenarios reales para elegir el framework correcto.',
          date: '30 de marzo de 2026',
          headings: ['Contexto', 'Inicializacion y escala', 'Integracion y productividad', 'Casos reales en microservicios'],
          paragraphs: [
            'Spring Boot y Quarkus son opciones maduras para backend Java moderno, pero priorizan objetivos distintos. Spring Boot destaca por ecosistema y productividad enterprise, mientras Quarkus prioriza eficiencia cloud-native.',
            'En microservicios, la eleccion debe considerar perfil de carga, presupuesto operativo, experiencia del equipo y estrategia de evolucion de plataforma.',
            'En tiempo de arranque, Quarkus suele sobresalir, especialmente con nativo, favoreciendo escenarios con autoescalado agresivo y servicios efimeros.',
            'Spring Boot mantiene excelente consistencia en servicios transaccionales de larga ejecucion, con buen comportamiento en Kubernetes cuando hay tuning adecuado.',
            'En entornos corporativos con mucho legado, Spring Boot normalmente reduce friccion de entrega por su ecosistema consolidado.',
            'En plataformas de alta densidad, Quarkus puede mejorar eficiencia de recursos. Muchas empresas adoptan estrategia hibrida segun dominio de negocio y perfil de carga.'
          ],
          bullets: [
            'Comparar cold start y memoria con benchmarks cercanos a produccion.',
            'Evaluar esfuerzo de integracion con seguridad, datos, mensajeria y observabilidad.',
            'Considerar madurez del equipo y estandares existentes.',
            'Medir costo total de operacion, no solo metricas aisladas.',
            'Mantener gobernanza consistente de contratos, pruebas y telemetria en ambos frameworks.'
          ]
        },
        'blog-ia-codex-claude-equipes-software.html': {
          title: 'Como Codex y Claude pueden acelerar el desarrollo y reducir equipos de software',
          description: 'Como los nuevos asistentes de codigo aceleran la entrega, cambian la composicion del equipo y refuerzan el papel de arquitectos y revisores.',
          category: 'IA - Ingenieria',
          subtitle: 'Los nuevos asistentes de codigo cambian la distribucion del trabajo: menos ejecucion manual, mas arquitectura, revision y gobernanza.',
          date: '15 de abril de 2026',
          headings: ['Contexto', 'Donde aparecen las ganancias de velocidad', 'Que cambia en la composicion de los equipos', 'Limites y gobernanza'],
          paragraphs: [
            'Las nuevas versiones de asistentes de codigo como Codex y Claude dejaron de ser simples copilotos de autocompletado. Hoy ayudan a navegar bases grandes, proponer refactors, escribir pruebas, resumir contexto tecnico y acelerar investigaciones que antes consumian muchas horas del equipo.',
            'Cuando se usan con suficiente contexto, estas herramientas mueven el cuello de botella de la entrega: menos tiempo en ejecucion mecanica y mas tiempo en decision, arquitectura, revision y validacion de impacto real en el negocio.',
            'En la practica, la mayor aceleracion aparece en tareas de alto volumen y baja ambiguedad: boilerplate, pruebas de regresion, esqueletos tecnicos, mapeo de impacto y documentacion operativa. Eso reduce el tiempo entre entender un problema y entregar una primera version funcional.',
            'Tambien aceleran migraciones, estandarizacion entre servicios, analisis de logs y spikes tecnicos. Trabajo que antes exigia varios desarrolladores ejecutando pasos repetitivos ahora puede ser conducido por un equipo menor apoyado por IA y supervision fuerte.',
            'Eso no significa que la ingenieria desaparezca. Sistemas criticos, reglas complejas, seguridad y contextos regulatorios siguen dependiendo de criterio humano para decidir que construir, que no automatizar y como absorber errores antes de produccion.',
            'El escenario mas eficiente no es una empresa sin desarrolladores, sino una estructura mas pequena y mas senior: arquitectos definiendo direccion, revisores protegiendo la calidad y la IA absorbiendo buena parte de la implementacion repetitiva.'
          ],
          bullets: [
            'Los arquitectos ganan peso porque definen limites, contratos, trade-offs y criterios de calidad para la ejecucion asistida por IA.',
            'Los revisores tecnicos se vuelven el filtro principal para seguridad, consistencia, performance y alineacion con el dominio.',
            'Equipos menores pueden entregar mas en frentes previsibles como mantenimiento, integracion y evolucion incremental.',
            'Los roles de implementacion migran de la ejecucion manual hacia operacion de contexto, curaduria y verificacion de salida.',
            'Los productos criticos siguen necesitando ownership humano fuerte; la IA reduce esfuerzo, pero no asume responsabilidad.'
          ]
        }
      }
    },
    pt: {
      titleSuffix: ' | Jose Henrique',
      nav: ['Sobre', 'Experiência', 'Projetos', 'Blog'],
      cta: 'Contato',
      homeAria: 'Início',
      menuAria: 'Menu',
      socialsAria: 'Redes sociais',
      burgerMenu: 'Menu',
      closeMenu: 'Fechar menu',
      mobileNav: ['Sobre', 'Experiência', 'Projetos', 'Blog', 'Contato'],
      publishedLabel: 'Publicado em',
      authorLabel: 'Autor',
      aiNotice: 'Texto gerado por IA e revisado por um humano.',
      backToBlog: 'Voltar para o Blog',
      talkToMe: 'Falar comigo',
      footerEmail: 'Email',
      ogLocale: 'pt_BR',
      posts: {
        'blog-microservicos-spring-boot-2026.html': {
          title: 'Microsserviços com Spring Boot: boas práticas em 2026',
          description: 'Como organizar arquitetura, operação e evolução contínua de microsserviços em cloud com resiliência e observabilidade.',
          category: 'Java · Backend',
          subtitle: 'Como organizar arquitetura, operação e evolução contínua de microsserviços em ambientes cloud, com foco em resiliência, observabilidade e escala.',
          date: '23 de março de 2026',
          headings: ['Contexto', 'Aplicação prática', 'Boas práticas essenciais', 'Casos de uso'],
          paragraphs: [
            'Em 2026, microsserviços já não são apenas uma decisão técnica: são também uma decisão de organização. Times com ciclos curtos e múltiplas integrações se beneficiam de serviços independentes e ownership claro.',
            'Com Spring Boot, o ganho é produtividade com padrão corporativo: inicialização rápida, integração com o ecossistema Spring e estrutura consistente para APIs, mensageria, segurança e telemetria.',
            'Uma arquitetura saudável começa pelo desenho de domínio. Antes de criar serviços, vale mapear capacidades de negócio e responsabilidades para evitar microserviços pequenos demais.',
            'No runtime, três pilares sustentam a operação: observabilidade, tolerância a falhas e automação. Isso inclui logs estruturados, métricas, tracing, circuit breaker, timeout, retry e CI/CD com testes.',
            'No e-commerce, separar catálogo, checkout, pagamento e antifraude permite escalar cada fluxo de forma independente em picos de demanda. Em fintech, ajuda a isolar trilhas críticas de conciliação e risco.',
            'Com Kubernetes e boas práticas de plataforma, microsserviços com Spring Boot entregam velocidade com governança e melhor equilíbrio entre autonomia dos times e consistência operacional.'
          ],
          bullets: [
            'Modelar contratos versionados e governar compatibilidade entre consumidores.',
            'Usar banco por serviço quando possível para reduzir acoplamento de dados.',
            'Padronizar telemetria desde o primeiro dia para facilitar incidentes e tuning.',
            'Aplicar segurança em profundidade: autenticação forte, autorização por escopo e gestão de segredos.',
            'Evitar transações distribuídas longas; preferir eventos e consistência eventual.'
          ]
        },
        'blog-sap-commerce-cloud-migracao.html': {
          title: 'SAP Commerce Cloud: o que você precisa saber antes de migrar',
          description: 'Panorama direto sobre planejamento, riscos e execução da migração de SAP Commerce on-premise para cloud.',
          category: 'SAP Commerce',
          subtitle: 'Um panorama direto sobre planejamento, riscos e execução da migração de ambientes Hybris on-premise para cloud.',
          date: '23 de março de 2026',
          headings: ['Contexto', 'Como aplicar com segurança', 'Riscos comuns e mitigação', 'Casos de uso'],
          paragraphs: [
            'Migrar para SAP Commerce Cloud normalmente não é apenas trocar infraestrutura. Na prática, a mudança impacta ciclo de entrega, integração com legados e operação do negócio em janelas críticas.',
            'O objetivo principal é ganhar elasticidade, padronização e menor esforço operacional de base. Esses ganhos aparecem quando a migração vem com revisão arquitetural e disciplina de release.',
            'Um caminho sólido começa por assessment técnico: extensões customizadas, integrações críticas, dependências de dados e pontos de acoplamento com ERP, pagamentos, OMS e antifraude.',
            'Depois, vale trabalhar em ondas: primeiro uma base estável com observabilidade e testes de regressão. Em seguida, migrar fluxos sensíveis como catálogo, preços, promoções e checkout com rollback claro.',
            'Empresas com múltiplos canais e alto volume promocional ganham quando a cloud permite escalar catálogo e checkout sem intervenção manual.',
            'Em organizações com roadmap acelerado, SAP Commerce Cloud facilita produto contínuo: menos esforço com manutenção da base e mais foco em experiência de compra e crescimento.'
          ],
          bullets: [
            'Não subestimar customizações históricas; avaliar módulo por módulo.',
            'Evitar foco exclusivo em infraestrutura; validar jornadas ponta a ponta antes do go-live.',
            'Planejar carga, sincronização e reconciliação de dados para evitar inconsistências.',
            'Adotar governança de release com pipelines, quality gates e critérios de promoção.',
            'Monitorar latência, erro funcional e gargalos de integração desde o início.'
          ]
        },
        'blog-ia-backend-futuro.html': {
          title: 'IA no desenvolvimento backend: o futuro já chegou',
          description: 'Contexto, aplicações práticas e casos de uso de IA no desenvolvimento backend moderno.',
          category: 'IA · Tecnologia',
          subtitle: 'A IA deixou de ser tendência distante e virou parte do fluxo diário de engenharia, da ideação até a operação em produção.',
          date: '23 de março de 2026',
          headings: ['Contexto', 'Aplicações práticas no dia a dia', 'Boas práticas para adoção responsável', 'Casos de uso'],
          paragraphs: [
            'No backend, IA já é usada para acelerar tarefas repetitivas, melhorar qualidade de código e apoiar decisões técnicas baseadas em dados de execução. Não substitui engenharia, mas amplia a capacidade do time.',
            'Hoje, o valor real aparece quando a IA é incorporada ao ciclo completo: design de APIs, testes, análise de logs, documentação e suporte a incidentes.',
            'Na implementação, assistentes de código ajudam a gerar boilerplate, sugerir refactors e acelerar provas de conceito. Em testes, podem sugerir cenários de borda e regressão.',
            'Na operação, modelos ajudam a classificar erros em logs, detectar anomalias de latência e priorizar alertas por impacto de negócio.',
            'Em times de plataforma, IA acelera templates de serviço, runbooks e automação de troubleshooting. Em produtos de escala, ajuda a mapear padrões de erro e otimizar queries e integrações.',
            'Em ambientes regulados, também pode apoiar conformidade, desde que os fluxos tenham auditoria e validação humana formal. O futuro próximo não é IA ou engenharia, é engenharia melhor com IA integrada.'
          ],
          bullets: [
            'Definir revisão humana obrigatória para todo código gerado com apoio de IA.',
            'Tratar segurança e privacidade como requisitos centrais.',
            'Medir impacto com métricas objetivas como lead time e defeitos em produção.',
            'Manter governança de prompts e contexto técnico para consistência entre times.',
            'Usar IA para potencializar decisão técnica, não para terceirizar responsabilidade arquitetural.'
          ]
        }
,
        'blog-spring-boot-vs-quarkus-microservicos.html': {
          title: 'Spring Boot vs Quarkus em microsservicos: comparacao pratica',
          description: 'Comparativo pratico entre Spring Boot e Quarkus em arquiteturas de microsservicos: inicializacao, escala, integracao e casos reais.',
          category: 'Java - Arquitetura',
          subtitle: 'Uma analise objetiva sobre inicializacao, escala, integracao e cenarios reais para escolher o framework certo em arquiteturas distribuidas.',
          date: '30 de marco de 2026',
          headings: ['Contexto', 'Inicializacao e escala', 'Integracao e produtividade', 'Casos reais em microsservicos'],
          paragraphs: [
            'Spring Boot e Quarkus sao opcoes maduras para backend Java moderno, mas com propostas diferentes. Spring Boot prioriza ecossistema amplo e produtividade enterprise, enquanto Quarkus foca em eficiencia cloud-native.',
            'Em microsservicos, a escolha precisa considerar perfil de carga, custo operacional, experiencia do time e requisitos de observabilidade.',
            'No tempo de inicializacao, Quarkus costuma se destacar, principalmente com build nativo, favorecendo cenarios com auto-scaling agressivo e workloads efemeros.',
            'Spring Boot segue muito forte em servicos transacionais de longa duracao, com escala previsivel em Kubernetes quando existe tuning adequado.',
            'Em ambientes corporativos com muitos legados e integracoes complexas, Spring Boot geralmente acelera entrega por causa da maturidade do ecossistema.',
            'Em plataformas com alta densidade de servicos, Quarkus pode reduzir custo de infraestrutura. Muitas empresas adotam estrategia hibrida, combinando os dois frameworks por dominio.'
          ],
          bullets: [
            'Comparar cold start e consumo de memoria com benchmark proximo da producao.',
            'Avaliar esforco de integracao com seguranca, dados, mensageria e observabilidade.',
            'Considerar maturidade do time e padroes da plataforma existente.',
            'Medir custo total de operacao, nao apenas metricas isoladas de startup.',
            'Manter governanca consistente de contratos, testes e telemetria independentemente do framework.'
          ]
        },
        'blog-ia-codex-claude-equipes-software.html': {
          title: 'Como Codex e Claude podem acelerar o desenvolvimento e enxugar times',
          description: 'Como os novos assistentes de codigo aceleram entrega, mudam a composicao dos times e reforcam o papel de arquitetos e revisores.',
          category: 'IA - Engenharia',
          subtitle: 'As novas geracoes de assistentes de codigo mudam a distribuicao do trabalho: menos execucao manual, mais arquitetura, revisao e governanca.',
          date: '15 de abril de 2026',
          headings: ['Contexto', 'Onde ganham velocidade', 'O que muda na composicao dos times', 'Limites e governanca'],
          paragraphs: [
            'As novas versoes de assistentes de codigo como Codex e Claude deixaram de ser apenas copilotos de autocomplete. Hoje ajudam a navegar bases grandes, propor refactors, escrever testes, resumir contexto tecnico e acelerar investigacoes que antes consumiam horas de engenharia.',
            'Quando usadas com contexto suficiente, essas ferramentas deslocam o gargalo da entrega: menos tempo em execucao mecanica e mais tempo em decisao, arquitetura, revisao e validacao de impacto real no negocio.',
            'Na pratica, o maior ganho aparece em tarefas de alto volume e baixa ambiguidade: boilerplate, testes de regressao, esqueleto tecnico, mapeamento de impacto e documentacao operacional. Isso encurta o tempo entre entender um problema e entregar a primeira versao funcional.',
            'Tambem existe aceleracao forte em migracoes, padronizacao entre servicos, analise de logs e spikes tecnicos. O que antes exigia varios desenvolvedores executando etapas repetitivas pode ser conduzido por uma equipe menor apoiada por IA e supervisao forte.',
            'Isso nao significa que a engenharia desaparece. Sistemas criticos, regra de negocio complexa, seguranca e contexto regulatorio continuam dependendo de criterio humano para decidir o que construir, o que nao automatizar e como absorver erros antes da producao.',
            'O cenario mais eficiente nao e uma empresa sem desenvolvedores, e sim uma estrutura mais enxuta e mais senior: arquitetos definindo direcao, revisores protegendo a qualidade e IA absorvendo boa parte da implementacao repetitiva.'
          ],
          bullets: [
            'Arquitetos ganham mais peso ao definir limites, contratos, trade-offs e criterios de qualidade para a execucao assistida por IA.',
            'Revisores tecnicos tornam-se o filtro principal para seguranca, consistencia, performance e aderencia ao dominio.',
            'Times menores podem entregar mais em frentes previsiveis como manutencao, integracao e evolucao incremental.',
            'O papel de implementacao migra da execucao manual para operacao de contexto, curadoria e verificacao de saida.',
            'Produtos criticos continuam exigindo ownership humano forte; a IA reduz esforco, mas nao assume responsabilidade.'
          ]
        }
      }
    }
  };

  function currentArticleSlug() {
    const path = window.location.pathname;
    if (!path) return '';
    const chunks = path.split('/');
    return chunks[chunks.length - 1];
  }

  function getLanguage() {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : FALLBACK;
  }

  function setLanguage(lang) {
    const safeLang = SUPPORTED.includes(lang) ? lang : FALLBACK;
    window.localStorage.setItem(STORAGE_KEY, safeLang);
    applyLanguage(safeLang);
    listeners.forEach((listener) => listener(safeLang));
  }

  function text(selector, value) {
    const el = document.querySelector(selector);
    if (el && value != null) el.textContent = value;
  }

  function sanitizeHtml(value) {
    const template = document.createElement('template');
    template.innerHTML = String(value ?? '');

    const sanitizeNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return document.createTextNode(node.textContent || '');
      }

      if (node.nodeType !== Node.ELEMENT_NODE) {
        return document.createTextNode('');
      }

      const tag = node.tagName.toLowerCase();
      if (!ALLOWED_HTML_TAGS.has(tag)) {
        return document.createTextNode(node.textContent || '');
      }

      const clean = document.createElement(tag);
      if (tag === 'span') {
        const classes = (node.getAttribute('class') || '')
          .split(/\s+/)
          .filter((className) => ALLOWED_SPAN_CLASSES.has(className));
        if (classes.length) clean.className = classes.join(' ');

        if (node.getAttribute('aria-hidden') === 'true') {
          clean.setAttribute('aria-hidden', 'true');
        }

        const styleValue = (node.getAttribute('style') || '').replace(/\s+/g, '');
        if (styleValue === ALLOWED_INLINE_STYLE.replace(/\s+/g, '')) {
          clean.setAttribute('style', ALLOWED_INLINE_STYLE);
        }
      }

      node.childNodes.forEach((child) => clean.appendChild(sanitizeNode(child)));
      return clean;
    };

    const fragment = document.createDocumentFragment();
    template.content.childNodes.forEach((node) => fragment.appendChild(sanitizeNode(node)));
    return fragment;
  }

  function htmlSet(selector, value) {
    const el = document.querySelector(selector);
    if (el && value != null) {
      el.replaceChildren(sanitizeHtml(value));
    }
  }

  function attr(selector, name, value) {
    const el = document.querySelector(selector);
    if (el && value != null) el.setAttribute(name, value);
  }


  function keepIconText(selector, value) {
    const el = document.querySelector(selector);
    if (!el || value == null) return;
    const icon = el.querySelector('svg');
    el.replaceChildren();
    if (icon) el.appendChild(icon.cloneNode(true));
    el.appendChild(document.createTextNode(` ${value}`));
  }

  function keepArrowValue(selector, value) {
    const el = document.querySelector(selector);
    if (!el || value == null) return;
    const icon = el.querySelector('svg');
    el.replaceChildren();
    el.appendChild(document.createTextNode(value));
    if (icon) {
      el.appendChild(document.createTextNode(' '));
      el.appendChild(icon.cloneNode(true));
    }
  }

  function list(selector, values, mode = 'text') {
    if (!Array.isArray(values)) return;
    document.querySelectorAll(selector).forEach((el, index) => {
      const value = values[index];
      if (value == null) return;
      if (mode === 'html') el.replaceChildren(sanitizeHtml(value));
      else el.textContent = value;
    });
  }

  function updateSwitcher(lang) {
    document.querySelectorAll('.lang-switcher').forEach((switcher) => {
      switcher.setAttribute('aria-label', dict[lang].ui.langLabel);
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
      const label = dict[lang].ui.languages[btn.dataset.lang];
      btn.setAttribute('title', label);
      btn.setAttribute('aria-label', label);
    });
  }

  function applyHome(lang) {
    const t = dict[lang].home;
    document.title = t.title;
    attr('meta[name="description"]', 'content', t.description);
    attr('#nav .logo', 'aria-label', 'Home');
    attr('#nav nav', 'aria-label', 'Menu');
    attr('#nav .nav-socials', 'aria-label', 'Social media');
    list('.nav-links a', t.nav);
    keepArrowValue('.nav-cta', t.cta);
    attr('#burger', 'aria-label', t.burgerMenu);
    attr('#mobClose', 'aria-label', t.closeMenu);
    list('.mob-link', [...t.nav, t.cta]);
    text('#hero .hero-eyebrow', t.heroEyebrow);
    htmlSet('#hero .hero-name', t.heroName);
    htmlSet('#hero .hero-bio', t.heroBio);
    attr('#hero .badges', 'aria-label', t.heroBadgesAria);
    list('#hero .hero-btns a', t.heroButtons);
    attr('#hero .stat-chip', 'aria-label', t.statChipAria);
    htmlSet('#hero .stat-chip .stat-sub', t.statChipSub);
    text('#hero .loc-chip', t.location);
    list('#hero .strip-label', t.stripLabels);
    text('#sobre .section-label', t.aboutLabel);
    htmlSet('#sobre .big-title', t.aboutTitle);
    list('#sobre .sobre-body > p', t.aboutParagraphs, 'html');
    document.querySelectorAll('#sobre .edu-card').forEach((card, index) => {
      const entry = t.education[index];
      if (!entry) return;
      const [titleValue, subtitleValue] = entry;
      const strong = card.querySelector('strong');
      const span = card.querySelector('span');
      if (strong) strong.replaceChildren(sanitizeHtml(titleValue));
      if (span) span.replaceChildren(sanitizeHtml(subtitleValue));
    });
    text('#sobre .btn-fill', t.contactMe);
    text('#experiencia .section-label', t.experienceLabel);
    htmlSet('#experiencia .big-title', t.experienceTitle);
    text('#experiencia .exp-badge-active', t.currentBadge);
    document.querySelectorAll('#experiencia .exp-card').forEach((card, index) => {
      const job = t.jobs[index];
      if (!job) return;
      const [role, company, timeValue, desc] = job;
      const h3 = card.querySelector('h3');
      const companyEl = card.querySelector('.exp-company');
      const timeEl = card.querySelector('.exp-time');
      const descEl = card.querySelector('.exp-desc');
      if (h3) h3.replaceChildren(sanitizeHtml(role));
      if (companyEl) companyEl.textContent = company;
      if (timeEl) timeEl.textContent = timeValue;
      if (descEl) descEl.textContent = desc;
    });
    text('#stack .section-label', t.stackLabel);
    htmlSet('#stack .big-title', t.stackTitle);
    list('#stack .stack-cat', t.stackCats);
    list('#stack .si-lvl', t.skillLevels);
    text('#projetos .section-label', t.projectLabel);
    htmlSet('#projetos .big-title', t.projectTitle);
    text('#projetos .proj-head .btn-ghost', t.allProjects);
    document.querySelectorAll('#projetos .proj-card').forEach((card, index) => {
      const project = t.projects[index];
      if (!project) return;
      const [tag, titleValue, desc] = project;
      text(`#projetos .proj-card:nth-of-type(${index + 1}) .proj-tag`, tag);
      text(`#projetos .proj-card:nth-of-type(${index + 1}) h3`, titleValue);
      text(`#projetos .proj-card:nth-of-type(${index + 1}) p`, desc);
    });
    text('#blog .section-label', t.blogLabel);
    htmlSet('#blog .big-title', t.blogTitle);
    document.querySelectorAll('#blog .blog-card').forEach((card, index) => {
      const post = t.blogPosts[index];
      if (!post) return;
      const [cat, titleValue, desc, link] = post;
      const catEl = card.querySelector('.blog-cat');
      const titleEl = card.querySelector('h3');
      const descEl = card.querySelector('p');
      const linkEl = card.querySelector('.blog-link');
      if (catEl) catEl.textContent = cat;
      if (titleEl) titleEl.textContent = titleValue;
      if (descEl) descEl.textContent = desc;
      if (linkEl) {
        const icon = linkEl.querySelector('svg');
        linkEl.replaceChildren();
        linkEl.appendChild(document.createTextNode(link));
        if (icon) {
          linkEl.appendChild(document.createTextNode(' '));
          linkEl.appendChild(icon.cloneNode(true));
        }
      }
    });
    text('#contato .section-label', t.contactLabel);
    htmlSet('#contato .big-title', t.contactTitle);
    text('#contato .contact-left > p:not(.contact-loc)', t.contactText);
    const contactLoc = document.querySelector('#contato .contact-loc');
    if (contactLoc) {
      const icon = contactLoc.querySelector('svg');
      contactLoc.replaceChildren();
      if (icon) contactLoc.appendChild(icon.cloneNode(true));
      contactLoc.appendChild(document.createTextNode(t.contactLocation));
    }
    keepArrowValue('#contato .contact-right .btn-fill', t.sendMessage);
    text('footer .footer-links > a:first-child', t.footerEmail);
  }

  function applyContact(lang) {
    const t = dict[lang].contact;
    document.title = t.title;
    attr('meta[name="description"]', 'content', t.description);
    attr('header .logo', 'aria-label', t.homeAria);
    attr('header .header-center', 'aria-label', t.headerMenu);
    attr('header .socials', 'aria-label', t.socials);
    list('header .header-center a', t.nav);
    text('.ph-label', t.heroLabel);
    htmlSet('.ph-title', t.heroTitle);
    text('.ph-sub', t.heroSub);
    text('.avail-text strong', t.availTitle);
    text('.avail-text span', t.availSub);
    text('.info-card:nth-of-type(2) .ic-title', t.directTitle);
    text('.info-card:nth-of-type(3) .ic-title', t.socialTitle);
    text('.fp-title', t.formTitle);
    htmlSet('.fp-sub', t.formSub);
    attr('#formProgress', 'aria-label', t.progressAria);
    const labels = t.labels;
    const placeholders = t.placeholders;
    htmlSet('label[for="f-name"]', `${labels.name} <span class="req" aria-hidden="true">*</span>`);
    htmlSet('label[for="f-email"]', `${labels.email} <span class="req" aria-hidden="true">*</span>`);
    text('label[for="f-phone"]', labels.phone);
    text('label[for="f-company"]', labels.company);
    htmlSet('label[for="f-subject"]', `${labels.subject} <span class="req" aria-hidden="true">*</span>`);
    htmlSet('label[for="f-message"]', `${labels.message} <span class="req" aria-hidden="true">*</span>`);
    attr('#f-name', 'placeholder', placeholders.name);
    attr('#f-email', 'placeholder', placeholders.email);
    attr('#f-phone', 'placeholder', placeholders.phone);
    attr('#f-company', 'placeholder', placeholders.company);
    attr('#f-message', 'placeholder', placeholders.message);
    document.querySelectorAll('#f-subject option').forEach((option, index) => {
      const value = t.subjectOptions[index];
      if (value == null) return;
      option.textContent = value;
      if (index > 0) option.value = value.replace(/^\S+\s/, '');
    });
    keepIconText('#f-name-err', t.validation.nameRequired);
    keepIconText('#f-email-err', t.validation.emailInvalid);
    keepIconText('#f-subject-err', t.validation.subjectRequired);
    keepIconText('#f-message-err', t.validation.messageRequired);
    text('.privacy', t.privacy);
    text('#submitBtn .btn-text', t.submit);
    window.SiteI18n.contactStrings = t;
  }

  function apply404(lang) {
    const t = dict[lang].error404;
    document.title = t.title;
    attr('header .logo', 'aria-label', t.homeAria);
    attr('header .socials', 'aria-label', t.socials);
    const navHome = document.querySelector('header .nav-home');
    if (navHome) {
      const icon = navHome.querySelector('svg');
      navHome.replaceChildren();
      if (icon) navHome.appendChild(icon.cloneNode(true));
      navHome.appendChild(document.createTextNode(t.backHome));
    }
    text('.phrase-eyebrow', t.eyebrow);
    htmlSet('.phrase-big', t.phrase);
    htmlSet('.phrase-sub', t.phraseSub);
    text('.err-title', t.errTitle);
    text('.err-desc', t.errDesc);
    keepIconText('.err-btns .btn-fill', t.buttons[0]);
    text('.err-btns .btn-ghost', t.buttons[1]);
    attr('.quick-links', 'aria-label', t.quickLinksAria);
    list('.quick-link', t.quickLinks);
    text('.cs-label', t.contactLabel);
    htmlSet('.cs-title', t.contactTitle);
    text('.cs-desc', t.contactDesc);
    text('label[for="mf-name"]', t.formLabels.name);
    text('label[for="mf-email"]', t.formLabels.email);
    text('label[for="mf-subject"]', t.formLabels.subject);
    text('label[for="mf-msg"]', t.formLabels.message);
    attr('#mf-name', 'placeholder', t.formPlaceholders.name);
    attr('#mf-email', 'placeholder', t.formPlaceholders.email);
    attr('#mf-msg', 'placeholder', t.formPlaceholders.message);
    document.querySelectorAll('#mf-subject option').forEach((option, index) => {
      const value = t.formOptions[index];
      if (value == null) return;
      option.textContent = value;
      if (index > 0) option.value = value;
    });
    text('#mf-name-err', t.formErrors.name);
    text('#mf-email-err', t.formErrors.email);
    text('#mf-subject-err', t.formErrors.subject);
    text('#mf-msg-err', t.formErrors.message);
    text('#mf-btn .btn-text', t.submit);
    window.SiteI18n.error404Strings = t;
  }

  function applyArticle(lang) {
    const articleLang = articleContent[lang] || articleContent[FALLBACK];
    const slug = currentArticleSlug();
    const post = articleLang.posts[slug];
    if (!post) return;

    document.title = `${post.title}${articleLang.titleSuffix}`;
    attr('meta[name="description"]', 'content', post.description);
    attr('meta[property="og:title"]', 'content', `${post.title}${articleLang.titleSuffix}`);
    attr('meta[property="og:description"]', 'content', post.description);
    attr('meta[property="og:locale"]', 'content', articleLang.ogLocale);
    attr('meta[name="twitter:title"]', 'content', `${post.title}${articleLang.titleSuffix}`);
    attr('meta[name="twitter:description"]', 'content', post.description);

    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (jsonLd) {
      try {
        const json = JSON.parse(jsonLd.textContent);
        if (json && json['@type'] === 'BlogPosting') {
          json.headline = `${post.title}${articleLang.titleSuffix}`;
          json.description = post.description;
          json.inLanguage = lang === 'pt' ? 'pt-BR' : lang;
          jsonLd.textContent = JSON.stringify(json, null, 2);
        }
      } catch (error) {
        // Keep existing structured data if parsing fails.
      }
    }

    attr('#nav .logo', 'aria-label', articleLang.homeAria);
    attr('#nav nav', 'aria-label', articleLang.menuAria);
    attr('#nav .nav-socials', 'aria-label', articleLang.socialsAria);
    list('.nav-links a', articleLang.nav);
    keepArrowValue('.nav-cta', articleLang.cta);
    attr('#burger', 'aria-label', articleLang.burgerMenu);
    attr('#mobClose', 'aria-label', articleLang.closeMenu);
    list('.mob-link', articleLang.mobileNav);

    text('.article-label', post.category);
    text('.article-title', post.title);
    text('.article-sub', post.subtitle);
    list('.article-content h2', post.headings);
    list('.article-content p', post.paragraphs);
    list('.article-content li', post.bullets);

    const meta = document.querySelectorAll('.article-meta span');
    if (meta[0]) meta[0].textContent = `${articleLang.publishedLabel} ${post.date}`;
    if (meta[1]) meta[1].textContent = `${articleLang.authorLabel}: Jose Henrique Santos Andrade`;
    if (meta[2]) meta[2].textContent = articleLang.aiNotice;

    text('.article-actions .btn-ghost', articleLang.backToBlog);
    keepArrowValue('.article-actions .btn-fill', articleLang.talkToMe);
    text('footer .footer-links > a:first-child', articleLang.footerEmail);
  }

  const pageAppliers = {
    home: applyHome,
    contact: applyContact,
    '404': apply404,
    article: applyArticle
  };

  function applyLanguage(lang) {
    html.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);
    updateSwitcher(lang);
    const applyPage = pageAppliers[page];
    if (typeof applyPage === 'function') applyPage(lang);
  }

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.lang-btn');
    if (!btn) return;
    setLanguage(btn.dataset.lang);
  });

  window.SiteI18n = {
    dict,
    getLanguage,
    setLanguage,
    onChange(listener) { listeners.push(listener); },
    t(section, key) {
      const lang = getLanguage();
      return dict[lang]?.[section]?.[key];
    },
    contactStrings: dict[getLanguage()].contact,
    error404Strings: dict[getLanguage()].error404
  };

  applyLanguage(getLanguage());
})();
