import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PlaylistDetails from './components/PlaylistDetails';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/blogs/:id' element={<PlaylistDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
