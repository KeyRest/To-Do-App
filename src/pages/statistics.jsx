import DailyUseTime from "../components/dailyUseTime.jsx";
import PercentageCard from "../components/percetageCard.jsx";
import InputDate from "../components/input/inputDate/inputDate.jsx"
import { Link } from 'react-router-dom';


export default function Statistics() {
    return (
        <div className="flex flex-col w-full p-12 gap-10">

            <div className="flex justify-between items-center flex-col md:flex-row">
                <div className="flex items-start  gap-4  flex-col">
                    <Link to={"/home"} className="text-xl md:text-2xl font-bold md:bg-gray-200 md:p-4 rounded-full">Go back
                    </Link>
                    <h1 className=" text-4xl md:text-6xl font-bold">Statistics Board</h1>
                </div>
                <div>
                    <InputDate></InputDate>

                </div>

            </div>
            <div className="flex items-center justify-between flex-col md:flex-row">
                <PercentageCard title={"Fully completed tasks this week"}></PercentageCard>
                <PercentageCard title={"Tasks completed this week"}></PercentageCard>
                <PercentageCard title={"Working in tasks"}></PercentageCard>
                <PercentageCard title={"Missed tasks"}></PercentageCard>
            </div>
            <div className="flex gap-8 flex-col md:flex-row">
                <DailyUseTime></DailyUseTime>
                <DailyUseTime></DailyUseTime>

            </div>
        </div>
    )

}