import React from 'react';
import {Header} from "./Header";
import CardList from "./CardList";
import './shop-page.styles.scss'
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import SubscribeFooterSection from "../../components/subscribe-footer-section/subscribe-footer-section.component";

const ShopPage = () => {
    return (
        <div className="shop-page">
            <NavigationBar/>
            <div className="container">
                <Header title={'les marques disponibles'}/>
                <CardList />
            </div>
            <SubscribeFooterSection/>
        </div>
    )
}

export default ShopPage;