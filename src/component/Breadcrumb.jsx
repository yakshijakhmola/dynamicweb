import React from 'react'

const Breadcrumb = ({PageName, PageLink}) => {
  return (
    <>
    <div className='bg-LightYellow section'>
        <div className="container">
            <h1>{PageName}</h1>
            <ul className='flex items-center gap-x-3'>
                <li><a>Home</a></li>
                <li>/</li>
                <li><a>{PageLink}</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Breadcrumb