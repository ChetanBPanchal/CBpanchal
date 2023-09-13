import Navbar from "./components/NavBar/navbar";
import Home from './components/home/home' 
import Skill from "./components/Skills/skill";
import Work from "./components/work/work";
import Exp from "./components/Experience/exp";
import Application from "./components/TEMP";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Skill />
        {/* <Work /> */}
        {/* <Application />         */}
        <Exp />
    </div>
  );
}

export default App;