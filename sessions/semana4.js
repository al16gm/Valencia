// SESSIÓ 4 — Preguntes essencials
SESSIONS.push({
  id: 'week-4', num: 4,
  title: "Preguntes essencials",
  description: "Què, On, Quan, Com, Per què, Qui, Quant. Estructura de la pregunta en valencià.",
  topics: ["Preguntes", "Interrogatius", "Entonació", "Preguntes directes i indirectes"],

  grammar: {
    notes: [
      "En valencià no cal invertir subjecte i verb per fer una pregunta. L'entonació ascendent ja indica la pregunta: 'Tu véns?' és igual de correcte que '¿Véns tu?'",
      "Els interrogatius sempre porten accent gràfic: què, on, quan, com, per què, qui, quant. Sense accent canvien de funció: que (conjunció), on (adverbi relatiu).",
      "Per què (dos paraules, accent) = ¿por qué? · Perquè (una paraula) = porque. Aquesta diferència és fonamental."
    ],
    verbGroups: [
      {
        title: "Interrogatius — estructura bàsica",
        infinitive: "preguntar",
        meaning: "preguntar",
        conjugations: [
          { p: "Què",     f: "Què fas avui?",          t: "¿Qué haces hoy?",         hl: true },
          { p: "On",      f: "On vius?",                t: "¿Dónde vives?" },
          { p: "Quan",    f: "Quan arribes?",           t: "¿Cuándo llegas?" },
          { p: "Com",     f: "Com estàs?",              t: "¿Cómo estás?" },
          { p: "Per què", f: "Per què no véns?",        t: "¿Por qué no vienes?",     hl: false },
          { p: "Qui",     f: "Qui és eixe?",            t: "¿Quién es ese?" },
          { p: "Quant",   f: "Quant costa?",            t: "¿Cuánto cuesta?" },
          { p: "Quants",  f: "Quants anys tens?",       t: "¿Cuántos años tienes?" }
        ],
        examples: []
      },
      {
        title: "Preguntes en passat, present i futur",
        infinitive: "preguntar",
        meaning: "en els tres temps",
        conjugations: [
          { p: "Present",  f: "Què fas ara?",            t: "¿Qué haces ahora?",       hl: true },
          { p: "Passat",   f: "Què vas fer ahir?",       t: "¿Qué hiciste ayer?" },
          { p: "Futur",    f: "Què faràs demà?",         t: "¿Qué harás mañana?" },
          { p: "Present",  f: "On treballes?",           t: "¿Dónde trabajas?" },
          { p: "Passat",   f: "On vas anar el cap de setmana?", t: "¿Dónde fuiste el fin de semana?" },
          { p: "Futur",    f: "On aniràs de vacances?",  t: "¿Adónde irás de vacaciones?" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Preguntes amb ser/estar",
      meaning: "ser/estar en preguntes",
      conjugations: [
        {p:"identitat",   f:"Qui ets?  /  Qui és ella?"},
        {p:"origen",      f:"D'on ets?  /  De on és?"},
        {p:"estat",       f:"Com estàs?  /  Com està?"},
        {p:"lloc",        f:"On estàs?  /  On és la clau?"},
        {p:"qualitat",    f:"Com és?  (caràcter/aspecte)"},
        {p:"preu/temps",  f:"Quant és?  /  Quina hora és?"}
      ]
    },
    {
      infinitive: "Preguntes habituals",
      meaning: "frases fetes essencials",
      conjugations: [
        {p:"salutació",   f:"Com et dius?  — Em dic..."},
        {p:"edat",        f:"Quants anys tens?  — Tinc..."},
        {p:"feina",       f:"A què et dediques?  — Sóc..."},
        {p:"lloc",        f:"D'on ets?  — Sóc de..."},
        {p:"telèfon",     f:"Quin és el teu telèfon?"},
        {p:"opinió",      f:"Què en penses?  /  Què et sembla?"}
      ]
    },
    {
      infinitive: "Per què vs Perquè",
      meaning: "error freqüent",
      conjugations: [
        {p:"pregunta",    f:"Per què no véns?  (¿por qué?)"},
        {p:"resposta",    f:"Perquè estic cansat.  (porque)"},
        {p:"pregunta",    f:"Per què estudies valencià?"},
        {p:"resposta",    f:"Perquè vull integrar-me."},
        {p:"pregunta",    f:"Per què no ho has fet?"},
        {p:"resposta",    f:"Perquè no he tingut temps."}
      ]
    },
    {
      infinitive: "Que vs Què",
      meaning: "accent important",
      conjugations: [
        {p:"interrogatiu",f:"Què vols?  (¿qué quieres?)"},
        {p:"conjunció",   f:"Sé que véns.  (que = que)"},
        {p:"interrogatiu",f:"Què has dit?  (¿qué has dicho?)"},
        {p:"relatiu",     f:"El cotxe que tens.  (que = que)"},
        {p:"exclamatiu",  f:"Què bonic!  (¡qué bonito!)"},
        {p:"conjunció",   f:"Vull que vingues.  (que = que)"}
      ]
    }
  ],

  exercises: [
    {id:'w4e1',  q:"___ et dius?  (¿Cómo te llamas?)",                    a:"Com"},
    {id:'w4e2',  q:"___ fas este cap de setmana?  (¿Qué...?)",            a:"Què"},
    {id:'w4e3',  q:"___ vius?  (¿Dónde vives?)",                          a:"On"},
    {id:'w4e4',  q:"___ anys tens?  (¿Cuántos años tienes?)",             a:"Quants"},
    {id:'w4e5',  q:"___ no vas vindre ahir?  (¿Por qué...?)",             a:"Per què"},
    {id:'w4e6',  q:"___ és la teua professora?  (¿Quién es...?)",         a:"Qui"},
    {id:'w4e7',  q:"___ arribarà el tren?  (¿Cuándo llegará...?)",        a:"Quan"},
    {id:'w4e8',  q:"No vaig anar ___ estava cansat.  (porque)",           a:"perquè"},
    {id:'w4e9',  q:"___ costa este llibre?  (¿Cuánto cuesta...?)",        a:"Quant"},
    {id:'w4e10', q:"___ fas en el teu temps lliure?  (¿Qué...?)",         a:"Què"}
  ],

  routine: [
    {day:1, title:"Els 7 interrogatius",
      tasks:[
        {t:"0–5'",  d:"Llegeix la taula d'interrogatius en veu alta. Memoritza: Què · On · Quan · Com · Per què · Qui · Quant."},
        {t:"5–12'", d:"Per cada interrogatiu, inventa 2 preguntes sobre la teua vida. Escriu-les."},
        {t:"12–15'",d:"Di les preguntes en veu alta i intenta respondre-les."}
      ]
    },
    {day:2, title:"Per què vs Perquè",
      tasks:[
        {t:"0–5'",  d:"Regla: Per què = pregunta (2 paraules, accent). Perquè = resposta (1 paraula). Repete 5 vegades."},
        {t:"5–12'", d:"Escriu 4 diàlegs curts: pregunta amb per què + resposta amb perquè."},
        {t:"12–15'",d:"Practica en veu alta: 'Per què...?' / 'Perquè...'"}
      ]
    },
    {day:3, title:"Preguntes en els tres temps",
      tasks:[
        {t:"0–5'",  d:"Practica la mateixa pregunta en present, passat i futur: Què fas? Què vas fer? Què faràs?"},
        {t:"5–12'", d:"Escriu un mini-interrogatori imaginari: 10 preguntes sobre una persona."},
        {t:"12–15'",d:"Fes els exercicis de la pestanya."}
      ]
    },
    {day:4, title:"Conversa simulada",
      tasks:[
        {t:"0–5'",  d:"Repassa les frases fetes: Com et dius? Quants anys tens? D'on ets? A què et dediques?"},
        {t:"5–15'", d:"Escriu un diàleg de presentació de 10-12 línies entre dues persones que es coneixen per primera vegada. Usa el màxim d'interrogatius possibles."}
      ]
    }
  ]
});
