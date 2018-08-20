import * as React from 'react'
import CopyButton from '../copy-button'
import TableCell from './cell'
import { Td, Tr } from './elements'
import { Column, Row } from './model'
import RowSelector from './row-selector'

type Props<T> = {
  clipboardValue?: (row: Partial<T>) => string
  columns: Array<Column<T>>
  hideClipboardCopy?: boolean
  isFocused: boolean
  onFocusChange: (row: Partial<T>) => void
  onSelectionChange?: (selected: boolean) => void
  row: T
  rowDisabled: (row: T) => boolean
  selected?: boolean
}

export default class<T extends Row> extends React.PureComponent<Props<T>> {
  checkboxRef: React.RefObject<HTMLButtonElement> = React.createRef<
    HTMLButtonElement
  >()

  componentDidMount() {
    if (this.checkboxRef.current) {
      this.checkboxRef.current.onfocus = () =>
        this.props.onFocusChange(this.props.row)
    }
  }

  render() {
    const {
      clipboardValue,
      columns,
      hideClipboardCopy,
      isFocused,
      onSelectionChange,
      row,
      rowDisabled,
      selected,
    } = this.props

    const disabled = rowDisabled(row)

    return (
      <Tr disabled={disabled} isFocused={isFocused}>
        {onSelectionChange && (
          <RowSelector
            checkboxRef={this.checkboxRef}
            disabled={disabled}
            onSelectionChange={onSelectionChange}
            selected={selected}
          />
        )}
        {hideClipboardCopy && <Td />}
        {clipboardValue && (
          <Td>
            <CopyButton row={row} valueAccessor={clipboardValue} />
          </Td>
        )}
        {columns.map(column => (
          <TableCell
            column={column}
            key={row.id + column.key + column.header}
            row={row}
          />
        ))}
      </Tr>
    )
  }
}
