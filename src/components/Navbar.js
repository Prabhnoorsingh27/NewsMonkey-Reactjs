import React from 'react'
import { Link } from "react-router-dom";

const Navbar =()=>{

    return (
        <nav className="navbar fixed-top bg-dark navbar-expand-lg navbar-dark">
        {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> */}
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  style={{background: 'dimgrey', border: '1px solid black'}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-light" to="/About">About</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/technology">Technology</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }


export default Navbar
