import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/FooterSection/GallaryFooter';
import Header from './components/headerSection/header';
import Body from './components/BodySection/Body';
import imageData from './components/DataComponent/Data';


function App() {
  return (
    <div>
      <Header />
      <Body data = {imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
