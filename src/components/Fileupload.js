import React, {Fragment, useState} from 'react'
import axios from 'axios';
import {Message} from './Message';
import {Progress} from './Progress';

export const Fileupload = () => {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try{
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers:{'Control-type': 'multipart/form-data'},

        onUploadProgress: progressEvent => {
          console.log(progressEvent);
            setUploadPercentage(parseInt(Math.round(progressEvent.loaded * 100)/ progressEvent.total))

            setTimeout(()=> setUploadPercentage(0), 10000);
        }
      });

      const {filename, location} = res.data;
      console.log(filename, location);
      setUploadedFile({filename, location});
      setMessage('Uploaded Successfully');
    }catch(e){
      console.log(e);
      if(e.response.status === 500){
        setMessage('There was a problem with the server');
      }else{
        setMessage(e.response.data.msg);
      }
    }
  }

  //console.log(uploadedFile);

    return (
      <Fragment>
        {message ? <Message message={message}/> : ""}
          <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
               <input type="file" className='custom-file-input' id="customFile" onChange={onChange}/>
               <label className="custom-file-label" htmlFor="customFile">
                 {fileName}
               </label>
            </div>
            <Progress percentage={uploadPercentage}/>
            <input type="submit" value="Upload" className="btn btn-primary btn-block"/>
          </form>
          {uploadedFile ? 
          <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <h3 className="text-center">{uploadedFile.filename}</h3>
                    <img style={{width: '100%'}} src={uploadedFile.location} alt="" />
                </div>
          </div>: null}
      </Fragment>
    )
}
