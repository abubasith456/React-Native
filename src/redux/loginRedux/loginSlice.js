import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts, login } from '../../repositories/apiRepo';


const initialState = {
    data: null,
    isLoader: false,
    isError: false,
}


export const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        resetState: (state) => initialState,
    },
    extraReducers: builder => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoader = true;
            state.isError = false;
            state.data = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.status == 200) {
                state.isLoader = false;
                state.data = action.payload;
                state.isError = false;
            } else {
                state.isLoader = false;
                state.isError = true;
                state.data = action.payload;;
            }
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
            state.data = null;
        });
    },

});

const Productslice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        });
    },
});

export const { resetState } = loginSlice.actions;
export default loginSlice.reducer;