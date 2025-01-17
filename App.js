import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import About from "./components/About";

function App() {
  const [mode,setMode] = useState ('light');
  const toggleMode = () => {
    if(mode === 'light'){
       setMode  ('dark');
       document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
  }
 
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <About/> */}
      <div className="container my-3">
         <TextForm heading="Enter the text to Analyze below" mode={mode}/>
      </div>
    </>
  );
}
export default App;
