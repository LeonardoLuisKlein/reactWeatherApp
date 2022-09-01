import React from 'react'
import ReactDOM from 'react-dom/client'
import {Weather} from './weatherPage/index'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
)
