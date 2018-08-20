import * as React from 'react'
import CopyButton from '../copy-button'
import TableCell from './cell'
import { Td, Tr } from './elements'
import { Column, Row } from './model'
import TableRow from './row'
import RowSelector from './row-selector'

type Props<T> = {
  clipboardValue?: (row: Partial<T>) => string
  columns: Array<Column<T>>
  onFocusChange: (row: Partial<T>) => void
  onGroupSelectionChange?: (selected: boolean) => void
  onRowSelectionChange?: (row: T) => (selected: boolean) => void
  group: Partial<T> & { items: T[] }
  groupBy: Array<keyof T>
  groupSelected?: boolean
  isFocused: Partial<T>
  rowDisabled: (row: T) => boolean
  rowSelected: (row: T) => boolean
}

export default class<T extends Row> extends React.PureComponent<Props<T>> {
  checkboxRef: React.RefObject<HTMLButtonElement> = React.createRef<
    HTMLButtonElement
  >()

  componentDidMount() {
    if (this.checkboxRef.current) {
      this.checkboxRef.current.onfocus = () =>
        this.props.onFocusChange(this.props.group)
    }
  }

  render() {
    const {
      clipboardValue,
      columns,
      onFocusChange,
      onGroupSelectionChange,
      onRowSelectionChange,
      group,
      groupBy,
      groupSelected,
      isFocused,
      rowDisabled,
      rowSelected,
    } = this.props

    return (
      <>
        <Tr alternate isFocused={isFocused ? isFocused.id === group.id : false}>
          {onGroupSelectionChange && (
            <RowSelector
              disabled={group.items.every(rowDisabled)}
              checkboxRef={this.checkboxRef}
              onSelectionChange={onGroupSelectionChange}
              selected={groupSelected}
            />
          )}
          {clipboardValue && (
            <Td>
              <CopyButton row={group} valueAccessor={clipboardValue} />
            </Td>
          )}
          {columns.map(column => (
            <TableCell
              column={{
                ...column,
                format: groupBy.includes(column.key) ? column.format : () => '',
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
              format: !groupBy.includes(column.key) ? column.format : () => '',
            }))}
            hideClipboardCopy={true}
            isFocused={isFocused ? isFocused.id === row.id : false}
            key={row.id}
            onFocusChange={onFocusChange}
            onSelectionChange={
              onRowSelectionChange && onRowSelectionChange(row)
            }
            row={row}
            rowDisabled={rowDisabled}
            selected={rowSelected(row)}
          />
        ))}
      </>
    )
  }
}
