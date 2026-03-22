// SESSIÓ 13 — Present de subjuntiu
SESSIONS.push({
  id: 'week-13', num: 13,
  title: "Present de subjuntiu",
  description: "Introducció: vull que vingues, espere que puga... Expressions de desig i dubte.",
  topics: ["Subjuntiu", "Desig", "Dubte", "Emoció", "Vull que", "Espere que", "Cal que"],

  grammar: {
    notes: [
      "El subjuntiu apareix en oracions subordinades introduïdes per 'que' quan hi ha un canvi de subjecte i s'expressa desig, dubte, emoció o obligació: 'Vull QUE TU vingues' (jo vull, tu véns → subjuntiu).",
      "Les terminacions del present de subjuntiu en valencià: -AR → -e/-es/-e/-em/-eu/-en (com el present d'indicatiu dels verbs -ER!). -ER/-IR → -a/-es/-a/-em/-eu/-en.",
      "Triggers principals del subjuntiu: VOLER QUE · ESPERAR QUE · CAL QUE · DEMANAR QUE · ALEGRAR-SE QUE · TINDRE POR QUE · DUBTAR QUE · NO CREURE QUE."
    ],
    verbGroups: [
      {
        title: "Subjuntiu -AR · parlar",
        infinitive: "parlar",
        meaning: "hablar (subjuntiu)",
        conjugations: [
          { p: "jo",         f: "parle",   t: "hable",    hl: true },
          { p: "tu",         f: "parles",  t: "hables" },
          { p: "ell/ella",   f: "parle",   t: "hable" },
          { p: "nosaltres",  f: "parlem",  t: "hablemos", hl: false },
          { p: "vosaltres",  f: "parleu",  t: "habléis" },
          { p: "ells/elles", f: "parlen",  t: "hablen" }
        ],
        examples: ["menjar", "treballar", "estudiar", "comprar", "caminar"]
      },
      {
        title: "Subjuntiu -ER/-IR · tindre / dormir",
        infinitive: "tindre",
        meaning: "tener (subjuntiu)",
        conjugations: [
          { p: "jo",         f: "tinga",   t: "tenga",    hl: true },
          { p: "tu",         f: "tingues", t: "tengas" },
          { p: "ell/ella",   f: "tinga",   t: "tenga" },
          { p: "nosaltres",  f: "tinguem", t: "tengamos", hl: false },
          { p: "vosaltres",  f: "tingueu", t: "tengáis" },
          { p: "ells/elles", f: "tinguen", t: "tengan" }
        ],
        examples: ["dormir", "córrer", "eixir", "llegir", "poder"]
      }
    ]
  },

  irregulars: [
    {
      infinitive: "ser (subjuntiu)",
      meaning: "sea",
      conjugations: [
        {p:"jo",         f:"siga"},
        {p:"tu",         f:"sigues"},
        {p:"ell/ella",   f:"siga"},
        {p:"nosaltres",  f:"siguem"},
        {p:"vosaltres",  f:"sigueu"},
        {p:"ells/elles", f:"siguen"}
      ]
    },
    {
      infinitive: "anar (subjuntiu)",
      meaning: "vaya",
      conjugations: [
        {p:"jo",         f:"vaja"},
        {p:"tu",         f:"vages"},
        {p:"ell/ella",   f:"vaja"},
        {p:"nosaltres",  f:"vajem"},
        {p:"vosaltres",  f:"vajeu"},
        {p:"ells/elles", f:"vajen"}
      ]
    },
    {
      infinitive: "fer (subjuntiu)",
      meaning: "haga",
      conjugations: [
        {p:"jo",         f:"faça"},
        {p:"tu",         f:"faces"},
        {p:"ell/ella",   f:"faça"},
        {p:"nosaltres",  f:"facem"},
        {p:"vosaltres",  f:"faceu"},
        {p:"ells/elles", f:"facen"}
      ]
    },
    {
      infinitive: "Triggers del subjuntiu",
      meaning: "expressions que el demanen",
      conjugations: [
        {p:"desig",      f:"Vull que vingues. · Voldria que ho feres."},
        {p:"esperança",  f:"Espere que tot vaja bé. · Desitge que sigues feliç."},
        {p:"obligació",  f:"Cal que estudies. · És necessari que ho faces."},
        {p:"emoció",     f:"M'alegre que estigues ací. · Tinc por que no puga."},
        {p:"dubte",      f:"Dubte que siga veritat. · No crec que vinguen."},
        {p:"petició",    f:"Et demane que m'ajudes. · Li diré que ho faça."}
      ]
    }
  ],

  exercises: [
    {id:'w13e1',  q:"Vull que tu ___ amb mi al mercat.  (venir — subjuntiu)",          a:"vingues"},
    {id:'w13e2',  q:"Espere que tot ___ bé a l'examen.  (anar — subjuntiu)",           a:"vaja"},
    {id:'w13e3',  q:"Cal que ___ més hores cada dia.  (estudiar — subjuntiu, tu)",     a:"estudies"},
    {id:'w13e4',  q:"M'alegre que ___ ací amb nosaltres.  (estar — subjuntiu, ell)",   a:"estiga"},
    {id:'w13e5',  q:"No crec que ___ temps demà.  (tindre — subjuntiu, ella)",         a:"tinga"},
    {id:'w13e6',  q:"Et demane que ___ la veritat.  (dir — subjuntiu)",                a:"digues"},
    {id:'w13e7',  q:"Dubte que ells ___ a la reunió.  (vindre — subjuntiu)",           a:"vinguen"},
    {id:'w13e8',  q:"Vols que jo ___ el sopar?  (fer — subjuntiu)",                    a:"faça"},
    {id:'w13e9',  q:"És important que ___ a temps.  (arribar — subjuntiu, vosaltres)", a:"arribeu"},
    {id:'w13e10', q:"Tinc por que no ___ bé.  (dormir — subjuntiu, ella)",             a:"dorma"}
  ],

  routine: [
    {day:1, title:"Terminacions del subjuntiu",
      tasks:[
        {t:"0–5'",  d:"AR → -e/-es/-e/-em/-eu/-en. ER/IR → -a/-es/-a/-em/-eu/-en. Fixa't: les terminacions s'intercanvien respecte a l'indicatiu."},
        {t:"5–12'", d:"Conjuga parlar, menjar i tindre en subjuntiu. Totes les persones."},
        {t:"12–15'",d:"Di les formes en veu alta: 'que jo parle, que tu parles, que ell parle...'"}
      ]
    },
    {day:2, title:"Triggers — quan usar el subjuntiu",
      tasks:[
        {t:"0–5'",  d:"Memoritza els triggers: vull que · espere que · cal que · m'alegre que · dubte que · no crec que."},
        {t:"5–12'", d:"Escriu 6 frases amb canvi de subjecte: 'Jo vull que TU...', 'Ella espera que NOSALTRES...'"},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:3, title:"Irregulars: ser, anar, fer",
      tasks:[
        {t:"0–5'",  d:"Memoritza: siga/sigues/siga · vaja/vages/vaja · faça/faces/faça. Repeteix 3 vegades."},
        {t:"5–12'", d:"Crea 6 frases amb els irregulars: 'Vull que siga...', 'Espere que vaja...', 'Cal que faça...'"},
        {t:"12–15'",d:"Compara amb l'indicatiu: és/va/fa → siga/vaja/faça. La diferència és clara."}
      ]
    },
    {day:4, title:"Producció — desitjos i peticions",
      tasks:[
        {t:"0–5'",  d:"Repàs: indicatiu = realitat · subjuntiu = desig/dubte/emoció/obligació."},
        {t:"5–15'", d:"Escriu un text de 10 frases expressant: 3 desitjos per als teus éssers estimats (vull que...), 3 esperances (espere que...), 2 dubtes (dubte que...) i 2 peticions (et demane que...)."}
      ]
    }
  ]
});
