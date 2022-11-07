import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {currencyReduce} from "./slices/currencySlice";


const rootReducer = combineReducers({
    currencyReduce
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}
