import React from 'react';
import {history} from "./redux/configStore";
import {ConnectedRouter} from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Header from './shared/Header';
import BottomMenu from './shared/BottomMenu';
import ApplyClass from './pages/ApplyClass';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Login from './pages/Login';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <BottomMenu/>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/apply" component={ApplyClass}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </ConnectedRouter>
    </React.Fragment>
  );
}



export default App;
