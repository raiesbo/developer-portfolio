import { useEffect, useState } from "react";
// import "./navbar.styles.scss";



export default function Navbar() {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [backButton, setbackButton] = useState(false)
    const [darkMode, setDarkMode] = useState(true)

    const handleClickBurger = () => {
        setBurgerMenu(!burgerMenu)
    }

    //////////////////
    // SCROLL ARROW //
    //////////////////
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.pageYOffset * 4 / 3 <= window.screen.height) {
                setbackButton(false)
            } else {
                setbackButton(true)
            }
        });
    }, [])

    ///////////////
    // DARK MODE //
    ///////////////
    const handleMode = () => {
        let memo = window.localStorage
        memo.setItem("darkMode", !darkMode)
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        let isDarkModeOn = window.localStorage.getItem("darkMode")

        if (isDarkModeOn === "false") {
            setDarkMode(false)
        }

        if (!darkMode) {
            document.querySelector("body").classList.add("light-mode");
        } else {
            document.querySelector("body").classList.remove("light-mode");
        }
    }, [darkMode])

    ////////////////
    // MENU ITEMS //
    ////////////////
    const menu = {
        Home: "#home",
        About: "#about",
        Skills: "#skills",
        Projects: "#projects",
        Archive: "https://archive.raiesbo.com/"
    }

    const menuList = Object.keys(menu).map((item, i) => {
        return (
            <li
                key={i}
                style={burgerMenu ? { animation: `navLinksFade 0.5s ease forwards ${i / Object.keys(menu).length + 0.4}s` } : null}
            >
                <a
                    href={menu[item]}
                    onClick={handleClickBurger}
                > {i === Object.keys(menu).length - 1 ? <span className="nav-archive">{item}</span> : item}</a>
            </li>
        )
    })

    return (
        <header className="navbar-main">
            <div className="navbar-container">
                <a href="#home">
                    <div className="logo">
                        <p>REB</p>
                    </div>
                </a>
                <div className={"burger"} onClick={handleClickBurger}>
                    <div className={"line1" + (burgerMenu ? " toggle1" : "")}></div>
                    <div className={"line2" + (burgerMenu ? " toggle2" : "")}></div>
                    <div className={"line3" + (burgerMenu ? " toggle3" : "")}></div>
                </div>

                <nav className={burgerMenu ? " nav-active" : ""}>
                    <ul>
                        {menuList}
                        <li>
                            <div className="mode"
                                style={burgerMenu ? { animation: `navLinksFade 0.5s ease forwards 5.4s` } : null}
                            >{darkMode ? <i className="fas fa-circle fa-1x" onClick={handleMode}></i> : <i className="far fa-circle" onClick={handleMode}></i>}
                            </div>
                        </li>
                        {/* <li>
                            <div
                                className="circle"
                                onClick={handleMode}
                                style={!darkMode ? {backgroundColor: "transparent"}: null}
                                style={burgerMenu ? { animation: `navLinksFade 0.5s ease forwards 5s` } : null}
                            ></div>
                        </li> */}
                    </ul>
                </nav>
            </div>
            <a href="#home" ><i className={"fas fa-arrow-circle-up fa-2x arrow" + (backButton ? " arrow-active" : "")} ></i></a>
        </header>
    )

}
