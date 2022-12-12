import { ArtistState } from '../../../../types/state';
import artistReducer, { getArtists } from '../artistSlice';

const mockArtistsData = [
    {
        artistName: 'testArtist',
    },
];

describe('Artist Slice Reducer', () => {
    const initialState: ArtistState = {
        artists: [],
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
        const action = { type: getArtists.pending.type };
        const state = artistReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it('It Should Set State To Fulfilled Payload', async () => {
        const action = { type: getArtists.fulfilled.type, payload: mockArtistsData };
        const state = artistReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            artists: mockArtistsData,
        });
    });

    it('It Should Set Error State When Rejected', async () => {
        const error = 'error getting songs';
        const action = {
            type: getArtists.rejected.type,
            payload: error,
        };
        const state = artistReducer(initialState, action);
        expect(state).toEqual({
            ...initialState,
            error: error,
        });
    });

    it('It Should Test Thunk', async () => {
        const dispatch = jest.fn();
        const thunk = getArtists({ text: 'Something' });

        await thunk(dispatch, () => initialState, undefined);
        const { calls } = dispatch.mock;
        expect(calls).toHaveLength(2);
        expect(calls[0][0].type).toEqual('artists/getArtists/pending');
        expect(calls[1][0].type).toEqual('artists/getArtists/fulfilled');
    });

    it('It Should Test Thunk Error', async () => {
        jest.spyOn(require('../../../api/api'), 'artistApi').mockImplementation(() => {
            return Promise.reject(new Error('ERROR'));
        });

        const dispatch = jest.fn();
        const thunk = getArtists({ text: 'Something' });

        await thunk(dispatch, () => initialState, undefined);
        const { calls } = dispatch.mock;
        expect(calls).toHaveLength(2);
        expect(calls[0][0].type).toEqual('artists/getArtists/pending');
        expect(calls[1][0].type).toEqual('artists/getArtists/rejected');
    });
});
