import { annoIcon } from '../../assets/dummy/annoIcons'
import { bauern } from '../../assets/dummy/productionChain'
import { Link } from 'react-router-dom'
import { productionTypes } from '../../assets/dummy/productionTypes'
import { roundUp } from '../../helpers/calculations'
import { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import IonIcon from '@reacticons/ionicons'
import MouseOverlay from '../MouseOverlay/MouseOverlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import styles from './ProductionCard.module.scss'
import Tooltip from 'react-bootstrap/Tooltip'
import WavesIcon from '@material-ui/icons/Waves';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';

function ProductionCard ({ id, name, requires, prodDuration, maintenanceCost, prodType, muted }) {
  const [bgPercentage, setBgPercentage] = useState(100)
  const getServedObjs = function (key) {
    const returnRefs = []

    Object.keys(bauern).forEach(function (elKey) {
      if (requires && requires.includes(key)) {
        returnRefs.push(bauern[elKey])
      }
    })

    return returnRefs
  }

  const renderTooltip = (props, name) => (
    <Tooltip id='button-tooltip' {...props}>
      {productionTypes[prodType].tooltip}
    </Tooltip>
  )

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
    const referenceObject = bauern[subElement]
    if (referenceObject) {
      const calcRatio = referenceObject.prodDuration / prodDuration
      const roundUpVal = roundUp(calcRatio)
      const roundUpReturn = roundUpVal !== calcRatio && '(' + roundUpVal + ')'

      productionHTML.push(<li key={key}>{referenceObject.name}: {calcRatio} {roundUpReturn}</li>)
    }
  })

  const cardClassNames = ['p-3 h-100 d-flex flex-column text-white', styles.productionCard]

  if (muted) {
    cardClassNames.push(styles.muted)
  }

  return (
    <div className='col col-4 mb-4' key={id}>
      <Link to={`/gebaeude#${id}`} className={cardClassNames.join(' ')}>
        <WavesIcon className={styles.bgIcon} />
        <FilterHdrIcon className={styles.bgIcon} />
        <div className={styles.oWrapper}><MouseOverlay /></div>
        <div className={styles.content}>
          <OverlayTrigger
            placement='right'
            delay={{ show: 250, hide: 400 }}
            overlay={props => renderTooltip(props)}
          >
            <div className='d-inline-flex mb-2'>
              <Badge
                as='div'
                variant={productionTypes[prodType] && productionTypes[prodType].bootstrapColor}
              >
                {productionTypes[prodType] && productionTypes[prodType].name}
              </Badge>
            </div>
          </OverlayTrigger>
          <h3 className='mb-1'>{name}</h3>

          <div className='mb-4'>
            <Badge variant='dark' className='mr-2'><IonIcon name='timer-outline' /> {prodDuration}s</Badge>
            <Badge variant='dark'><img src={annoIcon.resources.coins.src} alt={annoIcon.resources.coins.alt} height='15px' />{maintenanceCost}</Badge>
          </div>
          {productionHTML.length > 0 ? <div><strong>Benötigt:</strong>
            <ul>{productionHTML}</ul>
          </div> : ''}
          {servingHTML.length > 0 ? <div><strong>Versorgt:</strong><ul>{servingHTML}</ul></div> : ''}
        </div>
      </Link>
    </div>
  )
}

export default ProductionCard
