// SESSIÓ 17 — Menjar, mercat i restaurants
SESSIONS.push({
  id: 'week-17', num: 17,
  title: "Menjar, mercat i restaurants",
  description: "Vocabulari gastronòmic. Fer una comanda, demanar el compte, comprar al mercat.",
  topics: ["Vocabulari gastronòmic", "Mercat", "Restaurant", "Fer la comanda", "Quantitats", "Productes valencians"],

  grammar: {
    notes: [
      "En un restaurant o mercat s'usa molt el condicional de cortesia: 'Voldria un entrepà' (Querría), 'Em podria portar...?' (¿Me podría traer?). També la forma imperativa suau: 'Porta'm...', 'Dona'm...'",
      "Les quantitats al mercat: un quilo de..., mig quilo de..., una dotzena de..., un litre de..., una bossa de..., una llauna de..., un pot de...",
      "Vocabulari clau del restaurant: la carta (la carta), el menú del dia (el menú del día), l'entrant (el entrante), el primer/segon plat, la postres (el postre), el compte (la cuenta), propina (propina), si us plau (por favor)."
    ],
    verbGroups: [
      {
        title: "Al restaurant — fer la comanda",
        infinitive: "demanar",
        meaning: "pedir",
        conjugations: [
          { p: "demanar",    f: "Voldria el menú del dia.",      t: "Querría el menú del día.",   hl: true },
          { p: "demanar",    f: "Per a mi, la paella, si us plau.", t: "Para mí, la paella, por favor." },
          { p: "preguntar",  f: "Quins plats del dia teniu?",    t: "¿Qué platos del día tienen?", hl: false },
          { p: "preguntar",  f: "De què és la sopa?",            t: "¿De qué es la sopa?" },
          { p: "demanar",    f: "Em porta el compte, si us plau?", t: "¿Me trae la cuenta, por favor?" },
          { p: "pagar",      f: "Ho paguem a mitges?",           t: "¿Lo pagamos a medias?" }
        ],
        examples: []
      },
      {
        title: "Al mercat — comprar",
        infinitive: "comprar",
        meaning: "comprar",
        conjugations: [
          { p: "demanar",    f: "Pose'm un quilo de tomàquets.", t: "Póngame un kilo de tomates.",  hl: true },
          { p: "demanar",    f: "Quant val el quilo de taronges?", t: "¿Cuánto vale el kilo de naranjas?" },
          { p: "negociar",   f: "Té alguna cosa més barata?",    t: "¿Tiene algo más barato?" },
          { p: "quantitat",  f: "Mig quilo de formatge, si us plau.", t: "Medio kilo de queso, por favor.", hl: false },
          { p: "qualitat",   f: "Estan molt fresques, les verdures?", t: "¿Están muy frescas las verduras?" },
          { p: "pagar",      f: "Quant és tot?  /  Cobri.",      t: "¿Cuánto es todo? / Cóbrese." }
        ],
        examples: []
      }
    ]
  },

  irregulars: [
    {
      infinitive: "Productes — verdures i fruites",
      meaning: "vocabulari del mercat",
      conjugations: [
        {p:"verdures",  f:"tomàquet · pebrot · ceba · all · albergínia · carbassó · enciam"},
        {p:"fruites",   f:"taronja · mandarina · poma · pera · raïm · maduixa · meló · síndria"},
        {p:"llegums",   f:"cigró · fesol · lentilla · bajoqueta (judía verde)"},
        {p:"carn",      f:"pollastre · porc · vedella · xai · conill · embotit"},
        {p:"peix",      f:"lluç · rap · salmó · tonyina · calamar · gambes · musclos"},
        {p:"altres",    f:"ou · formatge · iogurt · pa · arròs · pasta · oli · vinagre"}
      ]
    },
    {
      infinitive: "Plats valencians",
      meaning: "gastronomia local",
      conjugations: [
        {p:"arròs",     f:"paella valenciana · arròs al forn · arròs negre · arròs a banda"},
        {p:"carn",      f:"all i pebre · espencat · fideuà · coca · horchata amb fartons"},
        {p:"tapes",     f:"croquetes · patates braves · musclos · esgarraet · morcilla"},
        {p:"postres",   f:"crema catalana · bunyols · pastissets · torró · orxata"},
        {p:"begudes",   f:"vi · cervesa · aigua · orxata · suc de taronja · cafè · te"},
        {p:"nota",      f:"'Orxata' és la paraula valenciana per a 'horchata'"}
      ]
    },
    {
      infinitive: "Al restaurant — diàleg complet",
      meaning: "frases clau",
      conjugations: [
        {p:"entrada",   f:"Bona vesprada! Teníeu taula reservada?  /  Per a dues persones."},
        {p:"carta",     f:"Ens porta la carta, si us plau?  /  Ja saben el que volen?"},
        {p:"comanda",   f:"Jo voldria... · Per a mi... · I per a ella/ell..."},
        {p:"problema",  f:"Perdone, açò no és el que he demanat.  /  M'ha faltat el pa."},
        {p:"compte",    f:"Quan puguen, el compte, si us plau.  /  Està inclòs el servei?"},
        {p:"valoració", f:"Estava boníssim!  /  Estava molt bo.  /  Una mica salat/fred."}
      ]
    },
    {
      infinitive: "Quantitats i mesures",
      meaning: "al mercat i a la cuina",
      conjugations: [
        {p:"pes",       f:"un quilo · mig quilo · dos-cents grams · una lliura"},
        {p:"volum",     f:"un litre · mig litre · una ampolla de · un got de"},
        {p:"unitats",   f:"una dotzena · mig · un parell de · uns quants"},
        {p:"envasos",   f:"una llauna de · un pot de · una bossa de · una caixa de"},
        {p:"qualitat",  f:"fresc/fresca · madur/madura · ecològic · de temporada"},
        {p:"preu",      f:"car/cara · barat/barata · a bon preu · en oferta"}
      ]
    }
  ],

  exercises: [
    {id:'w17e1',  q:"___ el menú del dia, si us plau.  (Querría — condicional)",         a:"Voldria"},
    {id:'w17e2',  q:"Pose'm ___ quilo de tomàquets.  (un)",                              a:"un"},
    {id:'w17e3',  q:"Em ___ el compte quan puga?  (¿Me puede traer? — poder, vostè)",   a:"pot portar"},
    {id:'w17e4',  q:"La 'judía verde' en valencià es diu: ___",                          a:"bajoqueta"},
    {id:'w17e5',  q:"Quant ___ el quilo de taronges?  (vale → val.)",                   a:"val"},
    {id:'w17e6',  q:"Ho ___ a mitges?  (pagamos — present)",                             a:"paguem"},
    {id:'w17e7',  q:"'La cuenta' en valencià es diu: ___",                               a:"el compte"},
    {id:'w17e8',  q:"___ molt fresques, les verdures d'avui?  (¿Están...?)",             a:"Estan"},
    {id:'w17e9',  q:"'Por favor' en la fórmula valenciana: ___",                         a:"si us plau"},
    {id:'w17e10', q:"El plat de les plates arròs més famós de València és: ___",         a:"la paella valenciana"}
  ],

  routine: [
    {day:1, title:"Vocabulari del mercat",
      tasks:[
        {t:"0–5'",  d:"Aprén 15 productes: 5 verdures, 5 fruites, 5 productes bàsics (pa, ou, formatge...). Di'ls en veu alta."},
        {t:"5–12'", d:"Escriu la llista de la compra per a un àpat complet: entrant, plat principal i postres."},
        {t:"12–15'",d:"Simula comprar-ho al mercat: 'Pose'm un quilo de... Quant és?'"}
      ]
    },
    {day:2, title:"Al restaurant — fer la comanda",
      tasks:[
        {t:"0–5'",  d:"Memoritaza les frases clau: Voldria... / Per a mi... / Em porta...? / El compte, si us plau."},
        {t:"5–12'", d:"Escriu un diàleg complet al restaurant: des de l'entrada fins a pagar. Mínim 12 intervencions."},
        {t:"12–15'",d:"Llegeix el diàleg en veu alta fent els dos personatges."}
      ]
    },
    {day:3, title:"Gastronomia valenciana",
      tasks:[
        {t:"0–5'",  d:"Aprén els plats valencians de la llista. Quins has menjat? Quin t'agradaria provar?"},
        {t:"5–12'", d:"Exercicis de la pestanya."},
        {t:"12–15'",d:"Descriu el teu plat favorit en 5 frases: de què és, com es fa, quan el menges, per què t'agrada."}
      ]
    },
    {day:4, title:"Producció — experiència gastronòmica",
      tasks:[
        {t:"0–5'",  d:"Repàs del vocabulari de totes les llistes. Quantes paraules recordes sense mirar?"},
        {t:"5–15'", d:"Escriu una ressenya d'un restaurant que has visitat (real o imaginari) en 12-15 frases. Inclou: ambient, servei, plats, preus i valoració final."}
      ]
    }
  ]
});
