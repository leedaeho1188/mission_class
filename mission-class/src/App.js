import React from 'react';
import {history} from "./redux/configStore";
import {ConnectedRouter} from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Header from './shared/Header';
import ApplyClass from './pages/ApplyClass';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/apply" component={ApplyClass}/>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
