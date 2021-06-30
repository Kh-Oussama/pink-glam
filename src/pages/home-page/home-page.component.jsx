import React from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import Header from "../../components/header/header.component";
import SelectedProductsSection from "../../components/slected-products-ssection/selected-products-section.component";
import Section from "../../components/thired-section/thired-section.component";
import SubscribeFooterSection from "../../components/subscribe-footer-section/subscribe-footer-section.component";

const HomePage = () => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Header/>
            <SelectedProductsSection/>
            <Section/>
            <SubscribeFooterSection/>
        </React.Fragment>
    )
}

export default HomePage;