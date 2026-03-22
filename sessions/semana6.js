// SESSIÓ 6 — Articles i gènere
SESSIONS.push({
  id: 'week-6', num: 6,
  title: "Articles i gènere",
  description: "El/la/els/les · un/una · contraccions al/del. Gènere i nombre dels noms.",
  topics: ["Articles determinats", "Articles indeterminats", "Contraccions al/del", "Gènere dels noms", "Plural"],

  grammar: {
    notes: [
      "L'article personal en valencià és EN (homes) i NA (dones) davant de noms propis: En Joan, Na Maria. S'usa en registre informal i és un tret distintiu del valencià.",
      "Contracció obligatòria: A + EL = AL · DE + EL = DEL. Però no hi ha contracció amb l'article personal: 'de en Joan' (no *'den Joan' en la parla estàndard).",
      "El gènere dels noms valencians és gairebé idèntic al castellà, però hi ha excepcions: la calor (cast. el calor), la color (cast. el color), la mel (cast. la miel)."
    ],
    verbGroups: [
      {
        title: "Articles determinats",
        infinitive: "article",
        meaning: "el/la/els/les",
        conjugations: [
          { p: "masc. sing.",  f: "el gat",       t: "el gato",       hl: true },
          { p: "fem. sing.",   f: "la casa",      t: "la casa" },
          { p: "masc. plur.",  f: "els gats",     t: "los gatos",     hl: true },
          { p: "fem. plur.",   f: "les cases",    t: "las casas" },
          { p: "davant vocal", f: "l'escola",     t: "la escuela  →  l'escola" },
          { p: "davant vocal", f: "l'home",       t: "el hombre  →  l'home" }
        ],
        examples: []
      },
      {
        title: "Articles indeterminats + contraccions",
        infinitive: "article",
        meaning: "un/una + al/del",
        conjugations: [
          { p: "masc. sing.",   f: "un cotxe",       t: "un coche",       hl: false },
          { p: "fem. sing.",    f: "una taula",       t: "una mesa" },
          { p: "masc. plur.",   f: "uns llibres",     t: "unos libros" },
          { p: "fem. plur.",    f: "unes cadires",    t: "unas sillas" },
          { p: "a + el",        f: "vaig al mercat",  t: "voy al mercado", hl: true },
          { p: "de + el",       f: "és del poble",    t: "es del pueblo",  hl: true }
        ],
        examples: []
      },
      {
        title: "Formació del plural",
        infinitive: "plural",
        meaning: "regles generals",
        conjugations: [
          { p: "vocal → +s",   f: "casa → cases",     t: "casa → casas" },
          { p: "vocal → +s",   f: "cotxe → cotxes",   t: "coche → coches" },
          { p: "cons. → +s",   f: "gat → gats",       t: "gato → gatos",   hl: true },
          { p: "cons. → +os",  f: "home → homes",     t: "hombre → hombres" },
          { p: "-ió → -ions",  f: "sessió → sessions",t: "sesión → sesiones" },
          { p: "invariable",   f: "el/els dilluns",   t: "el/los lunes" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Article personal EN/NA",
      meaning: "tret distintiu del valencià",
      conjugations: [
        {p:"home",    f:"En Joan, En Miquel, En Pep"},
        {p:"dona",    f:"Na Maria, Na Rosa, Na Pilar"},
        {p:"ús",      f:"He parlat amb en Jordi."},
        {p:"ús",      f:"La germana de na Carme és simpàtica."},
        {p:"nota",    f:"Davant consonant: en Joan · en Pere"},
        {p:"nota",    f:"Davant vocal: n'Albert · n'Àngela"}
      ]
    },
    {
      infinitive: "Gènere — excepcions",
      meaning: "diferències val./cast.",
      conjugations: [
        {p:"val. fem.", f:"la calor  (cast. el calor)"},
        {p:"val. fem.", f:"la color  (cast. el color)"},
        {p:"val. fem.", f:"la mel    (cast. la miel ✓)"},
        {p:"val. masc.",f:"el costum  (cast. la costumbre)"},
        {p:"val. masc.",f:"el senyal  (cast. la señal)"},
        {p:"val. masc.",f:"el detective  (cast. el detective ✓)"}
      ]
    },
    {
      infinitive: "Contraccions — tots els casos",
      meaning: "al / del + casos especials",
      conjugations: [
        {p:"a + el",    f:"Vaig al parc.  ✓"},
        {p:"de + el",   f:"Vinc del treball.  ✓"},
        {p:"a + la",    f:"Vaig a la platja.  (sense contracció)"},
        {p:"de + la",   f:"Vinc de la platja.  (sense contracció)"},
        {p:"a + l'",    f:"Vaig a l'escola.  (sense contracció)"},
        {p:"de + l'",   f:"Vinc de l'escola.  (sense contracció)"}
      ]
    },
    {
      infinitive: "Noms comuns — masculí i femení",
      meaning: "vocabulari bàsic",
      conjugations: [
        {p:"masc.",  f:"el gat · el gos · el nen · el pare"},
        {p:"fem.",   f:"la gata · la gossa · la nena · la mare"},
        {p:"masc.",  f:"el metge · el professor · l'amic"},
        {p:"fem.",   f:"la metgessa · la professora · l'amiga"},
        {p:"masc.",  f:"el cotxe · el pis · el carrer · el mercat"},
        {p:"fem.",   f:"la casa · la porta · la finestra · la cuina"}
      ]
    }
  ],

  exercises: [
    {id:'w6e1',  q:"Ahir vaig anar ___ mercat amb ma mare.  (a + el)",              a:"al"},
    {id:'w6e2',  q:"Este és ___ cotxe de mon pare.  (de + el)",                     a:"del"},
    {id:'w6e3',  q:"___ cases del carrer són molt antigues.  (las → val.)",         a:"Les"},
    {id:'w6e4',  q:"Tinc ___ problema amb l'ordinador.  (un)",                      a:"un"},
    {id:'w6e5',  q:"L'article personal davant d'un home es: ___ Joan.",             a:"En"},
    {id:'w6e6',  q:"L'article personal davant d'una dona es: ___ Maria.",           a:"Na"},
    {id:'w6e7',  q:"La calor en valencià és de gènere ___ (masc./fem.)",            a:"femení"},
    {id:'w6e8',  q:"Plural de 'sessió': ___",                                        a:"sessions"},
    {id:'w6e9',  q:"___ llibres que tens són molt interessants.  (Los → val.)",     a:"Els"},
    {id:'w6e10', q:"Vinc ___ escola ara mateix.  (de + l')",                        a:"de l'"}
  ],

  routine: [
    {day:1, title:"Articles determinats i indeterminats",
      tasks:[
        {t:"0–5'",  d:"Llegeix la taula d'articles. El·la·els·les / un·una·uns·unes. Repeteix en veu alta."},
        {t:"5–12'", d:"Mira 10 objectes de casa teua i di l'article correcte: 'la taula, el got, les claus...'"},
        {t:"12–15'",d:"Escriu 5 frases amb articles determinats i 5 amb indeterminats."}
      ]
    },
    {day:2, title:"Contraccions AL i DEL",
      tasks:[
        {t:"0–5'",  d:"Regla: A + EL = AL / DE + EL = DEL. Amb tots els altres articles NO hi ha contracció."},
        {t:"5–12'", d:"Escriu 6 frases de moviment (vaig al/a la/a l') i 6 d'origen (vinc del/de la/de l')."},
        {t:"12–15'",d:"Di les frases en veu alta i assegura't de fer la contracció quan toca."}
      ]
    },
    {day:3, title:"L'article personal EN / NA",
      tasks:[
        {t:"0–5'",  d:"Este tret és exclusiu del català/valencià. En + nom masculí · Na + nom femení. Practica amb noms de gent que coneixes."},
        {t:"5–12'", d:"Escriu 5 frases sobre persones de la teua vida usant l'article personal."},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:4, title:"Gènere i plural — repàs",
      tasks:[
        {t:"0–5'",  d:"Repassa les excepcions de gènere: la calor, la color, el costum, el senyal."},
        {t:"5–12'", d:"Forma el plural de 15 noms variats. Comprova les regles."},
        {t:"12–15'",d:"Escriu un paràgraf de 6 frases descrivint el teu barri. Usa articles i plurals correctament."}
      ]
    }
  ]
});
