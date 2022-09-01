import './App.css';
// import Personality from './component/linearstepper';
// import {CssBaseline, Container,Paper,Box} from "@mui/material";
import React from 'react';
// import Ravi from './component/User';
import Userform from './component/usercreate';
// import formikArray from './component/Formikarray';


function App() {
  return (
    <div className="App">
      <>
      <header className='header'>
      <div>
        
          <h2>Eminent Personality Form</h2>
        
          <h3>Form to be filled</h3>
      
        </div>
      </header>
      
      {/* <Personality/> */}
     <Userform/>
     {/* <formikArray/> */}
      </>
    </div>
  );
}

export default App;
