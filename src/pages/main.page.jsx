import React from "react";
import "./main.styles.css";
import Navbar from "../components/navbar/navbar.component";
import Home from "../components/home/home.component";
// import About from "../components/about/about.component";
import Projects from "../components/projects/projects.component";
// import MoreProjects from "../components/projects/moreprojects.component";
// import Contact from "../components/contact/contact.component";
import Footer from "../components/footer/footer.component";


const Main = (props) => {

    return (
        <div className="main-container">
            <Navbar />
            <Home />

            <Projects />

            <Footer />
        </div>
    )
}


export default Main;