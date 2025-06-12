import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import axios from "axios";
import {CurrentWeatherResponse, WeatherForecastResponse} from "../../types/weather.types";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({city, type}: { city: string, type: 'current' | 'forecast' }) => {
        const location = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=6b9047df9cacdd94f7e7cc7d6da12ed6`
        );
        const {lat, lon} = location.data[0];
        const response = await axios.get(
            type==='current'?`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6b9047df9cacdd94f7e7cc7d6da12ed6`
            :`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e0e76f10999eeda30a4f5abfa6d3af17`
        )
        if (response.data.length === 0) {
            throw new Error('Город не найден');
        }
        console.log(response.data);
        return response.data;
    }
);

interface WeatherState {
    current: {
        data: CurrentWeatherResponse | null;
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
        error: string | null;
    };
    forecast: {
        data: WeatherForecastResponse | null;
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
        error: string | null;
    };
}

const initialState: WeatherState = {
    current: {
        data: null,
        status: 'idle',
        error: null,
    },
    forecast: {
        data: null,
        status: 'idle',
        error: null,
    }
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, (state, action) => {
                const {type} = action.meta.arg;
                state[type].status = 'loading';
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                const {type} = action.meta.arg;
                state[type].status = 'succeeded';
                state[type].data = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                const {type} = action.meta.arg;
                state[type].status = 'failed';
                state[type].error = action.error.message ?? 'Ошибка';
            });
    }
})

export default weatherSlice.reducer;