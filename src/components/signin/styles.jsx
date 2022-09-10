import styled from 'styled-components'

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
