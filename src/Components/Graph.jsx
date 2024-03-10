import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    { name: 'Oct 2022', value: 18000 },
    { name: 'Dec 2022', value: 15000 },
    { name: 'Feb 2023', value: 9000 },
    { name: 'Apr 2023', value: 8000 },
    { name: 'Jun 2023', value: 17000 },
    { name: 'Aug 2023', value: 5000 },
    { name: 'Oct 2023', value: 22000 },
    { name: 'Dec 2023', value: 27000 },
];

export default function Graph() {
    return (
        <div className='flex items-center justify-center'>
            <LineChart width={1030} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    )
}
