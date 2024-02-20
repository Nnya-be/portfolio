import logo from "./logo.svg";
import { Navigation } from "./components/Navigation";
import "./App.css";
import "./styles/styles.scss";
import Home from "./pages/Home";
import Skills from "./components/Skills";
function App() {
  return (
  <div className="App" class="bg-red">
        <Navigation></Navigation>
        <Home></Home>
        <Skills></Skills>
  </div>);
}

export default App;
