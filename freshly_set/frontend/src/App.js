import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/about-us/About';
import Home from "./components/pages/homepage/Home"
import LoginSignUp from "./components/pages/SignUp/LoginSignUp";
import Blogs from "./components/pages/blogs/Blogs";
import Categories from "./components/pages/farm-produce/Categories"
import Details from './components/pages/about-us/Details';
import Products from './components/pages/farm-produce/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<LoginSignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/team-detail" element={<Details />} />

        {/* <Route path="/api/blogs" element={<Blogs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
