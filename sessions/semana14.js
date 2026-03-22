// SESSIÓ 14 — Imperatius
SESSIONS.push({
  id: 'week-14', num: 14,
  title: "Imperatius",
  description: "Vine, menja, escolta! Ordres, peticions i instruccions en positiu i negatiu.",
  topics: ["Imperatiu afirmatiu", "Imperatiu negatiu", "Pronoms amb imperatiu", "Instruccions", "Registre"],

  grammar: {
    notes: [
      "L'imperatiu afirmatiu de TU: treu la -s del present d'indicatiu: parles → parla, corres → corre, dorms → dorm. Excepcions: vine (venir), sigues (ser), vés (anar), fes (fer), digues (dir).",
      "L'imperatiu NEGATIU usa el present de subjuntiu precedit de 'no': No parles! No corres! No dormisques! Aquesta és la diferència clau: afirmatiu ≠ negatiu.",
      "Amb l'imperatiu afirmatiu, els pronoms van DARRERE amb guió: Porta-ho! Digues-li! Fes-ho! Amb el negatiu van DAVANT: No ho portis! No li digues! No ho faces!"
    ],
    verbGroups: [
      {
        title: "Imperatiu afirmatiu — TU i VOSALTRES",
        infinitive: "parlar",
        meaning: "hablar (imperatiu)",
        conjugations: [
          { p: "tu (-AR)",    f: "parla!",    t: "¡habla!",     hl: true },
          { p: "tu (-ER)",    f: "corre!",    t: "¡corre!" },
          { p: "tu (-IR)",    f: "dorm!",     t: "¡duerme!" },
          { p: "vos. (-AR)",  f: "parleu!",   t: "¡hablad!",    hl: false },
          { p: "vos. (-ER)",  f: "correu!",   t: "¡corred!" },
          { p: "vos. (-IR)",  f: "dormiu!",   t: "¡dormid!" }
        ],
        examples: ["menjar", "estudiar", "escriure", "llegir", "obrir"]
      },
      {
        title: "Imperatiu negatiu — NO + subjuntiu",
        infinitive: "parlar",
        meaning: "no parles! (negatiu)",
        conjugations: [
          { p: "tu (-AR)",    f: "no parles!",  t: "¡no hables!",   hl: true },
          { p: "tu (-ER)",    f: "no corres!",  t: "¡no corras!" },
          { p: "tu (-IR)",    f: "no dormisques!", t: "¡no duermas!" },
          { p: "vos. (-AR)",  f: "no parleu!",  t: "¡no habléis!",  hl: false },
          { p: "vos. (-ER)",  f: "no correu!",  t: "¡no corráis!" },
          { p: "vos. (-IR)",  f: "no dormiu!",  t: "¡no durmáis!" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Irregulars — afirmatiu TU",
      meaning: "vine, vés, fes, digues, sigues",
      conjugations: [
        {p:"vindre",  f:"vine!  (ven!)"},
        {p:"anar",    f:"vés!  (ve! / vete!)"},
        {p:"fer",     f:"fes!  (haz!)"},
        {p:"dir",     f:"digues!  (di!)"},
        {p:"ser",     f:"sigues!  (sé!)"},
        {p:"tindre",  f:"tingues!  (ten!)"}
      ]
    },
    {
      infinitive: "Pronoms amb imperatiu",
      meaning: "posició darrere/davant",
      conjugations: [
        {p:"afimatiu + pron.", f:"Porta-ho!  /  Digues-li!  /  Fes-ho!"},
        {p:"afirmatiu + pron.",f:"Menja-te'l!  /  Porta-la-hi!"},
        {p:"negatiu + pron.",  f:"No ho portis!  /  No li digues!"},
        {p:"negatiu + pron.",  f:"No te'l mengis!  /  No la hi portis!"},
        {p:"regla",            f:"AFIRMATIU: verb + guió + pronom"},
        {p:"regla",            f:"NEGATIU: no + pronom + verb (subjuntiu)"}
      ]
    },
    {
      infinitive: "Imperatiu de cortesia",
      meaning: "vostè / forma educada",
      conjugations: [
        {p:"vostè (AR)",   f:"Parle, si us plau!  (hable, por favor)"},
        {p:"vostè (ER)",   f:"Corra, si us plau!"},
        {p:"vostè (IR)",   f:"Isca per ací.  (salga por aquí)"},
        {p:"vostès (AR)",  f:"Parlen més a poc a poc."},
        {p:"nota",         f:"Vostè usa les mateixes formes que el subjuntiu"},
        {p:"SI US PLAU",   f:"= por favor  (expressió valenciana clau)"}
      ]
    },
    {
      infinitive: "Instruccions habituals",
      meaning: "frases útils",
      conjugations: [
        {p:"moviment",    f:"Vine ací!  /  Vés-te'n!  /  Entra!  /  Ix!"},
        {p:"comunicació", f:"Escolta!  /  Mira!  /  Digues!  /  Calla!"},
        {p:"acció",       f:"Fes-ho ara!  /  Para!  /  Continua!  /  Espera!"},
        {p:"educació",    f:"Dona'm...  /  Porta-me...  /  Ajuda'm!"},
        {p:"negació",     f:"No faces això!  /  No parles tan fort!"},
        {p:"suau",        f:"Podries...?  /  Et puc demanar...?  (alternatiu)"}
      ]
    }
  ],

  exercises: [
    {id:'w14e1',  q:"___ ací de seguida!  (Ven — tu, anar = vine)",                    a:"Vine"},
    {id:'w14e2',  q:"No ___ tan fort, si us plau.  (hablar — negatiu, tu)",            a:"parles"},
    {id:'w14e3',  q:"___ la porta quan isques.  (Cerrar — tu, tancar)",                a:"Tanca"},
    {id:'w14e4',  q:"___ el sopar, que tinc fam!  (Hacer — tu, fer)",                  a:"Fes"},
    {id:'w14e5',  q:"No ___ mentides!  (decir — negatiu, tu, dir)",                    a:"digues"},
    {id:'w14e6',  q:"___ la veritat!  (Di — tu, dir)",                                 a:"Digues"},
    {id:'w14e7',  q:"___ el llibre al professor.  (Porta-li — imperatiu + pronom CI)",  a:"Porta-li"},
    {id:'w14e8',  q:"No ___ tan de pressa, no t'entenc!  (hablar — negatiu, vosaltres)", a:"parleu"},
    {id:'w14e9',  q:"___ tranquil·la, tot anirà bé.  (Sé — tu, ser)",                  a:"Sigues"},
    {id:'w14e10', q:"No ___ als xiquets que véns.  (decir — negatiu, tu)",             a:"digues"}
  ],

  routine: [
    {day:1, title:"Imperatiu afirmatiu — la regla de la -s",
      tasks:[
        {t:"0–5'",  d:"Regla: present indicatiu TU - la -s final = imperatiu. Parles→Parla / Corres→Corre / Dorms→Dorm."},
        {t:"5–12'", d:"Forma l'imperatiu de 10 verbs regulars. Practica en veu alta amb entonació d'ordre."},
        {t:"12–15'",d:"Memoritza els 6 irregulars: vine · vés · fes · digues · sigues · tingues."}
      ]
    },
    {day:2, title:"Imperatiu negatiu — no + subjuntiu",
      tasks:[
        {t:"0–5'",  d:"Negatiu = no + present de subjuntiu (sessió 13). No parles! No corres! No dormisques!"},
        {t:"5–12'", d:"Transforma 8 imperatius afirmatius en negatius: Parla! → No parles! Corre! → No corres!"},
        {t:"12–15'",d:"Exercicis de la pestanya. Posa atenció a la diferència afirmatiu/negatiu."}
      ]
    },
    {day:3, title:"Pronoms amb imperatiu",
      tasks:[
        {t:"0–5'",  d:"Afirmatiu: verb-pronom (Porta-ho!). Negatiu: no + pronom + verb (No ho portis!). Practica la posició."},
        {t:"5–12'", d:"Escriu 6 ordres amb pronom: 3 afirmatives i 3 negatives. Usa pronoms variats: ho, li, el, la, hi."},
        {t:"12–15'",d:"Di les frases en veu alta variant el to: ordre directa, petició suau, prohibició."}
      ]
    },
    {day:4, title:"Instruccions i producció",
      tasks:[
        {t:"0–5'",  d:"Practica les instruccions habituals: vine, vés, escolta, mira, para, continua, espera."},
        {t:"5–15'", d:"Escriu les instruccions per arribar a casa teua des d'un lloc conegut. Usa imperatius afirmatius i algun negatiu. Mínim 10 passos."}
      ]
    }
  ]
});
