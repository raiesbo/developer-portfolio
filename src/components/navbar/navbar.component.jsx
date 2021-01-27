import React from "react";
// import { useState } from "react";
// import "./navbar.styles.scss";



const Navbar = (props) => {
    const menu = {
        Home: "#home",
        About: "#about",
        Projects: "#projects",
        Contact: "#contact"
    }

    const menuList = Object.keys(menu).map((item, id) => {
        return (
            <li>
                <a href={menu[item]}> <span className="subIndex">0{id + 1}.</span> { item }</a>
            </li>
        )
    })

    return(
        <header className="navbar-container">

            <div className="navbar-main">
                <a href="#home">
                    <div className="logo">
                        <p>REB</p>
                    </div>
                </a>
                
                <nav>
                    <ul>
                        {menuList}
                    </ul>
                </nav>

            </div>

            

        </header>
    )

}

export default Navbar;