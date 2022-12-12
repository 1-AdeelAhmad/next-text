import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { songsApi } from '../../api/api';
import { DispatchPayload } from '../../../types/app';
import { SongState } from '../../../types/state';

export const getSongs = createAsyncThunk(
    'songs/getSongs',
    async ({ text, next10 = false, itemCount = 0 }: DispatchPayload, { rejectWithValue }) => {
        try {
            const response = await songsApi(text, next10, itemCount);
            return response.results;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState: SongState = {
    songs: [],
    loading: false,
    error: '',
};

export const songSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSongs.fulfilled, (state, action) => {
            state.songs = [...state.songs, ...action.payload];
            state.loading = false;
        }),
            builder.addCase(getSongs.pending, (state) => {
                state.loading = true;
            }),
            builder.addCase(getSongs.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export default songSlice.reducer;
