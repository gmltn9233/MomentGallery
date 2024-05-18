import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default function HomeMain() {
  return (
      <div className="home-main-container">
        <div className="home-main-wrapper">
          <div className="home-main-wrapper-left">
            <img src="../img2.jpg" alt="미술작품"/>
          </div>
          <div className="login-form-container">
            <div className="login-form-wrapper">
              <h2 className="mg-title">Moment Gallery</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1"
                         className="form-label">Email address</label>
                  <input type="email" className="form-control"
                         id="exampleFormControlInput1"
                         placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword5"
                         className="form-label">Password</label>
                  <input type="password" id="inputPassword5"
                         className="form-control"
                         aria-describedby="passwordHelpBlock"/>
                </div>
                <Link to='./painting'>
                  <button type="button"
                          className="btn btn-dark w-100 mb-3">Login
                  </button>
                </Link>
                <button type="button" className="btn btn-link w-100">Forgot
                  Password?
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}