import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/about-us/About';
import Home from "./components/pages/homepage/Home"
import LoginSignUp from "./components/pages/SignUp/LoginSignUp";
import Blogs from "./components/pages/blogs/Blogs";

import BlogsAllArticles from './components/pages/cta-detail/BlogsAllArticles';
import Products from './components/pages/farm-produce/Products';
import FarmingSystemsDetail from './components/pages/farm-produce/FarmingSystemsDetail';
import GardenSetupsDetail from './components/pages/farm-produce/GardenSetupsDetail';
import Categories from './components/pages/farm-produce/Categories';
import Detailed from './components/pages/homepage/Detailed';
import Detail from './components/pages/about-us/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<LoginSignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/all-blogs-update" element={<BlogsAllArticles />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/whychoose-detail" element={<Detail />} />
        <Route path="/reviews2-detailed" element={<Detailed />} />
        <Route path="/team-detail" element={<Detailed />} />
        <Route path="/farmingSystems" element={<FarmingSystemsDetail />}/>
        <Route path="/gardenSetups" element={<GardenSetupsDetail />}/>
      </Routes>
    </Router>
  );
}

export default App;
