type Project = {
    title: string,
    description: string,
    tags: Array<string>,
    links: {
        website: string,
        github: string
    },
    date: string,
    thumbnail: string
};

export default Project;
