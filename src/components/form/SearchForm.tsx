import React, { useState } from 'react';
import { SearchFormProps } from '../../types/app';
import Button from '../common/buttons/Button';

const SearchForm = ({ handleSubmitSearch }: SearchFormProps) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmitSearch(searchValue);
    };

    return (
        <div data-testid='search-form-container'>
            <form className='flex justify-center py-5 gap-5' onSubmit={(e) => handleSubmit(e)}>
                <input
                    className='border border-black rounded-md py-1 px-2'
                    placeholder='search*'
                    onChange={(e) => setSearchValue(e.target.value)}
                    name='search'
                    aria-label='search-input'
                />
                <Button label='search' />
            </form>
        </div>
    );
};

export default SearchForm;
