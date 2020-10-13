import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { myFirebase } from '../firebase/firebase-config';
import ChatPage from '../pages/Chat/ChatPage';
import LoginPage from '../pages/Login/LoginPage';
import { login } from '../redux/actions/authActions';

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    myFirebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.email));
        setIsLoggedIn(true);

      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Loading</h1>;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/chat' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
