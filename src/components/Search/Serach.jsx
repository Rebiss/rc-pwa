import React, {useState} from 'react'
import {Data} from '../service/index.service.js'
import './Search.style.css'

export const Search = () => {
    const [query, setQuery] = useState(''),
        [response, setResponse] = useState({}),
        handleChangeInput = ev => setQuery(ev.target.value),
        handleSerach = async (ev) => {
            if(ev.key == 'Enter') {
                const data = await Data(query)

                setResponse(data)
                setQuery('')
                console.log('>>>>>', data)
            }
        }
    return (
        <div className='main-container'>
            <input type='text' className='search' placeholder='search' value={query} onChange={handleChangeInput} onKeyPress={handleSerach} />
            {response.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{response.name}</span>
                        <sup>{response.sys.country}</sup>
                    </h2>
                    <div classNmae='city-temp'>
                        {Math.round(response.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className='info'>
                        <img className='city-icon' src={`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`} alt={response.weather[0].description} />
                            <p>{response.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}