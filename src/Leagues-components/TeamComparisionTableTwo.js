import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { LineChart } from "recharts";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE,GAINING_RATE} from "../helper/APIInfo";
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

export default function TeamComparisionTableTwo({data}) {


  console.log(data)
    const data2 = [
		{
		
			
			pv: 2400,
		
		},
		{
		
			
			pv: 1398,
			
		},
		{
		
		
			pv: 9800,
		
		},
		{
		
		
			pv: 3908,
		
		},
		{
			
			
			pv: 4800,
			
		},
		{
			
			
			pv: 2800,
		
		},
		{
			
			
			pv: 4300,
		
		},
		{
			
		
			pv: 2300,
		
		},
		{
			
	
			pv: 4300,
	
		},
		{
		
		
			pv: 4300,
	
		},
		{
			
		
			pv: 9200,
			
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
         
          <td>{data?.games}</td>
          <td>{data?.games}</td>
          <td>{data?.win}</td>
          <td>{data?.draw}</td>
          <td>{data?.lose}</td>
          <td>{data?.goals_scored}</td>
          <td>{data?.goals_conceded}</td>
          <td>{data?.points}</td>
          <td>{data?.point_gap}</td>
          <td>{data?.gs_gc}</td>
          <td>{data?.win}%</td>
          
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
                            data={data2}
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
