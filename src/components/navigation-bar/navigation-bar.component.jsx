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
                         home
                    </Link>
                    <Link to='/shop/marks/list'>
                         shop
                    </Link>
                </div>
                <div className="nav-center">
                    <h1>Pink Glam</h1>
                    <p>Be New Flower Today</p>
                </div>
                <div className="nav-right">
                    <Link to=''>
                         Contact
                    </Link>
                    <Link to=''>
                         About us
                    </Link>
                    <Link to=''>
                         Login
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavigationBar;