import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurServices from './components/Service/OurServices';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <HeroSection />
        <OurServices/>
        <Footer/>

    </div>
  );
}

export default App;
