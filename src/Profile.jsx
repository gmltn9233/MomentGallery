// Profile.js
import React from 'react';
import './Profile.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const getRV = () => {
  return Math.floor(Math.random() * 300) + 1;
}

const r1 = getRV();
const r2 = getRV();



export default function Profile() {
  return (
      <div className="profile-container">
        <header className="profile-header">
          <div className="profile-info">
            <Stack direction="row" spacing={2} style={{marginBottom: '1.2rem'}}>
              <Avatar src="/broken-image.jpg"/>
            </Stack>
            <div className="profile-details" style={{marginBottom: '1.2rem'}}>
              <h2 className="profile-username">Wep ID</h2>
            </div>
            <div className="profile-stats" style={{marginBottom: '1.2rem'}}>
              <span className="profile-stat"><strong>0</strong> 게시물</span>
              <span className="profile-stat"><strong>{r1}</strong> 팔로워</span>
              <span className="profile-stat"><strong>{r2}</strong> 팔로잉</span>
            </div>
            <p className="profile-bio" style={{marginBottom: '1.2rem'}}>홍길동</p>
            <div className="profile-actions">
              <button className="profile-edit-btn">프로필 편집</button>
              <button className="profile-share-btn">프로필 공유</button>
              <button className="profile-more-btn">+</button>
            </div>
          </div>
        </header>

        <div className="grid-container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // camelCase로 수정
          gap: '10px',
          padding: '20px',
          margin: '0'
        }}>
          <div className="grid-item"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszpoqQZ_LNOliBiivT1hzActKUT5Z606dpw&s' /></div>
          <div className="grid-item"><img src='https://practicalpages.wordpress.com/wp-content/uploads/2010/02/starry-night-van-gogh.jpg'/></div>
          <div className="grid-item"><img src='https://i.namu.wiki/i/gT6otd21aSWz1yxEBTAUgM1e1IK0HrfVcG4I10d3isnveagUy749nQRLM9wwm-D2iGacmZLI8Q9XATBjgDnnZojBxbxLWGQGoUrSRM64jb9sIryNEV3UOhDFsTbqGisG2qd18pbdrRF5TjPqj1qlXA.jpg'/></div>
          <div className="grid-item"><img src='https://i.namu.wiki/i/UCctr-eqsf0Topc39ud-0TceHbPQd5Rg-sZEgYQb0HjE_4iWanVS60X8SdEAt0dgkFWoOc5FVgD7JVyDnbGfd8T83OxzbjSu2md4mqLuDrGGoAf5x9EsJ8jbGT2w3pud-aAfZW1VLw8r6ZmzGEBfnw.webp'/></div>
          <div className="grid-item"><img src='https://i.namu.wiki/i/j4B9UyprwbYn1c-UjC3w1jG_97cV4ONad2mkgmrQdg2O0NsX2VOoMg2hFkCyer-_-E3Xk1mEU9-LQV9i8g4_dzIK6WE8SQ1Bb6k5ba2RoPY4H9denSy2WZ6TFBERDq7dVzgmxK19-Fj2bJJA-9j85A.jpg'/></div>
          <div className="grid-item"><img src='https://artlecture.com/data/page/202003/editor_upload_20200311201422_6468.png'/></div>
          <div className="grid-item"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXJ2HwxLhhLRe-RsgeVC7e2EWwai9-U_bpw&s'/></div>
          <div className="grid-item"><img src='https://img.artguru-cdn.com/image/aigc/bf070c0deceb9a091f55d6e3b0c1c508_512_512.webp'/></div>
          <div className="grid-item"><img src='https://img.artguru-cdn.com/image/aigc/141da2459bafc81b508a1a9ed6dcf323_768_768.webp'/></div>
        </div>
      </div>
  );
}