import './App.css';

import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './Components/AppBar/AppBar';

import { Loading } from './Components/Loading';
import HomeView from './views/HomeView/HomeView.jsx';
import RegisterView from './views/RegisterView/RegisterView.jsx';
import LoginView from './views/LoginView/LoginView.jsx';
import PublicRoute from './Components/PublicRoute/PublicRoute';
import PrivateRoute from './Components/PrivatRoute/PrivateRoute';

import { authOperations } from 'redux/auth/authOperations';
const AsyncContactsView = lazy(() =>
  import('./views/ContactsView/ContactsView.jsx'),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.resetError());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loading />}>
      <AppBar />
      <Routes>
        <Route
          index
          element={
            <PublicRoute>
              <HomeView />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="/logIn"
          element={
            <PublicRoute>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <AsyncContactsView />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
