import './App.css';
import react,  {useState}  from 'react';
import Navbar from './Components/Navbar';
import Counter from './Components/Counter';

function App() {
  const [searchString, setSearchString] = useState('hi');
  return (
    <div className="App">
      <Navbar />
      <Counter /> 
    </div>
  );
}

export default App;
