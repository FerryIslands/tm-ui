import * as React from 'react'
import styled from 'styled-components'
import { Copy } from '../icons'
import { Td } from './elements'

const Button = styled.div`
  cursor: pointer;
  height: 16px;
  position: relative;

  & > div {
    display: none;
  }

  &:hover > div {
    display: block;
  }

  & > svg {
    fill: var(--secondary-color);
    height: 16px;
  }
`

const Tooltip = styled.div`
  background: #fff;
  border: var(--border);
  border-radius: var(--border-radius);
  bottom: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: absolute;
  white-space: nowrap;
`

const Input = styled.input`
  border: 0;
  background: transparent;
  color: transparent;
  position: absolute;
  height: 1px;
  width: 1px;
`

type Props<T> = {
  row: T
  valueAccessor: (row: T) => string
}

type State = {
  status: 'Copy for TTB' | 'Copied!' | 'Failed to copy!'
}

export default class<T> extends React.Component<Props<T>, State> {
  input?: HTMLInputElement | null
  timer?: NodeJS.Timer

  constructor(props: Props<T>) {
    super(props)

    this.state = {
      status: 'Copy for TTB',
    }
  }

  copyToClipboard = () => {
    if (!this.input) {
      return
    }

    if (this.timer) {
      clearTimeout(this.timer)
    }

    const value = this.props.valueAccessor(this.props.row)

    this.input.value = value
    this.input.focus()
    this.input.select()

    const successful = document.execCommand('copy')

    this.setState({
      status: successful ? 'Copied!' : 'Failed to copy!',
    })

    this.timer = setTimeout(() => {
      this.setState({ status: 'Copy for TTB' })
    }, 2000)
  }

  render() {
    return (
      <Td>
        <Input innerRef={input => (this.input = input)} />
        <Button onClick={this.copyToClipboard}>
          <Tooltip>{this.state.status}</Tooltip>
          <Copy />
        </Button>
      </Td>
    )
  }
}
