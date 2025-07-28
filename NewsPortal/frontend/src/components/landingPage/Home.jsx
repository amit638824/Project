import React from 'react'
import Slider from './Slider';
import NewsCategory from './NewsCategory';
import NewsDetails from './NewsDetails';
import LatestNews from './LatestNews';
import LatestVideos from './LatestVideos';
import City from  './City';
import ImageGallery from './ImageGallery';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Feedback from  './Feedback';
import Footer from './Footer'
const Home = () => {
  return (
    <>
    <Slider/>
<NewsCategory/>
<NewsDetails/>
<LatestNews/>
<LatestVideos/>
<City/>
<ImageGallery/>
<ContactUs/>
<AboutUs/>
<Feedback/>
<Footer/>
    </>
  )
}

export default Home