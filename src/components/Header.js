import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div><Link to="/">posts</Link></div>
            <div><Link to="/form">form</Link></div>
        </div>
    );
}

export default Header;