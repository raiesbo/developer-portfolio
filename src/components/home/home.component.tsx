import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Profile from "../../types/Profile";
import Icon from "../icon/icon.component";

type Props = {
    profile: Profile
}

export default function Home({ profile }: Props) {
    // Starts as true so the hand waves once on load.
    const [hello, setHello] = useState(true)

    const sayHello = () => {
        setHello(true)
    }

    // Reset after the 1s wave animation; the cleanup cancels the timer on unmount.
    useEffect(() => {
        if (!hello) return
        const timeout = setTimeout(() => setHello(false), 1000)
        return () => clearTimeout(timeout)
    }, [hello])

    return (
        <div className="home-main" id="home">
            <div className="home-container">
                <h4 className="intro">
                    Hello!
                    <button
                        type="button"
                        className="hand"
                        style={hello ? { animation: "hello ease-in-out 0.25s 3 0.25s" } : undefined}
                        onClick={sayHello}
                        aria-label="Wave hello"
                    >
                        👋
                    </button>
                </h4>
                <h1 className="title">
                    {profile.main_description.split("--").map((item, idx) => idx % 2 !== 0 ? <span className="text-highlight" key={idx}>{item}</span> : item)}
                </h1>
                <h4 className="contact">
                    Get In Touch
                    <Icon icon={faArrowRight} className="arrow-email" />
                    <a href={`mailto:${profile.email}`}>
                        <span className="email">
                            {profile.email}
                        </span>
                    </a>
                </h4>
            </div>
        </div>
    )
}
