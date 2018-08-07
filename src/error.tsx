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
  error: Error
  onBack?: () => void
}

export default ({ error, onBack }: Props) => (
  <Error>
    {is401Error(error) ? (
      <>
        <Header>You have been logged out</Header>
        <Details>Please sign in again to continue.</Details>
        <Button onClick={() => location.reload()} text="Sign in" />
      </>
    ) : (
      <>
        <Header>An error occurred</Header>
        <Details>{error.message}</Details>
        {onBack && <Button onClick={onBack} text="Back" />}
      </>
    )}
  </Error>
)

function is401Error(error: any) {
  return error.networkError && error.networkError.statusCode === 401
}
