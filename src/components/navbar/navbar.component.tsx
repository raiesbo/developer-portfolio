import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Icon from "../icon/icon.component";
// import "./navbar.styles.scss";



export default function Navbar() {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [backButton, setbackButton] = useState(false)
    // The inline script in index.html applies the saved theme before the first paint,
    // so start from whatever it chose.
    const [darkMode, setDarkMode] = useState(() => !document.documentElement.classList.contains("light-mode"))

    const handleClickBurger = () => {
        setBurgerMenu(open => !open)
    }

    const closeMenu = () => {
        setBurgerMenu(false)
    }

    //////////////////
    // SCROLL ARROW //
    //////////////////
    useEffect(() => {
        const scrollhandler = () => {
            setbackButton(window.scrollY > window.innerHeight * 0.75)
        };

        scrollhandler();
        window.addEventListener('scroll', scrollhandler, { passive: true });

        return () => {
            window.removeEventListener('scroll', scrollhandler);
        }
    }, [])

    ///////////////
    // DARK MODE //
    ///////////////
    const handleMode = () => {
        setDarkMode(mode => !mode)
    }

    useEffect(() => {
        document.documentElement.classList.toggle("light-mode", !darkMode)
        try {
            localStorage.setItem("darkMode", String(darkMode))
        } catch {
            // Storage can be unavailable (e.g. blocked site data); the theme still works for this visit.
        }
    }, [darkMode])

    ////////////////
    // MENU ITEMS //
    ////////////////

    type MenuList = Record<string, string>

    const menu: MenuList = {
        Home: "#home",
        About: "#about",
        Skills: "#skills",
        Projects: "#projects",
        Archive: "https://archive.raiesbo.com/"
    }

    const menuItems = Object.keys(menu)

    // Staggered fade-in for the mobile menu. Must be applied to the <li>,
    // because the CSS hides every <li> with opacity: 0 on small screens.
    const fadeIn = (i: number) => burgerMenu
        ? { animation: `navLinksFade 0.5s ease forwards ${i / menuItems.length + 0.4}s` }
        : undefined

    const menuList = menuItems.map((item, i) => {
        return (
            <li
                key={i}
                style={fadeIn(i)}
            >
                <a
                    href={menu[item as keyof MenuList]}
                    onClick={closeMenu}
                > {i === menuItems.length - 1 ? <span className="nav-archive">{item}</span> : item}</a>
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
                        <li style={fadeIn(menuItems.length)}>
                            <div className="mode">{darkMode
                                ? <Icon icon={faCircle} onClick={handleMode} />
                                : <Icon icon={faCircleRegular} onClick={handleMode} />}
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
            <a href="#home" ><Icon icon={faCircleArrowUp} size="2x" className={"arrow" + (backButton ? " arrow-active" : "")} /></a>
        </header>
    )
}
