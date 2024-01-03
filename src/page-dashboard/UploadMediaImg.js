import React from 'react';
import { Container, Row, Modal, Button, Form } from "react-bootstrap";
function UploadMediaImg({selectedFolder}) {
    console.log(selectedFolder );
    return (
      <div className='row'>
      <div className='col-lg-10 col-sm-10 col-sm-10 ps-0'>
             <div className="up-date-file">
                  <Row>
                      {/* <div>{selectedFolder.folderName}</div> */}
                  <div className="col-lg-2 col-md-2 col-sm-6">
                   <div className='main-media-folder'>
                   <div class="file-main-wrapper">
                    <input type="file" name="upload-img" className='file-media-poniter' accept="image/*" />
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
  </div>
    );
}

export default UploadMediaImg;