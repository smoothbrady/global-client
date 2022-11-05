import React, { useState } from "react";
import Axios from 'axios'
import { Button } from 'react-bootstrap'
// import { Image } from 'cloudinary-react'

const CloudinaryUploadWidget = ({ handleImageChange }) => {

    const [imageSelected, setImageSelected] = useState('')
    const [picture, setPicture] = useState('')

    const uploadImage = (files) => {
        // console.log(files[0])
        const formData = new FormData ()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "dhobhkks")
        

        Axios.post("https://api.cloudinary.com/v1_1/dtszeeznm/image/upload", formData).then((response) => {
            // console.log(response);
            setPicture(response.data.url)
            handleImageChange(response.data.url)
            // console.log(public_id)
        });
    };


    return (
        <div>
            <input
                type="file"
                onChange={(e) => {setImageSelected(e.target.files[0])}}
            />
            <Button id="upload_widget" className="m-2 cloudinary-button btn-secondary" onClick={uploadImage}
            >
                Upload
            </Button>

            <img 
                style={{width: 200}}
                cloudName="doudmpmlr" 
                // publicId= { picture }
                src = { picture }
            />
        </div>
    );

}

export default CloudinaryUploadWidget;