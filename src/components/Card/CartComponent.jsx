import {useSelector} from "react-redux"
import {Image, List} from "semantic-ui-react";
import React from "react"

const CartComponent = ({title, id, image}) => {
    const addedCount = useSelector(state => state.cartReducer.items.reduce((count, book) => count + (book.id === id ? book.count : 0), 0))
    return (
        <div>
            <List selection verticalAlign='middle'>
                <List.Item>
                    <Image floated='left' avatar src={image}/>
                    <List.Content>{addedCount > 0 && `(${addedCount})`}</List.Content>
                    <List.Content floated='left'>{title}</List.Content>
                </List.Item>
            </List>
        </div>
    )
}

export default CartComponent