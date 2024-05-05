import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './home.jsx'
import NewTaskPopUp from './newTaskPopUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewTaskPopUp />
  </React.StrictMode>,
)
