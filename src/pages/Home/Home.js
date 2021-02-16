import React, { useState, useEffect } from 'react'

import Header from '../../components/Header/Header'
import ProductionChain from '../../components/ProductionChains/ProductionChains'
import Search from '../../components/Search/Search'
import { findCharWithTollerance, searchify } from '../../helpers/helpers'
import { popGroup } from '../../assets/dummy/civData'
import { bauern } from '../../assets/dummy/productionChain'

function Home () {
  const [searchValue, setSearchValue] = useState('')
  const [searchObj, setSearchObj] = useState(bauern)

  const onInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  const filterElems = (elements, value) => {
    const newList = {}
    const outsourcedList = {}
    Object.keys(elements).forEach(element => {
      if  (findCharWithTollerance(searchify(JSON.stringify(elements[element])), searchify(value))) { 
        newList.[element] = elements[element]
      } else {
        outsourcedList.[element] = elements[element]
        console.log('elements[element]', elements[element])
      }
    })

    if (!value) return [{}, elements]

    return [newList, outsourcedList]
  }

  useEffect(() => {
    const filtered = filterElems(bauern, searchValue);
    setSearchObj(filtered);
    console.log('fobj', filtered);
  }, [searchValue])

  return (
    <>
      <Header />
      <main className='container pt-5'>
        <h1>Home</h1>
        <Search valueOutput={onInputChange} />
        <h2 className='pt-5 pb-2'>Produktionsketten</h2>
        <ProductionChain searchObj={searchObj[0]} searchObjectInactive={searchObj[1]} />
      </main>
    </>
  )
}

export default Home
