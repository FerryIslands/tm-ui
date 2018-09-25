import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

type ButtonProps = {
  iconColor?: string
}

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
    fill: ${({ iconColor }: ButtonProps) =>
      iconColor ? iconColor : 'var(--secondary-color)'};
    height: 16px;
  }
`

type Props = {
  icon: any
  iconColor?: string
  onClick: () => void
}

export class IconButton extends React.PureComponent<Props> {
  render() {
    const Icon = this.props.icon

    return (
      <Wrapper>
        <Button iconColor={this.props.iconColor} onClick={this.props.onClick}>
          {this.props.children}
          <Icon />
        </Button>
      </Wrapper>
    )
  }
}
