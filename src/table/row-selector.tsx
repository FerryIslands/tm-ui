import * as React from 'react'
import Checkbox from '../inputs/checkbox'
import { Td } from './elements'

type Props = {
  disabled: boolean
  onSelectionChange: (selected: boolean) => void
  selected?: boolean
}

export default ({ disabled, onSelectionChange, selected }: Props) => (
  <Td>
    {!disabled && (
      <Checkbox
        checked={selected}
        onChange={checked => onSelectionChange(checked)}
      />
    )}
  </Td>
)
