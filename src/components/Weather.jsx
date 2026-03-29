import React, { useEffect, useState } from 'react'
import axios from "axios";
import clear from "../assets/clear.webp"
import cloudy from "../assets/clouds.avif"
import rain from "../assets/rainy.avif"

const Weather = ({city}) => {
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [temp, setTemp] = useState("")
    const [weather, setWeather] = useState("")
    const [humidity, setHumidity] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [feelsLike, setFeelsLike] = useState("")

    useEffect(() => {
        let place = city;
        if(!city || city.trim() === ""){
            alert("Enter correct CITY name")
        };
        const fetchData = async ()=>{
            let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=7c9e714bba4784032383fa614ac47dc2&units=metric`)
            console.log(res.data);
            setName(res.data.name)
            setCountry(res.data.sys.country)
            setTemp(res.data.main.temp)
            setWeather(res.data.weather[0].main)
            setHumidity(res.data.main.humidity)
            setWindSpeed(res.data.wind.speed)
            setFeelsLike(res.data.main.feels_like)
        }
        fetchData();
    },[city]);

    // let res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=7c9e714bba4784032383fa614ac47dc2&units=metric`)

  return (
    <div className='w-full flex items-start gap-10 px-14 py-9'>
        <div className='w-1/2 border-2 py-4 px-7 rounded-xl flex flex-col gap-5 border-black bg-blue-100'>
            <h2 className='text-3xl font-semibold'>Current Weather</h2>
            <div className='flex items-center gap-15 justify-start'>
                <img className='w-40' src={weather==="Clear"?clear:weather==="Clouds"?cloudy:rain} alt="" />
                <div>
                    <h3 className='text-2xl font-normal'>{name} , {country}</h3>
                    <h1 className='text-5xl font-semibold'>{Math.round(temp)}°C , {weather}</h1>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-normal'>Humidity: {humidity}%</h3>
                <h3 className='text-2xl font-normal'>Wind: {Math.round(windSpeed)}km/h</h3>
                <h3 className='text-2xl font-normal'>Feels Like: {Math.round(feelsLike)}°C</h3>
            </div>
        </div>
        <div className='w-1/2 border-2 border-black py-4 px-3 rounded-xl flex flex-col gap-5 bg-white'>
            <h1 className='text-3xl font-semibold'>Hourly Temperature</h1>
            <div className='flex items-center justify-between'>
                <div className='bg-gray-100 shadow-lg shadow-gray-600 border-2 flex items-center flex-col px-5 py-3 rounded-xl justify-center gap-3 border-black'>
                    <h2>8AM</h2>
                    <img className='w-20' src="https://plus.unsplash.com/premium_vector-1731660866936-cd08df2c01a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8fHww" alt="" />
                    <h2>21C</h2>
                </div>
                <div className='bg-gray-100 border-2 flex items-center flex-col px-5 shadow-lg shadow-gray-600 py-3 rounded-xl justify-center gap-3 border-black'>
                    <h2>8AM</h2>
                    <img className='w-20' src="https://plus.unsplash.com/premium_vector-1731660866936-cd08df2c01a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8fHww" alt="" />
                    <h2>21C</h2>
                </div>
                <div className='bg-gray-100 border-2 flex items-center flex-col px-5 shadow-lg shadow-gray-600 py-3 rounded-xl justify-center gap-3 border-black'>
                    <h2>8AM</h2>
                    <img className='w-20' src="https://plus.unsplash.com/premium_vector-1731660866936-cd08df2c01a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8fHww" alt="" />
                    <h2>21C</h2>
                </div>
                <div className='bg-gray-100 border-2 flex items-center flex-col px-5 shadow-lg shadow-gray-600 py-3 rounded-xl justify-center gap-3 border-black'>
                    <h2>8AM</h2>
                    <img className='w-20' src="https://plus.unsplash.com/premium_vector-1731660866936-cd08df2c01a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8fHww" alt="" />
                    <h2>21C</h2>
                </div>
                <div className='bg-gray-100 border-2 flex items-center flex-col px-5 shadow-lg shadow-gray-600 py-3 rounded-xl justify-center gap-3 border-black'>
                    <h2>8AM</h2>
                    <img className='w-20' src="https://plus.unsplash.com/premium_vector-1731660866936-cd08df2c01a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8fHww" alt="" />
                    <h2>21C</h2>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Weather