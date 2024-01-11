import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../helper/APIInfo';

function UploadMediaComp({ selectedFolder, folderImages,onImageSelect  }) {
  const folder = selectedFolder?.replace(/\s/g, '');
  console.log(folder);
  localStorage.setItem("foldername",folder)
  const [selectedImage, setSelectedImage] = useState(null);
  
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
  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
    console.log('Clicked Image Name:', imageName);
    // Add logic to handle the clicked image name as needed
    // Call the parent callback function with the selected image name
    if (onImageSelect) {
        onImageSelect(imageName);
      }
  };
  return (
    <div className="row">
      <div className="col-lg-10 col-sm-10 col-sm-10 ps-0">
        <div className="up-date-file">
          {/* <Row>
            <div className="col-lg-2 col-md-2 col-sm-6">
              <div className="main-media-folder">
                <div className="file-main-wrapper">
                  <input type="file" name="images" className="file-media-poniter" multiple onChange={uploadImage} />
                  <div className="close-btn">×</div>
                </div>
              </div>
            </div>
          </Row> */}

          <Row>
            {folderImages?.map((item, index) => (
              <div className="col-lg-2 col-md-2 col-sm-6" key={index}>
                <div className="media-folder-image">
                  <img
                    src={`${BASE_URL}${folder}/${item.image}`}
                    alt="earth"
                    className="up-date-img"
                    onClick={() => handleImageClick(item.image)}
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

export default UploadMediaComp;
