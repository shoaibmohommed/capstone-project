import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase'
// import ProductsData from '../../components/shop/data.json'
// import SHOP_DATA from '../../shop-data'
// import { addCollectionAndDocuments } from '../../utils/firebase'

export const CategoriesContext = createContext({
  categoriesMap: []
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const value = { categoriesMap }
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  useEffect(() => {
    ;(async () => {
      const categoriesData =
        await getCategoriesAndDocuments()
      setCategoriesMap(categoriesData)
    })()
  }, [])

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
