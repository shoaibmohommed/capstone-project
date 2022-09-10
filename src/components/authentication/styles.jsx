import styled from 'styled-components'

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`
