import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BUTTON_TYPES } from '../../lib/button'
import { selectCartTotal } from '../../store/cart'
import { selectUser } from '../../store/user'
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer
} from './styles'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectCartTotal)
  const curentUser = useSelector(selectUser)
  const [isProcessingPayment, setIsProcessingPayment] =
    useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()
    setIsProcessingPayment(true)
    if (!stripe || !elements) return

    const response = await fetch(
      '/.netlify/functions/create-payment-intent',
      {
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: amount * 100 })
      }
    ).then((res) => res.json())
    const {
      paymentIntent: { client_secret }
    } = response

    const paymentResult = await stripe.confirmCardPayment(
      client_secret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: curentUser
              ? curentUser.displayName
              : 'Guest'
          }
        }
      }
    )
    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (
        paymentResult.paymentIntent.status === 'succeeded'
      ) {
        alert('Payment Successful')
      }
    }
    setIsProcessingPayment(false)
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
