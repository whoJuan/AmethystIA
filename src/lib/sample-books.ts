export interface BookPage {
  chapter?: string
  content: string
}

export interface Comment {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  timestamp: Date
  likes: number
}

export interface Book {
  id: string
  title: string
  author: string
  cover: string
  description: string
  pages: BookPage[]
  genre: string[]
  rating: number
  totalRatings: number
  likes: number
  views: number
  publishedDate: Date
  tags: string[]
  comments: Comment[]
}

export const books: Book[] = [
  {
    id: "quantum-dreams",
    title: "Sueños Cuánticos",
    author: "Elena Martínez",
    cover: "/futuristic-book-cover-quantum-dreams.jpg",
    description: "Una historia de ciencia ficción sobre los límites de la realidad y la consciencia.",
    genre: ["Ciencia Ficción", "Thriller Psicológico"],
    rating: 4.8,
    totalRatings: 1247,
    likes: 3421,
    views: 15678,
    publishedDate: new Date("2024-03-15"),
    tags: ["multiverso", "consciencia", "realidad cuántica", "aventura"],
    comments: [
      {
        id: "c1",
        userId: "u1",
        userName: "Alex Rivera",
        userAvatar: "/placeholder.svg?height=40&width=40",
        content: "¡Increíble! La forma en que explora el concepto del multiverso es fascinante. No pude dejar de leer.",
        timestamp: new Date("2024-10-01"),
        likes: 45,
      },
      {
        id: "c2",
        userId: "u2",
        userName: "Sofia Chen",
        userAvatar: "/placeholder.svg?height=40&width=40",
        content:
          "La ciencia detrás de la historia está muy bien investigada. Como física, aprecio la atención al detalle.",
        timestamp: new Date("2024-10-03"),
        likes: 32,
      },
    ],
    pages: [
      {
        chapter: "Capítulo 1: El Despertar",
        content: `La luz de la mañana se filtraba a través de las cortinas translúcidas, creando patrones danzantes en las paredes de mi habitación. Pero algo era diferente. Los patrones no se movían con el viento, sino que parecían responder a mis pensamientos.

Me incorporé lentamente en la cama, observando cómo las partículas de polvo suspendidas en el aire brillaban con una intensidad antinatural. Cada una de ellas parecía contener un universo entero, girando y pulsando con vida propia.

"¿Estoy soñando?" murmuré, pero mi voz sonó extraña, como si viniera de múltiples dimensiones a la vez.

El reloj digital en mi mesita de noche mostraba números que cambiaban constantemente, nunca estableciéndose en una hora específica. 07:42... 13:15... 23:08... Todo al mismo tiempo y ninguno a la vez.

Fue entonces cuando lo comprendí. No estaba despertando de un sueño. Estaba despertando a una realidad mucho más amplia de lo que jamás había imaginado.`,
      },
      {
        content: `Los científicos del Proyecto Ónix habían advertido sobre los efectos secundarios de la terapia de consciencia cuántica. "Podrías experimentar desorientación temporal", habían dicho. "Visiones de realidades paralelas. Nada de qué preocuparse."

Pero esto era diferente. Esto era real.

Me levanté de la cama y caminé hacia el espejo. Mi reflejo me observaba, pero no era exactamente yo. Era yo en mil versiones diferentes, superpuestas como capas de realidad transparente. En una, llevaba el uniforme de la academia. En otra, cicatrices cubrían mi rostro. En otra más, mis ojos brillaban con un azul eléctrico imposible.

"Hola, Maya", dijo mi reflejo. Todas las versiones hablaron al unísono. "Bienvenida al verdadero despertar."

Retrocedí, el corazón latiendo con fuerza. Esto no podía estar pasando. Los tratamientos eran seguros. Probados. Aprobados por el Consejo Mundial de Ética Científica.

Pero mientras observaba mis manos temblorosas, vi cómo la realidad misma comenzaba a deshilacharse en los bordes, revelando algo más allá. Algo vasto. Algo infinito.`,
      },
      {
        chapter: "Capítulo 2: Entre Mundos",
        content: `El laboratorio estaba exactamente como lo recordaba, y al mismo tiempo, completamente diferente. Las paredes blancas y estériles ahora parecían translúcidas, mostrando capas de otros laboratorios, otras versiones de este mismo espacio existiendo simultáneamente.

La Dra. Chen me esperaba junto al escáner cuántico, su expresión una mezcla de preocupación y fascinación científica.

"Maya, tus lecturas son... extraordinarias", dijo, señalando los monitores que mostraban patrones de ondas cerebrales que desafiaban toda lógica conocida. "Tu consciencia está resonando en múltiples frecuencias cuánticas a la vez. Eres la primera persona en lograr una sincronización completa."

"¿Sincronización con qué?" pregunté, aunque parte de mí ya conocía la respuesta.

"Con el multiverso", respondió ella, su voz apenas un susurro. "Maya, estás experimentando todas tus vidas posibles simultáneamente. Cada decisión que has tomado, cada camino que no elegiste... todos existen, y ahora puedes percibirlos todos."

Me senté en la silla de examen, sintiendo el peso de infinitas realidades presionando contra mi consciencia. En una de ellas, nunca me había ofrecido como voluntaria para el experimento. En otra, el experimento había salido terriblemente mal. En otra más, había cambiado el mundo.`,
      },
      {
        content: `"¿Cómo detengo esto?" pregunté, aferrándome a los brazos de la silla mientras las realidades se arremolinaban a mi alrededor.

La Dra. Chen se arrodilló frente a mí, sus ojos llenos de una comprensión que iba más allá de lo científico. "No puedes detenerlo, Maya. Pero puedes aprender a navegarlo. Piensa en ello como... aprender a nadar en un océano infinito de posibilidades."

"¿Y si me ahogo?"

"Entonces todas las versiones de ti se ahogarán", dijo simplemente. "Pero no creo que eso vaya a pasar. Hay una razón por la que tu consciencia fue la única capaz de soportar la sincronización completa. Eres más fuerte de lo que crees. En todas las realidades."

Cerré los ojos y respiré profundamente. Podía sentirlas ahora, todas esas otras Mayas. La científica brillante. La artista rebelde. La madre amorosa. La soldado valiente. Todas ellas eran yo. Todas ellas siempre habían sido yo.

Y en ese momento de claridad perfecta, comprendí que no estaba perdiendo mi identidad. La estaba expandiendo.

Abrí los ojos, y por primera vez desde el despertar, las realidades superpuestas comenzaron a enfocarse. No desaparecieron, pero ahora podía distinguirlas, separarlas, elegir en cuál concentrarme.

"Estoy lista", dije. "Enséñame a nadar."`,
      },
      {
        chapter: "Capítulo 3: El Navegante",
        content: `Las siguientes semanas fueron un torbellino de descubrimientos y entrenamiento. La Dra. Chen me enseñó técnicas de meditación cuántica, formas de anclar mi consciencia en esta realidad mientras exploraba las otras.

"Piensa en tu consciencia como un faro", explicaba durante nuestras sesiones. "Puede proyectar su luz a través de múltiples realidades, pero siempre debe tener una base sólida aquí."

Aprendí a saltar entre realidades con un pensamiento, observando las infinitas variaciones de mi vida. Vi mundos donde la humanidad había alcanzado las estrellas, y otros donde apenas habíamos sobrevivido. Vi versiones de mí misma que eran heroínas, villanas, y todo lo intermedio.

Pero lo más fascinante era descubrir que no estaba sola. Había otros como yo, otros navegantes cuánticos que habían logrado la sincronización. Nos encontrábamos en los espacios entre realidades, en los pliegues del multiverso donde todas las posibilidades se encontraban.

Uno de ellos era Marcus, un físico que había logrado la sincronización años antes que yo. Se convirtió en mi mentor, guiándome a través de los aspectos más peligrosos de la navegación cuántica.`,
      },
      {
        content: `"Hay reglas", me advirtió Marcus durante uno de nuestros encuentros en el espacio intermedio, un lugar que existía entre todas las realidades. "No puedes cambiar el pasado de una realidad sin crear una nueva rama. No puedes fusionar dos realidades sin consecuencias catastróficas. Y nunca, jamás, intentes existir completamente en dos realidades a la vez."

"¿Qué pasa si lo haces?" pregunté.

Su expresión se oscureció. "Conocí a alguien que lo intentó. Su consciencia se fragmentó en millones de pedazos, esparcidos a través del multiverso. Todavía puedo sentir sus ecos, gritando en el vacío entre mundos."

Un escalofrío recorrió mi columna vertebral. El poder que había ganado era asombroso, pero también aterrador. Un paso en falso y podría perderme para siempre en el infinito.

"Pero hay algo más que debes saber", continuó Marcus, su tono volviéndose serio. "Hay otros que han descubierto la navegación cuántica. Y no todos tienen buenas intenciones. Algunos quieren usar este poder para controlar el multiverso, para colapsar todas las realidades en una sola bajo su dominio."

"¿Quiénes son?"

"Se llaman a sí mismos los Convergentes. Y están buscando navegantes como nosotros para reclutarnos... o eliminarnos."`,
      },
      {
        chapter: "Epílogo: Infinitas Posibilidades",
        content: `Meses después de mi despertar, me encontraba en la azotea del laboratorio, observando la ciudad que se extendía ante mí. Pero ya no era solo una ciudad. Era millones de ciudades, cada una ligeramente diferente, todas existiendo en el mismo espacio pero en diferentes frecuencias de realidad.

Había aprendido mucho desde aquel primer día confuso. Había dominado el arte de la navegación cuántica, había hecho aliados entre los otros navegantes, y había comenzado a comprender el verdadero alcance del multiverso.

Los Convergentes seguían siendo una amenaza, pero ahora estábamos preparados. Un grupo de navegantes dedicados a proteger la integridad del multiverso, a asegurar que todas las realidades pudieran existir en armonía.

La Dra. Chen se unió a mí en la azotea, trayendo dos tazas de café humeante.

"¿En qué piensas?" preguntó.

"En todas las versiones de mí que nunca llegaron a este momento", respondí. "Las que tomaron diferentes decisiones. Las que nunca se ofrecieron como voluntarias para el experimento."

"¿Te arrepientes?"

Sonreí, sintiendo la vastedad del multiverso pulsando a mi alrededor. "No. Porque ahora sé que todas esas versiones de mí también están viviendo sus propias aventuras, tomando sus propias decisiones, siendo felices a su manera."

"Esa es la belleza del multiverso", dijo la Dra. Chen. "Infinitas posibilidades. Infinitas oportunidades. Infinitas versiones de nosotros mismos, todas viviendo, todas reales."

Alcé mi taza en un brindis silencioso hacia todas las otras Mayas en todas las otras realidades. Y en algún lugar, en el espacio entre mundos, sentí que todas ellas brindaban de vuelta.

El viaje apenas comenzaba. Y tenía toda la eternidad para explorarlo.

FIN`,
      },
    ],
  },
  {
    id: "neon-nights",
    title: "Noches de Neón",
    author: "Carlos Vega",
    cover: "/cyberpunk-neon-city-book-cover.jpg",
    description: "Un thriller cyberpunk ambientado en una metrópolis futurista donde la información es poder.",
    genre: ["Cyberpunk", "Thriller", "Acción"],
    rating: 4.6,
    totalRatings: 892,
    likes: 2156,
    views: 9834,
    publishedDate: new Date("2024-05-20"),
    tags: ["cyberpunk", "hackers", "distopía", "tecnología"],
    comments: [
      {
        id: "c3",
        userId: "u3",
        userName: "Marco Diaz",
        userAvatar: "/placeholder.svg?height=40&width=40",
        content: "La atmósfera cyberpunk está perfectamente capturada. Me recuerda a los clásicos del género.",
        timestamp: new Date("2024-10-05"),
        likes: 28,
      },
    ],
    pages: [
      {
        chapter: "Capítulo 1: La Ciudad que Nunca Duerme",
        content: `Las luces de neón pintaban las calles mojadas con colores imposibles. Azul eléctrico, rosa fucsia, verde ácido. Nueva Tokio nunca dormía, y yo tampoco.

Mi nombre es Kai, y soy un corredor de datos. En esta ciudad, la información vale más que el oro, más que la vida misma. Y yo soy uno de los mejores en conseguirla.

Esta noche tenía un trabajo. Simple en teoría: infiltrarme en los servidores de Omnicorp y extraer archivos sobre su nuevo proyecto de implantes neurales. El pago era suficiente para mantenerme fuera de las calles durante meses.

Pero en Nueva Tokio, nada es nunca tan simple como parece.`,
      },
      {
        content: `Me ajusté las gafas de realidad aumentada y activé mi interfaz neural. El mundo digital se superpuso al físico, líneas de código flotando en el aire como luciérnagas digitales.

La entrada trasera de la torre Omnicorp estaba custodiada por sistemas de seguridad de última generación. Pero yo tenía algo mejor que tecnología de última generación: tenía experiencia.

Mis dedos danzaron en el aire, manipulando código invisible. Los firewalls cayeron uno por uno, como fichas de dominó digitales. En cinco minutos, estaba dentro.

Pero entonces, algo salió mal. Una alarma silenciosa que no debería haber estado ahí. Un sistema de seguridad que no aparecía en los planos.

Y de repente, supe que había sido una trampa desde el principio.`,
      },
    ],
  },
  {
    id: "echoes-of-eternity",
    title: "Ecos de la Eternidad",
    author: "Isabella Romano",
    cover: "/fantasy-book-cover-with-ancient-ruins.jpg",
    description: "Una épica fantasía sobre una arqueóloga que descubre un artefacto que puede reescribir la historia.",
    genre: ["Fantasía", "Aventura", "Misterio"],
    rating: 4.9,
    totalRatings: 2341,
    likes: 5678,
    views: 23456,
    publishedDate: new Date("2024-01-10"),
    tags: ["fantasía épica", "arqueología", "magia antigua", "aventura"],
    comments: [
      {
        id: "c4",
        userId: "u4",
        userName: "Luna Starweaver",
        userAvatar: "/placeholder.svg?height=40&width=40",
        content: "¡Obra maestra! La construcción del mundo es increíble y los personajes son inolvidables.",
        timestamp: new Date("2024-09-28"),
        likes: 67,
      },
      {
        id: "c5",
        userId: "u5",
        userName: "David Park",
        userAvatar: "/placeholder.svg?height=40&width=40",
        content: "No pude dejar de leer. El giro al final del capítulo 5 me dejó sin palabras.",
        timestamp: new Date("2024-09-30"),
        likes: 54,
      },
    ],
    pages: [
      {
        chapter: "Prólogo: El Descubrimiento",
        content: `El polvo del desierto se arremolinaba alrededor de mis botas mientras descendía por la escalera de piedra recién descubierta. Cada paso resonaba en la oscuridad, un eco que parecía viajar no solo a través del espacio, sino también del tiempo.

Había pasado cinco años buscando este lugar. Cinco años siguiendo pistas en textos antiguos, descifrando mapas olvidados, ignorando a colegas que decían que estaba persiguiendo mitos.

Pero ahora, mientras mi linterna iluminaba las paredes cubiertas de inscripciones que ningún idioma moderno podía traducir, supe que había encontrado algo más grande que cualquier descubrimiento arqueológico en la historia.

Había encontrado la Cámara de los Ecos. Y con ella, el poder de reescribir la realidad misma.`,
      },
    ],
  },
  {
    id: "whispers-in-the-void",
    title: "Susurros en el Vacío",
    author: "James Morrison",
    cover: "/space-horror-book-cover-dark.jpg",
    description: "Terror espacial: una tripulación descubre que no están solos en las profundidades del espacio.",
    genre: ["Terror", "Ciencia Ficción", "Suspense"],
    rating: 4.7,
    totalRatings: 1567,
    likes: 3890,
    views: 18234,
    publishedDate: new Date("2024-02-14"),
    tags: ["terror espacial", "suspense", "misterio", "horror cósmico"],
    comments: [
      {
        id: "c6",
        userId: "u6",
        userName: "Emma Watson",
        userAvatar: "/placeholder.svg?height=40&width=40",
        content: "Aterrador de la mejor manera. No pude dormir después de leer el capítulo 3.",
        timestamp: new Date("2024-10-02"),
        likes: 41,
      },
    ],
    pages: [
      {
        chapter: "Día 1: Señal Desconocida",
        content: `La estación espacial Prometheus flotaba en silencio en el vacío, a 400 millones de kilómetros de la Tierra. Habíamos estado aquí durante seis meses, realizando experimentos de rutina, cuando la señal llegó.

No era como nada que hubiéramos escuchado antes. No era radio. No era ninguna frecuencia conocida. Era... algo más. Algo que resonaba directamente en nuestras mentes.

"¿Lo escuchan?" preguntó la Dra. Sarah Chen, su rostro pálido en la luz azul de los monitores.

Todos asentimos. Porque todos lo escuchábamos. Un susurro en el vacío. Palabras en un idioma que no debería existir, pero que de alguna manera comprendíamos perfectamente.

"Venimos. Esperamos. Hambrientos."

Y entonces, las luces comenzaron a parpadear.`,
      },
    ],
  },
  {
    id: "the-last-garden",
    title: "El Último Jardín",
    author: "Yuki Tanaka",
    cover: "/post-apocalyptic-nature-book-cover.jpg",
    description:
      "En un mundo post-apocalíptico, una botánica lucha por preservar las últimas semillas de la humanidad.",
    genre: ["Post-Apocalíptico", "Drama", "Esperanza"],
    rating: 4.8,
    totalRatings: 1876,
    likes: 4321,
    views: 19876,
    publishedDate: new Date("2024-04-05"),
    tags: ["post-apocalíptico", "naturaleza", "supervivencia", "esperanza"],
    comments: [
      {
        id: "c7",
        userId: "u7",
        userName: "Oliver Green",
        userAvatar: "/placeholder.svg?height=40&width=40",
        content: "Hermoso y desgarrador a la vez. Una historia sobre la resiliencia de la vida.",
        timestamp: new Date("2024-10-04"),
        likes: 39,
      },
    ],
    pages: [
      {
        chapter: "Primavera: Nuevos Comienzos",
        content: `El búnker subterráneo había sido mi hogar durante tres años. Tres años desde que el mundo de arriba se volvió inhabitable. Tres años cuidando el último jardín de la humanidad.

Las luces LED imitaban el ciclo del sol, bañando las plantas en un resplandor artificial pero efectivo. Tomates, lechugas, trigo, flores. Cada una crecía en su contenedor hidropónico, sus raíces suspendidas en soluciones nutritivas cuidadosamente balanceadas.

Pero no era suficiente. Nunca sería suficiente. Necesitaba tierra real. Cielo real. Lluvia real.

Y hoy, por primera vez en tres años, los sensores de radiación mostraban niveles seguros en la superficie.

Era hora de plantar el último jardín bajo el sol verdadero.`,
      },
    ],
  },
  {
    id: "code-breakers",
    title: "Rompedores de Código",
    author: "Aisha Patel",
    cover: "/hacker-thriller-book-cover.jpg",
    description: "Un grupo de hackers adolescentes descubre una conspiración global que amenaza la privacidad mundial.",
    genre: ["Thriller Tecnológico", "Misterio", "Acción"],
    rating: 4.5,
    totalRatings: 1123,
    likes: 2789,
    views: 12456,
    publishedDate: new Date("2024-06-18"),
    tags: ["hackers", "conspiración", "tecnología", "thriller"],
    comments: [],
    pages: [
      {
        chapter: "Capítulo 1: El Backdoor",
        content: `Mi nombre es Zara, tengo 17 años, y acabo de hackear el servidor más seguro del mundo por accidente.

Bueno, no exactamente por accidente. Estaba buscando vulnerabilidades en sistemas de seguridad como proyecto para la feria de ciencias. Pero no esperaba encontrar una puerta trasera en la infraestructura de comunicaciones globales.

Y definitivamente no esperaba que alguien más ya la estuviera usando.

Los archivos que encontré eran aterradores. Registros de llamadas, mensajes, ubicaciones. Millones de personas siendo monitoreadas sin su conocimiento. Y en el centro de todo, un nombre en código: Proyecto Panóptico.

Necesitaba ayuda. Llamé a mi equipo: Marcus el genio de la criptografía, Lily la experta en ingeniería social, y Dev el maestro de las redes.

Juntos, íbamos a exponer la verdad. O morir intentándolo.`,
      },
    ],
  },
]