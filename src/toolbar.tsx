import styled from 'styled-components'

export default styled.div`
  background: var(--toolbar-background-color);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
  grid-template-columns: auto 1fr;
  padding: var(--padding);

  --field-background-color: #6f7e90;
  --field-alternate-background-color: #b9d8df;
  --field-alternate-text-color: #226f81;
  --field-font-size: 14px;
  --field-font-weight: 600;
  --field-height: 26px;
  --field-letter-spacing: -0.6px;
  --field-padding: 5px 12px;
  --field-placeholder-color: #b1bbc0;
  --field-symbol-color: rgba(255, 255, 255, 0.3);
  --field-text-color: #fff;

  --toolbar-background-color: #4a5d73;
`
