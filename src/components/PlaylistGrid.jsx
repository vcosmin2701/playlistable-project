import { Link } from "react-router-dom";
import "../styles/PlaylistGrid.css";

const PlaylistGrid = ({playlists, title, handleDelete}) => {
    return ( 
        <div className="playlist-grid">
            <h2>{title}</h2>
            {playlists.map((playlist) => (
               <div className="playlist-preview" key={playlist.id}>
                    <Link to={`/playlists/${playlist.id}`}>
                        <h2>{playlist.title}</h2>
                    </Link>
                    <button onClick={() => handleDelete(playlist.id)}>Delete playlist</button>
                </div>
            ))}
        </div>
    );
}
 
export default PlaylistGrid;