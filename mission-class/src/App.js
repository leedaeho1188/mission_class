import React from 'react';
import {history} from "./redux/configStore";
import {ConnectedRouter} from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Header from './shared/Header';
import BottomMenu from './shared/BottomMenu';
import Class from './pages/ClassList';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Oauth from './pages/Oauth';
import ClassAdd from './pages/ClassAdd';
import Signup from './pages/Signup';
import ClassDetail from './pages/ClassDetail';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <BottomMenu/>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/class" component={Class}/>
            <Route exact path="/class/:name" component={ClassDetail}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/auth" component={Oauth}/>
            <Route exact path="/classAdd" component={ClassAdd}/>
            <Route exact path="/signup" component={Signup}/>
          </Switch>
        </ConnectedRouter>
    </React.Fragment>
  );
}



export default App;
