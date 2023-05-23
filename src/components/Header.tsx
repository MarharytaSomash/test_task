import React from "react";
import "./style/headerStyle.css";

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-wrapper-logo">
                <img src={process.env.PUBLIC_URL + "/img/logo.png"} className="img " alt="logo" />
                <p> VooDoo Test</p>
            </div>
            <div className="header-wrapper-info">
                <div className="header-wrapper-about"> About us </div>
                <button className="header-wrapper-button" type="button">
                    Sign-up
                </button>
            </div>
        </div>
    );
}

export default Header;
