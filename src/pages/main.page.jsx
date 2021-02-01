import React from "react";
// import "./main.styles.scss";
import Navbar from "../components/navbar/navbar.component";
import Home from "../components/home/home.component";
import About from "../components/about/about.component";
import Skills from "../components/about/skills.component";
import Projects from "../components/projects/projects.component";
import Footer from "../components/footer/footer.component";

const profil = require("../assets/profile.archive.json");
const projects = require("../assets/projects.archive.json");


const Main = () => {

    return (
        <div className="main-container" >
            <Navbar />
            <Home profil={profil} />
            <About profil={profil} />
            <Skills profil={profil} />
            <Projects projects={projects}/>
            <Footer />
        </div>
    )
}


export default Main;