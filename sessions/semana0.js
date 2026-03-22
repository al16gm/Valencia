// SESSIÓ 0 — Vocabulari Essencial A2
// Sessió especial: no segueix l'estructura de gramàtica/exercicis
// sinó que és un glossari interactiu temàtic per bloc MCER A2
SESSIONS.push({
  id: 'week-0', num: 0,
  title: "Vocabulari Essencial A2",
  description: "Les paraules imprescindibles per al nivell A2 organitzades per temes. El teu diccionari de butxaca.",
  topics: ["Vocabulari A2", "Persones i família", "Casa i entorn", "Cos i salut", "Roba", "Menjar i beguda", "Treball i estudis", "Temps lliure", "Ciutat i transport", "Temps atmosfèric", "Números i temps", "Verbs essencials", "Adjectius freqüents"],
  _isVocab: true,

  vocab: [
    {
      bloc: "👤 Persones i família",
      color: "#3b82f6",
      words: [
        {v:"home",         c:"hombre"},       {v:"dona",         c:"mujer"},
        {v:"xiquet/a",     c:"niño/a"},       {v:"bebè",         c:"bebé"},
        {v:"pare",         c:"padre"},        {v:"mare",         c:"madre"},
        {v:"fill/a",       c:"hijo/a"},       {v:"germà/ana",    c:"hermano/a"},
        {v:"avi/àvia",     c:"abuelo/a"},     {v:"net/a",        c:"nieto/a"},
        {v:"oncle/tia",    c:"tío/tía"},      {v:"cosí/cosina",  c:"primo/prima"},
        {v:"marit",        c:"marido"},       {v:"dona (esposa)",c:"esposa/mujer"},
        {v:"parella",      c:"pareja"},       {v:"amic/amiga",   c:"amigo/amiga"},
        {v:"veí/veïna",    c:"vecino/a"},     {v:"company/a",    c:"compañero/a"},
        {v:"persona",      c:"persona"},      {v:"gent",         c:"gente"},
        {v:"jove",         c:"joven"},        {v:"adult",        c:"adulto"},
        {v:"vell/vella",   c:"viejo/a / anciano/a"}
      ]
    },
    {
      bloc: "🏠 Casa i entorn",
      color: "#f59e0b",
      words: [
        {v:"casa",         c:"casa"},         {v:"pis",          c:"piso / apartamento"},
        {v:"habitació",    c:"habitación"},   {v:"cuina",        c:"cocina"},
        {v:"bany",         c:"baño"},         {v:"saló",         c:"salón"},
        {v:"menjador",     c:"comedor"},      {v:"balcó",        c:"balcón"},
        {v:"jardí",        c:"jardín"},       {v:"garatge",      c:"garaje"},
        {v:"porta",        c:"puerta"},       {v:"finestra",     c:"ventana"},
        {v:"escala",       c:"escalera"},     {v:"ascensor",     c:"ascensor"},
        {v:"taula",        c:"mesa"},         {v:"cadira",       c:"silla"},
        {v:"llit",         c:"cama"},         {v:"sofà",         c:"sofá"},
        {v:"armari",       c:"armario"},      {v:"nevera",       c:"nevera"},
        {v:"forn",         c:"horno"},        {v:"rentadora",    c:"lavadora"},
        {v:"llum",         c:"luz / lámpara"},{v:"clau",         c:"llave"},
        {v:"barri",        c:"barrio"},       {v:"carrer",       c:"calle"},
        {v:"plaça",        c:"plaza"},        {v:"edifici",      c:"edificio"}
      ]
    },
    {
      bloc: "💪 Cos i salut",
      color: "#ef4444",
      words: [
        {v:"cap",          c:"cabeza"},       {v:"cara",         c:"cara"},
        {v:"ull/ulls",     c:"ojo/ojos"},     {v:"nas",          c:"nariz"},
        {v:"boca",         c:"boca"},         {v:"orella/es",    c:"oreja/orejas"},
        {v:"cabell",       c:"pelo / cabello"},{v:"coll",        c:"cuello"},
        {v:"muscle",       c:"hombro"},       {v:"braç",         c:"brazo"},
        {v:"mà/mans",      c:"mano/manos"},   {v:"dit",          c:"dedo"},
        {v:"pit",          c:"pecho"},        {v:"esquena",      c:"espalda"},
        {v:"cama",         c:"pierna"},       {v:"peu/peus",     c:"pie/pies"},
        {v:"genoll",       c:"rodilla"},      {v:"cor",          c:"corazón"},
        {v:"malalt/a",     c:"enfermo/a"},    {v:"sa/sana",      c:"sano/a"},
        {v:"dolor",        c:"dolor"},        {v:"febre",        c:"fiebre"},
        {v:"tos",          c:"tos"},          {v:"refredat",     c:"resfriado"},
        {v:"metge/essa",   c:"médico/a"},     {v:"farmàcia",     c:"farmacia"},
        {v:"medicina",     c:"medicina"},     {v:"hospital",     c:"hospital"}
      ]
    },
    {
      bloc: "👕 Roba i complements",
      color: "#8b5cf6",
      words: [
        {v:"camisa",       c:"camisa"},       {v:"samarreta",    c:"camiseta"},
        {v:"pantalons",    c:"pantalones"},   {v:"faldilla",     c:"falda"},
        {v:"vestit",       c:"vestido / traje"},{v:"jaqueta",    c:"chaqueta"},
        {v:"abric",        c:"abrigo"},       {v:"jersei",       c:"jersey / suéter"},
        {v:"sabates",      c:"zapatos"},      {v:"esportives",   c:"zapatillas (deporte)"},
        {v:"botes",        c:"botas"},        {v:"sandàlies",    c:"sandalias"},
        {v:"mitjons",      c:"calcetines"},   {v:"roba interior",c:"ropa interior"},
        {v:"barret",       c:"sombrero"},     {v:"gorra",        c:"gorra"},
        {v:"bufanda",      c:"bufanda"},      {v:"guants",       c:"guantes"},
        {v:"bossa",        c:"bolso / bolsa"},{v:"cinturó",      c:"cinturón"},
        {v:"ulleres",      c:"gafas"},        {v:"rellotge",     c:"reloj"}
      ]
    },
    {
      bloc: "🍽️ Menjar i beguda",
      color: "#10b981",
      words: [
        {v:"pa",           c:"pan"},          {v:"arròs",        c:"arroz"},
        {v:"pasta",        c:"pasta"},        {v:"carn",         c:"carne"},
        {v:"peix",         c:"pescado"},      {v:"ou/ous",       c:"huevo/s"},
        {v:"formatge",     c:"queso"},        {v:"iogurt",       c:"yogur"},
        {v:"llet",         c:"leche"},        {v:"mantequilla",  c:"mantequilla"},
        {v:"oli",          c:"aceite"},       {v:"sal",          c:"sal"},
        {v:"sucre",        c:"azúcar"},       {v:"tomàquet",     c:"tomate"},
        {v:"ceba",         c:"cebolla"},      {v:"all",          c:"ajo"},
        {v:"pebrot",       c:"pimiento"},     {v:"enciam",       c:"lechuga"},
        {v:"taronja",      c:"naranja"},      {v:"poma",         c:"manzana"},
        {v:"plàtan",       c:"plátano"},      {v:"raïm",         c:"uva"},
        {v:"maduixa",      c:"fresa"},        {v:"meló",         c:"melón"},
        {v:"aigua",        c:"agua"},         {v:"vi",           c:"vino"},
        {v:"cervesa",      c:"cerveza"},      {v:"suc",          c:"zumo"},
        {v:"cafè",         c:"café"},         {v:"te",           c:"té"},
        {v:"esmorzar",     c:"desayuno"},     {v:"dinar",        c:"comida / almuerzo"},
        {v:"sopar",        c:"cena"},         {v:"menú",         c:"menú"},
        {v:"plat",         c:"plato"},        {v:"got",          c:"vaso"},
        {v:"tassa",        c:"taza"},         {v:"forqueta",     c:"tenedor"},
        {v:"ganivet",      c:"cuchillo"},     {v:"cullera",      c:"cuchara"}
      ]
    },
    {
      bloc: "💼 Treball i estudis",
      color: "#f97316",
      words: [
        {v:"feina / treball",c:"trabajo"},    {v:"empresa",      c:"empresa"},
        {v:"oficina",      c:"oficina"},      {v:"reunió",       c:"reunión"},
        {v:"jefe/a",       c:"jefe/a"},       {v:"company/a",    c:"compañero/a (trabajo)"},
        {v:"sou",          c:"sueldo"},       {v:"contracte",    c:"contrato"},
        {v:"escola",       c:"escuela"},      {v:"institut",     c:"instituto"},
        {v:"universitat",  c:"universidad"},  {v:"classe",       c:"clase"},
        {v:"professor/a",  c:"profesor/a"},   {v:"alumne/a",     c:"alumno/a"},
        {v:"assignatura",  c:"asignatura"},   {v:"examen",       c:"examen"},
        {v:"notes",        c:"notas"},        {v:"deures",       c:"deberes"},
        {v:"llibre",       c:"libro"},        {v:"quadern",      c:"cuaderno"},
        {v:"bolígraf",     c:"bolígrafo"},    {v:"ordinador",    c:"ordenador"},
        {v:"metge/essa",   c:"médico/a"},     {v:"advocat/da",   c:"abogado/a"},
        {v:"professor/a",  c:"profesor/a"},   {v:"cuiner/a",     c:"cocinero/a"},
        {v:"electricista", c:"electricista"}, {v:"enginyer/a",   c:"ingeniero/a"},
        {v:"comerciant",   c:"comerciante"},  {v:"periodista",   c:"periodista"}
      ]
    },
    {
      bloc: "🎯 Temps lliure i esport",
      color: "#06b6d4",
      words: [
        {v:"esport",       c:"deporte"},      {v:"futbol",       c:"fútbol"},
        {v:"bàsquet",      c:"baloncesto"},   {v:"natació",      c:"natación"},
        {v:"córrer",       c:"correr"},       {v:"ciclisme",     c:"ciclismo"},
        {v:"gimnàs",       c:"gimnasio"},     {v:"platja",       c:"playa"},
        {v:"piscina",      c:"piscina"},      {v:"muntanya",     c:"montaña"},
        {v:"excursió",     c:"excursión"},    {v:"viatge",       c:"viaje"},
        {v:"vacances",     c:"vacaciones"},   {v:"hotel",        c:"hotel"},
        {v:"museu",        c:"museo"},        {v:"cinema",       c:"cine"},
        {v:"teatre",       c:"teatro"},       {v:"concert",      c:"concierto"},
        {v:"música",       c:"música"},       {v:"llibre",       c:"libro"},
        {v:"pel·lícula",   c:"película"},     {v:"sèrie",        c:"serie"},
        {v:"joc",          c:"juego"},        {v:"festa",        c:"fiesta"},
        {v:"fotografia",   c:"fotografía"},   {v:"cuinar",       c:"cocinar"},
        {v:"jardí",        c:"jardinería"},   {v:"pintura",      c:"pintura"}
      ]
    },
    {
      bloc: "🌆 Ciutat i transport",
      color: "#64748b",
      words: [
        {v:"centre",       c:"centro"},       {v:"ajuntament",   c:"ayuntamiento"},
        {v:"mercat",       c:"mercado"},      {v:"supermercat",  c:"supermercado"},
        {v:"banc",         c:"banco"},        {v:"correus",      c:"correos"},
        {v:"comissaria",   c:"comisaría"},    {v:"biblioteca",   c:"biblioteca"},
        {v:"parc",         c:"parque"},       {v:"semàfor",      c:"semáforo"},
        {v:"pont",         c:"puente"},       {v:"estació",      c:"estación"},
        {v:"aeroport",     c:"aeropuerto"},   {v:"port",         c:"puerto"},
        {v:"cotxe",        c:"coche"},        {v:"moto",         c:"moto"},
        {v:"bicicleta",    c:"bicicleta"},    {v:"autobús",      c:"autobús"},
        {v:"metro",        c:"metro"},        {v:"tren",         c:"tren"},
        {v:"avió",         c:"avión"},        {v:"vaixell",      c:"barco"},
        {v:"taxi",         c:"taxi"},         {v:"bitllet",      c:"billete / ticket"},
        {v:"parada",       c:"parada"},       {v:"andana",       c:"andén"},
        {v:"mapa",         c:"mapa"},         {v:"adreça",       c:"dirección / domicilio"}
      ]
    },
    {
      bloc: "🌤️ Temps atmosfèric i natura",
      color: "#84cc16",
      words: [
        {v:"sol",          c:"sol"},          {v:"pluja",        c:"lluvia"},
        {v:"vent",         c:"viento"},       {v:"neu",          c:"nieve"},
        {v:"boira",        c:"niebla"},       {v:"núvol",        c:"nube"},
        {v:"tempesta",     c:"tormenta"},     {v:"llamp",        c:"rayo / relámpago"},
        {v:"calor",        c:"calor"},        {v:"fred",         c:"frío"},
        {v:"temperatura",  c:"temperatura"},  {v:"graus",        c:"grados"},
        {v:"mar",          c:"mar"},          {v:"riu",          c:"río"},
        {v:"llac",         c:"lago"},         {v:"bosc",         c:"bosque"},
        {v:"camp",         c:"campo"},        {v:"desert",       c:"desierto"},
        {v:"arbre",        c:"árbol"},        {v:"flor",         c:"flor"},
        {v:"herba",        c:"hierba"},       {v:"pedra",        c:"piedra"},
        {v:"gat",          c:"gato"},         {v:"gos",          c:"perro"},
        {v:"ocell",        c:"pájaro"},       {v:"peix",         c:"pez (vivo)"}
      ]
    },
    {
      bloc: "🔢 Números, temps i data",
      color: "#a855f7",
      words: [
        {v:"zero → deu",   c:"cero → diez (0-10)"},
        {v:"onze → vint",  c:"once → veinte (11-20)"},
        {v:"trenta",       c:"treinta"},      {v:"quaranta",     c:"cuarenta"},
        {v:"cinquanta",    c:"cincuenta"},    {v:"seixanta",     c:"sesenta"},
        {v:"setanta",      c:"setenta"},      {v:"huitanta",     c:"ochenta"},
        {v:"noranta",      c:"noventa"},      {v:"cent",         c:"cien/ciento"},
        {v:"mil",          c:"mil"},          {v:"primer/a",     c:"primero/a"},
        {v:"segon/a",      c:"segundo/a"},    {v:"tercer/a",     c:"tercero/a"},
        {v:"hora",         c:"hora"},         {v:"minut",        c:"minuto"},
        {v:"segon",        c:"segundo"},      {v:"matí",         c:"mañana (parte del día)"},
        {v:"migdia",       c:"mediodía"},     {v:"vesprada",     c:"tarde"},
        {v:"nit",          c:"noche"},        {v:"avui",         c:"hoy"},
        {v:"ahir",         c:"ayer"},         {v:"demà",         c:"mañana (día siguiente)"},
        {v:"setmana",      c:"semana"},       {v:"mes",          c:"mes"},
        {v:"any",          c:"año"},          {v:"segle",        c:"siglo"},
        {v:"dilluns",      c:"lunes"},        {v:"dimarts",      c:"martes"},
        {v:"dimecres",     c:"miércoles"},    {v:"dijous",       c:"jueves"},
        {v:"divendres",    c:"viernes"},      {v:"dissabte",     c:"sábado"},
        {v:"diumenge",     c:"domingo"},
        {v:"gener",        c:"enero"},        {v:"febrer",       c:"febrero"},
        {v:"març",         c:"marzo"},        {v:"abril",        c:"abril"},
        {v:"maig",         c:"mayo"},         {v:"juny",         c:"junio"},
        {v:"juliol",       c:"julio"},        {v:"agost",        c:"agosto"},
        {v:"setembre",     c:"septiembre"},   {v:"octubre",      c:"octubre"},
        {v:"novembre",     c:"noviembre"},    {v:"desembre",     c:"diciembre"}
      ]
    },
    {
      bloc: "⚡ Verbs essencials",
      color: "#ec4899",
      words: [
        {v:"ser",          c:"ser"},          {v:"estar",        c:"estar"},
        {v:"tindre",       c:"tener"},        {v:"anar",         c:"ir"},
        {v:"fer",          c:"hacer"},        {v:"poder",        c:"poder"},
        {v:"voler",        c:"querer"},       {v:"saber",        c:"saber"},
        {v:"dir",          c:"decir"},        {v:"veure",        c:"ver"},
        {v:"vindre",       c:"venir"},        {v:"donar",        c:"dar"},
        {v:"parlar",       c:"hablar"},       {v:"menjar",       c:"comer"},
        {v:"beure",        c:"beber"},        {v:"dormir",       c:"dormir"},
        {v:"viure",        c:"vivir"},        {v:"treballar",    c:"trabajar"},
        {v:"estudiar",     c:"estudiar"},     {v:"comprar",      c:"comprar"},
        {v:"vendre",       c:"vender"},       {v:"pagar",        c:"pagar"},
        {v:"llegir",       c:"leer"},         {v:"escriure",     c:"escribir"},
        {v:"escoltar",     c:"escuchar"},     {v:"mirar",        c:"mirar"},
        {v:"pensar",       c:"pensar"},       {v:"creure",       c:"creer"},
        {v:"saber",        c:"saber"},        {v:"conèixer",     c:"conocer"},
        {v:"obrir",        c:"abrir"},        {v:"tancar",       c:"cerrar"},
        {v:"pujar",        c:"subir"},        {v:"baixar",       c:"bajar"},
        {v:"arribar",      c:"llegar"},       {v:"eixir",        c:"salir"},
        {v:"tornar",       c:"volver"},       {v:"quedar",       c:"quedar"},
        {v:"esperar",      c:"esperar"},      {v:"ajudar",       c:"ayudar"},
        {v:"necessitar",   c:"necesitar"},    {v:"trobar",       c:"encontrar"},
        {v:"perdre",       c:"perder"},       {v:"guanyar",      c:"ganar"},
        {v:"començar",     c:"empezar"},      {v:"acabar",       c:"terminar"},
        {v:"continuar",    c:"continuar"},    {v:"canviar",      c:"cambiar"},
        {v:"preguntar",    c:"preguntar"},    {v:"respondre",    c:"responder"},
        {v:"trucar",       c:"llamar (teléf.)"},{v:"enviar",     c:"enviar"},
        {v:"portar",       c:"llevar / traer"},{v:"deixar",      c:"dejar"}
      ]
    },
    {
      bloc: "✨ Adjectius freqüents",
      color: "#14b8a6",
      words: [
        {v:"bo/bona",      c:"bueno/a"},      {v:"dolent/a",     c:"malo/a"},
        {v:"gran",         c:"grande"},       {v:"xicotet/a",    c:"pequeño/a"},
        {v:"alt/a",        c:"alto/a"},       {v:"baix/a",       c:"bajo/a"},
        {v:"gros/grossa",  c:"gordo/a / grueso/a"},{v:"prim/a",  c:"delgado/a"},
        {v:"llarg/a",      c:"largo/a"},      {v:"curt/a",       c:"corto/a"},
        {v:"nou/nova",     c:"nuevo/a"},      {v:"vell/vella",   c:"viejo/a / antiguo/a"},
        {v:"jove",         c:"joven"},        {v:"modern/a",     c:"moderno/a"},
        {v:"ràpid/a",      c:"rápido/a"},     {v:"lent/a",       c:"lento/a"},
        {v:"fàcil",        c:"fácil"},        {v:"difícil",      c:"difícil"},
        {v:"important",    c:"importante"},   {v:"interessant",  c:"interesante"},
        {v:"avorrit/da",   c:"aburrido/a"},   {v:"divertit/da",  c:"divertido/a"},
        {v:"bonic/a",      c:"bonito/a / guapo/a"},{v:"lleig/lletja",c:"feo/a"},
        {v:"net/a",        c:"limpio/a"},     {v:"brut/a",       c:"sucio/a"},
        {v:"barat/a",      c:"barato/a"},     {v:"car/cara",     c:"caro/a"},
        {v:"fort/a",       c:"fuerte"},       {v:"dèbil",        c:"débil"},
        {v:"content/a",    c:"contento/a"},   {v:"trist/a",      c:"triste"},
        {v:"cansat/da",    c:"cansado/a"},    {v:"descansant",   c:"descansado/a"},
        {v:"nerviós/a",    c:"nervioso/a"},   {v:"tranquil/la",  c:"tranquilo/a"},
        {v:"enfadat/da",   c:"enfadado/a"},   {v:"feliç",        c:"feliz"},
        {v:"sol/sola",     c:"solo/a"},       {v:"mateix/a",     c:"mismo/a"},
        {v:"altre/a",      c:"otro/a"},       {v:"diferent",     c:"diferente"},
        {v:"igual",        c:"igual"},        {v:"possible",     c:"posible"},
        {v:"necessari/a",  c:"necesario/a"},  {v:"segur/a",      c:"seguro/a"},
        {v:"especial",     c:"especial"},     {v:"normal",       c:"normal"}
      ]
    },
    {
      bloc: "🗣️ Salutacions i cortesia",
      color: "#f43f5e",
      words: [
        {v:"Bon dia",      c:"Buenos días"},  {v:"Bona vesprada",c:"Buenas tardes"},
        {v:"Bona nit",     c:"Buenas noches"},{v:"Hola",         c:"Hola"},
        {v:"Adéu",         c:"Adiós"},        {v:"Fins aviat",   c:"Hasta pronto"},
        {v:"Fins demà",    c:"Hasta mañana"}, {v:"Fins a demà",  c:"Hasta luego"},
        {v:"Si us plau",   c:"Por favor"},    {v:"Gràcies",      c:"Gracias"},
        {v:"De res",       c:"De nada"},      {v:"Perdona",      c:"Perdona"},
        {v:"Ho sento",     c:"Lo siento"},    {v:"Disculpe",     c:"Disculpe"},
        {v:"Com estàs?",   c:"¿Cómo estás?"},{v:"Molt bé",      c:"Muy bien"},
        {v:"Regular",      c:"Regular"},      {v:"Malament",     c:"Mal"},
        {v:"D'acord",      c:"De acuerdo"},   {v:"Clar",         c:"Claro"},
        {v:"Per suposat",  c:"Por supuesto"}, {v:"Exacte",       c:"Exacto"},
        {v:"No sé",        c:"No sé"},        {v:"No entenc",    c:"No entiendo"},
        {v:"Pot repetir?", c:"¿Puede repetir?"},{v:"Més a poc a poc",c:"Más despacio"},
        {v:"Enhorabona!",  c:"¡Enhorabuena!"},{v:"Bon profit!",  c:"¡Buen provecho!"},
        {v:"Salut!",       c:"¡Salud! (brindis)"},{v:"Sort!",    c:"¡Suerte!"}
      ]
    }
  ],

  // Camps buits per compatibilitat amb l'estructura general
  grammar: { notes: [], verbGroups: [] },
  irregulars: [],
  exercises: [],
  routine: []
});
