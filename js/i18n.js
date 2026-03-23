(function () {
  'use strict';

  const STORAGE_KEY = 'josehenriquesa.com.language';
  const SUPPORTED = ['en', 'es', 'pt'];
  const FALLBACK = 'en';
  const html = document.documentElement;
  const page = document.body.dataset.page;
  const listeners = [];

  const dict = {
    en: {
      ui: {
        langLabel: 'Language',
<<<<<<< ours
        languages: { en: 'EN', es: 'ES', pt: 'PT' }
=======
        languages: { en: 'English', es: 'Español', pt: 'Português' }
>>>>>>> theirs
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
          ['Java · Backend', 'Microservices with Spring Boot: best practices in 2026', 'How to structure modern Spring Boot projects with resilience, observability, and performance on Kubernetes.', 'Read article'],
          ['SAP Commerce', 'SAP Commerce Cloud: what you need to know before migrating', 'A practical guide to moving from on-premise Hybris to SAP Cloud — challenges and winning strategies.', 'Read article'],
          ['AI · Technology', 'AI in backend development: the future is already here', 'How Artificial Intelligence is transforming Java development, testing, and documentation.', 'Read article']
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
        contactDesc: 'Found this error but still have something important to say? Send me a message — I always reply within 24 hours.',
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
<<<<<<< ours
      ui: { langLabel: 'Idioma', languages: { en: 'EN', es: 'ES', pt: 'PT' } },
=======
      ui: { langLabel: 'Idioma', languages: { en: 'English', es: 'Español', pt: 'Português' } },
>>>>>>> theirs
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
        blogLabel: '// 05 — Blog', blogTitle: 'Artículos y <span class="stroke-text">Contenido</span>', blogPosts: [['Java · Backend', 'Microservicios con Spring Boot: buenas prácticas en 2026', 'Cómo estructurar proyectos modernos con Spring Boot, resiliencia, observabilidad y rendimiento en Kubernetes.', 'Leer artículo'], ['SAP Commerce', 'SAP Commerce Cloud: lo que necesitas saber antes de migrar', 'Guía práctica sobre la migración de Hybris on-premise a SAP Cloud: desafíos y estrategias de éxito.', 'Leer artículo'], ['IA · Tecnología', 'IA en el desarrollo backend: el futuro ya llegó', 'Cómo la Inteligencia Artificial está transformando el desarrollo, las pruebas y la documentación en Java.', 'Leer artículo']],
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
<<<<<<< ours
      ui: { langLabel: 'Idioma', languages: { en: 'EN', es: 'ES', pt: 'PT' } },
=======
      ui: { langLabel: 'Idioma', languages: { en: 'English', es: 'Español', pt: 'Português' } },
>>>>>>> theirs
      home: {
        title: 'Jose Henrique — Java Sênior', description: 'Jose Henrique Santos Andrade — Desenvolvedor Java Sênior & Arquiteto Backend com 14+ anos de experiência.', nav: ['Sobre', 'Experiência', 'Projetos', 'Blog'], cta: 'Contato', closeMenu: 'Fechar menu', burgerMenu: 'Menu', heroEyebrow: '● Disponível para parcerias técnicas e projetos', heroName: 'Meu nome<br>é Jose<br><span class="stroke-text">Henrique</span>', heroBio: 'Desenvolvedor Java Sênior &amp; Arquiteto Backend com <strong>14+ anos</strong> de experiência construindo microsserviços, plataformas de e-commerce enterprise e sistemas de alta performance para <strong>Vivo / Telefônica Brasil</strong>.', heroBadgesAria: 'Principais tecnologias', heroButtons: ['Ver projetos', 'Falar comigo'], statChipAria: '14 anos de experiência', statChipSub: 'anos de<br>experiência', location: 'São Paulo · BR', stripLabels: ['Anos de experiência', 'Anos na Vivo', 'Empresas', 'Pós-graduações'], aboutLabel: '// 01 — Sobre', aboutTitle: 'Quem <br><span class="stroke-text">sou eu</span>', aboutParagraphs: ['Bacharel em <strong>Sistemas de Informação pela UFLA</strong>, especialista em Arquitetura de Software, e cursando pós-graduação em <strong>Inteligência Artificial pela Anhembi Morumbi</strong>.', 'Atuando como Consultor e Desenvolvedor na <strong>Vivo (Telefônica Brasil)</strong> desde 2019, entrego soluções digitais de alta escala usando SAP Commerce, Kubernetes, Docker e AWS. Yellow Belt em Lean, com profundo domínio em Scrum e Kanban.'], education: [['Bacharelado — Sistemas de Informação', 'UFLA · 2008 – 2012'], ['Especialização — Arquitetura de Software', 'IGTI · 2014 – 2015'], ['Especialização — Inteligência Artificial', 'Anhembi Morumbi · 2025 – 2026 <span class="tag-active">Em curso</span>']], contactMe: 'Entrar em contato', experienceLabel: '// 02 — Carreira', experienceTitle: 'Experiência <span class="stroke-text">Profissional</span>', currentBadge: 'Atual', jobs: [['Consultor &amp; Desenvolvedor', 'Vivo · Telefônica Brasil · São Paulo', 'Ago 2019 – Presente · 6a 8m', 'Desenvolvimento e arquitetura de produtos digitais com SAP Commerce (Hybris), Spring MVC, Node.js, Docker e Kubernetes. Ciclo completo: arquitetura, integrações, desenvolvimento, implantação e evolução contínua. Migração para SAP Cloud.'], ['Líder Técnico &amp; Dev Sênior', 'Equals · Gestão Financeira · Lavras, MG', 'Mai 2017 – Ago 2019 · 2a 4m', 'Liderança de equipe de integrações com meios de pagamento. Arquitetura, desenvolvimento e modelagem de banco de dados Oracle. Suporte interno e externo a parceiros e clientes.'], ['Analista &amp; Desenvolvedor Pleno', 'Equals · Gestão Financeira · São Paulo', 'Set 2014 – Mai 2017 · 2a 9m', 'Análise e desenvolvimento com Java, Spring Framework e Apache Camel. Levantamento de requisitos, treinamentos e modelagem Oracle. Servidor JBoss.'], ['Analista de Sistemas', 'LEMAF · Lab. Manejo Florestal · UFLA', 'Mai 2012 – Ago 2014 · 2a 4m', 'Desenvolvimento de sistemas florestais e ambientais, levantamento de requisitos, modelagem de banco de dados e implantação. Início como estagiário.'], ['Desenvolvedor Full Stack', 'LabGTI · Lavras, MG', 'Abr 2011 – Jan 2012 · 10m', 'Desenvolvimento de sistemas com Java, JavaScript, jQuery e Bootstrap.'], ['Instrutor &amp; WebMaster', 'Lab. Geoprocessamento · UFLA · Lavras', 'Mai 2010 – Jul 2011 · 1a 3m', 'Cursos de geoprocessamento para técnicos e administração de site Joomla.']], stackLabel: '// 03 — Stack', stackTitle: 'Minhas <span class="stroke-text">Tecnologias</span>', stackCats: ['Backend', 'Cloud &amp; DevOps', 'Banco de Dados'], skillLevels: ['Expert', 'Expert', 'Expert', 'Avançado', 'Avançado', 'Expert', 'Avançado', 'Avançado', 'Avançado', 'Avançado', 'Expert', 'Avançado', 'Expert', 'Avançado', 'Expert', 'Avançado', 'Avançado', 'Avançado'], projectLabel: '// 04 — Portfolio', projectTitle: 'Projetos em <span class="stroke-text">Destaque</span>', allProjects: 'Ver todos', projects: [['E-commerce · SAP', 'Plataforma Digital Vivo', 'E-commerce enterprise com SAP Commerce (Hybris), microsserviços, Kubernetes e SAP Cloud. Módulos de checkout, catálogo e APIs críticas de negócio.'], ['Fintech', 'Hub de Pagamentos', 'Hub centralizado para integrações com meios de pagamento. Alta disponibilidade e rastreabilidade de transações.'], ['Ambiental · GIS', 'Gestão Florestal', 'Sistema de monitoramento florestal e ambiental com geoprocessamento para órgãos governamentais.']], blogLabel: '// 05 — Blog', blogTitle: 'Artigos &amp; <span class="stroke-text">Conteúdo</span>', blogPosts: [['Java · Backend', 'Microsserviços com Spring Boot: boas práticas em 2026', 'Como estruturar projetos Spring Boot modernos com resiliência, observabilidade e performance em Kubernetes.', 'Ler artigo'], ['SAP Commerce', 'SAP Commerce Cloud: o que você precisa saber antes de migrar', 'Guia prático sobre migração de Hybris on-premise para SAP Cloud — desafios e estratégias de sucesso.', 'Ler artigo'], ['IA · Tecnologia', 'IA no desenvolvimento backend: o futuro já chegou', 'Como a Inteligência Artificial está transformando o desenvolvimento, testes e documentação em Java.', 'Ler artigo']], contactLabel: '// 06 — Contato', contactTitle: 'Vamos<br><span class="stroke-text">Conversar</span>', contactText: 'Aberto a oportunidades, projetos e colaborações. Respondo em até 24h.', contactLocation: 'São Paulo, SP · Brasil', sendMessage: 'Enviar mensagem →', footerEmail: 'Email'
      },
      contact: {
        title: 'Contato — Jose Henrique', description: 'Entre em contato com Jose Henrique Santos Andrade — Desenvolvedor Java Sênior.', nav: ['Sobre', 'Experiência', 'Projetos', 'Blog', 'Contato'], headerMenu: 'Menu principal', socials: 'Redes sociais', homeAria: 'Início', heroLabel: '// 06 — Entre em contato', heroTitle: 'Vamos<br>Con<em>versar</em>', heroSub: 'Aberto a parcerias, projetos e colaborações técnicas. Respondo sempre em até 24 horas.', availTitle: 'Disponível para parcerias técnicas e projetos', availSub: 'São Paulo, SP · Brasil · Remoto ou híbrido', directTitle: 'Contatos diretos', socialTitle: 'Redes sociais', formTitle: 'Envie uma mensagem', formSub: 'Preencha o formulário e recebo direto no meu email. Campos marcados com <span style="color:var(--orange)">*</span> são obrigatórios.', progressAria: 'Progresso do formulário', labels: { name: 'Nome', email: 'Email', phone: 'Telefone / WhatsApp', company: 'Empresa / Organização', subject: 'Assunto', message: 'Mensagem' }, placeholders: { name: 'Seu nome completo', email: 'seu@email.com', phone: '+55 (11) 99999-9999', company: 'Nome da empresa (opcional)', message: 'Descreva sua proposta, projeto ou dúvida em detalhes…' }, subjectOptions: ['Selecione o assunto…', '💼 Oportunidade de trabalho', '🚀 Projeto freelance', '🤝 Parceria técnica', '📋 Consultoria', '💡 Dúvida técnica', '✍️ Colaboração em blog/conteúdo', '💬 Outro'], privacy: 'Ao enviar este formulário, você concorda que suas informações serão usadas para responder sua mensagem. Nenhum dado é compartilhado com terceiros.', submit: 'Enviar mensagem', validation: { nameRequired: 'Nome é obrigatório', emailInvalid: 'Informe um email válido', subjectRequired: 'Selecione um assunto', messageShort: 'Mensagem muito curta (mín. 20 caracteres)', messageRequired: 'Mensagem é obrigatória (mín. 20 caracteres)' }, statuses: { sending: 'Enviando sua mensagem…', success: 'Mensagem enviada com sucesso! Responderei em breve.', fallback: 'Abrindo seu cliente de email com a mensagem pré-preenchida…' }, submitSending: 'Enviando…'
      },
      error404: {
        title: '404 — Página não encontrada · Jose Henrique', socials: 'Redes sociais', homeAria: 'Início', backHome: 'Início', eyebrow: 'Uma pergunta antes de você ir', phrase: 'Você sabe o que<br>está <em>procurando</em>?', phraseSub: 'Às vezes o melhor código ainda não foi escrito.<br>Talvez o que você busca esteja a uma <strong>conversa de distância</strong>.', errTitle: 'Página não encontrada', errDesc: 'A URL que você acessou não existe ou foi removida. Mas você está no lugar certo.', buttons: ['Voltar ao início', 'Enviar mensagem'], quickLinksAria: 'Links rápidos', quickLinks: ['→ Sobre', '→ Experiência', '→ Projetos', '→ Blog', '→ Contato'], contactLabel: '// Vamos conversar', contactTitle: 'Entre em<br><em>Contato</em>', contactDesc: 'Encontrou este erro mas tem algo importante para dizer? Me envie uma mensagem — respondo sempre em até 24h.', formLabels: { name: 'Nome', email: 'Email', subject: 'Assunto', message: 'Mensagem' }, formPlaceholders: { name: 'Seu nome', email: 'seu@email.com', message: 'Descreva sua ideia ou proposta…' }, formOptions: ['Selecione um assunto…', 'Oportunidade de trabalho', 'Projeto freelance', 'Parceria técnica', 'Dúvida técnica', 'Outro'], formErrors: { name: 'Nome é obrigatório', email: 'Email inválido', subject: 'Selecione um assunto', message: 'Mensagem é obrigatória' }, submit: 'Enviar mensagem', sending: 'Enviando…', success: '✓ Mensagem enviada! Responderei em breve.', fallback: 'Abrindo seu cliente de email…'
      }
    }
  };

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

  function pageDict(lang) {
    return dict[lang][page] || {};
  }

  function text(selector, value) {
    const el = document.querySelector(selector);
    if (el && value != null) el.textContent = value;
  }

  function htmlSet(selector, value) {
    const el = document.querySelector(selector);
    if (el && value != null) el.innerHTML = value;
  }

  function attr(selector, name, value) {
    const el = document.querySelector(selector);
    if (el && value != null) el.setAttribute(name, value);
  }


  function keepIconText(selector, value) {
    const el = document.querySelector(selector);
    if (!el || value == null) return;
    const icon = el.querySelector('svg');
    if (icon) el.innerHTML = `${icon.outerHTML} ${value}`;
    else el.textContent = value;
  }

  function keepArrowValue(selector, value) {
    const el = document.querySelector(selector);
    if (!el || value == null) return;
    const icon = el.querySelector('svg');
    if (icon) el.innerHTML = `${value} ${icon.outerHTML}`;
    else el.textContent = value;
  }

  function list(selector, values, mode = 'text') {
    if (!Array.isArray(values)) return;
    document.querySelectorAll(selector).forEach((el, index) => {
      const value = values[index];
      if (value == null) return;
      if (mode === 'html') el.innerHTML = value;
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
<<<<<<< ours
      btn.setAttribute('title', dict[lang].ui.languages[btn.dataset.lang]);
=======
      const label = dict[lang].ui.languages[btn.dataset.lang];
      btn.setAttribute('title', label);
      btn.setAttribute('aria-label', label);
>>>>>>> theirs
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
      if (strong) strong.innerHTML = titleValue;
      if (span) span.innerHTML = subtitleValue;
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
      if (h3) h3.innerHTML = role;
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
      if (linkEl) linkEl.innerHTML = `${link} <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
    });
    text('#contato .section-label', t.contactLabel);
    htmlSet('#contato .big-title', t.contactTitle);
    text('#contato .contact-left > p:not(.contact-loc)', t.contactText);
    const contactLoc = document.querySelector('#contato .contact-loc');
    if (contactLoc) {
      contactLoc.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' + t.contactLocation;
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
    htmlSet('header .nav-home', '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>' + t.backHome);
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

  function applyLanguage(lang) {
    html.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);
    updateSwitcher(lang);
    if (page === 'home') applyHome(lang);
    if (page === 'contact') applyContact(lang);
    if (page === '404') apply404(lang);
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
