// SESSIÓ 11 — Imperfet d'indicatiu
SESSIONS.push({
  id: 'week-11', num: 11,
  title: "Imperfet d'indicatiu",
  description: "Parlava, tenia, anava... Accions habituals i descripcions en el passat.",
  topics: ["Imperfet", "Accions habituals passades", "Descripcions al passat", "Imperfet vs Passat Perifràstic"],

  grammar: {
    notes: [
      "L'imperfet expressa: (1) accions habituals al passat (antes solía...), (2) descripcions al passat (era, tenia, feia...), (3) accions en curs quan va passar alguna altra cosa ('Dormia quan va trucar').",
      "Les terminacions de l'imperfet són molt regulars: -ava/-aves/-ava/-àvem/-àveu/-aven per a -AR · -ia/-ies/-ia/-íem/-íeu/-ien per a -ER i -IR.",
      "Clau: Imperfet = descripció/hàbit passat (fondo). Passat perifràstic = acció concreta puntual (primer pla). 'Quan era xicotet, vivia a Barcelona. Un dia vaig conèixer el meu millor amic.'"
    ],
    verbGroups: [
      {
        title: "Imperfet -AR · parlar",
        infinitive: "parlar",
        meaning: "hablar (imperfet)",
        conjugations: [
          { p: "jo",         f: "parlava",   t: "hablaba",    hl: true },
          { p: "tu",         f: "parlaves",  t: "hablabas" },
          { p: "ell/ella",   f: "parlava",   t: "hablaba" },
          { p: "nosaltres",  f: "parlàvem",  t: "hablábamos", hl: false },
          { p: "vosaltres",  f: "parlàveu",  t: "hablabais" },
          { p: "ells/elles", f: "parlaven",  t: "hablaban" }
        ],
        examples: ["menjar", "treballar", "estudiar", "caminar", "comprar"]
      },
      {
        title: "Imperfet -ER/-IR · tindre / dormir",
        infinitive: "tindre",
        meaning: "tener (imperfet)",
        conjugations: [
          { p: "jo",         f: "tenia",    t: "tenía",      hl: true },
          { p: "tu",         f: "tenies",   t: "tenías" },
          { p: "ell/ella",   f: "tenia",    t: "tenía" },
          { p: "nosaltres",  f: "teníem",   t: "teníamos",   hl: false },
          { p: "vosaltres",  f: "teníeu",   t: "teníais" },
          { p: "ells/elles", f: "tenien",   t: "tenían" }
        ],
        examples: ["dormir", "córrer", "eixir", "llegir", "sentir"]
      }
    ]
  },

  irregulars: [
    {
      infinitive: "ser (imperfet)",
      meaning: "era — únic irregular",
      conjugations: [
        {p:"jo",         f:"era"},
        {p:"tu",         f:"eres"},
        {p:"ell/ella",   f:"era"},
        {p:"nosaltres",  f:"érem"},
        {p:"vosaltres",  f:"éreu"},
        {p:"ells/elles", f:"eren"}
      ]
    },
    {
      infinitive: "anar (imperfet)",
      meaning: "anava",
      conjugations: [
        {p:"jo",         f:"anava"},
        {p:"tu",         f:"anaves"},
        {p:"ell/ella",   f:"anava"},
        {p:"nosaltres",  f:"anàvem"},
        {p:"vosaltres",  f:"anàveu"},
        {p:"ells/elles", f:"anaven"}
      ]
    },
    {
      infinitive: "fer (imperfet)",
      meaning: "feia",
      conjugations: [
        {p:"jo",         f:"feia"},
        {p:"tu",         f:"feies"},
        {p:"ell/ella",   f:"feia"},
        {p:"nosaltres",  f:"fèiem"},
        {p:"vosaltres",  f:"fèieu"},
        {p:"ells/elles", f:"feien"}
      ]
    },
    {
      infinitive: "Imperfet vs Passat Perifràstic",
      meaning: "la distinció fonamental",
      conjugations: [
        {p:"hàbit (imp.)",   f:"De xicotet menjava paella cada diumenge."},
        {p:"acció (p.pf.)",  f:"Ahir vaig menjar paella per primera vegada."},
        {p:"descripció",     f:"La casa era gran i tenia un jardí enorme."},
        {p:"acció puntual",  f:"De sobte va entrar un home amb barba."},
        {p:"fons (imp.)",    f:"Dormia quan va sonar el telèfon."},
        {p:"truc",           f:"IMP = càmera lenta / P.PF = foto instantània"}
      ]
    }
  ],

  exercises: [
    {id:'w11e1',  q:"De xicotet, jo ___ al parc cada tarda.  (anar — hàbit)",          a:"anava"},
    {id:'w11e2',  q:"Quan era jove, ella ___ moltes hores.  (dormir — hàbit)",          a:"dormia"},
    {id:'w11e3',  q:"Nosaltres ___ en un pis xicotet al centre.  (viure — descripció)", a:"vivíem"},
    {id:'w11e4',  q:"Ells ___ molt de temps lliure abans.  (tindre — descripció)",      a:"tenien"},
    {id:'w11e5',  q:"Jo ___ la televisió quan va arribar.  (mirar — acció en curs)",    a:"mirava"},
    {id:'w11e6',  q:"Com ___ el teu professor de valencià?  (ser — descripció)",        a:"era"},
    {id:'w11e7',  q:"Tu sempre ___ la veritat.  (dir — hàbit)",                         a:"deies"},
    {id:'w11e8',  q:"El cotxe ___ blau i ___ molt vell.  (ser, tindre — descripció)",  a:"era · tenia"},
    {id:'w11e9',  q:"Cada estiu ___ a la platja.  (anar — nosaltres, hàbit)",          a:"anàvem"},
    {id:'w11e10', q:"Ells ___ molt quan ___ joves.  (treballar, ser — hàbit+descripció)", a:"treballaven · eren"}
  ],

  routine: [
    {day:1, title:"Terminacions de l'imperfet",
      tasks:[
        {t:"0–5'",  d:"Memoritza: -ava/-aves/-ava/-àvem/-àveu/-aven (AR) · -ia/-ies/-ia/-íem/-íeu/-ien (ER/IR). Escriu-les sense mirar."},
        {t:"5–12'", d:"Conjuga 4 verbs en imperfet: parlar, menjar, tindre, dormir. Totes les persones."},
        {t:"12–15'",d:"Di les formes en veu alta. L'accent d'àvem/àveu i íem/íeu és important."}
      ]
    },
    {day:2, title:"Usos de l'imperfet — hàbit i descripció",
      tasks:[
        {t:"0–5'",  d:"Imperfet = hàbit passat ('de xicotet...') + descripció ('era alt, tenia...'). Crea 2 exemples de cada."},
        {t:"5–12'", d:"Escriu 6 frases sobre la teua infància: com eres, on vivies, què feies cada dia."},
        {t:"12–15'",d:"Di les frases en veu alta com si les explicares a algú."}
      ]
    },
    {day:3, title:"Imperfet vs Passat Perifràstic",
      tasks:[
        {t:"0–5'",  d:"Regla: imperfet = fons/context. Passat perifràstic = acció concreta. 'Caminava pel carrer quan va caure.'"},
        {t:"5–12'", d:"Exercicis de la pestanya — posa atenció als contextos de cada frase."},
        {t:"12–15'",d:"Escriu 4 frases que combinen els dos temps: imperfet + 'quan' + passat perifràstic."}
      ]
    },
    {day:4, title:"Els irregulars i producció",
      tasks:[
        {t:"0–5'",  d:"SER és l'únic gran irregular: era/eres/era/érem/éreu/eren. ANAR = anava. FER = feia. Memoritza."},
        {t:"5–15'", d:"Escriu un text de 10-12 frases sobre com era la teua vida fa 10 anys: on vivies, amb qui, què feies, com eres... Usa imperfet i passat perifràstic."}
      ]
    }
  ]
});
