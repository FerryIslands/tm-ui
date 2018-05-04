import * as React from 'react'
import { Td } from './elements'
import { Column, Row } from './model'

type Props<T> = {
  column: Column<T>
  row: Partial<T>
}

export default function<T extends Row>({ column, row }: Props<T>) {
  const formatValue = column.format || defaultFormatter

  return <Td>{formatValue(row[column.key])}</Td>
}

const defaultFormatter = (value: any) => value && value.toString()
