import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
