import React from "react"
import {Card} from "semantic-ui-react";
import CardMainComponent from "./Card";

const CartContainer = ({items}) => {
    return (
        <Card.Group itemsPerRow={5}>
            {
                items.map(book =>
                    <CardMainComponent {...book.product}/>)
            }
        </Card.Group>
    )
}

export default CartContainer