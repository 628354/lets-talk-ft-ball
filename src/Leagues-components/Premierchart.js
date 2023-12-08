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
import { REQUEST_TYPE, GS } from "../helper/APIInfo";

export default function Premierchart({ currentLeagueId, seasonId, teamId }) {
	const [goalScore, setGoalScore] = useState([]);
	console.log(currentLeagueId);
	console.log(seasonId);
	const getGoalScore = () => {
		let data = {
			leagueId: { currentLeagueId },
			season: { seasonId },
		};

		apiCall(GS.find, REQUEST_TYPE.POST, data).then((result) => {
			if (result.status === 200) {
				console.log(result.response.data.data);

				const extractedData = result.response.data.data.map((item) => ({
					name: item.en[0].teamname.en.Team_Name_Short_English,
					goalsScored: parseInt(item.en[0].goals_scored),
				}));

				setGoalScore(extractedData);
			}
		});
		return false;
	};
	//console.log(goalScore);
	useEffect(() => {
		getGoalScore();
	}, []);
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
