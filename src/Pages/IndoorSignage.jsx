import React from 'react'
import Breadcrumb from '../component/Breadcrumb'

const IndoorSignage = () => {
    const IndoorBenefitJson = [
        {
            id: 1,
            OutdoorBenefitHead: "Industrial Grade LCD Screen"
        },
        {
            id: 2,
            OutdoorBenefitImg: "./live-video.svg",
            OutdoorBenefitHead: "Android / Windows / Stand-alone Os Optional"
        },
        {
            id: 3,
            OutdoorBenefitImg: "./exhibition.svg",
            OutdoorBenefitHead: "Automatic Loop Play"
        },
        {
            id: 4,
            OutdoorBenefitImg: "./outdoorsignage.svg",
            OutdoorBenefitHead: "Charge level indicatoSupport Multiple Split Screen"
        },
        {
            id: 5,
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "CMS (Managment System)"
        },
        {
            id: 6,
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "178 Wide Viewing Angle"
        },
        {
            id: 7,
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "Built in Loudspeaker"
        },
        {
            id: 8,
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "Rich External Interface (Option)"
        },
        {
            id: 9,
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "Application Scenario"
        }
    ]
    
  return (
    <>
        <Breadcrumb PageName={"Indoor Signage"} PageLink={"indoorsignage"}/>
        <div className='section bg-[url("../circle.webp")] bg-no-repeat bg-contain bg-left'>
            <div className="container">
                <div className='grid grid-cols-12 place-items-center'>
                    <div className="xl:col-span-7 md:col-span-12 col-span-12">
                        <div>
                            <div>
                                <p className='text-DarkGreen'><b>Indoor Signage</b></p>
                                <h2 className='my-3'>Indoor double side full screen lcd digital signage</h2>
                                <h5>Indoor Ultra Ceiling Mounted Advertising Display</h5>
                                <p className='my-3'>The Indoor Double-Sided Full-Screen LCD Digital Signage is a powerful tool for businesses looking to enhance their advertising efforts. Its double-sided display, high-resolution visuals, and sleek design make it an effective and attractive solution for engaging your audience. Invest in this advanced digital signage to maximize your advertising reach and impact.</p>
                            </div>
                            <div className='grid grid-cols-12 mt-10'>
                                <div className='col-span-3 flex items-center justify-center flex-col'>
                                    <img src="./ip65.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'><b>Screen Resolutions:</b> 3820 x 2160</p>
                                </div>
                                <div className='col-span-3 flex items-center justify-center flex-col'>
                                    <img src="./quality.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'><b>Quality:</b> 4k</p>
                                </div>
                                <div className='col-span-3 flex items-center justify-center flex-col'>
                                    <img src="./fhd.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'>White Temperature Glass</p>
                                </div>
                                <div className='col-span-3 flex items-center justify-center flex-col'>
                                    <img src="./plug-and-play.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'>Plug and Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-5 md:col-span-12 col-span-12'>
                        <img src='./indoorsignage.webp'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='section bg-LightYellow'>
            <div className="centerhead">
                <h2>Indoor Benefits</h2>
            </div>
            <div className="container">
                <div className="flex items-center justify-center w-full gap-x-5 mt-10 flex-wrap">
                    {IndoorBenefitJson.map((val)=>(
                        <div className="col-span-2" key={val.id}>
                            <div className='flex items-center justify-center relative z-10 border border-solid border-Black rounded-full py-2 px-3 xl:w-60 xl:h-16 w-60 mb-3 hover:bg-Black hover:text-white outdoorbenefits transition-all duration-200 ease-in hover:shadow-DarkShadow'>
                                <p className='text-center'>{val.OutdoorBenefitHead}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='section'>
            <div className="centerhead">
                <h2>Key Features</h2>
            </div>
            <div className="container">
                <div className="grid grid-cols-12 mt-20 place-items-center">
                    <div className="xl:col-span-4 md:col-span-12 col-span-12 ">
                        <div>
                            <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8'>
                                <img src='./cd.svg' className='w-16 flex xl:items-end items-start mb-3'/>
                                <div>
                                    <h6 className='xl:text-right text-left'>2000 Nits</h6>
                                    <p className='xl:text-right text-left'>IA screen with 2000 Nits brightness is an excellent choice for businesses looking to enhance their advertising impact.</p>
                                </div>
                            </div>
                            <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8'>
                                <img src='./touch-technology.svg' className='w-16 flex xl:items-end items-start mb-3'/>
                                <div>
                                    <h6 className='xl:text-right text-left'>Various Touch Technology Optional</h6>
                                    <p className='xl:text-right text-left'>Supports multiple touch points for a dynamic user experience, Different Touch Technologies, High-Resolution Display, Durable and Reliable.</p>
                                </div>
                            </div>
                            <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8'>
                                <img src='./fhd.svg' className='w-16 flex xl:items-end items-start mb-3'/>
                                <div>
                                    <h6 className='xl:text-right text-left'>LG/SAMSUNG FHD Screen</h6>
                                    <p className='xl:text-right text-left'>An LG or Samsung 4k screen is a top-tier choice for businesses aiming to enhance their advertising efforts.</p>
                                </div>
                            </div>
                            <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8'>
                                <img src='./video-play.svg' className='w-16 flex xl:items-end items-start mb-3'/>
                                <div>
                                    <h6 className='xl:text-right text-left'>Picture and Video Playback</h6>
                                    <p className='xl:text-right text-left'>Dynamic content with both images and videos captivates and retains audience interest.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 col-span-12 ">
                        <div className='flex items-center justify-center'>
                            <img src='./indoorkeyfeature.webp' />
                        </div>
                    </div>
                    <div className="xl:col-span-4 md:col-span-12 col-span-12 ">
                        <div>
                            <div className='flex items-start justify-start flex-col mb-8'>
                                <img src='./plug-and-play.svg' className='w-16 flex items-end mb-3'/>
                                <div>
                                    <h6 className='text-left'>Plug and Play </h6>
                                    <p className='text-left'>A Plug and Play Indoor Screen is a versatile digital display that can be easily set up and used for advertising purposes. </p>
                                </div>
                            </div>
                            <div className='flex items-start justify-start flex-col mb-8'>
                                <img src='./optional-network.svg' className='w-16 flex items-end mb-3'/>
                                <div>
                                    <h6 className='text-left'>Optional Network Upgrade</h6>
                                    <p className='text-left'>This upgrade allows you to remotely manage and update your content, ensuring your messages are always fresh and relevant.</p>
                                </div>
                            </div>
                            <div className='flex items-start justify-start flex-col mb-8'>
                                <img src='./usage.svg' className='w-16 flex items-end mb-3'/>
                                <div>
                                    <h6 className='text-left'>24/7 Usage</h6>
                                    <p className='text-left'>Ensure your advertisements reach audiences at all times, day and night.</p>
                                </div>
                            </div>
                            <div className='flex items-start justify-start flex-col mb-8'>
                                <img src='./split-screen.svg' className='w-16 flex items-end mb-3'/>
                                <div>
                                    <h6 className='text-left'>Split Screen Display</h6>
                                    <p className='text-left'>A Split Screen Display for advertising offers a versatile and efficient way to present multiple content streams on a single screen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default IndoorSignage