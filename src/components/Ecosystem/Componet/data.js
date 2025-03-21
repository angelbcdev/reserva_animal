import {
  bosqueAnimalBottom,
  bosqueAnimalCenter,
  bosqueAnimalLeft,
  bosqueAnimalRightDown,
  bosqueAnimalRigthTop,
} from "../../../assets/ecosystem/bosques";
import {
  desiertoAnimalBottom,
  desiertoAnimalCenter,
  desiertoAnimalLeft,
  desiertoAnimalRightDown,
  desiertoAnimalRigthTop,
} from "../../../assets/ecosystem/decierto";
import {
  montañaAnimalBottom,
  montañaAnimalCenter,
  montañaAnimalLeft,
  montañaAnimalRightDown,
  montañaAnimalRightTop,
} from "../../../assets/ecosystem/montaña";
import {
  oceanoAnimalBottom,
  oceanoAnimalCenter,
  oceanoAnimalLeft,
  oceanoAnimalRightDown,
  oceanoAnimalRigthTop,
} from "../../../assets/ecosystem/oceano";
import {
  sabanaAnimalBottom,
  sabanaAnimalCenter,
  sabanaAnimalLeft,
  sabanaAnimalRightDown,
  sabanaAnimalRightTop,
} from "../../../assets/ecosystem/sabana";

const textSabanas = `Los ecosistemas de sabanas y pastizales en América Latina son verdaderos tesoros de biodiversidad, destacándose por su amplitud y singularidad. Con estaciones secas y húmedas, estos entornos dinámicos impulsan la adaptación de la flora y fauna a las cambiantes condiciones climáticas. Esta diversidad brinda un hábitat propicio para una variedad de mamíferos, aves, reptiles e insectos. Los habitantes de estas tierras abiertas han evolucionado con astutas adaptaciones, desde sistemas de camuflaje hasta complejos patrones migratorios y sociales.
Estos ecosistemas desempeñan un papel vital en la conservación del suelo, además de servir como refugio para especies en peligro de extinción. Sin embargo, la biodiversidad de estos ecosistemas enfrenta desafíos significativos, incluyendo la pérdida de hábitat debido a la expansión agrícola y la caza. La conservación de estos paisajes no solo preserva la diversidad biológica única, sino que también garantiza la sostenibilidad a largo plazo de estos ecosistemas esenciales para la salud del planeta.`;
const textDesiertos =
  "Los desiertos de América Latina son ecosistemas fascinantes caracterizados por condiciones extremas de aridez y temperaturas variables. A pesar de su aparente inhospitalidad, estos entornos albergan una variedad única de vida adaptada a la escasez de agua y los cambios térmicos. Los animales que habitan en los desiertos latinoamericanos han desarrollado estrategias de supervivencia únicas, como adaptaciones fisiológicas y comportamentales para conservar agua, así como la capacidad de buscar alimentos en condiciones aparentemente hostiles. Estos ecosistemas son esenciales para mantener el equilibrio natural y representan un asombroso ejemplo de la capacidad de la vida para prosperar en condiciones adversas. Sin embargo, la presión humana, la desertificación y el cambio climático plantean desafíos significativos para la preservación de estos frágiles ecosistemas. La conciencia y la implementación de prácticas de conservación sostenibles son cruciales para garantizar la supervivencia a largo plazo de los desiertos latinoamericanos y su biodiversidad única.";
const textMintañas =
  "Las montañas de América Latina constituyen ecosistemas únicos que albergan una diversidad de formas de vida adaptadas a las condiciones específicas de altitud y terreno montañoso. En estas regiones, la fauna ha desarrollado características particulares para sobrevivir, como la capacidad de habitar en elevaciones extremas y adaptarse a cambios climáticos abruptos. La interacción entre estos animales y su entorno desempeña un papel crucial en la estabilidad de los ecosistemas de montaña, contribuyendo a la regulación de poblaciones y a la preservación del equilibrio natural. Sin embargo, la presión humana, que incluye la expansión de la agricultura y la infraestructura, amenaza la integridad de estos hábitats montañosos. La conservación efectiva de las montañas en América Latina requiere un enfoque integral que promueva prácticas sostenibles, proteja las áreas naturales y fomente la coexistencia armoniosa entre las comunidades locales y la vida silvestre en estos entornos de gran altitud.";
const textOceanos =
  "Los ecosistemas acuáticos de América Latina, que abarcan océanos, ríos y lagunas, desempeñan un papel vital en la salud global de nuestro planeta. La diversidad de vida en estos ambientes acuáticos contribuye a mantener el equilibrio ecológico y sustentar la biodiversidad. Los océanos actúan como reguladores climáticos y sumideros de carbono, mientras que los ríos y lagunas son fuentes cruciales de agua dulce y hábitats ricos en vida. La interconexión entre estos cuerpos de agua forma una red compleja donde la fauna marina y fluvial desempeña roles fundamentales en la cadena alimentaria y en los ciclos biogeoquímicos. Sin embargo, la sobreexplotación pesquera, la contaminación, la pérdida de hábitat y el cambio climático amenazan la salud de estos ecosistemas acuáticos en América Latina. La conservación efectiva requiere esfuerzos coordinados a nivel internacional, políticas de gestión sostenible y la promoción de prácticas que aseguren la preservación a largo plazo de estos vitales ambientes acuáticos.";
