import CategoryPreview from '../../components/category-preview'
import { useSelector } from 'react-redux'
import {
  selectCategoriesLoading,
  selectCategoriesMap
} from '../../store/categories'
import Spinner from '../../lib/spinner'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const loading = useSelector(selectCategoriesLoading)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview
              key={title}
              products={products}
              title={title}
            />
          )
        })
      )}
    </>
  )
}
export default CategoriesPreview
