import React from 'react';
import {Link,Switch, Route} from 'react-router-dom';
import Login from './components/login';
import Admin from './components/admin';
import Logout from './components/logout';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route  path="/admin" component={Admin}/>
      <Route  path="/logout" component={Logout}/>
    </Switch>
    
  );
}


export default App;
