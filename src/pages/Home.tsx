import React from "react";
import Disclosure from "../components/Disclosure";
import GetPruduct from "../components/GetPruduct";
import Form from "../components/Form";
import "./style/homePageStyle.css";

function Home() {
    return (
        <>
            <Disclosure />
            <GetPruduct />
            <Form />
        </>
    );
}

export default Home;
