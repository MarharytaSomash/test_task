import React from "react";
import "./style/footerStyle.css";

function Footer() {
    return (
        <div className="footer-wrapper">
            <img
                className="footer-wrapper-img"
                src={process.env.PUBLIC_URL + "/img/logo.png"}
                alt="logo"
            />

            <div className="footer-wrapper-info">
                <div className="footer-wrapper-about">
                    <p>ABOUT SECOND CHANCE</p>
                    <p>CAREER</p>
                    <p>FACEBOOK</p>
                    <p>INSTAGRAM</p>
                </div>
                <div className="footer-wrapper-about">
                    <p>TERMS & CONDITIONS</p>
                    <p>PRIVACY POLICY</p>
                    <p>COOKIE POLICY</p>
                    <p>COOKIE SETTINGS</p>
                </div>
                <div className="footer-wrapper-about">
                    <p>FAQ</p>
                    <p>RETURNS</p>
                    <p>CONTACT</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
