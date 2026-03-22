// SESSIÓ 20 — Repàs general · Nivell A2
SESSIONS.push({
  id: 'week-20', num: 20,
  title: "Repàs general · Nivell A2",
  description: "Repàs de tots els blocs. Producció lliure avançada. Certificació de nivell A2 MCER.",
  topics: ["Repàs A2", "Tots els temps verbals", "Vocabulari integrat", "Producció oral i escrita", "Certificació A2"],

  grammar: {
    notes: [
      "Enhorabona! Has completat les 20 sessions del curs. En acabar esta sessió de repàs, hauràs assolit el nivell A2 del Marc Comú Europeu de Referència per a les Llengües (MCER) en valencià.",
      "El nivell A2 significa que pots: comunicar-te en situacions quotidianes senzilles, descriure el teu entorn, expressar necessitats immediates, entendre frases i expressions freqüents, i produir textos curts i coherents.",
      "El camí continua: el nivell B1 et permetrà expressar opinions, argumentar, entendre textos més complexos i comunicar-te amb major fluïdesa. Continua practicant cada dia!"
    ],
    verbGroups: [
      {
        title: "Tots els temps verbals — resum",
        infinitive: "parlar",
        meaning: "tots els temps",
        conjugations: [
          { p: "Present",    f: "Parle cada dia.",             t: "Hablo cada día.",            hl: true },
          { p: "Passat pf.", f: "Vaig parlar ahir.",           t: "Hablé ayer.",                hl: false },
          { p: "Imperfet",   f: "Parlava quan era xicotet.",   t: "Hablaba cuando era pequeño." },
          { p: "Futur",      f: "Parlaré millor aviat.",       t: "Hablaré mejor pronto.",      hl: false },
          { p: "Condicional",f: "Parlaria més si pogués.",     t: "Hablaría más si pudiera.",   hl: true },
          { p: "Subjuntiu",  f: "Vull que parles.",            t: "Quiero que hables." }
        ],
        examples: []
      },
      {
        title: "Competències A2 — el que saps fer",
        infinitive: "competències",
        meaning: "nivell A2",
        conjugations: [
          { p: "✓ Comprensió", f: "Entendre converses quotidianes i textos senzills.", t: "Comprensión lectora y auditiva A2", hl: true },
          { p: "✓ Expressió",  f: "Descriure persones, llocs i situacions habituals.", t: "Expresión escrita y oral A2" },
          { p: "✓ Interacció", f: "Comunicar-te en situacions quotidianes: mercat, restaurant, transport.", t: "Interacción A2" },
          { p: "✓ Gramàtica",  f: "Usar tots els temps bàsics i estructures essencials.", t: "Competencia gramatical A2", hl: false },
          { p: "✓ Vocabulari", f: "Vocabulari temàtic: rutina, menjar, transport, oci.", t: "Vocabulario A2" },
          { p: "✓ Funcions",   f: "Saludar, presentar-te, demanar, agrair, disculpar-te.", t: "Funciones comunicativas A2" }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Repàs Bloc 1 — A1",
      meaning: "sessions 1-5",
      conjugations: [
        {p:"S1 Present",    f:"Parle · corr · dorm · sóc · tinc · vaig · faig · puc"},
        {p:"S2 Passat pf.", f:"Vaig anar · va dir · van vindre · vam fer"},
        {p:"S3 Futur",      f:"Vaig a estudiar · parlaré · tindré · faré"},
        {p:"S4 Preguntes",  f:"Què · On · Quan · Com · Per què · Qui · Quant"},
        {p:"S5 Negació",    f:"No · res · ningú · mai · cap · tampoc · doble negació"}
      ]
    },
    {
      infinitive: "Repàs Bloc 2 — A1→A2",
      meaning: "sessions 6-10",
      conjugations: [
        {p:"S6 Articles",   f:"el/la/els/les · un/una · al/del · EN/NA"},
        {p:"S7 Pronoms",    f:"el/la/li/ho/hi/en · em/et/es · posició davant/darrere"},
        {p:"S8 Adjectius",  f:"concordança · comparatius · superlatius · posició"},
        {p:"S9 Modals",     f:"poder · voler · deure · saber · caldre"},
        {p:"S10 Prepos.",   f:"a · de · en · amb · per · per a · fins · des de"}
      ]
    },
    {
      infinitive: "Repàs Bloc 3 — A2 Nucli",
      meaning: "sessions 11-15",
      conjugations: [
        {p:"S11 Imperfet",  f:"parlava · tenia · era · anava · feia"},
        {p:"S12 Condicional",f:"parlaria · tindria · podria · faria · m'agradaria"},
        {p:"S13 Subjuntiu", f:"vull que parles · espere que siga · cal que faces"},
        {p:"S14 Imperatiu", f:"parla! · vine! · fes! · no parles! · porta-ho!"},
        {p:"S15 Perífrasis", f:"estic parlant · acabe de · torne a · deixe de"}
      ]
    },
    {
      infinitive: "Repàs Bloc 4 — A2 Consolidat",
      meaning: "sessions 16-19",
      conjugations: [
        {p:"S16 Rutina",    f:"em lleve · em dutxe · les hores · dies i mesos · freqüència"},
        {p:"S17 Menjar",    f:"mercat · restaurant · plats valencians · voldria · si us plau"},
        {p:"S18 Transport", f:"en cotxe · a peu · gira · continua · preposicions d'ubicació"},
        {p:"S19 Col·loq.",  f:"tinc gana · fa sol · xe! · au! · o siga · a més · per tant"}
      ]
    }
  ],

  exercises: [
    {id:'w20e1',  q:"De xicotet, ___ al parc cada tarda. (imperfet, jo, anar)",         a:"anava"},
    {id:'w20e2',  q:"M'___ visitar el Japó algun dia. (condicional — gustar)",          a:"agradaria"},
    {id:'w20e3',  q:"Vull que ___ la veritat. (subjuntiu, tu, dir)",                    a:"digues"},
    {id:'w20e4',  q:"___ la porta quan ixques! (imperatiu, tu, tancar)",                a:"Tanca"},
    {id:'w20e5',  q:"Estic ___ el sopar ara. (gerundi, fer)",                           a:"fent"},
    {id:'w20e6',  q:"Vine ___ mi, que t'explique una cosa. (amb)",                      a:"amb"},
    {id:'w20e7',  q:"No tinc ___ problema amb açò. (ningún → val.)",                    a:"cap"},
    {id:'w20e8',  q:"___ recte i després gira a l'esquerra. (Sigue → val.)",            a:"Continua"},
    {id:'w20e9',  q:"Ahir vaig ___ de comprar. Acabe de tornar. (acabar de → passat)",  a:"acabar"},
    {id:'w20e10', q:"Tens ___. Ho hauria fet diferent. (razón → val.)",                 a:"raó"}
  ],

  routine: [
    {day:1, title:"Repàs Blocs 1 i 2 — gramàtica bàsica",
      tasks:[
        {t:"0–5'",  d:"Repassa les taules dels irregulars (ser, tindre, anar, fer, poder, voler). Sense mirar, conjuga cada un en present."},
        {t:"5–12'", d:"Escriu 10 frases barrejant: present, passat perifràstic, futur immediat, preguntes i negació."},
        {t:"12–15'",d:"Repassa articles, pronoms febles i preposicions. Di 5 frases on apareguen pronoms febles."}
      ]
    },
    {day:2, title:"Repàs Bloc 3 — temps avançats",
      tasks:[
        {t:"0–5'",  d:"Repassa: imperfet (parlava) · condicional (parlaria) · subjuntiu (vull que parles) · imperatiu (parla!)."},
        {t:"5–12'", d:"Escriu un text de 10 frases que contingui: 2 imperfets, 2 condicionals, 2 subjuntius i 2 imperatius."},
        {t:"12–15'",d:"Fes els exercicis de la pestanya com a simulacre d'examen A2."}
      ]
    },
    {day:3, title:"Repàs Bloc 4 — comunicació real",
      tasks:[
        {t:"0–5'",  d:"Repassa el vocabulari temàtic: rutina, menjar, transport, expressions col·loquials. Quantes paraules recordes?"},
        {t:"5–12'", d:"Escriu un diàleg complet en una situació real: al restaurant, demanant indicacions o fent la compra al mercat."},
        {t:"12–15'",d:"Llegeix el diàleg en veu alta. Graba't si pots i escolta't."}
      ]
    },
    {day:4, title:"🎉 Prova final A2 — producció lliure",
      tasks:[
        {t:"0–2'",  d:"Respira. Ets capaç de fer-ho. Has estudiat 20 sessions. Confia en tu."},
        {t:"2–15'", d:"Escriu un text lliure de 15-20 frases sobre qualsevol tema que vulgues: la teua vida, els teus somnis, una experiència, un lloc... Usa el màxim de structures i vocabulari de totes les sessions. Quan acabes, llegeix-lo en veu alta. ENHORABONA — has assolit el nivell A2 de Valencià! 🎉🏆"}
      ]
    }
  ]
});
