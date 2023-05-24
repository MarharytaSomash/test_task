import React from "react";
import Disclosure from "../components/Disclosure";
import "./style/homePageStyle.css";
import GetPruduct from "../components/GetPruduct";

function Home() {
    return (
        <>
            <Disclosure />
            <GetPruduct />
        </>
    );
}

export default Home;
