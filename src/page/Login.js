/** @format */

import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
	const navigate = useNavigate();
	const { onSuccessfulLogin } = props;
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const baseUrl = process.env.PUBLIC_URL;
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:5000/Login`, formData)
			.then((response) => {
				//console.log(response.data.token);
				if (response.status === 200) {
					const token = response.data.token;
					localStorage.setItem('token', token);
					setIsLoggedIn(true);
					navigate("/Dashboard");
				}
			})
			.catch((error) => {
				console.error("Login failed:", error);
			});
	};

	return (
		<div>
			<section className="en_hero_image en_hero_image">
				<Container>
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
						</div>
					</div>
				</Container>
			</section>
			<section className="en_login ar_login">
				<Container>
					<div className="row en_login_box">
						<div className="col-lg-6 col-md-6 col-sm-12 en_bckg">
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="en_login_contant ar_login_contant">
								<Form>
									<Form.Group className="mb-3" controlId="formGroupEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											name="email"
											value={email}
											onChange={handleChange}
										/>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formGroupPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
											name="password"
											value={password}
											onChange={handleChange}
										/>
										<div className="password_formt">
											<Link to="/Signup">Register</Link>
											<Link to="/Forgot">Forgot Password</Link>
										</div>
									</Form.Group>
									<button className="spy_button" onClick={handleSubmit}>
										Submit
									</button>
								</Form>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
