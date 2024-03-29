import profile from '../assets/profile.archive.json';
import projects from '../assets/projects.archive.json';
import About from "../components/about/about.component";
import Skills from "../components/about/skills.component";
import Footer from "../components/footer/footer.component";
import Home from "../components/home/home.component";
import Navbar from "../components/navbar/navbar.component";
import ProjectList from "../components/projects/projectList.component";

export default function Main() {
    return (
        <div className="main-container" >
            <Navbar />
            <Home profile={profile} />
            <About about={profile.about} />
            <Skills about={profile.about} />
            <ProjectList projects={projects} />
            <Footer />
        </div>
    )
}
