import styled from 'styled-components'

export default styled.div`
  background: var(--background-color);
  bottom: 0;
  color: var(--primary-color);
  cursor: default;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  right: 0;
  top: 50px;

  --accent-active-color: #1c8e77;
  --accent-color: #1ab394;
  --accent-disabled-color: #9dddcf;
  --accent-hover-color: #27a289;
  --background-color: #f5f5f5;
  --border-color: #e7eaec;
  --border-hover-color: #ced3d6;
  --primary-color: #383838;
  --secondary-color: #737373;

  --border: solid 1px var(--border-color);
  --border-radius: 4px;

  --padding: 15px;

  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
    font-size: 13px;
    outline: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`
