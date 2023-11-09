import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menubar from '../dashboard/Menubar';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editprivacypolicy() {
  const [aboutData, setAboutData] = useState({
    privacy_policy: '',
    image: ''
  });
  const [imageURL, setImageURL] = useState(''); // State variable to hold the image URL

  const [itemId, setItemId] = useState(0); // Initialize with a default value

  const [isEditing, setIsEditing] = useState(false);


  const handleTextChange = (field, value) => {
    setAboutData({
      ...aboutData,
      [field]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setAboutData({
      ...aboutData,
      image: imageFile,
    });
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   setImageURL(e.target.result);
    // };
    // reader.readAsDataURL(imageFile);
  };
 



  useEffect(() => {
    axios.get('http://localhost:5000/getpolicy')
      .then((response) => {
        const aboutInfo = response.data.policydetails[0];
        setImageURL(aboutInfo.image); // Set the imageURL state with the fetched image URL
        setAboutData(aboutInfo);
        setItemId(aboutInfo._id); // Assuming 'id' is the key for the ID


      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


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

  const handleUpdateData = () => {

    if (!isEditing) return;

    const formData = new FormData();
    formData.append('privacy_policy', aboutData.privacy_policy);
    formData.append('image', aboutData.image);

    axios.post('http://localhost:5000/updatePolicy/' + itemId, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {

        setIsEditing(false); // Disable editing after saving

        // Handle success, e.g., show a success message
      })
      .catch((error) => {
        console.error('Error updating data:', error);
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
                    <h3>Privacy & Usage Terms</h3>
                    <ul className='season-link'>
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>PRIVACY & USAGE TERMS</Link>
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
                      <Link to=""><i className="ri-reply-fill"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className='tab-section'>
          <Container>
            <Row>
              <div className='general-part-home'>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3 generalone"
                >
                  <Tab className='tabevent' eventKey="profile" title={<span><img src={require('../img/en.png')} alt="General" /> General</span>}>
                    <div className='sanson-title'>
                      <div className='edithome'>
                        <div className='bannerimage'>
                          <Form>
                          {imageURL && (
                              <div>
                                <img src={imageURL}  style={{ maxWidth: '20%' }} />
                              </div>
                            )}
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Banner Upload</Form.Label>
                              <Form.Control type="file"  onChange={handleImageChange} />
                            </Form.Group>
                           
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Privacy & Usage Terms Textarea</Form.Label>
                              <ReactQuill className='edit-text' value={aboutData.privacy_policy}
                                onChange={(value) => handleTextChange('privacy_policy', value)} />
                            </Form.Group>
                          </Form>
                          <div className='button-press'>
                            {isEditing ? (
                              <Button onClick={handleUpdateData}>Save</Button>
                            ) : (
                              <Button onClick={() => setIsEditing(true)}>Edit</Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile2" title={<span><img src={require('../img/ar.png')} alt="General" /> العربية</span>}>
                    <div className='sanson-title'>
                      <div className='edithome'>
                        <div className='bannerimage'>
                          <Form>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Banner Upload </Form.Label>
                              <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Privacy & Usage Terms Textarea</Form.Label>
                              <ReactQuill className='edit-text' value={aboutData} onChange={handleTextChange} />
                            </Form.Group>

                          </Form>
                          <div className='button-press'>
                            <Button>Edit</Button>
                            <Button>seve</Button>
                          </div>



                        </div>
                      </div>

                    </div>

                  </Tab>
                </Tabs>
              </div>


            </Row>
          </Container>
        </section>

      </div>
    </div>
  )
}
