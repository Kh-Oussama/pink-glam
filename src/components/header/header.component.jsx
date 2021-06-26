import React from 'react';
import iconSet from "../../selection.json";
import IcomoonReact, {iconList} from "icomoon-react";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header className="header-container">
            <div className="header-white-block"/>
            <img src="/images/h2.jpg" alt="img 1" className="header__img header__img-topImage"/>
            <img src="/images/h1.jpg" alt="img 3" className="header__img header__img-rightImage"/>
            <div className="header__img header__img-leftImage">
                <img src="/images/h4.jpg" alt="img 2" className="header__img header__img-leftImage"/>
                <div className="header-button">
                    <h1>Explore Our Products
                        <Link to=''>
                            <IcomoonReact iconSet={iconSet} size={22}  icon="chevron-thin-down"/>
                        </Link>
                    </h1>
                </div>
            </div>
            <div className="header-title">
                <h1>
                    The perfect <br/>  <span className="subtitle">foundation fit</span>
                </h1>
            </div>
            <div className="header-social-media">
                <Link to=''>
                    <IcomoonReact iconSet={iconSet} size={22}  icon="instagram"/>
                </Link>

                <Link to=''>
                    <IcomoonReact iconSet={iconSet} size={22}  icon="facebook"/>
                </Link>
                <Link to=''>
                    <IcomoonReact iconSet={iconSet} size={22}  icon="youtube"/>
                </Link>
                <Link to=''>
                    <IcomoonReact iconSet={iconSet} size={22}  icon="twitter"/>
                </Link>

            </div>
        </header>
    )
};

export default Header;


