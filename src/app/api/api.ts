export const songsApi = async (text: string, next10 = false, itemCount = 0) => {
    const url = `https://itunes.apple.com/search?term=${text}&entity=musicTrack&limit=10${
        next10 ? `&offset=${itemCount}` : ''
    }`;

    const response = await fetch(url);
    if (response.status !== 200) {
        throw Error('error getting data');
    }
    const data = await response.json();
    return data;
};

export const artistApi = async (text: string, next10 = false, itemCount = 0) => {
    const url = `https://itunes.apple.com/search?term=${text}&entity=musicArtist&limit=10${
        next10 ? `&offset=${itemCount}` : ''
    }`;

    const response = await fetch(url);
    if (response.status !== 200) {
        throw Error('error getting data');
    }
    const data = await response.json();
    return data;
};

export const albumsApi = async (text: string, next10 = false, itemCount = 0) => {
    const url = `https://itunes.apple.com/search?term=${text}&entity=album&limit=10${
        next10 ? `&offset=${itemCount}` : ''
    }`;

    const response = await fetch(url);
    if (response.status !== 200) {
        throw Error('error getting data');
    }
    const data = await response.json();
    return data;
};
