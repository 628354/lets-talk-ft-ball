import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';

function UploadMediaImg({ selectedFolder, folderImages }) {
  const folder = selectedFolder?.replace(/\s/g, '');

  const uploadImage = async (e) => {
    const files = e.target.files;

    const formData = new FormData();
    formData.append('folderName', folder);

    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    try {
      console.log(formData);
      const response = await axios.post('http://localhost:5000/addImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-10 col-sm-10 col-sm-10 ps-0">
        <div className="up-date-file">
          <Row>
            <div className="col-lg-2 col-md-2 col-sm-6">
              <div className="main-media-folder">
                <div className="file-main-wrapper">
                  <input type="file" name="images" className="file-media-poniter" multiple onChange={uploadImage} />
                  <div className="close-btn">×</div>
                </div>
              </div>
            </div>
          </Row>

          <Row>
            {folderImages?.map((item, index) => (
              <div className="col-lg-2 col-md-2 col-sm-6" key={index}>
                <div className="media-folder-image">
                  <img
                    src={`http://localhost:5000/uploads/${folder}/${item.image}`}
                    alt="earth"
                    className="up-date-img"
                  />
                </div>
              </div>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default UploadMediaImg;
