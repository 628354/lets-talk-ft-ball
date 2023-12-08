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
import { REQUEST_TYPE, GS_GC } from "../helper/APIInfo";

export default function CahrtGsGc({ currentLeagueId, seasonId, teamId }) {
	const [gsGc, setGsGc] = useState([]);
	// console.log(currentLeagueId);
	// console.log(seasonId);
	const getGsGc = () => {
		let data = {
			leagueId: { currentLeagueId },
			season: { seasonId },
		};

		apiCall(GS_GC.find, REQUEST_TYPE.POST, data).then((result) => {
			if (result.status === 200) {
				//console.log(result.response.data.data[0].en[0].gs_gc);

				const extractedData = result.response.data.data.map((item) => ({
					name: item.en[0].teamname.en.Team_Name_Short_English,
					goalsCons: parseInt(item.en[0].gs_gc),
				}));

				setGsGc(extractedData);
			}
		});
		return false;
	};
	console.log(gsGc);
	useEffect(() => {
		getGsGc();
	}, []);
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
