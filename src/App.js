import './App.css';
import Offer from './Components/Offer';
import Features from './Components/Features';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Features />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default App;
