import styled from 'styled-components'

type ButtonProps = {
  checked?: boolean
}

export const Days = styled.div`
  background-color: transparent;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 3px 0;
  border-radius: 3px;
`

export const Weekday = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  width: 30px;
  background-color: ${({ checked }: ButtonProps) =>
    checked
      ? 'var(--field-alternate-background-color)'
      : 'var(--field-background-color)'};
  color: ${({ checked }: ButtonProps) =>
    checked
      ? 'var(--toolbar-background-color)'
      : 'var(--field-placeholder-color)'};
  border-radius: var(--border-radius);
  border: none;
`
