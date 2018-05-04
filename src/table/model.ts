export type Column<T> = {
  format?: (value: any) => string
  header: string
  key: keyof T
}

export type Row = {
  id: string
}

export type ColumnSorting<T> = {
  column: keyof T
  desc: boolean
}
