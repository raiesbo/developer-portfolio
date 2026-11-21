import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Profile from "../../types/Profile";
import Icon from "../icon/icon.component";
import SectionTitle from "../sectionTitle/sectionTitle.component";

type Props = {
    profile: Profile
}

type CopyStatus = "idle" | "copied" | "failed"

export default function Contact({ profile }: Props) {
    const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle")

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email)
            setCopyStatus("copied")
        } catch {
            // Clipboard access can be denied (insecure context, browser policy); the mailto link still works.
            setCopyStatus("failed")
        }
    }

    // Clear the message after a few seconds; the cleanup cancels the timer on unmount or a repeat click.
    useEffect(() => {
        if (copyStatus === "idle") return
        const timeout = setTimeout(() => setCopyStatus("idle"), 3000)
        return () => clearTimeout(timeout)
    }, [copyStatus])

    const statusMessage = {
        idle: "",
        copied: "Email copied to the clipboard.",
        failed: "Couldn't copy. The email link still works.",
    }[copyStatus]

    return (
        <section className="contact-main" id="contact">
            <div className="contact-container">
                <div className="section">
                    <SectionTitle sheet="A-05">Contact</SectionTitle>
                    <div className="section-content">
                        <p className="availability">
                            <span className="status-dot" aria-hidden="true"></span>
                            {profile.availability}
                        </p>
                        <p className="contact-text">Email is the quickest way to reach me.</p>

                        <div className="contact-actions">
                            <a className="button button-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
                            <button type="button" className="button" onClick={copyEmail}>Copy email</button>
                            {profile.cv?.map(cv => (
                                <a className="button" href={cv.url} download key={cv.url}>{cv.label}</a>
                            ))}
                        </div>
                        <p className="copy-status" role="status">{statusMessage}</p>

                        <ul className="contact-links">
                            <li>
                                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                                    <Icon icon={faLinkedinIn} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href={profile.links.github} target="_blank" rel="noreferrer">
                                    <Icon icon={faGithub} /> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
