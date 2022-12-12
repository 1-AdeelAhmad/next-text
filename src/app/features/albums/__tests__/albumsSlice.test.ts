import { AlbumState } from '../../../../types/state';
import albumsReducer, { getAlbums } from '../albumsSlice';

const mockAlbumData = [
    {
        collectionName: 'testArtist',
    },
];

describe('Artist Slice Reducer', () => {
    const initialState: AlbumState = {
        albums: [],
        loading: false,
        error: '',
    };

    beforeEach(() => {
        jest.spyOn(require('../../../api/api'), 'artistApi').mockImplementation(() => {
            return Promise.resolve({});
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('It Should Set The Loading Status To True', async () => {
        const action = { type: getAlbums.pending.type };
        const state = albumsReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it('It Should Set State To Fulfilled Payload', async () => {
        const action = { type: getAlbums.fulfilled.type, payload: mockAlbumData };
        const state = albumsReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            albums: mockAlbumData,
        });
    });

    it('It Should Set Error State When Rejected', async () => {
        const error = 'error getting songs';
        const action = {
            type: getAlbums.rejected.type,
            payload: error,
        };
        const state = albumsReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            error: error,
        });
    });

    it('It Should Test Thunk', async () => {
        const dispatch = jest.fn();
        const thunk = getAlbums({ text: 'Something' });

        await thunk(dispatch, () => initialState, undefined);
        const { calls } = dispatch.mock;
        expect(calls).toHaveLength(2);
        expect(calls[0][0].type).toEqual('albums/getAlbums/pending');
        expect(calls[1][0].type).toEqual('albums/getAlbums/fulfilled');
    });

    it('It Should Test Thunk Error', async () => {
        jest.spyOn(require('../../../api/api'), 'albumsApi').mockImplementation(() => {
            return Promise.reject(new Error('ERROR'));
        });

        const dispatch = jest.fn();
        const thunk = getAlbums({ text: 'Something' });

        await thunk(dispatch, () => initialState, undefined);
        const { calls } = dispatch.mock;
        expect(calls).toHaveLength(2);
        expect(calls[0][0].type).toEqual('albums/getAlbums/pending');
        expect(calls[1][0].type).toEqual('albums/getAlbums/rejected');
    });
});
