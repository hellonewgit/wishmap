// src/App.jsx

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesireCardList from './components/DesireCardList/DesireCardList';
import RandomQuote from './components/RandomQuote/RandomQuote'; // Убедитесь, что этот компонент существует
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'; // Импорт страницы политики конфиденциальности
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
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* Добавляем маршрут для политики конфиденциальности */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
