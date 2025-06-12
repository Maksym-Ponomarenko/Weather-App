import React, {FC} from 'react';
import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import WeatherNow from "./pages/WeatherNow";
import Navigation from "./components/Navigation/Navigation";
import CityInput from "./components/CityInput";
import WeatherForFiveDays from "./pages/WeatherForFiveDays";

const App: FC = () => {

    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<WeatherNow/>}/>
                <Route path="/fiveDaysForecast" element={<WeatherForFiveDays/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;