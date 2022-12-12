import { ResultProps } from '../../../types/app';
import { SearchResultsArtists } from '../../../types/state';
import Card from '../../common/card/Card';
import InfiniteScrollComponent from '../../infinite-scroll/InfiniteScrollComponent';

const Artists = ({ musicData, dispatchNext }: ResultProps) => {
    return (
        <div data-testid='artists-results'>
            <InfiniteScrollComponent
                dataLength={musicData.length}
                nextFunction={() => dispatchNext('artists')}
            >
                {musicData.map((artist: SearchResultsArtists, i) => {
                    return <Card key={artist.artistId + i} title={artist.artistName} />;
                })}
            </InfiniteScrollComponent>
        </div>
    );
};

export default Artists;
