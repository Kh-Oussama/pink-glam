import * as React from "react";
import { Card } from "../../components/products-card/index";
import { CardData } from "../shop-page/types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const List = ({ match, history }) => (
    <ul className="card-list">
        {cardData.map(card => (
            <Card
                key={card.id}
                isSelected={match.params.id === card.id}
                history={history}
                {...card}
            />
        ))}
    </ul>
);

export const CardList = () => (
    <div>
        <Switch>
            <Route exact path={["/shop/mark/category/products/:id", "/shop/mark/category/products"]} component={List} />
        </Switch>
    </div>
        );

const cardData: CardData[] = [
    // Photo by ivan Torres on Unsplash
    {
        id: "brush",
        category: "Brush",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
    },
    // Photo by Dennis Brendel on Unsplash
    {
        id: "mas",
        category: "Mascara",
        title: "Arrange Your Apple Devices for the Gram",
        pointOfInterest: 120,
        backgroundColor: "#959684"
    },
    // Photo by Alessandra Caretto on Unsplash
    {
        id: "v",
        category: "verni",
        title: "Map Apps for the Superior Mode of Transport",
        pointOfInterest: 260,
        backgroundColor: "#5DBCD2"
    },
    // Photo by Taneli Lahtinen on Unsplash
    {
        id: "font",
        category: "FOND DE TEINT",
        title: "Our Pick of Apps to Help You Escape From Apps",
        pointOfInterest: 200,
        backgroundColor: "#8F986D"
    },
    // // Photo by Simone Hutsch on Unsplash
    // {
    //     id: "d",
    //     category: "Photography",
    //     title: "The Latest Ultra-Specific Photography Editing Apps",
    //     pointOfInterest: 150,
    //     backgroundColor: "#FA6779"
    // },
    // // Photo by Siora Photography on Unsplash
    // {
    //     id: "h",
    //     category: "They're all the same",
    //     title: "100 Cupcake Apps for the Cupcake Connoisseur",
    //     pointOfInterest: 60,
    //     backgroundColor: "#282F49"
    // },
    // // Photo by Yerlin Matu on Unsplash
    // {
    //     id: "e",
    //     category: "Cats",
    //     title: "Yes, They Are Sociopaths",
    //     pointOfInterest: 200,
    //     backgroundColor: "#AC7441"
    // },
    // // Photo by Ali Abdul Rahman on Unsplash
    // {
    //     id: "b",
    //     category: "Holidays",
    //     title: "Seriously the Only Escape is the Stratosphere",
    //     pointOfInterest: 260,
    //     backgroundColor: "#CC555B"
    // }
];
