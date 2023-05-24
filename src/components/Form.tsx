import React, { useState } from "react";
import "./style/formStyle.css";
function Form() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="form-wrapper">
            <h1 className="form-title">Be the first one to know when we launch our beta!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="E-mail"
                    type="input"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button type="submit">Sign-up</button>
            </form>
        </div>
    );
}

export default Form;
