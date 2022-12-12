import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { artistApi } from '../../api/api';
import { DispatchPayload } from '../../../types/app';
import { ArtistState } from '../../../types/state';

export const getArtists = createAsyncThunk(
    'artists/getArtists',
    async ({ text, next10 = false, itemCount = 0 }: DispatchPayload, { rejectWithValue }) => {
        try {
            const response = await artistApi(text, next10, itemCount);
            return response.results;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState: ArtistState = {
    artists: [],
    loading: false,
    error: '',
};

export const artistSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArtists.fulfilled, (state, action) => {
            state.artists = [...state.artists, ...action.payload];
            state.loading = false;
        }),
            builder.addCase(getArtists.pending, (state) => {
                state.loading = true;
            }),
            builder.addCase(getArtists.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export default artistSlice.reducer;
