import React from "react";
import Fade from 'react-reveal/Fade';


const About = ({ profil }) => {
    const { about } = profil

    return (
        <div className="about-main" id="about">

            <div className="about-container">
                <Fade big>
                    <div className="section">
                        <h4 className="section-title">{Object.keys(about)[0].toUpperCase()}</h4>
                        <div className="section-content">
                            {
                                about.background.map((item, i) => {
                                    return (
                                        <p key={i} className="background-paragraph"> {item.split("--").map((item, id) => id % 2 !== 0 ? <strong>{item}</strong> : item)} </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Fade>


                <Fade big>
                    <div className="section section-2">
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


export default About;