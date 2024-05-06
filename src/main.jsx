import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { getCurrentDate } from './utils'
import Profile from './profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Profile/>

  </React.StrictMode>,
)
