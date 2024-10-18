import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
   <div div className='bg-green-600'>
      <div style={{ marginTop: '80px' }} className='grid grid-cols-4  '>
        <div className="text-white">
          <h1 className='ms-5 font-extrabold text-3xl'>      <Link to={'/'}><i class="fa-solid fa-bowl-food"></i>E Cart</Link> </h1>
          <p className='ms-10 pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quidem, corporis quas accusamus, excepturi hic blanditiis ratione cupiditate iste voluptate voluptatem, autem voluptas doloremque aperiam repellat? Assumenda pariatur sed excepturi?</p>
        </div>
        
        <div style={{paddingTop:'20px' , fontSize:'20px'}} className='text-white ms-5 ps-5'>
          <h1 className=' font-bold text-center'>Link</h1>
          <h5 className=' pt-5 text-center' >Home</h5>
          <h5 className=' pt-1 text-center me-5 ' >contact</h5>
          <h5 className=' pt-1 text-center ms-3' >blog</h5>
    </div>
    <div style={{paddingTop:'20px' , fontSize:'20px'}} className='text-white ms-5 ps-5'>
          <h1 className=' font-bold '>Guides</h1>
          <p className=' pt-5 ' >React</p>
          <h5 className=' pt-1  ' >ReactBoostrap</h5>
          <h5 className=' pt-1  ' >Routing</h5>
    </div>

        
        <div style={{paddingTop:'20px' , fontSize:'20px'}} className='text-white  me-30 font-bold '>
          <h1 className='font-bold'>Contact Us</h1>
          <input className='mt-10 rounded text-black' type="text" />
          <div className="flex justify-content-center">
            
          </div>
        </div>
      </div>
      <p className='text-center text-white'>Copyright © 2024 FF Strore Luminar Jan24 Batch. Built with React.</p>
      <div className="text-center">
        
      </div>
   </div>
  )
}

export default Footer