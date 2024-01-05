/** @format */

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import TeamComparisionChart from "../Leagues-components/TeamComparisionChart";
import TeamComparisionTable from "../Leagues-components/TeamComparisionTable";
import Iframesecttion from "../Leagues-components/Iframesecttion";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, LEAGUES, ALL_SEASON, TEAM_NAME, GAINING_RATE, TEAM_SEA_GC, TEAM_GS_GC, TEAM_GS_IN_G, } from "../helper/APIInfo";
import TeamComparisionTableTwo from "../Leagues-components/TeamComparisionTableTwo";
import TeamComparisionChartTwo from "../Leagues-components/TeamComparisionChartTwo";
import TeamComparisionChartThree from "../Leagues-components/TeamComparisionChartThree";
import TeamComparisionChartFour from "../Leagues-components/TeamComparisionChartFour";
import TeamComparisionChartFive from "../Leagues-components/TeamComparisionChartFive";
import TeamComparisionChartSix from "../Leagues-components/TeamComparisionChartSix";
import Cookies from "js-cookie";
export default function Teamcomparision() {
	const lang = Cookies.get('language')
	const [leagueNames, setLeagueNames] = useState([]);
	const [leagueNames2, setLeagueNames2] = useState([]);
	const [season, setSeason] = useState([]);
	const [teamName, setTeamName] = useState([]);

	const [currentLeagueId, setCurrentLeagueId] = useState(null)
	const [seasonId, setSeasonId] = useState(null)
	const [teamId, setTeamId] = useState(null)
	const [gainRate, setGainRate] = useState([])
	const [gainRate2, setGainRate2] = useState([])
	const [data, setData] = useState([])
	const [data2, setData2] = useState([])

	/// 2nd side 



	const [season2, setSeason2] = useState([]);
	const [teamName2, setTeamName2] = useState([]);


	const [currentLeagueId2, setCurrentLeagueId2] = useState(null)
	const [seasonId2, setSeasonId2] = useState(null)
	const [teamId2, setTeamId2] = useState(null)
	// GS_GC 
	const [GsGc, setGsGc] = useState([])
	const [GsGc2, setGsGc2] = useState([])


	///gsGin

	const [GsGin, setGsGin] = useState([])
	const [GsGin2, setGsGin2] = useState([])
	//GC_cum

	const [gcCum, setGcCum] = useState([])
	const [gcCum2, setGcCum2] = useState([])

	const getLeagueName = async () => {
		

		
try {
	const data = []
	apiCall(LEAGUES(lang).league, REQUEST_TYPE.GET).then((response) => {
		console.log(response);
		response.response?.data?.body?.map((item) => {
			console.log(item);
			data.push({
				'leaguename': item?.[lang]?.leaguename,
				'leagueId': item?._id

			})

		})
		console.log(data);
		setLeagueNames(data)
	})
} catch (error) {
	console.log("error",error);
}
		
	};



	const getSeason = async () => {
		const obj = {
			leagueId: currentLeagueId
		};

		try {
			const response = await apiCall(ALL_SEASON.find, REQUEST_TYPE.POST, obj);

			// Extract unique titles using a Set
			const uniqueTitles = new Set();
			const uniqueSeasons = response.response?.data?.data?.filter(item => {
				if (!uniqueTitles.has(item?.seasonid?.season_Title)) {
					uniqueTitles.add(item?.seasonid?.season_Title);
					return true;
				}
				return false;
			});
              // console.log(uniqueSeasons);
			setSeason(uniqueSeasons);
		} catch (error) {
			console.error("An error occurred while fetching seasons:", error);
		}
	};




	const getTeamName = async () => {
		// console.log(currentLeagueId);
		// console.log(seasonId);
		const obj = {
			leagueId: currentLeagueId,
			season: seasonId
		}

		try {
			const response = await apiCall(TEAM_NAME(lang).find, REQUEST_TYPE.POST, obj);
			console.log(response);
			setTeamName(response.response.data.data);



		} catch (error) {
			//console.log("data error ",error);
		}

	}





	useEffect(() => {
		getLeagueName();

	}, [lang]);

	useEffect(() => {

		getSeason()
	}, [currentLeagueId]);

	useEffect(() => {

		getTeamName()
	}, [currentLeagueId, seasonId,lang]);

	const handleClick = (leagueId) => {

		// //console.log(leagueId);
		setCurrentLeagueId(leagueId)
	}

	const handleClickSeason = (seasonId) => {

		// console.log(seasonId);
		setSeasonId(seasonId)
		//setCurrentLeagueId(seasonId)
	}
	// //console.log(season);

	const handleClickTeam = (teamId) => {

		// //console.log(teamId);
		setTeamId(teamId)

	}




	///// 2nd side comparesion  

	const getLeagueName2 = async () => {
				
try {
	const data = []
	apiCall(LEAGUES(lang).league, REQUEST_TYPE.GET).then((response) => {
		console.log(response);
		response.response?.data?.body?.map((item) => {
			console.log(item);
			data.push({
				'leaguename': item?.[lang]?.leaguename,
				'leagueId': item?._id

			})

		})
		console.log(data);
		setLeagueNames2(data)
	})
} catch (error) {
	console.log("error",error);
}
	};



	const getSeason2 = async () => {
		const obj = {
			leagueId: currentLeagueId2
		};

		try {
			const response = await apiCall(ALL_SEASON.find, REQUEST_TYPE.POST, obj);

			// Extract unique titles using a Set
			const uniqueTitles = new Set();
			const uniqueSeasons = response.response.data?.data?.filter(item => {
				if (!uniqueTitles.has(item.seasonid.season_Title)) {
					uniqueTitles.add(item?.seasonid?.season_Title);
					return true;
				}
				return false;
			});

			setSeason2(uniqueSeasons);
		} catch (error) {
			console.error("An error occurred while fetching seasons:", error);
		}
	};




	const getTeamName2 = async () => {
		//console.log(currentLeagueId2);
		// console.log(seasonId2);
		const obj = {
			leagueId: currentLeagueId2,
			season: seasonId2
		}

		try {
			const response = await apiCall(TEAM_NAME(lang).find, REQUEST_TYPE.POST, obj);
			// console.log(response);
			setTeamName2(response.response?.data?.data);


		} catch (error) {
			//console.log("data error ",error);
		}

	}


	useEffect(() => {
		getLeagueName2();

	}, [lang]);


	useEffect(() => {

		getSeason2()


	}, [currentLeagueId2]);



	useEffect(() => {


		getTeamName2()

	}, [currentLeagueId2, seasonId2,lang]);

	const handleClick2 = (leagueId) => {

		//console.log(leagueId);

		setCurrentLeagueId2(leagueId)
	}

	const handleClickSeason2 = (seasonId) => {

		//console.log(seasonId);
		setSeasonId2(seasonId)
		//setCurrentLeagueId(seasonId)
	}
	// //console.log(season);

	const handleClickTeam2 = (teamId2) => {

		console.log(teamId2);
		setTeamId2(teamId2)

	}

	const gainingRate = async () => {
		// console.log(currentLeagueId);

		// console.log(seasonId);
		// console.log(teamId);
		const obj = {
			leagueId: currentLeagueId,
			season: seasonId,
			teamId: teamId
		}
		const data1 = []
		try {
			const response = await apiCall(GAINING_RATE.gainrate, REQUEST_TYPE.POST, obj)
			// console.log(response);
			response.response.data.data?.teamDatas.map((item) => {
				// console.log(item);
				item?.en.map((data) => {
					// console.log(data);
					data1.push({
						GS_rate: parseInt(data.GS_rate, 10)
					})
				})
			}
			)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			setData(response.response?.data?.data?.data1)
			setGainRate(data1)
			// console.log(data1);
		} catch (error) {
			console.log("data errror ", error)
		}
	}
	useEffect(() => {
		gainingRate()
	}, [currentLeagueId, seasonId, teamId])
	// console.log(gainRate);
	const gainingRate2 = async () => {
		// console.log(currentLeagueId2);
		// console.log(seasonId2);
		// console.log(teamId2);
		const obj = {
			leagueId: currentLeagueId2,
			season: seasonId2,
			teamId: teamId2
		}
		try {
			const lang = "en";
			const data1 = []
			const response = await apiCall(GAINING_RATE.gainrate, REQUEST_TYPE.POST, obj)
			// console.log(response);
			response.response.data.data?.teamDatas.map((item) => {
				// console.log(item);
				item?.en.map((data) => {
					// console.log(data);
					data1.push({
						GS_rate: parseInt(data.GS_rate, 10)
					})
				})
			}
			)
			// console.log(data1)
			setGainRate2(data1)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			setData2(response.response?.data?.data?.data1)
		} catch (error) {
			console.log("data errror ", error)
		}
	}
	useEffect(() => {
		gainingRate2()
	}, [currentLeagueId2, seasonId2, teamId2])
	// console.log(gainRate2);

	//console.log(data);

	///  team GS_GC GRAPh 

	const gsGc = async () => {
		// console.log(currentLeagueId);
		// console.log(seasonId);
		// console.log(teamId);
		const obj = {
			leagueId: currentLeagueId,
			season: seasonId,
			teamId: teamId
		}
		const data1 = []
		try {
			const response = await apiCall(TEAM_GS_GC.find, REQUEST_TYPE.POST, obj)
			// console.log(response.response.data.data?.teamDatas);
			response.response.data.data?.teamDatas.map((item) => {
				// console.log(item);
				item?.en.map((data) => {
					// console.log(data);
					data1.push({
						GS_GC: parseInt(data.GS_GC, 10)
					})
				})
			}
			)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			//setData(response.response?.data?.data?.data1)
			setGsGc(data1)
			//console.log(data1);
		} catch (error) {
			console.log("data errror ", error)
		}
	}
	useEffect(() => {
		gsGc()
	}, [currentLeagueId, seasonId, teamId])



	const gsGc2 = async () => {
		// console.log(currentLeagueId2);
		// console.log(seasonId2);
		// console.log(teamId2);
		const obj = {
			leagueId: currentLeagueId2,
			season: seasonId2,
			teamId: teamId2
		}
		const data1 = []
		try {
			const response = await apiCall(TEAM_GS_GC.find, REQUEST_TYPE.POST, obj)
			// console.log(response.response.data.data?.teamDatas);
			response.response.data.data?.teamDatas.map((item) => {
				// console.log(item);
				item?.en.map((data) => {
					// console.log(data);
					data1.push({
						GS_GC: parseInt(data.GS_GC, 10)
					})
				})
			}
			)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			//setData(response.response?.data?.data?.data1)
			setGsGc2(data1)
			//console.log(data1);
		} catch (error) {
			console.log("data errror ", error)
		}
	}
	useEffect(() => {
		gsGc2()
	}, [currentLeagueId2, seasonId2, teamId2])

	// gsGin 

	const gsGin = async () => {

		const obj = {
			leagueId: currentLeagueId,
			season: seasonId,
			teamId: teamId
		}
		const data1 = []
		try {
			const response = await apiCall(TEAM_GS_IN_G.find, REQUEST_TYPE.POST, obj)
			// console.log(response.response.data.data?.teamDatas);
			response.response.data.data?.teamDatas.map((item) => {
				// console.log(item);
				item?.en.map((data) => {
					// console.log(data);
					data1.push({
						GS_inG: parseInt(data.GS_inG, 10)
					})
				})
			}
			)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			//setData(response.response?.data?.data?.data1)
			setGsGin(data1)
			//console.log(data1);
		} catch (error) {
			console.log("data errror ", error)
		}
	}
	useEffect(() => {
		gsGin()
	}, [currentLeagueId, seasonId, teamId])

	// gsGin2

	const gsGin2 = async () => {

		const obj = {
			leagueId: currentLeagueId2,
			season: seasonId2,
			teamId: teamId2
		}
		const data1 = []
		try {
			const response = await apiCall(TEAM_GS_IN_G.find, REQUEST_TYPE.POST, obj)
			// console.log(response.response.data.data?.teamDatas);
			response.response.data.data?.teamDatas.map((item) => {
				// console.log(item);
				item?.en.map((data) => {
					// console.log(data);
					data1.push({
						GS_inG: parseInt(data.GS_inG, 10)
					})
				})
			}
			)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			//setData(response.response?.data?.data?.data1)
			setGsGin2(data1)
			//console.log(data1);
		} catch (error) {
			console.log("data errror ", error)
		}
	}
	useEffect(() => {
		gsGin2()
	}, [currentLeagueId2, seasonId2, teamId2])

	// TEAM_SEA_GC
	const teamSecgc = async () => {

		const obj = {
			leagueId: currentLeagueId,
			season: seasonId,
			teamId: teamId
		}
		const data1 = []
		try {
			const response = await apiCall(TEAM_SEA_GC.find, REQUEST_TYPE.POST, obj)
			// console.log(response.response.data.data?.teamDatas);
			response.response.data.data?.teamDatas.map((item) => {
				// console.log(item);
				item?.en.map((data) => {
					// console.log(data);
					data1.push({
						GC_cum: parseInt(data.GC_cum, 10)
					})
				})
			}
			)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			//setData(response.response?.data?.data?.data1)
			setGcCum(data1)
			//console.log(data1);
		} catch (error) {
			console.log("data errror ", error)
		}
	}
	useEffect(() => {
		teamSecgc()
	}, [currentLeagueId, seasonId, teamId])


	const teamSecgc2 = async () => {

		const obj = {
			leagueId: currentLeagueId2,
			season: seasonId2,
			teamId: teamId2
		}
		const data1 = []
		try {
			const response = await apiCall(TEAM_SEA_GC.find, REQUEST_TYPE.POST, obj)
			// console.log(response);
			response.response.data.data?.teamDatas.map((item) => {
				// console.log(item);
				item?.en.map((data) => {
					// console.log(data);
					data1.push({
						GC_cum: parseInt(data.GC_cum, 10)
					})
				})
			}
			)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			//setData(response.response?.data?.data?.data1)
			setGcCum2(data1)
			//console.log(data1);
		} catch (error) {
			console.log("data errror ", error)
		}
	}
	useEffect(() => {
		teamSecgc2()
	}, [currentLeagueId2, seasonId2, teamId2])


	return (
		<div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
			<section className="en_hero_about en_hero_about">
				<Container>
					<Row>
						<div className="col-lg-12 col-md-12 col-sm-12"></div>
					</Row>
				</Container>
			</section>
			<div className="en_bread_crumb ar_bread_crumb">
				<Container>
					<ul className="en_creat_nav ar_creat_nav">
						<li>
						{
								lang === "en"? <Link to="/">Home</Link>:<Link to="/">الرئيسية</Link>
							}
						</li>
						<li>
							<i className="ri-arrow-right-s-line"></i>
						</li>
						<li>
							
							{
								lang === "en"?<Link to="#">TEAM COMPARISION </Link>:<Link to="/PremierLeague">مقارنة الفريق</Link>
							}
						</li>
					</ul>
				</Container>
			</div>

			<section className="en-premier ar-premier">
				<Container>
					<Row>
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="en-premier-contant ar-premier-contant">
								<div className="en_leagues_cont">
								
									{
								lang === "en"?	<h2>Team Comparision</h2>:	<h2>مقارنة الفريق</h2>
							}
								</div>
							</div>
						</div>
					</Row>
				</Container>
			</section>

			<section className="chart-compari">
				<Container>
					<Row>
						<div className="col-lg-6 col-md-6 col-sm-12 pe-5 en-right-line en-right-line">
							<div className="chart-com-select">
								<div className="main-compari-select">
									<div className="col-compari">
										<Form.Select aria-label="Default select example" onChange={(e) => handleClick(e.target.value)}>
											
											{
												lang ==="en"? <option>Select League </option>:<option>اختر الدوري </option>
											}
											{
												leagueNames?.map((item) => {
													console.log("=======================================================================");
													console.log(item)
													return (<option key={item?.leagueId} value={item?.leagueId}>{item?.leaguename}</option>)
												})
											}

										</Form.Select>
									</div>
									<div className="col-compari">
										<Form.Select aria-label="Default select example" onChange={(e) => handleClickSeason(e.target.value)}>
										
											{
												lang ==="en"? <option>Select Season </option>:<option>اختر الموسم</option>
											}
											{
												season?.map((item) => {
													// console.log(item)
													return (<option key={item?._id} value={item?.seasonid?._id}>{item?.seasonid?.season_Title}</option>)
												})
											}
										</Form.Select>
									</div>
									<div className="col-compari">
										<Form.Select aria-label="Default select example" onChange={(e) => handleClickTeam(e.target.value)}>
											
											{
												lang ==="en"? <option>Select Team</option>:<option>اختر النادي</option>
											}
											{
												teamName?.map((item) => {
													// console.log(item);
													return (
														<option key={item.teamname._id} value={item.teamname._id}>
															{lang === 'en' ? item?.teamname?.en?.Team_Name_English : item?.teamname?.ar?.Team_Name_Arabic
																
															}
														</option>

													)
												})
											}
										</Form.Select>
									</div>
								</div>
								<div className="compari-logo">
									<img
										src={require("../img/no_image.png")}
										alt="earth"
										className="img-comp"
									/>
								</div>
							</div>
							<div className="team-compri-table">
								<TeamComparisionTable
									data={data}
									gainRate={gainRate}



								/>
							</div>
							<div className="team-compri-chat">
								<TeamComparisionChartTwo
									GsGc={GsGc}


								/>
							</div>
							<div className="team-compri-chat">
								<TeamComparisionChartFive
									GsGin={GsGin}

								/>
							</div>
							<div className="team-compri-chat">
								<TeamComparisionChartSix
									gcCum={gcCum}
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 ps-5">
							<div className="chart-com-select">
								<div className="main-compari-select">
									<div className="col-compari">
										<Form.Select aria-label="Default select example" onChange={(e) => handleClick2(e.target.value)}>
										{
												lang ==="en"? <option>Select League </option>:<option>اختر الدوري </option>
											}
											{
												leagueNames2?.map((item) => {
													console.log(item)
													return (<option key={item?.leagueId} value={item?.leagueId}>{item?.leaguename}</option>)
												})
											}

										</Form.Select>
									</div>
									<div className="col-compari">
										<Form.Select aria-label="Default select example" onChange={(e) => handleClickSeason2(e.target.value)}>
										{
												lang ==="en"? <option>Select Season </option>:<option>اختر الموسم</option>
											}
											{
												season2?.map((item) => {
													console.log(item.seasonid._id)
													return (<option key={item?.seasonid?._id} value={item?.seasonid?._id}>{item?.seasonid?.season_Title}</option>)
												})
											}
										</Form.Select>
									</div>
									<div className="col-compari">
										<Form.Select aria-label="Default select example" onChange={(e) => handleClickTeam2(e.target.value)}>
										{
												lang ==="en"? <option>Select Team</option>:<option>اختر النادي</option>
											}
											{
												teamName2?.map((item) => {
													// //console.log(item.teamname._id);
													return (

														<option key={item.teamname._id} value={item.teamname._id}>
															{
															lang === 'en' ? item?.teamname?.en?.Team_Name_English : item?.teamname?.ar?.Team_Name_Arabic
																
															}
														</option>
													)
												})
											}
										</Form.Select>
									</div>
								</div>
								<div className="compari-logo">
									<img
										src={require("../img/no_image.png")}
										alt="earth"
										className="img-comp"
									/>
								</div>
							</div>

							<div className="team-compri-table">
								<TeamComparisionTableTwo
									data={data2}
									gainRate={gainRate2}
								/>

							</div>
							<div className="team-compri-chat">
								<TeamComparisionChartThree
									GsGc2={GsGc2}
								/>

							</div>
							<div className="team-compri-chat">
								<TeamComparisionChartFour
									GsGin2={GsGin2}
								/>
							</div>
							<div className="team-compri-chat">
								<TeamComparisionChart
									gcCum2={gcCum2} />
							</div>
						</div>
					</Row>
				</Container>
			</section>
			<Iframesecttion />
		</div>
	);
}
