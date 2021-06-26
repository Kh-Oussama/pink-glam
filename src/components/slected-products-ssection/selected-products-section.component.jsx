import React from 'react';
import {Link} from "react-router-dom";

const SelectedProductsSection = () => {
    return (
        <div className="selected-product-container">
            <div className="selected-product-top">
                <h1>Selected <br/> <span>Product</span></h1>
                <div className="selected-product-top__button">
                    <Link to=''>
                        View All Product
                    </Link>
                </div>
            </div>
            <div className="selected-product-Grid">
                <div></div>
                <div className="selected-product-Grid-item">
                    <div className="image-block">
                        <img src="/images/p1.png" alt="product" className="product-image"/>
                    </div>
                    <div className="infoBlock">
                        <div className="name">
                            Armani
                        </div>
                        <div className="price">
                            1200 Da
                        </div>
                    </div>
                </div>
                <div className="selected-product-Grid-item">
                    <div className="image-block">
                        <img src="/images/p1.png" alt="product" className="product-image"/>
                    </div>
                    <div className="infoBlock">
                        <div className="name">
                            Armani
                        </div>
                        <div className="price">
                            1200 Da
                        </div>
                    </div>
                </div>
                <div className="selected-product-Grid-item">
                    <div className="image-block">
                        <img src="/images/p1.png" alt="product" className="product-image"/>
                    </div>
                    <div className="infoBlock">
                        <div className="name">
                            Armani
                        </div>
                        <div className="price">
                            1200 Da
                        </div>
                    </div>
                </div>
                <div className="selected-product-Grid-item">
                    <div className="image-block">
                        <img src="/images/p1.png" alt="product" className="product-image"/>
                    </div>
                    <div className="infoBlock">
                        <div className="name">
                            Armani
                        </div>
                        <div className="price">
                            1200 Da
                        </div>
                    </div>
                </div>
                <div className="selected-product-Grid-item">
                    <div className="image-block">
                        <img src="/images/p1.png" alt="product" className="product-image"/>
                    </div>
                    <div className="infoBlock">
                        <div className="name">
                            Armani
                        </div>
                        <div className="price">
                            1200 Da
                        </div>
                    </div>
                </div>
                <div className="selected-product-Grid-item">
                    <div className="image-block">
                        <img src="/images/p1.png" alt="product" className="product-image"/>
                    </div>
                    <div className="infoBlock">
                        <div className="name">
                            Armani
                        </div>
                        <div className="price">
                            1200 Da
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SelectedProductsSection;