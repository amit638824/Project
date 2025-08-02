
import React, { useEffect, useState } from 'react'
import Navbar from '../landingpage/Navbar'
import axios from 'axios'
import Swal from 'sweetalert2'
const AllNews = () => {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:9000/api/admin-all-list`)
    if (response?.data?.code == 200) {
      setNewsList(response?.data?.data)
    }
  }
  const handleApproval = async (id, status) => { 
    const response = await axios.put('http://localhost:9000/api/admin-news-approved', { _id: id, isApproved: !status });
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Approval",
        text: response?.data?.message,
        icon: "success"
      })
      fetchData()
    } else {
      Swal.fire({
        title: "Approval",
        text: response?.data?.message,
        icon: "error"
      })
    }
  }
  return (
    <>
      <Navbar/>
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsList?.map((item, index) => {
                return (<>
                  <tr>
                    <th >{item?.title}</th>
                    <td>{item?.category}</td>
                    <td><img height='60' width='100' src={item?.url} /></td>
                    <td>{item?.desc?.slice(0, 15)}...</td>
                    <td>

                      <button onClick={() => handleApproval(item?._id, item?.isApproved)} className='btn btn-outline-danger  '>{item?.isApproved ? "No" : "Yes"}</button>
                    </td>
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
export default AllNews

