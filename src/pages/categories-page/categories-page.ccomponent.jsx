import React from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import {CardList} from "../categories-page/CardList";
import {Header} from "../shop-page/Header";
import SubscribeFooterSection from "../../components/subscribe-footer-section/subscribe-footer-section.component";


const CategoriesPage = () => {
    return (
        <div className="categories-page">
            <NavigationBar/>
            <div className="container">
                <Header title={'les catégories disponibles'}/>
                <CardList />
            </div>
            <SubscribeFooterSection/>
        </div>
    )
}

export default CategoriesPage;