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
    secondary ? '#7F8D9D' : 'var(--accent-color)'};
  border: 0;
  border-radius: var(--border-radius);
  color: #fff;
  display: flex;
  fill: #fff;
  font-size: 16px;
  font-weight: 700;
  height: 34px;
  padding: 0 12px;

  & > svg {
    height: 16px;
    margin: 0 2px;
  }

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
    `};

  ${({ isLoading }: Props) =>
    isLoading &&
    `
      background: #8d8ba0;
      color: #c7c5d4;
      cursor: default;
    `};
`

const Text = styled.div`
  margin-right: 8px;
`

export default ({
  disabled,
  icon,
  iconPosition,
  isLoading,
  onClick,
  text,
}: Props) => (
  <Button
    disabled={disabled || isLoading}
    isLoading={isLoading}
    onClick={onClick}
  >
    {(iconPosition === 'right' || !icon) && <Text>{text}</Text>}
    {isLoading ? <Spinner color="#c7c5d4" size={20} /> : icon}
    {iconPosition === 'left' && <Text>{text}</Text>}
  </Button>
)
