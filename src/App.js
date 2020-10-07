import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatPage from './Pages/Chat/ChatPage';
import LoginPage from './Pages/Login/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/chat' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
