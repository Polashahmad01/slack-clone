import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Chat from './component/Chat/Chat';
import Login from './component/Login/Login';
import { useStateValue } from './component/StateProvider/StateProvider';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
         <Login /> 
        ): (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                    <Chat />
                </Route>
                <Route path="/">
                    <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
