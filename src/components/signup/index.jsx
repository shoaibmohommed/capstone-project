import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../lib/button'
import { FormInput } from '../../lib/form-input'
import { signUpWithEmail } from '../../store/user/thunks'
import './styles.jsx'
import { SignupFormContainer } from './styles.jsx'

const initialFormState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignupForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(
    initialFormState
  )

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
    const {
      displayName,
      email,
      password,
      confirmPassword
    } = formFields
    if (password !== confirmPassword) {
      return
    }
    try {
      dispatch(
        signUpWithEmail({ email, password, displayName })
      )
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already exists')
      } else {
        console.log('error in handle Submit', error.message)
      }
    }
  }
  return (
    <SignupFormContainer>
      <h2>Don't have an account?</h2>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={formFields.displayName}
        />
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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={formFields.confirmPassword}
        />
        <Button type="submit">Submit</Button>
      </form>
    </SignupFormContainer>
  )
}

export default SignupForm
