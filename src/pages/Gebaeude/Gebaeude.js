import Header from '../../components/Header/Header'
import { bauern } from '../../assets/dummy/prductionChain'
import { getProdElemByKey } from '../../helpers/prodDataHelpers'

function Gebaeude ({ location }) {
  const hash = location.hash
  let entry = null

  if (hash) {
    entry = getProdElemByKey(bauern, hash.substring(1))
  }

  const renderDetail = () => {
    console.log('entry', entry)

    return (
      <div>
        <h1>{entry.name}</h1>
        <strong>{entry.prodDuration}</strong>
      </div>
    )
  }

  const array1 = { apfel: 'apfel', birne: 'birne' }
  const array2 = { ...array1, birne: 'orange' }

  console.log('array2', array2)

  return (
    <>
      <Header />
      <div className='container pt-5'>
        <div className='row'>
          {entry ? (
            renderDetail()
          ) : (
            <div className='col'><h1>Gebäude</h1></div>
          )}
        </div>
      </div>
    </>
  )
}

export default Gebaeude
