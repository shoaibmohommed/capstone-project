import styled from 'styled-components'
import Button from '../../lib/button'

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

export const FormContainer = styled.form`
  min-width: 500px;
`
export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 20px;
`
