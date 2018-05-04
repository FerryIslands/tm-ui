import styled from 'styled-components'

export default styled.button`
  background: var(--accent-color);
  border: 0;
  border-radius: var(--border-radius);
  color: white;
  display: grid;
  font-weight: 500;
  padding: 10px 20px;

  &:hover {
    background: var(--accent-hover-color);
  }

  &:active {
    background: var(--accent-active-color);
    padding: 11px 19px 9px 21px;
  }

  &:disabled {
    background: var(--accent-disabled-color);
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`
