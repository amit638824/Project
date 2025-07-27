import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/landingPage/Navbar';
import Home from './components/landingPage/Home';
function App() { 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* LandingPage */}
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<>about us</>} />
          <Route path='/news' element={<>news</>} />
          <Route path='/gallery' element={<>gallery </>} />
          <Route path='/contact' element={<>contact </>} />
          <Route path='/blog' element={<>blog </>} />
          <Route path='/feedback' element={<>feedback </>} />
          <Route path='/registration' element={<>registration </>} />
          <Route path='/login' element={<>login </>} />
          {/* Admin Route */}
          <Route path='/admin-profile' element={<>admin-profile </>} />
          <Route path='/admin-newslist' element={<>admin-newslist </>} />
          <Route path='/admin-feedback' element={<>admin-feedback </>} />
          <Route path='/admin-contactus' element={<>admin-contactus </>} />
          <Route path='/admin-logout' element={<>admin-logout </>} />
          {/* UserROute */}
          <Route path='/user-profile' element={<>user-profile </>} />
          <Route path='/user-addnews' element={<>user-addnews </>} />
          <Route path='/user-list' element={<>user-list </>} />
          <Route path='/user-alllist' element={<>user-alllist </>} />
          <Route path='/user-logout' element={<>user-logout </>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
