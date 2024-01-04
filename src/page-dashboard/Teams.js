import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar from '../dashboard/Menubar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {ADMIN_ALL_TEAM, REQUEST_TYPE,REMOVE_TEAM} from '../helper/APIInfo';
import { apiCall } from '../helper/RequestHandler';


export default function Teams() {
  const [teamsData, setTeamsData] = useState([]);
  const [itemId, setItemId] = useState(0);


  const getTeams =async()=>{
    try{
      const response =await apiCall(ADMIN_ALL_TEAM.team,REQUEST_TYPE.GET);
      console.log(response.response.data?.body);
     // const teamsInfo = response.response.data?.data.teamdetails;
        setTeamsData(response.response.data?.body);
       // setItemId(teamsInfo._id);

    }catch(error){
      console.error('Error fetching data:', error);
    }
   
  }
 
  useEffect(()=>{
    getTeams()

  },[])
  // useEffect(() => {

  //   axios.get('https://phpstack-1140615-3967632.cloudwaysapps.com/backend/en/findAll')
  //    // axios.get(' http://localhost:5000/getTeams')
  //     .then((response) => {
  //       console.log(response.data.data);
  //       // response.data.data.map((item) => {
  //       //   console.log(item);

  //       // })
  //       const teamsInfo = response.data?.teamdetails;
  //       setTeamsData(response.data.data);
  //       setItemId(teamsInfo._id);

  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

//   const handleelete = async(id) => {
//     try{
//       const token = localStorage.getItem('token');
//       const response = await apiCall(`${REMOVE_TEAM.remove}/${id}`,REQUEST_TYPE.GET,{
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       console.log('Delete response:', response);
//       setTeamsData(teamsData.filter(team => team._id !== id));

//     }catch(error){
//       console.log('Error Deleting data', error);
//     }
   
//   };
// useEffect(()=>{
//   handleelete()
// },[])

  const handleDelete = (id) => {
    const token = localStorage.getItem('token');
   // axios.get(`https://phpstack-1140615-3967632.cloudwaysapps.com/backend/removeteam/${id}`)
       axios.delete(`${REMOVE_TEAM.remove}/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('Delete response:', response.data);
        setTeamsData(teamsData.filter(team => team._id !== id));
      })
      .catch((error) => {
        console.log('Error Deleting data', error);
      });
  };

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
                    <li className='add-button-fis'>
                      <Link to="/Addteams"><i className="ri-add-line"></i></Link>
                    </li>
                    <li class="add-button-cencel"><a href=""><i className="ri-refresh-line"></i></a></li>
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
                  <h6><i class="ri-list-check"></i> Teams List</h6>
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
                    {teamsData.map((team)=>{
                      console.log(team);
                      return(
                        <tr key={team._id}>
                        <td><Form.Check aria-label="option 1" /></td>
                        <td>{team?.leagueid?.en?.leaguename}</td>
                        <td>{team?.en.Team_Name_English}</td>
                       
                        <td>{team?.en?.Team_Name_Short_English}</td>
                        <td>{team?.en?.status}
                        </td>
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

                      )
                    })}
                    
                  </tbody>
                </Table>
                <div className='table-footer-f'>
                  <div className='table-footer-s'>
                    <p>Showing 1 to {teamsData.length} of {teamsData.length} (1 Pages)</p>
                  </div>
                </div>
              </div>

            </Row>
          </Container>

        </section>


      </div>


    </div>
  )
}
