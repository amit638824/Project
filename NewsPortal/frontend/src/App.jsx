import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/landingPage/Navbar';
import Home from './components/landingPage/Home';
import Login from './components/landingPage/Login';
import AboutUs from './components/landingPage/AboutUs';
import NewsCategory from './components/landingPage/NewsCategory';
import ImageGallery from './components/landingPage/ImageGallery';
import ContactUs from './components/landingPage/ContactUs';
import UserRegister from './components/landingPage/UserRegister';
import EditProfile from './components/adminComponent/EditProfile';
import AllNews from './components/adminComponent/AllNews';
import AdminContactUsList from './components/adminComponent/AdminContactUsList';
import AdminLogout from './components/adminComponent/AdminLogout';
import UserEditProfile from './components/userComponent/EditProfle';
import PostNews from './components/userComponent/PostNews';
import YourNews from './components/userComponent/YourNews';
import UserAllNewsList from './components/userComponent/UserAllNewsList';
import UserLogout from './components/userComponent/UserLogout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* LandingPage */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/news' element={<NewsCategory />} />
          <Route path='/gallery' element={<ImageGallery />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/registration' element={<UserRegister />} />
          <Route path='/login' element={<Login />} />
          {/* Admin Route */}
          <Route path='/admin-profile' element={<EditProfile />} />
          <Route path='/admin-newslist' element={<AllNews />} />
          <Route path='/admin-contactus' element={<AdminContactUsList />} />
          <Route path='/admin-logout' element={<AdminLogout />} />
          {/* UserROute */}
          <Route path='/user-profile' element={<><UserEditProfile /> </>} />
          <Route path='/user-addnews' element={<PostNews />} />
          <Route path='/user-list' element={<YourNews />} />
          <Route path='/user-alllist' element={<UserAllNewsList />} />
          <Route path='/user-logout' element={<UserLogout />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App