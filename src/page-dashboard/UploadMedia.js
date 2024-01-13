import React, { useEffect, useState } from "react";
import Menubar from "../dashboard/Menubar";
import { Container, Row, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE,GET_IMAGE,ADD_IMAGE ,CREATE_FOLDER,GET_FOLDER} from "../helper/APIInfo";
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
    const folderNameWithoutSpaces = folderName.replace(/\s/g, '')
    try {
    
      const response = await apiCall(CREATE_FOLDER.create, REQUEST_TYPE.POST,
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
      const response = await apiCall( GET_FOLDER.get,REQUEST_TYPE.GET);
      console.log(response.response?.data?.body)
      setFolders(response.response?.data?.body);
     
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);




  const handleFolderClick = async (folder,id) => {
    setSelectedFolder(folder);
console.log(folder);

console.log(id);
const folderWithoutSpaces = folder.replace(/\s/g, '')
console.log(folderWithoutSpaces);

    // try {
    //   const response = await apiCall(
    //     `http://localhost:5000/getImageFolderName/?folderName=${folder}`,
    //     REQUEST_TYPE.GET
    //   );
    //   console.log(response?.response.data?.details);
    //   response?.response.data?.details.map((item)=>{
    //     console.log(item);
    //   })
    //   setFolderImages(response.response.data);
    // } catch (error) {
    //   console.error("Error fetching folder images:", error);
    // }
    try {
      const data =[]
      // const response = await apiCall(`https://phpstack-1140615-3967632.cloudwaysapps.com/backend/foderGetById/${id}`);
      const response = await apiCall(`http://localhost:5000/foderGetById/${id}`);
      console.log(response.response?.data?.body);
      response.response?.data?.body?.map((item)=>{
        item.image.map((img)=>{
          console.log(img);
          data.push({
            "image":img
          })
        })
       
        console.log(item);
        
      })
      console.log(data);
      setFolderImages(data)
     // setFolderImages(response.response.data);
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
               <div className='col-lg-2 col-sm-2 col-sm-2 p-0'>
                  <div className='main-media-ponier'>
                     <div className='media-ponite-part'>
                     <div className="px-3 pt-2 styt">
                
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start npmless" id="menu">
                    {
                      folders?.map((item)=>{
                        console.log(item);
                        return(  <li key={item?._id}>
                          <a href="#media1" data-bs-toggle="collapse" className="nav-link px-0 align-middle"onClick={() => handleFolderClick(item?.folderName,item?._id)}>
                          <span className='cat-icon'></span> <span className='folder-main'><i className="ri-folder-fill"></i></span> <span className="ms-1 d-none d-sm-inline less_cat">{item?.folderName}</span> </a>
                         
                      </li>)

                      })
                    }
                  
                    
                    
                   
                </ul>
                
            </div>
                     </div>
                  </div>
                  </div>
                  <div className='col-lg-10 col-sm-10 col-sm-10 ps-0 folder-color'>
                 <UploadMediaImg  selectedFolder={selectedFolder} folderImages={folderImages}/>
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
  
  
</div>
);
}