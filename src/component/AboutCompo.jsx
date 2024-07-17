import React from 'react'
import { GiProgression } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const AboutCompo = ({AboutBtn}) => {
    const navigate = useNavigate();
    const AboutJSon =[
        {
            id: 1,
            About_icon: <GiProgression/>,
            About_head: 'Launch and Scale Your Marketing Campaigns',
            About_para: 'Dedicated team providing the highest quality of service and results that exceed our clients expectations.'
        },
        {
            id: 2,
            About_icon: <GiProgression/>,
            About_head: 'Launch and Scale Your Marketing Campaigns',
            About_para: 'Dedicated team providing the highest quality of service and results that exceed our clients expectations.'
        },
        {
            id: 3,
            About_icon: <GiProgression/>,
            About_head: 'Launch and Scale Your Marketing Campaigns',
            About_para: 'Dedicated team providing the highest quality of service and results that exceed our clients expectations.'
        }
    ]
  return (
    <>
        <div className='section'>
            <div className="container">
                <div className="grid grid-cols-12 place-items-center">
                    <div className="xl:col-span-6 md:col-span-7 col-span-12">
                        <div>
                            <div>
                                <h2 className='mb-5'>Launch and Scale Your Marketing Campaigns</h2>
                                <p>Dedicated team providing the highest quality of service and results that exceed our clients' expectations.</p>
                            </div>
                            <div className='mt-10'>
                                {AboutJSon.map((val)=>(
                                    <div className='grid grid-cols-12 items-center mb-10' key={val.id}>
                                        <div className='xl:col-span-2 md:col-span-2 col-span-12 w-12 h-12 rounded-xl bg-green-100 text-DarkGreen py-1 px-2 flex items-center justify-center text-2xl' >{val.About_icon}</div>
                                        <div className='xl:col-span-10 md:col-span-10 col-span-12'>
                                            <h6 className='mb-2'>{val.About_head}</h6>
                                            <p>{val.About_para}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {AboutBtn? <button className='circlebtn' onClick={()=>navigate('/about')}>Learn More <GoArrowUpRight  className='circledesign'/></button>: ""}
                        </div>
                    </div>
                    <div className='xl:col-span-6 md:col-span-5 col-span-12'>
                        <img src='./about.webp'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutCompo