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
import { REQUEST_TYPE, SESSION,FIND_TEAM ,GET_LEAGUE_ID,SESSIOND, BASE_URL} from "../helper/APIInfo";
import Cookies from "js-cookie";
export default function PremierLeague() {
	
	
	const [leagueDecreption, setLeagueDecreption] = useState([]);
	// const { leagueId } = useParams();

const leagueId = localStorage.getItem("selectedLeagueId")
const lang = Cookies.get('language')
//console.log(leagueId)
	// const [currentLeagueId, setCurrentLeagueId] = useState("");
	// const [seasonId, setSeasonId] = useState();
	// const [teamId, setTeamId] = useState("");
	
	
	const getLeagueDetails=()=>{
		console.log(leagueId);
		const baseUrl = GET_LEAGUE_ID(lang).find;
		const apiUrl =`${baseUrl}/${leagueId}`
		console.log(apiUrl);
		const data =[]
		try{
			apiCall(apiUrl,REQUEST_TYPE.GET).then((response)=>{
				console.log(response.response?.data?.body)
				// setLeagueDecreption(response.response?.data?.body?.[lang])
				setLeagueDecreption({
					"image":response.response?.data?.body.image,
					"LeagueData":response.response?.data?.body?.[lang],
					"leagueId":response.response?.data?.body?._id
				})
			})
			console.log(data);

		}catch(error){
			console.log("data not ",error)
		}

	}

console.log(leagueDecreption);

	useEffect(()=>{
		
		getLeagueDetails()
	},[leagueId,lang])
	

	function removeHtmlTags(input) {
		return input?.replace(/<[^>]*>/g, '')?.replace(/&nbsp;/g, '');
	  }

	  console.log(`${BASE_URL}${leagueDecreption?.image}`);
	return (
		<div >
			<section className={`${lang ==="en"? 'en_hero_about':'ar_hero_about'}`}>
				<Container>
					<Row>
						<div className="col-lg-12 col-md-12 col-sm-12"></div>
					</Row>
				</Container>
			</section>
			
			<div className={`${lang ==="en"? 'en_bread_crumb':'ar_bread_crumb'}`}>
				<Container>
					<ul className={`${lang ==="en"? 'en_creat_nav':'ar_creat_nav '}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>

						<li>
							{
								lang === "en"? <Link to="/">Home</Link>:<Link to="/">بيت</Link>
							}
							
						</li>
						<li>
							<i className="ri-arrow-right-s-line" ></i>
						</li>
						<li>
							<Link to="">{leagueDecreption?.LeagueData?.leaguename}</Link>
						</li>
					
					</ul>
				</Container>
			</div>

			<section className="en-premier ar-premier">
				<Container>
						
							<Row key={leagueDecreption?.leagueId}>
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="en-premier-contant ar-premier-contant">
										<div className={`${lang ==="en"? 'en_leagues_cont':'ar_leagues_cont'}`}>
											<h2>{leagueDecreption?.LeagueData?.leaguename}</h2>
										</div>
									</div>
								</div>
								<div  className={`${lang ==="en"? 'en_main_leagues one':'ar_main_leagues one'}`}>
									<Row className={`${lang ==="en"? 'row':'row ar_section-reverse'}`}>
										<div className="col-lg-2 col-md-2 col-sm-12 m-auto">
											<div className="en-leagues-img">
												<img
													src={`${BASE_URL}${leagueDecreption?.image}` }
													alt="earth"
													className="img-premier-press"
												/> 
											</div>
										</div>
										<div className="col-lg-10 col-md-10 col-sm-12">
											<div className="en-leagues-text ar-leagues-text">
												<p>{removeHtmlTags(leagueDecreption?.LeagueData?.description)}</p>
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
				</Container>
			</section>
			<section className="league_table">
				<Container>
					<Row>
						<div className="en_table_text ar_table_text">
							{
								lang ==="en"? <h6>Scroll Down To See Charts</h6>:<h6>قم بالتمرير لأسفل لرؤية الرسوم البيانية</h6>
							}
							
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
