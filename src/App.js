import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import About from './components/About/About';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes> 
      </Container>
    </main>
  );
};

export default App;
