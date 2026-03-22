// SESSIÓ 19 — Expressions col·loquials
SESSIONS.push({
  id: 'week-19', num: 19,
  title: "Expressions col·loquials",
  description: "Frases fetes, expressions valencianistes i registre informal. Parlar com un natiu.",
  topics: ["Expressions col·loquials", "Frases fetes", "Valencianismes", "Registre informal", "Interjeccions", "Connectores"],

  grammar: {
    notes: [
      "El valencià col·loquial té trets propis que el diferencien del català estàndard: l'ús de 'anar-se'n' (irse), 'fer-se tard' (hacerse tarde), 'tindre gana' (tener hambre), 'fer falta' (hacer falta).",
      "Les interjeccions valencianes són molt expressives i característiques: 'Xe!' (¡Vaya! / ¡Hombre!), 'Mec!' (expressa sorpresa o decepció), 'Ostres!' (¡Ostras!), 'Mecatxis!' (¡Mecachis!).",
      "Els connectors del discurs oral: 'bueno' (bueno), 'o siga' (o sea), 'és a dir' (es decir), 'per cert' (por cierto), 'a més' (además), 'però' (pero), 'tanmateix' (sin embargo)."
    ],
    verbGroups: [
      {
        title: "Expressions amb TINDRE",
        infinitive: "tindre",
        meaning: "tener (expressions)",
        conjugations: [
          { p: "gana",      f: "Tinc molta gana.",         t: "Tengo mucha hambre.",       hl: true },
          { p: "son",       f: "Tinc son.",                t: "Tengo sueño." },
          { p: "fred/calor",f: "Tinc fred / Tinc calor.",  t: "Tengo frío / calor.",       hl: false },
          { p: "por",       f: "Tinc por.",                t: "Tengo miedo." },
          { p: "pressa",    f: "Tinc pressa.",             t: "Tengo prisa.",              hl: true },
          { p: "raó",       f: "Tens raó.",                t: "Tienes razón." }
        ],
        examples: []
      },
      {
        title: "Expressions amb FER",
        infinitive: "fer",
        meaning: "hacer (expressions)",
        conjugations: [
          { p: "temps",     f: "Fa fred / Fa calor / Fa sol.", t: "Hace frío / calor / sol.",  hl: true },
          { p: "temps",     f: "Fa vent / Plou / Neva.",      t: "Hace viento / Llueve / Nieva." },
          { p: "falta",     f: "Em fa falta estudiar.",       t: "Me hace falta estudiar.",   hl: false },
          { p: "il·lusió",  f: "Em fa molta il·lusió!",       t: "Me hace mucha ilusión." },
          { p: "gràcia",    f: "Això em fa gràcia.",          t: "Eso me hace gracia." },
          { p: "pena",      f: "Em fa molta pena.",           t: "Me da mucha pena." }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Interjeccions valencianes",
      meaning: "exclamacions pròpies",
      conjugations: [
        {p:"Xe!",        f:"Xe, quina sorpresa!  (¡Vaya, qué sorpresa!)"},
        {p:"Ostres!",    f:"Ostres, no me'n recordava!  (¡Ostras!)"},
        {p:"Mecatxis!",  f:"Mecatxis, quina calor!  (¡Mecachis! — eufemisme)"},
        {p:"Mec!",       f:"Mec... no ha anat bé.  (decepció suau)"},
        {p:"Hala!",      f:"Hala, ja ha acabat!  (¡Hala! — sorpresa)"},
        {p:"Au!",        f:"Au, va, fem-ho!  (¡Venga! / ¡Vamos!)"}
      ]
    },
    {
      infinitive: "Frases fetes habituals",
      meaning: "col·loquialismes",
      conjugations: [
        {p:"anar-se'n",   f:"Me'n vaig. Fins demà!  (Me voy)"},
        {p:"fer-se tard", f:"Se m'ha fet tard.  (Se me ha hecho tarde)"},
        {p:"quedar bé",   f:"Ha quedat molt bé.  (Ha quedado muy bien)"},
        {p:"tirar avant", f:"Tirem avant!  (¡Tiramos adelante! / ¡Seguimos!)"},
        {p:"no hi ha res",f:"No hi ha res a fer.  (No hay nada que hacer)"},
        {p:"a vore",      f:"A vore...  (A ver...)"}
      ]
    },
    {
      infinitive: "Connectors del discurs",
      meaning: "enllaçar idees",
      conjugations: [
        {p:"addició",     f:"a més · a més a més · també · fins i tot · és que"},
        {p:"contrast",    f:"però · tanmateix · tot i que · malgrat · en canvi"},
        {p:"causa",       f:"perquè · ja que · com que · a causa de · gràcies a"},
        {p:"conseqüència",f:"per tant · per això · llavors · doncs · aleshores"},
        {p:"aclariment",  f:"o siga · és a dir · vull dir · en altres paraules"},
        {p:"temps",       f:"primer · després · finalment · mentrestant · quan"}
      ]
    },
    {
      infinitive: "Expressions d'acord i desacord",
      meaning: "conversa natural",
      conjugations: [
        {p:"acord",       f:"Tens raó. · Exacte. · Estic d'acord. · Clar que sí."},
        {p:"acord total", f:"Totalment. · Per suposat. · Evidentment. · Ja ho crec!"},
        {p:"desacord",    f:"No ho veig així. · No hi estic d'acord. · Que no!"},
        {p:"dubte",       f:"Mm, no sé... · Pot ser... · Depén. · No n'estic segur."},
        {p:"sorpresa",    f:"De debò? · En serio? · Xe! · No m'ho puc creure!"},
        {p:"indiferència",f:"M'és igual. · Com vulgues. · El que tu digues."}
      ]
    }
  ],

  exercises: [
    {id:'w19e1',  q:"___ molta gana! Quan dinem?  (Tengo → val.)",                       a:"Tinc"},
    {id:'w19e2',  q:"___, quina calor fa hui!  (¡Hombre!/¡Vaya! — interjecció val.)",    a:"Xe"},
    {id:'w19e3',  q:"Em ___ molta il·lusió la teua visita.  (hace → val.)",              a:"fa"},
    {id:'w19e4',  q:"Me'n ___. Fins demà!  (me voy → val.)",                             a:"vaig"},
    {id:'w19e5',  q:"___ a dir, no puc vindre avui.  (O sea → val.)",                    a:"O siga"},
    {id:'w19e6',  q:"Tens ___. És una molt bona idea.  (razón → val.)",                  a:"raó"},
    {id:'w19e7',  q:"___! Va, fem-ho ara!  (¡Venga! — interjecció)",                     a:"Au"},
    {id:'w19e8',  q:"Se m'ha fet ___.  (tarde → val.)",                                  a:"tard"},
    {id:'w19e9',  q:"___ que no puc vindre, te n'avise.  (Ya que — causa)",              a:"Ja que"},
    {id:'w19e10', q:"Em fa molta ___ que te'n vages.  (pena)",                           a:"pena"}
  ],

  routine: [
    {day:1, title:"Expressions amb TINDRE i FER",
      tasks:[
        {t:"0–5'",  d:"Memoritza: tinc gana · tinc son · tinc fred · tinc por · tinc pressa · tinc raó. Fa fred · fa calor · fa sol · fa falta · fa il·lusió."},
        {t:"5–12'", d:"Escriu 10 frases amb expressions de tindre i fer aplicades a la teua vida d'avui."},
        {t:"12–15'",d:"Di les frases en veu alta amb entonació natural."}
      ]
    },
    {day:2, title:"Interjeccions i frases fetes",
      tasks:[
        {t:"0–5'",  d:"Practica les interjeccions: Xe! · Ostres! · Mecatxis! · Hala! · Au! Practica-les amb contexts apropiats."},
        {t:"5–12'", d:"Escriu 6 situacions on usaries cada interjecció. Escriu també la frase completa."},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:3, title:"Connectors i expressions d'acord",
      tasks:[
        {t:"0–5'",  d:"Aprén els connectors: a més · però · per tant · o siga · ja que · primer/després/finalment."},
        {t:"5–12'", d:"Escriu un text de 8 frases sobre un tema qualsevol usant almenys 5 connectors diferents."},
        {t:"12–15'",d:"Practica expressions d'acord i desacord. Simula un debat curt sobre un tema quotidià."}
      ]
    },
    {day:4, title:"Producció — conversa col·loquial",
      tasks:[
        {t:"0–5'",  d:"Repàs de tot el vocabulari col·loquial de la sessió."},
        {t:"5–15'", d:"Escriu un diàleg informal entre dos amics que no es veuen des de fa temps. Han de parlar de com els va la vida, plans, i han d'usar almenys: 3 interjeccions, 4 expressions de tindre/fer, 3 connectors i 2 expressions d'acord/desacord."}
      ]
    }
  ]
});
