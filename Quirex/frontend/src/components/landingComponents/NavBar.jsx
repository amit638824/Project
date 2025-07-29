import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm ">
        <div className="container">
          <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
            <img src="/img/favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>QUIREX</b>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-5 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/property">Property</Link></li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <Link to='/register'>  <button className=" btn1 px-4 py-2  ">Registration</button></Link>
              <Link to='/login'> <button className=" btn1  px-4 py-2 ">Login</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
