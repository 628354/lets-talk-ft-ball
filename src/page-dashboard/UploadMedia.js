import React, { useEffect, useState } from "react";
import Menubar from "../dashboard/Menubar";
import { Container, Row, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE } from "../helper/APIInfo";
import ImagePrevDelete from "./ImagePrevDelete";

function UploadMedia(props) {
  const [showModal, setShowModal] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]); // Ensure that folders is initialized as an array
const [flag, setFlag]=useState(false)
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [selectedFolder, setSelectedFolder] = useState(null); 

  const handleFolderNameChange = (e) => setFolderName(e.target.value);

  const handleAddFolder = async () => {
    try {
    
      const response = await apiCall(
        "http://localhost:5000/createfolder",
        REQUEST_TYPE.POST,
        {
          folderName: folderName,
        }
      );

      
      if (Array.isArray(response.data)) {
        setFolders((prevFolders) => [...prevFolders, ...response.data]);
      } else {
        setFolders((prevFolders) => [...prevFolders, response.data]);
      }

    
      handleCloseModal();
    } catch (error) {
      console.error("Error creating folder:", error);
    
    }
  };


  const fetchFolders = async () => {
    try {
      const response = await apiCall(
        "http://localhost:5000/folderGet",
        REQUEST_TYPE.GET
      );

      console.log(response.response.data?.body);
      setFolders(response.response.data?.body);
     
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  const handleFolderClick = (folder) => {
  
    setSelectedFolder(folder);
  };

  return (
    <div>
      <Menubar />
      <div className="right-side-contant py-3">
        <section className="min-section-one">
          <Container fluid>
            <Row>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="season-us">
                  <div className="season-link-part">
                    <h3>Media </h3>
                    <ul className="season-link">
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>Media </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="add-part">
                  <ul className="add-button-min">
                    <li className="add-button-fis">
                      <Link to="" onClick={handleShowModal}>
                        <i className="ri-add-line"></i>
                      </Link>
                    </li>
                    <li class="add-button-cencel">
                      <a href="">
                        <i className="ri-refresh-line"></i>
                      </a>
                    </li>
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

        <section className="Add-Season-open">
          <Container fluid>
            <Row>
              <div className="main_add_season">
                <div className="main-ad-sea">
                  <p>
                    <i class="ri-pencil-fill"></i>Add Folder
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <div>
          <div class="container-fluid mt-5 ">
            <div class="card card-folders">
              <div class=" row p-4" id="foldersGroup ">
               
                 
                    <div className="col-md-3 mt-0 mb-0">
                      <ul className="border-right">
                      
                        {
                        folders.map((item,index)=>{

                          return(<li key={item?._id}  onClick={() => handleFolderClick(item)} style={{ cursor: "pointer" }}>{item?.folderName}</li>)
                          
                        })
                        
                        }
                        
                      </ul>

                    </div>
                    <div className="col-lg-9 col-md-9 col-9 h-100" >
                      <ImagePrevDelete  
                      selectedFolder={selectedFolder} 
                      />
            {/* {selectedFolder && (
              <div>
                
                <p> {selectedFolder.folderName}</p>
                <p> <input type="file"/></p>
                
              </div>
            )} */}
          </div>


                  
               
              </div>
            </div>
          </div>
        </div>
      

      </div>
      {/*  */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFolderName">
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter folder name"
                value={folderName}
                onChange={handleFolderNameChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddFolder}>
            Add Folder
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default UploadMedia;
