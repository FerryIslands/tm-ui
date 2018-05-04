import * as React from 'react'
import TableCell from './cell'
import CopyButton from './copy-button'
import { Td, Tr } from './elements'
import { Column, Row } from './model'
import RowSelector from './row-selector'

type Props<T> = {
  clipboardValue?: (row: Partial<T>) => string
  columns: Array<Column<T>>
  hideClipboardCopy?: boolean
  onSelectionChange?: (selected: boolean) => void
  row: T
  rowDisabled: (row: T) => boolean
  selected?: boolean
}

export default function<T extends Row>({
  clipboardValue,
  columns,
  hideClipboardCopy,
  onSelectionChange,
  row,
  rowDisabled,
  selected,
}: Props<T>) {
  const disabled = rowDisabled(row)

  return (
    <Tr disabled={disabled}>
      {onSelectionChange && (
        <RowSelector
          disabled={disabled}
          onSelectionChange={onSelectionChange}
          selected={selected}
        />
      )}
      {hideClipboardCopy && <Td />}
      {clipboardValue && (
        <CopyButton row={row} valueAccessor={clipboardValue} />
      )}
      {columns.map(column => (
        <TableCell column={column} key={row.id + column.key} row={row} />
      ))}
    </Tr>
  )
}
