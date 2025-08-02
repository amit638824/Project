import React from 'react';
import Navbar from './Navbar';
import {useLocation} from 'react-router-dom'
const About = () => {
 const location=useLocation() 
 
  return (
<>
{location?.pathname!=="/" && <Navbar/> }

<div className='row py-2'>
  <p className='fs-3 text-center'>About <b className='text-mycolor'>Us</b></p>
  <div className='col-sm-10 mx-auto'>
    <div className='row py-3'>
      <div className='col-sm-6 pt-3'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, perspiciatis error totam facilis ducimus provident velit, iusto magni voluptatibus qui ea. Ullam omnis vitae beatae officia expedita libero commodi id?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente eum asperiores iusto obcaecati accusamus ea esse alias doloribus quia nostrum, vero reiciendis necessitatibus atque ad quibusdam quod praesentium accusantium!</p>
      </div>
      <div className='col-sm-6'>
        <iframe className='w-100' height="315" src="https://www.youtube.com/embed/by80uSmUvpM?si=eGuI3ojvfgLOdgR5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-4'>
        <img src='/images/headline1.jpg' className='img-thumbnail aboutimg w-100' />
      </div>
      <div className='col-sm-8 pt-2'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nisi est architecto. Aspernatur mollitia, ducimus ratione pariatur at non ea. Non labore eveniet numquam vitae, facilis nihil asperiores nulla eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias eaque molestiae blanditiis quibusdam cumque assumenda porro, similique sunt modi iure fugiat pariatur maiores, esse vero magni doloremque vitae odit!</p>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad enim earum sunt provident velit iusto quaerat exercitationem commodi totam fugiat quae repellat nisi doloribus, at in tempore molestiae? Enim.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit maiores nisi expedita nam voluptatem quia quae? Corporis sapiente odit recusandae illum quaerat eveniet nihil pariatur, incidunt rerum, aut est?
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div className='row py-3'>
      <p className='fs-3 text-center '>Our Vision <b className='text-mycolor'>& Mission</b></p>
      <div className='col-sm-12'>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto voluptatem molestiae veniam, deleniti labore a similique ipsa iste? Consectetur iusto, sed officiis facilis officia quasi adipisci dolorem impedit repudiandae!</p>
      </div>
     
    </div>
  </div>
</div>
</>
  )
}
export default About
 