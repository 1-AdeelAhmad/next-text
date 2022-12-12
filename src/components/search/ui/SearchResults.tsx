import React from 'react';
import { useDispatch } from 'react-redux';
import { getAlbums } from '../../../app/features/albums/albumsSlice';
import { getArtists } from '../../../app/features/artists/artistSlice';
import { getSongs } from '../../../app/features/songs/songSlice';
import { AppDispatch } from '../../../app/store';
import { SearchResultsProps, SortedDataTypes } from '../../../types/app';
import Albums from './Albums';
import Artists from './Artists';
import NoSearchResults from './NoSearchResults';
import Songs from './Songs';

const SearchResults = ({ dataFilterType = 'songs', musicData }: SearchResultsProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDispatchNext = (type: SortedDataTypes) => {
        switch (type) {
            case 'songs':
                dispatch(
                    getSongs({
                        text: 'songs',
                        next10: true,
                        itemCount: musicData.length + 10,
                    })
                );
                break;
            case 'artists':
                dispatch(
                    getArtists({
                        text: 'artists',
                        next10: true,
                        itemCount: musicData.length + 10,
                    })
                );
                break;
            case 'albums':
                dispatch(
                    getAlbums({
                        text: 'albums',
                        next10: true,
                        itemCount: musicData.length + 10,
                    })
                );
                break;
        }
    };

    if (dataFilterType === 'songs') {
        if (musicData && musicData.length > 0) {
            return <Songs musicData={musicData} dispatchNext={handleDispatchNext} />;
        }
        return <NoSearchResults />;
    }
    if (dataFilterType === 'albums') {
        if (musicData && musicData.length > 0) {
            return <Albums musicData={musicData} dispatchNext={handleDispatchNext} />;
        }
        return <NoSearchResults />;
    }

    if (dataFilterType === 'artists') {
        if (musicData && musicData.length > 0) {
            return <Artists musicData={musicData} dispatchNext={handleDispatchNext} />;
        }
        return <NoSearchResults />;
    }

    return <NoSearchResults />;
};

export default SearchResults;
