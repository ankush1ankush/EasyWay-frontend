import React, { useState } from 'react';

const UploadFile =(props)=>{
    
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const handleSubmit= async (e)=>{

        e.preventDefault();
        try{

        }
        catch(error){

        }
    };

    return (

        <div className="upload">
         <form onSubmit={handleSubmit}>
          
         <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
         </form>
        </div>
    )
    

}

export default UploadFile;