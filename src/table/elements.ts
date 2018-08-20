import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 44px;
`

export const Th = styled.th`
  font-size: var(--normal-font-size);
  font-weight: 500;
  height: 45px;
  padding: 0 10px;
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
  background: ${({ alternate }: TrProps) =>
    alternate
      ? 'var(--row-alternate-background-color)'
      : 'var(--row-background-color)'};
  color: ${({ disabled }: TrProps) => disabled && 'rgba(40,40,40,.3)'};

  filter: ${({ isFocused }: TrProps) => (isFocused ? 'brightness(97%)' : '')};
`

type TrProps = {
  alternate?: boolean
  disabled?: boolean
  isFocused?: boolean
}

export const Td = styled.td`
  height: 45px;
  padding: 0 10px;
`
