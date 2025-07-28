import React from 'react'
import { FaSquareFull } from "react-icons/fa";

const Counter = () => {
  return (
    <>
    <div className='row divcounter bg-light'>
      <div className='col-sm-10 mx-auto'>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='countericon'><FaSquareFull /></div>
            <h1 className='text-center pt-3'>560+</h1>
            <p className='text-center'>Total Area Sq</p>
          </div>
          <div className='col-sm-3'>
            <div className='countericon'><FaSquareFull /></div>
            <h1 className='text-center pt-3'>560+</h1>
            <p className='text-center'>Total Area Sq</p>
          </div>
          <div className='col-sm-3'>
            <div className='countericon'><FaSquareFull /></div>
            <h1 className='text-center pt-3'>560+</h1>
            <p className='text-center'>Total Area Sq</p>
          </div>
          <div className='col-sm-3'>
            <div className='countericon'><FaSquareFull /></div>
            <h1 className='text-center pt-3'>560+</h1>
            <p className='text-center'>Total Area Sq</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Counter
