import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSpinner from '../common/loading/LoadingSpinner';
import { InfiniteScrollComponentProps } from '../../types/app';

const InfiniteScrollComponent = ({
    children,
    dataLength,
    nextFunction,
}: InfiniteScrollComponentProps) => {
    return (
        <InfiniteScroll
            data-testid='infinite-scroll'
            dataLength={dataLength}
            loader={<LoadingSpinner />}
            next={nextFunction}
            hasMore={true}
            endMessage={<p>That is All For Now</p>}
            className='flex flex-wrap justify-center gap-5 overflow-y-auto scroll-smooth border-b-4 border-gray-200 shadow-md'
            height='50vh'
        >
            {children}
        </InfiniteScroll>
    );
};

export default InfiniteScrollComponent;
