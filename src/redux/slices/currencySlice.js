import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {currencyService} from "../../services";

const initialState = {
    rates:null
}

const getCurrency = createAsyncThunk(
    'currencySlice/getCurrency',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await currencyService.getAll()
            return data.rates
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)



const currencySlice = createSlice({
    name:'currencySlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getCurrency.fulfilled, (state, action)=>{
                state.rates = action.payload
            })
})

const {reducer:currencyReduce, actions:{}} = currencySlice

const currencyActions = {
    getCurrency
}

export {currencyReduce, currencyActions}
