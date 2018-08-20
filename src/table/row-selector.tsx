import * as React from 'react'
import Checkbox from '../inputs/checkbox'
import { Td } from './elements'

type Props = {
  autoFocus?: boolean
  disabled: boolean
  checkboxRef?: React.RefObject<HTMLButtonElement>
  onSelectionChange: (selected: boolean) => void
  selected?: boolean
}

export default ({
  autoFocus,
  disabled,
  checkboxRef,
  onSelectionChange,
  selected,
}: Props) => (
  <Td>
    {!disabled && (
      <Checkbox
        autoFocus={autoFocus}
        checkboxRef={checkboxRef}
        checked={selected}
        onChange={checked => onSelectionChange(checked)}
      />
    )}
  </Td>
)
