import './App.css';
// import Personality from './component/linearstepper';
// import {CssBaseline, Container,Paper,Box} from "@mui/material";
import React from 'react';
// import Ravi from './component/User';
import Userform from './component/usercreate';


function App() {
  return (
    <div className="App">
      <>
      <header className='header'>
        <div className="eminent_form">
          <h2>Eminent Personality Form</h2>
        </div>
          <h3>Form to be filled</h3>
      </header>
     <Userform/>
      </>
    </div>
  );
}

export default App;
