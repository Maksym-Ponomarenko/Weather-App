import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {fetchWeather} from "../store/reducers/weatherSlice";
import Forecast from "../components/Forecast/Forecast";

const WeatherForFiveDays = () => {
    const city = useAppSelector(state => state.city.city)
    const {forecast} = useAppSelector(state => state.weather)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (city.trim()) {
            dispatch(fetchWeather({city, type:'forecast'}));
        }
    }, [city]);

    return (
        <div>
            {forecast.status === 'succeeded' && forecast.data && (
                <Forecast forecastData={forecast.data}/>
            )}
        </div>
    );
};

export default WeatherForFiveDays;