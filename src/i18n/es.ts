import runtImage from "../assets/images/runt.png";
import runtProImage from "../assets/images/runtpro.png";
import porcinappImage from "../assets/images/porcinapp.jpg";

export default {
  navLinks: [
    {
      name: "Inicio",
      href: "#home",
    },
    {
      name: "Sobre mí",
      href: "#about",
    },
    {
      name: "Proyectos",
      href: "#project",
    },
    {
      name: "Contacto",
      href: "#contact",
    },
  ],
  hero: {
    hello: "Hola",
    tagline: "Soy Adrian, Desarrollador de Software",
    stats: {
      numberProjects: "+20",
      projects: "Proyectos completados",
    },
    dev: "Desarrollador de Software",
    anio: "2026",
  },
  socialNetwork: [
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/adrian-osorio-6297a1206",
    },
    {
      title: "X",
      url: "https://x.com/adriancami77778",
    },
    {
      title: "GitHub",
      url: "https://github.com/osorioadrian",
    },
  ],
  footerLinks: [
    {
      name: "Inicio",
      href: "#home",
      active: false,
    },
    {
      name: "Sobre mí",
      href: "#about",
      active: false,
    },
    {
      name: "Proyectos",
      href: "#project",
      active: false,
    },
    {
      name: "Contacto",
      href: "#contact",
      active: false,
    },
  ],
  about: {
    title: "Sobre mí",
    subtitle:
      "Soy un Ingeniero de Software enfocado en potenciar el alcance humano mediante la tecnología. Fusiono el rigor técnico con una visión estratégica; más que escribir código, diseño experiencias digitales fluidas que resuelven problemas del mundo real.",
    cardtitle:
      "Reducción en tiempo de onboarding mediante soluciones de aprendizaje contextual con IA.",
    highlights1:
      "Más de 4 años en NTT DATA liderando el desarrollo de canales digitales y portales bancarios para entidades como Banco Popular y Banco de Bogotá, garantizando interfaces seguras y escalables.",
    highlights2:
      "Ingeniero de Sistemas con un sólido perfil Full Stack, especializado en Angular para crear soluciones robustas de gestión de información y prevención de riesgos institucionales.",
  },
  experiences: [
    {
      company: "Desarrollador Front-End | Canales Digitales - Banco Popular",
      date: "Junio 2025 – Actualidad",
      role: "Ingeniería de portales bancarios de alto tráfico utilizando arquitecturas modernas para mejorar la accesibilidad de la banca digital.",
      tags: ["Angular", "TypeScript"],
      isSpecial: false,
    },
    {
      company: "Desarrollador Full Stack | Banco de Bogotá",
      date: "Septiembre 2024 – Julio 2025",
      role: "Desarrollo de soluciones integrales para servicios bancarios centrales, conectando lógica de back-end compleja con interfaces de usuario intuitivas.",
      tags: ["Angular", "Java/Spring"],
      isSpecial: false,
    },
    {
      company: "Desarrollador Front-End | Grow Data",
      date: "Feb 2024 – Oct 2024 | Feb 2025 – Jul 2025",
      role: "Desarrollador Front-End Angular: Portal RUNTPRO y módulo de planilla de despacho",
      tags: ["Angular", "TypeScript"],
      isSpecial: false,
    },
    {
      company: "Desarrollador Front-End | SoftManagement",
      date: "Septiembre 2024 – Enero 2025",
      role: "Desarrollador Mobile Flutter para la plataforma de trámites ciudadanos del RUNT",
      tags: ["Flutter", "Dart"],
      isSpecial: false,
    },
    {
      company: "Desarrollador Front-End | Banco Popular",
      date: "Noviembre 2021 – Septiembre 2024",
      role: "Implementación de componentes de UI escalables para plataformas de banca retail, con foco en optimización de rendimiento y estándares de seguridad.",
      tags: ["Angular", "TypeScript"],
      isSpecial: false,
    },
  ],
  experiencesInfo: {
    experience: "Experiencias",
    title: "Mi Trayectoria Profesional",
    desc: "Durante los últimos 6 años, me he especializado en la construcción de soluciones digitales de alta seguridad para el sector financiero, colaborando con equipos globales para ofrecer experiencias de usuario impecables.",
    talk: "Contáctame",
  },
  contact: {
    subtitle: "Contacto",
    title: "Ponte en contacto, construyamos algo juntos",
    description:
      "Disponible para nuevos proyectos en banca digital, fintech y desarrollo full-stack. Transformemos tu visión en una realidad digital impecable.",
    cv: "Descargar CV",
    message: "¡Mensaje Enviado!",
    thank: "Gracias, Adrian se pondrá en contacto contigo pronto.",
    send: "Enviar otro mensaje",
    form: {
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar Mensaje",
    },
  },
  projects: [
    {
      title: "Runt Trámites Ciudadano",
      client: "RUNT",
      image: runtImage,
      category: "Plataforma Móvil",
      tags: ["Flutter", "Dart", "Firebase", "Rest API"],
      url: "",
      links: {
        ios: "https://apps.apple.com/co/app/runt-tramites-ciudadano/id6743092047",
        android:
          "https://play.google.com/store/apps/details?id=co.com.runt.tramites",
      },
      showButton: false,
    },
    {
      title: "RUNT PRO",
      client: "RUNT",
      image: runtProImage,
      category: "Website",
      tags: ["Angular", "TypeScript", "Azure"],
      links: {
        ios: "",
        android: "",
      },
      url: "https://b2crunt2prd.b2clogin.com/runtprologin.runt.gov.co/b2c_1a_singin/oauth2/v2.0/authorize?client_id=4e0d509e-3bb5-44b9-b712-53e221b97393&scope=https%3A%2F%2FB2Crunt2prd.onmicrosoft.com%2FRNFTransversalMS%2Faccess.all%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fruntpro.runt.gov.co%2F&client-request-id=ee6b6245-ccae-4a69-9660-f5abdeea867c&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.38.1&client_info=1&code_challenge=7iVw3UY_oFf5dIOQBmLcHZPAxrkDm9dcf-ika1fISGY&code_challenge_method=S256&nonce=071df545-7bc2-464d-9668-a8cb8ee26597&state=eyJpZCI6ImI3M2E3MWE2LWRkZDUtNDI3ZC1hZTQ2LTNhMDBjOTlhNjk5ZCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D",
      showButton: false,
    },
    {
      title: "PorcinApp",
      client: "PorcinApp",
      image: porcinappImage,
      category: "Website",
      tags: ["Angular", "TypeScript", "GitHub"],
      links: {
        ios: "",
        android: "",
      },
      url: "https://porcinapp.co",
      showButton: false,
    },
  ],
  projectsInfo: {
    title: "Proyectos",
    desc: "Últimos trabajos",
  },
};
