import React, { useState, useEffect } from 'react'

import Header from '../../components/Header/Header'
import ProductionChain from '../../components/ProductionChains/ProductionChains'
import Search from '../../components/Search/Search'
import { findCharWithTollerance, searchify } from '../../helpers/helpers'
import { popGroup } from '../../assets/dummy/civData'
import { bauern } from '../../assets/dummy/prductionChain'

function Home () {
  const [searchValue, setSearchValue] = useState('')
  const [searchObj, setSearchObj] = useState(bauern)

  const onInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  const filterElems = (elements, value) => {
    const newList = []
    elements.forEach(element => {
      if (findCharWithTollerance(searchify(JSON.stringify(element)), searchify(value))) {
        newList.push(element)
      }
    })

    if (!value) return elements

    return newList
  }

  useEffect(() => {
    setSearchObj(filterElems(bauern, searchValue))
  }, [searchValue])

  return (
    <>
      <Header />
      <main className='container pt-5'>
        <h1>Home</h1>
        <Search valueOutput={onInputChange} />
        <h2 className='pt-5 pb-2'>Produktionsketten</h2>
        <ProductionChain searchObj={searchObj} />
      </main>
    </>
  )
}

export default Home
