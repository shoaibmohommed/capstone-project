import { useNavigate } from 'react-router-dom'
import {
  BackgroundImage,
  Body,
  CategoryItemContainer
} from './styles'

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate()
  const onNavigationHandler = () => {
    navigate(`/shop/${title}`)
  }
  return (
    <CategoryItemContainer onClick={onNavigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  )
}

export default CategoryItem
