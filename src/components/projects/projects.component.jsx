import React from "react";
import "./projects.styles.css";
import img1 from '../../img/octoProject_500x300.jpg';
import img2 from '../../img/archProject_500x300.jpg';
import img3 from '../../img/documentationPortfolio_500x300.jpg';


const Projects = () => {
    const projects = [
        {
            title: "Octocat Profiler",
            description: "The project seeks to present the public github user information in a nicer looking way and provide some extra interesting stats.",
            tags: ["React", "Html", "Css", "GitHub-API"],
            logos: [],
            thumbnail: img1
        },
        {
            title: "Architecture Portfolio",
            description: "Website dedicated to store my Architectutel projects and serve as an Online Portfolio. It is my first web project, acomplished in 2020 and hosted in firebase",
            tags: ["Html", "Css", "JS(ES6+)"],
            logos: [],
            thumbnail: img2
        },
        {
            title: "Documentation Web",
            description: "Technology documentation project based on the freeCodeCamp final project for the Responsive Web Design Certification",
            tags: ["Html", "Css"],
            logos: [],
            thumbnail: img3
        }
    ]

    const projectsList = projects.map(project => {
        return (
            <div className="project-tile">
                <img src={ project.thumbnail } alt="projects-thumbnail"  />
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
                <p className="tags">{project.tags.map(tag => <span className="tag">{tag}</span>)}</p>
                <div className="project-icons">
                    <a href="https://github.com/raiesbo/archPortfolio" target="_blank" rel="noreferrer"><i className="fab fa-github fa-lg"></i></a>
                    <a href="https://archportfolio.raimonespasa.com/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt fa-lg"></i></a>
                </div>
            </div>
        )
    })

    return (
        <div className="projects-container" id="projects">

            <div className="projects-main">

                <h3 className="sectionTitle"><span>03.</span>Projects</h3>

                {projectsList}

            </div>

        </div>
    )
}


export default Projects;