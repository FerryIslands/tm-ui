import * as React from 'react'
import styled from 'styled-components'
import Spinner from './spinner'

type Props = {
  disabled?: boolean
  onClick?: () => void
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  secondary?: boolean
  text?: string
}

const Button = styled.button`
  align-items: center;
  background: ${({ secondary }: Props) =>
    secondary ? '#7F8D9D' : 'var(--accent)'};
  border: 0;
  border-radius: var(--border-radius);
  color: #fff;
  display: flex;
  fill: #fff;
  font-size: 16px;
  font-weight: 700;
  height: 34px;
  padding: 0 12px;

  ${({ disabled }: Props) =>
    disabled
      ? `
background: #cccdcf;
color: #8c9196;
fill: #8c9196;`
      : `
cursor: pointer;

&:hover {
  opacity: 0.9;
}

&:active {
  opacity: 0.7;
  padding: 1px 11px 0 13px;
}

`} svg {
    height: 16px;
  }

  svg:first-child:not(:last-child) {
    margin-right: 8px;
  }

  svg:last-child:not(:first-child) {
    margin-left: 8px;
  }

  ${({ isLoading }: Props) =>
    isLoading
      ? `
  background: #2D284D;
  color: #8c9196;
  cursor: default;
  svg {
      height: 24px;
    }
  `
      : ``};
`

export default ({
  disabled,
  icon,
  iconPosition,
  isLoading,
  onClick,
  text,
}: Props) => (
  <Button disabled={disabled} onClick={onClick} isLoading={isLoading}>
    {iconPosition === 'right' && <Text>{text}</Text>}
    {isLoading ? <Spinner width={24} color={'#fff'} /> : icon}
    {iconPosition === 'left' && <Text>{text}</Text>}
  </Button>
)

const Text = styled.div``
