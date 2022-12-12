import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reducer from './app/features/songs/songSlice';

const initialState = {
    error: '',
    loading: false,
    songs: [],
};

describe('renders learn react link', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    it('Should Render Search Form With No Errors', () => {
        const headingElement = screen.getByText(/ITunes Search/i);
        expect(headingElement).toBeInTheDocument();
    });

    it('Should Return The Initial State', () => {
        expect(reducer(undefined, { type: undefined })).toEqual(initialState);
    });
});
