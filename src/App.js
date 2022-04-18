// import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  //parent component
  //layout
  return (
    <div className='App'>
      <header className='App-header'>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
