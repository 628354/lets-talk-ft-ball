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
import { REQUEST_TYPE, GC } from "../helper/APIInfo";

export default function Goalsconchart({ currentLeagueId, seasonId, teamId }) {
	const [goalCons, setGoalCons] = useState([]);
	const getGoalCons = () => {
		let data = {
			leagueId: { currentLeagueId },
			season: { seasonId },
		};

		apiCall(GC.find, REQUEST_TYPE.POST, data).then((result) => {
			if (result.status === 200) {
				//console.log(result.response.data.data);

				const extractedData = result.response.data.data.map((item) => ({
					name: item.en[0].teamname.en.Team_Name_Short_English,
					goalsCons: parseInt(item.en[0].goals_scored),
				}));

				setGoalCons(extractedData);
			}
		});
		return false;
	};
	//console.log(goalCons);
	useEffect(() => {
		getGoalCons();
	}, []);
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
