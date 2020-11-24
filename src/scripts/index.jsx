import React from 'react'
import { render } from 'react-dom'
import stateProvider from './redux/store'
import View from './views/view'

const root = document.getElementById('root')
render(stateProvider(<View/>), root)
