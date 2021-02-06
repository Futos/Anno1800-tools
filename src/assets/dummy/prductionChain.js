export const bauern = [
    {
        id: 'holzfaeller',
        name: 'Holzfäller',
        requires: [],
        prodDuration: 15 // in seconds
    },
    {
        id: 'saegemuehle',
        name: 'Sägemühle',
        requires: ['holzfaeller'],
        prodDuration: 15
    },
    {
        id: 'kartoffelfarm',
        name: 'Kartoffelfarm',
        requires: [],
        prodDuration: 30
    },
    {
        id: 'schnapsbrennerei',
        name: 'Schnapsbrennerei',
        requires: ['kartoffelfarm'],
        prodDuration: 30
    },
    {
        id: 'schaeferei',
        name: 'Schäferei',
        requires: [],
        prodDuration: 30
    },
    {
        id: 'weberei',
        name: 'Weberei',
        requires: ['schaeferei'],
        prodDuration: 30
    },
    {
        id: 'lehmgrube',
        name: 'Lehmgrube',
        requires: [],
        prodDuration: 30
    },
    {
        id: 'ziegelei',
        name: 'Ziegelei',
        requires: ['lehmgrube'],
        prodDuration: 60
    }
];

export const arbeiter = [
    {
        id: 'holzfaeller',
        name: 'Holzfäller',
        requires: [],
    }
];

export default {
    bauern,
}