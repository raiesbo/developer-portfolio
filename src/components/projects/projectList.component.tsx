import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Project from "../../types/Project";
import Icon from "../icon/icon.component";
import SectionTitle from "../sectionTitle/sectionTitle.component";
import ProjectItem from "./projectItem.component";

type Props = {
    projects: Array<Project>
}

export default function ProjectList({ projects }: Props) {
    return (
        <div className="projects-main" id="projects">
            <div className="projects-container">
                <div className="section section-1">
                    <SectionTitle sheet="A-03">Featured projects</SectionTitle>
                    <div className="section-content">
                        {projects.map((project, id) => (
                            <ProjectItem project={project} key={id} />
                        ))}
                    </div>
                </div>
                <div className="section section-2">
                    <SectionTitle sheet="A-04">More projects</SectionTitle>
                    <div className="section-content">
                        <p>After the featured projects, if you are more curious and want to see my complete list of projects, please visit:
                            <span className="archive-link">
                                <Icon icon={faArrowRight} className="arrow-right" /><a href="https://archive.raiesbo.com/" className="link">ARCHIVE</a><Icon icon={faArrowLeft} className="arrow-left" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
