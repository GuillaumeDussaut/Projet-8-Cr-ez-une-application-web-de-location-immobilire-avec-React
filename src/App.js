import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bandeau from './components/Header/bandeau';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bandeau/>
      <Footer/>
    </div>
  );
}

export default App;
