import * as React from 'react'
import styled from 'styled-components'

const Spinner = styled.div`
  height: 40px;
  width: 40px;

  stop {
    stop-color: var(--secondary-color);
  }

  circle {
    fill: var(--secondary-color);
  }

  svg > g {
    transform: scale(0.75);
    transform-origin: center;
  }
`

export default () => (
  <Spinner>
    <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="63.146%" stopOpacity=".631" />
          <stop offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
          <path
            d="M36 18c0-9.94-8.06-18-18-18"
            id="Oval-2"
            stroke="url(#a)"
            strokeWidth="3"
          >
            <animateTransform
              attributeName="transform"
              dur="0.6s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </path>
          <circle cx="36" cy="18" r="1">
            <animateTransform
              attributeName="transform"
              dur="0.6s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </circle>
        </g>
      </g>
    </svg>
  </Spinner>
)
