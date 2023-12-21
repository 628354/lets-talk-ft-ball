/** @format */

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import PremierLeaguetable from "../Leagues-components/PremierLeaguetable";
import Iframesecttion from "../Leagues-components/Iframesecttion";
import Premierchart from "../Leagues-components/Premierchart";
import Goalsconchart from "../Leagues-components/Goalsconchart";
import CahrtGsGc from "../Leagues-components/CahrtGsGc";

import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, SESSION,FIND_TEAM ,GET_TEAM_ID,SESSIOND} from "../helper/APIInfo";
export default function PremierLeague() {
	
	
	const [leagueDecreption, setLeagueDecreption] = useState([]);
	// const { leagueId } = useParams();

const leagueId = sessionStorage.getItem("selectedLeagueId")
//console.log(leagueId)
	// const [currentLeagueId, setCurrentLeagueId] = useState("");
	// const [seasonId, setSeasonId] = useState();
	// const [teamId, setTeamId] = useState("");
	
	
	const getLeagueDetails=()=>{
		console.log(leagueId);
		const baseUrl = GET_TEAM_ID.find;
		const apiUrl =`${baseUrl}/${leagueId}`
		try{
			apiCall(apiUrl,REQUEST_TYPE.GET).then((response)=>{
				console.log(response)
				setLeagueDecreption(response.response.data?.body)
			})

		}catch(error){
			console.log("data not ",error)
		}

	}



	useEffect(()=>{
		
		getLeagueDetails()
	},[leagueId])
	
	  
	return (
		<div>
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
							<Link to="/">Home</Link>
						</li>
						<li>
							<i className="ri-arrow-right-s-line"></i>
						</li>
						
							<Link to="">{leagueDecreption?.leaguename}</Link>
					
					</ul>
				</Container>
			</div>

			<section className="en-premier ar-premier">
				<Container>
					<Row>
						
							<Row key={leagueDecreption?._id}>
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="en-premier-contant ar-premier-contant">
										<div className="leagues_cont">
											<h2>{leagueDecreption?.leaguename}</h2>
										</div>
									</div>
								</div>
								<div className="en_main_leagues one ">
									<Row>
										<div className="col-lg-2 col-md-2 col-sm-12 m-auto">
											<div className="en-leagues-img">
												<img
													src={"http://localhost:5000/uploads/" + leagueDecreption?.image}
													alt="earth"
													className="img-premier-press"
												/> 
											</div>
										</div>
										<div className="col-lg-10 col-md-10 col-sm-12">
											<div className="en-leagues-text ar-leagues-text">
												<p>{leagueDecreption?.description}</p>
											</div>
										</div>
									</Row>
								</div>
							</Row>
					
						{/* <div className="col-lg-12 col-md-12 col-sm-12">
							<div className="en-premier-contant ar-premier-contant">
								<div className="leagues_cont">
									<h2>Premier League</h2>
								</div>
							</div>
						</div> */}
					</Row>
				</Container>
			</section>
			<section className="league_table">
				<Container>
					<Row>
						<div className="en_table_text ar_table_text">
							<h6>Scroll Down To See Charts</h6>
						</div>
						<div className="en_main_table ar_main_table">
							<PremierLeaguetable
								 leagueId={leagueId}
								// seasonId={seasonId}
								// teamId={teamId}
							/>
						</div>
					</Row>
				</Container>
			</section>

			<section className="chart-press">
				<Container>
					<Row>
						<Premierchart
							  leagueId={leagueId}
							// seasonId={seasonId}
							// teamId={teamId}
						/>
					</Row>
				</Container>
			</section>

			<section className="chart-press">
				<Container>
					<Row>
						<Goalsconchart
						leagueId={leagueId}
							
							
						/>
					</Row>
				</Container>
			</section>
			<section className="chart-press">
				<Container>
					<Row>
						<CahrtGsGc
						leagueId={leagueId}
							
						/>
					</Row>
				</Container>
			</section>
			<Iframesecttion />
		</div>
	);
}
