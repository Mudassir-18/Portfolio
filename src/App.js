import MainMatter from "./components/MainMatter";
import Socials from "./components/Socials";
import ProjectsHeading from "./components/ProjectsHeading";
import Projectslist from "./components/Projectslist";
import './App.css'
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainMatter/>
      {/* <Socials/> */}
      <Skills/>
      <ProjectsHeading/>
      <Projectslist/>
    </div>
  );
}

export default App;
