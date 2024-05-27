import Calendar from "../components/calendar.jsx"
import StatisticsIcon from '../components/percentage.jsx'
import Statistics from '../pages/statistics.jsx'
import { useState } from 'react';
import Popup from '../components/layoutPopUp.jsx'
import { Link } from 'react-router-dom';



export default function Sidebar() {

    const [isStatisticsOpen, setStatisticsOpen] = useState(false);
    const openStatistics = () => setStatisticsOpen(true);
    const closeStatistics = () => setStatisticsOpen(false);

    return (

        <div className="w-[100%] flex flex-col items-start justify-center gap-10  h-full">
            <Calendar></Calendar>
            <Link to={"/statistics"} className="w-full flex items-centers justify-center">
                <StatisticsIcon /></Link>

        </div>
    )
}