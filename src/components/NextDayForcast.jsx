import axios from 'axios';
import React, { useEffect, useState } from 'react'
import clear from "../assets/clear.webp"
import cloudy from "../assets/clouds.avif"
import rain from "../assets/rainy.avif"


const NextDayForcast = ({ city }) => {

    const [newArr, setNewArr] = useState([])

    useEffect(() => {
        const fetchDailyData = async () => {
            let res = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/?q=${city}&appid=7c9e714bba4784032383fa614ac47dc2&units=metric`)
            //   console.log(res.data.list.map((item) => item.weather[0].main));
            let Arr = res.data.list.filter((_, i) => i >= 2 && (i - 2) % 8 === 0)
            setNewArr(Arr)

            // console.log(res.data.list);
        }
        fetchDailyData();
    }, [city]);
    return (
        <div className='w-full px-14'>
            <div className='w-full border-2 border-black py-3 px-6 rounded-xl flex flex-col gap-4 bg-white'>
                <h1 className='text-3xl font-semibold'>5-Day Forecast</h1>
                <div className='flex items-center justify-between'>
                    <div className='bg-gray-100 border-2 flex items-center flex-col px-12 py-3 rounded-xl justify-center gap-1 border-b shadow-lg shadow-gray-600'>
                        <h2>{newArr[0]?.dt_txt?.split(" ")[0]}</h2>
                        <img className='w-20' src={newArr[0]?.weather[0]?.main === "Clear" ? clear : newArr[0]?.weather[0]?.main === "Clouds" ? cloudy : rain} alt="" />
                        <h2>High {Math.round(newArr[0]?.main?.temp_max)}°C / Low {Math.round(newArr[0]?.main?.temp_min)}°C</h2>
                    </div>
                    <div className='bg-gray-100 border-2 flex items-center flex-col px-12 py-3 rounded-xl justify-center gap-1 border-b shadow-lg shadow-gray-600'>
                        <h2>{newArr[1]?.dt_txt?.split(" ")[0]}</h2>
                        <img className='w-20' src={newArr[1]?.weather[0]?.main == "Clear" ? clear : newArr[1]?.weather[0]?.main == "Clouds" ? cloudy : rain} alt="" />
                        <h2>High {Math.round(newArr[1]?.main?.temp_max)}°C / Low {Math.round(newArr[1]?.main?.temp_min)}°C</h2>
                    </div>
                    <div className='bg-gray-100 border-2 shadow-lg shadow-gray-600 flex items-center flex-col px-12 py-3 rounded-xl justify-center gap-1 border-b'>
                        <h2>{newArr[2]?.dt_txt?.split(" ")[0]}</h2>
                        <img className='w-20' src={newArr[2]?.weather[0]?.main == "Clear" ? clear : newArr[2]?.weather[0]?.main == "Clouds" ? cloudy : rain} alt="" />
                        <h2>High {Math.round(newArr[2]?.main?.temp_max)}°C / Low {Math.round(newArr[2]?.main?.temp_min)}°C</h2>
                    </div>
                    <div className='bg-gray-100 border-2 shadow-lg shadow-gray-600 flex items-center flex-col px-12 py-3 rounded-xl justify-center gap-1 border-b'>
                        <h2>{newArr[3]?.dt_txt?.split(" ")[0]}</h2>
                        <img className='w-20' src={newArr[3]?.weather[0]?.main === "Clear" ?clear: newArr[3]?.weather[0]?.main ===
                        "Clouds" ? cloudy : rain} alt="" />
                        <h2>High {Math.round(newArr[3]?.main?.temp_max)}°C / Low {Math.round(newArr[3]?.main?.temp_min)}°C</h2>
                    </div>
                    <div className='bg-gray-100 border-2 shadow-lg shadow-gray-600 flex items-center flex-col px-12 py-3 rounded-xl justify-center gap-1 border-black'>
                        <h2>{newArr[4]?.dt_txt?.split(" ")[0]}</h2>
                        <img className='w-20' src={newArr[4]?.weather[0]?.main == "Clear" ? clear : newArr[4]?.weather[0]?.main == "Clouds" ? cloudy : rain} alt="" />
                        <h2>High {Math.round(newArr[4]?.main?.temp_max)}°C / Low {Math.round(newArr[4]?.main?.temp_min)}°C</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NextDayForcast