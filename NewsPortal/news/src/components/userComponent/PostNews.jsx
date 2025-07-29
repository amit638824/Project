import React from 'react'
import Navbar from '../landing page/Navbar'


const PostNews = () => {
  return (
    <>
    <Navbar/>
      <div className="container-fluid postnewsBox">
        <div className='border-2 postnewsContainer rounded shadow-sm' style={{ backgroundColor: "#fff" }}>
          <h3 className='text-dark fw-bold mb-0'>Post <span style={{ color: "maroon" }}>News</span></h3>
          <hr className='w-25 bg-success mb-3 mt-2' />

          <form action="">
            <div className='mb-2'>
              <label htmlFor="title" className='form-label fw-bold'>Title</label>
              <input type="text" id='title' name='title' placeholder='Enter your title' className='form-control' />
            </div>

            <div className='mb-2'>
              <label htmlFor="description" className='form-label fw-bold'>Description</label>
              <input type="text" id='description' name='description' placeholder='Enter your description' className='form-control' />
            </div>

            <div className='mb-2'>
              <label htmlFor="mediaType" className='form-label fw-bold'>Media Type</label>
              <select name="mediaType" id="mediaType" className='form-select'>
                <option value="">Select media type</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>

            <div className='mb-2'>
              <label htmlFor="mediaUrl" className='form-label fw-bold'>Media Url</label>
              <input type="text" id='mediaUrl' name='mediaUrl' placeholder='Enter your media URL' className='form-control' />
            </div>

            <div className='mb-2'>
              <label htmlFor="category" className='form-label fw-bold'>Category</label>
              <select name="category" id="category" className='form-select'>
                <option value="">Category</option>
                <option value="crime">Crime</option>
                <option value="politics">Politics</option>
                <option value="sports">Sports</option>
                <option value="health">Health</option>
              </select>
            </div>

            <p className='text-center'>
              <button className='btn text-light rounded mt-2 fw-bold' style={{ backgroundColor: "maroon" }}>
                Post News
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostNews;
