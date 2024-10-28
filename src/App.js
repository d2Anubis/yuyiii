import logo from './logo.svg';
import './App.css';
import Navbar from './utilities/Navbar';
import WhatsAppIcon from './utilities/WhatsAppIcon';
import { ThemeProvider } from "@material-tailwind/react"; // Ensure you have the correct import
import VIP from './components.jsx/mainpage/yuyiii_vip';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      
      <Navbar />
      <VIP/>
      <WhatsAppIcon/>
    </div></ThemeProvider>
  );
}

export default App;
