import {
  createContext,
  useEffect,
  useReducer,
} from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase'
// import ProductsData from '../../components/shop/data.json'
// import SHOP_DATA from '../../shop-data'
// import { addCollectionAndDocuments } from '../../utils/firebase'

export const CategoriesContext = createContext({
  categoriesMap: []
})

export const INTIAL_STATE = {
  categoriesMap: []
}
export const SET_CATEGORIES_MAP_ACTION_TYPE =
  'SET_CATEGORIES_MAP'
export const categoriesReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CATEGORIES_MAP_ACTION_TYPE:
      return {
        ...state,
        categoriesMap: payload
      }
    default:
      throw new Error(
        `Unhandled type ${type} in categoriesReducer`
      )
  }
}

export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INTIAL_STATE
  )
  const setCategoriesMap = (data) => {
    dispatch({
      type: SET_CATEGORIES_MAP_ACTION_TYPE,
      payload: data
    })
  }
  const value = { categoriesMap }

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
