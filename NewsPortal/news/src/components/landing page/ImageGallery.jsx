import React from 'react'
import Navbar from './Navbar'
import   {useLocation} from 'react-router-dom';

const ImageGallery = () => {
  const location=useLocation()
  return (
    <>
    {location?.pathname!=="/" &&  <Navbar/>}
      ImageGallery <br />
    </>
  )
}
export default ImageGallery
