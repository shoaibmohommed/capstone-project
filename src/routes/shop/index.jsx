import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchCategories } from '../../store/categories'
import CategoriesPreview from '../categories-preview'
import Category from '../category'

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
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
