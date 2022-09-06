import './styles.jsx'
import {
  ButtonContainer,
  ButtonSpinner,
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

const Button = ({
  children,
  buttonType,
  isLoading,
  ...props
}) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton {...props} disabled={isLoading}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button
