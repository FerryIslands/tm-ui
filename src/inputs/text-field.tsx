import styled from 'styled-components'

export default styled.input`
  background: var(--field-background-color);
  border: 0;
  border-radius: var(--border-radius);
  color: var(--field-text-color);
  font-size: var(--field-font-size);
  font-weight: var(--field-font-weight);
  letter-spacing: var(--field-letter-spacing);
  line-height: var(--field-height);
  padding: var(--field-padding);

  &::placeholder {
    color: var(--field-placeholder-color);
  }
`
