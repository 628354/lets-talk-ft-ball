/** @format */

import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";

import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, SESSION, FIND_TEAM, GET_TEAM_ID, SESSIOND, BASE_URL } from "../helper/APIInfo";
import Cookies from "js-cookie";


export default function PremierLeaguetable({
	leagueId

}) {
	const folderName =localStorage.getItem("foldername")
	// //console.log(teamId);
	// const { teamdetailsData, getTeamsData, setSelectedTeamId } =
	// 	useContext(LeagueContext); 	  

	const [leagueDetails, setLeagueDetails] = useState([]);

	const [seasonId, setSeasonId] = useState(null);
	const [allSeasson, setAllSeasson] = useState([])
	const [currentSeasson, setCurrentSeasson] = useState(null)

	const lang = Cookies.get('language')
	const getLatestYear = async () => {
		try {
			const response = await apiCall(SESSIOND.LatestYears, REQUEST_TYPE.GET);
			//console.log(response.response.data.seasonyears)
			response.response.data.seasonyears.map((year)=>{
				//console.log(year.season_Title)
				setCurrentSeasson(year.season_Title)
				setSeasonId(year._id)
				localStorage.setItem("runningSeason",year._id)
			})
		
		} catch (error) {
			console.log("data not found", error);
		}
	}
	
	const getallYears = async () => {
		try {
			const response = await apiCall(SESSIOND.year, REQUEST_TYPE.GET);
			//console.log(response.response.data.seasonyears)
			setAllSeasson(response.response.data.seasonyears)
			
		} catch (error) {
			console.log("data not found", error);
		}
	}
	

	// console.log(seasonId);


	const getTeamsData = async () => {
		// console.log(seasonId);
		try {
			const baseUrl = FIND_TEAM(lang).find;
			const params = {
				season: seasonId
			}
			const data1 = []
			const apiUrl = `${baseUrl}/${leagueId}`;
			const response = await apiCall(apiUrl, REQUEST_TYPE.POST, params);
			// console.log(response)
			response.response.data?.data.map((item)=>{
				console.log(response.response.data?.data);
				// item[lang].map((items)=>{
				// 	console.log(items.teamname?.[lang]);
				// 	data1.push({
				// 		"score":item,
				// 		"teamname":item?.teamname?.[lang]
				// 	});
					
				// })
			})
			// response.response.data.data.map((items)=>{
			
			// })
			try{
				setLeagueDetails(response.response.data?.data[3]?.[lang]);

			}catch(error){
				console.log("data not found ",error);
			}
			
			//setLeagueDetails(data1)
		} catch (error) {
			console.log("data not found ", error);
		}
	}

	useEffect(() => {
		getLatestYear()
		getallYears()
	}, [lang])

	useEffect(() => {

		getTeamsData(seasonId);

	}, [seasonId, leagueId,lang]);


// console.log(leagueDetails);
	const handleClick = (runingId, seasonName) => {
		setSeasonId(runingId)
		// console.log(runingId)
		setCurrentSeasson(seasonName)
		localStorage.setItem("runningSeason",runingId)
		getTeamsData()
		// console.log('--------------------------------------------------------')
		// console.log(seasonName)
		// console.log('--------------------------------------------------------')

	}
const handleButtonClick=(teamId)=>{
// console.log(teamId);
localStorage.setItem("teamId",teamId)

}



	return (
		
		<div>
			<div  >
				<Table className="aline_table" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
					<thead>
						{
							lang==="en"?<tr>
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
						</tr>:<tr>
							<th></th>
							<th>	الفريق</th>
							<th>لعب</th>
							<th>فوز</th>
							<th>تعادل</th>
							<th>خسارة</th>
							<th>له</th>
							<th>عليه</th>
							<th>نقاط</th>
							<th>فرق النقاط </th>
							<th>نسبة الفوز</th>
							<th>نسبة الفوز</th>
						</tr>
						}
						
					</thead>
					<tbody className="team_poin">
						<tr class="filter">
							<td colspan="7">
								<div class="inside-filter">
									{" "}
									{
										lang ==="en"? <span>Filter By Season </span>:<span>تصفية حسب الموسم</span>
									}
									
									<div class="dropdown_filter">
										<button class="dropbtn">
											{" "}
											<span>{currentSeasson} </span>{" "}
											<span>
												<i class="ri-arrow-down-s-line"></i>
											</span>{" "}
										</button>
										<div class="dropdown-content">
											{
												allSeasson.map((res) => {
														// console.log(res)
													return (<Link to="" onClick={() => handleClick(res._id, res.season_Title)} >{res.season_Title}</Link>)
												})
											}
											{/* <Link to="">2023-24</Link>
											<Link to="">2022-23</Link>
											<Link to="">2021-22</Link>
											<Link to="">2020-21</Link>
											<Link to="">2019-20</Link>
											<Link to="">2018-19</Link>
											<Link to="">2017-18</Link>
											<Link to="">2016-17</Link>  */}
										</div>
									</div>
								</div>
							</td>
							<td colspan="6">
								<div  className={`${lang ==="en"? 'team-btn':'ar_team-btn'}`}>
									{" "}
									{
										lang ==="en"? <Link to="/Teamcomparision">Compare Now</Link>:<Link to="/Teamcomparision">قارن الآن</Link>
									}
									
								</div>
							</td>
						</tr>
						{leagueDetails && leagueDetails.map((data, index) => {
							console.log(data);	
							console.log(`${BASE_URL}${data.teamname?.[lang]?.Image}`);
							//const tableDAta = data.en[0];
							return (
								<tr className="table-create" key={data._id}>
									<td>{index + 1}</td>
									<td className="imagetext_city" onClick={()=>handleButtonClick(data.teamname._id)}>
										<Link
											to="/TeamDetailsl"
										// onClick={() => handleTeamClick(data.en[0].teamname._id)}
										>
											<span className="overimage">
												<img
													src={`${BASE_URL}${data.teamname?.[lang]?.Image}`}
													alt="earth"
													className="logo-rearth-table"
												/>
											</span>{" "}
											{
												lang === "en"? <span className="toearth">
												{data.teamname?.[lang]?.Team_Name_English}
											</span> :
											<span className="toearth">
											{data.teamname?.[lang]?.Team_Name_Arabic}
										</span>
											}
											
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
									<td>{(data.win_precent * 100).toFixed(2)}%</td>


								</tr>
							);
						})}

						<tr class="filter-fir">
							<td colspan="4">
								<div  className={`${lang ==="en"? 'team-btn compare-link':'team-btn ar_compare-link'}`}>
									{" "}
									{
										lang ==="en"? <Link to="/Teamcomparision">Compare Now</Link>:<Link to="/Teamcomparision">قارن الآن</Link>
									}
								</div>
							</td>
							<td colspan="9">
								<div class="inside-footer">
									<ul className="in-footer ">
										<li> 
											{
												lang ==="en"?<p>
												League <br />
												Overall
											</p>:<p>
											إجمالي <br />
												الدوري
											</p>
											}
											
										</li>
										<li>
											{
												lang ==="en"? 
												<h6>
												<span>3.03</span> <br />
												GS/G
											    </h6>:
												<h6>
												<span>3.03</span> <br />
												معدل تسجيل الأهداف
											    </h6>
											}
										</li>
										<li>
											{
												lang ==="en"?
												<h6>
												<span>39% </span>
												<br />
												WIN%
											    </h6>:
											    <h6>
											    <span>39% </span>
											    <br />
											     الفوز
										        </h6>
											}
										</li>
										<li>
											{
												lang ==="en"?
												<h6>
												<span>6.43 </span>
												<br />
												Points Stdev
											    </h6>:
											    <h6>
											    <span>6.43 </span>
											    <br />
											     نقاط الانحراف المعياري
										        </h6>
											}
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
