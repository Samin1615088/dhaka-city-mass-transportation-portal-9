import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';
import React, { useState } from 'react';


//user login related CONTEXT>
export const UserContext = React.createContext();
//user login related CONTEXT<

function App() {
  //user login related useState>
  const [userStatus, setUserStatus] = useState({
    isLoggedIn: 'false',
    displayName: '',
    email: '',
    password: ''
  }
  );
  //user login related useState<
  return (
    <div className="App">
      <UserContext.Provider value={[userStatus, setUserStatus]}>
        <Router>
          <div>
            <Header />
            <p>Name: {userStatus.displayName}</p>
            <p>Email: {userStatus.email}</p>
            <p>IsLoggin: {userStatus.isLoggedIn}</p>
            {console.log(userStatus.isLoggedIn)}

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/search/:transport">
                <Search />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </ div >
  );
}

export default App;
