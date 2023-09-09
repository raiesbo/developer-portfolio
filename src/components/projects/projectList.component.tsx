import Project from "../../types/Project";
import ProjectItem from "./projectItem.component";

type Props = {
    projects: Array<Project>
}

export default function ProjectList({ projects }: Props) {
    return (
        <div className="projects-main" id="projects">
            <div className="projects-container">
                <div className="section section-1">
                    <h4 className="section-title">Featured projects</h4>
                    <div className="section-content">
                        {projects.map((project, id) => (
                            <ProjectItem project={project} key={id} />
                        ))}
                    </div>
                </div>
                <div className="section section-2">
                    <h4 className="section-title">More projects</h4>
                    <div className="section-content">
                        <p>After the featured projects, if you are more curious and want to see my complete list of projects, please visit:
                            <span>
                                <i className="fas fa-arrow-right"></i><a href="https://archive.raiesbo.com/" className="link">ARCHIVE</a><i className="fas fa-arrow-left"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
