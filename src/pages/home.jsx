
import { getCurrentDate } from '../utils.js'
import NewTaskButton from '../components/newTaskButton.jsx'
import Task from '../components/task.jsx'
import BasicDateCalendar from '../components/calendar.jsx'
import SearchBar from '../components/searchBar.jsx'
import ProfileButton from '../components/profileButton.jsx'
import Courses from '../components/courses.jsx'
import Activity from '../components/activity.jsx'
import StatisticsIcon from '../components/percentage.jsx'
import Layout from '../layout/Layout.jsx'
import { Link } from 'react-router-dom';
import Popup from '../components/layoutPopUp.jsx'
import { useState } from 'react';
import NewTaskPopUp from '../components/newTaskPopUp.jsx'
import Statistics from '../pages/statistics.jsx'
import Profile from '../pages/profile.jsx'



export default function Home() {

    const [isTaskOpen, setTaskOpen] = useState(false);
    const [isStatisticsOpen, setStatisticsOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);

    const openTask = () => setTaskOpen(true);
    const closeTask = () => setTaskOpen(false);

    const openStatistics = () => setStatisticsOpen(true);
    const closeStatistics = () => setStatisticsOpen(false);

    const openProfile = () => setProfileOpen(true);
    const closeProfile = () => setProfileOpen(false);
    return (
        <Layout>

            <div className='flex flex-col xl:mx-8 gap-8 xl:grid mx-4 xl:gap-0 xl:grid-cols-4 justify-center items-start xl:h-[100vh]'>

                <div className='hidden xl:flex justify-between px-12 col-span-4 items-center h-full'>
                    <img src="../public/Logo_white.png" alt="" className='h-16' />
                    <div className='flex items-center justify-center w-full gap-8'>
                        <div className='flex  items-center justify-end w-full h-full'>
                            <Link to={"/"}>
                                <svg className='hover:scale-125 duration-300' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4h3c1.1046 0 2 .8954 2 2v12c0 1.1046-.8954 2-2 2h-3M8 8l-4 4m0 0 4 4m-4-4h12" /></svg>
                            </Link>

                        </div>
                        <ProfileButton onClickCustom={openProfile} />
                        <Popup isOpen={isProfileOpen} onClose={closeProfile}>
                            <Profile onClickCustom={closeProfile}></Profile>
                        </Popup>

                    </div>
                </div>

                <div className='col-span-1  hidden xl:flex  justify-center m-auto h-max'>
                    <div className='h-full flex  flex-col justify-between gap-12'>
                        <Courses />
                        <Activity />
                    </div>
                </div>

                <div className='flex flex-col gap-8  m-auto col-span-2 w-full  xl:h-max '>



                    <div className='flex justify-between md:p-8 xl:p-0'>
                        <h1 className='text-7xl font-bold'>Today</h1>
                        <div className='xl:hidden'>
                            <NewTaskButton onClickCustom={openTask} />

                        </div>
                    </div>

                    <SearchBar title={"Search..."} />



                    <div className='flex flex-col items-center gap-2 overflow-y-scroll h-[55vh]  xl:h-[35rem] w-full'>
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                             onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                             onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                             onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                             onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                             onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                             onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />
                        <Task title={"Do a research of Artificial Intelligence for TM-7200"} date={getCurrentDate()}
                            checked onCustomClick={openTask} />

                        <Popup isOpen={isTaskOpen} onClose={closeTask}>
                            <NewTaskPopUp onClickCustom={closeTask}></NewTaskPopUp>
                        </Popup>
                    </div>

                </div>

                <div className='flex items-start  justify-between flex-col py-4 gap-8 mx-2 xl:mx-8  h-max'>
                    <div className='hidden xl:flex items-center justify-center w-full  xl:scale-125'>
                        <BasicDateCalendar />

                    </div>

                    <div className='hidden xl:flex items-center justify-center w-full'>
                        <StatisticsIcon onClickCustom={openStatistics} />
                        <Popup isOpen={isStatisticsOpen} onClose={closeStatistics}>
                            <Statistics onClickCustom={closeStatistics}></Statistics>
                        </Popup>

                    </div>

                    <div className='hidden xl:block'>
                        <NewTaskButton onClickCustom={openTask} />

                    </div>


                </div>



            </div>
        </Layout>




    );
}