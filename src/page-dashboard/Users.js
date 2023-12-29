import React from 'react';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


export default function Users() {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [selectedCheckboxes2, setSelectedCheckboxes2] = useState([]);


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

    const checkboxData = [
        { id: 'cat1', label: 'catalog' },
        { id: 'cat2', label: 'catalog/attribute' },
        { id: 'cat3', label: 'catalog/attribute_group' },
        { id: 'cat4', label: 'catalog/bulkimport' },
        { id: 'cat5', label: 'catalog/category' },
        { id: 'cat6', label: 'catalog/category_28dec2020' },
        { id: 'cat7', label: 'catalog/definition' },
        { id: 'cat8', label: 'catalog/download' },
      ];

      const checkboxDataBox = [
        { id: 'cat11', label: 'catalog' },
        { id: 'cat12', label: 'catalog/attribute' },
        { id: 'cat13', label: 'catalog/attribute_group' },
        { id: 'cat14', label: 'catalog/bulkimport' },
        { id: 'cat15', label: 'catalog/category' },
        { id: 'cat16', label: 'catalog/category_28dec2020' },
        { id: 'cat17', label: 'catalog/definition' },
        { id: 'cat18', label: 'catalog/download' },
      ];


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
                                            <button >
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
                <hr />

                <section className="Add-Season-open">
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

                                                            {checkboxData.map((checkbox) => (
                                                            <Form.Check
                                                            key={checkbox.id}
                                                            id={checkbox.id}
                                                            label={checkbox.label}
                                                            className={'catlog'}
                                                            checked={selectedCheckboxes.includes(checkbox.id)}
                                                            onChange={() => handleCheckboxChange(checkbox.id)}
                                                            />
                                                            ))}

                                                        </Form>

                                                        </div>
                                                        <div className='catalog-selet'>
                                                            <ul className='catalog-cart'>
                                                                <li>
                                                                    <Link to=''>Select All</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to=''>/</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to=''>Unselect All</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
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
                                                                    {checkboxDataBox.map((checkbox) => (
                                                                        <Form.Check
                                                                        key={checkbox.id}
                                                                        id={checkbox.id}
                                                                        label={checkbox.label}
                                                                        className={'catlog'}
                                                                        checked={selectedCheckboxes2.includes(checkbox.id)}
                                                                        onChange={() => handleCheckboxChangeBox(checkbox.id)}
                                                                        />
                                                                    ))}
                                                                </Form>

                                                        </div>
                                                        <div className='catalog-selet'>
                                                            <ul className='catalog-cart'>
                                                                <li>
                                                                    <Link to=''>Select All</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to=''>/</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to=''>Unselect All</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
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
