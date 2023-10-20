import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
