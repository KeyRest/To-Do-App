import { BarChart } from '@mui/x-charts/BarChart';

export default function DailyUseTime() {

    return (
        <div className='shadow-xl  md:px-8 flex flex-col gap-2 w-full'>

            <h2 className='text-3xl'>Average daily screen time</h2>
            <p className='font-bold text-2xl'>2h 34min</p>
            <div className='w-full'>
            <BarChart
                series={[
                    { data: [4, 4, 4, 3, 2, 1, 3] },

                ]}
                height={350}
                borderRadius={10}
                xAxis={[{ data: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'], scaleType: 'band' }]}
            />
            </div>
        </div>
    )
}