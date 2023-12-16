import React, { useState } from 'react';
import Menubar from '../dashboard/Menubar';
import { Container, Row , Modal, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apiCall } from '../helper/RequestHandler';

function UploadMedia(props) {
    const [showModal, setShowModal] = useState(false);
  const [folderName, setFolderName] = useState('');

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFolderNameChange = (e) => setFolderName(e.target.value);

  const handleAddFolder = () => {
    
    console.log('Folder Name:', folderName);
    setFolderName("")

    // Close the modal
    handleCloseModal();
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
                    <h3>Media </h3>
                    <ul className='season-link'>
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
                <div className='add-part'>
                  <ul className='add-button-min'>
                    <li className='add-button-fis'>
                      <Link to="" onClick={handleShowModal}><i className="ri-add-line"></i></Link>
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
              <Form.Control type="text" placeholder="Enter folder name" value={folderName} onChange={handleFolderNameChange} />
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