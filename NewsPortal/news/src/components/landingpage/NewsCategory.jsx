import React ,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import   {useLocation} from 'react-router-dom';
import axios from 'axios';
function NewsCategory() {
  const location=useLocation()
 const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/top-ten-news');
    if (response?.data?.code == 200) {
      setData(response?.data?.data)
    }
  }

  return (
    <>
    {location?.pathname!=="/" &&  <Navbar/>}
      <div className='row py-2'>
        <p className='text-center fs-3'>News <b className='text-mycolor'>Category</b></p>
        <div className='col-sm-10 mx-auto'>
          <div className='row py-3'>
            <div className='col-sm-2 category'>
              <a href='#'>
                <div className="card mx-auto shadow-lg catcard border border-0">
                  <img src="/images/education.jpg" className="card-img-top img-fluid catimg" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title text-center m-0">Education</h6>
                  </div>
                </div>
              </a>

            </div>
            <div className='col-sm-2'>
              <div className="card mx-auto shadow-lg catcard border border-0">
                <img src="/images/education.jpg" className="card-img-top img-fluid catimg" alt="..." />
                <div className="card-body">
                  <h6 className="card-title text-center m-0">Education</h6>
                </div>
              </div>

            </div>
            <div className='col-sm-2'>
              <div className="card mx-auto shadow-lg catcard border border-0">
                <img src="/images/education.jpg" className="card-img-top img-fluid catimg" alt="..." />
                <div className="card-body">
                  <h6 className="card-title text-center m-0">Education</h6>
                </div>
              </div>

            </div>
            <div className='col-sm-2'>
              <div className="card mx-auto shadow-lg catcard border border-0">
                <img src="/images/education.jpg" className="card-img-top img-fluid catimg" alt="..." />
                <div className="card-body">
                  <h6 className="card-title text-center m-0">Education</h6>
                </div>
              </div>

            </div>
            <div className='col-sm-2'>
              <div className="card mx-auto shadow-lg catcard border border-0">
                <img src="/images/education.jpg" className="card-img-top img-fluid catimg" alt="..." />
                <div className="card-body">
                  <h6 className="card-title text-center m-0">Education</h6>
                </div>
              </div>

            </div>
            <div className='col-sm-2'>
              <div className="card mx-auto shadow-lg catcard border border-0">
                <img src="/images/education.jpg" className="card-img-top img-fluid catimg" alt="..." />
                <div className="card-body">
                  <h6 className="card-title text-center m-0">Education</h6>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewsCategory
