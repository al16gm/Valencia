// SESSIÓ 3 — Futur: immediat i simple
SESSIONS.push({
  id: 'week-3', num: 3,
  title: "Futur: immediat i simple",
  description: "Anar a + infinitiu · Futur simple (-é, -às, -à). Planes i prediccions.",
  topics: ["Futur immediat", "Futur simple", "Anar a + infinitiu", "Planes i prediccions"],

  grammar: {
    notes: [
      "El futur immediat (anar a + inf.) és el més natural en la parla quotidiana: Vaig a menjar, aneu a estudiar. És equivalent al español 'voy a...'",
      "El futur simple s'usa per a prediccions i promeses. Les terminacions s'afegeixen directament a l'infinitiu: parlar → parlaré, parlaràs, parlarà...",
      "Truc: el futur simple té accent en totes les persones excepte nosaltres i vosaltres."
    ],
    verbGroups: [
      {
        title: "Futur immediat — ANAR A + infinitiu",
        infinitive: "parlar",
        meaning: "hablar (futur immediat)",
        conjugations: [
          { p: "jo",         f: "vaig a parlar",  t: "voy a hablar",    hl: true },
          { p: "tu",         f: "vas a parlar",   t: "vas a hablar" },
          { p: "ell/ella",   f: "va a parlar",    t: "va a hablar" },
          { p: "nosaltres",  f: "anem a parlar",  t: "vamos a hablar" },
          { p: "vosaltres",  f: "aneu a parlar",  t: "vais a hablar" },
          { p: "ells/elles", f: "van a parlar",   t: "van a hablar" }
        ],
        examples: ["menjar", "estudiar", "comprar", "treballar", "eixir"]
      },
      {
        title: "Futur simple — terminacions -AR",
        infinitive: "parlar",
        meaning: "hablar (futur simple)",
        conjugations: [
          { p: "jo",         f: "parlaré",    t: "hablaré",    hl: true },
          { p: "tu",         f: "parlaràs",   t: "hablarás" },
          { p: "ell/ella",   f: "parlarà",    t: "hablará" },
          { p: "nosaltres",  f: "parlarem",   t: "hablaremos" },
          { p: "vosaltres",  f: "parlareu",   t: "hablaréis" },
          { p: "ells/elles", f: "parlaran",   t: "hablarán" }
        ],
        examples: ["menjar", "treballar", "comprar", "estudiar", "caminar"]
      },
      {
        title: "Futur simple — terminacions -ER/-IR",
        infinitive: "córrer",
        meaning: "correr (futur simple)",
        conjugations: [
          { p: "jo",         f: "correré",    t: "correré",    hl: true },
          { p: "tu",         f: "correràs",   t: "correrás" },
          { p: "ell/ella",   f: "correrà",    t: "correrá" },
          { p: "nosaltres",  f: "correrem",   t: "correremos" },
          { p: "vosaltres",  f: "correreu",   t: "correréis" },
          { p: "ells/elles", f: "correran",   t: "correrán" }
        ],
        examples: ["dormir", "eixir", "obrir", "llegir", "sentir"]
      }
    ]
  },

  irregulars: [
    {
      infinitive: "ser (futur)",
      meaning: "ser",
      conjugations: [
        {p:"jo",f:"seré"},{p:"tu",f:"seràs"},{p:"ell/ella",f:"serà"},
        {p:"nosaltres",f:"serem"},{p:"vosaltres",f:"sereu"},{p:"ells/elles",f:"seran"}
      ]
    },
    {
      infinitive: "tenir (futur)",
      meaning: "tener",
      conjugations: [
        {p:"jo",f:"tindré"},{p:"tu",f:"tindràs"},{p:"ell/ella",f:"tindrà"},
        {p:"nosaltres",f:"tindrem"},{p:"vosaltres",f:"tindreu"},{p:"ells/elles",f:"tindran"}
      ]
    },
    {
      infinitive: "poder (futur)",
      meaning: "poder",
      conjugations: [
        {p:"jo",f:"podré"},{p:"tu",f:"podràs"},{p:"ell/ella",f:"podrà"},
        {p:"nosaltres",f:"podrem"},{p:"vosaltres",f:"podreu"},{p:"ells/elles",f:"podran"}
      ]
    },
    {
      infinitive: "fer (futur)",
      meaning: "hacer",
      conjugations: [
        {p:"jo",f:"faré"},{p:"tu",f:"faràs"},{p:"ell/ella",f:"farà"},
        {p:"nosaltres",f:"farem"},{p:"vosaltres",f:"fareu"},{p:"ells/elles",f:"faran"}
      ]
    },
    {
      infinitive: "vindre (futur)",
      meaning: "venir",
      conjugations: [
        {p:"jo",f:"vindré"},{p:"tu",f:"vindràs"},{p:"ell/ella",f:"vindrà"},
        {p:"nosaltres",f:"vindrem"},{p:"vosaltres",f:"vindreu"},{p:"ells/elles",f:"vindran"}
      ]
    },
    {
      infinitive: "dir (futur)",
      meaning: "decir",
      conjugations: [
        {p:"jo",f:"diré"},{p:"tu",f:"diràs"},{p:"ell/ella",f:"dirà"},
        {p:"nosaltres",f:"direm"},{p:"vosaltres",f:"direu"},{p:"ells/elles",f:"diran"}
      ]
    }
  ],

  exercises: [
    {id:'w3e1',  q:"Demà jo ___ al gimnàs. (anar a + anar)",              a:"vaig a anar"},
    {id:'w3e2',  q:"Ella ___ molt l'any que ve. (treballar — futur simple)", a:"treballarà"},
    {id:'w3e3',  q:"Nosaltres ___ a sopar fora este cap de setmana. (anar a + sopar)", a:"anem a sopar"},
    {id:'w3e4',  q:"Jo ___ el problema demà. (solucionar — futur simple)", a:"solucionaré"},
    {id:'w3e5',  q:"Ells ___ a les 8 del matí. (eixir — futur simple)",   a:"eixiran"},
    {id:'w3e6',  q:"Tu ___ molt bé l'examen. (fer — futur simple)",       a:"faràs"},
    {id:'w3e7',  q:"Jo ___ a estudiar esta vesprada. (anar a + estudiar)", a:"vaig a estudiar"},
    {id:'w3e8',  q:"Vosaltres ___ vindre a la festa? (poder — futur simple)", a:"podreu"},
    {id:'w3e9',  q:"Ella ___ directora d'aquí a cinc anys. (ser — futur simple)", a:"serà"},
    {id:'w3e10', q:"Nosaltres ___ la veritat. (dir — futur simple)",       a:"direm"}
  ],

  routine: [
    {day:1, title:"Futur immediat — vaig a...",
      tasks:[
        {t:"0–5'",  d:"Repassa vaig/vas/va/anem/aneu/van. Combina cada forma amb un infinitiu diferent."},
        {t:"5–12'", d:"Escriu 5 plans per a demà usant anar a + infinitiu. Ves variant les persones."},
        {t:"12–15'",d:"Di els plans en veu alta com si parles amb algú: 'Demà vaig a...'"}
      ]
    },
    {day:2, title:"Futur simple — terminacions",
      tasks:[
        {t:"0–5'",  d:"Aprén les terminacions: -é/-às/-à/-em/-eu/-an. Afegeix-les a parlar, córrer, dormir."},
        {t:"5–12'", d:"Conjuga 3 verbs regulars nous en futur simple sense mirar."},
        {t:"12–15'",d:"3 frases de predicció: 'L'any que ve jo...', 'D'aquí a deu anys...'"}
      ]
    },
    {day:3, title:"Irregulars del futur",
      tasks:[
        {t:"0–5'",  d:"Memoritza les arrels irregulars: tind-, pod-, far-, vindr-, dir-."},
        {t:"5–12'", d:"Conjuga tenir i poder en futur complet. Després fer i vindre."},
        {t:"12–15'",d:"Escriu 3 frases usant futurs irregulars: 'Jo tindré...', 'Ella podrà...'"}
      ]
    },
    {day:4, title:"Exercicis i producció",
      tasks:[
        {t:"0–5'",  d:"Diferència clau: immediat (vaig a + inf.) = pla concret · simple (-é) = predicció/promesa."},
        {t:"5–12'", d:"Fes els exercicis de la pestanya sense ajuda."},
        {t:"12–15'",d:"Escriu el teu futur imaginari: 'D'aquí a 5 anys jo seré... tindré... viuré...'"}
      ]
    }
  ]
});
