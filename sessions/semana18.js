// SESSIÓ 18 — Transport, ciutat i indicacions
SESSIONS.push({
  id: 'week-18', num: 18,
  title: "Transport, ciutat i indicacions",
  description: "Moure's per la ciutat. Demanar i donar indicacions. Mitjans de transport.",
  topics: ["Transport", "Indicacions", "Vocabulari urbà", "Demanar el camí", "Mitjans de transport", "Orientació"],

  grammar: {
    notes: [
      "Per demanar el camí s'usa l'imperatiu o el condicional de cortesia: 'Podria dir-me on és...?' / 'Perdone, sap on és...?' / 'Com puc arribar a...?'",
      "Per donar indicacions s'usa l'imperatiu (gira, continua, agafa, creua) o l'infinitiu impersonal: 'girar a la dreta, continuar recte, agafar la primera a l'esquerra'.",
      "Els mitjans de transport: en cotxe / en autobús / en metro / en tren / en bicicleta / a peu / en avió / en vaixell. Fixa't: 'a peu' (a pie) però 'en cotxe' (en coche)."
    ],
    verbGroups: [
      {
        title: "Demanar el camí",
        infinitive: "preguntar",
        meaning: "demanar indicacions",
        conjugations: [
          { p: "educat",     f: "Perdone, podria dir-me on és la plaça?",  t: "Perdone, ¿podría decirme dónde está...?", hl: true },
          { p: "directe",    f: "On és l'estació, si us plau?",             t: "¿Dónde está la estación?" },
          { p: "camí",       f: "Com puc arribar al centre?",               t: "¿Cómo puedo llegar al centro?" },
          { p: "distància",  f: "Quant es tarda a peu?",                   t: "¿Cuánto se tarda a pie?",               hl: false },
          { p: "transport",  f: "Quin autobús va a la catedral?",           t: "¿Qué autobús va a la catedral?" },
          { p: "confirmació",f: "És per ací?  /  Vaig bé?",               t: "¿Es por aquí? / ¿Voy bien?" }
        ],
        examples: []
      },
      {
        title: "Donar indicacions — verbs clau",
        infinitive: "indicar",
        meaning: "donar el camí",
        conjugations: [
          { p: "continuar",  f: "Continua recte fins al semàfor.",         t: "Sigue recto hasta el semáforo.",         hl: true },
          { p: "girar",      f: "Gira a la dreta / a l'esquerra.",         t: "Gira a la derecha / a la izquierda." },
          { p: "agafar",     f: "Agafa la primera a la dreta.",            t: "Toma la primera a la derecha.",          hl: false },
          { p: "creuar",     f: "Creua el carrer / el pont.",              t: "Cruza la calle / el puente." },
          { p: "pujar/baixar",f: "Puja per l'avinguda / Baixa les escales.", t: "Sube por la avenida / Baja las escaleras." },
          { p: "arribar",    f: "Quan arribes a la plaça, gira...",        t: "Cuando llegues a la plaza, gira..." }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Vocabulari urbà",
      meaning: "llocs de la ciutat",
      conjugations: [
        {p:"vies",       f:"el carrer · l'avinguda · la plaça · la cantonada · la cruïlla"},
        {p:"edificis",   f:"l'ajuntament · la catedral · el mercat · l'hospital · la farmàcia"},
        {p:"transport",  f:"l'estació · la parada · l'aeroport · el port · el garatge"},
        {p:"comerços",   f:"la botiga · el supermercat · la fleca · la ferreteria · el quiosc"},
        {p:"lleure",     f:"el parc · el museu · el cinema · el teatre · la piscina · la platja"},
        {p:"orientació", f:"el nord · el sud · l'est · l'oest · davant · darrere · al costat de"}
      ]
    },
    {
      infinitive: "Mitjans de transport",
      meaning: "vocabulari i preposicions",
      conjugations: [
        {p:"terra",      f:"en cotxe · en autobús · en metro · en tram · en bicicleta · a peu"},
        {p:"aire/mar",   f:"en avió · en vaixell · en ferry · en helicòpter"},
        {p:"comprar",    f:"un bitllet · un abonament · un tiquet · una targeta de transport"},
        {p:"estació",    f:"l'andana · la sortida · l'arribada · el retard · la correspondència"},
        {p:"aviació",    f:"facturar · embarcar · la porta d'embarcament · l'equipatge"},
        {p:"frases",     f:"On ix el tren per a...?  /  A quina hora ix l'autobús?"}
      ]
    },
    {
      infinitive: "Preposicions d'ubicació",
      meaning: "on és?",
      conjugations: [
        {p:"davant de",   f:"La farmàcia és davant de la plaça.  (delante de)"},
        {p:"darrere de",  f:"El parc és darrere de l'escola.  (detrás de)"},
        {p:"al costat de",f:"La botiga és al costat del banc.  (al lado de)"},
        {p:"enfront de",  f:"L'hotel és enfront de l'estació.  (enfrente de)"},
        {p:"entre",       f:"La farmàcia és entre el banc i la fleca.  (entre)"},
        {p:"a l'esquerra/dreta", f:"El museu és a l'esquerra.  /  Gira a la dreta."}
      ]
    },
    {
      infinitive: "Expressions de distància i temps",
      meaning: "quant queda?",
      conjugations: [
        {p:"distància",   f:"Està a dos minuts a peu.  /  A uns cinc quilòmetres."},
        {p:"durada",      f:"Es tarda uns vint minuts en autobús."},
        {p:"prop/lluny",  f:"Està molt prop.  /  Queda una mica lluny."},
        {p:"referències", f:"Passat el semàfor · Abans de la cantonada · Al fons del carrer"},
        {p:"confirmació", f:"No té pèrdua!  (¡No tiene pérdida!)"},
        {p:"alternativa", f:"Pot agafar el metro. És més ràpid."}
      ]
    }
  ],

  exercises: [
    {id:'w18e1',  q:"Perdone, ___ dir-me on és la catedral?  (¿podría? — condicional)",  a:"podria"},
    {id:'w18e2',  q:"___ recte fins al semàfor i després gira.  (Continúa → val.)",      a:"Continua"},
    {id:'w18e3',  q:"La farmàcia és ___ la cantonada, a l'esquerra.  (en)",              a:"a"},
    {id:'w18e4',  q:"Viatgem ___ tren fins a Madrid.  (en/a)",                           a:"en"},
    {id:'w18e5',  q:"___ a la dreta quan arribes a la plaça.  (Gira)",                   a:"Gira"},
    {id:'w18e6',  q:"El museu és ___ de l'ajuntament.  (enfrente → val.)",               a:"enfront"},
    {id:'w18e7',  q:"'A pie' en valencià: ___",                                           a:"a peu"},
    {id:'w18e8',  q:"Quant ___ a peu fins a l'estació?  (se tarda → val.)",              a:"es tarda"},
    {id:'w18e9',  q:"___ el carrer i agafa la primera a l'esquerra.  (Cruza → val.)",    a:"Creua"},
    {id:'w18e10', q:"'La parada de autobús' en valencià: ___",                            a:"la parada d'autobús"}
  ],

  routine: [
    {day:1, title:"Vocabulari de la ciutat",
      tasks:[
        {t:"0–5'",  d:"Aprén 15 llocs urbans: carrer, plaça, avinguda, ajuntament, mercat, hospital, farmàcia, parc, museu, estació..."},
        {t:"5–12'", d:"Descriu el teu barri en 8 frases usant preposicions d'ubicació: davant, darrere, al costat, enfront, entre."},
        {t:"12–15'",d:"Di les frases en veu alta com si les explicares a algú que no coneix el barri."}
      ]
    },
    {day:2, title:"Demanar i donar indicacions",
      tasks:[
        {t:"0–5'",  d:"Memoritza els verbs d'indicació: continua recte · gira · agafa · creua · puja · baixa · arriba."},
        {t:"5–12'", d:"Escriu les indicacions per arribar des de casa teua a 3 llocs propers. Usa imperatius."},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:3, title:"Transport i bitllets",
      tasks:[
        {t:"0–5'",  d:"Repàs: en cotxe · en autobús · en metro · en tren · en bicicleta · a peu. Preposició 'en' excepte 'a peu'."},
        {t:"5–12'", d:"Escriu un diàleg a l'estació: comprar un bitllet, preguntar l'andana, confirmar l'hora de sortida."},
        {t:"12–15'",d:"Di el diàleg en veu alta."}
      ]
    },
    {day:4, title:"Producció — ruta pel centre",
      tasks:[
        {t:"0–5'",  d:"Repàs de preposicions d'ubicació i verbs d'indicació."},
        {t:"5–15'", d:"Escriu una guia turística curta d'un lloc que coneixes bé (barri, ciutat...). Inclou: on és, com arribar-hi, què hi ha, quins transports hi van. Mínim 12 frases."}
      ]
    }
  ]
});
