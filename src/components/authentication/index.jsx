import SignInForm from '../signin'
import SignupForm from '../signup'
import './styles.jsx'
import { AuthenticationContainer } from './styles.jsx'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignupForm />
    </AuthenticationContainer>
  )
}

export default Authentication
