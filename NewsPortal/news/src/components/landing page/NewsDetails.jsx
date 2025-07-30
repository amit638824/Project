import React from 'react'
import { LuNewspaper } from "react-icons/lu";
function NewsDetails() {
    return (<>
       <div className='row py-2 bg-light'>
        <p className='fs-3 text-center'>News <b className='text-mycolor'>Details</b></p>
        <div className='col-sm-10 mx-auto'>
            <div className='row py-3'>
                <div className='col-sm-10 mx-auto'>
                    <div className='card p-2 border border-0 shadow-lg'>
                        <div className='row g-0'> 
                            <div className='col-sm-4'>
                                <img src='/images/cricket.jpg' className='img-thumbnail w-100' />
                            </div>
                            <div className='col-sm-8 px-2'>
                                <h5>Champions Trophy</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique reprehenderit. Explicabo impedit consectetur nihil voluptate quod, doloremque porro sint ipsam. Quae qui perferendis quo nesciunt sed, assumenda eos tempore.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique reprehenderit. Explicabo impedit consectetur nihil voluptate quod, doloremque porro sint ipsam. Quae qui perferendis quo nesciunt sed, assumenda eos tempore.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique reprehenderit. Explicabo impedit consectetur nihil voluptate quod, doloremque porro sint ipsam. Quae qui perferendis quo nesciunt sed, assumenda eos tempore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>)
}
export default NewsDetails;