import { ColumnSorting } from './model'

type Group<T> = Partial<T> & {
  items: T[]
}

export function grouper<T>(
  groupBy: Array<keyof T>,
  rows: T[],
  columnSorting?: ColumnSorting<T>,
): Array<Group<T>> {
  const sorted = rows.slice()

  sorted.sort((a, b) => {
    for (const key of groupBy) {
      const field1 = a[key]
      const field2 = b[key]

      if (field1 < field2) {
        return -1
      }

      if (field1 > field2) {
        return 1
      }
    }

    return 0
  })

  const result = sorted
    .map(row => groupBy.map(g => row[g]))
    .reduce((accumulator: Array<Array<T[keyof T]>>, current) => {
      if (accumulator.some(p => p.join('|') === current.join('|'))) {
        return accumulator
      }

      return [...accumulator, current]
    }, [])
    .map((groupName: Array<T[keyof T]>) => {
      const group: any = { items: [] }

      groupName.forEach((name, i) => {
        group[groupBy[i]] = name
        group.id = groupName.join(' - ')
        group.items = rows.filter(row => row[groupBy[i]] === name)
      })

      return group
    })

  if (columnSorting) {
    result.sort((a, b) => {
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
  }

  return result
}
