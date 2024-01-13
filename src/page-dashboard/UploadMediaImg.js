import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../helper/APIInfo';

function UploadMediaImg({ selectedFolder, folderImages, }) {
  const folder = selectedFolder?.replace(/\s/g, '');

  const uploadImage = async (e) => {
    const files = e.target.files;
console.log(files);
    const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }
    formData.append('folderName', folder);
console.log(formData);
    try {
      console.log(formData);
      // const response = await axios.post('https://phpstack-1140615-3967632.cloudwaysapps.com/backend/addImage', formData, {
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
      <div className="col-lg-12 col-sm-12 col-sm-12 pe-0">
        <div className="up-date-file">
          <Row>
            <div className="col-lg-2 col-md-2 col-sm-6">
              <div className="main-media-folder">
                <div className="file-main-wrapper">
                  <input type="file" name="images" className="file-media-poniter" multiple onChange={uploadImage} />
                  <p className="file_icon"><i className="fa fa-cloud-upload" aria-hidden="true"></i></p>
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
                    src={`${BASE_URL}${item.image}`}
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
