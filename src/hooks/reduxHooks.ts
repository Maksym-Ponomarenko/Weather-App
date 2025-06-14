import {RootState} from "../store";
import {AppDispatch} from "../store";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const useAppDispatch: ()=> AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;