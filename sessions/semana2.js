// SESSIÓ 2 — Passat Perifràstic
SESSIONS.push({
  id: 'week-2', num: 2,
  title: "Passat Perifràstic",
  description: "Vaig/vas/va + infinitiu. El passat del dia a dia: ahir vaig anar, va dir...",
  topics: ["Passat Perifràstic", "Vaig + infinitiu", "Accions passades", "Marcadors temporals"],

  grammar: {
    notes: [
      "El passat perifràstic és EL temps passat del valencià oral. Substitueix completament el passat simple (parlí, parlares...) en la llengua parlada.",
      "La fórmula és sempre: VAIG/VAS/VA/VAM/VAU/VAN + infinitiu. Aprèn primer vaig/va/van i ja pots expressar qualsevol acció passada.",
      "Marcadors temporals clau: ahir (ayer), abir (avant-hier), la setmana passada, el mes passat, fa dos dies, al matí, a la vesprada."
    ],
    verbGroups: [
      {
        title: "Auxiliar ANAR — el motor del passat",
        infinitive: "anar",
        meaning: "ir (auxiliar de passat)",
        conjugations: [
          { p: "jo",         f: "vaig", t: "→ jo vaig parlar", hl: true },
          { p: "tu",         f: "vas",  t: "→ tu vas menjar" },
          { p: "ell/ella",   f: "va",   t: "→ ella va vindre", hl: false },
          { p: "nosaltres",  f: "vam",  t: "→ vam anar al mercat" },
          { p: "vosaltres",  f: "vau",  t: "→ vau estudiar molt" },
          { p: "ells/elles", f: "van",  t: "→ van dormir bé" }
        ],
        examples: []
      },
      {
        title: "Exemples amb verbs habituals",
        infinitive: "parlar",
        meaning: "hablar (exemple -AR)",
        conjugations: [
          { p: "jo",         f: "vaig parlar",  t: "hablé / he hablado", hl: true },
          { p: "tu",         f: "vas parlar",   t: "hablaste" },
          { p: "ell/ella",   f: "va parlar",    t: "habló" },
          { p: "nosaltres",  f: "vam parlar",   t: "hablamos" },
          { p: "vosaltres",  f: "vau parlar",   t: "hablasteis" },
          { p: "ells/elles", f: "van parlar",   t: "hablaron" }
        ],
        examples: ["menjar", "treballar", "comprar", "estudiar", "caminar"]
      }
    ]
  },

  irregulars: [
    {
      infinitive: "ser/estar (passat)",
      meaning: "ser/estar (pasado)",
      conjugations: [
        { p: "jo",         f: "vaig ser / vaig estar" },
        { p: "tu",         f: "vas ser / vas estar" },
        { p: "ell/ella",   f: "va ser / va estar" },
        { p: "nosaltres",  f: "vam ser / vam estar" },
        { p: "vosaltres",  f: "vau ser / vau estar" },
        { p: "ells/elles", f: "van ser / van estar" }
      ]
    },
    {
      infinitive: "anar (passat)",
      meaning: "ir (pasado) — atenció!",
      conjugations: [
        { p: "jo",         f: "vaig anar" },
        { p: "tu",         f: "vas anar" },
        { p: "ell/ella",   f: "va anar" },
        { p: "nosaltres",  f: "vam anar" },
        { p: "vosaltres",  f: "vau anar" },
        { p: "ells/elles", f: "van anar" }
      ]
    },
    {
      infinitive: "fer (passat)",
      meaning: "hacer (pasado)",
      conjugations: [
        { p: "jo",         f: "vaig fer" },
        { p: "tu",         f: "vas fer" },
        { p: "ell/ella",   f: "va fer" },
        { p: "nosaltres",  f: "vam fer" },
        { p: "vosaltres",  f: "vau fer" },
        { p: "ells/elles", f: "van fer" }
      ]
    },
    {
      infinitive: "dir (passat)",
      meaning: "decir (pasado)",
      conjugations: [
        { p: "jo",         f: "vaig dir" },
        { p: "tu",         f: "vas dir" },
        { p: "ell/ella",   f: "va dir" },
        { p: "nosaltres",  f: "vam dir" },
        { p: "vosaltres",  f: "vau dir" },
        { p: "ells/elles", f: "van dir" }
      ]
    },
    {
      infinitive: "vindre (passat)",
      meaning: "venir (pasado)",
      conjugations: [
        { p: "jo",         f: "vaig vindre" },
        { p: "tu",         f: "vas vindre" },
        { p: "ell/ella",   f: "va vindre" },
        { p: "nosaltres",  f: "vam vindre" },
        { p: "vosaltres",  f: "vau vindre" },
        { p: "ells/elles", f: "van vindre" }
      ]
    },
    {
      infinitive: "veure (passat)",
      meaning: "ver (pasado)",
      conjugations: [
        { p: "jo",         f: "vaig veure" },
        { p: "tu",         f: "vas veure" },
        { p: "ell/ella",   f: "va veure" },
        { p: "nosaltres",  f: "vam veure" },
        { p: "vosaltres",  f: "vau veure" },
        { p: "ells/elles", f: "van veure" }
      ]
    }
  ],

  exercises: [
    { id:'w2e1',  q:"Ahir jo ___ al mercat. (anar)",                         a:"vaig anar" },
    { id:'w2e2',  q:"Ella ___ molt bé ahir a la nit. (dormir)",              a:"va dormir" },
    { id:'w2e3',  q:"Nosaltres ___ la pel·lícula al cinema. (veure)",        a:"vam veure" },
    { id:'w2e4',  q:"Ells ___ de Barcelona fa dos dies. (vindre)",           a:"van vindre" },
    { id:'w2e5',  q:"Tu ___ que no podries vindre. (dir)",                   a:"vas dir" },
    { id:'w2e6',  q:"Jo ___ molt de treball la setmana passada. (fer)",     a:"vaig fer" },
    { id:'w2e7',  q:"Ella ___ a l'escola ahir al matí. (anar)",             a:"va anar" },
    { id:'w2e8',  q:"Vosaltres ___ fins tard ahir? (treballar)",             a:"vau treballar" },
    { id:'w2e9',  q:"Jo ___ amb els amics dissabte. (sopar)",                a:"vaig sopar" },
    { id:'w2e10', q:"Ells ___ el problema al final. (entendre)",             a:"van entendre" }
  ],

  routine: [
    { day:1, title:"Aprén l'auxiliar de memòria",
      tasks:[
        {t:"0–5'",  d:"Repeteix en veu alta fins que isca sol: vaig · vas · va · vam · vau · van."},
        {t:"5–12'", d:"Combina l'auxiliar amb 5 infinitius: vaig menjar, vas vindre, va fer, vam dir, van anar."},
        {t:"12–15'",d:"Escriu 3 frases sobre el que vas fer ahir. Usa vaig + infinitiu."}
      ]
    },
    { day:2, title:"Marcadors temporals",
      tasks:[
        {t:"0–5'",  d:"Aprén: ahir · abir · la setmana passada · el mes passat · fa dos dies · al matí · a la vesprada."},
        {t:"5–12'", d:"Escriu una frase per cada marcador temporal combinat amb un verb diferent."},
        {t:"12–15'",d:"Di les frases en veu alta. Intenta no llegir, parla de memòria."}
      ]
    },
    { day:3, title:"Verbs irregulars al passat",
      tasks:[
        {t:"0–5'",  d:"Repassa les targetes dels irregulars: ser, anar, fer, dir, vindre, veure."},
        {t:"5–12'", d:"Conjuga cada irregular en totes les persones oralment. Jo vaig ser, tu vas ser..."},
        {t:"12–15'",d:"3 frases amb irregulars descrivint algo que va passar ahir."}
      ]
    },
    { day:4, title:"Exercicis i autocorrecció",
      tasks:[
        {t:"0–5'",  d:"Repassa l'auxiliar sense mirar: vaig/vas/va/vam/vau/van."},
        {t:"5–12'", d:"Fes els exercicis de la pestanya sense mirar les taules."},
        {t:"12–15'",d:"Corregeix i anota els errors. Repeteix les formes fallades 3 vegades."}
      ]
    },
    { day:5, title:"Producció lliure — el meu cap de setmana",
      tasks:[
        {t:"0–3'",  d:"Repassa errors del dia anterior."},
        {t:"3–15'", d:"Escriu un paràgraf de 8-10 frases explicant el teu cap de setmana passat. Usa el passat perifràstic al màxim. Llegeix-lo en veu alta."}
      ]
    }
  ]
});
