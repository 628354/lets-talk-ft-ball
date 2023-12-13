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
import { REQUEST_TYPE, GS,SESSION } from "../helper/APIInfo";

export default function Premierchart({  leagueId}) {
	const [goalScore, setGoalScore] = useState([]);
	const [seasonId, setSeasonId] = useState();
	//console.log(currentLeagueId);
	//console.log(seasonId);
//get season 
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

	const getGoalScore = () => {
		console.log(leagueId);
		console.log(seasonId);
		
		let data = {
			leagueId: leagueId ,
			season: seasonId ,
		};

		apiCall(GS.find, REQUEST_TYPE.POST, data).then((result) => {
			 //console.log(result.response.data.data[0].en);
			// setGoalScore(result.response.data.data[0].en)

			if (result.status === 200) {
				

				const extractedData = result.response.data.data[0]?.en.map((item) => ({
					name:item.teamname.en.Team_Name_Short_English,
					goalsScored:parseInt(item.goals_scored)
					//goalsScored: parseInt(item.en[0].goals_scored),
					
				}));
			

				setGoalScore(extractedData);
			}
		});
		return false;
	};
	//console.log(seasonId);
	useEffect(() => {
		getGoalScore();
	}, [leagueId,seasonId]);
	return (
		<div>
			<div className="premier-textare">
				<h3>2023-24 Goals Scored/Game</h3>
			</div>
			<div className="chart-areaa">
				<BarChart
					width={1100}
					height={300}
					data={goalScore}
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
					<Bar className="leesmare" dataKey="goalsScored" fill="#f20032" />
					{/* <Bar dataKey="uv" fill="#82ca9d" /> */}
				</BarChart>
			</div>
		</div>
	);
}
