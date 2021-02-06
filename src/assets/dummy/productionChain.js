export const bauern = {
  holzfaeller: {
    name: 'Holzfäller',
    requires: [],
    prodDuration: 15, // in seconds
    prodType: 'production'
  },
  saegemuehle: {
    name: 'Sägemühle',
    requires: ['holzfaeller'],
    prodDuration: 15,
    prodType: 'production'
  },
  kartoffelfarm: {
    name: 'Kartoffelfarm',
    requires: [],
    prodDuration: 30,
    prodType: 'production'
  },
  schnapsbrennerei: {
    name: 'Schnapsbrennerei',
    requires: ['kartoffelfarm'],
    prodDuration: 30,
    prodType: 'necessity'
  },
  schaeferei: {
    name: 'Schäferei',
    requires: [],
    prodDuration: 30,
    prodType: 'production'
  },
  weberei: {
    name: 'Weberei',
    requires: ['schaeferei'],
    prodDuration: 30,
    prodType: 'necessity'
  },
  lehmgrube: {
    name: 'Lehmgrube',
    requires: [],
    prodDuration: 30,
    prodType: 'production'    
  },
  ziegelei: {
    name: 'Ziegelei',
    requires: ['lehmgrube'],
    prodDuration: 60,
    prodType: 'production'    
  }
}

export const arbeiter = [
  {
    id: 'holzfaeller',
    name: 'Holzfäller',
    requires: []
  }
]

export default {
  bauern,
  arbeiter,
}
