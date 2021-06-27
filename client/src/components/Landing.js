//This file has the landing page component

import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    
    return (
        <div className="jumbotron mt-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
            <h1>Please Log in</h1>
            <Link to="/login" className="btn btn-primary">
                Login
            </Link>
            <Link to="/sysinfo" className="btn btn-primary ml-3">
                Systeminfo
            </Link>
        </div>
    );
};

export default Landing;