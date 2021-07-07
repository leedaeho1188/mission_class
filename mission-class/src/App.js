import React from 'react';
import {history} from "./redux/configStore";
import {ConnectedRouter} from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Header from './shared/Header';
import BottomMenu from './shared/BottomMenu';
import Class from './pages/Class';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Oauth from './pages/Oauth'


function App() {
  return (
    <React.Fragment>
      <Header/>
      <BottomMenu/>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/class" component={Class}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/oauth" component={Oauth}/>
          </Switch>
        </ConnectedRouter>
    </React.Fragment>
  );
}



export default App;
