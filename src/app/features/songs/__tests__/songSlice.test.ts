import { SongState } from '../../../../types/state';
import songReducer, { getSongs } from '../songSlice';

const mockSongsData = [
    {
        trackId: 122,
        artistName: 'testArtist',
        artworkUrl60: 'imageUrl',
        trackName: 'testName',
        collectionName: 'collectionName',
    },
];

describe('Song Slice Reducer', () => {
    const initialState: SongState = {
        songs: [],
        loading: false,
        error: '',
    };

    beforeEach(() => {
        jest.spyOn(require('../../../api/api'), 'songsApi').mockImplementation(() => {
            return Promise.resolve({});
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('It Should Set The Loading Status To True', async () => {
        const action = { type: getSongs.pending.type };
        const state = songReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it('It Should Set State To Fulfilled Payload', async () => {
        const action = { type: getSongs.fulfilled.type, payload: mockSongsData };
        const state = songReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            songs: mockSongsData,
        });
    });

    it('It Should Set Error State When Rejected', async () => {
        const error = 'error getting songs';
        const action = {
            type: getSongs.rejected.type,
            payload: error,
        };
        const state = songReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            error: error,
        });
    });

    it('It Should Test Thunk', async () => {
        const dispatch = jest.fn();
        const thunk = getSongs({ text: 'Something' });

        await thunk(dispatch, () => initialState, undefined);
        const { calls } = dispatch.mock;
        expect(calls).toHaveLength(2);
        expect(calls[0][0].type).toEqual('songs/getSongs/pending');
        expect(calls[1][0].type).toEqual('songs/getSongs/fulfilled');
    });

    it('It Should Test Thunk Error', async () => {
        jest.spyOn(require('../../../api/api'), 'songsApi').mockImplementation(() => {
            return Promise.reject(new Error('ERROR'));
        });

        const dispatch = jest.fn();
        const thunk = getSongs({ text: 'Something' });

        await thunk(dispatch, () => initialState, undefined);
        const { calls } = dispatch.mock;
        expect(calls).toHaveLength(2);
        expect(calls[0][0].type).toEqual('songs/getSongs/pending');
        expect(calls[1][0].type).toEqual('songs/getSongs/rejected');
        // expect(calls[1][0].payload).toEqual(mockSongsData);
    });
});
