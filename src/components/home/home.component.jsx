import React from "react";
// import "./home.styles.scss";

const Home = (props) => {

    return (
        <div className="home-main" id="home">
            <div className="home-container">

                <h5 className="intro">Hi, my name is</h5>
                <h1 className="title">Raimon Espasa Bou.</h1>
                <h2 className="subtitle">Architect and Web Developer.</h2>
                <p>I'm an Architect and Web Developer based in Berlin, passionate about technology,
                design and building things from scratch with code like web applications, web pages and anything in between.</p>
                <button className="button">Get In Touch</button>

            </div>
        </div>
    )
}

export default Home;