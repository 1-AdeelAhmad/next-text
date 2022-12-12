import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import SearchResults from '../SearchResults';

const mockSongsData = [
    {
        trackId: 122,
        artistName: 'testArtist',
        artworkUrl60: 'imageUrl',
        trackName: 'testName',
        collectionName: 'collectionName',
    },
];

const mockArtistData = [
    {
        artistId: 123,
        artistName: 'testArtist',
    },
];
const mockAlbumData = [
    {
        artistName: 'testArtist',
        artworkUrl60: 'imageUrl',
        trackName: 'testName',
        collectionName: 'collectioName',
    },
];

describe('Render Search Container Component', () => {
    describe('Initial', () => {
        it('Should Render No Songs', () => {
            render(
                <Provider store={store}>
                    <SearchResults dataFilterType='songs' musicData={[]} />
                </Provider>
            );
            const noResults = screen.getByText(/No Results/i);
            expect(noResults).toBeInTheDocument();
        });
    });
    describe('Songs', () => {
        it('Should Render No Songs', () => {
            render(
                <Provider store={store}>
                    <SearchResults dataFilterType='songs' musicData={[]} />
                </Provider>
            );
            const noResults = screen.getByText(/No Results/i);
            expect(noResults).toBeInTheDocument();
        });

        it('Should Render Songs', async () => {
            render(
                <Provider store={store}>
                    <SearchResults dataFilterType='songs' musicData={mockSongsData} />
                </Provider>
            );
            const songResults = await screen.findByTestId('songs-results');
            expect(songResults).toBeInTheDocument();
        });
    });
    describe('Artists', () => {
        it('Should Render No Artists', async () => {
            render(
                <Provider store={store}>
                    <SearchResults dataFilterType='artists' musicData={[]} />
                </Provider>
            );
            const noResults = screen.getByText(/No Results/i);
            expect(noResults).toBeInTheDocument();
        });
        it('Should Render Artists', async () => {
            render(
                <Provider store={store}>
                    <SearchResults dataFilterType='artists' musicData={mockArtistData} />
                </Provider>
            );
            const songResults = await screen.findByTestId('artists-results');
            expect(songResults).toBeInTheDocument();
        });
    });
    describe('Artists', () => {
        it('Should Render No Albums', async () => {
            render(
                <Provider store={store}>
                    <SearchResults dataFilterType='albums' musicData={[]} />
                </Provider>
            );
            const noResults = screen.getByText(/No Results/i);
            expect(noResults).toBeInTheDocument();
        });
        it('Should Render Albums', async () => {
            render(
                <Provider store={store}>
                    <SearchResults dataFilterType='albums' musicData={mockAlbumData} />
                </Provider>
            );
            const songResults = await screen.findByTestId('albums-results');
            expect(songResults).toBeInTheDocument();
        });
    });
});
