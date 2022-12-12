import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import songReducer from './features/songs/songSlice';
import artistReducer from './features/artists/artistSlice';
import albumReducer from './features/albums/albumsSlice';

export const store = configureStore({
    reducer: { songs: songReducer, artists: artistReducer, albums: albumReducer },
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: { songs: songReducer, artists: artistReducer, albums: albumReducer },
        preloadedState,
    });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
