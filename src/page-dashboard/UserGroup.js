import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar from '../dashboard/Menubar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, GET_USER,DELETE_USER } from "../helper/APIInfo";

export const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
  return formattedDate;
};

export default function UserGroup() {
  const [aboutData, setAboutData] = useState([]);
  const [itemId, setItemId] = useState(0);
  
  let local = localStorage.getItem("token");
  //console.log("Token:", local);
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${local}`,
    },
  };
  console.log(axiosConfig);

  useEffect(() => {

    axios.get('https://phpstack-1140615-3967632.cloudwaysapps.com/backend/getAllUser', axiosConfig)
    //  axios.get(GET_USER.find,axiosConfig)
     
      .then((response) => {
       //console.log(response.response.data?.pageInfo?.body);
        const aboutInfo = response.data?.pageInfo?.body
        setAboutData(aboutInfo);
        setItemId(aboutInfo?._id);


      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");


    if (confirmDelete) {
      axios.delete(`https://phpstack-1140615-3967632.cloudwaysapps.com/backend/deleteUser/${id}`, axiosConfig)
    //   axios.delete(`http://localhost:5000/deleteUser/${id}`, axiosConfig)

        .then((response) => {

          setAboutData(aboutData.filter(league => league._id !== id));
        })
        .catch((error) => {
          console.error('Error deleting data:', error);
        });
    };

  }



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
                    <h3>User Groups</h3>
                    <ul className='season-link'>
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>User Groups</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className='add-part'>
                  <ul className='add-button-min'>
                    <li className='add-button-fis'>
                      <Link to="/addUser"><i className="ri-add-line"></i></Link>
                    </li>
                    <li class="add-button-cencel"><a href=""><i className="ri-refresh-line"></i></a></li>
                    {/* <li className='add-button-sec'>
                      <button><i className="ri-delete-bin-line"></i></button>
                    </li> */}
                  </ul>
                </div>

              </div>
            </Row>
          </Container>


        </section>
        <hr />
        <section className='Season-List'>
          <Container fluid>
            <Row>
              <div className='season_list_table'>
                <div className='season-table-list'>
                  <h6><i class="ri-list-check"></i>User Group</h6>
                </div>
                <Table bordered hover className='tablepress'>
                  <thead>
                    <tr>
                      <th><Form.Check aria-label="option 1" /></th>
                      <th>User Group Name</th>
                      <th>Action</th>
                     
                    </tr>
                  </thead>
                  <tbody className='table-list-one'>
                    {aboutData?.map((user) => (
                      <tr key={user._id}>
                        <td><Form.Check aria-label="option 1" /></td>
                        <td>{user.firstName}</td>
                        <td>
                          <div className='add-button-fis'>

                            <ul className="but-delet">
                              <li>
                                <Link to={`/edituser/${user._id}`}>
                                  <i className="ri-pencil-fill"></i>
                                </Link>
                              </li>
                              <li className="add-button-sec">
                                <button onClick={() => handleDelete(user._id)}>
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
                <div className='table-footer-f'>
                  <div className='table-footer-s'>
                    {/* <p>Showing 1 to {aboutData.length} of {aboutData.length} (1 Pages)</p> */}
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
