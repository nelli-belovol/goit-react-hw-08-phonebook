import './App.css';

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout/Layout';

import { Loading } from './Components/Loading';
import HomeView from './views/HomeView/HomeView.jsx';
import RegisterView from './views/RegisterView/RegisterView.jsx';
import LoginView from './views/LoginView/LoginView.jsx';
import PrivateRoute from './Components/PrivatRoute/PrivateRoute';
import ContactsView from './views/ContactsView/ContactsView.jsx';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/logIn" element={<LoginView />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
