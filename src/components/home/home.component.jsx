import React from "react";
import Fade from 'react-reveal/Fade';

const Home = ({ profil }) => {

    return (
        <div className="home-main" id="home">
            <Fade big>
                <div className="home-container">

                    <h4 className="intro">Hello! </h4>
                    <h1 className="title">{ profil.main_description.split("--").map((item, idx) => idx % 2 !== 0 ? <span className="text-highlight" key={idx}>{ item }</span> : item)}</h1>
                    {/* <h2 className="subtitle">Architect and Web Developer.</h2>
                    <p>I'm an Architect and Web Developer based in Berlin, passionate about technology,
                design and building things from scratch with code like web applications, web pages and anything in between.</p> */}
                    <h4 className="contact">Get In Touch <i className="fas fa-arrow-right"></i> <a href="mailto:raiesbo@gmail.com"><span className="email">{profil.email}</span></a></h4>

                </div>
            </Fade>
        </div>
    )
}

export default Home;