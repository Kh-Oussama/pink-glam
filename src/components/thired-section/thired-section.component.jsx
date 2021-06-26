import React from 'react';
import {Link} from "react-router-dom";
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";

const Section = () => {
    return (
        <div className='section-container'>
            <div className="color-block"></div>

            <div className="imgBlock">
                <img src="/images/woman1.jpg" alt="woman" className="image"/>
            </div>
            <div className="titleBlock">
                <h1>Skincare</h1>
            </div>
            <div className="description">
                <h1>How to change your skincare <br/> routine for winter</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis debitis eum exercitationem libero nobis non quam repudiandae, suscipit vel! Aperiam at dolorem eligendi excepturi iure magni minus, nemo quisquam.</p>
                <div className="buuton">
                    <Link to=''>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section