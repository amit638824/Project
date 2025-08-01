import React from 'react'

function Footer() {
  return (
  <>
  <div className='row footer'>
    <div className='col-sm-10 mx-auto'>
      <div className='row py-3'>
        <div className='col-sm-4 pt-2 px-1'>
          <a href='#'><img className='img-fluid footerlogo' /></a>
          <a href='#'><img className='img-fluid footerlogo' /></a>
          <a href='#'><img className='img-fluid footerlogo' /></a>
          <a href='#'><img className='img-fluid footerlogo' /></a>
        </div>
        <div className='col-sm-4 p-2 text-light'>
          <p className='footertext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum sunt enim cumque pariatur deserunt laudantium, dolorum distinctio, nam illo voluptate corrupti laborum accusantium eligendi debitis accusamus veritatis suscipit consequuntur?</p>
        </div>
        <div className='col-sm-4 p-2'>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.5198408855654!2d80.9639843062698!3d26.898376948861006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995785d5f7f1a5%3A0xffa47f1efe103f0d!2sTechpile%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1754024828914!5m2!1sen!2sin"
  className='w-100'
  height={250}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>
    </div>
  </div>
  <div className='row bfooter'>
    <div className='col-sm-12 text-light text-center'>
      <span>Design and Developed by ABC XYZ &copy; <a href='https://www.techpile.in'>Techpile Technology</a></span>
    </div>
  </div>
  </>
  )
}

export default Footer

