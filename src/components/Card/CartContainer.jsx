import React from "react"
import {Card} from "semantic-ui-react";
import CardMainComponent from "./Card";
import {useSelector} from "react-redux";

const CartContainer = () => {
    // const items = useSelector(state => uniqBy(state.cartReducer.items, o => o.id)) удаляет одинаковые id и возвращает 1
    const items = useSelector(state => state.cartReducer.items)
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