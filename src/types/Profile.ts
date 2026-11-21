import AboutData from "./AboutData";

type Profile = {
    name: string,
    surname: string,
    nickname: string,
    email: string,
    website: string,
    archive: string,
    main_description: string,
    availability: string,
    links: {
        github: string,
        linkedin: string
    },
    // Add entries such as { "label": "CV (English)", "url": "/cv/raimon-espasa-cv-en.pdf" } once the PDFs are in public/.
    cv?: Array<{ label: string, url: string }>,
    about: AboutData
};

export default Profile;
