import logo from './logo.svg';
import './App.css';
import Navbar from './utilities/Navbar';
import WhatsAppIcon from './utilities/WhatsAppIcon';
import { ThemeProvider } from "@material-tailwind/react"; // Ensure you have the correct import
import VIP from './components/mainpage/yuyiii_vip';
import ResponsiveCarousel from './utilities/Footbar';
import Hero from './components/mainpage/hero';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      
      <Navbar />
      {/* <VIP/> */}
      <Hero />
      <WhatsAppIcon/>
      {/* <ResponsiveCarousel/> */}
    </div></ThemeProvider>
  );
}

export default App;
