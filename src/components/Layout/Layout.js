import React from 'react';
import { Outlet } from 'react-router-dom';
import {OutletProvider} from "../../hoc/OutletProvider";
import '../../App.css';
import Header from "../Header/Header";
import {useStyleBase} from "./styles/baseStyle";

const Layout = () => {
    const classes = useStyleBase();
    return (
        <>
            <Header />
            <div className={classes.container}>
                <OutletProvider>
                    <Outlet />
                </OutletProvider>
            </div>
        </>
    );
}

export default Layout;