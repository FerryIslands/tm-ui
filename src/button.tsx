import styled from 'styled-components'

type Props = {
  disabled?: boolean
  secondary?: boolean
}

export default styled.div`
  align-items: center;
  background: ${({ secondary }: Props) =>
    secondary ? '#B1BBC0' : 'var(--accent-color)'};
  border: 0;
  border-radius: var(--border-radius);
  color: #fff;
  display: grid;
  fill: #fff;
  font-size: 16px;
  font-weight: 700;
  grid-gap: 10px;
  grid-auto-flow: column;
  padding: 10px 12px;

  ${({ disabled }: Props) =>
    disabled
      ? `
background: var(--accent-disabled-color);
color: #8c9196;
fill: #8c9196;`
      : `
cursor: pointer;
&:hover {
  background: var(--accent-hover-color);
}
&:active {
  background: var(--accent-active-color);
  padding: 11px 11px 9px 13px;
}

`} svg {
    height: 16px;
  }
`