const textBosques =
  "Los bosques y selvas de América Latina forman ecosistemas exuberantes y vitales que albergan una increíble variedad de flora y fauna. La interconexión de la vida en estos ambientes es esencial para el equilibrio ecológico. Los animales que habitan en los bosques y selvas desempeñan roles cruciales en la polinización, dispersión de semillas y regulación de poblaciones, contribuyendo a la salud y sostenibilidad de estos ecosistemas. Sin embargo, la deforestación, la explotación insostenible de recursos y el cambio climático amenazan la estabilidad de estos hábitats. La conservación efectiva implica la protección de áreas naturales, la promoción de prácticas forestales sostenibles y la concientización sobre la importancia de preservar la biodiversidad en los bosques y selvas de América Latina. La preservación de estos ecosistemas no solo es esencial para la supervivencia de numerosas especies, sino que también contribuye directamente al bienestar y equilibrio ambiental a nivel global.";
const allEcosystem = [];
export const MAIN_AREA = "SABANAS";

//

allEcosystem.push({
  id: 1,
  title: "SABANAS Y PASTIZALES",
  area: "SABANAS",
  text: textSabanas,
  banerFondo: "",

  path: "sabana-pastizales",
  allAnimals: {
    left: {
      img: sabanaAnimalLeft,
      link: "/Animals/tapir",
      name: "Tapir de Baird",
    },
    center: {
      img: sabanaAnimalCenter,
      link: "/Animals/huemul",
      name: "Huemul",
    },
    right: {
      top: {
        img: sabanaAnimalRightTop,
        link: "/Animals/tatu",
        name: "Tatú Gigante",
      },
      down: {
        img: sabanaAnimalRightDown,
        link: "/Animals/cardenal",
        name: "Cardenal  Amarillo",
      },
    },
    bottom: {
      img: sabanaAnimalBottom,
      link: "/Animals/hormiguero",
      name: "Oso homiguero gigante",
    },
  },
});
allEcosystem.push({
  id: 2,
  title: "DESIERTOS",
  area: "DESIERTO",
  text: textDesiertos,
  banerFondo: "",

  path: "desiertos",
  allAnimals: {
    left: {
      img: desiertoAnimalLeft,
      link: "#",
      name: "Tortuga del desierto",
    },
    center: {
      img: desiertoAnimalCenter,
      link: "#",
      name: "Condor andino",
    },
    right: {
      top: {
        img: desiertoAnimalRigthTop,
        link: "#",
        name: "Gato de La Pampa",
      },
      down: {
        img: desiertoAnimalRightDown,
        link: "#",
        name: "Iguana Rosada",
      },
    },
    bottom: {
      img: desiertoAnimalBottom,
      link: "#",
      name: "Zorro costeño",
    },
  },
});
allEcosystem.push({
  id: 3,
  title: "MONTAÑAS",
  area: "MONTAÑAS",
  text: textMintañas,

  path: "montañas",
  banerFondo: "",

  allAnimals: {
    left: {
      img: montañaAnimalLeft,
      link: "#",
      name: "Escuercito achaleño",
    },
    center: {
      img: montañaAnimalCenter,
      link: "#",
      name: "Chinchilla del altiplano",
    },
    right: {
      top: {
        img: montañaAnimalRightTop,
        link: "#",
        name: "Serpiente cascabel de Isla Santa Catalina",
      },
      down: {
        img: montañaAnimalRightDown,
        link: "#",
        name: "Aguilucho",
      },
    },
    bottom: {
      img: montañaAnimalBottom,
      link: "#",
      name: "Gato andino",
    },
  },
});
allEcosystem.push({
  id: 4,
  title: "OCEANOS, RIOS Y LAGUNAS",
  area: "OCEANOS",
  text: textOceanos,
  banerFondo: "",

  path: "oceanos-rios",
  allAnimals: {
    left: {
      img: oceanoAnimalLeft,
      link: "#",
      name: "Lobo peletero de Galápagos ",
    },
    center: {
      img: oceanoAnimalCenter,
      link: "#",
      name: "Marsopa espinosa",
    },
    right: {
      top: {
        img: oceanoAnimalRigthTop,
        link: "#",
        name: "Tortuga Laúd",
      },
      down: {
        img: oceanoAnimalRightDown,
        link: "#",
        name: "Mantarraya gigante",
      },
    },
    bottom: {
      img: oceanoAnimalBottom,
      link: "#",
      name: "Tiburón ballena",
    },
  },
});
allEcosystem.push({
  id: 5,
  title: "BOSQUES Y SELVAS",
  area: "BOSQUES",
  text: textBosques,
  banerFondo: "",

  path: "bosques",
  allAnimals: {
    left: {
      img: bosqueAnimalLeft,
      link: "#",
      name: "Mono nocturno andino",
    },
    center: {
      img: bosqueAnimalCenter,
      link: "#",
      name: "Mono aullador",
    },
    right: {
      top: {
        img: bosqueAnimalRigthTop,
        link: "#",
        name: "Tamarino calvo",
      },
      down: {
        img: bosqueAnimalRightDown,
        link: "#",
        name: "Ocelote",
      },
    },
    bottom: {
      img: bosqueAnimalBottom,
      link: "#",
      name: "Oso prerezoso de tres dedos",
    },
  },
});

export default allEcosystem;
