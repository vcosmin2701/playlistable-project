import PlaylistGrid from "./PlaylistGrid";
import { useState } from "react";

const Home = () => {

    const [playlists,setPlaylists] = useState([ 
        {title: 'summer vibes', genre: 'rock', songs: 5, id: 1},
        {title: 'winter vibes', genre: 'jazz', songs: 10, id: 2}
    ]);

    const handleDelete = (id) => {
        const newPlaylists = playlists.filter(playlist => playlist.id !== id);
        setPlaylists(newPlaylists);
    }

    return ( 
        <div className="home">
            <h1>Welcome to Playlistable</h1>
            <h2>🎵Share your music taste🎵</h2>
            <PlaylistGrid playlists={playlists} title='All playlists' handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home 
