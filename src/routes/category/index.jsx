import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/product-card'
import { CategoryContainer, CategoryTitle } from './styles'
import {
  selectCategoriesLoading,
  selectCategoriesMap
} from '../../store/categories'
import Spinner from '../../lib/spinner'

const Category = () => {
  const { category } = useParams()
  const loading = useSelector(selectCategoriesLoading)
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(
    categoriesMap[category]
  )

  useEffect(() => {
    const newProducts = categoriesMap[category]
    setProducts(newProducts)
  }, [category, categoriesMap])

  return (
    <>
      <CategoryTitle>
        {category.toUpperCase()}
      </CategoryTitle>
      {loading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </CategoryContainer>
      )}
    </>
  )
}

export default Category
