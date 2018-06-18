import * as React from 'react'
import styled from 'styled-components'
import Button from './button'

const Error = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
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
  margin-bottom: 25px;
`

type Props = {
  errors: Error[]
  onBack?: () => void
}

export default ({ errors, onBack }: Props) => (
  <Error>
    <Header>An error occurred</Header>
    <Details>
      {errors.map(error => <div key={error.message}>{error.message}</div>)}
    </Details>
    {onBack && <Button onClick={onBack}>Back</Button>}
  </Error>
)
