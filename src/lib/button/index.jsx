import './styles.jsx'
import {
  ButtonContainer,
  GoogleButtonContainer,
  InvertedButtonContainer
} from './styles.jsx'

export const BUTTON_TYPES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}
const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: ButtonContainer,
    [BUTTON_TYPES.google]: GoogleButtonContainer,
    [BUTTON_TYPES.inverted]: InvertedButtonContainer
  }[buttonType])

const Button = ({ children, buttonType, ...props }) => {
  const CustomButton = getButton(buttonType)
  return <CustomButton {...props}>{children}</CustomButton>
}

export default Button
