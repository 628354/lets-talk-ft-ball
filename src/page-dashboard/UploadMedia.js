import React, { useEffect, useState } from "react";
import Menubar from "../dashboard/Menubar";
import { Container, Row, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE,GET_IMAGE,ADD_IMAGE } from "../helper/APIInfo";
import ImagePrevDelete from "./ImagePrevDelete";
import UploadMediaImg from "./UploadMediaImg";
export default function UploadMedia(props) {
const [showModal, setShowModal] = useState(false);
const [folderName, setFolderName] = useState("");
const [folders, setFolders] = useState([]); // Ensure that folders is initialized as an array
const [flag, setFlag]=useState(false)
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [selectedFolder, setSelectedFolder] = useState(null); 
  const [folderImages, setFolderImages] = useState([]);
  const handleFolderNameChange = (e) => setFolderName(e.target.value);

  const handleAddFolder = async () => {
    try {
    
      const response = await apiCall(ADD_IMAGE.image, REQUEST_TYPE.POST,
        {
          folderName: folderName,
        }
      );

      
      if (Array.isArray(response.data)) {
        setFolders((prevFolders) => [...prevFolders, ...response.data]);
      } else {
        setFolders((prevFolders) => [...prevFolders, response.data]);
      }
      fetchFolders();
    
      handleCloseModal();
    } catch (error) {
      console.error("Error creating folder:", error);
    
    }
  };


  const fetchFolders = async () => {
    try {
      const response = await apiCall( GET_IMAGE.get,REQUEST_TYPE.GET);

      //console.log(response.response.data?.details)
      setFolders(response.response.data?.details);
     
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  const handleFolderClick = async (folder) => {
    setSelectedFolder(folder);
console.log(folder);
const folderWithoutSpaces = folder.replace(/\s/g, '')
console.log(folderWithoutSpaces);
    try {
      const response = await apiCall(
        `http://localhost:5000/getImageFolderName/?folderName=${folder}`,
        REQUEST_TYPE.GET
      );
      console.log(response?.response.data?.details);
      response?.response.data?.details.map((item)=>{
        console.log(item);
      })
      setFolderImages(response.response.data);
    } catch (error) {
      console.error("Error fetching folder images:", error);
    }
  };

//  useEffect(()=>{
// handleFolderClick()
//  },[])

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
                              <Link>
                              Home</Link>
                           </li>
                           <li>
                              <i className="ri-arrow-right-s-line"></i>
                           </li>
                           <li>
                              <Link>
                              Media </Link>
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
                        <li class="add-button-cencel"><a href=""><i className="ri-refresh-line"></i></a></li>
                        {/* 
                        <li className='add-button-sec'>
                           <button><i className="ri-delete-bin-line"></i></button>
                        </li>
                        */}
                     </ul>
                  </div>
               </div>
            </Row>
         </Container>
      </section>
      <hr />
      <section className='Add-Season-open'>
         <Container fluid>
            <Row>
               <div className='main_add_season'>
                  <div className='main-ad-sea'>
                     <p><i class="ri-pencil-fill"></i>Add Folder</p>
                  </div>
               </div>
            </Row>
            <Row>
               <div className='col-lg-2 col-sm-2 col-sm-2 pe-0'>
                  <div className='main-media-ponier'>
                     <div className='media-ponite-part'>
                     <div className="px-3 pt-2 styt">
                
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start npmless" id="menu">
                    {
                      folders?.map((item)=>{
                      //  console.log(item);
                        return(  <li>
                          <a href="#media1" data-bs-toggle="collapse" className="nav-link px-0 align-middle"onClick={() => handleFolderClick(item?.folderName)}>
                          <span className='cat-icon'></span> <span className='folder-main'><i className="ri-folder-fill"></i></span> <span className="ms-1 d-none d-sm-inline less_cat">{item?.folderName}</span> </a>
                         
                      </li>)

                      })
                    }
                  
                    
                    
                   
                </ul>
                
            </div>
                     </div>
                  </div>
               </div>
               <div className='col-lg-10 col-sm-10 col-sm-10 ps-0'>
                  <UploadMediaImg  selectedFolder={selectedFolder}/>
               </div>
            </Row>
         </Container>
      </section>
      {/* <section className='media-section'>
         <Container fluid >
           
         </Container>
      </section> */}
   </div>
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
   ////
   {/* 
   <div class="container w-50">
      <div class="panel panel-default">
         <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-list"></i> User List</h3>
         </div>
         <div class="panel-body">
            <form action="https://www.letstalkftball.com/dandt/admin/index.php?route=user/user/delete&amp;user_token=55quPOW8nvob23ilQHS1WTO27j9TE2WW" method="post" enctype="multipart/form-data" id="form-user">
               <div class="table-responsive">
                  <table class="table table-bordered table-hover">
                     <thead>
                        <tr>
                           <td ></td>
                           <td class="text-left"> <a href="#" class="asc">Username</a></td>
                           <td class="text-left"> <a href="#">Status</a></td>
                           <td class="text-left"> <a href="#">Date Added</a></td>
                           <td class="text-right">Action</td>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td class="text-center"> 1</td>
                           <td class="text-left">afafcafeaadmin#1</td>
                           <td class="text-left">Enabled</td>
                           <td class="text-left">10/11/2022</td>
                           <td class="text-right"><a href="https://www.letstalkftball.com/dandt/admin/index.php?route=user/user/edit&amp;user_token=55quPOW8nvob23ilQHS1WTO27j9TE2WW&amp;user_id=6" data-toggle="tooltip" title="" class="btn btn-primary" data-original-title="Edit"><i class="fa fa-pencil"></i></a></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </form>
            <div class="row">
               <div class="col-sm-6 text-left"></div>
               <div class="col-sm-6 text-right">Showing 1 to 5 of 5 (1 Pages)</div>
            </div>
         </div>
      </div>
   </div>
   */}
</div>
);
}