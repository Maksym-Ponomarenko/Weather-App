import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cityReducer from "./reducers/citySlice";
import weatherReducer from "./reducers/weatherSlice";

const rootReducer = combineReducers({
    city: cityReducer,
    weather: weatherReducer,
})
export const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

