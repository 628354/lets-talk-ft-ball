/** @format */

import React, { useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, GS_GC,SESSION } from "../helper/APIInfo";

export default function CahrtGsGc({ leagueId}) {
	const [gsGc, setGsGc] = useState([]);
	const [seasonId, setSeasonId] = useState();
	// console.log(leagueId);
	// console.log(seasonId);


	const getYears= async ()=>{
		try{
			const response = await apiCall(SESSION.year,REQUEST_TYPE.GET).then((response)=>{
				//console.log(response.response.data.seasonyears)
				
				setSeasonId(response.response.data.seasonyears[0]._id)
				
			})
		}catch(error){
			console.log("data not found",error)
		}
		
	}
	
	useEffect(()=>{
		getYears()
		
	},[seasonId])
	
	const getGsGc = () => {

		let data = {
			leagueId:  leagueId ,
			season:  seasonId ,
		};

		const lang= "en";
		const data1 = []
		apiCall(GS_GC.find, REQUEST_TYPE.POST, data).then((result) => {
			if (result.status === 200) {
			result.response.data.data?.map((item,index) =>{
						return item[lang].map((results)=>{
							data1.push({
								"goalsCons" : results.gs_gc,
								"name" : results.teamname[lang].Team_Name_Short_English
							})
						})
						
				})

				setGsGc(data1)
			}
		});
		return false;
	};
	console.log(gsGc);
	useEffect(() => {
		getGsGc();
	}, [leagueId,seasonId]);
	return (
		<div>
			<div className="premier-textare">
				<h3>2023-24 GS/GC</h3>
			</div>
			<div className="chart-areaa">
				<BarChart
					width={1100}
					height={300}
					data={gsGc}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar className="leesmare" dataKey="goalsCons" fill="#f60" />
					{/* <Bar dataKey="uv" fill="#82ca9d" /> */}
				</BarChart>
			</div>
		</div>
	);
}
