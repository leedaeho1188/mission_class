import React from 'react';
import {history} from "./redux/configStore";
import {ConnectedRouter} from "connected-react-router";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
