import React from 'react'

const Slider = () => {
  return (
    <>
    <div className='row slider bg-secondary'>
      <div className='col-sm-6 sliderdiv'>
        <p>Real Estate Agency</p>
        <h1>Find your Dream</h1>
        <h1>House by Us</h1>
        <p className='sliderp'>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Nisi expedita ipsa ullam </p>
        <a className='btn btn-danger'>Make an Enquiry</a>
      </div>
      <div className='col-sm-6'>
        <img src='/img/slider.png' className='img-fluid sliderimg w-100' />
      </div>
    </div>
    </>
  )
}

export default Slider
