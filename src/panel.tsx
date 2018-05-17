import * as React from 'react'
import styled from 'styled-components'
import Button from './button'

const Panel = styled.div`
  background: var(--even-color);
  border-top: var(--panel-border);
  flex: 1;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  height: 18px;
  justify-content: space-between;
  padding: var(--padding);
  text-transform: uppercase;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const Action = styled.div`
  display: flex;
  flex: 1;
  margin-left: 50px;
`

const Subtitle = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`

const Content = styled.div``

type Props = {
  actionDisabled?: boolean
  actionText?: string
  children: React.ReactNode
  onAction?: () => void
  subtitle?: string
  title: string
}

export default ({
  actionDisabled,
  actionText,
  children,
  onAction,
  title,
  subtitle,
}: Props) => (
  <Panel>
    <Header>
      <Title>{title}</Title>
      {actionText && (
        <Action>
          <Button disabled={actionDisabled} onClick={onAction}>
            {actionText}
          </Button>
        </Action>
      )}
      <Subtitle>{subtitle}</Subtitle>
    </Header>
    <Content>{children}</Content>
  </Panel>
)
