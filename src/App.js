import { Route, Routes } from "react-router-dom";
import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard';
import Partnerships from './Components/Parnerships';
import Home from './Components/Home';
import Agents from './Components/Agent';
import Download from './Components/Download';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Qr from './Components/Qr';

function App() {
  return (
    <div className="App">
     
    <Nav/>
    <Banner/>
    <Dashboard/>
    <Routes >
        <Route path="/" element={<Home/>} />
      </Routes>
    <Agents/>
    <Download/>
    <Faq/>
    <Qr/>
    <Partnerships/>
    <Footer/>
    </div>
  );
}

export default App;
