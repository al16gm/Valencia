// SESSIÓ 12 — Condicional
SESSIONS.push({
  id: 'week-12', num: 12,
  title: "Condicional",
  description: "Parlaria, tindria, m'agradaria... Desitjos, hipòtesis i suggeriments.",
  topics: ["Condicional simple", "Desitjos", "Hipòtesis", "Suggeriments", "Cortesia"],

  grammar: {
    notes: [
      "El condicional simple s'usa per a: (1) desitjos: 'M'agradaria viatjar' · (2) hipòtesis: 'Si tinguera diners, compraria un cotxe' · (3) suggeriments: 'Hauries de descansar' · (4) peticions educades: 'Podries ajudar-me?'",
      "Les terminacions del condicional s'afegeixen a l'infinitiu: -ia/-ies/-ia/-íem/-íeu/-ien. Són les mateixes que l'imperfet de -ER/-IR! La diferència és la base: imperfet usa la rel del verb, condicional usa l'infinitiu complet.",
      "Els irregulars del condicional tenen la mateixa arrel irregular que el futur: tindria (tindré), podria (podré), faria (faré), vindria (vindré), diria (diré)."
    ],
    verbGroups: [
      {
        title: "Condicional regular — parlar",
        infinitive: "parlar",
        meaning: "hablar (condicional)",
        conjugations: [
          { p: "jo",         f: "parlaria",   t: "hablaría",    hl: true },
          { p: "tu",         f: "parlaries",  t: "hablarías" },
          { p: "ell/ella",   f: "parlaria",   t: "hablaría" },
          { p: "nosaltres",  f: "parlaríem",  t: "hablaríamos", hl: false },
          { p: "vosaltres",  f: "parlaríeu",  t: "hablaríais" },
          { p: "ells/elles", f: "parlarien",  t: "hablarían" }
        ],
        examples: ["menjar", "treballar", "córrer", "dormir", "eixir"]
      },
      {
        title: "Usos del condicional",
        infinitive: "condicional",
        meaning: "desig / hipòtesi / cortesia",
        conjugations: [
          { p: "desig",       f: "M'agradaria viure al camp.",        t: "Me gustaría vivir en el campo.",   hl: true },
          { p: "desig",       f: "Voldria un café, si us plau.",      t: "Querría un café, por favor." },
          { p: "hipòtesi",    f: "Compraria un cotxe nou.",           t: "Compraría un coche nuevo.",        hl: false },
          { p: "suggeriment", f: "Hauries de descansar més.",         t: "Deberías descansar más.",          hl: true },
          { p: "petició",     f: "Podries ajudar-me?",               t: "¿Podrías ayudarme?" },
          { p: "petició",     f: "Em faries un favor?",              t: "¿Me harías un favor?" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "tindre (cond.)",
      meaning: "tendría",
      conjugations: [
        {p:"jo",         f:"tindria"},
        {p:"tu",         f:"tindries"},
        {p:"ell/ella",   f:"tindria"},
        {p:"nosaltres",  f:"tindríem"},
        {p:"vosaltres",  f:"tindríeu"},
        {p:"ells/elles", f:"tindrien"}
      ]
    },
    {
      infinitive: "poder (cond.)",
      meaning: "podría",
      conjugations: [
        {p:"jo",         f:"podria"},
        {p:"tu",         f:"podries"},
        {p:"ell/ella",   f:"podria"},
        {p:"nosaltres",  f:"podríem"},
        {p:"vosaltres",  f:"podríeu"},
        {p:"ells/elles", f:"podrien"}
      ]
    },
    {
      infinitive: "fer (cond.)",
      meaning: "haría",
      conjugations: [
        {p:"jo",         f:"faria"},
        {p:"tu",         f:"faries"},
        {p:"ell/ella",   f:"faria"},
        {p:"nosaltres",  f:"faríem"},
        {p:"vosaltres",  f:"faríeu"},
        {p:"ells/elles", f:"farien"}
      ]
    },
    {
      infinitive: "Frases condicionals",
      meaning: "si + imperfet subj. + cond.",
      conjugations: [
        {p:"real (pres.)",   f:"Si tinc temps, estudio.  (Si tengo tiempo, estudio)"},
        {p:"hipòtesi",       f:"Si tinguera temps, estudiaria.  (Si tuviera)"},
        {p:"hipòtesi",       f:"Si pogués, viatjaria al Japó."},
        {p:"hipòtesi",       f:"Si fos ric, compraria una illa."},
        {p:"nota A2",        f:"Les frases amb 'si' hipotètic usen imperfet de subjuntiu"},
        {p:"nota A2",        f:"Imperfet subj.: tinguera, pogués, fos... (s'estudia a la s.13)"}
      ]
    }
  ],

  exercises: [
    {id:'w12e1',  q:"M'___ anar de vacances a Grècia.  (gustaría → val.)",             a:"agradaria"},
    {id:'w12e2',  q:"Tu ___ de menjar menys sucre.  (deberías → val.)",                a:"hauries"},
    {id:'w12e3',  q:"___ ajudar-me amb les bosses?  (¿Podrías? — petició)",            a:"Podries"},
    {id:'w12e4',  q:"Jo ___ un cotxe elèctric si tinguera diners.  (compraría)",       a:"compraria"},
    {id:'w12e5',  q:"Ella ___ ser metgessa si pogués estudiar.  (sería)",              a:"seria"},
    {id:'w12e6',  q:"Nosaltres ___ més si tinguérem temps.  (estudiaríamos)",          a:"estudiaríem"},
    {id:'w12e7',  q:"___ un got d'aigua, si us plau?  (¿Podría? — petició educada)",  a:"Podria"},
    {id:'w12e8',  q:"Ells ___ el problema si s'esforçaren.  (solucionarían)",          a:"solucionarien"},
    {id:'w12e9',  q:"Què ___ tu en el meu lloc?  (harías)",                            a:"faries"},
    {id:'w12e10', q:"Jo ___ més si el professor explicara millor.  (aprendería)",      a:"aprendria"}
  ],

  routine: [
    {day:1, title:"Terminacions del condicional",
      tasks:[
        {t:"0–5'",  d:"Terminacions: -ia/-ies/-ia/-íem/-íeu/-ien afegides a l'infinitiu. Conjuga parlar, menjar i córrer."},
        {t:"5–12'", d:"Escriu 6 desitjos personals amb 'M'agradaria...' i 'Voldria...'. Siguen autèntics."},
        {t:"12–15'",d:"Di els desitjos en veu alta amb entonació expressiva."}
      ]
    },
    {day:2, title:"Irregulars i peticions educades",
      tasks:[
        {t:"0–5'",  d:"Irregulars clau: tindria · podria · faria · vindria · diria. Mateixa arrel que el futur + -ia."},
        {t:"5–12'", d:"Practica peticions educades: 'Podries...?', 'Em faries...?', 'Voldries...?' Escriu 5 situacions reals."},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:3, title:"Suggeriments amb HAURIES DE",
      tasks:[
        {t:"0–5'",  d:"'Hauries de + inf.' = deberías + inf. És el suggeriment estàndard en valencià. Conjuga deure en condicional: hauria, hauries, hauria..."},
        {t:"5–12'", d:"Escriu 6 consells per a un amic que vol aprendre valencià. Usa hauries de / hauria de..."},
        {t:"12–15'",d:"Escriu un text de 8 frases: 'Si pogués canviar una cosa de la meua vida...' Usa el condicional al màxim."}
      ]
    },
    {day:4, title:"Repàs i producció",
      tasks:[
        {t:"0–5'",  d:"Les tres famílies del passat: imperfet (s11) · passat perifràstic (s2) · condicional (s12). Quina diferència?"},
        {t:"5–15'", d:"Escriu un text de 10 frases: 'La meua vida perfecta'. Descriu com seria la teua vida ideal usant el condicional. Inclou almenys 3 irregulars."}
      ]
    }
  ]
});
