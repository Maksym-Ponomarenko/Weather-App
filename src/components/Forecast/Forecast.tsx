import React, {FC} from 'react';
import {WeatherForecastResponse} from "../../types/weather.types";
import useGroupedForecast from "../../hooks/useGroupedForecast";
import './Forecast.scss'

interface Props {
    forecastData: WeatherForecastResponse
}

const Forecast:FC<Props> = ({forecastData}) => {
    const grouped = useGroupedForecast(forecastData.list)
    const days = Object.keys(grouped).slice(0, 5)
    return (
        <div>
            {days.map(date => (
                <div key={date} className="day-card">
                    <h3 className="day-title">{date}</h3>
                    <ul className="forecast-list">
                        {grouped[date].map(entry => {
                            const time = entry.dt_txt.split(' ')[1].slice(0, 5);
                            const tempC = Math.round(entry.main.temp - 273.15);
                            const feelsLikeC = Math.round(entry.main.feels_like - 273.15);
                            const description = entry.weather[0].description;
                            const icon = entry.weather[0].icon;
                            const windSpeed = entry.wind.speed;
                            const humidity = entry.main.humidity;

                            return (
                                <li key={entry.dt} className="forecast-item">
                                    <div className="time">{time}</div>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                        alt={description}
                                        className="weather-icon"
                                    />
                                    <div className="temp">
                                        {tempC}°C (ощущается как {feelsLikeC}°C)
                                    </div>
                                    <div className="description">{description}</div>
                                    <div className="details">
                                        <span>💨 {windSpeed} м/с</span>
                                        <span>💧 {humidity}%</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}

        </div>
    );
};

export default Forecast;