// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Современный метод для рендеринга в React 18+
import { Provider } from 'react-redux'; // Провайдер для доступа к Redux
import App from './App'; // Главный компонент приложения
import store from './redux/store'; // Хранилище Redux
import './index.css'; // Подключение глобальных стилей

// Проверка наличия сохраненного пользователя в localStorage
const savedUser = JSON.parse(localStorage.getItem('user'));
if (savedUser) {
  store.dispatch({ type: 'user/registerUser/fulfilled', payload: savedUser });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* StrictMode для выявления потенциальных проблем */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
