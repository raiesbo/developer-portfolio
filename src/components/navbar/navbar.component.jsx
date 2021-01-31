import React, { useState } from "react";
// import { useState } from "react";
// import "./navbar.styles.scss";



const Navbar = () => {
    const [ burgerMenu, setBurgerMenu ] = useState(false)

    const handleClickBurger = () => {
        setBurgerMenu(!burgerMenu)
    }


    const menu = {
        Home: "#home",
        About: "#about",
        Skills: "#skills",
        Projects: "#projects"
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
                > {item}</a>
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
                    </ul>
                </nav>

            </div>



        </header>
    )

}

export default Navbar;