import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const SocialLink =[
    {
      id:1,
      Social_links: "",
      Social_icon: <FaFacebookF />
    },
    {
      id:2,
      Social_links: "",
      Social_icon: <FaInstagram />
    },
    {
      id:3,
      Social_links: "",
      Social_icon: <FaTwitter />
    },
    {
      id:4,
      Social_links: "",
      Social_icon: <FaLinkedinIn />
    },
    {
      id:5,
      Social_links: "",
      Social_icon: <FaGoogle />
    }
  ]
  return (
    <>
      <div className='section bg-Black'>
        <div className="container">
          <div className="grid-cols-9 place-items-start xl:place-items-center">
            <div className='flex items-center justify-start xl:justify-center flex-col'>
              <a onClick={'/'}><img src='./white-logo.png' className='w-40 xl:w-52'/></a>
              <ul className='flex items-center justify-start xl:justify-center gap-x-5 mt-5 flex-wrap'>
                <a className='text-White' onClick={()=>navigate('/')}>Home</a>
                <a className='text-White' onClick={()=>navigate('/about')}>About</a>
                <a className='text-White' onClick={()=>navigate('/indoorsignage')}>Indoor Signage</a>
                <a className='text-White' onClick={()=>navigate('/outdoorsignage')}>Outdoor Signage</a>
                <a className='text-White' onClick={()=>navigate('/solutions')}>Solutions</a>
                <a className='text-White' onClick={()=>navigate('/contact')}>Contact</a>
              </ul>
              <ul className='flex items-center justify-start xl:justify-center flex-wrap gap-x-5 mt-5'>
                <a className='text-white' href='tel: +64212815009'>+64 21 281 5009</a>
                <a className='text-white' href='mailto: Sales@dynamicdisplays.co.nz'>Sales@dynamicdisplays.co.nz</a>
              </ul>
              <div className='flex items-center justify-center gap-x-0 xl:gap-x-5 mt-5'>
                {SocialLink.map((val)=>(
                  <a key={val.id} className='text-xl z-10 w-10 h-10 bg-transparent hover:bg-White text-Gray hover:text-black shadow-DarkShadow flex items-center justify-center rounded-full border border-dashed border-Gray transition-all duration-1000 ease-in-out xl:mr-0 mr-5' href={val.Social_icon}>{val.Social_icon}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;