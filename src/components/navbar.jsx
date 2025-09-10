// import React, {useState} from "react";
import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar = (() => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" style={{ width: '135px', height: '84px' }} />
                </div>
                <nav class="navbar" >
                    <a href="#product">Product</a>
                    <a href="#features" >Features</a>
                    <a href="#challenges" >Challenges</a>
                    <a href="#tech" >Technology</a>
                </nav>
                
                    <button className="nav-button">
                        <span>Show Demo</span>
                    </button>
            </div>
        </header>
    )

})

export default Navbar;