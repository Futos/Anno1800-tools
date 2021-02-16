export const bauern = {
  holzfaellerhuette: {
    name: 'Holzfällerhütte',
    requires: [],
    prodDuration: 15, // in seconds
    maintenanceCost: 10,
    prodType: 'production'
  },
  saegewerk: {
    name: 'Sägewerk',
    requires: ['holzfaellerhuette'],
    prodDuration: 15,
    maintenanceCost: 10,
    prodType: 'production'
  },
  kartoffelfarm: {
    name: 'Kartoffelfarm',
    requires: [],
    prodDuration: 30,
    maintenanceCost: 20,
    prodType: 'production'
  },
  schnapsbrennerei: {
    name: 'Schnapsbrennerei',
    requires: ['kartoffelfarm'],
    prodDuration: 30,
    maintenanceCost: 40,
    prodType: 'necessity'
  },
  schaeferei: {
    name: 'Schäferei',
    requires: [],
    prodDuration: 30,
    maintenanceCost: 20,
    prodType: 'production'
  },
  weberei: {
    name: 'Weberei',
    requires: ['schaeferei'],
    prodDuration: 30,
    maintenanceCost: 10,
    prodType: 'necessity'
  },
  lehmgrube: {
    name: 'Lehmgrube',
    requires: [],
    prodDuration: 30,
    maintenanceCost: 10,
    prodType: 'production'    
  },
  ziegelei: {
    name: 'Ziegelei',
    requires: ['lehmgrube'],
    prodDuration: 60,
    maintenanceCost: 10,
    prodType: 'production'    
  },
  fischereihafen: {
    name: 'Fischereihafen',
    prodDuration: 60,
    maintenanceCost: 40,
    prodType: 'necessity'    
  }
}

export const arbeiter = [
  {
    id: 'holzfaellerhuette',
    name: 'Holzfällerhütte',
    requires: []
  }
]

export default {
  bauern,
  arbeiter,
}
