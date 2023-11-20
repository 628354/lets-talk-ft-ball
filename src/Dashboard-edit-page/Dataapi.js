import React, { useEffect, useState } from 'react';
import Menubar from '../dashboard/Menubar';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';


const sethel = "https://jsonplaceholder.typicode.com/todos";


const handleButtonClick = (content) => {
    console.log(`Button clicked with content: ${content}`);
    // Add your logic here based on the button click
  };

export default function Dataapi() {

    const [poll, setPoll] = React.useState([]);
    React.useEffect(() => {
      axios.get(sethel).then((response) => {
        setPoll(response.data);
      });
    }, []);

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
                                <h3>Edit About</h3>
                                <ul className='season-link'>
                                    <li>
                                        <Link>Home</Link>
                                    </li>
                                    <li>
                                        <i className="ri-arrow-right-s-line"></i>
                                    </li>
                                    <li>
                                        <Link>Edit Home</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className='add-part'>
                            <ul className='add-button-min'>
                                <li className='add-button-fis'>
                                    <Link to=""><i className="ri-save-3-line"></i></Link>

                                </li>
                                <li className='add-button-cencel'>
                                    <Link to="/Leagues"><i className="ri-reply-fill"></i></Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </Row>
            </Container>


        </section>
        <section>
            <Container>
                <Row>

                </Row>
            </Container>
        </section>

        <div className="row">
            {poll.slice(0, 6).map((poll, index, span) => (
            <div className='col-lg-4 col-md-6 col-sm-12' key={poll.id}>
                <div className='en_defintion_contant ar_defintion_contant'>
                <h5><span className='en_number_pass'>{index + 1}</span>{poll.title}</h5>
                <p></p>
                <Button variant="info"  onClick={() => handleButtonClick(span.textContent)}>Click me</Button>
                </div>
            </div>
          ))}
       </div>
      

    </div>
</div>
  )
}
