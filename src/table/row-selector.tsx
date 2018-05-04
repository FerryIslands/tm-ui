import * as React from 'react'
import styled from 'styled-components'
import { Td } from './elements'

const Input = styled.input`
  padding: 5px;
`

type Props = {
  disabled: boolean
  onSelectionChange: (selected: boolean) => void
  selected?: boolean
}

export default ({ disabled, onSelectionChange, selected }: Props) => (
  <Td>
    {!disabled && (
      <Input
        checked={selected}
        onChange={e => onSelectionChange(e.target.checked)}
        type="checkbox"
      />
    )}
  </Td>
)
