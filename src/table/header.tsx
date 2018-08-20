import * as React from 'react'
import { Th, Tr } from './elements'
import { Column, ColumnSorting } from './model'
import RowSelector from './row-selector'

type Props<T> = {
  clipboardValue?: boolean
  columns: Array<Column<T>>
  columnSorting?: ColumnSorting<T>
  onSelectionChange?: (selected: boolean) => void
  onSort?: (column: keyof T) => void
  selected?: boolean
  selectionDisabled: boolean
  sortColumn?: keyof T
}

export default function<T>({
  clipboardValue,
  columns,
  columnSorting,
  onSelectionChange,
  onSort,
  selected,
  selectionDisabled,
  sortColumn,
}: Props<T>) {
  return (
    <Tr>
      {onSelectionChange && (
        <RowSelector
          autoFocus
          disabled={selectionDisabled}
          onSelectionChange={onSelectionChange}
          selected={selected}
        />
      )}
      {clipboardValue && <Th />}
      {columns.map(({ header, key }) => (
        <Th
          key={key + header}
          onClick={() => onSort && sortColumn === key && onSort(key)}
          sortable={!!onSort && sortColumn === key}
          sortDirection={
            columnSorting && columnSorting.column === key
              ? columnSorting.desc ? 'desc' : 'asc'
              : undefined
          }
        >
          {header}
        </Th>
      ))}
    </Tr>
  )
}
