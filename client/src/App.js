import React from 'react';
import './App.css';
import Game from "./components/square"
import Logo from "./images/logo.png"


function App() {
  return (
    <div className="App">
      <img src={Logo} alt="tic tac toe" className="logo-sizer" />
      {/* <div className="divider"></div> */}
      <Game />
    </div>
  );
}

export default App;
