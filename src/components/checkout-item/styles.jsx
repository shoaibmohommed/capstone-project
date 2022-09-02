import styled, { css } from 'styled-components'

const FieldWidth = css`
  width: 23%;
`
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  ${FieldWidth}
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const Value = styled.span`
  margin: 0 10px;
`

export const RemoveBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
export const Quantity = styled.span`
  display: flex;
  ${FieldWidth}
`

export const Name = styled.span`
  ${FieldWidth}
`

export const Price = styled.span`
  ${FieldWidth}
`
