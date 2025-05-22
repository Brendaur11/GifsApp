import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { GifExpertApp } from './pages/GifExpertApp';

export default function App() {
  return (
    <Router basename="/GifsApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busqueda" element={<GifExpertApp />} />
      </Routes>
    </Router>
  );
}
