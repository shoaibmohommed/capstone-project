import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories'
import ProductCard from '../../components/product-card'
import './index.scss'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(
    categoriesMap[category]
  )

  useEffect(() => {
    const newProducts = categoriesMap[category]
    setProducts(newProducts)
  }, [category, categoriesMap])

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </>
  )
}

export default Category
