import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import PostNext from './PostNext';
import PostNew from './PostNew';
import WaveComponent from './wave';
import HomeMain from './HomeMain';
import Header from './Header';
import Profile from "./Profile";



function App() {



  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeMain />}/>
        <Route path='/next' element={<PostNext />}/>
        <Route path='/literature' element={<PostNext />}/>
        <Route path='/painting' element={<PostNext />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/upload' element={<PostNew />} />
        <Route path='/cancel' element={<WaveComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
