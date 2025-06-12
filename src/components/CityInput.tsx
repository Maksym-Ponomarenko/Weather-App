import React, {ChangeEvent} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {setCity} from "../store/reducers/citySlice";
import MyInput from "./UI/MyInput/MyInput";

const CityInput = () => {
    const city = useAppSelector(state => state.city.city)
    const dispatch = useAppDispatch();

    return (
        <div>
            <MyInput
                value={city}
                onChange={(value: string) =>
                    dispatch(setCity(value))
                }
                placeholder="City"
                debounceDelay={800}
            />
        </div>
    );
};

export default CityInput;