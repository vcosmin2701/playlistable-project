import { Link } from "react-router-dom";
import "../styles/PlaylistGrid.css";

const PlaylistGrid = () => {
    const playlists = [
        {title: 'summer vibes', genre: 'rock', songs: 5, id: 1},
        {title: 'winter vibes', genre: 'jazz', songs: 10, id: 2}
    ]

    return ( 
        <div className="playlist-grid">
            {
                playlists.map((playlist) => (
                    <div className="playlist-preview" key={playlist.id}>
                        <Link>
                            <h2>{playlist.title}</h2>
                            <p>Genre: {playlist.genre}</p>
                            <p>Num of songs: {playlist.songs}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}
 
export default PlaylistGrid;