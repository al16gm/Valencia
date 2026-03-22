// SESSIÓ 8 — Adjectius
SESSIONS.push({
  id: 'week-8', num: 8,
  title: "Adjectius",
  description: "Concordança i posició. Comparatius: més/menys que, tan...com. Superlatius.",
  topics: ["Adjectius", "Concordança", "Posició", "Comparatius", "Superlatius"],

  grammar: {
    notes: [
      "Els adjectius concorden en gènere i nombre amb el nom: un gat negre / una gata negra / uns gats negres / unes gates negres.",
      "La majoria d'adjectius van DARRERE del nom en valencià: 'un cotxe ràpid', 'una casa gran'. Però alguns van davant: bon, mal, gran (sentit figurat), poc, molt.",
      "Comparatiu: MÉS + adj + QUE (más... que) · MENYS + adj + QUE (menos... que) · TAN + adj + COM (tan... como). Superlatiu: el/la més + adj + de."
    ],
    verbGroups: [
      {
        title: "Concordança de l'adjectiu",
        infinitive: "adjectiu",
        meaning: "gènere i nombre",
        conjugations: [
          { p: "masc. sing.", f: "un gat negre",       t: "un gato negro",       hl: true },
          { p: "fem. sing.",  f: "una gata negra",     t: "una gata negra" },
          { p: "masc. plur.", f: "uns gats negres",    t: "unos gatos negros",   hl: true },
          { p: "fem. plur.",  f: "unes gates negres",  t: "unas gatas negras" },
          { p: "invariable",  f: "un cotxe blau / una porta blava", t: "invariable en cast. → canvia en val." },
          { p: "invariable",  f: "homes joves / dones joves",       t: "jóvenes (igual masc./fem.)" }
        ],
        examples: []
      },
      {
        title: "Comparatius",
        infinitive: "comparatiu",
        meaning: "més/menys/tan",
        conjugations: [
          { p: "superioritat", f: "El valencià és més fàcil que el xinès.",  t: "más fácil que",  hl: true },
          { p: "inferioritat", f: "Este pis és menys car que l'altre.",      t: "menos caro que" },
          { p: "igualtat",     f: "Joan és tan alt com Pere.",               t: "tan alto como",  hl: true },
          { p: "igualtat",     f: "Treballe tant com tu.",                   t: "tanto como" },
          { p: "irregulars",   f: "bo → millor  (mejor)",                   t: "irregular" },
          { p: "irregulars",   f: "dolent → pitjor  (peor)",                t: "irregular" }
        ],
        examples: []
      },
      {
        title: "Superlatius",
        infinitive: "superlatiu",
        meaning: "el/la més · -íssim",
        conjugations: [
          { p: "relatiu",   f: "És el més intel·ligent de la classe.",  t: "el más inteligente de",  hl: true },
          { p: "relatiu",   f: "És la menys cara de totes.",            t: "la menos cara de" },
          { p: "absolut",   f: "És grandíssim.",                        t: "grandísimo",             hl: false },
          { p: "absolut",   f: "Estava boníssim.",                      t: "buenísimo" },
          { p: "absolut",   f: "És molt gran.  (=grandíssim)",          t: "alternativa amb 'molt'" },
          { p: "irregulars",f: "bo → óptim / excel·lent · dolent → pèssim", t: "superlatius cultes" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Adjectius irregulars",
      meaning: "bo, mal, gran, poc",
      conjugations: [
        {p:"bo/bona",     f:"bon home / bona persona  (davant del nom → bon)"},
        {p:"mal/mala",    f:"mal temps / mala sort  (davant del nom → mal)"},
        {p:"gran/gran",   f:"un gran home  (davant = figurat) · una casa gran  (darrere = mida)"},
        {p:"comparatiu",  f:"bo → millor · dolent → pitjor"},
        {p:"comparatiu",  f:"gran → major (edat) · petit → menor (edat)"},
        {p:"superlatiu",  f:"bo → óptim · dolent → pèssim · gran → màxim · petit → mínim"}
      ]
    },
    {
      infinitive: "Adjectius de color",
      meaning: "concordança especial",
      conjugations: [
        {p:"variable",    f:"negre/negra/negres/negres"},
        {p:"variable",    f:"blanc/blanca/blancs/blanques"},
        {p:"variable",    f:"roig/roja/rojos/roges  (rojo)"},
        {p:"variable",    f:"blau/blava/blaus/blaves  (azul)"},
        {p:"invariable",  f:"rosa/rosa/roses/roses"},
        {p:"invariable",  f:"taronja/taronja/taronges/taronges  (naranja)"}
      ]
    },
    {
      infinitive: "Posició — davant o darrere",
      meaning: "canvi de significat",
      conjugations: [
        {p:"darrere (norm.)", f:"un home gran  (un hombre corpulento/mayor)"},
        {p:"davant (figurat)",f:"un gran home  (un gran hombre)"},
        {p:"darrere (norm.)", f:"una notícia certa  (una noticia cierta)"},
        {p:"davant (èmfasi)", f:"una certa notícia  (cierta noticia = alguna)"},
        {p:"darrere (norm.)", f:"un amic nou  (un amigo recién conocido)"},
        {p:"davant (qualitat)",f:"un nou amic  (un nuevo amigo = otro)"}
      ]
    },
    {
      infinitive: "Adjectius útils",
      meaning: "vocabulari bàsic",
      conjugations: [
        {p:"positius",  f:"bo · gran · ràpid · intel·ligent · simpàtic · bonic"},
        {p:"negatius",  f:"dolent · xicotot · lent · avorrit · antipàtic · lleig"},
        {p:"mida",      f:"gran · xicotet · alt · baix · gros · prim · llarg · curt"},
        {p:"qualitat",  f:"fàcil · difícil · important · interessant · possible"},
        {p:"temps",     f:"nou · vell · modern · antic · jove · madur"},
        {p:"sentiment", f:"content · trist · cansat · nerviós · tranquil · enfadat"}
      ]
    }
  ],

  exercises: [
    {id:'w8e1',  q:"Tinc una ___ (gran) casa al poble.  (darrere del nom, mida)",      a:"gran"},
    {id:'w8e2',  q:"Ella és ___ alta ___ jo.  (más... que)",                           a:"més · que"},
    {id:'w8e3',  q:"Este exercici és ___ difícil ___ l'anterior.  (menos... que)",     a:"menys · que"},
    {id:'w8e4',  q:"Joan és ___ ___ de tots.  (el más inteligente)",                   a:"el més intel·ligent"},
    {id:'w8e5',  q:"El temps estava ___.  (buenísimo → superlatiu absolut)",           a:"boníssim"},
    {id:'w8e6',  q:"Tens ___ sort!  (mala, davant del nom)",                           a:"mala"},
    {id:'w8e7',  q:"Esta solució és ___ ___ l'altra.  (mejor que)",                    a:"millor que"},
    {id:'w8e8',  q:"Les parets són ___.  (blancas → val., concordança fem. plur.)",    a:"blanques"},
    {id:'w8e9',  q:"És ___ simpàtic ___ el seu germà.  (tan... como)",                 a:"tan · com"},
    {id:'w8e10', q:"Ha sigut un ___ any per a tots.  (mal, davant del nom)",           a:"mal"}
  ],

  routine: [
    {day:1, title:"Concordança — gènere i nombre",
      tasks:[
        {t:"0–5'",  d:"Regla: l'adjectiu concorda amb el nom. Practica amb: negre/a/s, blanc/a/s, roig/roja, blau/blava."},
        {t:"5–12'", d:"Descriu 10 objectes de casa teua amb color i una altra qualitat: 'La taula és gran i marró.'"},
        {t:"12–15'",d:"Di les descripcions en veu alta."}
      ]
    },
    {day:2, title:"Comparatius — més/menys/tan",
      tasks:[
        {t:"0–5'",  d:"Tres estructures: MÉS+adj+QUE · MENYS+adj+QUE · TAN+adj+COM. Memoritza els irregulars: millor/pitjor."},
        {t:"5–12'", d:"Compara 6 parelles de coses: ciutats, persones, animals, menjar... Usa les tres estructures."},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:3, title:"Superlatius i posició",
      tasks:[
        {t:"0–5'",  d:"Superlatiu relatiu: el/la més + adj + de. Superlatiu absolut: -íssim o molt +adj. Practica 5 exemples de cada."},
        {t:"5–12'", d:"Posició davant/darrere: gran home vs home gran. Escriu 4 parelles amb canvi de significat."},
        {t:"12–15'",d:"Escriu un text curt (6 frases) descrivint una persona que admires. Usa adjectius, comparatius i algun superlatiu."}
      ]
    },
    {day:4, title:"Vocabulari d'adjectius",
      tasks:[
        {t:"0–5'",  d:"Aprén 10 adjectius nous de la llista: bo, gran, ràpid, simpàtic, bonic, fàcil, nou, vell, content, trist."},
        {t:"5–15'", d:"Escriu el teu autoretrat en 10 frases: com ets físicament i de caràcter. Usa adjectius concertats correctament."}
      ]
    }
  ]
});
