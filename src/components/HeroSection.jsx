import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/HeroSection.css";
import data from "../data";

function HeroSection() {
    const [text, setText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    // const cycle = useRef(0);

    useEffect(() => {
        const currentTitle = data.hero.roles[titleIndex];
        let timeout;

        // if(cycle.current == 6) return;

        if (!isDeleting && charIndex < currentTitle.length) {
            timeout = setTimeout(() => {
                setText(currentTitle.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 120);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(currentTitle.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 80);
        } else if (!isDeleting && charIndex === currentTitle.length) {
            // cycle.current +=1;
            timeout = setTimeout(() => setIsDeleting(true), 1200); // pause before delete
        } else if (isDeleting && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % data.hero.roles.length);
            }, 0);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex]);

    return (
        <>
            <section
                className={`profile-hero`}
            >
                <div className="profile-image-wrapper">
                    <div className="profile-ring">
                        <img src={data.hero.image} alt={data.hero.imageAlt} className="profile-image" />
                    </div>
                </div>

                <div className="profile-content">
                    <h1 className="profile-name">{data.hero.name}</h1>
                    <span className="profile-role">{data.hero.rolePrefix} {text}|</span>

                    <p className="profile-description">{data.hero.description}</p>

                    <div className="profile-actions">
                        <a href={data.hero.resumeUrl} download={data.hero.resumeFileName}>
                            <button className="btn btn-primary">{data.hero.downloadLabel}</button>
                        </a>
                        <Link className="btn btn-secondary" to="/contact">{data.hero.contactLabel}</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;