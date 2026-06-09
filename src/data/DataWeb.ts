import {
  FaHardHat,
  FaPaintRoller,
  FaTools,
  FaDoorClosed,
  FaHome,
  FaHammer,
 //FaRulerCombined,
  //FaBuilding,
  //FaDraftingCompass,
  //FaTruck,
  //FaCheckCircle,
} from "react-icons/fa";

export const ServicesData = [

  {
    icon: FaHammer,
    titleCard: "Construcción General",
    descriptionCard:"Desarrollamos proyectos completos con materiales y mano de obra calificada.",
  },
  {
    icon: FaTools,
    titleCard: "Acabados de Obra",
    descriptionCard:"Detalles finales de alta calidad para interiores y exteriores.",
  },
  {
    icon: FaDoorClosed,
    titleCard: "Instalación de Puertas",
    descriptionCard:"Montaje profesional de puertas de madera, aluminio y seguridad.",
  },

  {
    icon: FaHome,
    titleCard: "Remodelaciones",
    descriptionCard:
      "Transformamos espacios residenciales y comerciales modernos y funcionales.",
  },

  {
    icon: FaHardHat,
    titleCard: "Obra Gris",
    descriptionCard:"Construcción estructural, cimentación, columnas, vigas y levantamiento de muros.",
  },

  {
    icon: FaPaintRoller,
    titleCard: "Obra Blanca",
    descriptionCard:"Estuco, pintura, enchapes y acabados interiores listos para habitar.",
  },


 /* {
    icon: FaRulerCombined,
    titleCard: "Medición y Planos",
    descriptionCard:
      "Levantamiento de medidas y apoyo técnico para proyectos de construcción.",
  },*/

  /*{
    icon: FaBuilding,
    titleCard: "Proyectos Residenciales",
    descriptionCard:
      "Construcción y adecuación de viviendas, apartamentos y edificios.",
  },*/

 /* {
    icon: FaDraftingCompass,
    titleCard: "Diseño Arquitectónico",
    descriptionCard:
      "Diseños modernos adaptados a tus necesidades y presupuesto.",
  },*/

  /*{
    icon: FaTruck,
    titleCard: "Transporte de Material",
    descriptionCard:
      "Logística y transporte eficiente de materiales para tu obra.",
  },*/

  /*{
    icon: FaCheckCircle,
    titleCard: "Garantía y Calidad",
    descriptionCard:
      "Trabajos garantizados con altos estándares de calidad y cumplimiento.",
  },*/
];


//Informacion imagenes antes/despues



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
  titulo: "Muro de Contención en Parcela con Piedra de Río",
  descripcion:
    "Construcción de un muro de contención en una parcela utilizando piedra de río, diseñado para estabilizar el terreno, prevenir la erosión y mejorar la seguridad y funcionalidad del espacio.",
  imgAntes: "parcela.jpeg",
  imgDespues: "parcela2.jpeg",
  ubicacion: "Parcela-Calibio Ramal-Valverde",
  plazo: "1 Mes",
  dimension: "50 m²",
  reto:
    "Adaptar la construcción a las condiciones naturales del terreno, garantizando la resistencia y durabilidad de la estructura mediante la correcta selección y colocación de piedra de río."
  }
];