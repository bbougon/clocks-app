import React from 'react';
import './App.css';
import Clocks from './components/clocks';
import ReactDOM from "react-dom";
import {RESTRepositories} from "./infrastructure/repositories/rest-repositories";
import {ExecutorService} from "./infrastructure/executors/executor-service";

function App() {
  return (
      ReactDOM.render(
          <Clocks repositories={new RESTRepositories()} executorService={new ExecutorService()}/>,
          document.getElementById('root')
      )
  );
}

export default App;
