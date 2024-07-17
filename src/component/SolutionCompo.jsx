import React from 'react'

const SolutionCompo = ({bgcolor, iconbordercolor, icon, head, para}) => {
  return (
    <>
        <div className='col-span-4'>
            <div className='py-10 px-10 rounded-lg my-2 mx-2' style={{backgroundColor: bgcolor}}>
                <div className='w-20 h-20 flex items-center justify-center bg-Black text-white rounded-full text-4xl shadow-DarkShadow border-8 border-solid'  style={{borderColor: iconbordercolor}}>
                    <div>{icon}</div>
                </div>
                <div>
                    <h6 className='my-4'>{head}</h6>
                    <p>{para}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SolutionCompo