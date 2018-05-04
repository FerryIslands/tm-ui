import * as React from 'react'
import Select from 'react-select'

export default (props: any) => (
  <Select
    {...props}
    closeMenuOnSelect={false}
    styles={{
      control: (base: any) => ({
        ...base,
        background: 'var(--field-background-color)',
        borderRadius: 'var(--border-radius)',
        borderWidth: 0,
        boxShadow: 'none',
        minHeight: 'auto',
      }),
      dropdownIndicator: (base: any) => ({
        ...base,
        color: 'var(--field-symbol-color)',
      }),
      indicatorSeparator: (base: any) => ({
        ...base,
        backgroundColor: 'var(--field-symbol-color)',
      }),
      multiValue: (base: any) => ({
        ...base,
        backgroundColor: 'var(--field-alternate-background-color)',
      }),
      multiValueLabel: (base: any) => ({
        ...base,
        color: 'var(--field-alternate-text-color)',
        fontWeight: 700,
        padding: 5,
      }),
      multiValueRemove: (base: any) => ({
        ...base,
        color: 'var(--field-alternate-text-color)',
        cursor: 'pointer',
        paddingTop: 1,
      }),
      option: (base: any, state: any) => ({
        ...base,
        ':active': {
          backgroundColor: '#eaeaea',
        },
        backgroundColor: state.isFocused ? '#fafafa' : '',
        cursor: 'pointer',
      }),
      placeholder: (base: any) => ({
        ...base,
        color: 'var(--field-placeholder-color)',
        fontSize: 'var(--field-font-size)',
        fontWeight: 'var(--field-font-weight)',
        letterSpacing: 'var(--field-letter-spacing)',
      }),
    }}
  />
)