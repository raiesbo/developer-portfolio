import React from "react";
import Fade from 'react-reveal/Fade';

const Home = ({ profil }) => {

    return (
        <div className="home-main" id="home">
            <Fade big>
                <div className="home-container">

                    <h4 className="intro">Hello! </h4>
                    <h1 className="title">{ profil.main_description.split("--").map((item, idx) => idx % 2 !== 0 ? <span className="text-highlight">{ item }</span> : item)}</h1>
                    {/* <h2 className="subtitle">Architect and Web Developer.</h2>
                    <p>I'm an Architect and Web Developer based in Berlin, passionate about technology,
                design and building things from scratch with code like web applications, web pages and anything in between.</p> */}
                    <h4 className="contact">Get In Touch: {profil.email}</h4>

                </div>
            </Fade>
        </div>
    )
}

export default Home;