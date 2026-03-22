// SESSIÓ 5 — Negació i respostes
SESSIONS.push({
  id: 'week-5', num: 5,
  title: "Negació i respostes",
  description: "No, tampoc, mai, res, ningú. Com negar i respondre de forma natural.",
  topics: ["Negació", "Respostes negatives", "Indefinits negatius", "Doble negació"],

  grammar: {
    notes: [
      "En valencià la doble negació és CORRECTA i obligatòria quan hi ha un indefinit negatiu darrere del verb: 'No vinc mai' (mai sense 'no' davant del verb seria incorrecte en posició postverbal).",
      "Però si l'indefinit va davant del verb, el 'no' desapareix: 'Mai vinc' = 'No vinc mai'. Ambdues formes són correctes.",
      "Diferència clau: res (nada) · ningú (nadie) · mai (nunca) · tampoc (tampoco) · cap (ningún/ninguna)."
    ],
    verbGroups: [
      {
        title: "Negació simple — NO + verb",
        infinitive: "negar",
        meaning: "negar",
        conjugations: [
          { p: "Afirmatiu",  f: "Jo vinc.",             t: "Yo vengo.",          hl: false },
          { p: "Negatiu",    f: "Jo no vinc.",           t: "Yo no vengo.",       hl: true },
          { p: "Afirmatiu",  f: "Ella sap la resposta.", t: "Ella sabe la respuesta." },
          { p: "Negatiu",    f: "Ella no sap la resposta.", t: "Ella no sabe la respuesta." },
          { p: "Afirmatiu",  f: "Tenim temps.",          t: "Tenemos tiempo." },
          { p: "Negatiu",    f: "No tenim temps.",       t: "No tenemos tiempo." }
        ],
        examples: []
      },
      {
        title: "Indefinits negatius — doble negació",
        infinitive: "negar",
        meaning: "indefinits",
        conjugations: [
          { p: "res",    f: "No dic res.",          t: "No digo nada.",        hl: true },
          { p: "ningú",  f: "No ve ningú.",         t: "No viene nadie." },
          { p: "mai",    f: "No ix mai.",            t: "No sale nunca." },
          { p: "tampoc", f: "Jo tampoc puc vindre.", t: "Yo tampoco puedo venir." },
          { p: "cap",    f: "No tinc cap problema.", t: "No tengo ningún problema." },
          { p: "enlloc", f: "No el trobe enlloc.",   t: "No lo encuentro en ningún sitio." }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Respostes afirmatives",
      meaning: "sí, és clar, per suposat...",
      conjugations: [
        {p:"neutre",      f:"Sí.  /  Sí, és clar."},
        {p:"emfàtic",     f:"Per suposat!  /  Evidentment!"},
        {p:"informal",    f:"Clar!  /  Ja!  /  Vale!"},
        {p:"acord",       f:"D'acord.  /  Molt bé."},
        {p:"confirmació", f:"Exacte.  /  Això és."},
        {p:"entusiasme",  f:"Perfecte!  /  Fenomenal!"}
      ]
    },
    {
      infinitive: "Respostes negatives",
      meaning: "no, en absolut...",
      conjugations: [
        {p:"neutre",      f:"No.  /  No, gràcies."},
        {p:"emfàtic",     f:"En absolut.  /  Per res del món."},
        {p:"informal",    f:"Que no!  /  Quin va!"},
        {p:"dubte",       f:"No ho sé.  /  No estic segur/a."},
        {p:"disculpa",    f:"Ho sento, però no puc."},
        {p:"suavitzat",   f:"Ara mateix no puc, però..."}
      ]
    },
    {
      infinitive: "Indefinits comparats",
      meaning: "val. vs cast.",
      conjugations: [
        {p:"res",     f:"res  →  nada"},
        {p:"ningú",   f:"ningú  →  nadie"},
        {p:"mai",     f:"mai  →  nunca / jamás"},
        {p:"cap",     f:"cap  →  ningún/ninguna"},
        {p:"tampoc",  f:"tampoc  →  tampoco"},
        {p:"enlloc",  f:"enlloc  →  en ningún sitio"}
      ]
    },
    {
      infinitive: "Posició dels negatius",
      meaning: "regla de posició",
      conjugations: [
        {p:"postverbal",  f:"No vinc mai.  (doble negació ✓)"},
        {p:"preverbal",   f:"Mai vinc.  (sense 'no' ✓)"},
        {p:"postverbal",  f:"No veig ningú.  (doble negació ✓)"},
        {p:"preverbal",   f:"Ningú ve.  (sense 'no' ✓)"},
        {p:"postverbal",  f:"No dic res.  (doble negació ✓)"},
        {p:"preverbal",   f:"Res no em molesta.  (sense 'no' ✓)"}
      ]
    }
  ],

  exercises: [
    {id:'w5e1',  q:"Jo ___ vinc a la festa. Estic malalt.  (no)",                a:"no"},
    {id:'w5e2',  q:"No tinc ___ problema amb això.  (ningún → val.)",            a:"cap"},
    {id:'w5e3',  q:"Ella no ix ___ els caps de setmana.  (nunca → val.)",        a:"mai"},
    {id:'w5e4',  q:"Jo ___ puc vindre, i tu tampoc.  (tampoco → val.)",          a:"tampoc"},
    {id:'w5e5',  q:"No he menjat ___ tot el dia.  (nada → val.)",                a:"res"},
    {id:'w5e6',  q:"No trobe les claus ___. (en ningún sitio → val.)",           a:"enlloc"},
    {id:'w5e7',  q:"___ no ha trucat. Estic sol.  (nadie → val., posició inicial)", a:"Ningú"},
    {id:'w5e8',  q:"No vull res. No vull ___  (tampoco → reforç)",               a:"tampoc"},
    {id:'w5e9',  q:"___ he estat en Japó.  (Nunca → val., posició inicial)",     a:"Mai"},
    {id:'w5e10', q:"No tinc ___ amic ací.  (ningún → val.)",                     a:"cap"}
  ],

  routine: [
    {day:1, title:"Els 6 indefinits negatius",
      tasks:[
        {t:"0–5'",  d:"Memoritza: res · ningú · mai · cap · tampoc · enlloc. Associa cada un al seu equivalent castellà."},
        {t:"5–12'", d:"Nega 6 frases afirmatives, una per cada indefinit: 'Jo vinc sempre' → 'Jo no vinc mai'."},
        {t:"12–15'",d:"Di les frases negades en veu alta."}
      ]
    },
    {day:2, title:"Doble negació — la regla valenciana",
      tasks:[
        {t:"0–5'",  d:"Regla: si l'indefinit va darrere del verb, cal 'no' davant. Si va davant, no cal. Escriu 2 exemples de cada."},
        {t:"5–12'", d:"Transforma 5 frases: posa l'indefinit primer davant, després darrere del verb."},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:3, title:"Respostes naturals",
      tasks:[
        {t:"0–5'",  d:"Aprén les respostes afirmatives i negatives de la taula. Practica el to i l'entonació."},
        {t:"5–12'", d:"Simula un diàleg: algú et fa 8 preguntes (de les sessió 4) i tu respon de forma variada: sí, no, tampoc, mai..."},
        {t:"12–15'",d:"Escriu les respostes i llegeix el diàleg complet en veu alta."}
      ]
    },
    {day:4, title:"Repàs Bloc 1 — A1 Consolidat",
      tasks:[
        {t:"0–5'",  d:"Repàs ràpid: present (s1) · passat perifràstic (s2) · futur (s3) · preguntes (s4) · negació (s5)."},
        {t:"5–12'", d:"Escriu 10 frases barrejant tots els temps i incloent almenys 3 negatives i 2 preguntes."},
        {t:"12–15'",d:"Llegeix-ho en veu alta. Felicita't: has completat el Bloc 1 — A1 Consolidat! 🎉"}
      ]
    }
  ]
});
