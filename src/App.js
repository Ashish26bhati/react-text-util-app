import { useState } from 'react';
import './App.css';
// import AboutUs from './componants/AboutUs';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode ('dark');
      document.body.style.backgroundColor="#121212";
      // document.body.style.color="White"
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor="white";
      // document.body.style.color="black"
    }
  }
  return (
    <>
    <Navbar title="Ashish" aboutText="About me" homeText="Thish is Home tab" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <TextForm heading="Enter the Text to Analyze bellow" mode={mode} />
    {/* <AboutUs/> */}
    </>

  );
}

export default App;
