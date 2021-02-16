import ProductionCard from './ProductionCard'

function ProductionChain ({ searchObj, searchObjectInactive }) {
  const printHTML = [];

  searchObj && Object.keys(searchObj).forEach(key => printHTML.push(<ProductionCard id={key} {...searchObj[key]}/>));
  searchObjectInactive && Object.keys(searchObjectInactive).forEach(key => printHTML.push(<ProductionCard id={key} {...searchObjectInactive[key]} muted/>));

  return (
    <div className='row'>{printHTML.length > 0 ? printHTML : <div className='col'>Keine Ergebnisse gefunden.</div>}</div>
  )
}

export default ProductionChain
