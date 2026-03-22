// SESSIÓ 9 — Verbs modals
SESSIONS.push({
  id: 'week-9', num: 9,
  title: "Verbs modals",
  description: "Voler, deure, poder, saber + infinitiu. Obligació, possibilitat i desig.",
  topics: ["Verbs modals", "Poder", "Voler", "Deure", "Saber", "Obligació", "Possibilitat", "Desig"],

  grammar: {
    notes: [
      "Els verbs modals en valencià funcionen igual que en castellà: modal conjugat + infinitiu. La diferència és que 'deure' té dos usos: obligació (deure + inf.) i probabilitat (deure de + inf.).",
      "PODER = poder (capacitat/permís) · VOLER = querer (desig/voluntat) · DEURE = deber (obligació) · SABER = saber (habilitat apresa). No confonguis poder (capacitat) amb saber (habilitat): 'Puc nedar' (tengo las condiciones) vs 'Sé nedar' (he aprendido a nadar).",
      "CALDRE és un verb impersonal molt útil: cal + infinitiu = hace falta + inf. / hay que + inf. Equival a 'ser necessari'."
    ],
    verbGroups: [
      {
        title: "PODER — capacitat i permís",
        infinitive: "poder",
        meaning: "poder",
        conjugations: [
          { p: "jo",         f: "puc",    t: "puedo",   hl: true },
          { p: "tu",         f: "pots",   t: "puedes" },
          { p: "ell/ella",   f: "pot",    t: "puede" },
          { p: "nosaltres",  f: "podem",  t: "podemos" },
          { p: "vosaltres",  f: "podeu",  t: "podéis" },
          { p: "ells/elles", f: "poden",  t: "pueden" }
        ],
        examples: []
      },
      {
        title: "VOLER — desig i voluntat",
        infinitive: "voler",
        meaning: "querer",
        conjugations: [
          { p: "jo",         f: "vull",   t: "quiero",  hl: true },
          { p: "tu",         f: "vols",   t: "quieres" },
          { p: "ell/ella",   f: "vol",    t: "quiere" },
          { p: "nosaltres",  f: "volem",  t: "queremos" },
          { p: "vosaltres",  f: "voleu",  t: "queréis" },
          { p: "ells/elles", f: "volen",  t: "quieren" }
        ],
        examples: []
      },
      {
        title: "DEURE — obligació · SABER — habilitat",
        infinitive: "deure",
        meaning: "deber / saber",
        conjugations: [
          { p: "jo",         f: "dec / haig de",  t: "debo / tengo que",  hl: true },
          { p: "tu",         f: "deus / has de",  t: "debes / tienes que" },
          { p: "ell/ella",   f: "deu / ha de",    t: "debe / tiene que" },
          { p: "jo (saber)", f: "sé parlar",      t: "sé hablar",         hl: true },
          { p: "tu (saber)", f: "saps cuinar",    t: "sabes cocinar" },
          { p: "ell (saber)",f: "sap conduir",    t: "sabe conducir" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "CALDRE — impersonal",
      meaning: "hay que / hace falta",
      conjugations: [
        {p:"present",    f:"Cal estudiar cada dia.  (Hay que estudiar)"},
        {p:"present",    f:"Cal que vingues.  (Es necesario que vengas)"},
        {p:"passat",     f:"Calia fer-ho millor.  (Hacía falta hacerlo mejor)"},
        {p:"futur",      f:"Caldrà esperar.  (Habrá que esperar)"},
        {p:"negació",    f:"No cal que vingues.  (No hace falta que vengas)"},
        {p:"nota",       f:"CALDRE és sempre impersonal: no té subjecte personal"}
      ]
    },
    {
      infinitive: "PODER vs SABER",
      meaning: "confusió freqüent",
      conjugations: [
        {p:"poder (condició)", f:"Puc nedar  (tengo las condiciones físicas)"},
        {p:"saber (habilitat)",f:"Sé nedar  (he aprendido, tengo la técnica)"},
        {p:"poder (permís)",   f:"Pots entrar.  (Puedes entrar — permiso)"},
        {p:"saber (coneixem.)",f:"Saps on és?  (¿Sabes dónde está?)"},
        {p:"poder (possib.)",  f:"Pot ser que ploga.  (Puede que llueva)"},
        {p:"nota",             f:"En el dia a dia molts parlants usen 'poder' per als dos"}
      ]
    },
    {
      infinitive: "DEURE vs HAVER DE",
      meaning: "obligació — dos formes",
      conjugations: [
        {p:"deure + inf.",    f:"Dec estudiar més.  (Debo estudiar más)"},
        {p:"haver de + inf.", f:"He d'estudiar més.  (Tengo que estudiar más)"},
        {p:"deure de + inf.", f:"Deu de ser tard.  (Debe de ser tarde — probabilitat)"},
        {p:"nota",            f:"'Haver de' és més col·loquial que 'deure'"},
        {p:"passat",          f:"Havia d'anar.  (Tenía que ir)"},
        {p:"futur",           f:"Hauré d'anar.  (Tendré que ir)"}
      ]
    },
    {
      infinitive: "Expressions amb modals",
      meaning: "frases fetes útils",
      conjugations: [
        {p:"desig",       f:"Voldria un cafè.  (Querría un café — forma educada)"},
        {p:"permís",      f:"Puc passar?  (¿Puedo pasar?)"},
        {p:"impossib.",   f:"No puc més.  (No puedo más)"},
        {p:"habilitat",   f:"No sé com fer-ho.  (No sé cómo hacerlo)"},
        {p:"obligació",   f:"Has de vindre ja.  (Tienes que venir ya)"},
        {p:"necessitat",  f:"Cal tenir paciència.  (Hace falta tener paciencia)"}
      ]
    }
  ],

  exercises: [
    {id:'w9e1',  q:"Jo ___ parlar anglès molt bé.  (sé/puedo → habilitat apresa)",  a:"sé"},
    {id:'w9e2',  q:"Tu ___ vindre a la reunió demà.  (tienes que → val.)",           a:"has de"},
    {id:'w9e3',  q:"Ella ___ un got d'aigua, si us plau.  (quiere)",                a:"vol"},
    {id:'w9e4',  q:"Nosaltres no ___ fer soroll. (podemos — permiso negado)",       a:"podem"},
    {id:'w9e5',  q:"___ estudiar cada dia per aprovar.  (Hay que → caldre)",        a:"Cal"},
    {id:'w9e6',  q:"Ells ___ arribar tard si no s'afanyen.  (pueden — possibilitat)", a:"poden"},
    {id:'w9e7',  q:"Jo ___ un cafè amb llet, gràcies.  (querría — forma educada)",  a:"voldria"},
    {id:'w9e8',  q:"___ que vingues ara mateix.  (Hace falta → caldre)",            a:"Cal"},
    {id:'w9e9',  q:"Tu no ___ on és la clau?  (sabes)",                             a:"saps"},
    {id:'w9e10', q:"Ell ___ de ser el director nou.  (debe de — probabilitat)",     a:"deu"}
  ],

  routine: [
    {day:1, title:"PODER i VOLER",
      tasks:[
        {t:"0–5'",  d:"Conjuga poder i voler en present. Memoritza: puc/pots/pot i vull/vols/vol."},
        {t:"5–12'", d:"Escriu 5 frases amb poder (capacitat/permís) i 5 amb voler (desig). Varia les persones."},
        {t:"12–15'",d:"Di les frases en veu alta. Practica el to de petició educada amb voldria."}
      ]
    },
    {day:2, title:"DEURE / HAVER DE i SABER",
      tasks:[
        {t:"0–5'",  d:"Deure/haver de = obligació. Saber = habilitat apresa. Crea 3 exemples de cada."},
        {t:"5–12'", d:"Fes la distinció poder vs saber: escriu 4 parelles de frases on canvia el sentit."},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:3, title:"CALDRE i expressions modals",
      tasks:[
        {t:"0–5'",  d:"Caldre és impersonal: cal + inf. / cal que + subjuntiu. Practica: Cal estudiar · Cal que vingues."},
        {t:"5–12'", d:"Escriu 8 frases amb modals variats descrivint obligacions, habilitats i desitjos de la teua vida."},
        {t:"12–15'",d:"Llegeix en veu alta i practica la pronunciació de vull, puc, sé, cal."}
      ]
    },
    {day:4, title:"Producció — diàleg de plans",
      tasks:[
        {t:"0–5'",  d:"Repàs: poder/voler/deure/saber/caldre. Quina diferència hi ha entre cadascun?"},
        {t:"5–15'", d:"Escriu un diàleg de 12 línies entre dues persones planificant un viatge. Han d'aparèixer tots els modals almenys una vegada."}
      ]
    }
  ]
});
