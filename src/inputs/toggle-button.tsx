import * as React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  align-items: center;
  color: var(--field-text-color);
  display: flex;
  font-size: var(--field-font-size);
  font-weight: var(--field-font-weight);
  letter-spacing: var(--field-letter-spacing);
`

const Input = styled.input`
  margin: 1px 10px 0 0;
`

type Props = {
  checked?: boolean
  label: string
  onChange: (checked: boolean) => void
}

export default ({ checked, label, onChange }: Props) => (
  <Label>
    <Input
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      type="checkbox"
    />
    {label}
  </Label>
)
