import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar from '../dashboard/Menubar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { apiCall } from '../helper/RequestHandler';
import { LEAGUES, REQUEST_TYPE,REMOVE_LEAGUE } from '../helper/APIInfo';



export default function Leagues() {
  const [aboutData, setAboutData] = useState([]);
  const [itemId, setItemId] = useState(0); 


  const getAllLeagues=async()=>{
    const lang ="en"
    try{
 const response = await apiCall(LEAGUES(lang).league,REQUEST_TYPE.GET)
    // console.log(response.response.data?.leaguedetails);
    console.log(response.response?.data?.body);
    setAboutData(response.response?.data?.body);
    }catch(error){
      console.log("data",error);
    }
   
    // response.response.data?.leaguedetails?.map((item)=>{
    //   console.log(item.en);
    // })
  }
  useEffect(() => {
    getAllLeagues()
  // //  axios.get('https://phpstack-1140615-3967632.cloudwaysapps.com/backend/getleagues')
  //  axios.get('http://localhost:5000/getleagues')
  //     .then((response) => {
  //       const aboutInfo = response.data?.leaguedetails
  //       console.log(response)
  //       setAboutData(aboutInfo);
  //       setItemId(aboutInfo._id); 


  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  }, []);
  
  const [legId,lsetLegId]=useState([])
console.log(aboutData);
aboutData?.map((item)=>{
  console.log(item);
  
  
})
  // const handleDelete = async(id) => {
  //   const token = localStorage.getItem("token");
  //   const apiUrl = `${REMOVE_LEAGUE.remove}/${id}`
    
  //   try {
  //     const response = await apiCall(apiUrl, REQUEST_TYPE.DELETE, token);
  
  //     if (response.status === 200) {
  //       setAboutData(aboutData.filter((league) => league._id !== id));
  //       console.log("League deleted successfully");
  //     } else {
  //       console.error('Error deleting league:', response.response?.data?.message);
  //     }
  //   } catch (error) {
  //     console.error('Error deleting league:', error);
  //   }
  // };
  const handleDelete = (id) => {
    const token = localStorage.getItem('token');
   // axios.get(`https://phpstack-1140615-3967632.cloudwaysapps.com/backend/removeteam/${id}`)
       axios.delete(`${REMOVE_LEAGUE.remove}/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log('Delete response:', response.data);
        setAboutData(aboutData?.filter(league => league._id !== id));
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
                    <h3>League</h3>
                    <ul className='season-link'>
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>League</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className='add-part'>
                  <ul className='add-button-min'>
                    <li className='add-button-fis'>
                      <Link to="/Addleagues"><i className="ri-add-line"></i></Link>
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
                  <h6><i class="ri-list-check"></i> League List</h6>
                </div>
                <Table bordered hover className='tablepress'>
                  <thead>
                    <tr>
                      <th width="1%"><Form.Check aria-label="option 1" /></th>
                      <th width="20%">League Name</th>
                      <th width="20%">Sort Order</th>
                      <th width="2%">Action</th>
                    </tr>
                  </thead>
                  <tbody className='table-list-one'>
                    {aboutData?.map((league) =>{ 
                     console.log(league);
                      return(
                      <tr key={league?._id}>
                        <td><Form.Check aria-label="option 1" /></td>
                        <td>{league?.en?.leaguename}</td>
                        <td>{league?.en?.sort_Order}</td>
                        <td>
                          <div className='add-button-fis'>
                            
                            <ul className="but-delet">
                              <li>
                              <Link to={`/EditLeagues/${league?._id}`}>
                              <i className="ri-pencil-fill"></i>
                            </Link>
                             </li>
                             <li className="add-button-sec">
                             <button onClick={() => handleDelete(league?._id)}>
                              <i className="ri-delete-bin-line"></i>
                            </button>
                             </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    )})}
                  </tbody>
                </Table>
                <div className='table-footer-f'>
                  <div className='table-footer-s'>
                    <p>Showing 1 to {aboutData?.length} of {aboutData?.length} (1 Pages)</p>
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
