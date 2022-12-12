import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import SearchFilterButtons from '../SearchFilterButtons';

const handleFilter = jest.fn();

describe('Render Search Container Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <SearchFilterButtons handleFilter={handleFilter} />
            </Provider>
        );
    });

    it('Should Render Search Container With No Errors', () => {
        const searchFormComponent = screen.getByTestId('search-filter-buttons-container');
        expect(searchFormComponent).toBeInTheDocument();
    });

    it('Should Call Handle Song Filter Button', () => {
        const songFilterButton = screen.getByLabelText('search-button-songs');
        fireEvent.click(songFilterButton);
        expect(handleFilter).toHaveBeenCalledWith('songs');
    });

    it('Should Call Handle Song Filter Button', () => {
        const songFilterButton = screen.getByLabelText('search-button-artists');
        fireEvent.click(songFilterButton);
        expect(handleFilter).toHaveBeenCalledWith('artists');
    });

    it('Should Call Handle Song Filter Button', () => {
        const songFilterButton = screen.getByLabelText('search-button-albums');
        fireEvent.click(songFilterButton);
        expect(handleFilter).toHaveBeenCalledWith('albums');
    });
});
