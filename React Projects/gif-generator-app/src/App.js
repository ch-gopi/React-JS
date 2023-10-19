import './App.css';
import Header from './Header';
import Footer from './Footer';
import Random from './Random';
import Tag from './Tag';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-div'>
          <Random />
          <Tag />
      </div>
      <Footer />
    </div>
  );
}

export default App;
