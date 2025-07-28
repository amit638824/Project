import React from 'react'
import { FaCar } from "react-icons/fa";

const OurAnimities = () => {
  return (
    <>
    <div className='row py-2'>
      <p className='fs-3 text-center'>Our <b className='text-mycolor'>Aminities</b></p>
      <div className='col-sm-10 mx-auto'>
        <div className='row py-3'>
          <div className='col-sm-3'>
            <div className='card mx-auto shadow-lg border border-0 p-4 boxbtn w-75'>
              <div className='cardic'><FaCar /></div>
              <h3 className='mt-3 text-center'>Parking Space</h3>
              <div className='cardbtn'>&rarr;</div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card mx-auto shadow-lg border border-0 p-4 boxbtn w-75'>
              <div className='cardic'><FaCar /></div>
              <h3 className='mt-3 text-center'>Parking Space</h3>
              <div className='cardbtn'>&rarr;</div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card mx-auto shadow-lg border border-0 p-4 boxbtn w-75'>
              <div className='cardic'><FaCar /></div>
              <h3 className='mt-3 text-center'>Parking Space</h3>
              <div className='cardbtn'>&rarr;</div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card mx-auto shadow-lg border border-0 p-4 boxbtn w-75'>
              <div className='cardic'><FaCar /></div>
              <h3 className='mt-3 text-center'>Parking Space</h3>
              <div className='cardbtn'>&rarr;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OurAnimities
