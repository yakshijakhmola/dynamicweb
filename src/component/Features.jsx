import React from 'react'

const Features = () => {
    const FeatureJson = [
        {
            id: 1,
            Features_image: './front-stereo.svg',
            Features_head: 'Front Stereo',
            Features_para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        },
        {
            id: 2,
            Features_image: './interfacehide.svg',
            Features_head: 'Interfaces are Hidden',
            Features_para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        },
        {
            id: 3,
            Features_image: './mobile-app.svg',
            Features_head: 'Mobile App Control',
            Features_para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        },
        {
            id: 4,
            Features_image: './built-gps.svg',
            Features_head: 'Built in GPS anti-theft (optional)',
            Features_para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        },
        {
            id: 5,
            Features_image: './touch-print.svg',
            Features_head: 'Touch Function (Optional)',
            Features_para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without',
        },
    ]
  return (
    <>
        {FeatureJson.map((val)=>(
            <div className='xl:col-span-4 md:col-span-4 col-span-12 m-3 flex items-center justify-center flex-col p-5 bg-transparent hover:bg-White hover:shadow-DarkShadow transition-all duration-1000 ease-in-out' key={val.id}>
                <img src={val.Features_image} className='w-20 invert-[0.5]'/>
                <h6 className='text-center my-2'>{val.Features_head}</h6>
                <p className='text-center'>{val.Features_para}</p>
            </div>
        ))}
    </>
  )
}

export default Features