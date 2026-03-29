import React, { } from 'react'

const Navbar = ({ setInputData, inputdata,setCity }) => {

  return (
    <>
      <div className='flex items-center justify-between py-6 px-14'>
        <h1 className='text-4xl font-bold'>Weather App</h1>
        <input className='border-2 border-gray-400 text-2xl py-1 pl-5 w-130 rounded bg-white'
          placeholder='Search for a city....'
          value={inputdata}
          onChange={(e) => { setInputData(e.target.value) }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCity(inputdata) // ✅ only on Enter
            }
          }}
          type="text" />
        <div className='flex items-center gap-8'>
          <i className="ri-notification-3-line text-2xl"></i>
          <img className='w-10 border-2 border-black object-cover h-10 rounded-full' src="https://images.unsplash.com/photo-1644424236028-842b9db60dfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="" />
        </div>
      </div>
      <hr />
    </>
  )
}

export default Navbar