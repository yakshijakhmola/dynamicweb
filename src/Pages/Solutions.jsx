import React from 'react'
import Breadcrumb from '../component/Breadcrumb';
import { FaCartShopping } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { PiHairDryerFill } from "react-icons/pi";
import { MdFitnessCenter } from "react-icons/md";
import { BiSolidInjection } from "react-icons/bi";

const Solutions = () => {
  return (
    <div>
        <Breadcrumb PageName={'Solutions'} PageLink={'solutions'}/>
        <div className='section'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='xl:col-span-4 md-col-span-6 col-span-12'>
                        <div className='py-10 px-10 bg-[#F1DEE0] rounded-lg my-2 mx-2 h-full'>
                            <div className='w-20 h-20 flex items-center justify-center bg-Black text-white rounded-full text-4xl shadow-DarkShadow border-8 border-solid border-[#F5939A]'>
                                <FaCartShopping />
                            </div>
                            <div>
                                <h6 className='my-4'>Retail Digital Signage</h6>
                                <p>Increase sales at your retail store with professional signs designed using Dynamic Displays digital signage software.</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-4 md-col-span-6 col-span-12'>
                        <div className='py-10 px-10 bg-[#F4E9DD] rounded-lg my-2 mx-2 h-full'>
                            <div className='w-20 h-20 flex items-center justify-center bg-Black text-white rounded-full text-4xl shadow-DarkShadow border-8 border-solid border-[#EFC293]'>
                                <ImSpoonKnife />
                            </div>
                            <div>
                                <h6 className='my-4'>Hospitality Digital Signage</h6>
                                <p>Dynamic Displays digital signage software powers screens at hospitality venues around the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-4 md-col-span-6 col-span-12'>
                        <div className='py-10 px-10 bg-[#D0D8DB] rounded-lg my-2 mx-2 h-full'>
                            <div className='w-20 h-20 flex items-center justify-center bg-Black text-white rounded-full text-4xl shadow-DarkShadow border-8 border-solid border-[#ABBCC6]'>
                                <PiHairDryerFill />
                            </div>
                            <div>
                                <h6 className='my-4'>Hair Salon Digital Signage</h6>
                                <p>Dynamic Displays digital signage software powers digital displays for many retail businesses worldwide, including the best hair salons</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-4 md-col-span-6 col-span-12'>
                        <div className='py-10 px-10 bg-[#DCD8F0] rounded-lg my-2 mx-2 h-full'>
                            <div className='w-20 h-20 flex items-center justify-center bg-Black text-white rounded-full text-4xl shadow-DarkShadow border-8 border-solid border-[#A797F5]'>
                                <BiSolidInjection />
                            </div>
                            <div>
                                <h6 className='my-4'>Pharmacy Digital Signage</h6>
                                <p>Pharmacies worldwide trust Dynamic Displays digital signage software to create eye-catching signage for their stores</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-4 md-col-span-6 col-span-12'>
                        <div className='py-10 px-10 bg-[#E2EFF0] rounded-lg my-2 mx-2 h-full'>
                            <div className='w-20 h-20 flex items-center justify-center bg-Black text-white rounded-full text-4xl shadow-DarkShadow border-8 border-solid border-[#88EAF4]'>
                                <MdFitnessCenter />
                            </div>
                            <div>
                                <h6 className='my-4'>Fitness</h6>
                                <p>Deploy your newly crafted digital messages to your gym's screens with just a few clicks. You can use our software  to deploy the same message or different messaging to multiple screens at the same time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions