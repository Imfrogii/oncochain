
import './App.css';
import Challenge from './components/challenge';
import FinalCut from './components/final_cut';
import Header from './components/header';
import HeaderAbout from './components/header_about';
import Journey from './components/journey';
import Projects from './components/projects';
import Technologies from './components/technologies';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <HeaderAbout />
      <Challenge />
      <Journey />
      <FinalCut />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
