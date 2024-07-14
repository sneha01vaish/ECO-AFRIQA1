import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Mission from './components/Mission';
import FreshlyFooter from './components/footer/FreshlyFooter';

function App() {
  return (
    <div className="App">
     <Nav />
     <Hero />
     <Mission />
     <FreshlyFooter />
    </div>
  );
}

export default App;
