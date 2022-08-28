import './index.scss'

const BUTTON_TYPES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}
const Button = ({ children, buttonType, ...props }) => (
  <button
    className={`button-container ${BUTTON_TYPES[buttonType]}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
