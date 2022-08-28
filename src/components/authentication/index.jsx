import SignInForm from '../signin'
import SignupForm from '../signup'
import './index.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignupForm />
    </div>
  )
}

export default Authentication
