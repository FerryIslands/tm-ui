import * as React from 'react'
import styled from 'styled-components'
import Button from './button'

const Panel = styled.div`
  background: var(--row-alternate-background-color);
  border-top: var(--panel-border);
  flex: 1;
`

const Header = styled.div`
  align-items: center;
  background-color: var(--row-alternate-background-color);
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-template-columns: auto auto auto 1fr;
  height: 45px;
  padding: 0 var(--padding);
  position: absolute;
  text-transform: uppercase;
  top: 62px;
  width: 100%;
  z-index: 1;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-right: 40px;
`

const Action = styled.div`
  display: flex;
`

const Subtitle = styled.div`
  flex: 1;
  font-size: 12px;
  text-align: right;
  text-transform: uppercase;
  margin-right: 25px;
`

const Content = styled.div``

type Props = {
  actionDisabled?: boolean
  actionText?: string
  children: React.ReactNode
  onAction?: () => void
  onSecondaryAction?: () => void
  secondaryActionText?: string
  subtitle?: string
  title: string
}

export default ({
  actionDisabled,
  actionText,
  children,
  onAction,
  onSecondaryAction,
  title,
  secondaryActionText,
  subtitle,
}: Props) => (
  <Panel>
    <Header>
      <Title>{title}</Title>
      {actionText && (
        <Action>
          <Button
            disabled={actionDisabled}
            onClick={onAction}
            text={actionText}
          />
        </Action>
      )}
      {secondaryActionText && (
        <Action>
          <Button
            disabled={actionDisabled}
            onClick={onSecondaryAction}
            text={secondaryActionText}
          />
        </Action>
      )}
      <Subtitle>{subtitle}</Subtitle>
    </Header>
    <Content>{children}</Content>
  </Panel>
)
