import * as React from 'react'
import { Table } from './elements'
import TableGroup from './group'
import { grouper } from './grouper'
import TableHeader from './header'
import { Column, ColumnSorting, Row } from './model'
import TableRow from './row'

type Props<T extends Row> = {
  clipboardValue?: (row: Partial<T>) => string
  columns: Array<Column<T>>
  data: T[]
  groupBy?: Array<keyof T>
  onSelectionChange?: (selection: T[]) => void
  rowDisabled?: (row: T) => boolean
  selection: T[]
  sortColumn?: keyof T
}

type State<T> = {
  columnSorting?: ColumnSorting<T>
}

export default class<T extends Row> extends React.PureComponent<
  Props<T>,
  State<T>
> {
  constructor(props: Props<T>) {
    super(props)

    this.state = {
      columnSorting: props.sortColumn && {
        column: props.sortColumn,
        desc: false,
      },
    }
  }

  handleRowSelectionChange = (row: T) => (selected: boolean) => {
    if (!this.props.onSelectionChange) {
      return
    }

    const newSelection = selected
      ? [...this.props.selection, row]
      : this.props.selection.filter(r => r !== row)

    this.props.onSelectionChange(newSelection)
  }

  handleRowsSelectionChange = (rows: T[]) => (selected: boolean) => {
    if (!this.props.onSelectionChange) {
      return
    }

    const activeRows = rows.filter(row => !this.rowDisabled(row))
    const newSelection = selected
      ? Array.from(new Set(this.props.selection.concat(activeRows)))
      : this.props.selection.filter(row => !activeRows.includes(row))

    this.props.onSelectionChange(newSelection)
  }

  rowDisabled = (row: T) => {
    return this.props.rowDisabled ? this.props.rowDisabled(row) : false
  }

  render() {
    const {
      clipboardValue,
      columns,
      data,
      groupBy,
      onSelectionChange,
      selection,
      sortColumn,
    } = this.props

    const activeSelection = selection.filter(s => data.includes(s))

    return (
      <Table>
        <tbody>
          <TableHeader
            clipboardValue={!!clipboardValue}
            columns={columns}
            onSelectionChange={
              onSelectionChange && this.handleRowsSelectionChange(data)
            }
            onSort={column =>
              this.setState({
                columnSorting: {
                  column,
                  desc: this.state.columnSorting
                    ? !this.state.columnSorting.desc
                    : false,
                },
              })
            }
            selected={
              activeSelection.length ===
              data.filter(row => !this.rowDisabled(row)).length
            }
            selectionDisabled={data.every(this.rowDisabled)}
            sortColumn={sortColumn}
            columnSorting={this.state.columnSorting}
          />
          {groupBy
            ? grouper(groupBy, data, this.state.columnSorting).map(group => (
                <TableGroup
                  columns={columns}
                  clipboardValue={clipboardValue}
                  key={group.id}
                  group={group}
                  groupBy={groupBy}
                  onGroupSelectionChange={
                    onSelectionChange &&
                    this.handleRowsSelectionChange(group.items)
                  }
                  onRowSelectionChange={
                    onSelectionChange && this.handleRowSelectionChange
                  }
                  groupSelected={group.items
                    .filter(row => !this.rowDisabled(row))
                    .every(row => activeSelection.includes(row))}
                  rowDisabled={this.rowDisabled}
                  rowSelected={row => activeSelection.includes(row)}
                />
              ))
            : sortRows(data, this.state.columnSorting).map(row => (
                <TableRow
                  clipboardValue={clipboardValue}
                  columns={columns}
                  onSelectionChange={
                    onSelectionChange && this.handleRowSelectionChange(row)
                  }
                  key={row.id}
                  row={row}
                  rowDisabled={this.rowDisabled}
                  selected={activeSelection.includes(row)}
                />
              ))}
        </tbody>
      </Table>
    )
  }
}

function sortRows<T>(rows: T[], columnSorting?: ColumnSorting<T>) {
  if (!columnSorting) {
    return rows
  }

  const sorted = rows.slice()

  sorted.sort((a, b) => {
    const field1 = a[columnSorting.column]
    const field2 = b[columnSorting.column]

    if (field1 < field2) {
      return columnSorting.desc ? 1 : -1
    }

    if (field1 > field2) {
      return columnSorting.desc ? -1 : 1
    }

    return 0
  })

  return sorted
}
