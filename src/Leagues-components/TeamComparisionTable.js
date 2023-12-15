import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { LineChart } from "recharts";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
} from "recharts";

export default function TeamComparisionTable() {
    const data = [
		{
			name: "1",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "2",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "3",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "",
			uv: 2390,
			pv: 2800,
			amt: 2500,
		},
		{
			name: "4",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "",
			uv: 3490,
			pv: 2300,
			amt: 2100,
		},
		{
			name: "5",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "6",
			uv: 3490,
			pv: 9200,
			amt: 2100,
		},
	];



  return (
    <div>
        <div className='team-main-table chart-team-com'>
            <div className='border-table-team'>
            <div className='en-team-table-deta ar-team-table-deta'>
        <Table  className='team-aline_table'>
      <thead>
        <tr>
          <th>TEAM</th>
          <th>GAMES</th>
          <th>WIN</th>
          <th>DRAW</th>
          <th>LOSE</th>
          <th>GOALS SCORED</th>
          <th>GOALS CONCEDED</th>
          <th>POINTS</th>
          <th>POINT GAP</th>
          <th>GS-GC</th>
          <th>WIN%</th>
        </tr>
      </thead>
      <tbody className='team_poin-table'>
        <tr>
          <td className='team-imagetext_city'><span className='overimage'><img src={require('../img/manchester-city-logo.png')} alt="earth" className="logo-rearth-table"/></span></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>%</td>
        </tr>
      </tbody>
    </Table>
        </div>
        <div className='chart-compriision '>
            <div className="chart-team-table">
                    <h5>-1</h5>
                    <div className="main-charts">
                        <LineChart
                            className="linechart"
                            width={730}
                            height={250}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={0} />
                            <Line
                                name="pv of pages"
                                type="monotone"
                                dataKey="pv"
                                stroke="#040525"
                                fill="#040525"
                            />
                        </LineChart>
                    </div>
                </div>
            </div>
            </div>
            
            
    
            </div>
    </div>
  )
}
