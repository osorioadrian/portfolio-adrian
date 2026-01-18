import runtImage from "../assets/images/runt.png";
import runtProImage from "../assets/images/runtpro.png";
import porcinappImage from "../assets/images/porcinapp.jpg";

export default {
  navLinks: [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About Me",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#project",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ],
  hero: {
    hello: "Hello",
    tagline: "I'm Adrian, Software Developer",
    stats: {
      numberProjects: "+20",
      projects: "Project completed",
    },
    dev: "Software Developer",
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
      name: "Home",
      href: "#home",
      active: false,
    },
    {
      name: "About Me",
      href: "#about",
      active: false,
    },
    {
      name: "Projects",
      href: "#project",
      active: false,
    },
    {
      name: "Contact",
      href: "#contact",
      active: false,
    },
  ],
  about: {
    title: "About Me",
    subtitle:
      "I’m a Software Engineer focused on amplifying human potential through technology. I bridge technical rigor with strategic vision; beyond just writing code, I design seamless digital experiences that solve real-world problems.",
    cardtitle:
      "Streamlined onboarding efficiency through AI-driven contextual learning solutions.",
    highlights1:
      "With over 4 years at NTT DATA, I have spearheaded the development of digital banking portals and channels for major financial institutions, delivering secure and highly scalable user interfaces.",
    highlights2:
      "Systems Engineer with a strong Full-Stack background, specialized in Angular to build robust information management systems and institutional risk-prevention solutions.",
  },
  experiences: [
    {
      company: "Front-End Developer | Digital Channels - Banco Popular",
      date: "June 2025 – Present",
      role: "Engineering secure, high-traffic banking portals using modern Front-End architectures to enhance digital banking accessibility.",
      tags: ["Angular", "TypeScript"],
      isSpecial: false,
    },
    {
      company: "Full Stack Developer | Banco de Bogotá",
      date: "September 2024 – July 2025",
      role: "Developed end-to-end solutions for core banking services, bridging complex back-end logic with intuitive user interfaces.",
      tags: ["Angular", "Java/Spring"],
      isSpecial: false,
    },
    {
      company: "Front-End Developer | Banco Popular",
      date: "November 2021 – September 2024",
      role: "Implemented scalable UI components for retail banking platforms, focusing on performance optimization and security standards.",
      tags: ["Angular", "TypeScript"],
      isSpecial: false,
    },
  ],
  experiencesInfo: {
    experience: "Experiences",
    title: "Explore My Professional Journey",
    desc: "Over the past 6+ years, I have specialized in building high-security digital solutions for the financial sector, collaborating with global teams to deliver seamless user experiences.",
    talk: "Contact me",
  },
  contact: {
    subtitle: "Contact",
    title: "Get in Touch, Let’s Build Something Together",
    description:
      "Available for new projects in digital banking, fintech, and full-stack development. Let's transform your vision into a seamless digital reality.",
    cv: "Download CV",
    message: "Message Sent!",
    thank: "Thanks! I'll get back to you shortly.",
    send: "Send another message",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
  },
  projects: [
    {
      title: "Runt Trámites Ciudadano",
      client: "RUNT",
      image: runtImage,
      category: "Mobile App",
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
    title: "Projects",
    desc: "Latest Works",
  },
};
