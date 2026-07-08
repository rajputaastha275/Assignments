import React from 'react'
import Theme from './Theme'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
         <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            Aastha Rajput
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
         <Link className="nav-link active" to="/">
            Home
        </Link>

        <Link className="nav-link" to="/about">
            About
        </Link>

        <Link className="nav-link" to="/perspective">
            Perspective
        </Link>

        <Link className="nav-link" to="/projects">
            Selected Work
        </Link>

        <Link className="nav-link" to="/Stack">
            Stack
        </Link>
        
        
      </div>
      <div className='ms-auto'>
            <Theme/>
        </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar