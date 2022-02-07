import './App.css';
import { CountriesList } from './Components/CountriesList';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
    </div>
  );
}

export default App;
