import './App.css';
import EsaNavbar from './components/EsaNavbar';
import Footer from './components/Footer';
import JaldiTechPage from './components/JaldiTechPage';
import MegaMenu from './components/MegaMenu';
import TrelloPage from './components/TrelloPage';

function App() {
  return (
    <>
      <EsaNavbar />
      <TrelloPage />
      <JaldiTechPage />
      <MegaMenu />
      <Footer/>
    </>
  );
}

export default App;
