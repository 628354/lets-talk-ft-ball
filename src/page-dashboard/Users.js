import React, { useEffect } from 'react';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { apiCall } from '../helper/RequestHandler';
import { GET_ROUTS, REQUEST_TYPE,CREATE } from '../helper/APIInfo';


export default function Users() {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [selectedCheckboxes2, setSelectedCheckboxes2] = useState([]);
const [userGroup,setUserGroup]=useState("")




const handleSubmitForm =async(e)=>{
    e.preventDefault();
    const token = localStorage.getItem("token")
   console.log(selectedCheckboxes);
    const formData = {
        userGroup: userGroup,
        selectedCheckboxes: selectedCheckboxes, // Include selected checkbox IDs
        //selectedCheckboxes2: selectedCheckboxes2, // Include selected checkbox IDs for Modify Permission
      };
    console.log("formdata",formData);
  
      try {
        // Make POST request using Axios
        const response = await apiCall(CREATE.create,REQUEST_TYPE.POST,formData,token)
  
        // Log the response
        console.log(response);
  
        // Reset form fields or navigate to another page if needed
       
        setSelectedCheckboxes([]);
        setSelectedCheckboxes2([]);
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
}

    const handleCheckboxChange = (id) => {
        // Toggle the checkbox's presence in the selectedCheckboxes array
        setSelectedCheckboxes((prevSelected) => {
          if (prevSelected.includes(id)) {
            return prevSelected.filter((item) => item !== id);
          } else {
            return [...prevSelected, id];
          }
        });
      };

      const handleCheckboxChangeBox = (id) => {
        // Toggle the checkbox's presence in the selectedCheckboxes array
        setSelectedCheckboxes2((prevSelected) => {
          if (prevSelected.includes(id)) {
            return prevSelected.filter((item) => item !== id);
          } else {
            return [...prevSelected, id];
          }
        });
      };
  
const [checkBoxData,setCheckBoxData]=useState([]);

const getData =async()=>{
    const locarUser = localStorage.getItem("token")
    console.log(locarUser);
    try {
        const response =await  apiCall(GET_ROUTS.getroute,REQUEST_TYPE.GET,null,locarUser)
        //console.log(response.response?.data?.body);
        setCheckBoxData(response.response?.data?.body)
    } catch (error) {
        console.log("data error",error);
        
    }
}
console.log(checkBoxData);
useEffect(()=>{
getData();
},[])
 
 // Function to select all checkboxes
//  const handleSelectAll = () => {
//     setSelectedCheckboxes(checkBoxData.map((checkbox) => checkbox._id));
//     setSelectedCheckboxes2(checkBoxData.map((checkbox) => checkbox._id));
//   };

//   // Function to unselect all checkboxes
//   const handleUnselectAll = () => {
//     setSelectedCheckboxes([]);
//     setSelectedCheckboxes2([]);
//   };




  return (
    <div>
        <Menubar/>
        <div className="right-side-contant py-3">
        <section className="min-section-one">
                    <Container fluid>
                        <Row>
                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="season-us">
                                    <div className="season-link-part">
                                        <h3> Users</h3>
                                        <ul className="season-link">
                                            <li>
                                                <Link>Home</Link>
                                            </li>
                                            <li>
                                                <i className="ri-arrow-right-s-line"></i>
                                            </li>
                                            <li>
                                                <Link>Users</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="add-part">
                                    <ul className="add-button-min">
                                        <li className="add-button-fis">
                                            <button onClick={handleSubmitForm}>
                                                <Link to="">
                                                    <i className="ri-save-3-line"></i>
                                                </Link>
                                            </button>
                                        </li>
                                        <li className="add-button-cencel">
                                            <Link to="/Leagues">
                                                <i className="ri-reply-fill"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="">
                    <Container fluid>
                        <Row>
                            <div className="main_add_season">
                                <div className="container-fluid">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">
                                                <i class="fa fa-pencil"></i> Add Users
                                            </h3>
                                        </div>
                                        <div class="panel-body">
                                            <form id="form-user" class="form-horizontal">
                                                
                                                
                                                <div class="form-group required">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-firstname"
                                                    >
                                                        User Group Name
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="User Group Name"
                                                            id="input-firstname"
                                                            class="form-control"
                                                            value={userGroup}
                                                            onChange={(e)=> setUserGroup(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div class="form-group-catalog">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-lastname"
                                                    >
                                                       Access Permission                                                                                                                                        
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <div className='section-cetalog'>
                                                       
                                                        <Form>

                                                            {checkBoxData.map((checkbox) => (
                                                            <Form.Check
                                                            key={checkbox._id}
                                                            id={checkbox._id}
                                                            label={checkbox.path}
                                                            className={'catlog'}
                                                            checked={selectedCheckboxes.includes(checkbox._id)}
                                                            onChange={() => handleCheckboxChange(checkbox._id)}
                                                            />
                                                            ))}

                                                        </Form>

                                                        </div>
                                                        {/* <div className='catalog-selet'>
                                                            <ul className='catalog-cart'>
                                                                <li>
                                                                    <Link to=''  onClick={handleSelectAll}>Select All</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to=''>/</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='' onClick={handleUnselectAll}>Unselect All</Link>
                                                                </li>
                                                            </ul>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div class="form-group-catalog">
                                                    <label                                                                                                                                                                                                              
                                                        class="col-sm-2 control-label"
                                                        for="input-email"
                                                    >
                                                        Modify Permission
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <div className='section-cetalog'>
                                                        {/* <Form>
                                                                <Form.Check
                                                                    id={`cat11`}
                                                                    label={`catalog`}
                                                                    className={'catlog'}
                                                                />
                                                                 <Form.Check
                                                                    id={`cat12`}
                                                                    label={`catalog`}
                                                                    className={'catlog'}
                                                                />
                                                                 <Form.Check
                                                                    id={`cat13`}
                                                                    label={`catalog`}
                                                                    className={'catlog'}
                                                                />
                                                            </Form> */}

                                                               <Form>
                                                                    {checkBoxData.map((checkbox) => (
                                                                        <Form.Check
                                                                        key={checkbox._id}
                                                                        id={checkbox._id}
                                                                        label={checkbox.path}
                                                                        className={'catlog'}
                                                                        checked={selectedCheckboxes2.includes(checkbox._id)}
                                                                        onChange={() => handleCheckboxChangeBox(checkbox._id)}
                                                                        />
                                                                    ))}
                                                                </Form>

                                                        </div>
                                                        {/* <div className='catalog-selet'>
                                                            <ul className='catalog-cart'>
                                                                <li>
                                                                    <Link to='' onClick={handleSelectAll}>Select All</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to=''>/</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='' onClick={handleUnselectAll} >Unselect All</Link>
                                                                </li>
                                                            </ul>
                                                        </div> */}
                                                    </div>
                                                </div>
                                               
                                                {/* <div class="form-group img-g">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-image"
                                                    >
                                                        Image
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <a
                                                            href=""
                                                            id="thumb-image"
                                                            data-toggle="image"
                                                            class="img-thumbnail     "
                                                        >
                                                            <img src="" alt="" title="" />
                                                        </a>
                                                        <input
                                                            type="hidden"
                                                            name="image"
                                                            id="input-image"
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div> */}
                                              
                                                {/* <div class="form-group required">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-confirm"
                                                    >
                                                        Confirm
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input
                                                            type="password"
                                                            name="confirm"
                                                            placeholder="Confirm"
                                                            id="input-confirm"
                                                            class="form-control"
                                                            onChange={(e) =>
                                                                handleChange("confirm", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div> */}
                                                
                                            </form>
                                        </div>
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
