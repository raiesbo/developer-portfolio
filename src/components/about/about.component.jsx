export default function About({ profil }) {
    const { about } = profil

    return (
        <div className="about-main" id="about">
            <div className="about-container">
                <div className="section">
                    <h4 className="section-title">{Object.keys(about)[0].toUpperCase()}</h4>
                    <div className="section-content">
                        {about.background.map((item, i) => {
                            return (
                                <p key={i} className="background-paragraph">
                                    {item.split("--").map((item, id) => id % 2 !== 0 ? <span key={id} className="text-highlight">{item}</span> : item)}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
