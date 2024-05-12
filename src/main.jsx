import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { getCurrentDate } from './utils'
import Login from './login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Login/>

  </React.StrictMode>,
)
