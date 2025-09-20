'use client'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { RootState, store } from '../_redux/store'
type Props = {
    children: React.ReactNode
}

const ReduxComponent = (props: Props) => {
   
  return (
    <Provider store={store}>
    
      {props.children}
    </Provider>
  )
}

export default ReduxComponent