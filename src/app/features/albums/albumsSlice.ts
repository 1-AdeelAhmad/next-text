import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { albumsApi } from '../../api/api';
import { DispatchPayload } from '../../../types/app';
import { AlbumState } from '../../../types/state';

export const getAlbums = createAsyncThunk(
    'albums/getAlbums',
    async ({ text, next10 = false, itemCount = 0 }: DispatchPayload, { rejectWithValue }) => {
        try {
            const response = await albumsApi(text, next10, itemCount);
            return response.results;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState: AlbumState = {
    albums: [],
    loading: false,
    error: '',
};

export const albumSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAlbums.fulfilled, (state, action) => {
            state.albums = [...state.albums, ...action.payload];
            state.loading = false;
        }),
            builder.addCase(getAlbums.pending, (state) => {
                state.loading = true;
            }),
            builder.addCase(getAlbums.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export default albumSlice.reducer;
