import React from 'react'
import { IoNewspaperSharp } from "react-icons/io5";
function Slid() {
  return (<>
 
 <div className='row slider'>
  <div className='col-sm-8 p-0'>
    <div id="carouselExample" className="carousel slide" data-bs-ride='carousel'>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval='100'>
      <img src="/images/news slider2.jpg" className="d-block w-100 img-fluid sliderimg" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/images/news slider3.jpg" className="d-block w-100 img-fluid sliderimg" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/images/news slider.jpg" className="d-block w-100 img-fluid sliderimg" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  </div>
  <div className='col-sm-4 headmarquee'>
    <h3 className='text-center bg-light'>Top 10 News <b className='text-mycolor'>Headline</b></h3>
    <marquee direction="up" className='headline' behavior="alternate">
      <div className="card mb-3 mx-auto shadow-lg border border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/images/headline1.jpg" className="img-fluid rounded-start headlineimg" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body p-1">
        <p className="card-text m-0">
          <b>This is a wider card with supporting text below as a natural lead.</b>
        </p>
        <p className='m-0'><a className='btn bg-mycolor text-light p-1'>View More </a></p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

 <div className="card mb-3 mx-auto shadow-lg border border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/images/headline1.jpg" className="img-fluid rounded-start headlineimg" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body p-1">
        <p className="card-text m-0">
          <b>This is a wider card with supporting text below as a natural lead.</b>
        </p>
        <p className='m-0'><a className='btn bg-mycolor text-light p-1'>View More </a></p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
 <div className="card mb-3 mx-auto shadow-lg border border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/images/headline1.jpg" className="img-fluid rounded-start headlineimg" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body p-1">
        <p className="card-text m-0">
          <b>This is a wider card with supporting text below as a natural lead.</b>
        </p>
        <p className='m-0'><a className='btn bg-mycolor text-light p-1'>View More </a></p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
 <div className="card mb-3 mx-auto shadow-lg border border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/images/headline1.jpg" className="img-fluid rounded-start headlineimg" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body p-1">
        <p className="card-text m-0">
          <b>This is a wider card with supporting text below as a natural lead.</b>
        </p>
        <p className='m-0'><a className='btn bg-mycolor text-light p-1'>View More </a></p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
    </marquee>
  </div>
 </div>

  </>)
}
export default Slid;