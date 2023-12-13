/** @format */

import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";

import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, SESSION,FIND_TEAM ,GET_TEAM_ID,SESSIOND} from "../helper/APIInfo";


export default function PremierLeaguetable({
	leagueId
	
}) {
	//console.log(leagueId);
	//console.log(seasonId);
	// //console.log(teamId);
	// const { teamdetailsData, getTeamsData, setSelectedTeamId } =
	// 	useContext(LeagueContext);
	

	const [leagueDetails, setLeagueDetails] = useState([]);
	
	const [seasonId, setSeasonId] = useState();
	const [allSeasson,setAllSeasson]=useState([])

	const getYears= async ()=>{
		try{
			const response = await apiCall(SESSION.year,REQUEST_TYPE.GET).then((response)=>{
				console.log(response.response.data.seasonyears)
				setAllSeasson(response.response.data.seasonyears)
				setSeasonId(response.response.data.seasonyears[0]._id)
			    
			})
		}catch(error){
			console.log("data not found",error)
		}
		
	}
	

	/// get table data 
	const getTeamsData= ()=>{			
	try{
			//console.log(seasonId)
			const baseUrl = FIND_TEAM.find;
const params={
	season:seasonId
}
			const apiUrl =`${baseUrl}/${leagueId}`
         // console.log(apiUrl,REQUEST_TYPE.POST,params)
		apiCall(apiUrl,REQUEST_TYPE.POST,params).then((response)=>{
				console.log(response.response.data.data[0]?.en)
				setLeagueDetails(response.response.data.data[0]?.en)
			})

		}catch(error){
			console.log("data not found ",error)
		}

	}
	useEffect(()=>{
		getYears()
		
	},[seasonId])

	useEffect(() => {
		
		getTeamsData();
		
	  }, [seasonId,leagueId]);
//console.log(allSeasson)
	return (
		<div>
			<div className="en-table-deta ar-table-deta">
				<Table className="aline_table">
					<thead>
						<tr>
							<th></th>
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
					<tbody className="team_poin">
						<tr class="filter">
							<td colspan="7">
								<div class="inside-filter">
									{" "}
									<span>Filter By Season </span>
									<div class="dropdown_filter">
										<button class="dropbtn">
											{" "}
											<span>2023-24 </span>{" "}
											<span>
												<i class="ri-arrow-down-s-line"></i>
											</span>{" "}
										</button>
										<div class="dropdown-content">
											{
												allSeasson.map((res)=>{
													//console.log(res)
													return(<Link to="">{res.season_Title}</Link>)
												})
											}
											{/* <Link to="">2023-24</Link>
											<Link to="">2022-23</Link>
											<Link to="">2021-22</Link>
											<Link to="">2020-21</Link>
											<Link to="">2019-20</Link>
											<Link to="">2018-19</Link>
											<Link to="">2017-18</Link>
											<Link to="">2016-17</Link> */}
										</div>
									</div>
								</div>
							</td>
							<td colspan="6">
								<div class="team-btn">
									{" "}
									<Link to="">Compare Now</Link>{" "}
								</div>
							</td>
						</tr>
						{leagueDetails && leagueDetails.map((data, index) => {
						//	console.log(data);	
							//const tableDAta = data.en[0];
							return (
								<tr key={data._id}>
									<td>{index + 1}</td>
									<td className="imagetext_city">
										<Link
											to={`/TeamDetailsl/`}
											// onClick={() => handleTeamClick(data.en[0].teamname._id)}
										>
											<span className="overimage">
												<img
													src={require("../img/tottenham-hotspur-fc-logo.png")}
													alt="earth"
													className="logo-rearth-table"
												/>
											</span>{" "}
											<span className="toearth">
											{data.teamname.en.Team_Name_English}
											</span>
										</Link>
									</td>
									<td>{data.games}</td>
									<td>{data.win}</td>
									<td>{data.draw}</td>
									<td>{data.lose}</td>
									<td>{data.goals_scored}</td>
									<td>{data.goals_conceded}</td>
									<td>{data.points}</td>
									<td>{data.point_gap}</td>
									<td>{data.gs_gc}</td>
									<td>{data.win_precent}</td>
								</tr>
							);
						})}

						<tr class="filter-fir">
							<td colspan="4">
								<div class="team-btn compare-link">
									{" "}
									<Link to="">Compare Now</Link>{" "}
								</div>
							</td>
							<td colspan="9">
								<div class="inside-footer">
									<ul className="in-footer ">
										<li>
											<p>
												League <br />
												Overall
											</p>
										</li>
										<li>
											<h6>
												<span>3.03</span> <br />
												GS/G
											</h6>
										</li>
										<li>
											<h6>
												<span>39% </span>
												<br />
												WIN%
											</h6>
										</li>
										<li>
											<h6>
												<span>6.43 </span>
												<br />
												Points Stdev
											</h6>
										</li>
									</ul>
								</div>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
}
