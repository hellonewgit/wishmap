import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesireCardList from './components/DesireCartList/DesireCartList';
import RandomQuote from './components/RandomQuote/RandomQuote';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Header from './components/Header/Header';  // Импортируем компонент шапки

function App() {
  return (
    <Router basename="/wishmap">  
      <Routes>
        {/* Путь к странице регистрации */}
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Главная страница с основным контентом */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <div className="center">
                <h1>Карта Желаний</h1>
                <RandomQuote />
                <DesireCardList />
              </div>
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
