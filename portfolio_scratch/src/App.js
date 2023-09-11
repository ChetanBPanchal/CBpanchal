import Navbar from "./components/NavBar/navbar";
import Home from './components/home/home' 
import Skill from "./components/Skills/skill";
import Work from "./components/work/work";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Skill />
        <Work />
    </div>
  );
}

export default App;