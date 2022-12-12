import { ResultProps } from '../../../types/app';
import { SearchResultsSongs } from '../../../types/state';
import Card from '../../common/card/Card';
import InfiniteScrollComponent from '../../infinite-scroll/InfiniteScrollComponent';

const Songs = ({ dispatchNext, musicData }: ResultProps) => {
    return (
        <div data-testid='songs-results'>
            <InfiniteScrollComponent
                dataLength={musicData.length}
                nextFunction={() => dispatchNext('songs')}
            >
                {musicData.map((song: SearchResultsSongs, i: number) => {
                    return (
                        <Card
                            key={song.trackId + i}
                            image={song.artworkUrl60}
                            title={song.artistName}
                        />
                    );
                })}
            </InfiniteScrollComponent>
        </div>
    );
};

export default Songs;
