import React from "react";


const About = ({ profil }) => {
    const { about } = profil

    return (
        <div className="about-main" id="about">

            <div className="about-container">

                <div className="section">
                    <h4 className="section-title">{Object.keys(about)[0].toUpperCase()}</h4>
                    <div className="section-content">
                        {
                            about.background.map((item, idx) => {
                                return (
                                    <p key={idx} className="background-paragraph"> {item.split("--").map((item, id) => id % 2 != 0 ? <strong>{item}</strong> : item)} </p>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="section">

                    <h4 className="section-title">{Object.keys(about)[1]}</h4>
                    <div className="section-content tables">


                        {
                            Object.keys(about.skills).map((item, idx) => {
                                return (
                                    <ul key={idx}>
                                        <li className="list-header">{item} </li>
                                        {about.skills[item].map((item, idx) => {
                                            return (
                                                <li key={idx}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                )
                            })
                        }




                    </div>


                </div>

            </div>

        </div>
    )
}


export default About;