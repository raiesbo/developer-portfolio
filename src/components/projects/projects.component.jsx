import React from "react";
import Fade from 'react-reveal/Fade';
// import img1 from '../../img/octoProject_500x300.jpg';
// import img2 from '../../img/archProject_500x300.jpg';
// import img3 from '../../img/documentationPortfolio_500x300.jpg';


const Projects = ({ projects }) => {


    const projectsList = projects.map(project => {
        return (

            <div className="project-tile">
                <img src={project.thumbnail} alt="projects-thumbnail" />
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
        <div className="projects-main" id="projects">

            <div className="projects-container">

                <h4 className="section-title">Featured projects</h4>
                <Fade cascade>
                    <div className="section-content">
                        {projectsList}
                    </div>
                </Fade>


            </div>

        </div>
    )
}


export default Projects;