// SESSIÓ 15 — Perífrasis verbals
SESSIONS.push({
  id: 'week-15', num: 15,
  title: "Perífrasis verbals",
  description: "Estar + gerundi · Acabar de + inf · Tornar a + inf · Deixar de + inf.",
  topics: ["Perífrasis verbals", "Gerundi", "Estar + gerundi", "Acabar de", "Tornar a", "Deixar de", "Anar a"],

  grammar: {
    notes: [
      "Les perífrasis verbals combinen un verb auxiliar conjugat + gerundi o infinitiu. El gerundi en valencià es forma afegint -ant (-AR) o -ent (-ER/-IR) a la rel del verb: parlant, menjant, corrent, dormint.",
      "ESTAR + GERUNDI expressa una acció en curs en el moment de parlar: 'Estic estudiant ara mateix'. Equival al español 'estar + gerundio'.",
      "Les perífrasis d'aspecte més útils: ACABAR DE + inf (acabar de), TORNAR A + inf (volver a), DEIXAR DE + inf (dejar de), CONTINUAR/SEGUIR + ger (seguir), ANAR A + inf (ir a — futur immediat, ja vista)."
    ],
    verbGroups: [
      {
        title: "Formació del gerundi",
        infinitive: "gerundi",
        meaning: "-ant / -ent / -int",
        conjugations: [
          { p: "-AR → -ant",  f: "parlar → parlant",   t: "hablar → hablando",  hl: true },
          { p: "-AR → -ant",  f: "menjar → menjant",   t: "comer → comiendo" },
          { p: "-ER → -ent",  f: "córrer → corrent",   t: "correr → corriendo", hl: false },
          { p: "-ER → -ent",  f: "beure → bevent",     t: "beber → bebiendo" },
          { p: "-IR → -int",  f: "dormir → dormint",   t: "dormir → durmiendo", hl: true },
          { p: "-IR → -int",  f: "llegir → llegint",   t: "leer → leyendo" }
        ],
        examples: []
      },
      {
        title: "ESTAR + gerundi — acció en curs",
        infinitive: "estar",
        meaning: "estar + gerundio",
        conjugations: [
          { p: "jo",         f: "estic estudiant",   t: "estoy estudiando",   hl: true },
          { p: "tu",         f: "estàs menjant",     t: "estás comiendo" },
          { p: "ell/ella",   f: "està dormint",      t: "está durmiendo" },
          { p: "nosaltres",  f: "estem treballant",  t: "estamos trabajando", hl: false },
          { p: "vosaltres",  f: "esteu llegint",     t: "estáis leyendo" },
          { p: "ells/elles", f: "estan corrent",     t: "están corriendo" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "ACABAR DE + infinitiu",
      meaning: "acabar de (hace un momento)",
      conjugations: [
        {p:"jo",         f:"Acabe de menjar.  (Acabo de comer)"},
        {p:"tu",         f:"Acabes de trucar.  (Acabas de llamar)"},
        {p:"ell/ella",   f:"Acaba d'arribar.  (Acaba de llegar)"},
        {p:"nosaltres",  f:"Acabem d'eixir."},
        {p:"nota",       f:"Expressa una acció molt recent"},
        {p:"nota",       f:"Davant vocal: acab-a D'arribar  (contracció de+a=d')"}
      ]
    },
    {
      infinitive: "TORNAR A + infinitiu",
      meaning: "volver a (repetició)",
      conjugations: [
        {p:"jo",         f:"Torne a estudiar.  (Vuelvo a estudiar)"},
        {p:"tu",         f:"Has tornat a arribar tard."},
        {p:"ell/ella",   f:"Va tornar a caure.  (Volvió a caer)"},
        {p:"nosaltres",  f:"Tornem a intentar-ho."},
        {p:"nota",       f:"Expressa repetició d'una acció"},
        {p:"ús freqüent",f:"Torna a dir-ho!  (¡Vuelve a decirlo!)"}
      ]
    },
    {
      infinitive: "DEIXAR DE + infinitiu",
      meaning: "dejar de (interrupció)",
      conjugations: [
        {p:"jo",         f:"He deixat de fumar.  (He dejado de fumar)"},
        {p:"tu",         f:"Deixes de fer soroll!"},
        {p:"ell/ella",   f:"Va deixar de ploure.  (Dejó de llover)"},
        {p:"nosaltres",  f:"Deixem de perdre el temps."},
        {p:"nota",       f:"Expressa la interrupció d'un hàbit o acció"},
        {p:"ús freqüent",f:"Deixa de queixar-te!  (¡Deja de quejarte!)"}
      ]
    },
    {
      infinitive: "CONTINUAR/SEGUIR + gerundi",
      meaning: "seguir + gerundio",
      conjugations: [
        {p:"jo",         f:"Continue estudiant cada dia."},
        {p:"tu",         f:"Segueixes treballant en aquella empresa?"},
        {p:"ell/ella",   f:"Continua plovent.  (Sigue lloviendo)"},
        {p:"nota",       f:"CONTINUAR i SEGUIR s'usen indistintament"},
        {p:"passadat",   f:"Continuava/Seguia treballant quan vaig arribar."},
        {p:"contrast",   f:"DEIXAR DE ≠ CONTINUAR  (oposats perfectes)"}
      ]
    }
  ],

  exercises: [
    {id:'w15e1',  q:"Jo ___ ___ la lliçó ara. No em molestes.  (estar + estudiar)",     a:"estic estudiant"},
    {id:'w15e2',  q:"Ella ___ ___ arribar tard cada dia.  (tornar a — present)",        a:"torna a"},
    {id:'w15e3',  q:"Acabe ___ menjar. Fa cinc minuts que he acabat.  (de)",            a:"de"},
    {id:'w15e4',  q:"___ ___ fumar fa dos anys.  (deixar de — passat perifràstic, ell)", a:"Va deixar de"},
    {id:'w15e5',  q:"Ells ___ ___ al parc quan va ploure.  (estar + córrer)",           a:"estaven corrent"},
    {id:'w15e6',  q:"Gerundi de 'llegir':  ___",                                        a:"llegint"},
    {id:'w15e7',  q:"Gerundi de 'beure':  ___",                                         a:"bevent"},
    {id:'w15e8',  q:"___ ___ queixar-te, que no canviarà res!  (deixar de — tu)",       a:"Deixa de"},
    {id:'w15e9',  q:"Nosaltres ___ ___ millora el nostre valencià.  (continuar + ger)", a:"continuem millorant"},
    {id:'w15e10', q:"Acaba ___ trucar-me. Ha sigut fa un minut.  (de)",                 a:"de"}
  ],

  routine: [
    {day:1, title:"El gerundi — formació",
      tasks:[
        {t:"0–5'",  d:"-AR → -ant / -ER → -ent / -IR → -int. Practica: parlant, menjant, corrent, bevent, dormint, llegint."},
        {t:"5–12'", d:"Forma el gerundi de 12 verbs que ja coneixes. Escriu-los i comprova les terminacions."},
        {t:"12–15'",d:"Di 5 frases amb 'estic + gerundi' descrivint el que fas ara mateix."}
      ]
    },
    {day:2, title:"ESTAR + gerundi i ACABAR DE",
      tasks:[
        {t:"0–5'",  d:"Practica ESTAR en tots els temps + gerundi: estic, estava, estaré, estaria + parlant."},
        {t:"5–12'", d:"Escriu 5 frases amb 'estic/estava + gerundi' i 5 amb 'acabe de + infinitiu'."},
        {t:"12–15'",d:"Exercicis de la pestanya, exercicis 1-4."}
      ]
    },
    {day:3, title:"TORNAR A, DEIXAR DE, CONTINUAR",
      tasks:[
        {t:"0–5'",  d:"Tornar a = repetició · Deixar de = interrupció · Continuar = persistència. Escriu un exemple de cada."},
        {t:"5–12'", d:"Escriu 8 frases sobre hàbits propis: coses que has deixat de fer, coses que continues fent, coses que tornes a fer."},
        {t:"12–15'",d:"Exercicis de la pestanya, exercicis 5-10."}
      ]
    },
    {day:4, title:"Repàs Bloc 3 — A2 Nucli completat",
      tasks:[
        {t:"0–5'",  d:"Repàs del Bloc 3: imperfet (s11) · condicional (s12) · subjuntiu (s13) · imperatiu (s14) · perífrasis (s15)."},
        {t:"5–15'", d:"Escriu un text lliure de 12-15 frases sobre un dia a la teua vida. Has d'usar: almenys un imperfet, un condicional, un subjuntiu, un imperatiu i una perífrasi. Bon treball — has completat el Bloc 3! 🎉"}
      ]
    }
  ]
});
