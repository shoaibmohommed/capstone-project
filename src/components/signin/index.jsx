import { useState } from 'react'
import Button, { BUTTON_TYPES } from '../../lib/button'
import { FormInput } from '../../lib/form-input'
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase'
import {
  ButtonContainer,
  SignInFormContainer
} from './styles'

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
    <SignInFormContainer>
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
        <ButtonContainer>
          <Button type="submit" onClick={signIn}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES.google}
            onClick={signInGoogleUser}
          >
            Sign In with google
          </Button>
        </ButtonContainer>
      </form>
    </SignInFormContainer>
  )
}

export default SignInForm
