'use client'

import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Home from './Home/page'

const HomePage: React.FC = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default HomePage
