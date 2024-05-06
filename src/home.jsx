
import { getCurrentDate } from './utils'
import NewTaskButton from './newTaskButton.jsx'
import Task from './task.jsx'
import BasicDateCalendar from './calendar.jsx'
import SearchBar from './searchBar.jsx'
import ProfileButton from './profileButton.jsx'
import NavBottom from './navBottom.jsx'
import Courses from './courses.jsx'
import Activity from './activity.jsx'

export default function Home() {
    return (
        <div className='flex flex-col mx-8 lg:grid lg:grid-cols-4 justify-center items-center lg:h-[100vh]'>

            <div className='hidden lg:flex justify-between px-12 col-span-4'>
                <img src="../public/logo-simple.png" alt="" />
                <div className='flex items-end justify-end w-full'>
                    <ProfileButton />

                </div>
            </div>

            <div className='col-span-1 m-auto  flex-col gap-4 h-full items-center justify-center hidden lg:flex'>
                <Courses />
                <Activity />
            </div>


            <div className='flex flex-col gap-8  m-auto col-span-2 w-full h-full '>


                <h1 className='text-7xl font-bold'>Today</h1>
                <SearchBar title={"Search..."} />

                <div className='flex flex-col gap-2'>
                    <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                        checked />
                    <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                    />
                    <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                        checked />
                    <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                        checked />
                    <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                        checked />
                    <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                        checked />
                    <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                        checked />
                </div>

            </div>
            <div className='flex items-start justify-between flex-col py-24 mx-8  h-full'>
                <div className='hidden lg:flex items-center justify-center w-full'>
                    <BasicDateCalendar />

                </div>
                <NewTaskButton />
            </div>

            <div className='flex w-full lg:hidden'>
                <NavBottom />

            </div>

        </div>



    );
}