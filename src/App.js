import React from 'react';
import './App.css';
import Clocks from './components/clocks';
import ReactDOM from "react-dom";
import {RESTRepositories} from "./infrastructure/repositories/rest-repositories";

function App() {
  return (
      ReactDOM.render(
          <Clocks repositories={new RESTRepositories()}/>,
          document.getElementById('root')
      )
  );
}

export default App;
