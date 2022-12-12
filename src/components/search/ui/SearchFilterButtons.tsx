import React from 'react';
import { SearchFilterButtonsProps } from '../../../types/app';
import Button from '../../common/buttons/Button';

const SearchFilterButtons = ({ handleFilter }: SearchFilterButtonsProps) => {
    return (
        <div data-testid='search-filter-buttons-container' className='flex flex-wrap gap-5 justify-center border-b-2 border-gray-300 pb-5 shadow-md'>
            <Button label='songs' buttonAction={() => handleFilter('songs')} />
            <Button label='artists' buttonAction={() => handleFilter('artists')} />
            <Button label='albums' buttonAction={() => handleFilter('albums')} />
        </div>
    );
};

export default SearchFilterButtons;
