export type RootState = {
    songs: SongState;
    artists: ArtistState;
    albums: AlbumState;
};

export type Albums = {
    resultCount: number;
    results: [];
};

export type AlbumState = {
    albums: any[];
    error: any;
    loading: boolean;
};

export type Artists = {
    resultCount: number;
    results: [];
};
export type ArtistState = {
    artists: any[];
    error: any;
    loading: boolean;
};

export type SongState = {
    songs: any[];
    loading: boolean;
    error: any;
};

export type Songs = {
    resultCount: number;
    results: [];
};

export type SearchResultsSongs = {
    trackId: number;
    artistName: string;
    artworkUrl60: string;
    trackName: string;
    collectionName: string;
};

export type SearchResultsArtists = {
    artistId: number;
    artistName: string;
};
export type SearchResultsAlbums = {
    artistName: string;
    artworkUrl60: string;
    trackName: string;
    collectionName: string;
};
