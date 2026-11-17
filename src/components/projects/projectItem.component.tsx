import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Project from "../../types/Project";
import Icon from "../icon/icon.component";


type Props = {
    project: Project
}

export default function ProjectItem({ project }: Props) {
    return (
        <div className="project-tile">
            {/* width/height reserve the space before the image loads (the thumbnails are ~700x410).
                CSS height: auto lets the real aspect ratio take over once it has loaded. */}
            <img
                src={`/img/${project.thumbnail}`}
                alt={`${project.title} preview`}
                className="projects-thumbnail"
                width={700}
                height={410}
                loading="lazy"
                decoding="async"
            />
            <h5 className="project-title">{project.title}</h5>
            <p className="project-description">{project.description}</p>
            <p className="project-tags">
                {project.tags.map((tag, id) => <span className="tag" key={id}>{tag}</span>)}
            </p>
            <div className="project-icons">
                <Icon icon={faCaretRight} size="xs" /><a href={project.links.github} target="_blank" rel="noreferrer">GITHUB</a>
                <Icon icon={faCaretRight} size="xs" /><a href={project.links.website} target="_blank" rel="noreferrer">LINK</a>
            </div>
        </div>
    )
}
