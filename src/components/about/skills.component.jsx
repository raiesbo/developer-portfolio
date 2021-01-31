import React from "react";
import Fade from 'react-reveal/Fade';


export default function Skills({ profil }) {
    const { about } = profil

    return (
        <div className="skills-main" id="skills">

            <div className="skills-container">

                <Fade big>
                    <div className="section">
                        <h4 className="section-title">{Object.keys(about)[1]}</h4>
                        <div className="section-content tables">
                            {
                                Object.keys(about.skills).map((item, idx) => {
                                    return (
                                        <ul key={idx}>
                                            <li className="list-header">{item} </li>
                                            {about.skills[item].map((item, idx2) => {
                                                return (
                                                    <li key={idx2}>{item}</li>
                                                )
                                            })}
                                        </ul>
                                    )
                                })
                            }

                        </div>
                    </div>
                </Fade>

            </div>
        </div>
    )
}
