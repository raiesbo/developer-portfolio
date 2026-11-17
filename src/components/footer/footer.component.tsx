import { faCodepen, faFreeCodeCamp, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import Icon from "../icon/icon.component";

export default function Footer() {
    return (
        <footer className="footer-main">
            <div className="footer-container">
                <div className="icons">
                    <a href="https://github.com/raiesbo" target="_blank" rel="noreferrer" title="GitHub"><Icon icon={faGithub} size="lg" /></a>
                    <a href="https://codepen.io/raiesbo" target="_blank" rel="noreferrer" title="CodePen"><Icon icon={faCodepen} size="lg" /></a>
                    <a href="https://www.freecodecamp.org/raiesbo" target="_blank" rel="noreferrer" title="freeCodeCamp"><Icon icon={faFreeCodeCamp} size="lg" /></a>
                    <a href="https://www.linkedin.com/in/raiesbo/" target="_blank" rel="noreferrer" title="LinkedIn"><Icon icon={faLinkedinIn} size="lg" /></a>
                    <a href="https://archive.raiesbo.com/" target="_blank" rel="noreferrer" title="Archive"><Icon icon={faBoxArchive} /></a>
                    <a href="https://raiesbo.com/" target="_blank" rel="noreferrer" title="Portfolio"><Icon icon={faFile} size="lg" /></a>
                </div>
                <h5>
                    Built and Designed with <span>React, Vite, Scss</span> by <br />
                    <a href="https://raiesbo.com/" title="personal website" target="_blank" rel="noreferrer"><span className="enfas">raiesbo</span></a>
                </h5>
            </div>
        </footer>
    )
}
