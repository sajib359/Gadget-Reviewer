import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useGraph from '../../Hooks/useGraph';


const Dashboard = () => {
    const [graph, setGraph] = useGraph();

    return (
        <div>
            <h1 className='text-4xl my-4 font-mono text-orange-400 bg-black w-fit mx-auto p-4'>Here Three Types of Recharts Based On Your Data</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center gap-5'>
        <div>
            <div>
                <h1 className='font-mono font-bold text-lg p-4 ' >Bar Chart</h1>
            </div>
            <div>
                <BarChart width={500} height={300} data={graph}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="sell" fill="orange" />
                </BarChart>
            </div>
        </div>
        <div>
            <div>
                <h1 className='font-mono font-bold text-lg p-4 '>Area Graph</h1>
            </div>
            <div>
                <AreaChart width={500} height={250} data={graph}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </div>
            </div>
            <div>
                <div>
                <h1 className='font-mono font-bold text-lg p-4  '>Line Graph</h1>
            </div>
            <div>
                <LineChart width={500} height={250} data={graph}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Dashboard;