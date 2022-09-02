import ProductCard from '../product-card'
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink
} from './styles'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>
          {title.toUpperCase()}
        </TitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
