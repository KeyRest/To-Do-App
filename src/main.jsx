import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { getCurrentDate } from './utils'
import NewTaskPopUp from './newTaskPopUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <NewTaskPopUp/>

  </React.StrictMode>,
)
