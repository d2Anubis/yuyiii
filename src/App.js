import logo from './logo.svg';
import './App.css';
import Navbar from './utilities/Navbar';
import WhatsAppIcon from './utilities/WhatsAppIcon';
import { ThemeProvider } from "@material-tailwind/react"; // Ensure you have the correct import
import VIP from './components/mainpage/yuyiii_vip';
import ResponsiveCarousel from './utilities/Footbar';
import Hero from './components/mainpage/hero';
import ImageTabs from './components/mainpage/destinations';
import TabNavigation from './components/mainpage/discovery';
import Card from './components/props/card';
import Gallery from './components/props/gallery';
import Stay from './components/stayspage/stay';
import Stats from './utilities/Stats';
import Footer from './utilities/Footer';
import Links from './utilities/Links';
import Partners from './utilities/Partners';
// import ResponsiveCarousel from './utilities/Footbar';
import ResponsiveTextImageCollage from './components/mainpage/collage'
import ImageCarousel from './components/mainpage/ImageCarousel'
import FooterSocials from './utilities/Links';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Navbar />
      <Hero />
      {/* <ImageCarousel/> */}
      {/* <VIP/> */}
      {/* <ResponsiveTextImageCollage /> */}
      <ResponsiveCarousel/>
      
      <Stats/>
      <Partners/>
      {/* <Links/>
      <Footer/> */}

<FooterSocials/>
      {/* <WhatsAppIcon/> */}
      {/* <ImageTabs/> */}
      {/* <ResponsiveCarousel/> */}
      {/* <TabNavigation /> */}
      {/* <Gallery /> */}
      {/* <Stay /> */}
    </div></ThemeProvider>
  );
}

export default App;
