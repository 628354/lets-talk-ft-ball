import React, { useEffect } from 'react';
import Menubar from '../dashboard/Menubar';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState } from 'react';
import { apiCall } from '../helper/RequestHandler';
import { REQUEST_TYPE ,DEFINATION} from '../helper/APIInfo';

export default function Editdefinition() {
const [defination,setDefination]=useState([]);

  const [lgShow, setLgShow] = useState(false);

    const [text, setText] = useState('');

    const handleTextChange = (value) => {
      setText(value);
    };
  
    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ];
  
    const modules = {
      toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }, { 'header': '5' }, { 'header': '6' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ['link', 'image', 'video'],
      ],
    };


  const deleteClick = () => {
    alert('Do you want to delete?');
  };

  const getAllDefinition = async ()=>{
    const data =[]
    const response = await apiCall(DEFINATION.finden,REQUEST_TYPE.GET)
    console.log(response.response?.data?.body);
    response.response?.data?.body?.map((item)=>{
      console.log(item?.en);
      // setDefination(item?.en);
      data.push(item?.en)
    })
    setDefination(data);
  }
  useEffect(()=>{
    getAllDefinition();

  },[])
 
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
                  <h3>Definition</h3>
                  <ul className='season-link'>
                    <li>
                      <Link>Home</Link>
                    </li>
                    <li>
                      <i className="ri-arrow-right-s-line"></i>
                    </li>
                    <li>
                      <Link>Definition</Link>
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
                <h6><i className="ri-list-check"></i> Defination List</h6>
              </div>
              <Table bordered hover className='tablepress'>
                <thead>
                  <tr>
                   <th>SQ</th>
                    <th>Definition Type</th>
                    <th>Content</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='table-list-one'>
                
                 {
                  defination?.map((item,index)=>{
                    console.log(item);
                    return(
                    <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{item?.type}</td>
                    <td>{item?.content}</td>                  
                    
                    <td>
                      <div className='add-button-fis'>
                        <ul className="but-delet">
                          <li>
                            <Link to={`/EditTeams/`}>
                              <i className="ri-pencil-fill"></i>
                            </Link>
                          </li>
                          <li className="add-button-sec">
                            <button >
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>)
                  })
                 }
                   
                 
                </tbody>
              </Table>
             
            </div>
          </Row>
        </Container>
      </section>
    </div>
  </div>


  )
}
