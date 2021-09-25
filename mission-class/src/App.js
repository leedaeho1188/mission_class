import React from 'react';
import {history} from "./redux/configStore";
import {ConnectedRouter} from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
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
import ProfileUpdate from './pages/ProfileUpdate';
import ApplyAdmin from './pages/ApplyAdmin';
import Admin from './pages/Admin';
import {api as userActions} from './redux/modules/user';
import {getCookie} from './shared/Cookie';



function App() {
  const dispatch = useDispatch();
  const cookie = getCookie("is_login") ? true : false;

  React.useEffect(()=>{
    if(cookie){
      dispatch(userActions.LoginCheck())
    }
  },[])

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
            <Route exact path="/passport/auth/:id" component={Oauth}/>
            <Route exact path="/classAdd" component={ClassAdd}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/profile/update" component={ProfileUpdate}/>
            <Route exact path="/admin/apply" component={ApplyAdmin}/>
            <Route exact path="/admin" component={Admin}/>
          </Switch>
        </ConnectedRouter>
    </React.Fragment>
  );
}



export default App;
