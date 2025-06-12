import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.scss'
import CityInput from "../CityInput";

const Navigation = () => {
    return (
        <div className="Navigation">
            <CityInput/>
            <nav className="links">
                <Link className='link' to="/">Weather Now</Link>
                <Link className='link' to="/fiveDaysForecast">Forecast for 5 days</Link>
            </nav>
        </div>
    );
};

export default Navigation;