import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
