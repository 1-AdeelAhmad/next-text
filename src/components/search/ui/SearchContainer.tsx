import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAlbums } from '../../../app/features/albums/albumsSelectors';
import { selectArtists } from '../../../app/features/artists/artistsSelectors';
import { selectSongs } from '../../../app/features/songs/songSelectors';
import { SortedDataTypes } from '../../../types/app';
import SearchFilterButtons from './SearchFilterButtons';
import SearchResults from './SearchResults';

const SearchContainer = () => {
    const [sortedDataFilterType, setSortedDataFilterType] = useState<SortedDataTypes>('songs');

    const songs = useSelector(selectSongs).songs;
    const artists = useSelector(selectArtists).artists;
    const albums = useSelector(selectAlbums).albums;
    const [musicData, setMusicData] = useState<any[]>([]);

    const handleFilter = (dataType: SortedDataTypes) => {
        setSortedDataFilterType(dataType);
    };

    useEffect(() => {
        if (sortedDataFilterType === 'songs') setMusicData(songs);
        if (sortedDataFilterType === 'albums') setMusicData(albums);
        if (sortedDataFilterType === 'artists') setMusicData(artists);
    }, [songs, artists, albums, sortedDataFilterType]);

    return (
        <div
            data-testid='search-container'
            className='w-full flex flex-col gap-5 flex-1 h-full overflow-hidden py-5'
        >
            <SearchFilterButtons handleFilter={handleFilter} />
            <SearchResults musicData={musicData} dataFilterType={sortedDataFilterType} />
        </div>
    );
};

export default SearchContainer;
