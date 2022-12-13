import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieDetail from './page/MovieDetail';
import Home from './page/Home';
import Movies from './page/Movies';
import NavigationBar from './component/NavigationBar';
import MovieSearch from './page/MovieSearch';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
        <Route path='/search/:id' element={<MovieSearch />} />
      </Routes>
    </div>
  );
}

export default App;
