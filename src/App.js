import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Nav from './layouts/Nav';
import Favourites from './pages/Favourites';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/fav' element={<Favourites />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
