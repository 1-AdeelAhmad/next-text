import { useDispatch } from 'react-redux';
import { getAlbums } from './app/features/albums/albumsSlice';
import { getArtists } from './app/features/artists/artistSlice';
import { getSongs } from './app/features/songs/songSlice';
import { AppDispatch } from './app/store';
import TitleComponent from './components/common/title/TitleComponent';
import SearchForm from './components/form/SearchForm';
import SearchContainer from './components/search/ui/SearchContainer';

const App = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmitSearch = (searchValue: string) => {
        dispatch(getSongs({ text: searchValue }));
        dispatch(getArtists({ text: searchValue }));
        dispatch(getAlbums({ text: searchValue }));
    };

    return (
        <div className='mx-auto max-w-xl h-screen'>
            <div className='flex flex-col justify-start items-center h-full border border-slate-200'>
                <TitleComponent title='iTunes Search' />
                <SearchForm handleSubmitSearch={handleSubmitSearch} />
                <SearchContainer />
            </div>
        </div>
    );
};

export default App;
