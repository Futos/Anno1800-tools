import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import { roundUp } from '../../helpers/calculations'
import { bauern } from '../../assets/dummy/productionChain'
import { productionTypes } from '../../assets/dummy/productionTypes'

function ProductionCard ({id, name, requires, prodDuration, prodType}) {
  const getServedObjs = function (key) {
    const returnRefs = []

    Object.keys(bauern).forEach(function (elKey) {
      if (requires && requires.includes(key)) {
        returnRefs.push(bauern[elKey])
      }
    })

    return returnRefs
  }

console.log('id', id)

  const renderTooltip = (props, name) => (
    <Tooltip id='button-tooltip' {...props}>
      {productionTypes[prodType].tooltip}
    </Tooltip>
  )

  const BadgeVariant = function () {
    if (prodType === 'necessity') {
      return <Badge as='div' variant='danger'>Bedürfnis</Badge>
    } else if (prodType === 'production') {
      return <Badge as='div' variant='warning'>Produktion</Badge>
    }
  }

  const servingHTML = []
  const referenceObjects = getServedObjs(id)
  if (referenceObjects && referenceObjects.length > 0) {
    referenceObjects.forEach(function (subElement, key) {
      const calcRatio = subElement.prodDuration / prodDuration
      const roundUpVal = roundUp(calcRatio)
      const roundUpReturn = roundUpVal !== calcRatio && '(' + roundUpVal + ')'
      servingHTML.push(<li key={key}>{subElement.name}: {calcRatio} {roundUpReturn}</li>)
    })
  }

  const productionHTML = []
  requires && requires.forEach(function (subElement, key) {
    const referenceObject = bauern[subElement];
    if (referenceObject) {
      const calcRatio = referenceObject.prodDuration / prodDuration
      const roundUpVal = roundUp(calcRatio)
      const roundUpReturn = roundUpVal !== calcRatio && '(' + roundUpVal + ')'

      productionHTML.push(<li key={key}>{referenceObject.name}: {calcRatio} {roundUpReturn}</li>)
    }
  })

  return (
    <div className='col col-4 mb-4'>
      <Link to={`/gebaeude#${id}`} className='p-3 bg-secondary rounded h-100 d-block text-white'>
        <h3>{name}</h3>
        <OverlayTrigger
          placement='right'
          delay={{ show: 250, hide: 400 }}
          overlay={props => renderTooltip(props)}
        >
          <div className='d-inline-block'><BadgeVariant /></div>
        </OverlayTrigger>

        <div><strong>Zeit:</strong> {prodDuration}s</div>
        {productionHTML.length > 0 ? <div><strong>Benötigt:</strong><ul>{productionHTML}</ul></div> : ''}
        {servingHTML.length > 0 ? <div><strong>Versorgt:</strong><ul>{servingHTML}</ul></div> : ''}
      </Link>
    </div>
  )
}

export default ProductionCard
