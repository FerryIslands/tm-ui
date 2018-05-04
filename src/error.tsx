import * as React from 'react'
import styled from 'styled-components'

const Error = styled.div`
  color: red;
  font-weight: 700;
`

type Props = {
  errors: Error[]
}

export default ({ errors }: Props) => (
  <Error>{errors.map(error => error.message)}</Error>
)
