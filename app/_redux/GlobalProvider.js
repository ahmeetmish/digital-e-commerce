'use client'

import store from "./Store"
import { Provider } from 'react-redux'

export default function GlobalProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
