import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';

const Home = ({ profil }) => {

    const [hello, setHello] = useState(false)

    const sayHello = () => {
        // console.log(hello)
        setHello(true)
        setInterval(() => {
            setHello(false)
        }, 3000);
    }

    useEffect(() => {
        sayHello()
    }, [])


    return (
        <div className="home-main" id="home">
            <Fade big>
                <div className="home-container">

                    <h4 className="intro">Hello! <div className="hand" style={hello ? {animation: "hello ease-in-out 0.25s 3 0.4s"} : null} onClick={sayHello}>👋</div> </h4>
                    <h1 className="title">{profil.main_description.split("--").map((item, idx) => idx % 2 !== 0 ? <span className="text-highlight" key={idx}>{item}</span> : item)}</h1>
                    {/* <h2 className="subtitle">Architect and Web Developer.</h2>
                    <p>I'm an Architect and Web Developer based in Berlin, passionate about technology,
                design and building things from scratch with code like web applications, web pages and anything in between.</p> */}
                    <h4 className="contact">Get In Touch <i className="fas fa-arrow-right arrow-email"></i> <a href="mailto:raiesbo@gmail.com"><span className="email">{profil.email}</span></a></h4>

                </div>
            </Fade>
        </div>
    )
}

export default Home;