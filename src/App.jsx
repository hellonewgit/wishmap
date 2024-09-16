// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesireCardList from './components/DesireCartList/DesireCartList';
import RandomQuote from './components/RandomQuote/RandomQuote';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Header from './components/Header/Header';  // Импортируем компонент шапки

function App() {
  return (
    <Router basename="/wishmap">
      <div className="center">
        <Routes>
          <Route path="/" element={(
            <>
              <Header />
              <h1>Карта Желаний</h1>
              <RandomQuote />
              <DesireCardList />
            </>
          )} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
