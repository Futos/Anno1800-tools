export const productionTypes = {
  necessity: {
    name: 'Grundbedürfnis',
    tooltip: 'Dieses Bedürfnis muss unbedingt abgedeckt sein, es ist ein Grundbedürfnis der Bürger',
    bootstrapColor: 'danger'
  },
  production: {
    name: 'Produktionsgebäude',
    tooltip: 'Dieses Gebäude dient der Produktion',
    bootstrapColor: 'warning'
  },
  satisfaction: {
    name: 'Zufriedenheit',
    tooltip: 'Dieses Gebäude dient der Zufriedenheit und ist optional',
    bootstrapColor: 'light'

  }
}

export default {
  productionTypes
}
