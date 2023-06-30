import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bandeau from './components/Header/bandeau';
import Locations from './components/location-container/container';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bandeau/>
      <Locations/>
      <Footer/>
    </div>
  );
}

export default App;
