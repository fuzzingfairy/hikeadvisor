import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Animals from './components/Animals';
import Trails from './components/Trails';
import TrailStand from './components/Trails/TrailStand';
import States from './components/States'
import AnimalInstance from './components/Animals/AnimalInstance';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StateInstance from './components/States/StateInstance';


function App() {

  
  return (
    <div className="App">
      <MuiThemeProvider>
        <Router>
          <Switch>
          <Route path="/state/:stateId/:statePage">
            <StateInstance/>
          </Route>
          <Route path="/states/:offset">
              <States/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          <Route path="/animal/:animalId/:animalPage">
            <AnimalInstance/>
          </Route>
            <Route path="/animals/:offset">
              <Animals/>
            </Route>
            <Route path="/trail/:trailId/:trailPage">
              <TrailStand/>
            </Route>
            <Route path="/trails/:offset">
              <Trails/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
