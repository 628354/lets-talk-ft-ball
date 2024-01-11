import React, { useEffect, useState } from "react";
import { Modal, Button, Form,Container, Row, } from "react-bootstrap";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE,GET_IMAGE,ADD_IMAGE ,CREATE_FOLDER,GET_FOLDER} from "../helper/APIInfo";
import UploadMediaImg from "./UploadMediaImg";

const MediaModal = ({ show, onHide, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null); 
  const [folderImages, setFolderImages] = useState([]);
  const [folders, setFolders] = useState([]); 
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    onUpload(selectedFile);
    onHide();
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
      const response = await apiCall(
        `http://localhost:5000/foderGetById/${id}`);
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

  return (
    <Modal show={show} onHide={onHide} size="xl">
    <Modal.Header closeButton>
      <Modal.Title>Upload Media</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <section className="Add-Season-open">
        <Container fluid>
        
          <Row>
            <div className="col-lg-2 col-sm-2 col-sm-2 pe-0">
              <div className="main-media-ponier">
                <div className="media-ponite-part">
                  <div className="px-3 pt-2 styt">
                    <ul
                      className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start npmless"
                      id="menu"
                    >
                      {folders?.map((item) => {
                        console.log(item);
                        return (
                          <li key={item?._id}>
                            <a
                              href="#media1"
                              data-bs-toggle="collapse"
                              className="nav-link px-0 align-middle"
                              onClick={() =>
                                handleFolderClick(item?.folderName, item?._id)
                              }
                            >
                              <span className="cat-icon"></span>{" "}
                              <span className="folder-main">
                                <i className="ri-folder-fill"></i>
                              </span>{" "}
                              <span className="ms-1 d-none d-sm-inline less_cat">
                                {item?.folderName}
                              </span>{" "}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-sm-10 col-sm-10 ps-0">
              <UploadMediaImg
                selectedFolder={selectedFolder}
                folderImages={folderImages}
              />
            </div>
          </Row>
        </Container>
      </section>

      {/* <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose a file</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
      </Form> */}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
      <Button variant="primary" onClick={handleUpload}>
        Upload
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default MediaModal;
