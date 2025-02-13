import React from 'react'

const front = ({url, text}) => {
  return (
    <>
   <div className="relative manrope w-full h-[500px] flex items-center justify-center text-center">
        {/* Background Image */}
        {/* <img
          src= {url}
          alt="Blog Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        /> */}
        {/* Overlay Content */}
        <h1
          className="relative text-gray-900 text-4xl md:text-7xl font-bold"
        >
          {text}
        </h1>
      </div>
    </>
  )
}

export default front