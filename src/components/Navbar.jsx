import '../styles/Navbar.css';
import logo from '../assets/headphones_playlistable.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>
                <img
                    src={logo} 
                    alt='headphones, simple logo of this project'
                />
                <a href="/">Playlistable</a>
            </h1>
            <div class="links">
                <a href="/create">New playlist</a>
            </div>
        </nav>
    );
}
 
export default Navbar;