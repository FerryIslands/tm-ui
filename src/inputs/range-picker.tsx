import { Moment } from 'moment'
import * as React from 'react'
import { DateRangePicker } from 'react-dates'
import styled from 'styled-components'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const Wrapper = styled.div`
  .DateRangePicker {
    --disabled-text-color: #bbb;
    --hover-text-color: #666;
    --normal-text-color: #888;
    --selected-text-color: var(--accent-color);
  }

  .DateRangePickerInput {
    background: var(--field-background-color);
    border: 0;
    border-radius: var(--border-radius);
  }

  .DateInput,
  .DateInput_input {
    background: transparent;
    cursor: pointer;
  }

  .DateInput {
    width: 103px;
  }

  .DateInput_input {
    border-bottom: 0;
    color: var(--field-text-color);
    font-size: var(--field-font-size);
    font-weight: var(--field-font-weight);
    letter-spacing: var(--field-letter-spacing);
    line-height: var(--field-height);
    padding: var(--field-padding);
    width: 80px;
  }

  .DateInput_input::placeholder {
    color: var(--field-placeholder-color);
  }

  .DateInput:first-child .DateInput_input {
    border-radius: 0 0 0 var(--border-radius);
  }

  .DateInput:last-child .DateInput_input {
    border-radius: 0 0 var(--border-radius) 0;
  }

  .DateInput_input__focused {
    border-bottom-color: rgba(255, 255, 255, 0.2);
  }

  .DateRangePickerInput_arrow_svg {
    fill: var(--field-symbol-color);
  }

  .DateInput_fang {
    margin-top: -15px;
    z-index: 3;
  }

  .DateRangePicker_picker {
    margin-top: -16px;
    z-index: 2;
  }

  .CalendarMonth_caption {
    padding-bottom: 50px;
  }

  .CalendarDay {
    border: var(--border);
    color: var(--normal-text-color);
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover,
  .CalendarDay__selected_span {
    background: #f9f9f9;
    border: var(--border);
    color: var(--selected-text-color);
  }

  .CalendarDay__default:hover {
    background: var(--border-color);
    border: var(--border);
    color: var(--hover-text-color);
  }

  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:hover {
    background: transparent;
    color: var(--disabled-text-color);
  }

  .CalendarDay__today,
  .CalendarDay__today:hover {
    background: var(--field-alternate-background-color);
    color: var(--field-alternate-text-color);
  }

  .CalendarDay__default:hover {
    opacity: 0.7;
  }
`

type Period = {
  endDate: Moment | null
  startDate: Moment | null
}

type Props = Period & {
  onDatesChange: (period: Period) => void
}

type State = {
  endDate: Moment | null
  focusedInput: 'endDate' | 'startDate' | null
  startDate: Moment | null
}

export default class RangePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      endDate: props.endDate,
      focusedInput: null,
      startDate: props.startDate,
    }
  }

  render() {
    return (
      <Wrapper>
        <DateRangePicker
          displayFormat="YYYY-MM-DD"
          endDate={this.state.endDate}
          endDateId="range-picker-end-date"
          focusedInput={this.state.focusedInput}
          hideKeyboardShortcutsPanel
          isOutsideRange={() => false}
          onDatesChange={({ endDate, startDate }) => {
            this.setState({ endDate, startDate })
            this.props.onDatesChange({ endDate, startDate })
          }}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          startDate={this.state.startDate}
          startDateId="range-picker-start-date"
        />
      </Wrapper>
    )
  }
}
