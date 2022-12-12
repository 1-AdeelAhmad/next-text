import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchForm from '../SearchForm';
import { store } from '../../../app/store';

const handleSearch = jest.fn();

describe('Renders Search Form Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <SearchForm handleSubmitSearch={handleSearch} />
            </Provider>
        );
    });

    it('Should Render Search Form With No Errors', () => {
        const searchFormComponent = screen.getByTestId('search-form-container');
        expect(searchFormComponent).toBeInTheDocument();
    });

    it('Should handle input value on search field', () => {
        const searchInput = screen.getByLabelText('search-input');
        expect(searchInput).toHaveValue('');
        fireEvent.change(searchInput, { target: { value: 'test' } });
        expect(searchInput).toHaveValue('test');
    });

    it('Should Submit Search With Correct Value', () => {
        const searchInput = screen.getByLabelText('search-input');
        const searchButton = screen.getByLabelText('search-button-search');
        fireEvent.change(searchInput, { target: { value: 'test' } });
        expect(searchInput).toHaveValue('test');
        fireEvent.click(searchButton);
        expect(handleSearch).toBeCalledWith('test');
    });
});
