import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  public es = {
    navbar: {
      items: [
        {
          label: "Inicio",
          scrollTo: "INICIO"
        },
        {
          label: "Acerca de mí",
          scrollTo: "ABOUT"
        },
        {
          label: "¿Qué puedo hacer?",
          scrollTo: "INICIO"
        },
        {
          label: "Portafolio",
          scrollTo: "PORTAFOLIO"
        },
        {
          label: "Stacks",
          scrollTo: "STACKS"
        },
      ]
    },
    footer: {
      contactLabel: "Contácto",
      list: [
        {
          label: "Correo:",
          value: "abraham11999@hotmail.com"
        },
        {
          label: "Teléfono:",
          value: "(614)599-60-26"
        },
      ]
    },
    header: {
      title: "¡Hola! Soy Abraham Luna 👋",
      message: "Desarrollador Full-Stack Web y Móvil",
      particles: ["Apps iOS, Android y PWA", "Páginas y Sistemas Web", "Bases de datos y servidores"],
      button: "Descarga mi CV",
      modaltitle: "Descargar CV",
      modalmessage: "Elige el idioma",
      modalbtn: "Cancelar"
    },
    about: {
      title: "Acerca de mí",
      message1: "Desarrollador Full-Stack con especialidad en desarrollo de aplicaciones para dispositivos móviles 📱 egresado de Ingeniería Informática por parte del Instituto Tecnológico de Chihuahua II 👨🏼‍🎓",
      message2: "Cuento con habilidades de comunicación, control de tiempos, trabajo bajo presión, atención/soporte a cliente final, versatilidad y organización para colaborar en proyectos modulares a pequeña o gran escala; autodidácta, adaptable a los cambios y a las tecnologías con las cuales se tenga que trabajar. Reconozco la evolución, la exigencia y la disciplina que requiere la industria global por lo que busco que mi conocimiento sea un activo para tu empresa."
    },
    services: {
      title: "¿Qué puedo hacer?",
      tasks: [
        {
          title: "Desarrollo Móvil multiplataforma",
          description: "Especialista en esta área. Puedo desarrollar o colaborar en el desarrollo de aplicaciones a la medida para Android, iOS y PWA (Apps que se instalan en el navegador web).",
          iconurl: "https://cdn.lordicon.com/jqeuwnmb.json"
        },
        {
          title: "Páginas y Sistemas Web",
          description: "Desde una simple página informativa hasta un robusto sistema distribuido, puedo desarrollar o colaborar en el desarrollo de herramientas web que solucionen algún problema o satisfagan alguna necesidad.",
          iconurl: "https://cdn.lordicon.com/gqzfzudq.json"
        },
        {
          title: "Infraestructura en la nube y local",
          description: "No importa si la solución requiere de una infraestructura local o en la nube, cuento con conocimiento y experiencia para trabajar en ambos ambientes.",
          iconurl: "https://cdn.lordicon.com/qghrdngw.json"
        }
      ]
    },
    portfolio: {
      title: "Portafolio",
      links: [
        {
          label: "Haz click aquí para ir a mis Apps en la App Store",
          link: "https://play.google.com/store/apps/developer?id=Software+Tizona"
        },
        {
          label: "Haz click aquí para ir a mi perfil de GitHub",
          link: "https://github.com/AbrahamLCodes"
        }
      ]
    },
    stacks: {
      label1: "Cuento con un amplio conocimiento en diversas tecnologías que me permiten trabajar en diversos ambientes. Echale un vistazo a los Stacks que manejo en cada una de las áreas",
      frontendlabel: "Mi Stack de Tecnologías Web",
      frontend: [
        {
          image: "../../../../../assets/images/angular-logo.png",
          label: "Angular"
        },
        {
          image:"../../../../../assets/images/ngrx-logo.svg",
          label: "NgRx"
        },
        {
          image:"../../../../../assets/images/bootstrap-logo.svg",
          label: "Bootstrap"
        },
        {
          image:"../../../../../assets/images/ts-logo.png",
          label: "TypeScript"
        }
      ],
      backend: [
        {
          image: "../../../../../assets/images/node-logo.png",
          label: "NodeJS"
        },
        {
          image: "../../../../../assets/images/sequilize-logo.png",
          label: "Sequilize"
        },
        {
          image: "../../../../../assets/images/mysql-logo.png",
          label: "MySQL"
        }
      ],
      serverslabel: "Servidores",
      servers: [
        {
          image: "../../../../../assets/images/nginx-logo.png",
          label: "NGINX"
        },
        {
          image: "../../../../../assets/images/nginxproxy-logo.png",
          label: "Proxy Manager"
        },
        {
          image: "../../../../../assets/images/debian-logo.png",
          label: "Debian"
        },
        {
          image: "../../../../../assets/images/docker-logo.png",
          label: "Docker"
        }
      ],
      mobilelabel: "Mi Stack de tecnologías móviles",
      android: [
        {
          image: "../../../../../assets/images/kotlin-logo.png",
          label: "Kotlin"
        },
        {
          image: "../../../../../assets/images/java-logo.png",
          label: "Java"
        },
        {
          image: "../../../../../assets/images/as-logo.png",
          label: "Android Studio"
        }
      ],
      ios: [
        {
          image: "../../../../../assets/images/swift-logo.png",
          label: "Swift"
        },
        {
          image: "../../../../../assets/images/swiftui-logo.png",
          label: "SwiftUI"
        },
        {
          image: "../../../../../assets/images/xcode-logo.png",
          label: "XCode"
        }
      ],
      hibridlabel: "Híbrido",
      hibryd: [
        {
          image: "../../../../../assets/images/angular-logo.png",
          label: "Angular"
        },
        {
          image: "../../../../../assets/images/ngrx-logo.svg",
          label: "NgRx"
        },
        {
          image: "../../../../../assets/images/ionic-logo.png",
          label: "Ionic"
        },
        {
          image: "../../../../../assets/images/capacitor.png",
          label: "Capacitor"
        }
      ]
    }
  }

  public en = {
    navbar: {
      items: [
        {
          label: "Home",
          scrollTo: "INICIO"
        },
        {
          label: "About",
          scrollTo: "ABOUT"
        },
        {
          label: "What can i do?",
          scrollTo: "INICIO"
        },
        {
          label: "Portfolio",
          scrollTo: "PORTAFOLIO"
        },
        {
          label: "Stacks",
          scrollTo: "STACKS"
        },
      ]
    },
    footer: {
      contactLabel: "Contact me",
      list: [
        {
          label: "Email:",
          value: "abraham11999@hotmail.com"
        },
        {
          label: "Phone:",
          value: "(614)599-60-26"
        },
      ]
    },
    header: {
      title: "Hey There! I'm Abraham Luna 👋",
      message: "Full-Stack Web y Móvil Developer",
      particles: ["iOS, Android & PWA Apps", "Web pages & web systems", "Databases & Servers"],
      button: "Download mi CV",
      modaltitle: "Download CV",
      modalmessage: "Choose language",
      modalbtn: "Cancel"
    },
    about: {
      title: "About me",
      message1: "Full-Stack developer specializing in application development for mobile devices 📱 Computer Engineering graduated from the Technological Institute of Chihuahua II 👨🏼‍🎓",
      message2: "I have communication skills, time control, work under pressure, customer service/support, versatility and organization to collaborate on small or large-scale modular projects; Self-taught, adaptable to changes and technologies with which you have to work. I recognize the evolution, demand and discipline that the global industry requires, so I want my knowledge to be an asset for your company."
    },
    services: {
      title: "What can i do?",
      tasks: [
        {
          title: "Cross-platform mobile development",
          description: "Specialist in this area. I can develop or collaborate in the development of custom applications for Android, iOS and PWA (Apps that are installed in the web browser).",
          iconurl: "https://cdn.lordicon.com/jqeuwnmb.json"
        },
        {
          title: "Web Pages and Systems",
          description: "From a simple informative page to a robust distributed system, I can develop or collaborate in the development of web tools that solve a problem or satisfy a need.",
          iconurl: "https://cdn.lordicon.com/gqzfzudq.json"
        },
        {
          title: "Cloud or local infrastructure",
          description: "It doesn't matter if the solution requires local or cloud infrastructure, I have the knowledge and experience to work in both environments.",
          iconurl: "https://cdn.lordicon.com/qghrdngw.json"
        }
      ]
    },
    portfolio: {
      title: "Portfolio",
      links: [
        {
          label: "Click me to go to my Play Store Apps",
          link: "https://play.google.com/store/apps/developer?id=Software+Tizona"
        },
        {
          label: "Click me to see my GitHub",
          link: "https://github.com/AbrahamLCodes"
        }
      ]
    },
    stacks: {
      label1: "I have extensive knowledge in many technologies that allow me to work in different environments. Take a look at the Stacks that I manage in each of the areas",
      frontendlabel: "My Web Technologies Stack",
      frontend: [
        {
          image: "../../../../../assets/images/angular-logo.png",
          label: "Angular"
        },
        {
          image:"../../../../../assets/images/ngrx-logo.svg",
          label: "NgRx"
        },
        {
          image:"../../../../../assets/images/bootstrap-logo.svg",
          label: "Bootstrap"
        },
        {
          image:"../../../../../assets/images/ts-logo.png",
          label: "TypeScript"
        }
      ],
      backend: [
        {
          image: "../../../../../assets/images/node-logo.png",
          label: "NodeJS"
        },
        {
          image: "../../../../../assets/images/sequilize-logo.png",
          label: "Sequilize"
        },
        {
          image: "../../../../../assets/images/mysql-logo.png",
          label: "MySQL"
        }
      ],
      serverslabel: "Servers",
      servers: [
        {
          image: "../../../../../assets/images/nginx-logo.png",
          label: "NGINX"
        },
        {
          image: "../../../../../assets/images/nginxproxy-logo.png",
          label: "Proxy Manager"
        },
        {
          image: "../../../../../assets/images/debian-logo.png",
          label: "Debian"
        },
        {
          image: "../../../../../assets/images/docker-logo.png",
          label: "Docker"
        }
      ],
      mobilelabel: "My Mobile Technologies Stack",
      android: [
        {
          image: "../../../../../assets/images/kotlin-logo.png",
          label: "Kotlin"
        },
        {
          image: "../../../../../assets/images/java-logo.png",
          label: "Java"
        },
        {
          image: "../../../../../assets/images/as-logo.png",
          label: "Android Studio"
        }
      ],
      ios: [
        {
          image: "../../../../../assets/images/swift-logo.png",
          label: "Swift"
        },
        {
          image: "../../../../../assets/images/swiftui-logo.png",
          label: "SwiftUI"
        },
        {
          image: "../../../../../assets/images/xcode-logo.png",
          label: "XCode"
        }
      ],
      hibridlabel: "Hybrid",
      hibryd: [
        {
          image: "../../../../../assets/images/angular-logo.png",
          label: "Angular"
        },
        {
          image: "../../../../../assets/images/ngrx-logo.svg",
          label: "NgRx"
        },
        {
          image: "../../../../../assets/images/ionic-logo.png",
          label: "Ionic"
        },
        {
          image: "../../../../../assets/images/capacitor.png",
          label: "Capacitor"
        }
      ]
    }
  }

  public languageSelected: any = this.es;
  public lang: Subject<any> = new Subject<any>();
  
  constructor() { 
    this.lang.subscribe(value => {
      this.languageSelected = value;
    })
  }

  public selectEn(){
    this.lang.next(this.en);
  }

  public selectEs(){
    this.lang.next(this.es)
  }

  

}
