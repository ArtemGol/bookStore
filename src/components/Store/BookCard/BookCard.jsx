import React from "react"
import {Card, Image, Icon, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../redux/actions/cart";
import {showAlert} from "../../../redux/actions/alert";

const BookCard = (book) => {
    const {title, author, image, price, id} = book
    const addedCount = useSelector(state => state.cartReducer.items.reduce((count, book) => count + (book.id === id ? book.count : 0), 0))
    let dispatch = useDispatch()
    const addBook = () => {
        dispatch(addToCart(book))
        addedCount===0 && dispatch(showAlert('Item added to cart', 'green', 1))
    }

    return (
        <Card>
            <Image src={image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='rub'/>
                    {price}
                </a>
            </Card.Content>
            <Button onClick={addBook}>Add to Cart {addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    )
}

export default BookCard