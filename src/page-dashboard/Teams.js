// Teams.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar from '../dashboard/Menubar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import { ADMIN_ALL_TEAM, REQUEST_TYPE, REMOVE_TEAM,FILTER_TEAMS } from '../helper/APIInfo';
import { apiCall } from '../helper/RequestHandler';

export default function Teams() {
  const [teamsData, setTeamsData] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage] = useState(10); // Adjust the number of teams per page as needed

  const getTeams = async () => {
    try {
      const response = await apiCall(ADMIN_ALL_TEAM.team, REQUEST_TYPE.GET);
      setTeamsData(response.response.data?.body);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem('token');
    axios
      .delete(`${REMOVE_TEAM.remove}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('Delete response:', response.data);
        setTeamsData(teamsData.filter((team) => team._id !== id));
      })
      .catch((error) => {
        console.log('Error Deleting data', error);
      });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://phpstack-1140615-3967632.cloudwaysapps.com/backend/TeamsFilter', {
      // const response = await axios.get('http://localhost:5000/TeamsFilter', {
        params: {
          Team_Name_English: searchTerm,
        },
      });
      console.log(response.data?.body);
      setSearchClicked(true);
      setTeamsData(response.data?.body);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(teamsData.length / teamsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <span onClick={() => handlePageChange(i)}>{i}</span>
        </li>
      );
    }

    return (
      <ul className="pagination">
        {pageNumbers}
      </ul>
    );
  };

  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
  const currentTeams = teamsData?.slice(indexOfFirstTeam, indexOfLastTeam);

  return (
    <div>
      <Menubar />
      <div className='right-side-contant py-3'>
        <section className='min-section-one'>
          <Container fluid>
            <Row>
              <div className="col-lg-6 col-md-6 col-6">
                <div className='season-us'>
                  <div className='season-link-part'>
                    <h3>Teams</h3>
                    <ul className='season-link'>
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>Teams</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-6">
                <div className='add-part'>
                  <ul className='add-button-min'>
                    <div className="search-bar">
                      <input
                        type="text"
                        placeholder="Search teams..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button onClick={handleSearch}>Search</button>
                    </div>
                    <li className='add-button-fis'>
                      <Link to="/Addteams"><i className="ri-add-line"></i></Link>
                    </li>
                    <li className="add-button-cencel"><a href=""><i className="ri-refresh-line"></i></a></li>
                  </ul>
                </div>
              </div>

            </Row>
          </Container>
        </section>
        <hr />
        <section className='teams-List'>
          <Container fluid>
            <Row>
              <div className='teams_list_table'>
                <div className='teams-table-list'>
                  <h6><i className="ri-list-check"></i> Teams List</h6>
                </div>
                <Table bordered hover className='tablepress'>
                  <thead>
                    <tr>
                      <th><Form.Check aria-label="option 1" /></th>
                      <th>League Name</th>
                      <th>Teams Name</th>
                      <th>Sort Name</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className='table-list-one'>
                    {currentTeams.map((team) => (
                      <tr key={team._id}>
                        <td><Form.Check aria-label="option 1" /></td>
                        <td>{searchClicked ? team?.leagues_details[0].en.leaguename : team?.leagueid?.en?.leaguename}</td>
                        <td>{team?.en.Team_Name_English}</td>
                        <td>{team?.en?.Team_Name_Short_English}</td>
                        <td>{team?.en?.status}</td>
                        <td>
                          <div className='add-button-fis'>
                            <ul className="but-delet">
                              <li>
                                <Link to={`/EditTeams/${team._id}`}>
                                  <i className="ri-pencil-fill"></i>
                                </Link>
                              </li>
                              <li className="add-button-sec">
                                <button onClick={() => handleDelete(team._id)}>
                                  <i className="ri-delete-bin-line"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {renderPageNumbers()}
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}
