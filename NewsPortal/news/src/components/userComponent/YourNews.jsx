import React, { useEffect, useState } from 'react'
import Navbar from '../landingpage/Navbar'
import axios from 'axios';
import Swal from 'sweetalert2';
const YourNews = () => {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const userData = JSON.parse(localStorage.getItem('userInfo'))
    const response = await axios.get(`http://localhost:9000/api/user-your-news?userId=${userData?._id}`)
    if (response?.data?.code == 200) {
      setNewsList(response?.data?.data)
    }
  }

  const showDescription=(des)=>{
 Swal.fire({
  text:des,
  icon:"info"
 })
  }

  return (
    <>
      <Navbar />
      <div className="row mt-3">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h1 className='text-center'>Your<span className='text-mycolor'>News</span></h1>
          <table className="table">
            <thead className='table table-dark'>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Media</th>
                <th scope="col">Description</th>
              </tr>  
            </thead>
            <tbody>
              {newsList?.map((item, index) => {  
                return (<>
                  <tr>
                    <th >{item?.title}</th>
                    <td>{item?.category}</td>
                    <td><img height='60' width='100' src={item?.url}/></td>
                    <td onClick={()=>showDescription(item?.desc)} >{item?.desc?.slice(0,15)}...</td>
                  </tr>
                </>)
              })}
            </tbody>
          </table>
           {newsList?.length==0 && <h3 className='text-center'>No Records Found</h3>}
        </div>
        <div className="col-sm-1"></div>
      </div>
    </>
  )
}
export default YourNews
