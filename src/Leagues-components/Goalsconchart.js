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
import { REQUEST_TYPE, GC, SESSION } from "../helper/APIInfo";

export default function Goalsconchart({ leagueId }) {
	const [goalCons, setGoalCons] = useState([]);

	const [seasonId, setSeasonId] = useState();
	// console.log(leagueId);
	// console.log(seasonId);
	//get season 
	const getYears = async () => {
		try {
			const response = await apiCall(SESSION.year, REQUEST_TYPE.GET);
			setSeasonId(response.response.data.seasonyears[0]._id);
		} catch (error) {
			console.log("data not found", error);
		}
	};
	useEffect(() => {
		getYears()

	}, [seasonId])




	const getGoalCons = async () => {
		try {
			let data = {
				leagueId: leagueId,
				season: seasonId,
			};
			const lang = "en";
			const data1 = []
			const result = await apiCall(GC.find, REQUEST_TYPE.POST, data);
			if (result.status === 200) {
				result.response.data.data?.map((item, index) => {
					return item[lang].map((results) => {
						data1.push({
							"goalsCons": results.goals_scored,
							"name": results.teamname[lang].Team_Name_Short_English
						})
					})

				})

				setGoalCons(data1)
			}

		} catch (error) {
			console.error("An error occurred while fetching goal cons:", error);
		}
	};
	////console.log(goalCons);
	useEffect(() => {
		getGoalCons();
	}, [leagueId, seasonId]);


	return (
		<div>
			<div className="premier-textare">
				<h3>2023-24 Goals Con/Game</h3>
			</div>
			<div className="chart-areaa">
				<BarChart
					width={1100}
					height={300}
					data={goalCons}
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
					<Bar className="leesmare" dataKey="goalsCons" fill="#040525" />
					{/* <Bar dataKey="uv" fill="#82ca9d" /> */}
				</BarChart>
			</div>
		</div>
	);
}
