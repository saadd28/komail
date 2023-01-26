import './App.css';
// import {B}
// 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './screens/Index/Index';
import About from './screens/About/About';
import Navbar from './screens/Navbar/Navbar';
import Footer from './screens/Footer/Footer';
import Contact from './screens/Contact/Contact';
import Gallery from './screens/Gallery/Gallery';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/gallery' element={<Gallery />}/>


        </Routes>

        <Footer />
      
      </BrowserRouter>
    </>
  );
}

export default App;
