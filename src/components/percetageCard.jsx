import Percentage from "./percentage"
import React, { useState } from 'react';

export default function PercentageCard({ title }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`flex flex-col w-[400px] py-6 items-center justify-center shadow-lg transition-transform transform-gpu hover:scale-105`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Percentage />
            <h2 className="text-2xl">{hovered ? title : title.substring(0, 20) + (title.length > 20 ? '...' : '')}</h2>
        </div>
    );
}