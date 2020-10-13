import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatPage from './pages/Chat/ChatPage';
import LoginPage from './pages/Login/LoginPage';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/chat' component={ChatPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
