import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='section bg-DarkYellow'>
        <div className="container">
          <div className="grid-cols-9 place-items-center">
            <div className='flex items-center justify-center flex-col'>
              <a><h4>Dynamic Displays</h4></a>
              <ul className='flex items-center justify-center gap-x-5 mt-5 flex-wrap'>
                <a onClick={()=>navigate('/')}>Home</a>
                <a onClick={()=>navigate('/about')}>About</a>
                <a onClick={()=>navigate('/indoorsignage')}>Indoor Signage</a>
                <a onClick={()=>navigate('/outdoorsignage')}>Outdoor Signage</a>
                <a onClick={()=>navigate('/solutions')}>Solutions</a>
                <a onClick={()=>navigate('/contact')}>Contact</a>
              </ul>
              <ul className='flex items-center justify-center gap-x-5 mt-5'>
                <a href='tel: +91 9876543210'>+91 9876543210</a>
                <a href='mailto: info@gmail.com'>info@gmail.com</a>
              </ul>
              <div className='flex items-center justify-center gap-x-5 mt-5'>
                <a className='text-xl w-10 h-10 bg-white shadow-DarkShadow flex items-center justify-center rounded-full' href=""><FaFacebookF /></a>
                <a className='text-xl w-10 h-10 bg-white shadow-DarkShadow flex items-center justify-center rounded-full' href=""><FaInstagram /></a>
                <a className='text-xl w-10 h-10 bg-white shadow-DarkShadow flex items-center justify-center rounded-full' href=""><FaTwitter /></a>
                <a className='text-xl w-10 h-10 bg-white shadow-DarkShadow flex items-center justify-center rounded-full' href=""><FaLinkedinIn /></a>
                <a className='text-xl w-10 h-10 bg-white shadow-DarkShadow flex items-center justify-center rounded-full' href=""><FaGoogle /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;