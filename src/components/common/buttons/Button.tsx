import React from 'react';
import { ButtonProps } from '../../../types/app';

const Button = ({ buttonAction, label }: ButtonProps) => {
    return (
        <button
            className='bg-blue-600 text-white rounded-md w-20 py-1 text-sm uppercase font-medium'
            aria-label={`search-button-${label}`}
            data-testid={`search-button-${label}`}
            onClick={buttonAction}
        >
            {label}
        </button>
    );
};

export default Button;
