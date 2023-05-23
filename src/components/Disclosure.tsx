import React, { useState } from "react";
import "./style/disclosure.css";

const Disclosure: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleDisclosureClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="disclosure">
            <button className="disclosure-button" onClick={handleDisclosureClick} type="button">
                <img
                    src={process.env.PUBLIC_URL + "/img/warning.png"}
                    className="disclosure-button-warning "
                    alt="warning"
                />
                <p className="disclosure-button-text ">ALPHA</p>
                <p className="disclosure-button-text-main ">Important info regarding our service</p>
                <img
                    src={process.env.PUBLIC_URL + "/img/arrow.png"}
                    className="disclosure-button-arrow "
                    alt="arrow"
                />
            </button>
            {isExpanded && (
                <div className="disclosure-active">Important info regarding our service</div>
            )}
        </div>
    );
};

export default Disclosure;
