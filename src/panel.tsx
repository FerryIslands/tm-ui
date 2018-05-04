import * as React from 'react'
import styled from 'styled-components'

const Panel = styled.div`
  background: white;
  border-top: var(--panel-border);
  margin: var(--padding);
`

const Header = styled.div`
  align-items: center;
  border-bottom: var(--border);
  border-top: var(--border);
  display: flex;
  justify-content: space-between;
  padding: var(--padding);
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 300;
`

const Subtitle = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`

const Content = styled.div`
  padding: var(--padding);
`

type Props = {
  children: React.ReactNode
  subtitle?: string
  title: string
}

export default ({ children, title, subtitle }: Props) => (
  <Panel>
    <Header>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Header>
    <Content>{children}</Content>
  </Panel>
)
