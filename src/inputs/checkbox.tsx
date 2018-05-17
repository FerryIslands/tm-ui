import * as React from 'react'
import styled from 'styled-components'
import { Check } from '../icons'

const Button = styled.button`
  background: #fff;
  border: solid 1px #e1edf0;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: center;
  padding: 0;
  width: 20px;

  & svg {
    fill: #fff;
    height: 11px;
  }

  ${({ checked }: ButtonProps) =>
    checked &&
    `
      background: var(--accent-color);
      border-color: transparent;
    `};
`

type ButtonProps = {
  checked?: boolean
}

type Props = {
  checked?: boolean
  onChange: (checked: boolean) => void
}

export default ({ checked, onChange }: Props) => (
  <Button checked={checked} onClick={() => onChange(!checked)}>
    <Check />
  </Button>
)
