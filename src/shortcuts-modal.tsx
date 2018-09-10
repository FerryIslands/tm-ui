import * as React from 'react'
import styled from 'styled-components'
import { Close } from './icons'

type Shortcuts = {
  description: string
  keys: string[]
}

type Props = {
  description?: string
  onClose: () => void
  shortcuts: Shortcuts[]
  showModal: boolean
}

const Button = styled.div`
  background: #d05353;
  border-radius: 4px;
  color: #fff;
  padding: 2px 5px 0px;
  width: 13px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`

const Content = styled.div`
  background-color: #fefefe;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  margin: 15% auto;
  padding: 20px;
  width: 30%;
`

const Header = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin-bottom: 5px;
`

const Modal = styled.div`
  background-color: rgba(0,0,0,0.1);
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
`

const Shortcut = styled.div`
  display: flex;
  border-bottom: 1px solid #d3dbe0;
  padding: 7px 0px;
`

const Text = styled.div`
  font-size: 13px;

  &:first-child {
    width: 180px;
  }

  kbd {
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
    color: #333;
    display: inline-block;
    font-size: 11px;
    margin: 0 0.1em;
    padding: 0.1em 0.6em;
  }
`

export default class extends React.PureComponent<Props> {
  render() {
    const { description, onClose, shortcuts } = this.props
    let commands = { ...shortcuts }
    if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
      commands = shortcuts.map(s => ({
        description: s.description,
        keys: s.keys.map(k => k.replace('Ctrl', 'Cmd').replace('Alt', 'Opt')),
      }))
    }

    return (
      this.props.showModal && (
        <Modal>
          <Content>
            <Header>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>
                Keyboard shortcuts
              </div>
              <Button onClick={onClose}>
                <Close />
              </Button>
            </Header>
            <div>{description}</div>
            <br />
            {commands.map(shortcut => (
              <Shortcut key={shortcut.description}>
                <Text>
                  {shortcut.keys.map((key, index) => (
                    <span key={key + index}>
                      <kbd>{key}</kbd>
                      {index + 1 < shortcut.keys.length ? '+' : ''}
                    </span>
                  ))}
                </Text>
                <Text>{shortcut.description}</Text>
              </Shortcut>
            ))}
          </Content>
        </Modal>
      )
    )
  }
}
