import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurServices from './components/Service/OurServices';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import Partenairs from './components/Partenairs/Partenairs';
import Apropos from './components/Apropos/Apropos';


function App() {
  return (
    <div className="App">
      
        <Header />
        <HeroSection />
        <About />
        <OurServices/>
        <Footer/>

        <Partenairs />
        <Apropos />

    </div>
  );
}

export default App;
