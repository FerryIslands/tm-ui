import * as React from 'react'
import styled from 'styled-components'

const Error = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.div`
  color: red;
  font-size: 20px;
  margin-bottom: 20px;
`

const Details = styled.div`
  color: #999;
  font-size: 14px;
`

type Props = {
  errors: Error[]
}

export default ({ errors }: Props) => (
  <Error>
    <Header>An error occurred</Header>
    <Details>{errors.map(error => error.message)}</Details>
  </Error>
)
