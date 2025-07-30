import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import NavBar from './NavBar';
const UserRegister = () => {
  return (
    <> 
      <NavBar/>
      <div className="container my-5">
        <h2 className="text-center">Register Here</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Your Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdCall /></span>
                      <input type="tel" className="form-control" placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <select className="form-select">
                      <option selected>Select your country</option>
                      <option>India</option>
                      <option>USA</option>
                      <option>California</option>
                      <option>Afghanistan	Asia</option>
                      <option>Albania	Europe</option>
                      <option>Algeria	Africa</option>
                      <option>American Samoa	Oceania</option>
                      <option>Andorra	Europe</option>
                      <option>Angola	Africa</option>
                      <option>Anguilla	Caribbean</option>
                      <option>Antigua and Barbuda	Caribbean</option>
                      <option>Argentina	South America</option>
                      <option>Armenia	Asia</option>
                      <option>Aruba	Caribbean</option>
                      <option>Australia	Oceania</option>
                      <option>Austria	Europe</option>
                      <option>Azerbaijan	Asia</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <select className="form-select">
                      <option selected>Select your state</option>
                      <option>Maharashtra</option>
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chattishgarh</option>
                      <option>Goa</option>
                      <option>Gujrat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jharkhand</option>
                      <option>Karnatka</option>
                      <option>Kerla</option>
                      <option>Manipur</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>

                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <select className="form-select">
                      <option selected>Select your city</option>
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Adoni</option>
                      <option>Amaravati</option>
                      <option>Anantapur</option>
                      <option>Chandragiri</option>
                      <option>Chittoor</option>
                      <option>Dowlaiswaram</option>
                      <option>Eluru</option>
                      <option>Guntur</option>
                      <option>Kadapa</option>
                      <option>Kakinanda</option>
                      <option>Kurnool</option>
                      <option>Machilipatnam</option>
                      <option>Nagarjunakonda</option>
                      <option>Rajahmundry</option>
                      <option>Srikakulam</option>
                      <option>Tirupati</option>
                      <option>Vijayawada</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Profile Picture</label>
                    <div className="input-group">
                      <span className="input-group-text"><MdAddPhotoAlternate /></span>
                      <input type="file" className="form-control" />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn  px-5 btn-login">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default UserRegister
