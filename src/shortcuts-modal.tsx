import * as React from 'react'
import styled from 'styled-components'

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

const Button = styled.button`
  border: none;
  color: #888;
  font-size: 30px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`

const Content = styled.div`
  background-color: #fefefe;
  border-radius: 3px;
  margin: 15% auto;
  padding: 20px;
  border: 2px solid #888;
  width: 30%;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-between;
`

const Modal = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
`

const Shortcut = styled.div`
  display: flex;
  border-bottom: 1px solid #888;
  padding: 5px 0px;
`

const Text = styled.div`
  font-size: 15px;

  &:first-child {
    width: 180px;
  }

  kbd {
    background-color: #f5f5f5;
    border-style: solid;
    border-width: 1px 2px 2px 1px;
    padding: 0 1px;
  }
`

export default class extends React.PureComponent<Props> {
  render() {
    const { description, onClose, shortcuts } = this.props
    let commands = { ...shortcuts }
    if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
      commands = shortcuts.map(s => ({
        description: s.description,
        keys: s.keys.map(k => k.replace('ctrl', 'cmd').replace('alt', 'opt')),
      }))
    }

    return (
      this.props.showModal && (
        <Modal>
          <Content>
            <Header>
              <h2>Keyboard shortcuts</h2>
              <Button onClick={onClose}>×</Button>
            </Header>
            <div>{description}</div>
            <br />
            {commands.map(shortcut => (
              <Shortcut key={shortcut.description}>
                <Text>
                  {shortcut.keys.map((key, index) => (
                    <span key={key + index}>
                      <kbd>{key}</kbd>
                      {index + 1 < shortcut.keys.length ? ' + ' : ''}
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
