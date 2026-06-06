import {
  FaHardHat,
  FaPaintRoller,
  FaTools,
  FaDoorClosed,
  FaHome,
  FaHammer,
  FaRulerCombined,
  FaBuilding,
  FaDraftingCompass,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

export const ServicesData = [
  {
    icon: FaHardHat,
    titleCard: "Obra Gris",
    descriptionCard:
      "Construcción estructural, cimentación, columnas, vigas y levantamiento de muros.",
  },

  {
    icon: FaPaintRoller,
    titleCard: "Obra Blanca",
    descriptionCard:
      "Estuco, pintura, enchapes y acabados interiores listos para habitar.",
  },

  {
    icon: FaTools,
    titleCard: "Acabados de Obra",
    descriptionCard:
      "Detalles finales de alta calidad para interiores y exteriores.",
  },

  {
    icon: FaDoorClosed,
    titleCard: "Instalación de Puertas",
    descriptionCard:
      "Montaje profesional de puertas de madera, aluminio y seguridad.",
  },

  {
    icon: FaHome,
    titleCard: "Remodelaciones",
    descriptionCard:
      "Transformamos espacios residenciales y comerciales modernos y funcionales.",
  },

  {
    icon: FaHammer,
    titleCard: "Construcción General",
    descriptionCard:
      "Desarrollamos proyectos completos con materiales y mano de obra calificada.",
  },

  {
    icon: FaRulerCombined,
    titleCard: "Medición y Planos",
    descriptionCard:
      "Levantamiento de medidas y apoyo técnico para proyectos de construcción.",
  },

  {
    icon: FaBuilding,
    titleCard: "Proyectos Residenciales",
    descriptionCard:
      "Construcción y adecuación de viviendas, apartamentos y edificios.",
  },

  {
    icon: FaDraftingCompass,
    titleCard: "Diseño Arquitectónico",
    descriptionCard:
      "Diseños modernos adaptados a tus necesidades y presupuesto.",
  },

  {
    icon: FaTruck,
    titleCard: "Transporte de Material",
    descriptionCard:
      "Logística y transporte eficiente de materiales para tu obra.",
  },

  {
    icon: FaCheckCircle,
    titleCard: "Garantía y Calidad",
    descriptionCard:
      "Trabajos garantizados con altos estándares de calidad y cumplimiento.",
  },
];


//Informacion imagenes antes/despues
export const projects = [
  {
    before:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    after:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },

  {
    before:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    after:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },

  {
    before:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    after:
      "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },

  {
    before:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    after:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118",
  },

  {
    before:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    after:
      "https://images.unsplash.com/photo-1464890100898-a385f744067f",
  },

  {
    before:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
    after:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
]


//CadrFeatures Data
import { FaRocket, FaLock, FaBolt, FaMobileAlt } from "react-icons/fa";

export const featuresData = [
  {
    icon: FaRocket,
    title: "Rendimiento rápido",
    description:
      "Optimización avanzada para que tu aplicación cargue en milisegundos y tenga mejor experiencia de usuario.",
  },
  {
    icon: FaLock,
    title: "Seguridad garantizada",
    description:
      "Protección de datos con estándares modernos para mantener tu información siempre segura.",
  },
  {
    icon: FaBolt,
    title: "Alta eficiencia",
    description:
      "Procesos optimizados que reducen consumo de recursos y mejoran la productividad del sistema.",
  },
  {
    icon: FaMobileAlt,
    title: "Diseño responsive",
    description:
      "Interfaz adaptable a cualquier dispositivo: móvil, tablet o escritorio sin perder calidad.",
  },
];

//Data para el carrusel de proyectos


export const datosProyectosMock = [
  {
  id: 1,
  categoria: "Residencial",
  titulo: "Demolición y Construcción de Obra Nueva 'Retiro Bajo'",
  descripcion:
    "Demolición controlada de la estructura existente y construcción de una nueva edificación residencial, incorporando sistemas estructurales modernos, acabados de alta calidad y cumplimiento de la normativa vigente.",
  imgAntes: "retiro.jpeg",
  imgDespues: "retiro2.jpeg",
  ubicacion: "Zona Residencial Retiro Bajo",
  plazo: "7 Meses (Entregado a tiempo)",
  dimension: "280m²",
  reto:"Ejecutar la demolición de manera segura en un entorno urbano y optimizar los tiempos de construcción sin afectar las propiedades vecinas."
},
  {
  id: 2,
  categoria: "Residencial",
  titulo: "Construcción de Apartamento y Estructura Liviana",
  descripcion:
    "Diseño y construcción de un apartamento residencial utilizando sistemas de estructura liviana, optimizando tiempos de ejecución, resistencia estructural y confort para los habitantes.",
  imgAntes: "centro.jpeg",
  imgDespues: "centro2.jpeg",
  ubicacion: "Zona Residencial Urbana",
  plazo: "3 Meses",
  dimension: "56 m²",
  reto:
    "Garantizar la estabilidad y durabilidad de la estructura liviana, integrando instalaciones eléctricas e hidrosanitarias sin afectar la distribución arquitectónica del proyecto."
},
  {
    id: 3,
    categoria: "Infraestructura",
    titulo: "Muro de contencion parcela en piedra de rio",
    descripcion: "Adecuación integral de layouts y acabados sanitarios conforme a normativas internacionales para procesamiento de alimentos a gran escala.",
    imgAntes: "parcela.jpeg",
    imgDespues: "parcela2.jpeg",
    ubicacion: "Parcela-Calibio Ramal-Valverde",
    plazo: "1 Mes",
    dimension: "50 m²",
    reto: "Instalación de trampas de grasa masivas y pisos de resina epóxica en jornadas nocturnas."
  }
];