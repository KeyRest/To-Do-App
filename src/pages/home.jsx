
import { getCurrentDate } from '../utils.js'
import NewTaskButton from '../components/newTaskButton.jsx'
import Task from '../components/task.jsx'
import BasicDateCalendar from '../components/calendar.jsx'
import SearchBar from '../components/searchBar.jsx'
import ProfileButton from '../components/profileButton.jsx'
import Courses from '../components/courses.jsx'
import Activity from '../components/activity.jsx'
import Statistics from '../components/percentage.jsx'
import Layout from '../layout/Layout.jsx'
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <Layout>

            <div className='flex flex-col mx-8 lg:grid lg:grid-cols-4 justify-center items-center lg:h-[100vh]'>

                <div className='hidden lg:flex justify-between px-12 col-span-4'>
                    <img src="../public/logo-simple.png" alt="" />
                    <div className='flex items-end justify-end w-full'>
                        <Link to={"/profile"}>
                            <ProfileButton />

                        </Link>
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

                    <div className='hidden lg:flex items-center justify-center w-full'>
                        <Link to={"/statistics"}>
                            <Statistics />

                        </Link>

                    </div>
                    <Link to={"/task"}>
                        <NewTaskButton />

                    </Link>

                </div>



            </div>
        </Layout>




    );
}