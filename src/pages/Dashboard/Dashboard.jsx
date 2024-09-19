// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css'; // Создайте стили по необходимости

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={styles.dashboard}>
      <h2>Добро пожаловать, {user?.username || 'Пользователь'}!</h2>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Выйти
      </button>
    </div>
  );
};

export default Dashboard;
