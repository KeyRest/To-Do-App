import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { getCurrentDate } from './utils'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-col gap-8 w-[50%] m-auto'>
      <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
        checked />
      <SearchBar title={"Search..."} />
    </div>
    <BasicDateCalendar />

  </React.StrictMode>,
)
