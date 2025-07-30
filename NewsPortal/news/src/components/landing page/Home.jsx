import React from 'react'
import Slider from './Slider';
import NewsCategory from './NewsCategory';
import NewsDetails from './NewsDetails';
import SignIn from './Login';
import PostNews from '../userComponent/PostNews';
import LatestNews from './LatestNews';
import LatestVideos from './LatestVideos';
import City from './City';
import ImageGallery from './ImageGallery';
import ContactUs from './ContactUs';
import About from './About';
import Navbar from './Navbar';
function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <NewsCategory />
      <NewsDetails /> 
      <LatestNews />
      <LatestVideos />
      < City />
      <ImageGallery />
      <ContactUs />
      < About />







    </>)
}

export default Home
