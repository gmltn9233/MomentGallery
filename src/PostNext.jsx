import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostNext.css'; // 스타일을 위한 CSS 파일
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WaveComponent from './wave';
import Header from './Header';
import data from './data';
import axios from "axios";

function PostNext() {
  const [gathers, setGathers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:8080/works');
        setGathers(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);



  const getRandom = () => {
    return Math.floor(Math.random() * 8) + 1;
  }


  let idx =getRandom();
  let idx1=getRandom()%7;
  const goNext = () => {
    navigate("/cancel");
  };

  if (gathers.length === 0) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
      <div className="post-next">
        <div className="content">
          <div className="left-section">
            <div className='profile'>
              <div className='profile-image'></div>
              <div className='profile-name'>@{data[idx1].username}</div>
              <div className='profile-name'>{data[idx1].title}</div>
              <button className="subscribe-button">구독</button>
            </div>
            <div className='post-title'>{gathers[idx].title}</div>
            <div className="post-more">{gathers[idx].detail}</div>
          </div>
          <div className='video-container'>
            <div className="video-placeholder">
              <img src={gathers[idx].link} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'

              }}/>
            </div>
          </div>
          <div className="right-section">
            <button className="like-button" style={{marginBottom:'1.5rem'}}><FavoriteIcon/></button>
            <button className="share-button" style={{marginBottom:'1.5rem'}}><ShareIcon/></button>
            <button className="down-button" onClick={goNext}>
              <ArrowDownwardIcon/></button>
          </div>
          <div className='upDown-section'>
          </div>
        </div>
      </div>
  );
}

export default PostNext;
