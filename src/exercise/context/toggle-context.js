import * as React from 'react'

const ToggleContext = React.createContext()
ToggleContext.displayName = 'ToggleContext'

function ToggleProvider({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  
  return <ToggleContext.Provider value={{on, toggle}}>{children}</ToggleContext.Provider>
}

function useToggle() {
  const context = React.useContext(ToggleContext)
  if (context === undefined) {
    throw new Error(`useToggle must be used within a <Toggle />`)
  }
  return context
}

export {ToggleProvider as Toggle, useToggle}
