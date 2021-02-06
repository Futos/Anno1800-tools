import styles from './ProductionChains.module.scss'
import ProductionCard from './ProductionCard'

function ProductionChain ({ searchObj }) {
  const printHTML = Object.keys(searchObj).map(key => <ProductionCard id={key} {...searchObj[key]}/>)

  return (
    <div className='row'>{printHTML.length > 0 ? printHTML : <div className='col'>Keine Ergebnisse gefunden.</div>}</div>
  )
}

export default ProductionChain
