import React from 'react';
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <React.Fragment>
            <div className="navigation-container">
                <div className="nav-left">
                    <div className="logoBlock">
                        <img src="/images/logo website.png" alt="logo" className="logo"/>

                    </div>
                    <Link to=''>
                        <i className="fas fa-calendar-alt"/> home
                    </Link>
                    <Link to=''>
                        <i className="fas fa-calendar-alt"/> shop
                    </Link>
                </div>
                <div className="nav-center">
                    <h1>Pink Gram</h1>
                    <p>Be New Flower Today</p>
                </div>
                <div className="nav-right">
                    <Link to=''>
                        <i className="fas fa-calendar-alt"/> Contact
                    </Link>
                    <Link to=''>
                        <i className="fas fa-calendar-alt"/> About us
                    </Link>
                    <Link to=''>
                        <i className="fas fa-calendar-alt"/> Login
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavigationBar;