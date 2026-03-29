import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import NextDayForcast from './components/NextDayForcast'

const App = () => {

  const [inputData, setInputData] = useState("")
  const [city, setCity] = useState("Bhopal")
  return (
    <div className='bg-gray-200 h-[100vh]'>
      <Navbar inputdata={inputData} setCity={setCity} setInputData={setInputData}/>
      <Weather input={inputData} city={city}/>
      <NextDayForcast city={city}/>
    </div>
  )
}

export default App