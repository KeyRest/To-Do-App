import Percentage from "./percentage"

export default function PercentageCard({ title }) {
    return (
        <div className="flex flex-col w-[400px] py-6 items-center justify-center shadow-lg">
            <Percentage></Percentage>
            <h2 className="text-2xl">{title}</h2>
        </div>

    )
}