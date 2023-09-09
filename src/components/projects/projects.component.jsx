export default function Projects({ projects }) {
    const projectsList = projects.map((project, idx) => {
        const img = `${process.env.PUBLIC_URL}/img/${project.thumbnail}`;

        return (
            <div className="project-tile" key={idx}>
                <img src={img} alt="projects-thumbnail" className="projects-thumbnail" />
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
                <p className="project-tags">{project.tags.map((tag, id) => <span className="tag" key={id}>{tag}</span>)}</p>
                <div className="project-icons">
                    <i class="fas fa-caret-right fa-xs"></i><a href={project.links.github} target="_blank" rel="noreferrer">GITHUB</a>
                    <i class="fas fa-caret-right fa-xs"></i><a href={project.links.website} target="_blank" rel="noreferrer">LINK</a>
                </div>
            </div>
        )
    })

    return (
        <div className="projects-main" id="projects">
            <div className="projects-container">
                <div className="section section-1">
                    <h4 className="section-title">Featured projects</h4>
                    <div className="section-content">
                        {projectsList}
                    </div>
                </div>
                <div className="section section-2">
                    <h4 className="section-title">More projects</h4>
                    <div className="section-content">
                        <p>After the featured projects, if you are more curious and want to see my complete list of projects, please visit:
                            <span>
                                <i class="fas fa-arrow-right"></i><a href="https://archive.raiesbo.com/" className="link">ARCHIVE</a> <i class="fas fa-arrow-left"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
