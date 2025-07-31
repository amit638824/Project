import React from 'react';
import Navbar from './Navbar';
import {useLocation} from 'react-router-dom'
const About = () => {
 const location=useLocation() 
 
  return (
<>
{location?.pathname!=="/" && <Navbar/> }

About  <br />
</>
  )
}
export default About
 