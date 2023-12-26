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
              
                <section className='Add-Season-open'>
                    <Container fluid>
                        <Row>
                        <div className='main_add_season'>
                        <div className='main-ad-sea'>
                        <p><i class="ri-pencil-fill"></i>Add Folder</p>
                        </div>
                        </div>
                        </Row>
                    </Container>
                </section>

                <section className='media-section'>
                <Container fluid >
                  <Row>
                  <div className='col-lg-2 col-sm-2 col-sm-2 pe-0'>
                   <div className='main-media-ponier'>
                     <div className='media-ponite-part'>
                     <div className="px-3 pt-2 styt">
                
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start npmless" id="menu">
                    
                    <li>
                        <a href="#media1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <span className='cat-icon'><i className="ri-arrow-down-s-fill"></i></span> <span className='folder-main'><i className="ri-folder-fill"></i></span> <span className="ms-1 d-none d-sm-inline less_cat">catalog</span> </a>
                        <ul className="collapse show nav flex-column ms-1 npmless left-pad" id="media1" data-bs-parent="#menu">
                            <li className="w-100">
                            <a href="#media2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <span className='cat-icon'><i class="ri-arrow-down-s-fill"></i></span>
                            <i className="fs-4 bi-bootstrap"></i>  <span className='folder-main'><i className="ri-folder-fill"></i></span> <span className="ms-1 d-none d-sm-inline less_cat">advertikon</span></a>
                              <ul className="collapse nav flex-column ms-1" id="media2" data-bs-parent="#menu">
                                  <li className="w-100">
                                      <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline less_cat">adk_gdpr</span></a>
                                  </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#media3" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                              <span className='cat-icon'><i className="ri-arrow-down-s-fill"></i></span>
                              <span className='folder-main'><i className="ri-folder-fill"></i></span> <span className="ms-1 d-none d-sm-inline less_cat">Articles</span></a>
                              <ul className="collapse nav flex-column ms-1" id="media3" data-bs-parent="#menu">
                               <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline less_cat">PL</span></a>
                              </li>
                              <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline less_cat">S Pro</span></a>
                            </li>
                          </ul>
                         </li>
                         <li>
                           <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline less_cat">blog</span> </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline less_cat">ckeditor</span> </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline less_cat">d_gdpr_module</span> </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link px-0 align-middle">
                             <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline less_cat">demo</span> </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link px-0 align-middle">
                           <span className='folder-main'><i className="ri-folder-fill"></i></span> <span class="ms-1 d-none d-sm-inline less_cat">leagues</span> </a>
                       </li>
                       <li>
                        <a href="#media4" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                        <span className='cat-icon'><i className="ri-arrow-down-s-fill"></i></span>
                        <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline less_cat">log</span></a>
                        <ul className="collapse nav flex-column ms-1 npmless" id="media4" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Austria</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Belgum</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Botola</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Boundeslega</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Braz</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Croatia</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Czech</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Denmark</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Egy Pro</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">India</span></a>
                            </li><li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Iraq</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Israel</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Laliga logos</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Legu 1</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Netherland</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Portugal</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Premier L</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Portugal</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Portugal</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Portugal</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Portugal</span></a>
                            </li>
                          
                        </ul>
                    </li>
                       <li>
                            <a href="#media5" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <span className='cat-icon'><i className="ri-arrow-down-s-fill"></i></span>
                            <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline">ocdevwizard</span></a>
                          <ul className="collapse nav flex-column ms-1 npmless" id="media5" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Item</span></a>
                            </li>
                          <li>
                                <a href="#" className="nav-link px-0"> <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="d-none d-sm-inline">Item</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                        <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline">page</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                             <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline">slider</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                             <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline">team</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                             <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline">thumbnail</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                             <span className='folder-main'><i className="ri-folder-fill"></i></span>  <span className="ms-1 d-none d-sm-inline">WORLDCUP</span> </a>
                    </li>
                    
                        </ul>
                    </li>
                    
                    
                   
                </ul>
                
            </div>
                     </div>
                   </div>
                  </div>
                  <div className='col-lg-10 col-sm-10 col-sm-10 ps-0'>
                   <div className="up-date-file">
                        <Row>
                        <div className="col-lg-2 col-md-2 col-sm-6">
                         <div className='main-media-folder'>
                         <div class="file-main-wrapper">
                          <input className="file-media-poniter" type="file" name="upload-img" accept="image/*" />
                          <div class="close-btn">×</div>
                        </div>
                      </div>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-6">
                         <div className='media-folder-image'>
                         <img
                          src={require("../img/Banner-559x363.png")}
                          alt="earth"
                          className="up-date-img"
                        />
                        
                      </div>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-6">
                         <div className='media-folder-image'>
                         <img
                          src={require("../img/_(2)-559x363.png")}
                          alt="earth"
                          className="up-date-img"
                        />
                        
                      </div>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-6">
                         <div className='media-folder-image'>
                         <img
                          src={require("../img/_arsenal-559x363.jpg")}
                          alt="earth"
                          className="up-date-img"
                        />
                        
                      </div>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-6">
                         <div className='media-folder-image'>
                         <img
                          src={require("../img/bigest-transfers-559x363.png")}
                          alt="earth"
                          className="up-date-img"
                        />
                        
                      </div>
                     </div>
                     <div className="col-lg-2 col-md-2 col-sm-6">
                         <div className='media-folder-image'>
                         <img
                          src={require("../img/ars 1-559x363.png")}
                          alt="earth"
                          className="up-date-img"
                        />
                        
                      </div>
                     </div>
                        </Row>
                   </div>
                  </div>
                  
                  </Row>
                </Container>
              </section>



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
      {/* <div class="container w-50">
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
<td class="text-left"> <a href="#" class="asc">Username</a>
</td>
<td class="text-left"> <a href="#">Status</a>
</td>
<td class="text-left"> <a href="#">Date Added</a>
</td>
<td class="text-right">Action</td>
</tr>
</thead>
<tbody>
<tr>
<td class="text-center"> 1
</td>
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
</div> */}
        </div>
    );
}

export default UploadMedia;
