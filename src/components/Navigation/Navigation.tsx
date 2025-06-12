import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <Link to="/">Weather Now</Link>
            <Link to="/Search">Forecast for 5 days</Link>
        </nav>
    );
};

export default Navigation;