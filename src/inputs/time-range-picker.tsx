import * as React from 'react'
import styled from 'styled-components'
import { Clock } from '../icons'
import Select from './select'

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  grid-template-columns: auto 125px auto 125px;
  justify-content: space-between;
`

const Icon = styled.div`
  height: 24px;
  width: 24px;

  svg {
    fill: var(--field-symbol-color);
    height: 24px;
    width: 24px;
  }
`

const To = styled.div`
  color: white;
  font-style: italic;
  font-weight: bold;
`

type Props = {
  from: number | null
  onChange: (from: number | null, to: number | null) => void
  to: number | null
}

export default class TimeRangePicker extends React.PureComponent<Props> {
  render() {
    const { from, onChange, to } = this.props
    const times = Array.from(Array(25).keys()).map(i => ({
      label: `${i < 10 ? '0' + i : i}:00`,
      value: i * 100,
    }))

    return (
      <Wrapper>
        <Icon>
          <Clock />
        </Icon>
        <Select
          isClearable
          onChange={(v: any) => onChange(v ? v.value : null, to)}
          options={times}
          placeholder="00:00"
          value={times.find(t => t.value === from)}
        />
        <To>to</To>
        <Select
          isClearable
          placeholder="24:00"
          onChange={(v: any) => onChange(from, v ? v.value : null)}
          options={times}
          value={times.find(t => t.value === to)}
        />
      </Wrapper>
    )
  }
}
