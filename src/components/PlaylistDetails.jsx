import { useParams } from "react-router-dom";

const PlaylistDetails = ({playlists}) => {

    const {id} = useParams();
    
    return ( 
        <div className="playlist-details">
            <article>
                <h2>{playlists.title}</h2>
                <p>Genre: {playlists.genre}</p>
                <p>Num of songs: {playlists.songs}</p>
            </article>
        </div>
    );
}
 
export default PlaylistDetails;