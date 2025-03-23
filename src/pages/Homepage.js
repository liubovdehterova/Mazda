import React from 'react';
import ListCards from "../components/Cards/ListCards";
import DisplayModeSwitch from "../components/DisplayModeSwitch/DisplayModeSwitch";

const Homepage = () => {
    return (
        <>
            <DisplayModeSwitch />
            <ListCards />
        </>

    );
};

export default Homepage;