
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from './Component/Features/Features';
import Prices from './Component/Prices/Prices';
import Industries from './Component/Industries/Industries';
import LogIn from './Component/LogIn/LogIn';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Services from './Component/Services/Services';

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/feartures" element={<Features/>}/>
          <Route exact path="/pricing" element={<Prices/>}/>
          <Route exact path="/industries" element={<Prices/>}/>
          <Route exact path="/login" element={<LogIn/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
