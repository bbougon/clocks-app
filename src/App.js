import React from 'react';
import './App.css';
import Clocks from './components/clocks';
import ReactDOM from "react-dom";

function App() {
  return (
      ReactDOM.render(
          <Clocks />,
          document.getElementById('root')
      )
  );
}

export default App;
