// SESSIÓ 16 — Rutina diària i temps lliure
SESSIONS.push({
  id: 'week-16', num: 16,
  title: "Rutina diària i temps lliure",
  description: "Vocabulari temàtic: hores, dies, activitats quotidianes i d'oci. Expressions de temps.",
  topics: ["Rutina diària", "Temps lliure", "Les hores", "Dies i mesos", "Verbs reflexius", "Activitats d'oci"],

  grammar: {
    notes: [
      "Els verbs de la rutina diària sovint són reflexius en valencià: llevar-se (levantarse), dutxar-se (ducharse), vestir-se (vestirse), adormir-se (dormirse). Recorda els pronoms reflexius: em, et, es, ens, us, es.",
      "Les hores: 'Quina hora és?' → 'Són les tres' / 'És la una'. Per als minuts: 'Són les tres i quart', 'Són les quatre menys deu', 'Són les cinc i mitja'.",
      "Expressions de freqüència: sempre · normalment · sovint · a vegades · poques vegades · quasi mai · mai. Van normalment davant del verb o al principi/final de la frase."
    ],
    verbGroups: [
      {
        title: "Verbs de la rutina — reflexius",
        infinitive: "llevar-se",
        meaning: "levantarse",
        conjugations: [
          { p: "jo",         f: "em lleve",       t: "me levanto",      hl: true },
          { p: "tu",         f: "et lleves",      t: "te levantas" },
          { p: "ell/ella",   f: "es lleva",       t: "se levanta" },
          { p: "nosaltres",  f: "ens llevem",     t: "nos levantamos",  hl: false },
          { p: "vosaltres",  f: "us lleveu",      t: "os levantáis" },
          { p: "ells/elles", f: "es lleven",      t: "se levantan" }
        ],
        examples: []
      },
      {
        title: "Les hores — estructura",
        infinitive: "hora",
        meaning: "¿Quina hora és?",
        conjugations: [
          { p: "en punt",    f: "Són les tres en punt.",      t: "Son las tres en punto.",   hl: true },
          { p: "i quart",    f: "Són les quatre i quart.",    t: "Son las cuatro y cuarto." },
          { p: "i mitja",    f: "Són les cinc i mitja.",      t: "Son las cinco y media." },
          { p: "menys quart",f: "Són les sis menys quart.",   t: "Son las seis menos cuarto.",hl: false },
          { p: "la una",     f: "És la una del migdia.",      t: "Es la una del mediodía." },
          { p: "mignight",   f: "Són les dotze de la nit.",   t: "Son las doce de la noche." }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Rutina matinal",
      meaning: "vocabulari del matí",
      conjugations: [
        {p:"llevar-se",    f:"Em lleve a les set del matí."},
        {p:"dutxar-se",    f:"Em dutxe i em rente les dents."},
        {p:"vestir-se",    f:"Em vestesc i esmorze."},
        {p:"esmorzar",     f:"Esmorze pa amb tomaca i cafè."},
        {p:"eixir",        f:"Ixe de casa a les huit menys quart."},
        {p:"arribar",      f:"Arribe a la feina a les huit en punt."}
      ]
    },
    {
      infinitive: "Temps lliure — activitats",
      meaning: "oci i aficions",
      conjugations: [
        {p:"esport",       f:"fer esport · anar al gimnàs · córrer · nadar · jugar a futbol"},
        {p:"cultura",      f:"llegir · veure pel·lícules · escoltar música · anar al teatre"},
        {p:"social",       f:"quedar amb amics · eixir a sopar · anar de festa · xatejar"},
        {p:"naturalesa",   f:"fer una excursió · anar a la platja · passejar · acampar"},
        {p:"tecnologia",   f:"navegar per internet · jugar a videojocs · veure sèries"},
        {p:"creatiu",      f:"cuinar · pintar · tocar un instrument · fer fotos"}
      ]
    },
    {
      infinitive: "Expressions de freqüència",
      meaning: "sempre → mai",
      conjugations: [
        {p:"sempre",        f:"sempre  (siempre)  →  Sempre esmorze."},
        {p:"normalment",    f:"normalment  (normalmente)  →  Normalment treball fins les 6."},
        {p:"sovint",        f:"sovint  (a menudo)  →  Sovint ix a córrer."},
        {p:"a vegades",     f:"a vegades  (a veces)  →  A vegades cuine en casa."},
        {p:"poques vegades",f:"poques vegades  (pocas veces)"},
        {p:"mai",           f:"mai  (nunca)  →  No arriba mai tard."}
      ]
    },
    {
      infinitive: "Dies, mesos i estacions",
      meaning: "vocabulari temporal",
      conjugations: [
        {p:"dies",      f:"dilluns · dimarts · dimecres · dijous · divendres · dissabte · diumenge"},
        {p:"mesos",     f:"gener · febrer · març · abril · maig · juny · juliol · agost · setembre · octubre · novembre · desembre"},
        {p:"estacions", f:"primavera · estiu · tardor · hivern"},
        {p:"parts dia", f:"el matí · el migdia · la vesprada · la nit · la matinada"},
        {p:"adverbis",  f:"ahir · avui · demà · abans-d'ahir · passat demà"},
        {p:"períodes",  f:"esta setmana · el mes passat · l'any que ve · fa dos dies"}
      ]
    }
  ],

  exercises: [
    {id:'w16e1',  q:"Jo ___ ___ a les set cada matí.  (levantarse — present)",          a:"em lleve"},
    {id:'w16e2',  q:"'Son las tres y media' en valencià: ___",                           a:"Són les tres i mitja"},
    {id:'w16e3',  q:"'Son las nueve menos cuarto' en valencià: ___",                     a:"Són les nou menys quart"},
    {id:'w16e4',  q:"___ vas al cinema. Quasi mai.  (Poques vegades / Quasi mai)",       a:"Poques vegades"},
    {id:'w16e5',  q:"El dimecres en castellà és: ___",                                   a:"miércoles"},
    {id:'w16e6',  q:"'Me ducho por la mañana' en valencià: Jo ___ ___ al ___",          a:"em dutxe · al matí"},
    {id:'w16e7',  q:"___ llegia un llibre quan vas trucar.  (Estava — acció en curs)",   a:"Estava"},
    {id:'w16e8',  q:"¿Quina hora és? ___ la una del migdia.  (Es la una)",               a:"És"},
    {id:'w16e9',  q:"Quin dia ve després del dijous? ___",                               a:"divendres"},
    {id:'w16e10', q:"'A menudo salgo a correr' en valencià: ___ ixc a ___",             a:"Sovint · córrer"}
  ],

  routine: [
    {day:1, title:"Verbs reflexius de la rutina",
      tasks:[
        {t:"0–5'",  d:"Practica: em lleve · em dutxe · em rente · em vestesc · m'adormc. Conjuga llevar-se en present complet."},
        {t:"5–12'", d:"Escriu la teua rutina matinal en 8 frases. Usa verbs reflexius i expressions de temps."},
        {t:"12–15'",d:"Di la rutina en veu alta com si l'explicares a algú."}
      ]
    },
    {day:2, title:"Les hores",
      tasks:[
        {t:"0–5'",  d:"Practica dir les hores: en punt, i quart, i mitja, menys quart. Inventa 8 hores i di-les."},
        {t:"5–12'", d:"Escriu el teu horari d'un dia típic amb les hores: 'A les huit menys quart ixc de casa...'"},
        {t:"12–15'",d:"Exercicis de la pestanya."}
      ]
    },
    {day:3, title:"Temps lliure i freqüència",
      tasks:[
        {t:"0–5'",  d:"Aprén 10 activitats d'oci de la llista. Associa cadascuna amb una expressió de freqüència."},
        {t:"5–12'", d:"Escriu 8 frases sobre les teues aficions usant expressions de freqüència variades."},
        {t:"12–15'",d:"Dies, mesos i estacions: assegura't que els saps tots. Fes un test ràpid."}
      ]
    },
    {day:4, title:"Producció — la meua setmana",
      tasks:[
        {t:"0–5'",  d:"Repàs: verbs reflexius + hores + freqüència + vocabulari d'oci."},
        {t:"5–15'", d:"Escriu un text de 12-15 frases descrivint la teua setmana típica: quan et lleves, quan treballes, què fas al temps lliure, amb qui quedes, a quina hora et dorms."}
      ]
    }
  ]
});
