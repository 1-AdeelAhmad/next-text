import * as React from 'react';
import { CardProps } from '../../../types/app';

const Card = ({ title, image }: CardProps) => {
    return (
        <div
            data-testid='card-component'
            className='w-28 h-40
             rounded-xl p-2 flex flex-col gap-2 justify-start shadow-md'
        >
            {image ? (
                <img src={image} className='rounded-lg' />
            ) : (
                <div className='h-[90px] w-[90px] bg-gray-500 rounded-md flex justify-center items-center'>
                    <p className='text-6xl text-gray-700'>A</p>
                </div>
            )}
            <p className='text-xs truncate'>{title}</p>
        </div>
    );
};

export default Card;
