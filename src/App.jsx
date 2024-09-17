// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesireCardList from './components/DesireCartList/DesireCartList';
import RandomQuote from './components/RandomQuote/RandomQuote';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router basename="/wishmap">
      <div className="center">
        <Header />
        <Routes>
          <Route path="/" element={(
            <>
              <h1>Карта Желаний</h1>
              <RandomQuote />
              <DesireCardList />
            </>
          )} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
