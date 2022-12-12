import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchContainer from '../SearchContainer';
import { store } from '../../../../app/store';

describe('Render Search Container Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <SearchContainer />
            </Provider>
        );
    });

    it('Should Render Search Container With No Errors', () => {
        const searchFormComponent = screen.getByTestId('search-container');
        expect(searchFormComponent).toBeInTheDocument();
    });

    it('Should Call Handle Filter State', async () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons[0]).toBeInTheDocument();
        fireEvent.click(buttons[0]);
    });
});
