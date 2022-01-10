import * as React from 'react'

export default function useSafeControlledProp({
  control,
  onChange,
  readOnly,
  context = {componentName: '', propName: ''},
}) {
  const controlled = control != null
  const hasOnChange = !!onChange

  React.useEffect(() => {
    if (controlled && !hasOnChange && !readOnly) {
      console.warn(
        `A previously controlled component exists without an 'onChange' handler.
         This will render a read-only toggle. Set either 'onChange' or 'readOnly'`,
        context,
      )
    }
  }, [context, controlled, hasOnChange, readOnly])

  const {current: wasControlled} = React.useRef(controlled)
  React.useEffect(() => {
    if (wasControlled !== controlled) {
      console.warn(
        `Component switched between Controlled and Uncontrolled state or vice-versa
         during its Lifetime. This should not happen`,
        context,
      )
    }
  }, [context, controlled, wasControlled])
}
