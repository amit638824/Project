import React from 'react'

function LatestNews() {
  return (
    <>
    <div className='row py-2'>
      <p className='fs-3 text-center'>Latest <b className='text-mycolor'>News</b></p>
      <div className='col-sm-10 mx-auto'>
        <div className='row'>
          <div className='col-sm-6 mx-auto'>
            <input type='text' className='form-control' placeholder='Search...' />
          </div>
        </div>
        <div className='row py-3'>
          <div className='col-sm-3'>
            <div className="card mx-auto shadow-lg" >
  <div className="card-header text-center bg-mycolor text-light"><h5>News Category</h5></div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
      <div className='card m-1'>
        <div className='row g-0'>
          <div className='col-4'>
            <img src='/images/politics.jpg' className='img-fluid rounded-start categoryimg' />
          </div> 
          <div className='col-8'>
            <p className='text-center pt-1'><b>Politics</b></p>
          </div>
        </div>
      </div>
      </li>
      <li className="list-group-item">
      <div className='card m-1'>
        <div className='row g-0'>
          <div className='col-4'>
            <img src='/images/politics.jpg' className='img-fluid rounded-start categoryimg' />
          </div> 
          <div className='col-8'>
            <p className='text-center pt-1'><b>Politics</b></p>
          </div>
        </div>
      </div>
      </li>
      <li className="list-group-item">
      <div className='card m-1'>
        <div className='row g-0'>
          <div className='col-4'>
            <img src='/images/politics.jpg' className='img-fluid rounded-start categoryimg' />
          </div> 
          <div className='col-8'>
            <p className='text-center pt-1'><b>Politics</b></p>
          </div>
        </div>
      </div>
      </li>
  </ul>
</div>

          </div>
          <div className='col-sm-6'>
            <div className="card mb-3 mx-auto shadow-lg border border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/images/headline2.jpg" className="img-thumbnail rounded-start latestimg" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body p-1">
        <h6 className="card-title m-0">This is a wider card with supporting text below as a natural lead-in</h6>
        <p className="card-text m-0">
          This is a wider card with supporting text below as a natural lead
        </p>
        <p className='m-0'>
        <a className='btn bg-mycolor p-1 text-light'>View More</a>
        <span> Cricket </span>
        <span> Lucknow</span>
        </p>
        <p className="card-text m-0">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3 mx-auto shadow-lg border border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/images/headline2.jpg" className="img-thumbnail rounded-start latestimg" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body p-1">
        <h6 className="card-title m-0">This is a wider card with supporting text below as a natural lead-in</h6>
        <p className="card-text m-0">
          This is a wider card with supporting text below as a natural lead
        </p>
        <p className='m-0'>
        <a className='btn bg-mycolor p-1 text-light'>View More</a>
        <span> Cricket </span>
        <span> Lucknow</span>
        </p>
        <p className="card-text m-0">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
          </div>
          <div className='col-sm-3'>
            <div className="card mx-auto shadow-lg" >
  <div className="card-header text-center bg-mycolor text-light"><h5>City</h5></div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
      <div className='card m-1'>
        <div className='row g-0'>
          <div className='col-4'>
            <img src='/images/politics.jpg' className='img-fluid rounded-start categoryimg' />
          </div> 
          <div className='col-8'>
            <p className='text-center pt-1'><b>Lucknow</b></p>
          </div>
        </div>
      </div>
      </li>
      <li className="list-group-item">
      <div className='card m-1'>
        <div className='row g-0'>
          <div className='col-4'>
            <img src='/images/politics.jpg' className='img-fluid rounded-start categoryimg' />
          </div> 
          <div className='col-8'>
            <p className='text-center pt-1'><b>Politics</b></p>
          </div>
        </div>
      </div>
      </li>
      <li className="list-group-item">
      <div className='card m-1'>
        <div className='row g-0'>
          <div className='col-4'>
            <img src='/images/politics.jpg' className='img-fluid rounded-start categoryimg' />
          </div> 
          <div className='col-8'>
            <p className='text-center pt-1'><b>Lucknow</b></p>
          </div>
        </div>
      </div>
      </li>
  </ul>
</div>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default LatestNews
