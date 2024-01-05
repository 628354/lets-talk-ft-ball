import { useEffect, useState } from 'react';
import axios from 'axios';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { apiCall, apiCallFile } from '../helper/RequestHandler';
import { LEAGUES, TEAM_BULK_IMPORT, REQUEST_TYPE, SESSION, CATLOGS } from '../helper/APIInfo';


export default function LeaguesBluk() {
	const [getSession, setSession] = useState();
	const [getleagues, setleagues] = useState();

	const SessionCall = () => {
		try {
			apiCall(SESSION.year, REQUEST_TYPE.GET).then((results) => {
				setSession(results.response.data.seasonyears)
			})
		} catch (error) {
			console.log("data ",error);
			
		}
		
	}
const lang ="en"
	const LeagueCall = () => {
		try {
			apiCall(LEAGUES(lang).league, REQUEST_TYPE.GET).then((results) => {
				console.log(results.response.data?.body);
				setleagues(results.response.data?.body)
			})
			
		} catch (error) {
			console.log("data",error);
		}
		
	}

	useEffect(() => {
		SessionCall()
		LeagueCall()
	}, [0])


	const [successMessage, setSuccessMessage] = useState(''); // State to hold success message
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState();

	const handleChange = (e) => {
		setFormData(preState => ({ ...preState, [e.target.name]: e.target.value }));
	};

	const handleChangeFile = (e) => {
		setFormData(preState => ({ ...preState, [e.target.name]: e.target.files[0] }));
	};


	const handleSave = async (event) => {
		event.preventDefault();
		const formDatas = new FormData();


		if (formData?.league === '') {
			setErrorMessage('Please fill in all required fields.');
			clearMessages();
		} else {
			try {
				formDatas.append('excelFile', formData.file);
				formDatas.append('season', formData.season);
				formDatas.append('league', formData.league);
				apiCallFile(CATLOGS.upload, REQUEST_TYPE.POST, formDatas).then((results) => {
					setSuccessMessage("Successfully import bluk League data");
					clearMessages();
				})// Clear messages after 3 seconds


			} catch (error) {
				setErrorMessage('Error occurred. Please try again.');
				clearMessages(); // Clear messages after 3 seconds
				console.error(error);
			}
		}
	};
	const clearMessages = () => {
		setTimeout(() => {
			setSuccessMessage('');
			setErrorMessage('');
		}, 3000); // Clear messages after 3 seconds
	};
	return (
		<div>
			<Menubar />
			<Form onSubmit={handleSave} enctype="multipart/form-data">
				<div className='right-side-contant py-3'>

					<section className='min-section-one'>

						<Container fluid>
							<Row>
								<div className="col-lg-6 col-md-6 col-6">
									<div className='season-us'>

										<div className='season-link-part'>
											<h3> Catlogs</h3>
											<ul className='season-link'>
												<li>
													<Link>Home</Link>
												</li>
												<li>
													<i className="ri-arrow-right-s-line"></i>
												</li>
												<li>
													<Link>Catlogs</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-6">
									<div className='add-part'>
										<ul className='add-button-min'>
											<li className="add-button-fis">
												<button type="submit">
													<i className="ri-save-3-line"></i>
												</button>
											</li>
											<li className='add-button-cencel'>
												<Link to="/Season"><i className="ri-reply-fill"></i></Link>
											</li>
										</ul>
										{successMessage && (
											<div className="alert alert-success">{successMessage}</div>
										)}
										{errorMessage && (
											<div className="alert alert-danger">{errorMessage}</div>
										)}
									</div>

								</div>
							</Row>
						</Container>


					</section>
					<hr />
					<section className='Add-Season-open'>
						<Container fluid>
							<Row>
								<div className='main_add_season'>
									<div className='main-ad-sea '>
										<p><i class="ri-pencil-fill"></i>Team Bluk</p>
									</div>
									<hr />


									<div className='addsection-open'>
										<div className='general-part'>

											<div className='sanson-title'>

												<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
													{/* <Form.Label column sm="2">
														Season
													</Form.Label> */}
													{/* <Col sm="10">
														<Form.Select name="season"
															onChange={handleChange} >
															<option value={""}>Select Season</option>
															{getSession?.map((row) => (
																<option value={row._id}>{row.season_Title}</option>
															))}
														</Form.Select>
													</Col> */}
												</Form.Group>
												<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
													<Form.Label column sm="2">
														League
													</Form.Label>
													<Col sm="10">
														<Form.Select name="league"
															onChange={handleChange} >
															<option value={""}>Select League</option>
															{getleagues?.map((row) => (
																<option value={row._id}>{row.en.leaguename}</option>
															))}
														</Form.Select>
													</Col>
												</Form.Group>
												<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
													<Form.Label column sm="2">
														 Catlogs File
													</Form.Label>
													<Col sm="10">
														<Form.Control type="file" name="file" placeholder="Season Title"
															onChange={handleChangeFile} />
													</Col>
												</Form.Group>


											</div>

										</div>


									</div>

								</div>

							</Row>
						</Container>
					</section>
				</div></Form>
		</div>

	)
}
