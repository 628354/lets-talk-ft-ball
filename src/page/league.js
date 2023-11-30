/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

const LeagueTable = () => {
	const [leaguedetails, setLeaguedetails] = useState([]);
	const [showAddForm, setShowAddForm] = useState(false);
	const [newLeague, setNewLeague] = useState({
		leaguename: "",
		image: null,
	});
	const [editLeague, setEditLeague] = useState(null);
	const [showEditForm, setShowEditForm] = useState(false); // Add a state for controlling the edit form visibility

	const toggleAddForm = () => {
		setShowAddForm(!showAddForm);
	};

	const handleInputChange = (event) => {
		const { name, value, type } = event.target;

		if (type === "file") {
			setNewLeague({
				...newLeague,
				[name]: event.target.files[0],
			});
		} else {
			setNewLeague({
				...newLeague,
				[name]: value,
			});
		}
	};
	const baseUrl = process.env.PUBLIC_URL;
	const handleSubmit = () => {
		const formData = new FormData();
		formData.append("leaguename", newLeague.leaguename);
		formData.append("image", newLeague.image);

		axios
			.post(`${baseUrl}/backend/addleague`, formData)
			.then((response) => {
				setLeaguedetails([...leaguedetails, response.data]);
				setNewLeague({
					leaguename: "",
					image: null,
				});
				toggleAddForm();
			})
			.catch((error) => {
				console.error("Error adding new league: ", error);
			});
	};

	const handleEditClick = (league) => {
		if (league === editLeague) {
			// If the same league is clicked again, close the edit form
			setEditLeague(null);
			setShowEditForm(false);
		} else {
			// Otherwise, open the edit form for the selected league
			setEditLeague(league);
			setShowEditForm(true);
		}
	};

	const handleEditSubmit = () => {
		axios
			.post(`${baseUrl}/backend/updateLeague/${editLeague._id}`, {
				leaguename: newLeague.leaguename,
				image: newLeague.image,
			})
			.then((response) => {
				const updatedLeagues = leaguedetails.map((league) => {
					if (league._id === editLeague._id) {
						return response.data;
					}
					return league;
				});
				setLeaguedetails(updatedLeagues);
				setEditLeague(null);
				setNewLeague({
					leaguename: "",
					image: null,
				});
				setShowEditForm(false);
			})
			.catch((error) => {
				console.error("Error updating league: ", error);
			});
	};

	const handleDelete = (leagueId) => {
		axios
			.delete(`${baseUrl}/backend/removeLeague/${leagueId}`)
			.then(() => {
				const updatedLeagues = leaguedetails.filter(
					(league) => league._id !== leagueId
				);
				setLeaguedetails(updatedLeagues);
			})
			.catch((error) => {
				console.error("Error deleting league: ", error);
			});
	};

	useEffect(() => {
		axios
			.get(`${baseUrl}/backend/getleagues`)
			.then((response) => {
				setLeaguedetails(response.data.leaguedetails);
			})
			.catch((error) => {
				console.error("Error fetching league data: ", error);
			});
	}, []);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th className="image">Image</th>
						<th className="league-name">League Name</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{leaguedetails.map((league) => (
						<tr key={league._id}>
							<td>
								<img src={league.image} style={{ width: "100px" }} />
							</td>
							<td>{league.leaguename}</td>
							<td>
								<button onClick={() => handleEditClick(league)}>Edit</button>
								<button onClick={() => handleDelete(league._id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<button onClick={toggleAddForm}>Add</button>

			{showAddForm && (
				<div>
					<h2>Add New League</h2>
					<form>
						<div>
							<label>League Name:</label>
							<input
								type="text"
								name="leaguename"
								value={newLeague.leaguename}
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<label>Image:</label>
							<input type="file" name="image" onChange={handleInputChange} />
						</div>
						<button type="button" onClick={handleSubmit}>
							Submit
						</button>
					</form>
				</div>
			)}

			{showEditForm && editLeague && (
				<div>
					<h4>Edit League</h4>
					<form>
						<div>
							<label>League Name:</label>
							<input
								type="text"
								name="leaguename"
								value={newLeague.leaguename}
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<label>Image:</label>
							<input type="file" name="image" onChange={handleInputChange} />
						</div>
						<button type="button" onClick={handleEditSubmit}>
							Submit Edit
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default LeagueTable;
