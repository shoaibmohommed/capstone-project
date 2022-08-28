import {
  signInWithGooglePopup,
  createUserFromAuth
} from '../../utils/firebase'
import SignupForm from '../signup'

const Signin = () => {
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDoc = await createUserFromAuth(user)
    console.log(userDoc)
  }
  return (
    <div>
      <h1>Signin Component</h1>
      <button onClick={logInGoogleUser}>
        Sign In with google
      </button>
      <SignupForm />
    </div>
  )
}

export default Signin
