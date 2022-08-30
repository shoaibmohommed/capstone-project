import { useState } from 'react'
import Button from '../../lib/button'
import { FormInput } from '../../lib/form-input'
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase'
import './index.scss'

const initialFormState = {
  email: '',
  password: ''
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(
    initialFormState
  )

  const signInGoogleUser = async () => {
    await signInWithGooglePopup()
  }
  const signIn = async () => {
    // const userDoc = await createUserFromAuth(user)
    // console.log(userDoc)
  }

  const resetFormFields = () =>
    setFormFields(initialFormState)
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }
  const onFormSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = formFields

    try {
      const { user } =
        await signInAuthUserWithEmailAndPassword(
          email,
          password
        )
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect passwor for the email')
          break
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break
        default:
          console.log(
            'error in handle Submit',
            error.message
          )
          break
      }
    }
  }
  return (
    <div className="signin-form-container">
      <h2>Already have an account?</h2>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={formFields.email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={formFields.password}
        />
        <div className="buttons-container">
          <Button type="submit" onClick={signIn}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInGoogleUser}
          >
            Sign In with google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
