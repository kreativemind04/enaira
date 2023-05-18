import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard';
import Partnerships from './Components/Parnerships';
import Home from './Components/Home';
import Agents from './Components/Agent';
import Reviews from './Components/Reviews';
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
    <Home/>
    <Agents/>
    <Download/>
    <Faq/>
    <Qr/>
    <Partnerships/>
   
    </div>
  );
}

export default App;
