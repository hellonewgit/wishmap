import './App.css';
import DesireCardList from './components/DesireCartList/DesireCartList';
import RandomQuote from './components/RandomQuote/RandomQuote';
import RegistrationButton from './components/RegistrationButton/RegistrationButton';


function App() {
  return (
    <>
      <header>
        <RegistrationButton />
      </header>
      <h1>Карта Желаний</h1>
      <RandomQuote />
      <DesireCardList />
    </>
  );
}

export default App;
