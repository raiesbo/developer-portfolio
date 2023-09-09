export default function Project({ project }) {
    const img = `${process.env.PUBLIC_URL}/img/${project.thumbnail}`;

    return (
        <div className="project-tile">
            <img src={img} alt="projects-thumbnail" className="projects-thumbnail" />
            <h5 className="project-title">{project.title}</h5>
            <p className="project-description">{project.description}</p>
            <p className="project-tags">
                {project.tags.map((tag, id) => <span className="tag" key={id}>{tag}</span>)}
            </p>
            <div className="project-icons">
                <i className="fas fa-caret-right fa-xs"></i><a href={project.links.github} target="_blank" rel="noreferrer">GITHUB</a>
                <i className="fas fa-caret-right fa-xs"></i><a href={project.links.website} target="_blank" rel="noreferrer">LINK</a>
            </div>
        </div>
    )
}
