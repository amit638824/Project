import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";


const Login = () => {
  return (
    <>
      <div className="container my-5">
        <h2 className="login-title">Login Here</h2>
        <div className="login-box">
          <form>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <div className="input-group">
                <span className="input-group-text"><FaEnvelope /></span>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text"><FaKey /></span>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
            </div>
            <div className="text-center mt-4">
              <input type="submit" className="btn  px-5 btn-login" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
