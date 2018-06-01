import styled from 'styled-components'

export default styled.div`
  bottom: 0;
  color: var(--primary-color);
  cursor: default;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  left: 0;
  position: absolute;
  right: 0;
  top: 50px;

  --accent-active-color: #403b65;
  --accent-color: #605a87;
  --accent-disabled-color: #cccdcf;
  --accent-hover-color: #504a75;
  --border-color: #e7eaec;
  --border-hover-color: #ced3d6;
  --primary-color: #383838;
  --secondary-color: #737373;

  --row-background-color: #fff;
  --row-alternate-background-color: #eef3f6;

  --border: solid 1px var(--border-color);
  --border-radius: 4px;

  --padding: 13px;

  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
    outline: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`
