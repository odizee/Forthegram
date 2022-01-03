import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
}


export const fetchCorrectFromApi = createAsyncThunk(
    'correct/fetchCorrect', 
    async (searchTerm) => {
        const response = await axios.request({
        method: 'GET',
        url: 'https://twinword-word-associations-v1.p.rapidapi.com/associations/',
        params: {entry: searchTerm},
        headers: {
            'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com',
            'x-rapidapi-key': '488306b2b0msh139e14ad5285253p11ce48jsn94418daca47a'
        }
}).then((response) =>
	response.data
    ).catch(function (error) {
	console.error(error);
});

        return response
})


export const correctSlice = createSlice({
    name: 'correct',
    initialState,
    reducers: {
        add: (state, action) => {
            state.correct = action.payload;
        },
    },
    extraReducers: {
        [fetchCorrectFromApi.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [fetchCorrectFromApi.pending]: (state) => {
            state.loading = true;
        },
    }
});

export const { add } = correctSlice.actions

export default correctSlice.reducer;