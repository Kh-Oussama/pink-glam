import React from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import Header from "../../components/header/header.component";
import SelectedProductsSection from "../../components/slected-products-ssection/selected-products-section.component";
import Section from "../../components/thired-section/thired-section.component";

const HomePage = () => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Header/>
            <SelectedProductsSection/>
            <Section/>
            <h1>home page !!!!!!!!!!!!</h1>
        </React.Fragment>
    )
}

export default HomePage;