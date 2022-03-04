import './App.css';
import { Routes, Route } from 'react-router-dom';
import TopNaavbar from './components/TopNavbar';
import Home from './components/Home';

import Gallery from './components/Gallery'


function App() {
  return (
    <div className="App">
      <TopNaavbar />
      
      {/* <Home /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/gallery' element={  <Gallery />} />
      
      </Routes>

    </div>
  );
}

export default App;
