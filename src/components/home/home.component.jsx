import { useEffect, useState } from "react";

export default function Home({ profile }) {
    const [hello, setHello] = useState(false)

    const sayHello = () => {
        setHello(true)
        setTimeout(() => {
            setHello(false)
        }, 1000);
    }

    useEffect(() => {
        sayHello()
    }, [])

    return (
        <div className="home-main" id="home">
            <div className="home-container">
                <h4 className="intro">Hello! <div className="hand" style={hello ? { animation: "hello ease-in-out 0.25s 3 0.25s" } : null} onClick={!hello ? sayHello : null}>👋</div> </h4>
                <h1 className="title">
                    {profile.main_description.split("--").map((item, idx) => idx % 2 !== 0 ? <span className="text-highlight" key={idx}>{item}</span> : item)}
                </h1>
                <h4 className="contact">
                    Get In Touch
                    <i className="fas fa-arrow-right arrow-email"></i>
                    <a href="mailto:raiesbo@gmail.com">
                        <span className="email">
                            {profile.email}
                        </span>
                    </a>
                </h4>
            </div>
        </div>
    )
}
