import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const Th = styled.th`
  color: var(--secondary-color);
  padding: 10px;
  text-align: left;

  &::after {
    display: inline-block;
    margin-left: 10px;
    transform: scaleY(0.5);
  }

  ${({ sortDirection }: ThProps) =>
    sortDirection === 'asc' &&
    `
    &::after {
      content: "▼";
    }
  `};

  ${({ sortDirection }: ThProps) =>
    sortDirection === 'desc' &&
    `
    &::after {
      content: "▲";
    }
  `};

  ${({ sortable }: ThProps) =>
    sortable &&
    `
    &:hover {
      background: #fafafa;
      cursor: pointer;
    }
  `};
`

type ThProps = {
  sortDirection?: 'asc' | 'desc'
  sortable?: boolean
}

export const Tr = styled.tr`
  border-top: var(--border);
  background: ${({ alternate }: TrProps) => alternate && '#fafafa'};
  color: ${({ disabled }: TrProps) => disabled && 'rgba(40,40,40,.3)'};
`

type TrProps = {
  alternate?: boolean
  disabled?: boolean
}

export const Td = styled.td`
  padding: 10px;
`
