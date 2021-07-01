import React from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import {CardList} from "../categories-page/CardList";


const CategoriesPage = () => {
    return (
        <div className="categories-page">
            <NavigationBar/>
            <div className="container">
                {/*<Header/>*/}
                <CardList />
            </div>
        </div>
    )
}

export default CategoriesPage;