import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurServices from './components/Service/OurServices';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <HeroSection />
        <OurServices/>
        <About/>
        <Footer/>

    </div>
  );
}

export default App;
