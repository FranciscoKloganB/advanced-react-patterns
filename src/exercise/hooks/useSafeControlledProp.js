/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react'

export default function useSafeControlledProp({
  control,
  onChange,
  readOnly,
  debugContext = {componentName: '', propName: ''},
}) {
  if (process.env.NODE_ENV === 'production') {
    return
  }
  
  const controlled = control != null
  const hasOnChange = !!onChange

  React.useEffect(() => {
    if (controlled && !hasOnChange && !readOnly) {
      console.warn(
        `A previously controlled component exists without an 'onChange' handler.
         This will render a read-only component. Set either 'onChange' or 'readOnly'`,
        debugContext,
      )
    }
  }, [debugContext, controlled, hasOnChange, readOnly])

  const {current: wasControlled} = React.useRef(controlled)
  React.useEffect(() => {
    if (wasControlled !== controlled) {
      console.warn(
        `Component switched between Controlled and Uncontrolled state or vice-versa
         during its Lifetime. This should not happen`,
        debugContext,
      )
    }
  }, [debugContext, controlled, wasControlled])
}
