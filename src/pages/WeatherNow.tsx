import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {fetchWeather} from "../store/reducers/weatherSlice";
import './WeatherNow.scss'

const WeatherNow = () => {
    const city = useAppSelector(state => state.city.city)
    const {current} = useAppSelector(state => state.weather)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (city.trim()) {
            dispatch(fetchWeather({city, type:"current"}));
        }
    }, [city]);
    const celsius = (kelvin: number) => (kelvin - 273.15).toFixed(1);
    return (
        <div>
            {current.status === 'succeeded' && current.data && (
                <div className="weather-card">
                    <div className="weather-card__location">
                        {current.data.name}, {current.data.sys.country}
                    </div>
                    <div className="weather-card__main">
                        <img
                            className="weather-card__icon"
                            src={`https://openweathermap.org/img/wn/${current.data.weather[0].icon}@2x.png`}
                            alt={current.data.weather[0].description}
                        />
                        <div>
                            <div className="weather-card__temp">{celsius(current.data.main.temp)}°C</div>
                            <div className="weather-card__desc">{current.data.weather[0].description}</div>
                        </div>
                    </div>
                    <div className="weather-card__details">
                        <div>Feels like: {celsius(current.data.main.feels_like)}°C</div>
                        <div>Humidity: {current.data.main.humidity}%</div>
                        <div>Pressure: {current.data.main.pressure} hPa</div>
                        <div>Wind: {current.data.wind.speed} m/s</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherNow;