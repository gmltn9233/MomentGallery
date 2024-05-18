import React, { useState, useEffect } from 'react';
import WaveComponent from './wave';
import './PostNew.css';
import Header from './Header';
import axios from "axios"
import button from "bootstrap/js/src/button";

function PostNew() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [result, setResult] = useState({});



  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
      <>
        <div className="form-container">
          <div className="image-upload">
            <label htmlFor="file-input">
              <img src={image || "https://via.placeholder.com/450"} alt="Upload Placeholder" />
            </label>
            <input id="file-input" type="file" onChange={handleImageChange} style={{ display: 'none' }} />
          </div>
          <div className="text-form">
            <div className='form-logo'>Moment Gallery</div>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" value={title}
                     onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Content:</label>
              <textarea value={content}
                        onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <div className="form-group">
              <label>Genre:</label>
              <input type='text' value="#Genre"
                     onChange={e => setContent(e.target.value)}></input>
            </div>
            <button type="submit">Submit</button>

          </div>
        </div>
      </>
  );
}

export default PostNew;