import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Skills from './Pages/Skills';
import Project from "./Pages/Project"
import Contact from './Pages/Contact';

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Home />
      
    </div>
  );
}

export default App;
