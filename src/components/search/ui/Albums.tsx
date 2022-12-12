import { ResultProps } from '../../../types/app';
import { SearchResultsAlbums } from '../../../types/state';
import Card from '../../common/card/Card';
import InfiniteScrollComponent from '../../infinite-scroll/InfiniteScrollComponent';

const Albums = ({ dispatchNext, musicData }: ResultProps) => {
    return (
        <div data-testid='albums-results'>
            <InfiniteScrollComponent
                dataLength={musicData.length}
                nextFunction={() => dispatchNext('albums')}
            >
                {musicData.map((album: SearchResultsAlbums, i) => {
                    return (
                        <Card
                            key={album.trackName + i}
                            title={album.collectionName}
                            image={album.artworkUrl60}
                        />
                    );
                })}
            </InfiniteScrollComponent>
        </div>
    );
};

export default Albums;
