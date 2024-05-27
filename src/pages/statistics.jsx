import DailyUseTime from "../components/dailyUseTime.jsx";
import PercentageCard from "../components/percetageCard.jsx";
import InputDate from "../components/input/inputDate/inputDate.jsx";
import { Link } from 'react-router-dom';

export default function Statistics({ onClickCustom }) {
    return (
        <div className="flex flex-col w-full p-4 md:p-12 gap-10">

            <div className="flex justify-between items-center flex-col md:flex-row">
                <a href="/home" className="my-2 font-bold md:hidden bg-gray-300 p-3 rounded-full">Go back</a>
                <div className="flex items-start gap-4 flex-col">
                    <h1 className="text-4xl md:text-6xl font-bold">Statistics Board</h1>
                </div>
                <div>
                    <InputDate />
                </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col lg:items-center lg:w-3/4 xl:flex-row xl:w-full mx-auto">
                <PercentageCard title={"Fully completed tasks this week"} />
                <PercentageCard title={"Tasks completed this week"} />
                <PercentageCard title={"Working in tasks"} />
                <PercentageCard title={"Missed tasks"} />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <DailyUseTime title={"aaa"} subtitle={"aaa"} />
                <DailyUseTime title={"aaa"} subtitle={"aaa"} />
            </div>
        </div>
    );
}
