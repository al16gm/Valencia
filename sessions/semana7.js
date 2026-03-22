// SESSIÓ 7 — Pronoms personals i febles
SESSIONS.push({
  id: 'week-7', num: 7,
  title: "Pronoms personals",
  description: "Jo, tu, ell... · Pronoms febles: el, la, li, ho, en, hi. Posició i ús.",
  topics: ["Pronoms personals", "Pronoms febles", "Posició del pronom", "Combinació de pronoms"],

  grammar: {
    notes: [
      "En valencià els pronoms subjecte (jo, tu, ell...) sovint s'ometen perquè el verb ja indica la persona: 'Vinc demà' = 'Jo vinc demà'. S'usen per èmfasi o contrast.",
      "Els pronoms febles substitueixen un nom ja mencionat i van DAVANT del verb conjugat: 'El veig' (lo veo). Darrere de l'infinitiu o imperatiu: 'Veure'l', 'Menja-te'l'.",
      "Els pronoms febles valencians més importants: el/lo (CD masc.), la (CD fem.), li (CI), ho (CD neutre), en (partitiu), hi (locatiu/datiu)."
    ],
    verbGroups: [
      {
        title: "Pronoms subjecte",
        infinitive: "pronom",
        meaning: "jo, tu, ell...",
        conjugations: [
          { p: "1a sing.",  f: "jo",        t: "yo",        hl: true },
          { p: "2a sing.",  f: "tu",         t: "tú" },
          { p: "3a sing.",  f: "ell / ella", t: "él / ella" },
          { p: "1a plur.",  f: "nosaltres",  t: "nosotros",  hl: false },
          { p: "2a plur.",  f: "vosaltres",  t: "vosotros" },
          { p: "3a plur.",  f: "ells / elles",t: "ellos / ellas" }
        ],
        examples: []
      },
      {
        title: "Pronoms febles — CD (complement directe)",
        infinitive: "pronom",
        meaning: "el, la, els, les, ho",
        conjugations: [
          { p: "masc. sing.", f: "el veig / lo veig", t: "lo veo",         hl: true },
          { p: "fem. sing.",  f: "la veig",           t: "la veo" },
          { p: "masc. plur.", f: "els veig",          t: "los veo",        hl: true },
          { p: "fem. plur.",  f: "les veig",          t: "las veo" },
          { p: "neutre",      f: "ho sé",             t: "lo sé (neutro)" },
          { p: "partitiu",    f: "en tinc tres",      t: "tengo tres (de eso)" }
        ],
        examples: []
      },
      {
        title: "Pronoms febles — CI i locatiu",
        infinitive: "pronom",
        meaning: "li, els, hi",
        conjugations: [
          { p: "CI sing.",   f: "li dic la veritat",   t: "le digo la verdad",  hl: true },
          { p: "CI plur.",   f: "els dic la veritat",  t: "les digo la verdad" },
          { p: "locatiu",    f: "hi vaig cada dia",    t: "voy allí cada día",  hl: true },
          { p: "locatiu",    f: "hi ha molta gent",    t: "hay mucha gente" },
          { p: "reflexiu",   f: "em rente les mans",   t: "me lavo las manos" },
          { p: "reflexiu",   f: "es desperta aviat",   t: "se despierta pronto" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Pronoms reflexius",
      meaning: "em, et, es, ens, us, es",
      conjugations: [
        {p:"jo",         f:"em rente  (me lavo)"},
        {p:"tu",         f:"et rentes  (te lavas)"},
        {p:"ell/ella",   f:"es renta  (se lava)"},
        {p:"nosaltres",  f:"ens rentem  (nos lavamos)"},
        {p:"vosaltres",  f:"us renteu  (os laváis)"},
        {p:"ells/elles", f:"es renten  (se lavan)"}
      ]
    },
    {
      infinitive: "Posició dels pronoms",
      meaning: "davant / darrere",
      conjugations: [
        {p:"verb conjugat", f:"El veig.  /  Li parle.  /  Hi vaig."},
        {p:"infinitiu",     f:"Vull veure'l.  /  Puc dir-li."},
        {p:"imperatiu +",   f:"Digues-li!  /  Porta-ho!"},
        {p:"imperatiu -",   f:"No li digues!  /  No ho portis!"},
        {p:"gerundi",       f:"Estic mirant-lo.  /  Veient-la..."},
        {p:"perífrasi",     f:"El vaig a veure.  /  Vaig a veure'l."}
      ]
    },
    {
      infinitive: "Formes reforçades",
      meaning: "davant vocal/h",
      conjugations: [
        {p:"el → l'",   f:"L'estime.  (davant vocal)"},
        {p:"em → m'",   f:"M'agrada.  (davant vocal)"},
        {p:"et → t'",   f:"T'espere.  (davant vocal)"},
        {p:"es → s'",   f:"S'aixeca.  (davant vocal)"},
        {p:"en → n'",   f:"N'hi ha molts.  (davant vocal)"},
        {p:"hi → i",    f:"no s'apostrofa  (sempre hi)"}
      ]
    },
    {
      infinitive: "HO vs HI",
      meaning: "confusió freqüent",
      conjugations: [
        {p:"ho = CD neutre", f:"Ho sé.  (Sé eso / lo sé todo)"},
        {p:"ho = CD neutre", f:"Ho fas bé.  (Lo haces bien)"},
        {p:"hi = lloc",      f:"Hi vaig demà.  (Voy allí mañana)"},
        {p:"hi = haver-hi",  f:"Hi ha un problema.  (Hay un problema)"},
        {p:"hi = CI",        f:"Hi pense molt.  (Pienso mucho en eso)"},
        {p:"truc",           f:"hi → lloc o existència · ho → cosa neutra"}
      ]
    }
  ],

  exercises: [
    {id:'w7e1',  q:"Veus en Joan? Sí, ___ veig cada dia.  (lo veo → val.)",        a:"el veig"},
    {id:'w7e2',  q:"Has parlat amb la Maria? Sí, ___ he dit la veritat.  (le)",    a:"li"},
    {id:'w7e3',  q:"Vas al mercat? Sí, ___ vaig ara.  (allí → val.)",              a:"hi vaig"},
    {id:'w7e4',  q:"Saps la resposta? Sí, ___ sé.  (lo sé, neutro)",              a:"ho sé"},
    {id:'w7e5',  q:"Tens germans? Sí, en tinc dos. ___  tinc dos.  (en)",          a:"en"},
    {id:'w7e6',  q:"___ agrada el valencià.  (Me gusta → reflexiu)",               a:"M'"},
    {id:'w7e7',  q:"Ella ___ desperta a les 7.  (se despierta)",                   a:"es"},
    {id:'w7e8',  q:"Has vist les claus? No, no ___ he vistes.  (las)",             a:"les"},
    {id:'w7e9',  q:"___ ha molta gent al mercat.  (Hay)",                          a:"Hi"},
    {id:'w7e10', q:"Vull dir-___ una cosa important.  (le, darrere infinitiu)",    a:"li"}
  ],

  routine: [
    {day:1, title:"Pronoms subjecte i quan s'usen",
      tasks:[
        {t:"0–5'",  d:"Llegeix la taula. Recorda: en valencià el subjecte s'omet sovint. S'usa per èmfasi: 'Jo no ho faria, però tu sí.'"},
        {t:"5–12'", d:"Escriu 6 frases: 3 amb pronom subjecte explícit (èmfasi) i 3 sense."},
        {t:"12–15'",d:"Di les frases en veu alta. Nota la diferència de to."}
      ]
    },
    {day:2, title:"CD: el, la, els, les, ho",
      tasks:[
        {t:"0–5'",  d:"Regla: el pronom feble CD va davant del verb. Substitueix el nom: 'Veig el gat' → 'El veig'."},
        {t:"5–12'", d:"Substitueix el CD en 8 frases: 'Compre el pa' → '___', 'Menge la poma' → '___'..."},
        {t:"12–15'",d:"Exercicis de la pestanya, blocs 1-5."}
      ]
    },
    {day:3, title:"CI: li / els + HI locatiu",
      tasks:[
        {t:"0–5'",  d:"Li = a ell/ella (singular) · Els = a ells/elles (plural) · Hi = allà / hi ha."},
        {t:"5–12'", d:"Escriu 6 frases amb li o els: 'Li dic...', 'Els explique...', 'Hi vaig...'"},
        {t:"12–15'",d:"Practica HO vs HI: quan usar cada un. 3 frases amb ho i 3 amb hi."}
      ]
    },
    {day:4, title:"Pronoms reflexius + posició",
      tasks:[
        {t:"0–5'",  d:"Em·et·es·ens·us·es. Conjuga 'rentar-se' i 'aixecar-se' en present."},
        {t:"5–12'", d:"Practica la posició: verb conjugat (davant) / infinitiu o imperatiu (darrere amb guió)."},
        {t:"12–15'",d:"Escriu 5 frases de la teua rutina diària amb verbs reflexius: 'm'alce, em dutxe, em vestesc...'"}
      ]
    }
  ]
});
