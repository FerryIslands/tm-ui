import * as React from 'react'
import styled from 'styled-components'
import { Copy } from './icons'

const Wrapper = styled.div`
  position: relative;
`

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

type TooltipProps = {
  right?: boolean
}

const Tooltip = styled.div`
  background: #fff;
  border-radius: var(--border-radius);
  border: var(--border);
  bottom: -10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  left: ${({ right }: TooltipProps) => (right ? '' : '150%')};
  padding: 10px;
  position: absolute;
  right: ${({ right }: TooltipProps) => (right ? '-5px' : '')};
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
  right?: boolean
  row: T
  valueAccessor: (row: T) => string
}

type State = {
  status: 'Copy for TTB' | 'Copied!' | 'Failed to copy!'
}

export default class<T> extends React.Component<Props<T>, State> {
  input: React.RefObject<HTMLInputElement>
  timer?: NodeJS.Timer

  constructor(props: Props<T>) {
    super(props)

    this.state = {
      status: 'Copy for TTB',
    }

    this.input = React.createRef<HTMLInputElement>()
  }

  copyToClipboard = () => {
    if (!this.input.current) {
      return
    }

    if (this.timer) {
      clearTimeout(this.timer)
    }

    const value = this.props.valueAccessor(this.props.row)

    this.input.current.value = value
    this.input.current.focus()
    this.input.current.select()

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
      <Wrapper>
        <Input innerRef={this.input} />
        <Button onClick={this.copyToClipboard}>
          <Tooltip right={this.props.right}>{this.state.status}</Tooltip>
          <Copy />
        </Button>
      </Wrapper>
    )
  }
}
