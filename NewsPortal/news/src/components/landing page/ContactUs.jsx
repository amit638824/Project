import React from 'react'
import Navbar from './Navbar';
import   {useLocation} from 'react-router-dom';

const ContactUs = () => {
 const location=useLocation() ;
  return (
    <>
    {location?.pathname!=="/" &&  <Navbar/>}
    ContactUs  <br />
  </>
  )
}
export default ContactUs
