import React from "react";
import "./hero.css";

const Hero = (() => {
    return (
        <section className="hero">               
                <h1 className="hero-headline">The Future of Urban Mobility, Today.</h1>
                <p className="subtitle">
                    Harnessing real-time video analytics with <strong>YOLOv8</strong> and{" "}
                    <strong>OpenCV</strong> to create smarter, safer, and more efficient
                    city streets.
                </p>
                <button className="hero-button">
                    <span>Show Demo</span>
                </button>
            
        </section>
    )
})
export default Hero;