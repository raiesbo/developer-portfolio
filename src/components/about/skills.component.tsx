import About from "../../types/AboutData";
import SectionTitle from "../sectionTitle/sectionTitle.component";

type Props = {
    about: About
};

export default function Skills({ about }: Props) {
    return (
        <div className="skills-main" id="skills">
            <div className="skills-container">
                <div className="section">
                    <SectionTitle sheet="A-02">Skills</SectionTitle>
                    <div className="section-content tables">
                        {Object.keys(about.skills).map((item, id) => (
                            <ul key={id}>
                                <li className="list-header">{item} </li>
                                {about.skills[item].map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
