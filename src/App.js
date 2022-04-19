import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Footer from './layouts/Footer';
import Nav from './layouts/Nav';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <header className='App-header bg-dark'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:page' element={<Movies />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/fav' element={<Favourites />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
