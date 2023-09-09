// import "./main.styles.scss";
import About from "../components/about/about.component";
import Skills from "../components/about/skills.component";
import Footer from "../components/footer/footer.component";
import Home from "../components/home/home.component";
import Navbar from "../components/navbar/navbar.component";
import ProjectList from "../components/projects/projectList.component";

const profil = require("../assets/profile.archive.json");
const projects = require("../assets/projects.archive.json");


export default function Main() {
    return (
        <div className="main-container" >
            <Navbar />
            <Home profil={profil} />
            <About profil={profil} />
            <Skills profil={profil} />
            <ProjectList projects={projects} />
            <Footer />
        </div>
    )
}
