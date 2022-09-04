import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { setCategories } from '../../store/categories'
import { getCategoriesAndDocuments } from '../../utils/firebase'
import CategoriesPreview from '../categories-preview'
import Category from '../category'

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      const categoriesData =
        await getCategoriesAndDocuments()
      dispatch(setCategories(categoriesData))
    })()
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route
        path=":category"
        element={<Category />}
      ></Route>
    </Routes>
  )
}
export default Shop
