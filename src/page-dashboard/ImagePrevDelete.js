import React, { useEffect, useState } from 'react';
import { apiCall } from '../helper/RequestHandler';
import { REQUEST_TYPE } from '../helper/APIInfo';

function ImagePrevDelete({selectedFolder}) {
   // console.log(selectedFolder.selectedFolder.folderName);
   const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setImageFiles((previousFiles) => previousFiles.concat(selectedFilesArray));

    // FOR BUG IN CHROME
    event.target.value = '';
  };

  const deleteHandler = (image) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    setImageFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== image)
    );
    URL.revokeObjectURL(image);
  };

  const handleImageUpload = async () => {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append('folderId', selectedFolder._id); // Pass the folder ID
      imageFiles.forEach((file) => {
        formData.append('images', file);
      });

      const response = await apiCall(
        'http://localhost:5000/addImage',
        REQUEST_TYPE.POST,
        formData,
        { 'Content-Type': 'multipart/form-data' }
      );

      // Handle the response as needed (e.g., update UI or show a message)
      console.log(response);

      // Clear the state after successful upload
      setSelectedImages([]);
      setImageFiles([]);
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (uploading) {
      // You can show a loading indicator or disable UI during upload
      console.log('Uploading...');
    }
  }, [uploading]);
    return (
        <section>
        <label>
          + Add Images
          <br />
        
          <input
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </label>
        <br />
  
        <input type="file" multiple />
  
      
  
        <div className="images">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image">
                  <img src={image} height="200" alt="upload" />
                  <button onClick={() => deleteHandler(image)}>
                    delete image
                  </button>
                  <p>{index + 1}</p>
                </div>
              );
            })}
        </div>
      </section>
    );
}

export default ImagePrevDelete;