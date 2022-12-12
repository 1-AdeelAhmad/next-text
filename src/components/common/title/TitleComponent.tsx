import React from 'react';
import { TitleComponentProps } from '../../../types/app';

const TitleComponent = ({ title }: TitleComponentProps) => {
    return (
        <div className='flex justify-center py-5'>
            <h1 className='text-2xl uppercase font-bold'>{title}</h1>
        </div>
    );
};

export default TitleComponent;
