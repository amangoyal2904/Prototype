import React from 'react';
import {Switch,Route,Component} from 'react-router-dom';
import Home from './components/Home';
import Trainingprogram from './components/Trainingprogram';

function App(){
  return(
    <>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/trainingprograms' component={Trainingprogram}></Route>
    </Switch>
    </>
  );
}
export default App;