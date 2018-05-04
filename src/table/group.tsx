import * as React from 'react'
import TableCell from './cell'
import CopyButton from './copy-button'
import { Td, Tr } from './elements'
import { Column, Row } from './model'
import TableRow from './row'
import RowSelector from './row-selector'

type Props<T> = {
  clipboardValue?: (row: Partial<T>) => string
  columns: Array<Column<T>>
  onGroupSelectionChange?: (selected: boolean) => void
  onRowSelectionChange?: (row: T) => (selected: boolean) => void
  group: Partial<T> & { items: T[] }
  groupBy: Array<keyof T>
  groupSelected?: boolean
  rowDisabled: (row: T) => boolean
  rowSelected: (row: T) => boolean
}

export default function<T extends Row>({
  clipboardValue,
  columns,
  onGroupSelectionChange,
  onRowSelectionChange,
  group,
  groupBy,
  groupSelected,
  rowDisabled,
  rowSelected,
}: Props<T>) {
  return (
    <>
      <Tr alternate>
        {onGroupSelectionChange && (
          <RowSelector
            disabled={group.items.every(rowDisabled)}
            onSelectionChange={onGroupSelectionChange}
            selected={groupSelected}
          />
        )}
        {clipboardValue && (
          <CopyButton row={group} valueAccessor={clipboardValue} />
        )}
        {columns.map(column => (
          <TableCell
            column={{
              ...column,
              format: groupBy.includes(column.key)
                ? column.format
                : (value: any) => '',
            }}
            key={column.key}
            row={group}
          />
        ))}
      </Tr>
      {group.items.map(row => (
        <TableRow
          columns={columns.map(column => ({
            ...column,
            format: !groupBy.includes(column.key)
              ? column.format
              : (value: any) => '',
          }))}
          hideClipboardCopy={true}
          key={row.id}
          onSelectionChange={onRowSelectionChange && onRowSelectionChange(row)}
          row={row}
          rowDisabled={rowDisabled}
          selected={rowSelected(row)}
        />
      ))}
    </>
  )
}
