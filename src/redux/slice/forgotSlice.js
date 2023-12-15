import { createSlice } from '@reduxjs/toolkit'
import { forgotPassword } from '../../repositories/apiRepo';

const forgotSlice = createSlice({
    name: 'forgot',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
    },
    extraReducers: builder => {
        builder.addCase(forgotPassword.pending, (state, action) => {
            state.isLoader = true;
            state.isError = false;
            state.data = null;
        });
        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
            state.isError = false;
        });
        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
            state.data = null;
        });
    },

});

export default forgotSlice.reducer;