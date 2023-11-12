import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";

function Layout(props) {
    return (
        <div>
            <Header />
            <Outlet />
            <footer>new-m5h1</footer>
        </div>
    );
}

export default Layout;