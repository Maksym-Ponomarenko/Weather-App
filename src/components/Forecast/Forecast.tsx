import React, { FC, useState } from 'react';
import { WeatherForecastResponse } from "../../types/weather.types";
import useGroupedForecast from "../../hooks/useGroupedForecast";
import './Forecast.scss';

interface Props {
    forecastData: WeatherForecastResponse;
}

const Forecast: FC<Props> = ({ forecastData }) => {
    const grouped = useGroupedForecast(forecastData.list);
    const days = Object.keys(grouped).slice(0, 5);
    const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});

    const toggleDay = (date: string) => {
        setExpandedDays(prev => ({
            ...prev,
            [date]: !prev[date],
        }));
    };

    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${day}.${month}`;
    };

    return (
        <div className="forecast">
            {days.map(date => (
                <div key={date} className="forecast__day-card">
                    <div className="forecast__day-header">
                        <h3 className="forecast__day-title">{formatDate(date)}</h3>
                        <button
                            onClick={() => toggleDay(date)}
                            className="forecast__toggle-button"
                        >
                            {expandedDays[date] ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    {expandedDays[date] && (
                        <ul className="forecast__list">
                            {grouped[date].map(entry => {
                                const time = entry.dt_txt.split(' ')[1].slice(0, 5);
                                const tempC = Math.round(entry.main.temp - 273.15);
                                const description = entry.weather[0].description;
                                const icon = entry.weather[0].icon;
                                const windSpeed = entry.wind.speed;
                                const humidity = entry.main.humidity;

                                return (
                                    <li key={entry.dt} className="forecast__item">
                                        <div className="forecast__time">{time}</div>
                                        <img
                                            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                            alt={description}
                                            className="forecast__icon"
                                        />
                                        <div className="forecast__temp">{tempC}°C</div>
                                        <div className="forecast__description">{description}</div>
                                        <div className="forecast__details">
                                            <span>Wind:{windSpeed} м/с</span>
                                            <span>Humidity: {humidity}%</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Forecast;
