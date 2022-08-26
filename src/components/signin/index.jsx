import {
  signInWithGooglePopup,
  createUserFromAuth
} from '../../utils/firebase'

const Signin = () => {
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDoc = createUserFromAuth(user)
    console.log(userDoc)
  }
  return (
    <div>
      <h1>Signin Component</h1>
      <button onClick={logInGoogleUser}>
        Sign In with google
      </button>
    </div>
  )
}

export default Signin
