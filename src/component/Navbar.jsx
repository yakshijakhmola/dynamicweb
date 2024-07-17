import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";  

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='bg-white shadow-DarkShadow py-5 px-5'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <h5 className='cursor-pointer' onClick={()=> navigate('/')}>Dynamic Displays</h5>
          <ul className='hidden xl:flex xl:items-center xl:gap-x-10'>
            <li className='text-Black font-bold capitalize cursor-pointer' onClick={()=> navigate('/')}><a>Home</a></li>
            <li className='text-Black font-bold capitalize cursor-pointer' onClick={()=> navigate('/about')}><a>About</a></li>
            <li className='text-Black font-bold capitalize cursor-pointer' onClick={()=> navigate('/indoorsignage')}><a>Indoor Signage</a></li>
            <li className='text-Black font-bold capitalize cursor-pointer' onClick={()=> navigate('/outdoorsignage')}><a>Outdoor Signage</a></li>
            <li className='text-Black font-bold capitalize cursor-pointer' onClick={()=> navigate('/solutions')}><a>Solutions</a></li>
            <li className='text-Black font-bold capitalize cursor-pointer' onClick={()=> navigate('/contact')}><a>Contact</a></li>
          </ul>
          <div className='block xl:hidden'><FaBars onClick={()=>setShow(true)} /></div>
        </div>
      </div>
      </div>
      {show && (
        <div className={show ? 'fixed top-0 left-0 w-1/2 h-full bg-LightYellow p-5 transition-all duration-1000 ease-linear' : 'left-0'}>
          <div className='absolute top-8 right-4 text-2xl'><IoClose onClick={()=>setShow(false)}/></div>
          <a onClick={()=>navigate('/')}><h5>Dynamic Displays</h5></a>
          <ul className='mt-10'>
            <li><a className='py-3 block capitalize font-HeadFont border-b border-dotted border-[#0000002e]' onClick={()=>navigate('/')}>Home</a></li>
            <li><a className='py-3 block capitalize font-HeadFont border-b border-dotted border-[#0000002e]' onClick={()=>navigate('/about')}>About</a></li>
            <li><a className='py-3 block capitalize font-HeadFont border-b border-dotted border-[#0000002e]' onClick={()=>navigate('/indoorsignage')}>Indoor Signage</a></li>
            <li><a className='py-3 block capitalize font-HeadFont border-b border-dotted border-[#0000002e]' onClick={()=>navigate('/outdoorsignage')}>Outdoor Signage</a></li>
            <li><a className='py-3 block capitalize font-HeadFont border-b border-dotted border-[#0000002e]' onClick={()=>navigate('/solutions')}>Solutions</a></li>
            <li><a className='py-3 block capitalize font-HeadFont border-b border-dotted border-[#0000002e]' onClick={()=>navigate('/contact')}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar