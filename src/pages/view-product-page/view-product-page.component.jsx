import React from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import ViewProduct from "../../components/view-product/view-product.component";
import SubscribeFooterSection from "../../components/subscribe-footer-section/subscribe-footer-section.component";


const ViewProductPage = () => {


    return (
        <div className="view-product-page">
            <NavigationBar/>
            <ViewProduct/>
            <SubscribeFooterSection/>
        </div>
    )
}

export default ViewProductPage;