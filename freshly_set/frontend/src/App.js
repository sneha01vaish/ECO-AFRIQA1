import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/homepage/Home';
import About from './components/pages/about-us/About';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
    </Routes>
</Router>

  );
}

export default App;
