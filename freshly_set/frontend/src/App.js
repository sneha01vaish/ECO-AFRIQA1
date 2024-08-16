import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/about-us/About';
import Home from "./components/pages/homepage/Home"
import LoginSignUp from "./components/pages/SignUp/LoginSignUp";
import Blogs from "./components/pages/blogs/Blogs";

import BlogsUpdate from "./components/pages/cta-detail/BlogsUpdate"
import Products from './components/pages/farm-produce/Products';
import FarmingSystemsDetail from './components/pages/farm-produce/FarmingSystemsDetail';
import GardenSetupsDetail from './components/pages/farm-produce/GardenSetupsDetail';
import Detail from "./components/pages/homepage/Detailed"
import Categories from './components/pages/farm-produce/Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<LoginSignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/all-blogs-update" element={<BlogsUpdate />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/whychoose-detail" element={<Detail />} />
        <Route path="/reviews2-detailed" element={<Detailed />} />
                <Route path="/team-detail" element={<Detail />} />
        <Route path="/farmingSystems" element={<FarmingSystemsDetail />}/>
        <Route path="/gardenSetups" element={<GardenSetupsDetail />}/>
      </Routes>
    </Router>
  );
}

export default App;
