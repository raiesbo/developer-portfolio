import React from "react";
// import "./main.styles.scss";
import Navbar from "../components/navbar/navbar.component";
import Home from "../components/home/home.component";
import About from "../components/about/about.component";
import Projects from "../components/projects/projects.component";
// import MoreProjects from "../components/projects/moreprojects.component";
import Contact from "../components/contact/contact.component";
import Footer from "../components/footer/footer.component";

const profil = require("../assets/profile.archive.json");
const projects = require("../assets/projects.archive.json");


const Main = (props) => {

    return (
        <div className="main-container">
            {/* <Navbar /> */}
            <Home />
            <About profil={profil} />
            {/* <Projects />
            <Contact /> */}
            <Footer />
        </div>
    )
}


export default Main;