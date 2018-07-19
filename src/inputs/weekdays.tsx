import * as React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  checked?: boolean
}

const Days = styled.div`
  background-color: transparent;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1px;
`

const Weekday = styled.button`
  align-items: center;
  background-color: ${({ checked }: ButtonProps) =>
    checked
      ? 'var(--field-alternate-background-color)'
      : 'var(--field-background-color)'};
  border: none;
  color: ${({ checked }: ButtonProps) =>
    checked
      ? 'var(--field-alternate-text-color)'
      : 'var(--field-symbol-color)'};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  width: 36px;

  &:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  &:last-child {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
`

const weekdays = [
  { label: 'M', key: 2 },
  { label: 'T', key: 3 },
  { label: 'W', key: 4 },
  { label: 'T', key: 5 },
  { label: 'F', key: 6 },
  { label: 'S', key: 7 },
  { label: 'S', key: 1 },
]

type Props = {
  onChange: (selectedWeekday: number) => void
  selectedWeekdays: number[]
}

export default class WeekdayPicker extends React.PureComponent<Props> {
  render() {
    return (
      <Days>
        {weekdays.map(day => (
          <Weekday
            checked={this.props.selectedWeekdays.some(d => d === day.key)}
            key={day.key}
            onClick={() => this.props.onChange(day.key)}
          >
            {day.label}
          </Weekday>
        ))}
      </Days>
    )
  }
}
