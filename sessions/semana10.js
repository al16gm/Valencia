// SESSIÓ 10 — Preposicions essencials
SESSIONS.push({
  id: 'week-10', num: 10,
  title: "Preposicions essencials",
  description: "A, de, en, amb, per, per a, fins, des de. Errors freqüents i distinció amb el castellà.",
  topics: ["Preposicions", "A / De / En", "Amb", "Per / Per a", "Fins / Des de", "Errors freqüents"],

  grammar: {
    notes: [
      "La distinció PER / PER A és fonamental en valencià i no existeix en castellà (ambdues = 'para/por'). PER = causa, mitjà, temps, intercanvi. PER A = destinació, finalitat, destinatari.",
      "AMB = con. Mai s'usa 'en' per traduir 'con' en valencià: 'Vinc amb tu' (mai *'Vinc en tu'). Aquest error és molt freqüent entre castellanoparlants.",
      "EN + lloc = en/dentro de. A + lloc = destí o posició. 'Estic EN casa' (estoy en casa) vs 'Vaig A casa' (voy a casa)."
    ],
    verbGroups: [
      {
        title: "A — destí, destinació i hora",
        infinitive: "preposició",
        meaning: "a",
        conjugations: [
          { p: "destí",      f: "Vaig a Barcelona.",         t: "Voy a Barcelona.",        hl: true },
          { p: "hora",       f: "Arribe a les 8.",           t: "Llego a las 8." },
          { p: "distància",  f: "A dos quilòmetres d'ací.",  t: "A dos kilómetros de aquí." },
          { p: "contracció", f: "Vaig al mercat.  (a+el)",   t: "Voy al mercado.",          hl: false },
          { p: "datiu",      f: "Li done el llibre a ella.", t: "Le doy el libro a ella." },
          { p: "nota",       f: "A PIE = a peu  /  A MANO = a mà", t: "expressions fixes" }
        ],
        examples: []
      },
      {
        title: "DE — origen, possessió, matèria",
        infinitive: "preposició",
        meaning: "de",
        conjugations: [
          { p: "origen",     f: "Sóc de València.",          t: "Soy de Valencia.",        hl: true },
          { p: "possessió",  f: "El cotxe de mon pare.",     t: "El coche de mi padre." },
          { p: "matèria",    f: "Una taula de fusta.",       t: "Una mesa de madera." },
          { p: "contracció", f: "Vinc del treball.  (de+el)",t: "Vengo del trabajo.",      hl: false },
          { p: "contingut",  f: "Un got d'aigua.",           t: "Un vaso de agua." },
          { p: "temps",      f: "De matí treball millor.",   t: "Por la mañana trabajo mejor." }
        ],
        examples: []
      },
      {
        title: "PER vs PER A — la distinció clau",
        infinitive: "preposició",
        meaning: "por / para",
        conjugations: [
          { p: "PER — causa",     f: "Ho faig per amor.",           t: "Lo hago por amor.",         hl: true },
          { p: "PER — mitjà",     f: "T'escric per correu.",        t: "Te escribo por correo." },
          { p: "PER — temps",     f: "Vindré per Nadal.",           t: "Vendré por Navidad." },
          { p: "PER A — finalitat",f: "Estudio per a aprovar.",     t: "Estudio para aprobar.",     hl: true },
          { p: "PER A — destinat.",f: "Este regal és per a tu.",    t: "Este regalo es para ti." },
          { p: "PER A — destí",   f: "El tren per a Madrid.",       t: "El tren para Madrid." }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "EN — lloc i temps",
      meaning: "en (dentro de / en)",
      conjugations: [
        {p:"lloc interior",  f:"Estic en casa.  (Estoy en casa)"},
        {p:"lloc interior",  f:"El llibre és en la taula.  (encima/en la mesa)"},
        {p:"temps",          f:"En aquell moment no ho sabia."},
        {p:"temps",          f:"Ho faré en cinc minuts.  (en cinco minutos)"},
        {p:"llengua",        f:"Ho dic en valencià.  (lo digo en valenciano)"},
        {p:"nota",           f:"EN no és mai 'con' — per a 'con' usa AMB"}
      ]
    },
    {
      infinitive: "AMB — companyia i instrument",
      meaning: "con",
      conjugations: [
        {p:"companyia",   f:"Vinc amb tu.  (Vengo contigo)"},
        {p:"companyia",   f:"Parle amb ella cada dia."},
        {p:"instrument",  f:"Escric amb bolígraf.  (con bolígrafo)"},
        {p:"instrument",  f:"Menge amb forqueta.  (con tenedor)"},
        {p:"manera",      f:"Ho fa amb cura.  (con cuidado)"},
        {p:"ERROR freq.", f:"*Vinc en tu  →  ✓ Vinc AMB tu"}
      ]
    },
    {
      infinitive: "FINS / DES DE",
      meaning: "hasta / desde",
      conjugations: [
        {p:"fins (límit)",    f:"Treballe fins a les 6.  (hasta las 6)"},
        {p:"fins (límit)",    f:"Fins ara tot bé.  (hasta ahora)"},
        {p:"des de (origen)", f:"Treballe des de les 8.  (desde las 8)"},
        {p:"des de (origen)", f:"Des de casa fins a l'escola."},
        {p:"combinat",        f:"Des de dilluns fins a divendres."},
        {p:"nota",            f:"Fins a + lloc/hora  /  Fins + adverbi (fins ara, fins ací)"}
      ]
    },
    {
      infinitive: "Errors freqüents cast.→val.",
      meaning: "interferències",
      conjugations: [
        {p:"❌→✓", f:"*en tu  →  ✓ amb tu  (con tú)"},
        {p:"❌→✓", f:"*por mi  →  ✓ per a mi  (para mí — finalitat)"},
        {p:"❌→✓", f:"*para siempre  →  ✓ per sempre  (para siempre = causa/manera)"},
        {p:"❌→✓", f:"*en coche  →  ✓ en cotxe ✓  (en coche = correcte!)"},
        {p:"❌→✓", f:"*a casa mia  →  ✓ a casa meua  (adjectiu possessiu val.)"},
        {p:"❌→✓", f:"*de seguida  →  ✓ de seguida ✓  (enseguida — correcte!)"}
      ]
    }
  ],

  exercises: [
    {id:'w10e1',  q:"Vinc ___ tu al cinema esta nit.  (con → val.)",                      a:"amb"},
    {id:'w10e2',  q:"Este pastís és ___ la meua mare.  (para — destinatari)",             a:"per a"},
    {id:'w10e3',  q:"Ho va fer ___ ajudar-nos.  (para — finalitat)",                      a:"per a"},
    {id:'w10e4',  q:"Vaig treballar ___ dos anys a Madrid.  (durante — temps)",           a:"durant"},
    {id:'w10e5',  q:"Trobe que ho fa ___ ganes.  (con ganas → val.)",                    a:"amb"},
    {id:'w10e6',  q:"Estic estudiant ___ aprovar el nivell A2.  (para — finalitat)",      a:"per a"},
    {id:'w10e7',  q:"El tren ___ Alacant ix a les 10.  (para — destí)",                  a:"per a"},
    {id:'w10e8',  q:"Treballe ___ les 9 ___ les 6.  (desde... hasta)",                   a:"des de · fins a"},
    {id:'w10e9',  q:"Sóc ___ Barcelona però visc ací.  (de — origen)",                   a:"de"},
    {id:'w10e10', q:"Ho fas ___ amor o ___ diners?  (por — causa)",                      a:"per · per"}
  ],

  routine: [
    {day:1, title:"A, DE, EN — les tres bàsiques",
      tasks:[
        {t:"0–5'",  d:"A = destí/hora · DE = origen/possessió · EN = interior/llengua. Escriu 2 frases de cada."},
        {t:"5–12'", d:"Practica: 'Vaig A...' / 'Vinc DE...' / 'Estic EN...'. Usa llocs reals de la teua vida."},
        {t:"12–15'",d:"Di 10 frases en veu alta alternant les tres preposicions."}
      ]
    },
    {day:2, title:"PER vs PER A — la gran distinció",
      tasks:[
        {t:"0–5'",  d:"PER = causa/mitjà/temps. PER A = finalitat/destinatari/destí. Memoritza amb exemples."},
        {t:"5–12'", d:"Escriu 8 frases: 4 amb PER i 4 amb PER A. Assegura't que el sentit justifica la tria."},
        {t:"12–15'",d:"Exercicis de la pestanya — posa especial atenció als exercicis 2, 3 i 7."}
      ]
    },
    {day:3, title:"AMB i errors freqüents",
      tasks:[
        {t:"0–5'",  d:"AMB = con (sempre). Mai *'en tu', *'en ella'. Repeteix: 'amb tu · amb ell · amb nosaltres'."},
        {t:"5–12'", d:"Corregeix 6 frases incorrectes: reemplaça les preposicions errònies pel valencià correcte."},
        {t:"12–15'",d:"Practica FINS / DES DE: escriu el teu horari del dia amb aquestes preposicions."}
      ]
    },
    {day:4, title:"Repàs Bloc 2 — A1→A2 Transició",
      tasks:[
        {t:"0–5'",  d:"Repàs del Bloc 2: articles (s6) · pronoms (s7) · adjectius (s8) · modals (s9) · preposicions (s10)."},
        {t:"5–12'", d:"Escriu un text de 10-12 frases descrivint la teua rutina. Has d'usar articles, pronoms febles, adjectius, un modal i dues preposicions diferents."},
        {t:"12–15'",d:"Llegeix el text en veu alta. Felicita't: has completat el Bloc 2! 🎉"}
      ]
    }
  ]
});
