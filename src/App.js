import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import FavoriteRecipe from './pages/FavoriteRecipe';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/favorites" element={<FavoriteRecipe />} />
      </Routes>
     
 </>
  );
}

export default App;
