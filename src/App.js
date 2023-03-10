import './App.scss';
import Header from './components/header/Header';
import Routes from './routes';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Header2 from './components/header2/Header2'


function App() {
  return (
    <div className="app">
      <Header/>
      <Search/>
      <Header2/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;