import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './Authentication/signup';
import Login from './Authentication/login';
import PageNotFound from './Authentication/pageNotFound';
import Home from './home';
import {useState} from "react";


function App() {

  const [user, setLoginuser] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >  
          {user._id ? <Home setLoginuser={setLoginuser} /> : <Login setLoginuser={setLoginuser} /> }
          </Route>
          <Route path="/home"><Home setLoginuser={setLoginuser} /></Route>
          <Route path="/login"><Login setLoginuser={setLoginuser} /></Route>
          <Route path="/signup" component={Signup} />
          <Route  component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

