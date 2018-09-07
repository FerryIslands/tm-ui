import * as React from 'react'
import styled from 'styled-components'
import Spinner from './spinner'

const SpinnerView = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin: auto;
  justify-content: center;
`

const Text = styled.div`
  color: #999;
  font-size: 20px;
  margin-left: 20px;
`

type Props = {
  text?: string
}

export default ({ text }: Props) => (
  <SpinnerView>
    <Spinner size={40} />
    {text && <Text>{text}</Text>}
  </SpinnerView>
)
