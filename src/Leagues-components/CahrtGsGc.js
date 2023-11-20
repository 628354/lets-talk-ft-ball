import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "MC",
    uv: 5000,
    pv: 10000,
    amt: 2400,
    Image: "https://www.amcharts.com/wp-content/uploads/flags/spain.svg",
    
  },
  {
    name: "AV",
    uv: 3000,
    pv: 8900,
    amt: 2210
  },
  {
    name: "NCU",
    uv: 2000,
    pv: 7800,
    amt: 2290
  },
  {
    name: "Liv",
    uv: 2780,
    pv: 6800,
    amt: 2000
  },
  {
    name: "Ars",
    uv: 1890,
    pv: 5800,
    amt: 2181
  },
  {
    name: "BHA",
    uv: 2390,
    pv: 4800,
    amt: 2500
  },
  {
    name: "Tot",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "WHU",
    uv: 3490,
    pv: 3600,
    amt: 2100
  },
  {
    name: "Che",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Brnt",
    uv: 3490,
    pv: 3300,
    amt: 2100
  },
  {
    name: "Wol",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Nott",
    uv: 3490,
    pv: 2300,
    amt: 2100
  },
  {
    name: "Eve",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "MU",
    uv: 3490,
    pv: 2300,
    amt: 2100
  },
  {
    name: "CP",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Bou",
    uv: 3490,
    pv: 2300,
    amt: 2100,
   
  },
  {
    name: "Shef",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Luton",
    uv: 3490,
    pv: 3300,
    amt: 2100
  },
  {
    name: "Ful",
    uv: 3490,
    pv: 2300,
    amt: 2100
  },
  {
    name: "Bur",
    uv: 3490,
    pv: 1300,
    amt: 2100
  }

  
];

export default function CahrtGsGc() {
  return (
    <div>
        <div className='premier-textare'>
          <h3>2023-24 GS/GC</h3>
        </div>
       <div className='chart-areaa'>
       <BarChart
      width={1100}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar className='leesmare' dataKey="pv" fill="#f60" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
       </div>
    </div>
  )
}
