import DailyUseTime from "./dailyUseTime";
import PercentageCard from "./percetageCard";
import InputDate from "./components/input/inputDate/inputDate.jsx"

export default function Statistics() {
    return (
        <div className="flex flex-col w-full p-12 gap-10">

            <div className="flex justify-between items-center flex-col md:flex-row">
                <h1 className="text-6xl font-bold">Statistics Board</h1>
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