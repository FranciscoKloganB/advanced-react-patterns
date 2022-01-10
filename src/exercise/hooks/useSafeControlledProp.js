import * as React from 'react'

export default function useSafeControlledProp({control, onChange, readOnly}) {
  const controlled = control != null
  const hasOnChange = !!onChange

  React.useEffect(() => {
    if (controlled && !hasOnChange && !readOnly) {
      console.warn(
        'An `on` change was provided to `useToggle` without an `onChange` handler. This will render a read-only toggle. If you want it to be mutable, use `initialOn`. Otherwise, set either `onChange` or `readOnly`',
      )
    }
  }, [controlled, hasOnChange, readOnly])

  const {current: wasControlled} = React.useRef(controlled)
  React.useEffect(() => {
    if (wasControlled !== controlled) {
      console.warn(
        'Component using `useToggle` switch between Controlled and Uncontrolled state or vice-versa during its Lifetime. This should not happen',
      )
    }
  }, [controlled, wasControlled])
}
