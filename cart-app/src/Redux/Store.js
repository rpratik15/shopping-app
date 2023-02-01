import { createStore } from "redux";


import rootReducer from './Reducer'

export const initialState={
    cart:[],
    products:[]
}

export const store=createStore(rootReducer,initialState)
