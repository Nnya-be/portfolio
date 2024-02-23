import logo from "./logo.svg";
import { Navigation } from "./components/Navigation";
import "./App.css";
import "./styles/styles.scss";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Testimonials></Testimonials>
    </div>
  );
}

export default App;
